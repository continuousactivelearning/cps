import { Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs';
import { IUser } from '../types';

const userSchema = new Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 6, select: false },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
    learningHistory: [{
        concept: { type: Schema.Types.ObjectId, ref: 'Concept' },
        completedAt: { type: Date, default: Date.now },
        masteryLevel: { type: Number, default: 0 }
    }],
}, { timestamps: true });

userSchema.pre<IUser>('save', async function (next) {
    if (!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

export default model<IUser>('User', userSchema);