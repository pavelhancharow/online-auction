import { Router } from 'express';
import { getLots, getLotById } from './auctionController';

export const auctionRouter = Router();

auctionRouter.get('/lots', getLots);
auctionRouter.get('/lots/:lotId', getLotById);
