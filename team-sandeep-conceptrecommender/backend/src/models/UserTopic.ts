import mongoose, { Document, Schema } from 'mongoose';

export interface IUserTopic extends Document {
  userEmail: string;
  topicName: string; // Use topicName instead of topicId
  status: 'selected' | 'in-progress' | 'completed' | 'mastered';
  progress: number;
  lastAccessed: Date;
  createdAt: Date;
  updatedAt: Date;
}

const userTopicSchema = new Schema<IUserTopic>(
  {
    userEmail: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    topicName: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['selected', 'in-progress', 'completed', 'mastered'],
      default: 'selected',
    },
    progress: {
      type: Number,
      default: 0,
      min: 0,
      max: 100,
    },
    lastAccessed: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

// Create a compound index to ensure a user can't select the same topic twice
userTopicSchema.index({ userEmail: 1, topicName: 1 }, { unique: true });

export const UserTopic = mongoose.model<IUserTopic>('UserTopic', userTopicSchema);