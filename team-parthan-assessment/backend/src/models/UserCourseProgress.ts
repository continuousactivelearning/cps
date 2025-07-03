import mongoose, { Schema } from "mongoose";

interface Topic {
  id: string;
  name: string;
  prerequisites: string[];
  status: 'not-started' | 'in-progress' | 'mastered' | 'ready';
  score?: number;
  totalQuestions?: number;
  attempts?: number;
  bestScore?: number;
  lastAttempt?: Date;
}

export interface IUserCourseProgress extends Document {
  userId: string;
  topics: Topic[];
}

const topicSchema = new Schema<Topic>({
  id: { type: String, required: true },
  name: { type: String, required: true },
  prerequisites: [String],
  status: {
    type: String,
    enum: ['not-started', 'in-progress', 'mastered', 'ready'],
    default: 'not-started',
  },
  score: Number,
  totalQuestions: Number,
  attempts: Number,
  bestScore: Number,
  lastAttempt: Date,
});

const userCourseSchema = new Schema<IUserCourseProgress>({
  userId: { type: String, required: true },
  topics: { type: [topicSchema], default: [] },
});

export default mongoose.model<IUserCourseProgress>('UserCourseProgress', userCourseSchema);