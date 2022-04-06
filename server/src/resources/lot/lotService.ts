/* eslint-disable max-len */
import { User } from '../../models';
import { Lot } from '../../models/Lot';
import { sendEmail } from '../../services/sendEmail';

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

export const finishAuction = async (data: { lotId: string }) => {
  const { lotId } = data;

  const lot = await Lot.findOneAndUpdate(
    { _id: lotId },
    { active: false, completed: true },
    { new: true }
  );

  const user = await User.findOneAndUpdate(
    { _id: lot?.currentUser },
    { $push: { lots: lotId } },
    { new: true }
  );

  if (user) {
    sendEmail(user.email, lotId);
  }

  return {
    lot,
    message: `Auction finished. The winner is ${user?.firstname} ${user?.lastname}`,
  };
};
