import { NextFunction, Request, Response } from 'express';
import { ErrorMessage } from '../error';

export default function (req: Request, res: Response, next: NextFunction) {
  const path = req.path.split('/')[1];

  switch (path) {
    case 'auth':
      next();
      break;
    case 'admin':
      next();
      break;
    case 'auction':
      next();
      break;
    case 'lot':
      next();
      break;
    default:
      res.status(400).send({ message: ErrorMessage.InvalidPath });
      break;
  }
}
