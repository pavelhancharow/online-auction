import { Document, Types } from 'mongoose';

export interface IUser extends Document {
  firstname: string;
  lastname: string;
  phone: string;
  email: string;
  password: string;
  lots: string[];
  roles: string[];
}

export interface IRole extends Document {
  value: string;
}

export interface ILot extends Document {
  title: string;
  description: string;
  img: string;
  start: typeof Date;
  finish: typeof Date;
  active: boolean;
  completed: boolean;
  rate: number;
  currentUser: string;
}
