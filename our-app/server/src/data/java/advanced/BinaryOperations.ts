import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Java Binary Operations - Advanced Quiz",
  quizLevel: "advanced",
  lang: "java",
  description: "Advanced quiz on binary operations including bitwise manipulation in Java.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "BinaryOperations"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "Which Java operator is used for bitwise AND?",
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
      questionText: "What is the output of 5 & 3 in Java?",
      options: [
        { optionText: "1", optionTag: "D" },
        { optionText: "7", optionTag: "C" },
        { optionText: "0", optionTag: "B" },
        { optionText: "2", optionTag: "A" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which operator is used for left shift in Java?",
      options: [
        { optionText: ">>", optionTag: "C" },
        { optionText: "<<", optionTag: "B" },
        { optionText: ">>>", optionTag: "D" },
        { optionText: "<>", optionTag: "A" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is the result of 1 << 3?",
      options: [
        { optionText: "8", optionTag: "C" },
        { optionText: "2", optionTag: "A" },
        { optionText: "3", optionTag: "B" },
        { optionText: "4", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which operation clears the ith bit of a number?",
      options: [
        { optionText: "num & ~(1 << i)", optionTag: "B" },
        { optionText: "num ^ (1 << i)", optionTag: "D" },
        { optionText: "num | (1 << i)", optionTag: "C" },
        { optionText: "num & (1 << i)", optionTag: "A" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "How to check if a number is power of 2?",
      options: [
        { optionText: "(n & (n - 1)) == 0", optionTag: "A" },
        { optionText: "n % 2 == 0", optionTag: "C" },
        { optionText: "n >> 1 == 0", optionTag: "B" },
        { optionText: "n | 1 == n", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which bitwise operation flips all bits?",
      options: [
        { optionText: "~", optionTag: "D" },
        { optionText: "^", optionTag: "C" },
        { optionText: "&", optionTag: "B" },
        { optionText: "|", optionTag: "A" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What is 7 | 2 in Java?",
      options: [
        { optionText: "7", optionTag: "A" },
        { optionText: "5", optionTag: "B" },
        { optionText: "2", optionTag: "C" },
        { optionText: "1", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which bitwise operation is used to toggle a bit?",
      options: [
        { optionText: "^", optionTag: "C" },
        { optionText: "&", optionTag: "A" },
        { optionText: "||", optionTag: "D" },
        { optionText: "<<", optionTag: "B" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is the output of 8 >> 2?",
      options: [
        { optionText: "2", optionTag: "B" },
        { optionText: "4", optionTag: "D" },
        { optionText: "1", optionTag: "A" },
        { optionText: "3", optionTag: "C" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which operation sets the ith bit of a number?",
      options: [
        { optionText: "num | (1 << i)", optionTag: "D" },
        { optionText: "num & ~(1 << i)", optionTag: "B" },
        { optionText: "num ^ (1 << i)", optionTag: "A" },
        { optionText: "num << i", optionTag: "C" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What is the binary representation of 10?",
      options: [
        { optionText: "1010", optionTag: "A" },
        { optionText: "1100", optionTag: "B" },
        { optionText: "1001", optionTag: "C" },
        { optionText: "1110", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which operator is used for unsigned right shift?",
      options: [
        { optionText: ">>>", optionTag: "A" },
        { optionText: ">>", optionTag: "C" },
        { optionText: "<<", optionTag: "D" },
        { optionText: "~", optionTag: "B" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How to count set bits in an integer?",
      options: [
        { optionText: "Using Brian Kernighan's Algorithm", optionTag: "C" },
        { optionText: "Divide repeatedly", optionTag: "B" },
        { optionText: "Modulo by 2", optionTag: "D" },
        { optionText: "Bitwise AND with 0", optionTag: "A" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which bit operation results in 0 if both bits are 1?",
      options: [
        { optionText: "^", optionTag: "D" },
        { optionText: "&", optionTag: "A" },
        { optionText: "|", optionTag: "B" },
        { optionText: "~", optionTag: "C" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which bit is the least significant bit in 1011?",
      options: [
        { optionText: "1", optionTag: "A" },
        { optionText: "0", optionTag: "B" },
        { optionText: "1st bit from left", optionTag: "C" },
        { optionText: "2nd bit", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What does num & (num - 1) do?",
      options: [
        { optionText: "Clears the lowest set bit", optionTag: "B" },
        { optionText: "Sets all bits to 1", optionTag: "C" },
        { optionText: "Sets LSB", optionTag: "D" },
        { optionText: "Checks even", optionTag: "A" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "How to check if ith bit is set?",
      options: [
        { optionText: "(num & (1 << i)) != 0", optionTag: "C" },
        { optionText: "(num >> i) == 1", optionTag: "A" },
        { optionText: "(num & i) == 0", optionTag: "B" },
        { optionText: "(num << i) != 0", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which number has only one set bit?",
      options: [
        { optionText: "4", optionTag: "C" },
        { optionText: "5", optionTag: "D" },
        { optionText: "3", optionTag: "A" },
        { optionText: "7", optionTag: "B" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What does the ~ operator do in Java?",
      options: [
        { optionText: "Bitwise complement", optionTag: "D" },
        { optionText: "Negation", optionTag: "C" },
        { optionText: "And operation", optionTag: "B" },
        { optionText: "Or operation", optionTag: "A" }
      ],
      correctOption: "D",
      score: 1
    }
  ]
};

export default quizData;