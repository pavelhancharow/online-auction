import { Router } from 'express';
import { checkLot } from '../../services/checkRequests';
import { create } from './adminController';

export const adminRouter = Router();

adminRouter.post('/create', checkLot(), create);
