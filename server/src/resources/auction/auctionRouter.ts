import { Router } from 'express';
import { getLots } from './auctionController';

export const auctionRouter = Router();

auctionRouter.get('/list', getLots);
