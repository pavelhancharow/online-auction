import { Router } from 'express';
import {
  getLots,
  getLotById,
  removeLotsById,
  setActiveLotsById,
} from './auctionController';

export const auctionRouter = Router();

auctionRouter.get('/lots', getLots);
auctionRouter.get('/lots/:lotId', getLotById);
auctionRouter.delete('/lots', removeLotsById);
auctionRouter.put('/lots', setActiveLotsById);
