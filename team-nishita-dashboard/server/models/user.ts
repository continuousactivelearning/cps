import mongoose, { Document } from 'mongoose';

interface IUser extends Document {
  username: string;
  password: string;
  role: 'user' | 'admin';
  lastLogin: Date;

  loginStreak: number;   // current streak (maintained by streakUpdate.ts)
  highestStreak: number; // max streak ever
  loginDays: Date[];     // for calendar view
  totalPoints: number;   // gamification score
  level: string;         // Learner → Master
}

const userSchema = new mongoose.Schema<IUser>({
  username:     { type: String, required: true, unique: true },
  password:     { type: String, required: true },
  role:         { type: String, enum: ['user', 'admin'], default: 'user' },
  lastLogin:    { type: Date },

  loginStreak:  { type: Number, default: 0 },
  highestStreak:{ type: Number, default: 0 },
  loginDays:    [{ type: Date }],

  totalPoints:  { type: Number, default: 0 },
  level:        { type: String, default: 'Beginner' }
});

/**
 * 🔁 Update highestStreak before saving user
 */
userSchema.pre('save', function (next) {
  const user = this as IUser;

  if (user.loginStreak > user.highestStreak) {
    user.highestStreak = user.loginStreak;
  }

  next();
});

export const User = mongoose.model<IUser>('User', userSchema);
