import cron from 'node-cron';
import { aWss } from '../../app';
import { ILot } from '../../interfaces/IModels';
import { CustomWS, DataAction, DataActionTypes } from '../../interfaces/IWS';
import { User } from '../../models';
import { Lot } from '../../models/Lot';
import { connect, finishAuction, raiseBet } from './lotService';

interface IResult {
  message: string;
  lot?: ILot | null;
}

const broadcastHandler = (result: IResult, lotId: string) => {
  const message = JSON.stringify(result);

  aWss.clients.forEach((client: CustomWS) => {
    if (client.id === lotId) client.send(message);
  });
};

const broadcastConnection = async (_: CustomWS, data: DataAction) => {
  const { type, payload } = data;
  let result: IResult = { message: '' };

  switch (type) {
    case DataActionTypes.CONNECTION:
      result = await connect(payload.userId);
      break;
    case DataActionTypes.MESSAGE:
      result = await raiseBet({ ...payload, rate: payload.rate! });
      break;
    default:
      result = await finishAuction({ lotId: payload.lotId });
      break;
  }

  broadcastHandler(result, payload.lotId);

  const schedule = cron.schedule('*/1 * * * *', async () => {
    const lot = await Lot.findOne({ _id: payload.lotId });

    if (lot && !lot.active) {
      lot.active = false;
      lot.completed = true;
      await lot.save();

      let report = 'Auction finished. ';

      if (lot.currentUser) {
        const user = await User.findById(lot.currentUser);

        report += `The winner is ${user?.firstname} ${user?.lastname}`;
      } else {
        report += 'No winner';
      }

      const res = { lot, message: report };

      broadcastHandler(res, payload.lotId);
      schedule.stop();
    }
  });
};

export const connectionHandler = async (ws: CustomWS, data: DataAction) => {
  ws.id = data.payload.lotId;
  await broadcastConnection(ws, data);
};
