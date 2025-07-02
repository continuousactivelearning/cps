// backend/models/User.ts
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  avatar: String,
});

export default mongoose.model('User', userSchema);
