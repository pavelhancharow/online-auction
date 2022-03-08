import { Router } from 'express';
import { auth, getUsers, login, registration } from './authController';
import { checkLogin, checkRegistration } from '../../services/checkRequests';
import authMiddleware from '../../middleware/auth.middleware';

export const authRouter = Router();

authRouter.post('/registration', checkRegistration(), registration);
authRouter.post('/login', checkLogin(), login);
authRouter.get('/users', getUsers);
authRouter.get('/auth', authMiddleware, auth);
