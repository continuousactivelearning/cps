import express, { Request, Response } from 'express';
import axios from 'axios';
const router = express.Router();

router.post('/topic-summary', async (req: Request, res: Response): Promise<void> => {
  const { topic, mainTopic } = req.body;

  try {
    const response = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        model: 'openai/gpt-4o',
        max_tokens: 200,
        messages: [
          {
            role: 'user',
            content: `
You are an educational assistant.

Explain the main concepts of "${topic}" and describe clearly how it helps a student understand "${mainTopic}".

Be concise, beginner-friendly, and avoid advanced jargon.
Output in 1–3 short paragraphs.
            `,
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const content = response.data.choices[0]?.message?.content;
    res.json({ summary: content || '⚠️ No response from model.' });
  } catch (error: any) {
    console.error('GPT error:', error.response?.data || error.message);
    res.status(500).json({ summary: '⚠️ Failed to fetch summary.' });
  }
});

export default router;
