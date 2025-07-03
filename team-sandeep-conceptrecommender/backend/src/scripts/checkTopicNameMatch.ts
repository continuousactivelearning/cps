import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';
import { Topic } from '../models/Topic';
import dotenv from 'dotenv';

dotenv.config();

const csvFilePath = path.resolve(__dirname, '../../../dsaquestions.csv');

async function checkTopicNameMatch() {
  await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/learning-platform');
  console.log('Connected to MongoDB');

  // Get all topic names from DB
  const dbTopics = await Topic.find({}, 'name');
  const dbTopicNames = dbTopics.map(t => t.name.trim());

  // Get all topic names from CSV
  const csvTopicNames = new Set<string>();
  await new Promise<void>((resolve, reject) => {
    fs.createReadStream(csvFilePath)
      .pipe(csv({ separator: ',', skipLines: 1, mapHeaders: ({ header }) => header.replace(/"/g, '').trim() }))
      .on('data', (row: any) => {
        if (row.Topic && typeof row.Topic === 'string') {
          csvTopicNames.add(row.Topic.replace(/"/g, '').trim());
        }
      })
      .on('end', resolve)
      .on('error', reject);
  });

  // Find mismatches
  const inCSVNotInDB = Array.from(csvTopicNames).filter(name => !dbTopicNames.includes(name));
  const inDBNotInCSV = dbTopicNames.filter(name => !csvTopicNames.has(name));

  console.log('--- Topics in CSV but not in DB ---');
  inCSVNotInDB.forEach(name => console.log(name));
  console.log('--- Topics in DB but not in CSV ---');
  inDBNotInCSV.forEach(name => console.log(name));

  await mongoose.disconnect();
}

checkTopicNameMatch().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
