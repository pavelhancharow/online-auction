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
  startDate: string;
  active: boolean;
  duration: string;
  rate: number;
  currentUser: string;
}
