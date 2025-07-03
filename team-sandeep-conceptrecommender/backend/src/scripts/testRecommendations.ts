import mongoose from 'mongoose';
import RecommendationService from '../services/recommendationService';
import { UserTopic } from '../models/UserTopic';
import { Topic } from '../models/Topic';
import dotenv from 'dotenv';

dotenv.config();

async function testRecommendations() {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/learning-platform');
    console.log('Connected to MongoDB');

    // Test with a specific user email
    const testUserEmail = 'test@example.com'; // Change this to a real user email
    const knownTopics = ['Arrays', 'Searching & Sorting']; // Test with Arrays and Searching & Sorting completed

    console.log('\n=== TESTING RECOMMENDATIONS ===');
    console.log('User Email:', testUserEmail);
    console.log('Known Topics:', knownTopics);

    // Check what topics exist in database
    const allTopics = await Topic.find({}, 'name');
    console.log('\nAll topics in database:', allTopics.map(t => t.name));

    // Check user progress
    const userProgress = await UserTopic.find({ userEmail: testUserEmail });
    console.log('\nUser progress:', userProgress.map(up => ({ topic: up.topicName, status: up.status })));

    // Test the recommendation service
    console.log('\n=== GENERATING RECOMMENDATIONS ===');
    const recommendations = await RecommendationService.generateRecommendations(testUserEmail, knownTopics);
    
    console.log('\nFinal recommendations:', recommendations.map(r => ({
      name: r.name,
      difficulty: r.difficulty,
      confidence: r.confidence,
      prerequisites: r.prerequisites
    })));

    // Test specific topics
    const searchingSorting = await Topic.findOne({ name: 'Searching & Sorting' });
    const hashing = await Topic.findOne({ name: 'Hashing' });
    const greedy = await Topic.findOne({ name: 'Greedy' });

    console.log('\n=== SPECIFIC TOPIC CHECK ===');
    console.log('Searching & Sorting exists:', !!searchingSorting);
    console.log('Hashing exists:', !!hashing);
    console.log('Greedy exists:', !!greedy);

    if (searchingSorting) {
      console.log('Searching & Sorting prerequisites:', searchingSorting.prerequisites);
    }
    if (hashing) {
      console.log('Hashing prerequisites:', hashing.prerequisites);
    }
    if (greedy) {
      console.log('Greedy prerequisites:', greedy.prerequisites);
    }

    await mongoose.disconnect();
  } catch (error) {
    console.error('Error:', error);
  }
}

testRecommendations(); 