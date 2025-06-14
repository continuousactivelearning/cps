import { Document, Types } from 'mongoose';

export interface IConcept extends Document {
    title: string;
    description: string;
    contentBlocks: { type: string, data: string }[];
    prerequisites: Types.ObjectId[];
}

export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    role: 'user' | 'admin';
    learningHistory: {
        concept: Types.ObjectId;
        completedAt: Date;
        masteryLevel: number;
    }[];
    isModified: (field: string) => boolean;
}