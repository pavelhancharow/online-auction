import express from 'express';
import cors from 'cors';
import { authRouter } from './resources/auth/authRouter';
import { corsOptions } from './common/cors';

export const app = express();

app.use(cors(corsOptions));

app.use(express.json());

app.use('/auth', authRouter);
