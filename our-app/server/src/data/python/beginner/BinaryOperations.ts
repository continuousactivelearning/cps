import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python Binary Operations - Beginner Quiz",
  quizLevel: "beginner",
  lang: "python",
  description: "Assess your understanding of binary operations and bitwise manipulation in Python.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Binary Operations"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the result of 5 & 3 in Python?",
      options: [
        { optionText: "1", optionTag: "B" },
        { optionText: "0", optionTag: "A" },
        { optionText: "8", optionTag: "C" },
        { optionText: "15", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What does the '|' operator do in Python?",
      options: [
        { optionText: "Performs bitwise OR", optionTag: "A" },
        { optionText: "Performs bitwise AND", optionTag: "C" },
        { optionText: "Performs logical OR", optionTag: "B" },
        { optionText: "Shifts bits left", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which bitwise operator inverts all the bits?",
      options: [
        { optionText: "~", optionTag: "D" },
        { optionText: "&", optionTag: "A" },
        { optionText: "|", optionTag: "B" },
        { optionText: "^", optionTag: "C" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What is the binary representation of the number 4?",
      options: [
        { optionText: "0b100", optionTag: "C" },
        { optionText: "1001", optionTag: "A" },
        { optionText: "1100", optionTag: "B" },
        { optionText: "1010", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which Python function converts a decimal to binary?",
      options: [
        { optionText: "bin()", optionTag: "A" },
        { optionText: "hex()", optionTag: "C" },
        { optionText: "oct()", optionTag: "D" },
        { optionText: "ord()", optionTag: "B" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the result of 2 << 2?",
      options: [
        { optionText: "8", optionTag: "B" },
        { optionText: "4", optionTag: "A" },
        { optionText: "16", optionTag: "C" },
        { optionText: "2", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is the result of 10 >> 1?",
      options: [
        { optionText: "5", optionTag: "C" },
        { optionText: "2", optionTag: "A" },
        { optionText: "4", optionTag: "D" },
        { optionText: "8", optionTag: "B" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which operator is used for XOR in Python?",
      options: [
        { optionText: "^", optionTag: "B" },
        { optionText: "&", optionTag: "D" },
        { optionText: "~", optionTag: "A" },
        { optionText: "|", optionTag: "C" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is the output of bin(7)?",
      options: [
        { optionText: "'0b111'", optionTag: "C" },
        { optionText: "111", optionTag: "B" },
        { optionText: "'0b101'", optionTag: "A" },
        { optionText: "1000", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which of the following is NOT a bitwise operator?",
      options: [
        { optionText: "and", optionTag: "D" },
        { optionText: "&", optionTag: "A" },
        { optionText: "|", optionTag: "B" },
        { optionText: "^", optionTag: "C" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What does 3 ^ 2 return?",
      options: [
        { optionText: "1", optionTag: "A" },
        { optionText: "0", optionTag: "C" },
        { optionText: "2", optionTag: "B" },
        { optionText: "5", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is 5 & 6?",
      options: [
        { optionText: "4", optionTag: "B" },
        { optionText: "0", optionTag: "C" },
        { optionText: "6", optionTag: "D" },
        { optionText: "5", optionTag: "A" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is the result of 7 | 3?",
      options: [
        { optionText: "7", optionTag: "C" },
        { optionText: "5", optionTag: "A" },
        { optionText: "3", optionTag: "B" },
        { optionText: "6", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What does '<<' operator do?",
      options: [
        { optionText: "Left shift bits", optionTag: "A" },
        { optionText: "Right shift bits", optionTag: "D" },
        { optionText: "XOR bits", optionTag: "C" },
        { optionText: "Invert bits", optionTag: "B" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the output of ~1 in Python?",
      options: [
        { optionText: "-2", optionTag: "D" },
        { optionText: "-1", optionTag: "B" },
        { optionText: "0", optionTag: "A" },
        { optionText: "1", optionTag: "C" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What does 4 | 1 evaluate to?",
      options: [
        { optionText: "5", optionTag: "C" },
        { optionText: "0", optionTag: "B" },
        { optionText: "6", optionTag: "A" },
        { optionText: "3", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which bitwise operator has highest precedence?",
      options: [
        { optionText: "~", optionTag: "A" },
        { optionText: "|", optionTag: "D" },
        { optionText: "&", optionTag: "B" },
        { optionText: "^", optionTag: "C" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of these is true about bitwise operations?",
      options: [
        { optionText: "They are used for fast computations", optionTag: "B" },
        { optionText: "They are used only in strings", optionTag: "A" },
        { optionText: "They sort numbers", optionTag: "C" },
        { optionText: "They create dictionaries", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is the output of 6 >> 1?",
      options: [
        { optionText: "3", optionTag: "A" },
        { optionText: "6", optionTag: "C" },
        { optionText: "2", optionTag: "D" },
        { optionText: "4", optionTag: "B" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is 1 << 4?",
      options: [
        { optionText: "16", optionTag: "D" },
        { optionText: "4", optionTag: "B" },
        { optionText: "8", optionTag: "A" },
        { optionText: "2", optionTag: "C" }
      ],
      correctOption: "D",
      score: 1
    }
  ]
};

export default quizData;