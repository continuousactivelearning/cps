import mongoose, { Document, Schema } from 'mongoose';
import bcrypt from 'bcryptjs';
/*
avatar: "",
    masteredTopics: 3,
    totalScore: 85,
    streak: 7
*/
export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  comparePassword(candidatePassword: string): Promise<boolean>;
  avatar:string;
  masteredTopics:number;
  totalScore:number;
  streak:number;
  lastLogin:string;
}

const userSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  avatar:{type: String,required:false,default:''},
  masteredTopics:{type: Number,required:false,default:0},
  totalScore:{type: Number,required:false,default:0},
  streak:{type: Number,required:false,default:0},
  lastLogin:{type:String,required:false,default:''}
});

// Hash password before saving
userSchema.pre<IUser>('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err: any) {
    next(err);
  }
});

// Method to compare passwords
userSchema.methods.comparePassword = async function(candidatePassword: string): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password);
};

export default mongoose.model<IUser>('User', userSchema);