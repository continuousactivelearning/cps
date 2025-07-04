import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
  sender: { type: String, enum: ['student', 'admin'], required: true },
  senderId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  message: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  isRead: { type: Boolean, default: false },
});

const chatSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  adminId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Will be set when admin responds
  subject: { type: String, required: true },
  status: { type: String, enum: ['open', 'in_progress', 'closed'], default: 'open' },
  messages: [messageSchema],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  lastMessageAt: { type: Date, default: Date.now },
});

// Update the updatedAt field whenever a message is added
chatSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  if (this.messages && this.messages.length > 0) {
    this.lastMessageAt = this.messages[this.messages.length - 1].timestamp;
  }
  next();
});

export default mongoose.model('Chat', chatSchema); 