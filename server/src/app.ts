import express from 'express';
import cors from 'cors';
import { corsOptions } from './common/cors';
import { adminRouter, auctionRouter, authRouter } from './resources';
import errorMiddleware from './middleware/error.middleware';

export const app = express();

app.use(cors(corsOptions));

app.use(express.json());

app.use('/auth', authRouter);
app.use('/admin', adminRouter);
app.use('/auction', auctionRouter);

app.use(errorMiddleware);
