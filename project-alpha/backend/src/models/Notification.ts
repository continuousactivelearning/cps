import mongoose from 'mongoose';

const notificationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, enum: ['chat_response', 'system', 'quiz_result'], required: true },
  title: { type: String, required: true },
  message: { type: String, required: true },
  isRead: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  relatedData: { type: mongoose.Schema.Types.Mixed }, // For storing additional data like chatId, quizId, etc.
});

export default mongoose.model('Notification', notificationSchema); 