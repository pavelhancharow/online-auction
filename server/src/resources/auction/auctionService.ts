import { ErrorCode, ErrorException } from '../../error';
import { Lot } from '../../models/Lot';

export const getLotsService = async () => {
  const lots = await Lot.find();
  if (!lots) throw new ErrorException(ErrorCode.LotNotFound);

  return lots;
};

export const getLotByIdService = async (_id: string) => {
  const lot = await Lot.findOne({ _id });
  if (!lot) throw new ErrorException(ErrorCode.LotNotFound);

  return lot;
};
