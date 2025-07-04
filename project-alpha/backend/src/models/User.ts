import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email:    { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role:     { type: String, enum: ['admin', 'student'], default: 'student' },
  avatar:   { type: String }, // profile picture (base64 or url)
  topics:   [{ type: String }],
  quizScores: [{
    topic: String,
    score: Number,
    date: { type: Date, default: Date.now }
  }],
  prerequisites: [{
    topic: String,
    prerequisites: [String]
  }],
  learningPaths: [{
    topic: String,
    weeks: Number,
    level: String,
    durationPerDay: String,
    path: [{}], // Array of week/task objects
    generatedAt: { type: Date, default: Date.now }
  }]
});

export default mongoose.model('User', userSchema); 