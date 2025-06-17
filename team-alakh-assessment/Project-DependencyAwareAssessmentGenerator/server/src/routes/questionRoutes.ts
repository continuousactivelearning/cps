// done by pavithra
import express from "express";
import { generateQuestionBank } from "../controllers/questionGencontroller";


const router = express.Router();

router.post("/generate-questions", generateQuestionBank);

export default router;
