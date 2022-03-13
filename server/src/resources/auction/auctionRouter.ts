import { Router } from 'express';
import { getLots, getLotById, updateLotRate } from './auctionController';

export const auctionRouter = Router();

auctionRouter.get('/lots', getLots);
auctionRouter.get('/lots/:lotId', getLotById);
auctionRouter.put('/lots/:lotId', updateLotRate);
