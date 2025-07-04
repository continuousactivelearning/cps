import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python Searching Algorithms - Beginner Quiz",
  quizLevel: "beginner",
  lang: "python",
  description: "Evaluate your understanding of basic searching techniques in Python.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Searching Algorithms"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "Which of the following is a linear search algorithm?",
      options: [
        { optionText: "Binary Search", optionTag: "A" },
        { optionText: "Hashing", optionTag: "B" },
        { optionText: "Linear Search", optionTag: "C" },
        { optionText: "Ternary Search", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is the time complexity of linear search in the worst case?",
      options: [
        { optionText: "O(n²)", optionTag: "C" },
        { optionText: "O(log n)", optionTag: "A" },
        { optionText: "O(1)", optionTag: "D" },
        { optionText: "O(n)", optionTag: "B" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which searching algorithm requires the input array to be sorted?",
      options: [
        { optionText: "Linear Search", optionTag: "A" },
        { optionText: "Binary Search", optionTag: "D" },
        { optionText: "Hashing", optionTag: "C" },
        { optionText: "Interpolation Search", optionTag: "B" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which of the following has the best average time complexity for searching?",
      options: [
        { optionText: "Hash Table", optionTag: "C" },
        { optionText: "Binary Search", optionTag: "A" },
        { optionText: "Linear Search", optionTag: "D" },
        { optionText: "Jump Search", optionTag: "B" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which of the following is not a requirement for Binary Search?",
      options: [
        { optionText: "Sorted array", optionTag: "A" },
        { optionText: "Constant time access", optionTag: "B" },
        { optionText: "Random access memory", optionTag: "D" },
        { optionText: "Hash function", optionTag: "C" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which Python keyword is used for searching an element in a list?",
      options: [
        { optionText: "in", optionTag: "A" },
        { optionText: "for", optionTag: "C" },
        { optionText: "search", optionTag: "D" },
        { optionText: "find", optionTag: "B" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Binary Search follows which algorithmic technique?",
      options: [
        { optionText: "Greedy", optionTag: "D" },
        { optionText: "Backtracking", optionTag: "C" },
        { optionText: "Divide and Conquer", optionTag: "B" },
        { optionText: "Dynamic Programming", optionTag: "A" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is the average time complexity of Binary Search?",
      options: [
        { optionText: "O(log n)", optionTag: "C" },
        { optionText: "O(n)", optionTag: "D" },
        { optionText: "O(n²)", optionTag: "A" },
        { optionText: "O(1)", optionTag: "B" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which search algorithm divides the array into smaller blocks to search?",
      options: [
        { optionText: "Linear Search", optionTag: "D" },
        { optionText: "Jump Search", optionTag: "A" },
        { optionText: "Binary Search", optionTag: "C" },
        { optionText: "Ternary Search", optionTag: "B" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the return value of list.index(x) in Python if x exists?",
      options: [
        { optionText: "Index of x", optionTag: "C" },
        { optionText: "True", optionTag: "A" },
        { optionText: "ValueError", optionTag: "D" },
        { optionText: "False", optionTag: "B" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which of these algorithms has O(log log n) time in best case?",
      options: [
        { optionText: "Linear Search", optionTag: "D" },
        { optionText: "Jump Search", optionTag: "C" },
        { optionText: "Exponential Search", optionTag: "B" },
        { optionText: "Binary Search", optionTag: "A" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which algorithm is most suitable when element distribution is uniform?",
      options: [
        { optionText: "Interpolation Search", optionTag: "B" },
        { optionText: "Binary Search", optionTag: "A" },
        { optionText: "Jump Search", optionTag: "C" },
        { optionText: "Linear Search", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What will list.index(x) raise if x is not found?",
      options: [
        { optionText: "None", optionTag: "D" },
        { optionText: "ValueError", optionTag: "B" },
        { optionText: "TypeError", optionTag: "A" },
        { optionText: "IndexError", optionTag: "C" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which search does not require elements to be ordered?",
      options: [
        { optionText: "Binary Search", optionTag: "C" },
        { optionText: "Interpolation Search", optionTag: "B" },
        { optionText: "Linear Search", optionTag: "A" },
        { optionText: "Exponential Search", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which technique starts by finding a range and then performs binary search?",
      options: [
        { optionText: "Exponential Search", optionTag: "D" },
        { optionText: "Jump Search", optionTag: "A" },
        { optionText: "Ternary Search", optionTag: "B" },
        { optionText: "Linear Search", optionTag: "C" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which search algorithm divides array into three parts?",
      options: [
        { optionText: "Binary Search", optionTag: "C" },
        { optionText: "Ternary Search", optionTag: "B" },
        { optionText: "Linear Search", optionTag: "A" },
        { optionText: "Jump Search", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which data structure provides O(1) average search time?",
      options: [
        { optionText: "List", optionTag: "C" },
        { optionText: "Set", optionTag: "B" },
        { optionText: "Tuple", optionTag: "A" },
        { optionText: "Dictionary", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which built-in data type supports fast membership tests?",
      options: [
        { optionText: "Tuple", optionTag: "A" },
        { optionText: "List", optionTag: "C" },
        { optionText: "Dictionary", optionTag: "D" },
        { optionText: "String", optionTag: "B" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which is the most basic searching algorithm?",
      options: [
        { optionText: "Linear Search", optionTag: "B" },
        { optionText: "Binary Search", optionTag: "D" },
        { optionText: "Jump Search", optionTag: "A" },
        { optionText: "Ternary Search", optionTag: "C" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which module provides binary search in Python?",
      options: [
        { optionText: "bisect", optionTag: "C" },
        { optionText: "math", optionTag: "B" },
        { optionText: "collections", optionTag: "D" },
        { optionText: "searchlib", optionTag: "A" }
      ],
      correctOption: "C",
      score: 1
    }
  ]
};

export default quizData;
