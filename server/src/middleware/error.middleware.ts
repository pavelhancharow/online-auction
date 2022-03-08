import { NextFunction, Request, Response } from 'express';
import { ErrorCode, ErrorException, ErrorMessage } from '../error';
import { IError } from '../interfaces/IError';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (err: Error, _: Request, res: Response, next: NextFunction) => {
  if (err instanceof ErrorException) {
    res
      .status(err.status)
      .send({ ...err, message: ErrorMessage[`${err.name}`] });
  } else {
    res.status(500).send({ code: ErrorCode.UnknownError } as IError);
  }
};
