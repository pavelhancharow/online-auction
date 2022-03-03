import { Schema, model } from 'mongoose';

const Admin = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  roles: [{ type: String, ref: 'Role' }],
});

export const AdminModel = model('Admin', Admin);
