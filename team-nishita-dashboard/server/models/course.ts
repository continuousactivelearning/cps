import mongoose, { Document } from 'mongoose';
interface ICourse extends Document {
  id: string;
  label: string;
  prerequisites: string[];
};

const courseSchema = new mongoose.Schema<ICourse>({
  id: { type: String, required: true, unique: true },
  label: { type: String, required: true },
  prerequisites: { type: [String], default: [] }
})

export const Course = mongoose.model('Course', courseSchema);
