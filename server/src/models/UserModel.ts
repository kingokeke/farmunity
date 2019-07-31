// USER MODEL FILE

import { User as UserType } from '../typings/index';
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    firstName: String,
    password: String
  },
  {
    timestamps: true
  }
);

export default mongoose.model<UserType>('User', userSchema);
