import { Schema, model } from 'mongoose';
import { ILot } from '../interfaces/IModels';

const schema = new Schema<ILot>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  img: { type: String, required: true },
  start: { type: String, required: true },
  rate: { type: Number, required: true },
  active: { type: Boolean, default: false },
  completed: { type: Boolean, default: false },
  currentUser: { type: String, default: '' },
});

export const Lot = model<ILot>('Lot', schema);
