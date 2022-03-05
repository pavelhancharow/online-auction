import { Router } from 'express';
import { controller } from './authController';

export const authRouter = Router();

authRouter.post('/registration', controller.registration);
authRouter.post('/login', controller.login);
authRouter.get('/users', controller.getUsers);
