// routes/quizHistory.ts
import express from "express";
import QuizResult from "../models/QuizResult";
import { ReturnDocument } from "mongodb";

const router = express.Router();

router.get("/:username", async (req, res) => {
  const { username } = req.params;

  try {
    const results = await QuizResult.find({ username }).sort({ createdAt: -1 });
    res.json(results);
    return;
  } catch (err) {
    console.error("Error fetching quiz history:", err);
    res.status(500).json({ error: "Failed to fetch quiz history" });
    return;
  }
});

export default router;
