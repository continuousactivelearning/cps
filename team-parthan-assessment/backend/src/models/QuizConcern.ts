import mongoose, { Schema, Document } from 'mongoose';

export interface IQuizConcern extends Document {
  studentId: string;
  instructorCode: string;
  topicId: string;
  pdfUrl: string;
  message: string;
  status: 'pending' | 'resolved';
}

const quizConcernSchema = new Schema<IQuizConcern>({
  studentId: { type: String, required: true },
  instructorCode: { type: String, required: true },
  topicId: { type: String, required: true },
  pdfUrl: { type: String, required: true },
  message: { type: String, required: true },
  status: { type: String, enum: ['pending', 'resolved'], default: 'pending' },
});

export default mongoose.model<IQuizConcern>('QuizConcern', quizConcernSchema);