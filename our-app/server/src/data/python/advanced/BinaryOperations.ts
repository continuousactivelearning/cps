import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python Binary Operations - Advanced Quiz",
  quizLevel: "advanced",
  lang: "python",
  description: "Assess your expertise in performing and understanding binary operations in Python.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Binary Operations",
  },
  quizScore: 20,
  questions: [
    {
      questionText: "Which Python operator performs a bitwise XOR operation?",
      options: [
        { optionText: "^", optionTag: "B" },
        { optionText: "&", optionTag: "A" },
        { optionText: "|", optionTag: "C" },
        { optionText: "~", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What does the expression `~5` evaluate to in Python?",
      options: [
        { optionText: "-6", optionTag: "A" },
        { optionText: "4", optionTag: "C" },
        { optionText: "-5", optionTag: "D" },
        { optionText: "5", optionTag: "B" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What does `5 & 3` return?",
      options: [
        { optionText: "1", optionTag: "C" },
        { optionText: "7", optionTag: "A" },
        { optionText: "0", optionTag: "D" },
        { optionText: "2", optionTag: "B" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which operation will set a specific bit in a number?",
      options: [
        { optionText: "num | (1 << pos)", optionTag: "D" },
        { optionText: "num ^ (1 << pos)", optionTag: "C" },
        { optionText: "num & ~(1 << pos)", optionTag: "B" },
        { optionText: "num & (1 << pos)", optionTag: "A" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "To check if the ith bit is set, which expression is correct?",
      options: [
        { optionText: "(num & (1 << i)) != 0", optionTag: "A" },
        { optionText: "num >> i", optionTag: "C" },
        { optionText: "num << i", optionTag: "B" },
        { optionText: "num ^ i", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What is the result of `5 | 2` in binary?",
      options: [
        { optionText: "111", optionTag: "C" },
        { optionText: "101", optionTag: "A" },
        { optionText: "110", optionTag: "B" },
        { optionText: "100", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which operator in Python represents a right shift?",
      options: [
        { optionText: ">>", optionTag: "B" },
        { optionText: "<<", optionTag: "C" },
        { optionText: "&", optionTag: "D" },
        { optionText: "^", optionTag: "A" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "How many bits are set in the number 13 (binary 1101)?",
      options: [
        { optionText: "3", optionTag: "D" },
        { optionText: "2", optionTag: "B" },
        { optionText: "4", optionTag: "C" },
        { optionText: "1", optionTag: "A" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "What does `num & (num - 1)` do?",
      options: [
        { optionText: "Removes the lowest set bit", optionTag: "A" },
        { optionText: "Toggles all bits", optionTag: "B" },
        { optionText: "Clears all bits", optionTag: "D" },
        { optionText: "Adds 1 to number", optionTag: "C" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which of the following expressions flips all the bits in Python?",
      options: [
        { optionText: "~num", optionTag: "A" },
        { optionText: "not num", optionTag: "B" },
        { optionText: "num ^ 1", optionTag: "D" },
        { optionText: "num & 0", optionTag: "C" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What will `1 << 4` return?",
      options: [
        { optionText: "16", optionTag: "D" },
        { optionText: "4", optionTag: "B" },
        { optionText: "8", optionTag: "A" },
        { optionText: "2", optionTag: "C" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "Which bitwise operation is idempotent?",
      options: [
        { optionText: "OR (|)", optionTag: "C" },
        { optionText: "AND (&)", optionTag: "B" },
        { optionText: "XOR (^)", optionTag: "A" },
        { optionText: "NOT (~)", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "What is the result of `0b1011 & 0b1100`?",
      options: [
        { optionText: "0b1000", optionTag: "B" },
        { optionText: "0b1010", optionTag: "C" },
        { optionText: "0b1111", optionTag: "D" },
        { optionText: "0b0011", optionTag: "A" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which operator can be used to swap two variables without a temp using XOR?",
      options: [
        { optionText: "^", optionTag: "A" },
        { optionText: ">>", optionTag: "D" },
        { optionText: "&", optionTag: "B" },
        { optionText: "|", optionTag: "C" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "How do you isolate the lowest set bit in `num`?",
      options: [
        { optionText: "num & -num", optionTag: "C" },
        { optionText: "num | num", optionTag: "B" },
        { optionText: "num ^ num", optionTag: "D" },
        { optionText: "num >> 1", optionTag: "A" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which value does `0b1111 ^ 0b0101` evaluate to?",
      options: [
        { optionText: "0b1010", optionTag: "A" },
        { optionText: "0b0110", optionTag: "D" },
        { optionText: "0b1001", optionTag: "B" },
        { optionText: "0b1100", optionTag: "C" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What is the output of `0b1101 | 0b1010`?",
      options: [
        { optionText: "0b1111", optionTag: "D" },
        { optionText: "0b1000", optionTag: "B" },
        { optionText: "0b0111", optionTag: "C" },
        { optionText: "0b0000", optionTag: "A" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "How many bits does Python use to store an int?",
      options: [
        { optionText: "Unlimited (dynamic)", optionTag: "A" },
        { optionText: "32 bits fixed", optionTag: "B" },
        { optionText: "Depends on interpreter", optionTag: "D" },
        { optionText: "64 bits always", optionTag: "C" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which is used to test if a bitmask matches a pattern?",
      options: [
        { optionText: "bitmask & pattern", optionTag: "A" },
        { optionText: "bitmask | pattern", optionTag: "C" },
        { optionText: "bitmask ^ pattern", optionTag: "B" },
        { optionText: "bitmask + pattern", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What is `1 << 0`?",
      options: [
        { optionText: "1", optionTag: "D" },
        { optionText: "0", optionTag: "C" },
        { optionText: "2", optionTag: "A" },
        { optionText: "4", optionTag: "B" },
      ],
      correctOption: "D",
      score: 1,
    },
  ],
};

export default quizData;