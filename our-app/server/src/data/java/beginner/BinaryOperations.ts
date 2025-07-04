// File: binary_operations.ts

import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Java Binary Operations - Beginner Quiz",
  quizLevel: "beginner",
  lang: "java",
  description: "This quiz tests your foundational knowledge of binary operations in Java.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Binary Operations"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "Which operator is used for bitwise AND in Java?",
      options: [
        { optionText: "&", optionTag: "B" },
        { optionText: "|", optionTag: "A" },
        { optionText: "^", optionTag: "C" },
        { optionText: "&&", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is the result of 5 & 3?",
      options: [
        { optionText: "1", optionTag: "A" },
        { optionText: "2", optionTag: "B" },
        { optionText: "0", optionTag: "C" },
        { optionText: "8", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which bitwise operator performs XOR in Java?",
      options: [
        { optionText: "|", optionTag: "B" },
        { optionText: "^", optionTag: "C" },
        { optionText: "!", optionTag: "D" },
        { optionText: "&", optionTag: "A" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which operator is used to shift bits to the left?",
      options: [
        { optionText: "<<", optionTag: "A" },
        { optionText: ">>", optionTag: "B" },
        { optionText: ">>>", optionTag: "C" },
        { optionText: "<>", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is 1 << 3?",
      options: [
        { optionText: "8", optionTag: "D" },
        { optionText: "3", optionTag: "B" },
        { optionText: "6", optionTag: "C" },
        { optionText: "4", optionTag: "A" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which operator in Java performs bitwise OR?",
      options: [
        { optionText: "&", optionTag: "C" },
        { optionText: "||", optionTag: "D" },
        { optionText: "|", optionTag: "A" },
        { optionText: "^", optionTag: "B" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which operator performs unsigned right shift?",
      options: [
        { optionText: ">>>", optionTag: "B" },
        { optionText: ">>", optionTag: "C" },
        { optionText: "<<", optionTag: "A" },
        { optionText: "//", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "How are negative numbers represented in binary?",
      options: [
        { optionText: "1's complement", optionTag: "C" },
        { optionText: "Sign magnitude", optionTag: "D" },
        { optionText: "Floating point", optionTag: "A" },
        { optionText: "2's complement", optionTag: "B" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What does the ~ operator do?",
      options: [
        { optionText: "Bitwise AND", optionTag: "A" },
        { optionText: "Bitwise NOT", optionTag: "D" },
        { optionText: "Bitwise OR", optionTag: "B" },
        { optionText: "Shift operator", optionTag: "C" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What is the binary representation of 10?",
      options: [
        { optionText: "1010", optionTag: "A" },
        { optionText: "1001", optionTag: "B" },
        { optionText: "1110", optionTag: "C" },
        { optionText: "1000", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the value of ~5 in Java (32-bit)?",
      options: [
        { optionText: "-6", optionTag: "C" },
        { optionText: "-5", optionTag: "B" },
        { optionText: "4", optionTag: "A" },
        { optionText: "-4", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which bitwise operator clears a specific bit?",
      options: [
        { optionText: "& with bit mask", optionTag: "B" },
        { optionText: "| with bit mask", optionTag: "A" },
        { optionText: "^ with 1", optionTag: "C" },
        { optionText: ">>", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which operator is used to flip a single bit?",
      options: [
        { optionText: "^", optionTag: "A" },
        { optionText: "|", optionTag: "C" },
        { optionText: "&", optionTag: "D" },
        { optionText: "~", optionTag: "B" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What does 7 >> 1 return?",
      options: [
        { optionText: "3", optionTag: "D" },
        { optionText: "1", optionTag: "B" },
        { optionText: "7", optionTag: "C" },
        { optionText: "2", optionTag: "A" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "How many bits are there in a Java int?",
      options: [
        { optionText: "32", optionTag: "B" },
        { optionText: "16", optionTag: "A" },
        { optionText: "8", optionTag: "C" },
        { optionText: "64", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is the result of 6 | 2?",
      options: [
        { optionText: "6", optionTag: "A" },
        { optionText: "8", optionTag: "D" },
        { optionText: "4", optionTag: "B" },
        { optionText: "2", optionTag: "C" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following clears all bits?",
      options: [
        { optionText: "x & 0", optionTag: "C" },
        { optionText: "x | 0", optionTag: "A" },
        { optionText: "~x", optionTag: "D" },
        { optionText: "x ^ x", optionTag: "B" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "How do you test whether the ith bit is set?",
      options: [
        { optionText: "(x & (1 << i)) != 0", optionTag: "B" },
        { optionText: "(x | (1 << i)) == 0", optionTag: "C" },
        { optionText: "x >> i", optionTag: "A" },
        { optionText: "~(x & i)", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which of the following sets the ith bit?",
      options: [
        { optionText: "x | (1 << i)", optionTag: "A" },
        { optionText: "x & (1 << i)", optionTag: "C" },
        { optionText: "x ^ (1 << i)", optionTag: "B" },
        { optionText: "x >> i", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following toggles the ith bit?",
      options: [
        { optionText: "x ^ (1 << i)", optionTag: "D" },
        { optionText: "x | (1 << i)", optionTag: "B" },
        { optionText: "x & ~(1 << i)", optionTag: "C" },
        { optionText: "x >> i", optionTag: "A" }
      ],
      correctOption: "D",
      score: 1
    }
  ]
};

export default quizData;