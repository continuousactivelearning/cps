import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Java Binary Operations - Intermediate Quiz",
  quizLevel: "intermediate",
  lang: "java",
  description: "Evaluate your understanding of binary operations in Java.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Binary Operations"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "Which operator is used for bitwise AND in Java?",
      options: [
        { optionText: "&", optionTag: "A" },
        { optionText: "&&", optionTag: "B" },
        { optionText: "|", optionTag: "C" },
        { optionText: "^", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What does the '>>' operator do in Java?",
      options: [
        { optionText: "Unsigned right shift", optionTag: "C" },
        { optionText: "Left shift", optionTag: "A" },
        { optionText: "Arithmetic right shift", optionTag: "B" },
        { optionText: "Bitwise NOT", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is the result of 5 & 3?",
      options: [
        { optionText: "1", optionTag: "A" },
        { optionText: "0", optionTag: "B" },
        { optionText: "2", optionTag: "C" },
        { optionText: "7", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which operator performs a bitwise XOR?",
      options: [
        { optionText: "|", optionTag: "A" },
        { optionText: "^", optionTag: "B" },
        { optionText: "~", optionTag: "C" },
        { optionText: "!", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which binary operation flips all bits?",
      options: [
        { optionText: "~", optionTag: "D" },
        { optionText: "^", optionTag: "B" },
        { optionText: "!", optionTag: "C" },
        { optionText: "&", optionTag: "A" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What does the '<<' operator do?",
      options: [
        { optionText: "Bitwise OR", optionTag: "A" },
        { optionText: "Left shift", optionTag: "B" },
        { optionText: "XOR", optionTag: "C" },
        { optionText: "Right shift", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which of the following sets only the 3rd bit?",
      options: [
        { optionText: "1 << 3", optionTag: "C" },
        { optionText: "1 << 2", optionTag: "A" },
        { optionText: "1 << 4", optionTag: "B" },
        { optionText: "1 >> 2", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is 4 | 1?",
      options: [
        { optionText: "5", optionTag: "A" },
        { optionText: "3", optionTag: "B" },
        { optionText: "2", optionTag: "C" },
        { optionText: "6", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How many bits are there in a Java int?",
      options: [
        { optionText: "32", optionTag: "B" },
        { optionText: "16", optionTag: "C" },
        { optionText: "64", optionTag: "A" },
        { optionText: "8", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What does 1 << 3 equal?",
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
      questionText: "Which operator is used for unsigned right shift?",
      options: [
        { optionText: ">>>", optionTag: "A" },
        { optionText: "<<", optionTag: "B" },
        { optionText: ">>", optionTag: "C" },
        { optionText: "~", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the binary representation of 5?",
      options: [
        { optionText: "101", optionTag: "A" },
        { optionText: "110", optionTag: "B" },
        { optionText: "111", optionTag: "C" },
        { optionText: "100", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which operation checks if a bit is set?",
      options: [
        { optionText: "value & (1 << n)", optionTag: "D" },
        { optionText: "value | (1 << n)", optionTag: "A" },
        { optionText: "value ^ (1 << n)", optionTag: "B" },
        { optionText: "value >> n", optionTag: "C" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What is 7 ^ 3?",
      options: [
        { optionText: "4", optionTag: "C" },
        { optionText: "5", optionTag: "A" },
        { optionText: "6", optionTag: "B" },
        { optionText: "3", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which operator will turn off the nth bit?",
      options: [
        { optionText: "value & ~(1 << n)", optionTag: "A" },
        { optionText: "value | ~(1 << n)", optionTag: "B" },
        { optionText: "value ^ (1 << n)", optionTag: "C" },
        { optionText: "value >> n", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is ~0?",
      options: [
        { optionText: "-1", optionTag: "B" },
        { optionText: "0", optionTag: "A" },
        { optionText: "1", optionTag: "C" },
        { optionText: "undefined", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which expression toggles the nth bit?",
      options: [
        { optionText: "value ^ (1 << n)", optionTag: "A" },
        { optionText: "value | (1 << n)", optionTag: "B" },
        { optionText: "value & (1 << n)", optionTag: "C" },
        { optionText: "value >> n", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How many bits are used in a Java byte?",
      options: [
        { optionText: "8", optionTag: "D" },
        { optionText: "4", optionTag: "B" },
        { optionText: "16", optionTag: "A" },
        { optionText: "32", optionTag: "C" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What is the output of 1 << 2?",
      options: [
        { optionText: "4", optionTag: "A" },
        { optionText: "2", optionTag: "B" },
        { optionText: "8", optionTag: "C" },
        { optionText: "6", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following clears all bits?",
      options: [
        { optionText: "value & 0", optionTag: "C" },
        { optionText: "value | 0", optionTag: "A" },
        { optionText: "value ^ value", optionTag: "B" },
        { optionText: "value << 1", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    }
  ]
};

export default quizData;