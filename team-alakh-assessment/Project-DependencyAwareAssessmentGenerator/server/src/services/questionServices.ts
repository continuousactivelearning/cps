//done by pavithra
import { OpenAI } from "openai";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const generateMCQs = async (concept: string, numQuestions = 15) => {
  const prompt = `
Generate ${numQuestions} multiple-choice questions (MCQs) on the concept of "${concept}".
Each question should include:
- A question
- Four options (A, B, C, D)
- The correct answer letter
- A short explanation

Format response as JSON:
[
  {
    "question": "...",
    "options": {
      "A": "...",
      "B": "...",
      "C": "...",
      "D": "..."
    },
    "answer": "B",
    "explanation": "..."
  }
]`;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
    });

    const content = response.choices[0].message.content;

    return JSON.parse(content!); // parse the JSON result
  } catch (error) {
    console.error("OpenAI Error:", error);
    throw new Error("Failed to generate MCQs");
  }
};
