import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import Prerequisite from '../models/Prerequisite';

dotenv.config();
const router = express.Router();

const GROQ_API_KEY = process.env.GROQ_KEY;
const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';

if (!GROQ_API_KEY) {
  console.error(" Missing GROQ_API_KEY in environment");
  process.exit(1);
}

async function generatePrerequisites(topic: string): Promise<string[]> {
  const prompt = `List the prerequisite topics required to learn "${topic}" as a JSON array. 
Each item should be a string or an object with 'prerequisite' and 'description'. 
Respond with raw JSON only, no markdown formatting.
Don't give too many prerequisites, just the essential ones, keep the no. as minimum as possible.`;

  try {
    const response = await fetch(GROQ_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'llama3-70b-8192',
        messages: [
          { role: 'system', content: 'You help students identify what to learn first.' },
          { role: 'user', content: prompt }
        ],
        max_tokens: 1024,
        temperature: 0.2
      })
    });

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content?.replace(/```json\n?|\n?```/g, '').trim();

    const parsed = JSON.parse(content || '[]');

    return Array.isArray(parsed)
      ? parsed.map((item: any) => (typeof item === 'object' ? item.prerequisite || '' : item)).filter(Boolean)
      : [];
  } catch (error: any) {
    console.error(" Failed to generate prerequisites:", error);
    return [`Error: ${error.message || error}`];
  }
}

router.get('/:topic', async (req: Request, res: Response) => {
  try {
    const topic = req.params.topic?.trim();

    if (!topic) return res.status(400).json({ message: 'Topic is required' });

    let prereq = await Prerequisite.findOne({ topic });

    if (!prereq) {
      const prerequisites = await generatePrerequisites(topic);
      prereq = await Prerequisite.create({ topic, prerequisites });
    }

    res.status(200).json(prereq);
  } catch (error) {
    console.error(' Error fetching prerequisites:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

export default router;
