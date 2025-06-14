"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateMCQs = void 0;
//done by pavithra
const openai_1 = require("openai");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const openai = new openai_1.OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});
const generateMCQs = (concept_1, ...args_1) => __awaiter(void 0, [concept_1, ...args_1], void 0, function* (concept, numQuestions = 15) {
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
        const response = yield openai.chat.completions.create({
            model: "gpt-4",
            messages: [{ role: "user", content: prompt }],
            temperature: 0.7,
        });
        const content = response.choices[0].message.content;
        return JSON.parse(content); // parse the JSON result
    }
    catch (error) {
        console.error("OpenAI Error:", error);
        throw new Error("Failed to generate MCQs");
    }
});
exports.generateMCQs = generateMCQs;
