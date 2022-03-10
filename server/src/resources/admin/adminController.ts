import { NextFunction, Request, Response } from 'express';
import { createService } from './adminService';
import { validateRequest } from '../../services/validateRequest';

export const create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    validateRequest(req);

    const lot = await createService(req.body);
    await lot.save();

    res.status(201).send({ message: 'Lot has been success created' });
  } catch (error) {
    next(error);
  }
};
