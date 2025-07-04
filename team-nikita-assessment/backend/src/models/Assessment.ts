/* AUTHOR - NIKITA S RAJ KAPINI (CREATED ON 10/06/2025) */
/* AUTHOR - NIKITA S RAJ KAPINI (UPDATED ON 13/06/2025) */
/* AUTHOR - NIKITA S RAJ KAPINI (UPDATED ON 25/06/2025) */
import mongoose, { Schema, Document } from 'mongoose';

interface Question {
  question: string;
  options: string[];
  correct_answer: string[]; // Can also be string | string[] if necessary
  type: string;
  topic_tested: [{ type: String }],
  concept_area: [{ type: String }],
  difficulty: string;
  insight_if_wrong?: string;
  estimated_time_min: number;
}

export interface IAssessment extends Document {
  targetTopic: string;
  prerequisites: string[];
  questions: Question[];
}

const QuestionSchema: Schema = new Schema({
  question: { type: String, required: true },
  options: { type: [String], required: true },
  correct_answer: { type: [String], required: true },
  type: { type: String, required: true },
  topic_tested: { type: [String], required: true },
  concept_area: { type: [String], required: true },
  difficulty: { type: String, required: true },
  insight_if_wrong: { type: String, required: false },
  estimated_time_min: { type: Number, required: true },
});

const AssessmentSchema: Schema = new Schema({
  targetTopic: { type: String, required: true },
  prerequisites: { type: [String], required: true },
  questions: { type: [QuestionSchema], required: true },
});

export default mongoose.model<IAssessment>('Assessment', AssessmentSchema);
