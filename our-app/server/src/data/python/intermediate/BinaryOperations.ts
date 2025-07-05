import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python Binary Operations - Intermediate Quiz",
  quizLevel: "intermediate",
  lang: "python",
  description: "Test your understanding of binary operations and bitwise manipulation in Python.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Binary Operations",
  },
  quizScore: 20,
  questions: [
    {
      questionText: "Which operator is used for bitwise AND in Python?",
      options: [
        { optionText: "&", optionTag: "A" },
        { optionText: "|", optionTag: "B" },
        { optionText: "^", optionTag: "C" },
        { optionText: "~", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What will be the result of 5 | 3 in binary?",
      options: [
        { optionText: "0b001", optionTag: "A" },
        { optionText: "0b111", optionTag: "B" },
        { optionText: "0b011", optionTag: "C" },
        { optionText: "0b101", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What does the '~' (tilde) operator do?",
      options: [
        { optionText: "Bitwise AND", optionTag: "A" },
        { optionText: "Bitwise NOT", optionTag: "B" },
        { optionText: "Bitwise OR", optionTag: "C" },
        { optionText: "Bitwise XOR", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which operator performs a left shift in Python?",
      options: [
        { optionText: "<<", optionTag: "A" },
        { optionText: ">>", optionTag: "B" },
        { optionText: "^^", optionTag: "C" },
        { optionText: "||", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What does 1 << 3 evaluate to?",
      options: [
        { optionText: "8", optionTag: "A" },
        { optionText: "4", optionTag: "B" },
        { optionText: "16", optionTag: "C" },
        { optionText: "2", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What is the result of 6 ^ 3?",
      options: [
        { optionText: "5", optionTag: "A" },
        { optionText: "3", optionTag: "B" },
        { optionText: "1", optionTag: "C" },
        { optionText: "7", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which of the following flips all bits in Python?",
      options: [
        { optionText: "~x", optionTag: "A" },
        { optionText: "x ^ 0", optionTag: "B" },
        { optionText: "x | x", optionTag: "C" },
        { optionText: "x & 1", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which result is produced by right shifting 16 by 2?",
      options: [
        { optionText: "4", optionTag: "A" },
        { optionText: "2", optionTag: "B" },
        { optionText: "8", optionTag: "C" },
        { optionText: "6", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "What is the binary representation of 9?",
      options: [
        { optionText: "0b1000", optionTag: "A" },
        { optionText: "0b1001", optionTag: "B" },
        { optionText: "0b1010", optionTag: "C" },
        { optionText: "0b0111", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which operation checks if the i-th bit is set?",
      options: [
        { optionText: "x & (1 << i)", optionTag: "A" },
        { optionText: "x | (1 << i)", optionTag: "B" },
        { optionText: "x ^ (1 << i)", optionTag: "C" },
        { optionText: "x >> i", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "How to set the 3rd bit of number x?",
      options: [
        { optionText: "x = x | (1 << 2)", optionTag: "A" },
        { optionText: "x = x & (1 << 2)", optionTag: "B" },
        { optionText: "x = x ^ (1 << 2)", optionTag: "C" },
        { optionText: "x = x >> 2", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "How to clear the i-th bit in x?",
      options: [
        { optionText: "x = x & ~(1 << i)", optionTag: "A" },
        { optionText: "x = x | (1 << i)", optionTag: "B" },
        { optionText: "x = x ^ (1 << i)", optionTag: "C" },
        { optionText: "x = x >> i", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What is the purpose of bit masking?",
      options: [
        { optionText: "To encrypt data", optionTag: "A" },
        { optionText: "To manipulate specific bits", optionTag: "B" },
        { optionText: "To divide integers", optionTag: "C" },
        { optionText: "To generate random numbers", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "How many bits are in a Python int?",
      options: [
        { optionText: "32", optionTag: "A" },
        { optionText: "Depends on the value", optionTag: "B" },
        { optionText: "16", optionTag: "C" },
        { optionText: "64", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What is the output of bin(10)?",
      options: [
        { optionText: "'0b1010'", optionTag: "A" },
        { optionText: "'10'", optionTag: "B" },
        { optionText: "'0x10'", optionTag: "C" },
        { optionText: "'b10'", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which function converts binary string to integer?",
      options: [
        { optionText: "int(str, 2)", optionTag: "A" },
        { optionText: "bin(str)", optionTag: "B" },
        { optionText: "parseInt(str)", optionTag: "C" },
        { optionText: "int(str)", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which bitwise operation flips specific bits?",
      options: [
        { optionText: "XOR (^)", optionTag: "A" },
        { optionText: "OR (|)", optionTag: "B" },
        { optionText: "AND (&)", optionTag: "C" },
        { optionText: "NOT (~)", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What is 15 & 7?",
      options: [
        { optionText: "7", optionTag: "A" },
        { optionText: "8", optionTag: "B" },
        { optionText: "0", optionTag: "C" },
        { optionText: "1", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What is the result of ~0?",
      options: [
        { optionText: "-1", optionTag: "A" },
        { optionText: "0", optionTag: "B" },
        { optionText: "1", optionTag: "C" },
        { optionText: "-2", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What does bitwise OR do?",
      options: [
        { optionText: "Sets bit if at least one is 1", optionTag: "A" },
        { optionText: "Clears all bits", optionTag: "B" },
        { optionText: "Flips all bits", optionTag: "C" },
        { optionText: "Sets only if both are 1", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    }
  ]
};

export default quizData;