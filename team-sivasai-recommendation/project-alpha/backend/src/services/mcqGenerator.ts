//Developed by Galla Durga Rama Satya Pradeep Kumar
import axios from 'axios';

export interface MCQ {
  topic: string;
  question: string;
  options: string[];
  answer: string;
}

export async function generateMCQs(prerequisites: string[]): Promise<MCQ[]> {
  const results: MCQ[] = [];

  for (const topic of prerequisites) {
    try {
      const prompt = `Generate one beginner-level multiple-choice question (MCQ) on the topic "${topic}". Return the response in the following JSON format:
{
  "question": "...",
  "options": ["...", "...", "...", "..."],
  "answer": "..."
}
- The "options" array should contain exactly 4 options.
- The "answer" should be the exact text of the correct option (e.g., "1/6", not "a. 1/6").
- Do not include any prefixes (like "a.", "b.", etc.) in the options or answer.`;

      const response = await axios.post(
        'https://openrouter.ai/api/v1/chat/completions',
        {
          model: 'openai/gpt-4o-mini',
          max_tokens: 250,
          messages: [{ role: 'user', content: prompt }],
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      );

      const content = response.data.choices[0]?.message?.content ?? '';
      let mcqData: { question: string; options: string[]; answer: string };

      try {
        // Parse the JSON response
        mcqData = JSON.parse(content);
      } catch (parseError) {
        console.error(`Error parsing JSON for ${topic}:`, parseError);
        results.push({ topic, question: `⚠️ Could not parse MCQ for ${topic}`, options: [], answer: '' });
        continue;
      }

      // Validate the parsed data
      if (
        typeof mcqData.question === 'string' &&
        Array.isArray(mcqData.options) &&
        mcqData.options.length === 4 &&
        mcqData.options.every((opt: unknown) => typeof opt === 'string') &&
        typeof mcqData.answer === 'string' &&
        mcqData.options.includes(mcqData.answer)
      ) {
        results.push({
          topic,
          question: mcqData.question,
          options: mcqData.options,
          answer: mcqData.answer,
        });
      } else {
        console.error(`Invalid MCQ format for ${topic}:`, mcqData);
        results.push({ topic, question: `⚠️ Invalid MCQ format for ${topic}`, options: [], answer: '' });
      }
    } catch (error: any) {
      console.error(`Error generating MCQ for ${topic}:`, error?.response?.data || error.message);
      results.push({ topic, question: `⚠️ API error for ${topic}`, options: [], answer: '' });
    }
  }

  return results;
}
