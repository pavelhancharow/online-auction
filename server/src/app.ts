import express from 'express';
import expressWs from 'express-ws';
import cors from 'cors';
import { corsOptions } from './common/cors';
import { adminRouter, auctionRouter, authRouter } from './resources';
import errorMiddleware from './middleware/error.middleware';
import lotRouter from './resources/lot/lotRouter';

export const { app, getWss } = expressWs(express());
export const aWss = getWss();

app.use(cors(corsOptions));

app.use(express.json());

app.use('/auth', authRouter);
app.use('/admin', adminRouter);
app.use('/auction', auctionRouter);

app.ws('/lot', lotRouter);

app.use(errorMiddleware);
