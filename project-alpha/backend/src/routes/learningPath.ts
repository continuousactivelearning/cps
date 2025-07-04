import express, { Request, Response, Router } from 'express';
import axios from 'axios';

const router: Router = express.Router();

interface LearningPathRequest extends Request {
  body: {
    topic: string;
    scorePercentage: number;
    weeks: number;
  };
}

router.post('/learning-path', async (req: LearningPathRequest, res: Response): Promise<void> => {
  const { topic, scorePercentage, weeks } = req.body;

  if (!topic || typeof scorePercentage !== 'number' || typeof weeks !== 'number') {
    res.status(400).json({ error: 'Topic, score percentage, and weeks are required.' });
    return;
  }

  if (weeks < 1 || weeks > 52) {
    res.status(400).json({ error: 'Weeks must be between 1 and 52.' });
    return;
  }

  try {
    const response = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        model: 'openai/gpt-4o-mini',
        max_tokens: 500,
        messages: [
          {
            role: 'user',
            content: `
You are an expert curriculum designer. A student wants to learn "${topic}" over ${weeks} weeks and scored ${scorePercentage}% on a prerequisite quiz. Generate a detailed week-by-week learning path to master "${topic}". Rules:
- Provide exactly ${weeks} weeks of content.
- Adjust content difficulty based on the score: low score (0-50%) emphasizes basics, medium (51-75%) balances basics and intermediates, high (76-100%) includes advanced topics.
- Each week should have 2-3 clear, actionable tasks (e.g., study concepts, practice problems, watch tutorials).
- Format output as a JSON array where each element is an object with "week" (number) and "tasks" (array of strings).
- Output only the JSON array, without any Markdown code blocks, backticks, or additional text.
Example output:
[
  {"week": 1, "tasks": ["Study concept A", "Solve 5 problems on A", "Watch tutorial on A"]},
  {"week": 2, "tasks": ["Study concept B", "Practice B with examples"]}
]
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

    let content = response.data.choices[0]?.message?.content;
    if (!content) {
      throw new Error('No content received from OpenRouter.');
    }

    // Clean the response to remove Markdown code blocks and extract JSON
    content = content
      .replace(/```json\s*|\s*```/g, '') // Remove ```json and ```
      .replace(/^\s*[\r\n]+|[\r\n]+\s*$/g, '') // Trim leading/trailing newlines
      .trim(); // Trim whitespace

    let learningPath;
    try {
      learningPath = JSON.parse(content);
      if (!Array.isArray(learningPath) || learningPath.length !== weeks) {
        throw new Error('Invalid learning path format or incorrect number of weeks.');
      }
      // Validate each week's structure
      for (const week of learningPath) {
        if (!week.week || !Array.isArray(week.tasks) || week.tasks.length === 0) {
          throw new Error('Invalid week structure in learning path.');
        }
      }
    } catch (parseError) {
      console.error('Error parsing learning path:', parseError, 'Content:', content);
      res.status(500).json({ error: 'Failed to parse learning path from model response.' });
      return;
    }

    res.json({ learningPath });
  } catch (error: any) {
    console.error('Error generating learning path:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to generate learning path.' });
    return;
  }
});

export default router;
