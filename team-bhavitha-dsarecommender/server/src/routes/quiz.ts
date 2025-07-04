import express from "express";
import type { Request, Response } from "express";
import { generateQuizQuestions } from "../utils/ragEngine";
import QuizResult from "../models/QuizResult";
import { QuizSubmission } from "../types/quiz";
import { storeAnswers, getAnswers } from "../utils/answerStore";

const router = express.Router();

// GET /api/quiz/:topic — Generate quiz questions
router.get("/:topic", async (req: Request, res: Response) => {
  const { topic } = req.params;

  if (!topic) {
    res.status(400).json({
      error: "Topic is required",
      questions: [],
    });
    return;
  }

  try {
    console.log("Generating questions for topic:", topic);
    const questions = await generateQuizQuestions(topic);
    console.log("Generated questions count:", questions.length);

    if (!Array.isArray(questions) || questions.length === 0) {
      console.warn("No questions generated for topic:", topic);
      res.status(404).json({
        error: "No questions could be generated",
        questions: [],
      });
      return;
    }

    // Store correct answers for later validation
    const correctAnswers = questions.map((q) => q.correctAnswer);
    storeAnswers(topic, correctAnswers);

    // Send sanitized questions to frontend
    const sanitizedQuestions = questions.map(({ question, options }) => ({
      question,
      options,
    }));

    console.log("Sending response with", sanitizedQuestions.length, "questions");
    res.json({ questions: sanitizedQuestions });
    return;
  } catch (err) {
    console.error("Quiz generation failed:", err);
    res.status(500).json({
      error: "Failed to generate questions",
      questions: [],
    });
    return;
  }
});

// POST /api/quiz/submit — Submit quiz answers
router.post(
  "/submit",
  async (req: Request<{}, {}, QuizSubmission>, res: Response) => {
    const { topic, answers, username } = req.body;

    if (!topic || !Array.isArray(answers) || !username) {
      res.status(400).json({ error: "Missing or invalid topic, answers, or username" });
      return;
    }

    try {
      // Get stored correct answers
      const correctAnswers = getAnswers(topic);
      if (!correctAnswers) {
        res.status(404).json({ error: "Quiz session not found" });
        return;
      }

      // Calculate score
      const score = answers.reduce(
        (total, answer, index) => total + (answer === correctAnswers[index] ? 1 : 0),
        0
      );

      const percentageScore = (score / answers.length) * 100;
      const mastery = 1 - percentageScore / 100; // Higher mastery means more practice needed

      // Save quiz result
      await QuizResult.create({
        username,
        topic,
        score: percentageScore,
        mastery,
        answers,
        correctAnswers,
      });

      res.json({
        topic,
        score: percentageScore,
        masteryUpdate: { [topic]: mastery },
        correctAnswers,
        userAnswers: answers,
      });
      return;
    } catch (err) {
      console.error("Quiz submission error:", err);
      res.status(500).json({ error: "Failed to process submission" });
      return;
    }
  }
);

export default router;
