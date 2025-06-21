// AI Integration and Quiz Analysis
// Developed by Srishti Koni
import readline from 'readline';
import fetch from 'node-fetch';

// Define the structure of each quiz question
interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

// Setup readline interface for terminal input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Helper function to wrap readline in a Promise
function ask(question: string): Promise<string> {
  return new Promise(resolve => rl.question(question, resolve));
}

// Function to fetch quiz from Ollama API
async function fetchQuiz(topic: string): Promise<QuizQuestion[]> {
  const prompt = `
Generate 5 MCQs on the topic "${topic}". Make sure only one option is the correct answer. Provide explanation too.
Format:
[
  {
    "question": "...",
    "options": ["A", "B", "C", "D"],
    "correctAnswer": 1,
    "explanation": "..."
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

  if (!match) throw new Error('❌ Could not parse JSON response from Ollama.');

  const rawQuiz = JSON.parse(match[0]);

  // Assign IDs to each question
  const quiz: QuizQuestion[] = rawQuiz.map((q, index) => ({
    id: (index + 1).toString(),
    question: q.question,
    options: q.options,
    correctAnswer: q.correctAnswer,
    explanation: q.explanation
  }));

  return quiz;
}

// Function to run the quiz in the terminal
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
      console.log(`❌ Incorrect. ✅ Correct Answer: ${q.options[q.correctAnswer]}`);
      console.log(`📘 Explanation: ${q.explanation}\n`);
    }
  }

  const percent = (score / quiz.length) * 100;
  console.log(`📊 Your Score: ${score}/${quiz.length} (${percent.toFixed(0)}%)`);

  if (percent >= 70) {
    console.log('🎉 You’re ready to move to the next topic!');
  } else {
    console.log('🧠 Please revise this topic before proceeding.');
  }

  rl.close();
}

// Start the quiz
runQuiz();


/* async function fetchQuiz(topic: string): Promise<{
  question: string;
  options: string[];
  correctAnswer: number;
}[]> {
  const res = await fetch('http://localhost:11434/api/generate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'llama3',
      prompt: `Generate 5 DSA quiz questions in JSON format on the topic "${topic}". Each question should include:
- "question": string,
- "options": [option1, option2, option3, option4],
- "correctAnswer": number (index of correct option 0-3)`,
      stream: false
    }),
  });

  if (!res.ok) throw new Error('Failed to generate quiz');

  const data = await res.json();

  try {
    const quiz = JSON.parse(data.response);
    return quiz;
  } catch (err) {
    console.error('Could not parse quiz JSON:', data.response);
    throw new Error('Response is not valid JSON.');
  }
}


runQuiz();*/

