import mongoose from 'mongoose';
import type { OptionTag, CourseStatus } from '../types/customTypes';

export interface Option {
    optionText: string;
    optionTag: OptionTag;
}

export interface Question {
    questionText: string;
    options: Option[];
    correctOption: OptionTag;
    score: number;
}

export interface CustomQuestion {
    questionText: string;
    options: Option[];
    correctOption: OptionTag;
    score: number;
    topic: {
        courseID: mongoose.Types.ObjectId;
        courseName: string;
    }
}

export interface QuizInfo {
    quizId: mongoose.Types.ObjectId;
    userScore: number;
    userAnswers: OptionTag[];
}

export interface CourseInfo {
    courseId: mongoose.Types.ObjectId;
    courseName: string;
    status: CourseStatus;
    result: number;
}