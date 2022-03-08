import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import config from '../common/config';
import { ErrorException, ErrorCode } from '../error';
import { IUser } from '../interfaces/IModels';

const { SECRET_KEY } = config;

export default (req: Request<IUser>, _: Response, next: NextFunction) => {
  if (req.method === 'OPTIONS') next();

  try {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) throw new ErrorException(ErrorCode.Unauthenticated);

    const decoded = jwt.verify(token, SECRET_KEY) as { _id: string };
    req.body.user = decoded;

    next();
  } catch (error) {
    next(error);
  }
};
