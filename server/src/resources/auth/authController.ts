import { NextFunction, Request, Response } from 'express';
import {
  authService,
  getUsersService,
  loginService,
  registrationService,
  resetService,
} from './authService';
import { IUser } from '../../interfaces/IModels';
import { validateRequest } from '../../services/validateRequest';

export const registration = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    validateRequest(req);

    const user = await registrationService(req.body);
    await user.save();

    res.status(201).send({ message: 'User has been success created' });
  } catch (error) {
    next(error);
  }
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    validateRequest(req);

    const user = await loginService(req.body);
    const { token } = user;
    const { _id, firstname, lastname, phone, email, roles, lots } = user.user;

    res.status(200).send({
      token,
      user: { id: _id, firstname, lastname, phone, email, roles, lots },
    });
  } catch (error) {
    next(error);
  }
};

export const auth = async (
  req: Request<IUser>,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await authService(req.body.user.id);
    const { token } = user;
    const { _id, firstname, lastname, phone, email, roles, lots } = user.user;

    res.status(200).send({
      token,
      user: { id: _id, firstname, lastname, phone, email, roles, lots },
    });
  } catch (error) {
    next(error);
  }
};

export const getUsers = async (
  _: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await getUsersService();

    res.status(200).send(users);
  } catch (error) {
    next(error);
  }
};

export const reset = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    validateRequest(req);

    const user = await resetService(req.body);
    await user.save();

    res.status(200).send({ message: 'Password has been success update' });
  } catch (error) {
    next(error);
  }
};
