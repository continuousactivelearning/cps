// src/types/index.ts
import { Document } from 'mongoose';

export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    isModified: (field: string) => boolean;
}