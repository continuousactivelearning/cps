import { Schema, model, Document } from 'mongoose';
import bcrypt from 'bcryptjs';

interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    role: string;
}

const userSchema = new Schema<IUser>({
    name: {
        type: String,
        required: [true, 'Please provide a name.'],
    },
    email: {
        type: String,
        required: [true, 'Please provide an email.'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Please provide a password.'],
        minlength: 6,
        select: false,
    },
}, {
    timestamps: true,
});

userSchema.pre<IUser>('save', async function (next) {
    if (!this.isModified('password')) {
        return next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

export default model<IUser>('User', userSchema);