import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    firstName: String
  },
  {
    timestamps: true
  }
);

export default mongoose.model('User', userSchema);
