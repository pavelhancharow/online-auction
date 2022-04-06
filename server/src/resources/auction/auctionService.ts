import cron from 'node-cron';
import { ErrorCode, ErrorException } from '../../error';
import { User } from '../../models';
import { Lot } from '../../models/Lot';
import { filterLots } from '../../services/filterLots';
import { getTime } from '../../services/getTime';
import { sendEmail } from '../../services/sendEmail';

export const getLotsService = async () => {
  const lots = await Lot.find();
  if (!lots) throw new ErrorException(ErrorCode.LotNotFound);

  return filterLots(lots);
};

export const getLotByIdService = async (_id: string) => {
  const lot = await Lot.findOne({ _id });
  if (!lot) throw new ErrorException(ErrorCode.LotNotFound);

  return lot;
};

export const removeLotsByIdService = async (data: string[]) => {
  const result = await Lot.deleteMany({ _id: { $in: data } });

  if (result.deletedCount !== data.length)
    throw new ErrorException(ErrorCode.LotNotFound);

  const lots = await Lot.find();
  if (!lots) throw new ErrorException(ErrorCode.LotNotFound);

  return filterLots(lots);
};

export const setActiveLotsByIdService = async (data: string[]) => {
  const result = await Lot.updateMany(
    { _id: { $in: data } },
    { $set: { active: true } }
  );

  if (result.matchedCount !== data.length)
    throw new ErrorException(ErrorCode.LotNotFound);

  const lots = await Lot.find();
  if (!lots) throw new ErrorException(ErrorCode.LotNotFound);

  return filterLots(lots);
};

export const cronJobService = cron.schedule('* * * * *', async () => {
  const time = getTime();

  await Lot.updateMany({ start: { $in: time } }, { $set: { active: true } });

  await Lot.updateMany(
    { finish: { $in: time } },
    { $set: { active: false, completed: true } }
  );

  const lots = await Lot.find({ finish: time });

  if (lots.length) {
    lots.forEach(async (item) => {
      if (item.currentUser) {
        const user = await User.findOneAndUpdate(
          { _id: item.currentUser },
          { $push: { lots: item._id } },
          { new: true }
        );

        if (user) {
          sendEmail(user.email, item._id);
        }
      }
    });
  }
});
