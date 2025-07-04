/*Author: Nakshatra Bhandary on 17/6/25*/
/* Modified on 23/6/25 by Nakshatra to add forgot password*/
import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  email: string;
  password: string;
  resetCode?: String,
  resetCodeExpires?: Date
}

const UserSchema = new Schema<IUser>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  resetCode: { type: String },
  resetCodeExpires: { type: Date },
});

export default mongoose.model<IUser>('User', UserSchema);
