import mongoose, { Schema, Model } from "mongoose";
import { CustomQuizDocument } from "../interfaces/Document_Interfaces";

const customQuizSchema = new Schema<CustomQuizDocument>(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },
        description: {
            type: String,
            trim: true
        },
        language: {
            type: String,
            enum: ['cpp', 'python', 'javascript', 'java'],
            required: true
        },
        customQuestions: [
            {
                questionText: {
                    type: String,
                    required: true
                },
                options: [
                    {
                        optionText: {
                            type: String,
                            required: true
                        },
                        optionTag: {
                            type: String,
                            enum: ['A', 'B', 'C', 'D'],
                            required: true
                        }
                    }
                ],
                correctOption: {
                    type: String,
                    enum: ['A', 'B', 'C', 'D'],
                    required: true
                },
                level: {
                    type: String,
                    enum: ['beginner', 'intermediate', 'advanced'],
                    required: true
                },
                score: {
                    type: Number,
                    default: 1,
                    min: 0
                },
                topic: {
                    courseID: {
                        type: Schema.Types.ObjectId,
                        ref: 'Course',
                        default: null
                    },
                    courseName: {
                        type: String,
                        default: 'basic',
                        trim: true
                    }
                }
            }
        ],
        quizScore: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

// Add indexes for better query performance
customQuizSchema.index({ language: 1 });
customQuizSchema.index({ title: 1 });
customQuizSchema.index({ createdAt: -1 });
customQuizSchema.index({ quizScore: -1 });
customQuizSchema.index({ 'customQuestions.level': 1 });
customQuizSchema.index({ 'customQuestions.topic.courseID': 1 });
customQuizSchema.index({ 'customQuestions.topic.courseName': 1 });

// Compound indexes for common query patterns
customQuizSchema.index({ language: 1, createdAt: -1 });
customQuizSchema.index({ 'customQuestions.topic.courseID': 1, 'customQuestions.level': 1 });
customQuizSchema.index({ language: 1, quizScore: -1 });

// Text index for full-text search on title and description
customQuizSchema.index({
    title: 'text',
    description: 'text',
    'customQuestions.topic.courseName': 'text'
});

const CustomQuiz: Model<CustomQuizDocument> = mongoose.model<CustomQuizDocument>(
    "CustomQuiz",
    customQuizSchema
);

export default CustomQuiz;