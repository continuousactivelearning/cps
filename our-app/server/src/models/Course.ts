import mongoose, { Schema, Model } from "mongoose";
import { CourseDocument } from "../interfaces/Document_Interfaces";

const courseSchema = new Schema<CourseDocument>(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },
        description: {
            type: String,
            required: true,
            trim: true
        },
        level: {
            type: String,
            enum: ['beginner', 'intermediate', 'advanced'],
            required: true
        },
        prerequisites: {
            type: [String],
            required: true,
            default: []
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

// Add indexes for better query performance
courseSchema.index({ title: 1 });
courseSchema.index({ level: 1 });
courseSchema.index({ createdAt: -1 });
courseSchema.index({ updatedAt: -1 });

// Compound indexes for common query patterns
courseSchema.index({ level: 1, createdAt: -1 });
courseSchema.index({ title: 1, level: 1 });

// Text index for full-text search on title and description
courseSchema.index({
    title: 'text',
    description: 'text'
});

// Index for prerequisites array (useful for finding courses that have specific prerequisites)
courseSchema.index({ prerequisites: 1 });

const Course: Model<CourseDocument> = mongoose.model<CourseDocument>('Course', courseSchema);
export default Course;
