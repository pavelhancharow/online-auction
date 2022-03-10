import { NextFunction, Request, Response } from 'express';
import { getLotsService } from './auctionService';

export const getLots = async (
  _: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await getLotsService();

    res.status(200).send(users);
  } catch (error) {
    next(error);
  }
};
