import { Document, Types } from 'mongoose';
import { IUser } from './IModels';

export type UserType = Document<unknown, IUser> &
  IUser & { _id: Types.ObjectId };
