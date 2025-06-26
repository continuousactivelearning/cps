// Path: server/src/utils/quizGenerator.ts

import axios from "axios";
import dotenv from "dotenv";
import path from "path";

// Correctly load environment variables from .env file
// It looks for .env two levels up from src/utils, which should be the 'server' root.
dotenv.config({ path: path.join(__dirname, "../../.env") });

const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro-latest:generateContent";
interface MCQ {
  question: string;
  options: string[];
  answer: string;
}

export async function generateQuizFromText(text: string, topic: string) {
  const prompt = `
Generate 10 MCQs on the topic "${topic}". Return them in this format:
[
  {
    "question": "...",
    "options": ["A", "B", "C", "D"],
    "answer": "..."
  }
]

Lecture content:
"""
${text.slice(0, 4000)}
"""`;

  try {
    const res = await axios.post(
      `${GEMINI_API_URL}?key=${process.env.GEMINI_API_KEY}`,
      {
        contents: [{ parts: [{ text: prompt }] }],
      }
    );

    const data = res.data as {
      candidates?: { content?: { parts?: { text?: string }[] } }[];
    };

    const textResponse = data.candidates?.[0]?.content?.parts?.[0]?.text;
    const cleaned = textResponse?.replace(/```json|```/g, "").trim() ?? "";
    const parsed: MCQ[] = JSON.parse(cleaned);

    return {
      questions: parsed.map(({ question, options }) => ({ question, options })),
      _correctAnswers: parsed.map((q) => q.answer),
    };
  } catch (err: any) {
    console.warn("⚠️ Gemini failed. Using fallback questions.", err?.response?.data || err?.message || err);

    // ✅ Fallback mock data
    const mockQuestions: MCQ[] = Array.from({ length: 10 }).map((_, i) => ({
      question: `What is a mock question ${i + 1} on ${topic}?`,
      options: ["Option A", "Option B", "Option C", "Option D"],
      answer: "Option A",
    }));

    return {
      questions: mockQuestions.map(({ question, options }) => ({ question, options })),
      _correctAnswers: mockQuestions.map((q) => q.answer),
    };
  }
}