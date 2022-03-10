import { ErrorCode, ErrorException } from '../../error';
import { Lot } from '../../models/Lot';

export const getLotsService = async () => {
  const lots = await Lot.find();
  if (!lots) throw new ErrorException(ErrorCode.UserNotFound);

  return lots;
};
