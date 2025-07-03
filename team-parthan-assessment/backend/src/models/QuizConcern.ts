import mongoose, { Schema, Document } from 'mongoose';

export interface IQuizConcern extends Document {
  studentId: string;
  instructorCode: string;
  topicId: string;
  pdf: Buffer;
  contentType: string;
  originalName: string;
  message: string;
  status: 'pending' | 'resolved';
}

const quizConcernSchema = new Schema<IQuizConcern>({
  studentId: { type: String, required: true },
  instructorCode: { type: String, required: true },
  topicId: { type: String, required: true },
  pdf: { type: Buffer, required: true },                     // PDF binary content
  contentType: { type: String, required: true },             // MIME type e.g., application/pdf
  originalName: { type: String, required: true },            // Original file name
  message: { type: String, required: true },
  status: { type: String, enum: ['pending', 'resolved'], default: 'pending' },
});

export default mongoose.model<IQuizConcern>('QuizConcern', quizConcernSchema);
