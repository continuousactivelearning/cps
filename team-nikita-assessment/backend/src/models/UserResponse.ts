/* AUTHOR - NIKITA S RAJ KAPINI (CREATED ON 13/06/2025) */
import mongoose from 'mongoose';

const UserResponseSchema = new mongoose.Schema({
  userId: { type: String, required: false }, // optional if anonymous
  assessmentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Assessment', required: true },
  targetTopic: { type: String, required: true },
  responses: [
    {
      questionText: { type: String, required: true },
      userAnswer: { type: [String], required: true },
      correctAnswer: { type: [String], required: true },
      isCorrect: { type: Boolean, required: true },
      topic_tested: { type: String, required: true },
    }
  ],
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('UserResponse', UserResponseSchema);


