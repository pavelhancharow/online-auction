import { User } from '../../models';
import { Lot } from '../../models/Lot';

export const connect = async (_id: string) => {
  const user = await User.findOne({ _id });

  return {
    message: `User ${user?.firstname} ${user?.lastname} has been connected`,
  };
};

export const raiseBet = async (data: {
  lotId: string;
  userId: string;
  rate: number;
}) => {
  const { rate, userId, lotId } = data;

  const user = await User.findOne({ _id: userId });

  const lot = await Lot.findOneAndUpdate(
    { _id: lotId },
    { rate, currentUser: userId },
    { new: true }
  );

  return {
    lot,
    message: `User ${user?.firstname} ${user?.lastname} has been raise a bet`,
  };
};
