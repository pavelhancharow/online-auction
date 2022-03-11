import { NextFunction, Request, Response } from 'express';
import { ILot } from '../../interfaces/IModels';
import { getLotByIdService, getLotsService } from './auctionService';

export const getLots = async (
  _: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const lots = await getLotsService();

    res.status(200).send(lots);
  } catch (error) {
    next(error);
  }
};

export const getLotById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const lot: ILot = await getLotByIdService(req.params.lotId);

    res.status(200).send(lot);
  } catch (error) {
    next(error);
  }
};
