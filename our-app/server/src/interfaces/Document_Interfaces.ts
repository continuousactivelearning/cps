import mongoose, { Document } from 'mongoose';
import { Level, Language, Role, } from '../types/customTypes';
import { Question, CustomQuestion, QuizInfo, CourseInfo } from './Basic';

export interface CourseDocument extends Document {
    title: string;
    description: string;
    level: Level;
    prerequisites: string[];
    createdAt: Date;
    updatedAt: Date;
}
export interface CustomQuizDocument extends Document {
    title: string;
    description?: string;
    language: Language;
    customQuestions: CustomQuestion[];
    createdAt: Date;
    updatedAt: Date;
    quizScore: number;
}

export interface QuizDocument extends Document {
    title: string;
    level: Level;
    language: Language;
    description?: string;
    topic: {
        courseID: mongoose.Types.ObjectId;
        courseName: string;
    }
    questions: Question[];
    createdAt: Date;
    updatedAt: Date;
    quizScore: number;
}

export interface UserDocument extends Document {
    name: string;
    email: string;
    password: string;
    role: Role;
    quizzes: QuizInfo[];
    customQuizzes: QuizInfo[];
    courses: CourseInfo[];
    createdAt: Date;
    updatedAt: Date;
}