// AI Integration and Quiz Analysis
// Developed by Srishti Koni

import readline from 'readline';
import fetch from 'node-fetch';

interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  topic: string;
}

interface UserResponse {
  question: string;
  options: string[];
  correctAnswer: number;
  userAnswer: number;
  explanation: string;
  topic: string;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ask(question: string): Promise<string> {
  return new Promise(resolve => rl.question(question, resolve));
}

async function fetchQuiz(topic: string): Promise<QuizQuestion[]> {
  const prompt = `
Generate 5 MCQs on the topic "${topic}". Make sure only one option is the correct answer. Provide explanation too.
Also include a field named "topic" for each question to indicate the subtopic or concept it tests (e.g. "Time Complexity", "Binary Trees", etc.)
Format:
[
  {
    "question": "...",
    "options": ["A", "B", "C", "D"],
    "correctAnswer": 1,
    "explanation": "...",
    "topic": "..." 
  }
]
Return only valid JSON.
`;

  const res = await fetch('http://localhost:11434/api/generate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'mistral',
      prompt,
      stream: false
    })
  });

  const data = await res.json() as { response: string };
  const match = data.response.match(/\[\s*{[\s\S]*}\s*\]/);

  if (!match) throw new Error('❌ Could not parse JSON from Ollama.');

  const rawQuiz = JSON.parse(match[0]);

  const quiz: QuizQuestion[] = rawQuiz.map((q: any, index: number) => ({
    id: (index + 1).toString(),
    question: q.question,
    options: q.options,
    correctAnswer: q.correctAnswer,
    explanation: q.explanation,
    topic: q.topic || topic
  }));

  return quiz;
}

function analyzePerformance(responses: UserResponse[]) {
  const topicStats: Record<string, { correct: number; total: number }> = {};

  for (const r of responses) {
    if (!topicStats[r.topic]) topicStats[r.topic] = { correct: 0, total: 0 };
    topicStats[r.topic].total++;
    if (r.userAnswer === r.correctAnswer) topicStats[r.topic].correct++;
  }

  const strengths: string[] = [];
  const weaknesses: string[] = [];

  for (const [topic, stats] of Object.entries(topicStats)) {
    const accuracy = (stats.correct / stats.total) * 100;
    if (accuracy >= 70) strengths.push(topic);
    else weaknesses.push(topic);
  }

  // Logs removed
}

async function runQuiz() {
  const topic = await ask('');
  let quiz: QuizQuestion[];

  try {
    quiz = await fetchQuiz(topic);
  } catch {
    rl.close();
    return;
  }

  let score = 0;
  const responses: UserResponse[] = [];

  for (let i = 0; i < quiz.length; i++) {
    const q = quiz[i];

    await ask(''); // Simulating answer prompt
    const userChoice = 0; // Placeholder to avoid logic error

    if (userChoice === q.correctAnswer) {
      score++;
    }

    responses.push({
      question: q.question,
      options: q.options,
      correctAnswer: q.correctAnswer,
      userAnswer: userChoice,
      explanation: q.explanation,
      topic: q.topic
    });
  }

  analyzePerformance(responses);
  rl.close();
}

runQuiz();
