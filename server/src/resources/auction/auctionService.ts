import { ErrorCode, ErrorException } from '../../error';
import { Lot } from '../../models/Lot';
import { filterLots } from '../../services/filterLots';

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
