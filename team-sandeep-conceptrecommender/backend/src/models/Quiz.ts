import mongoose, { Document, Schema } from 'mongoose';

export interface IQuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number; // index of the correct option
  explanation?: string;
}

export interface IQuiz extends Document {
  topicName: string; // Use topicName instead of topicId
  questions: IQuizQuestion[];
  passingScore: number;
  timeLimit: number; // in minutes
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  createdAt: Date;
  updatedAt: Date;
}

const quizQuestionSchema = new Schema<IQuizQuestion>({
  question: {
    type: String,
    required: true,
  },
  options: [{
    type: String,
    required: true,
  }],
  correctAnswer: {
    type: Number,
    required: true,
  },
  explanation: {
    type: String,
  },
});

const quizSchema = new Schema<IQuiz>(
  {
    topicName: {
      type: String,
      required: true,
    },
    questions: [quizQuestionSchema],
    passingScore: {
      type: Number,
      required: true,
      default: 70, // 70% is passing
    },
    timeLimit: {
      type: Number,
      required: true,
      default: 30, // 30 minutes
    },
    difficulty: {
      type: String,
      enum: ['beginner', 'intermediate', 'advanced'],
      required: true,
    },
  },
  { timestamps: true }
);

quizSchema.index({ topicName: 1 }, { unique: true });

export const Quiz = mongoose.model<IQuiz>('Quiz', quizSchema);
