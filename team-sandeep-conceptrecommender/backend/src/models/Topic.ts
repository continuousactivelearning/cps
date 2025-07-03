import mongoose, { Schema, Document } from 'mongoose';

export interface ITopic extends Document {
  name: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  prerequisites: string[];
  estimatedTime: number;
  totalProblems: number;
  category: 'Data Structures' | 'Algorithms' | 'Math' | 'Advanced Concepts';
  status: 'not-started' | 'in-progress' | 'completed';
  progress: number;
  tutorials: {
    id: string;
    title: string;
    description: string;
    content: string;
    duration: number;
    completed: boolean;
  }[];
}

const TopicSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  difficulty: { 
    type: String, 
    required: true,
    enum: ['beginner', 'intermediate', 'advanced']
  },
  prerequisites: {
    type: [String],
    default: []
  },
  estimatedTime: { type: Number, required: true }, // in minutes
  totalProblems: { type: Number, required: true },
  category: { 
    type: String, 
    required: true,
    enum: ['Data Structures', 'Algorithms', 'Math', 'Advanced Concepts']
  },
  status: {
    type: String,
    required: true,
    enum: ['not-started', 'in-progress', 'completed'],
    default: 'not-started'
  },
  progress: {
    type: Number,
    required: true,
    default: 0,
    min: 0,
    max: 100
  },
  tutorials: [{
    id: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    content: { type: String, required: true },
    duration: { type: Number, required: true }, // in minutes
    completed: { type: Boolean, default: false }
  }]
});

TopicSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

export const Topic = mongoose.model<ITopic>('Topic', TopicSchema);