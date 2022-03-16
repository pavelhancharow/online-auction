import { aWss } from '../../app';
import { ILot } from '../../interfaces/IModels';
import { CustomWS, DataAction, DataActionTypes } from '../../interfaces/IWS';
import { connect, raiseBet } from './lotService';

interface IResult {
  message: string;
  lot?: ILot | null;
}

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
      result;
      break;
  }

  const message = JSON.stringify(result);

  aWss.clients.forEach((client: CustomWS) => {
    if (client.id === payload.lotId) client.send(message);
  });
};

export const connectionHandler = async (ws: CustomWS, data: DataAction) => {
  ws.id = data.payload.lotId;
  await broadcastConnection(ws, data);
};
