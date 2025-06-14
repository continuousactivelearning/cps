import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import Prerequisite from '../models/Prerequisite';

dotenv.config();
const router = express.Router();

const GEMINI_API_KEY = process.env.GEMINI_API_KEY as string;
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent?key=' + GEMINI_API_KEY;

async function generatePrerequisites(topic: string): Promise<string[]> {
  const prompt = `
Generate a list of prerequisites required to learn "${topic}".
Respond ONLY with a JSON array of prerequisite strings, or an array of objects with 'prerequisite' and 'description'.
Wrap your response in raw JSON format (avoid markdown code blocks).
`;

  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }]
      })
    });

    const raw = await response.text();

    const data = JSON.parse(raw);
    const rawText = data.candidates[0].content.parts[0].text;
    const cleaned = rawText.replace(/```json\n?|\n?```/g, '');

    // Parse JSON string
    const parsedArray = JSON.parse(cleaned);

    // Extract only the 'prerequisite' fields
    const prerequisites = parsedArray.map((item: any) => item.prerequisite);

    // Output
    console.log(prerequisites);
    return prerequisites;
  } catch (error: any) {
    console.error("❌ Gemini fetch error:", error);
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
