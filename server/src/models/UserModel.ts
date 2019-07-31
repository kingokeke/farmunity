// USER MODEL FILE

import { User as UserType } from '../typings/index';
import mongoose from 'mongoose';
import { hash } from 'bcryptjs';

const userSchema = new mongoose.Schema(
  {
    firstName: String,
    password: String
  },
  {
    timestamps: true
  }
);

userSchema.pre<UserType>('save', async function(next) {
  if (this.isModified('password')) {
    try {
      this.password = await hash(this.password, 12);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
  next();
});

export default mongoose.model<UserType>('User', userSchema);
