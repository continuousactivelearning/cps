import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import Prerequisite from '../models/Prerequisite';

dotenv.config();
const router = express.Router();

const GROQ_API_KEY = process.env.GROQ_KEY;
const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';

async function generatePrerequisites(topic: string): Promise<string[]> {
  const prompt = `
Generate a list of prerequisites required to learn "${topic}".
Respond ONLY with a JSON array of prerequisite strings, or an array of objects with 'prerequisite' and 'description'.
Wrap your response in raw JSON format (avoid markdown code blocks).
`;

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
          { role: 'system', content: 'You are a helpful assistant for education.' },
          { role: 'user', content: prompt }
        ],
        max_tokens: 1024,
        temperature: 0.2
      })
    });

    const data = await response.json();
    let rawText = data.choices?.[0]?.message?.content || '';
    // Remove markdown code block if present
    const cleaned = rawText.replace(/```json\n?|\n?```/g, '').trim();
    // Parse JSON string
    const parsedArray = JSON.parse(cleaned);
    // Extract only the 'prerequisite' fields if objects, else return as is
    const prerequisites = Array.isArray(parsedArray) && typeof parsedArray[0] === 'object'
      ? parsedArray.map((item: any) => item.prerequisite || item)
      : parsedArray;
    console.log(prerequisites);
    return prerequisites;
  } catch (error: any) {
    console.error("❌ Groq fetch error:", error);
    return [`Error: ${error.message || error}`];
  }
}

router.get('/:topic', async (req: Request, res: Response) => {
  const { topic } = req.params;

  try {
    let prereq = await Prerequisite.findOne({ topic });

    if (!prereq) {
      const prerequisites = await generatePrerequisites(topic);
      prereq = new Prerequisite({ topic, prerequisites });
      await prereq.save();
    }

    res.status(200).json({ topic: prereq.topic, prerequisites: prereq.prerequisites });
  } catch (error) {
    console.error('Error fetching prerequisites:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

export default router;
