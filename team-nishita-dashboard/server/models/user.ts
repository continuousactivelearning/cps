import mongoose, { Document } from 'mongoose';
interface IUser extends Document {
  username: string;
  password: string;
  role: 'admin' | 'user'; // Assuming roles are either 'admin' or 'user'
};

const userSchema = new mongoose.Schema<IUser>({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'user'], default: 'user' }
})

export const User = mongoose.model('User', userSchema);
