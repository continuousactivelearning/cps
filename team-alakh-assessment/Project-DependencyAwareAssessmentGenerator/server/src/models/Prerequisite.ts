import mongoose from 'mongoose';

const prereqSchema = new mongoose.Schema({
  topic: { type: String, required: true, unique: true },
  prerequisites: { type: [String], required: true },
});

export default mongoose.model('Prerequisite', prereqSchema);
