import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';
import { Quiz } from '../models/Quiz';
import { Topic } from '../models/Topic';
import dotenv from 'dotenv';

dotenv.config();

const csvFilePath = path.resolve(__dirname, '../../../dsaquestions.csv');

interface CsvRow {
  Topic: string;
  Question: string;
  'Option A': string;
  'Option B': string;
  'Option C': string;
  'Option D': string;
  'Correct Answer': string;
}

const answerMap: Record<string, number> = {
  'A': 0,
  'B': 1,
  'C': 2,
  'D': 3
};

async function importQuestions() {
  await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/learning-platform');
  console.log('Connected to MongoDB');

  const questionsByTopic: Record<string, {
    question: string;
    options: string[];
    correctAnswer: number;
  }[]> = {};

  await new Promise<void>((resolve, reject) => {
    fs.createReadStream(csvFilePath)
      .pipe(csv({ separator: ',', skipLines: 1, mapHeaders: ({ header }) => header.replace(/"/g, '').trim() }))
      .on('data', (row: CsvRow) => {
        if (!row.Topic || typeof row.Topic !== 'string') {
          console.warn('Skipping row with missing Topic:', row);
          return;
        }
        const topic = row.Topic.replace(/"/g, '').trim();
        if (!topic) {
          console.warn('Skipping row with empty topic after trim:', row);
          return;
        }
        if (!questionsByTopic[topic]) questionsByTopic[topic] = [];
        questionsByTopic[topic].push({
          question: row.Question.replace(/"/g, '').trim(),
          options: [row['Option A'], row['Option B'], row['Option C'], row['Option D']].map(opt => opt.replace(/"/g, '').replace(/^[A-D]\. /, '').trim()),
          correctAnswer: answerMap[(row['Correct Answer'] || '').replace(/"/g, '').trim() as keyof typeof answerMap] ?? 0
        });
      })
      .on('end', resolve)
      .on('error', reject);
  });

  console.log('Number of unique topics in CSV:', Object.keys(questionsByTopic).length);
  console.log('Unique topics:', Object.keys(questionsByTopic));

  const importedTopics: string[] = [];
  const missingTopics: string[] = [];

  for (const [topicName, questions] of Object.entries(questionsByTopic)) {
    const topicDoc = await Topic.findOne({ name: topicName });
    if (!topicDoc) {
      console.warn(`Topic not found in DB: ${topicName}`);
      missingTopics.push(topicName);
      continue;
    }
    // Remove existing quiz for this topic
    await Quiz.deleteMany({ topicId: topicDoc._id });
    // Insert new quiz
    await Quiz.create({
      topicId: topicDoc._id,
      questions,
      passingScore: 70,
      timeLimit: 30,
      difficulty: topicDoc.difficulty,
    });
    console.log(`Quiz imported for topic: ${topicName} (${questions.length} questions)`);
    importedTopics.push(topicName);
  }

  await mongoose.disconnect();
  console.log('Import complete.');
  console.log('--- Import Summary ---');
  console.log(`Imported quizzes for topics: ${importedTopics.length}`);
  if (missingTopics.length > 0) {
    console.log('Topics in CSV but missing in DB:');
    missingTopics.forEach(t => console.log(' - ' + t));
  } else {
    console.log('All topics in CSV matched topics in DB.');
  }
}

importQuestions().catch(err => {
  console.error('Error importing questions:', err);
  process.exit(1);
});
