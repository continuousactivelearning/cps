import mongoose, { Document } from 'mongoose';
import type { Level, Lang, Role, } from '../types/customTypes';
import type { Question, CustomQuestion, QuizInfo, CustomQuizInfo, CourseInfo } from './Basic';

export interface CourseDocument extends Document {
    courseName: string;
    description: string;
    level: Level;
    prerequisites: string[];
    createdAt: Date;
    updatedAt: Date;
}
export interface CustomQuizDocument extends Document {
    title: string;
    description?: string;
    lang: Lang;
    customQuestions: CustomQuestion[];
    createdAt: Date;
    updatedAt: Date;
    quizScore: number;
    quizLevel: Level;
    userId: mongoose.Types.ObjectId;
    isSubmitted: boolean;
    userScore: number;
    userAnswers: string[];
    submittedAt?: Date;
}

export interface QuizDocument extends Document {
    title: string;
    quizLevel: Level;
    lang: Lang;
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
    customQuizzes: CustomQuizInfo[];
    courses: CourseInfo[];
    lang?: Lang;
    recommendedPath?: {
        target: string;
        path: string[];
    };
    createdAt: Date;
    updatedAt: Date;
}