import mongoose from 'mongoose';
import { Topic } from '../models/Topic';
import dotenv from 'dotenv';

dotenv.config();

async function checkTopics() {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/learning-platform');
    console.log('Connected to MongoDB');

    const topics = await Topic.find({}, 'name difficulty prerequisites');
    console.log('\n=== TOPICS IN DATABASE ===');
    console.log(`Total topics: ${topics.length}`);
    
    topics.forEach(topic => {
      console.log(`- ${topic.name} (${topic.difficulty}) - Prerequisites: [${topic.prerequisites.join(', ')}]`);
    });

    // Check for specific topics
    const searchingSorting = await Topic.findOne({ name: 'Searching & Sorting' });
    const hashing = await Topic.findOne({ name: 'Hashing' });
    const greedy = await Topic.findOne({ name: 'Greedy' });
    const arrays = await Topic.findOne({ name: 'Arrays' });

    console.log('\n=== SPECIFIC TOPIC CHECK ===');
    console.log('Searching & Sorting:', searchingSorting ? 'EXISTS' : 'NOT FOUND');
    console.log('Hashing:', hashing ? 'EXISTS' : 'NOT FOUND');
    console.log('Greedy:', greedy ? 'EXISTS' : 'NOT FOUND');
    console.log('Arrays:', arrays ? 'EXISTS' : 'NOT FOUND');

    await mongoose.disconnect();
  } catch (error) {
    console.error('Error:', error);
  }
}

checkTopics(); 