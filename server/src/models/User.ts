import { Schema, model } from 'mongoose';
import { IUser } from '../interfaces/IModels';

const schema = new Schema<IUser>({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  lots: [{ type: String }],
  roles: [{ type: String, ref: 'Role' }],
});

export const User = model<IUser>('User', schema);
