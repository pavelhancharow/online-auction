import jwt from 'jsonwebtoken';
import { Types } from 'mongoose';
import config from '../common/config';

const { SECRET_KEY } = config;

export const generateAccessToken = (id: Types.ObjectId, roles: string[]) => {
  const payload = { id, roles };
  return jwt.sign(payload, SECRET_KEY, { expiresIn: '24h' });
};
