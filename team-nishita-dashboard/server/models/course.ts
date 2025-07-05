import mongoose, { Document } from 'mongoose';
interface ICourse extends Document {
  courseId: number;
  courseName: string;
  slug: string;
  syllabusPDF: string;
  materialPDF: string;
  playlistURL: string;
  createdAt: Date;
  updatedAt: Date;
};


const courseSchema = new mongoose.Schema<ICourse>({
  courseId: { type: Number, required: true, unique: true },
  courseName: { type: String, required: true, unique: true },
  slug: { type: String, required: true },
  syllabusPDF: { type: String, required: true },
  materialPDF: { type: String, required: true },
  playlistURL: { type: String, required: true },
}, { timestamps: true }
);

export const Course = mongoose.model('Course', courseSchema);
