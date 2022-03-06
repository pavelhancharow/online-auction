import { Router } from 'express';
import { getUsers, login, registration } from './authController';
import { checkLogin, checkRegistration } from '../../services/checkRequests';

export const authRouter = Router();

authRouter.post('/registration', checkRegistration(), registration);
authRouter.post('/login', checkLogin(), login);
authRouter.get('/users', getUsers);
