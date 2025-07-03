import mongoose from 'mongoose';
import RecommendationService from '../services/recommendationService';
import { UserTopic } from '../models/UserTopic';
import { Topic } from '../models/Topic';
import dotenv from 'dotenv';

dotenv.config();

async function testUserSpecificRecommendations() {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/learning-platform');
    console.log('Connected to MongoDB');

    // Test with two different users
    const user1Email = 'user1@example.com';
    const user2Email = 'user2@example.com';
    
    // User 1 has completed Arrays and Searching & Sorting
    const user1KnownTopics = ['Arrays', 'Searching & Sorting'];
    
    // User 2 has only completed Arrays
    const user2KnownTopics = ['Arrays'];

    console.log('\n=== TESTING USER-SPECIFIC RECOMMENDATIONS ===');
    
    // Test User 1
    console.log('\n--- USER 1 ---');
    console.log('Email:', user1Email);
    console.log('Known Topics:', user1KnownTopics);
    
    const user1Progress = await UserTopic.find({ userEmail: user1Email });
    console.log('User 1 Progress:', user1Progress.map(up => ({ topic: up.topicName, status: up.status })));
    
    const user1Recommendations = await RecommendationService.generateRecommendations(user1Email, user1KnownTopics);
    console.log('User 1 Recommendations:', user1Recommendations.map(r => r.name));

    // Test User 2
    console.log('\n--- USER 2 ---');
    console.log('Email:', user2Email);
    console.log('Known Topics:', user2KnownTopics);
    
    const user2Progress = await UserTopic.find({ userEmail: user2Email });
    console.log('User 2 Progress:', user2Progress.map(up => ({ topic: up.topicName, status: up.status })));
    
    const user2Recommendations = await RecommendationService.generateRecommendations(user2Email, user2KnownTopics);
    console.log('User 2 Recommendations:', user2Recommendations.map(r => r.name));

    // Check if recommendations are different
    const user1TopicNames = user1Recommendations.map(r => r.name);
    const user2TopicNames = user2Recommendations.map(r => r.name);
    
    console.log('\n--- COMPARISON ---');
    console.log('User 1 should have Hashing and Greedy:', user1TopicNames.includes('Hashing'), user1TopicNames.includes('Greedy'));
    console.log('User 2 should NOT have Hashing and Greedy:', !user2TopicNames.includes('Hashing'), !user2TopicNames.includes('Greedy'));
    console.log('User 2 should have Searching & Sorting:', user2TopicNames.includes('Searching & Sorting'));
    
    const areDifferent = JSON.stringify(user1TopicNames.sort()) !== JSON.stringify(user2TopicNames.sort());
    console.log('Recommendations are different:', areDifferent);

    await mongoose.disconnect();
  } catch (error) {
    console.error('Error:', error);
  }
}

testUserSpecificRecommendations(); 