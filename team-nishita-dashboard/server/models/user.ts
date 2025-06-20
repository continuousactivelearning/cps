import mongoose, { Document } from 'mongoose';
interface IUser extends Document {
  username: string;
  password: string;
  role?: string; // Optional field for user role
};

const userSchema = new mongoose.Schema<IUser>({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['user', 'admin'], default: 'user' }
})

export const User = mongoose.model('User', userSchema);
