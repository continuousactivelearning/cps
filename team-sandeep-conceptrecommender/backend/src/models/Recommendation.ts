import mongoose from 'mongoose';

const recommendationSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  recommendedTopics: [{
    topicId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Topic',
      required: true
    },
    reason: String,
    confidence: Number,
    estimatedDifficulty: Number,
    prereqsMet: Boolean,
    priority: {
      type: String,
      enum: ['high', 'medium', 'low'],
      default: 'medium'
    }
  }],
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

export const Recommendation = mongoose.model('Recommendation', recommendationSchema); 