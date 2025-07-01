// import generateQuiz from '../services/generateQuiz.js';
import { Request, Response, NextFunction } from "express";
import generateQuiz from "../services/generateQuiz";

export async function generate(req:Request, res:Response) {
  try {
    const { topic } = req.body;
    const quiz = await generateQuiz(topic);
    res.json({ quiz });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Quiz generation failed' });
  }
}
