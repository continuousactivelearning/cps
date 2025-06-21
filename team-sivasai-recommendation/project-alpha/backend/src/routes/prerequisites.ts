//developed by sivasai
import express, { Router, Request, Response } from 'express';
import Prereq from '../models/Prereq';
import { generatePrerequisites } from '../services/prereqGenerator';
import { generateMCQs } from '../services/mcqGenerator';


const router = express.Router();

router.post('/', async (req: Request, res: Response) => {
  const { topic } = req.body;
  try {
    const prereqs = await generatePrerequisites(topic);
    const newEntry = new Prereq({ topic, prerequisites: prereqs });
    await newEntry.save();
    res.json({ topic, prerequisites: prereqs });
  } catch (err) {
    res.status(500).json({ error: 'Error generating prerequisites' });
  }
});

router.post('/mcq', async (req: Request, res: Response): Promise<void> => {
  const { prerequisites } = req.body;
  if (!Array.isArray(prerequisites) || prerequisites.length === 0) {
    res.status(400).json({ error: 'Prerequisites array is required' });
    return;
  }

  try {
    const mcqs = await generateMCQs(prerequisites);
    res.json(mcqs);
  } catch (err) {
    res.status(500).json({ error: 'Failed to generate MCQs' });
  }
});


export default router;
