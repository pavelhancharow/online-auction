import { Schema, model } from 'mongoose';
import { IUser } from '../interfaces/IUser';

const schema = new Schema<IUser>({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  roles: [{ type: String, ref: 'Role' }],
});

export const User = model<IUser>('User', schema);
