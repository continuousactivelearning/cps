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
  topic: string; // for evaluation (strength/weakness)
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

// ✅ Fetch quiz dynamically from Ollama
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
    topic: q.topic || topic // fallback if no topic
  }));

  return quiz;
}

// ✅ Analyze performance topic-wise
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

  console.log('\n📄 === Personalized Report Card ===');

  if (strengths.length) {
    console.log('\n✅ Strong Topics:');
    strengths.forEach((t, i) => console.log(`  ${i + 1}. ${t}`));
  }

  if (weaknesses.length) {
    console.log('\n⚠️ Weak Topics (Please Revise):');
    weaknesses.forEach((t, i) => console.log(`  ${i + 1}. ${t}`));
  }

  if (!weaknesses.length) {
    console.log('\n🎉 Excellent! You’re strong in all tested areas.');
  }
}

// ✅ Run the quiz
async function runQuiz() {
  const topic = await ask('📝 Enter the topic you want a quiz on: ');
  console.log(`\n🎯 Generating quiz for "${topic}"...\n`);

  let quiz: QuizQuestion[];

  try {
    quiz = await fetchQuiz(topic);
  } catch (error) {
    console.error('🚫 Error fetching quiz:', error);
    rl.close();
    return;
  }

  let score = 0;
  const responses: UserResponse[] = [];

  for (let i = 0; i < quiz.length; i++) {
    const q = quiz[i];
    console.log(`Q${i + 1}: ${q.question}`);
    q.options.forEach((opt, idx) => console.log(`   ${idx + 1}. ${opt}`));

    const ans = await ask('👉 Your answer (1-4): ');
    const userChoice = parseInt(ans) - 1;

    const isCorrect = userChoice === q.correctAnswer;
    if (isCorrect) {
      console.log('✅ Correct!\n');
      score++;
    } else {
      console.log(`❌ Incorrect. ✅ Correct: ${q.options[q.correctAnswer]}`);
      console.log(`📘 Explanation: ${q.explanation}\n`);
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

  const percent = (score / quiz.length) * 100;
  console.log(`📊 Your Score: ${score}/${quiz.length} (${percent.toFixed(0)}%)`);

  analyzePerformance(responses);
  rl.close();
}

runQuiz();
