import mongoose, { Schema, Model } from "mongoose";
import { QuizDocument } from "../interfaces/Document_Interfaces";

const quizSchema = new Schema<QuizDocument>(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },
        quizLevel: {
            type: String,
            enum: ['beginner', 'intermediate', 'advanced'],
            required: true
        },
        lang: {
            type: String,
            enum: ['cpp', 'python', 'javascript', 'java'],
            required: true
        },
        description: {
            type: String,
            trim: true
        },
        topic: {
            courseID: {
                type: Schema.Types.ObjectId,
                ref: 'Course',
                default: null,
            },
            courseName: {
                type: String,
                default: 'basic',
                trim: true
            }
        },
        questions: [
            {
                questionText: { type: String, required: true },
                options: [
                    {
                        optionText: { type: String, required: true },
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
                score: {
                    type: Number,
                    default: 1,
                    min: 0
                }
            }
        ],
        quizScore: {
            type: Number,
            default: 0,
            min: 0
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

// Add indexes for better query performance
quizSchema.index({ quizLevel: 1 });
quizSchema.index({ lang: 1 });
quizSchema.index({ 'topic.courseID': 1 });
quizSchema.index({ 'topic.courseName': 1 });
quizSchema.index({ title: 1 });
quizSchema.index({ createdAt: -1 });
quizSchema.index({ quizScore: -1 });

// Compound indexes for common query patterns
quizSchema.index({ quizLevel: 1, lang: 1 });
quizSchema.index({ 'topic.courseID': 1, quizLevel: 1 });
quizSchema.index({ lang: 1, quizLevel: 1, createdAt: -1 });
quizSchema.index({ 'topic.courseName': 1, quizLevel: 1 });

// Text index for full-text search on title and description
quizSchema.index({
    title: 'text',
    description: 'text',
    'topic.courseName': 'text'
});

const Quiz: Model<QuizDocument> = mongoose.model<QuizDocument>("Quiz", quizSchema);

export default Quiz;
