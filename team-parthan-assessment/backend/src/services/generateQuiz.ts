// Developed by Srishti Koni


import { OpenAI } from 'openai';
import { config } from 'dotenv';

config(); // Load GROQ_API_KEY from .env

interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  topic?: string;
}

const openai = new OpenAI({
  apiKey: process.env.GROQ_API_KEY!,
  baseURL: 'https://api.groq.com/openai/v1',
});

export default async function generateQuiz(topic: string[]): Promise<QuizQuestion[]> {
  const prompt = `
You are an expert in data structures and algorithms.

Given the list of topics: ${topic.join(', ')}, generate exactly 5 multiple choice questions (MCQs) per topic.

Each question must:
- Be clearly related to the given topic.
- Have exactly 4 options.
- Have only one correct option, specified using zero-based indexing (0, 1, 2, or 3).
- Include a short, correct explanation that matches the selected answer.
- Be formatted strictly as a JSON array of objects like this:

[
  {
    "question": "Your question here?",
    "options": ["Option A", "Option B", "Option C", "Option D"],
    "correctAnswer": 2,
    "explanation": "Brief explanation of why this option is correct.",
    "topic": "name of topic from ${topic.join(', ')}"
  }
]

⚠️ Return only the valid JSON array. No markdown, no text, no comments. Just the array.
`;

  const completion = await openai.chat.completions.create({
    model: 'llama-3.3-70b-versatile', 
    messages: [{ role: 'user', content: prompt }],
    temperature: 0.7,
  });

  const response = completion.choices[0]?.message?.content ?? '';
  const match = response.match(/\[\s*{[\s\S]*}\s*\]/);

  if (!match) throw new Error('❌ Could not parse JSON array from Groq response.');

  const rawQuiz = JSON.parse(match[0]);

  interface RawQuizQuestion {
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
    topic?: string;
  }

  const rawQuizTyped: RawQuizQuestion[] = rawQuiz;

  const quiz: QuizQuestion[] = rawQuizTyped.map((q: RawQuizQuestion, i: number): QuizQuestion => ({
    id: `${i + 1}`,
    question: q.question,
    options: q.options,
    correctAnswer: q.correctAnswer,
    explanation: q.explanation,
    topic: q.topic || topic.join(', '),
  }));

  return quiz;
}
