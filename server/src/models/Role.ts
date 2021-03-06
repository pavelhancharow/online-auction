import { Schema, model } from 'mongoose';
import { IRole } from '../interfaces/IModels';

const schema = new Schema<IRole>({
  value: { type: String, required: true, default: 'USER' },
});

export const Role = model<IRole>('Role', schema);
