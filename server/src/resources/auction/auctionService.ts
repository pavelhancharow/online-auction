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

export const updateLotRateService = async (
  _id: string,
  body: { rate: number; userId: string }
) => {
  const { rate, userId } = body;

  const lot = await Lot.findOneAndUpdate(
    { _id },
    { rate, currentUser: userId },
    { new: true }
  );

  if (!lot) throw new ErrorException(ErrorCode.LotNotFound);

  return lot;
};
