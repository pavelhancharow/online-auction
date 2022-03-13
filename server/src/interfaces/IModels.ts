import { Document } from 'mongoose';

export interface IUser extends Document {
  firstname: string;
  lastname: string;
  phone: string;
  email: string;
  password: string;
  roles: string[];
}

export interface IRole extends Document {
  value: string;
}

export interface ILot extends Document {
  title: string;
  description: string;
  img: string;
  duration: string;
  rate: number;
  users: { userId: string }[];
  currentUser: string;
}
