import express, { Router, Request, Response } from 'express';
import Prereq from '../models/Prereq';
import User from '../models/User';
import { generatePrerequisites } from '../services/prereqGenerator';
import { generateMCQs, resetGeneratedQuestions, MCQ } from '../services/mcqGenerator';

const router = express.Router();

// Define a type for the request body of the /mcq route to include the 'restart' flag
// questionCount is no longer part of the expected body, as it's fixed on the backend.
interface MCQRequest extends Request {
  body: {
    prerequisites: string[];
    restart?: boolean; // Optional flag to indicate a quiz restart
    courseName?: string; // Optional course name for better MCQ generation context
    // questionCount is removed from here as it's now fixed on the backend
  };
}

// Route to generate and save prerequisites (updated to save to user profile)
router.post('/', async (req: Request, res: Response): Promise<void> => {
  const { topic } = req.body;
  if (!topic) {
    res.status(400).json({ error: 'Topic is required' });
    return;
  }
  
  try {
    // Get user ID from the request (assuming it's set by auth middleware)
    const userId = (req as any).userId;
    if (!userId) {
      res.status(401).json({ error: 'User authentication required' });
      return;
    }

    const prereqs = await generatePrerequisites(topic);
    
    // Save to global prerequisites collection
    const newEntry = new Prereq({ topic, prerequisites: prereqs });
    await newEntry.save();
    
    // Save to user's profile
    const user = await User.findById(userId);
    if (!user) {
      res.status(404).json({ error: 'User not found' });
      return;
    }
    
    // Add topic to user's topics if not already present
    if (!user.topics.includes(topic)) {
      user.topics.push(topic);
    }
    
    // Update or add prerequisites for this topic
    const existingPrereqIndex = user.prerequisites.findIndex(p => p.topic === topic);
    if (existingPrereqIndex >= 0) {
      user.prerequisites[existingPrereqIndex].prerequisites = prereqs;
    } else {
      user.prerequisites.push({ topic, prerequisites: prereqs });
    }
    
    await user.save();
    
    res.json({ topic, prerequisites: prereqs });
  } catch (err: any) {
    console.error('Error generating prerequisites:', err);
    res.status(500).json({ error: 'Error generating prerequisites', details: err.message });
  }
});

// Route to generate MCQs - will now always generate 15 questions
router.post('/mcq', async (req: MCQRequest, res: Response): Promise<void> => {
  const { prerequisites, restart, courseName } = req.body; // Added courseName to destructuring

  console.log('🎯 MCQ Generation Request:');
  console.log('  - Prerequisites:', prerequisites);
  console.log('  - Restart flag:', restart);
  console.log('  - Course Name:', courseName);

  if (!Array.isArray(prerequisites) || prerequisites.length === 0) {
    console.log('❌ Error: Prerequisites array is required and must not be empty');
    res.status(400).json({ error: 'Prerequisites array is required and must not be empty' });
    return;
  }

  const fixedQuestionCount = 15; // Hardcode to 15 questions
  const targetCount = fixedQuestionCount; // Use the fixed count

  console.log('🚀 Starting MCQ generation for', targetCount, 'questions...');

  try {
    const mcqs: MCQ[] = await generateMCQs(prerequisites, targetCount, restart, courseName);
    console.log('✅ MCQ Generation successful. Generated', mcqs.length, 'questions');
    res.json(mcqs);
  } catch (err: any) {
    console.error('❌ Failed to generate MCQs:', err);
    res.status(500).json({ error: 'Failed to generate MCQs', details: err.message });
  }
});

// Endpoint to explicitly reset the MCQ cache (no change)
router.post('/reset-mcq-cache', (_req: Request, res: Response) => {
  resetGeneratedQuestions();
  res.status(200).json({ message: 'MCQ cache reset successfully.' });
});

export default router;
