import { Request, Response } from 'express';
import { User } from '../../models/User';
import { validateRequest } from '../../services/validateRequest';
import { loginService, registrationService } from './authService';
import { setResponse } from '../../services/setResponse';

export const registration = async (req: Request, res: Response) => {
  try {
    const isValidate = validateRequest(req, res);

    if (isValidate?.status) return isValidate;

    const user = await registrationService(req.body);

    if (!user) return setResponse(res, 400, 'User already exists');

    await user.save();
    return setResponse(res, 200, 'User has been success created');
  } catch (error) {
    return setResponse(res, 400, 'Registration error');
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const isValidate = validateRequest(req, res);
    if (isValidate?.status) return isValidate;

    const user = await loginService(req.body);

    if (user === null) return setResponse(res, 400, 'User not found');

    if (!user) return setResponse(res, 400, 'Wrong password entered');

    return res.json({ token: user });
  } catch (error) {
    return setResponse(res, 400, 'Login error');
  }
};

export const getUsers = async (_: Request, res: Response) => {
  try {
    const users = await User.find();

    return res.json(users);
  } catch (error) {
    return res.status(400).json({ message: 'get Users error' });
  }
};
