import { Schema, model } from 'mongoose';
import { ILot } from '../interfaces/IModels';

const schema = new Schema<ILot>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  img: { type: String, required: true },
  duration: { type: String, required: true },
  rate: { type: Number, required: true },
  currentUser: { type: String },
});

export const Lot = model<ILot>('Lot', schema);
