import mongoose, { Schema, Model } from "mongoose";
import { UserDocument } from "../interfaces/Document_Interfaces";

const userSchema = new Schema<UserDocument>(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        password: {
            type: String,
            required: true
        },
        role: {
            type: String,
            enum: ['user', 'admin'],
            default: 'user'
        },
        quizzes: [
            {
                quizId: {
                    type: Schema.Types.ObjectId,
                    ref: 'Quiz',
                    required: true
                },
                userScore: {
                    type: Number,
                    default: 0
                },
                userAnswers: [
                    {
                        type: String,
                        enum: ['A', 'B', 'C', 'D']
                    }
                ]
            }
        ],
        customQuizzes: [
            {
                quizId: {
                    type: Schema.Types.ObjectId,
                    ref: 'Quiz',
                    required: true
                },
                userScore: {
                    type: Number,
                    default: 0
                },
                userAnswers: [
                    {
                        type: String,
                        enum: ['A', 'B', 'C', 'D']
                    }
                ]
            }
        ],
        courses: [
            {
                courseId: {
                    type: Schema.Types.ObjectId,
                    ref: 'Course',
                    required: true
                },
                courseName: {
                    type: String,
                    required: true
                },
                status: {
                    type: String,
                    enum: ['enrolled', 'completed', 'in-progress']
                },
                result: {
                    type: Number,
                    default: 0
                }
            }
        ]
    },
    {
        timestamps: true,
        versionKey: false
    }
);

// Add indexes for better query performance
// Note: email index is automatically created by unique: true property
userSchema.index({ role: 1 }); // Index for role-based queries
userSchema.index({ 'courses.courseId': 1 }); // Index for course-related queries
userSchema.index({ 'courses.status': 1 }); // Index for course status queries
userSchema.index({ 'quizzes.quizId': 1 }); // Index for quiz-related queries
userSchema.index({ 'customQuizzes.quizId': 1 }); // Index for custom quiz queries
userSchema.index({ createdAt: -1 }); // Index for sorting by creation date
userSchema.index({ 'courses.courseName': 1 }); // Index for course name searches

// Compound indexes for common query patterns
userSchema.index({ role: 1, createdAt: -1 }); // Admin queries with date sorting
userSchema.index({ 'courses.status': 1, 'courses.result': -1 }); // Course progress queries

const User: Model<UserDocument> = mongoose.model<UserDocument>("User", userSchema);
export default User;