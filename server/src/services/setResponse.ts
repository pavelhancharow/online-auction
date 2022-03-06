import { Response } from 'express';

export const setResponse = (res: Response, code: number, message: string) => {
  return res.status(code).json({ message });
};
