import mongoose from "mongoose";

const quizResultSchema = new mongoose.Schema({
  username: { type: String, required: true },
  topic: { type: String, required: true },
  score: { type: Number, required: true },
  mastery: { type: Number, required: true },
  answers: [String],
  correctAnswers: [String],
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("QuizResult", quizResultSchema);
