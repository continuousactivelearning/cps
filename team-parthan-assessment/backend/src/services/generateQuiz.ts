// Developed by Srishti Koni

interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  topic?: string;
}

export default async function generateQuiz(
  topic: string[],
  prerequisites: string[]
) {
  const prompt = `
You are an expert in data structures and algorithms.

Given the list of topics: ${topic}, generate exactly 5 multiple choice questions (MCQs) per topic, resulting in a total of ${5 * topic.length}.

Please note 5 questions per topic, that is ${topic.length * 5} questions, not 5 questions in total.

Each question must:

Be clearly related to the given topic.

Have exactly 4 options.

Have only one correct option, specified using zero-based indexing (0, 1, 2, or 3).

Include a short, correct explanation that matches the selected answer.

Be formatted strictly as a JSON array of objects, with this schema:


[
  {
    "question": "Your question here?",
    "options": ["Option A", "Option B", "Option C", "Option D"],
    "correctAnswer": 2,
    "explanation": "Brief explanation of why this option is correct.",
    "topic": "name of topic from ${topic}"
  }
]
⚠️ Return only the valid JSON array, without IDs, markdown, or extra comments.
`;

  const res = await fetch("http://localhost:11434/api/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "mistral",
      prompt,
      stream: false,
    }),
  });

  console.log(topic);

  const data = (await res.json()) as { response: string };
  const match = data.response.match(/\[\s*{[\s\S]*}\s*\]/);

  if (!match) throw new Error("❌ Could not parse JSON response from Ollama.");

  const rawQuiz = JSON.parse(match[0]);

  // Assign IDs to each question
  const quiz: QuizQuestion[] = rawQuiz.map(
    (
      q: {
        question: any;
        options: any;
        correctAnswer: any;
        explanation: any;
        topic: any;
      },
      index: number
    ) => ({
      id: (index + 1).toString(),
      question: q.question,
      options: q.options,
      correctAnswer: q.correctAnswer,
      explanation: q.explanation,
      topic: q.topic ? q.topic : topic.join(", "),
    })
  );

  console.log(quiz);

  return quiz;
}
