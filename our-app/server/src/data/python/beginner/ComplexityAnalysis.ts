import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python Complexity Analysis - Beginner Quiz",
  quizLevel: "beginner",
  lang: "python",
  description: "This quiz tests your basic understanding of time and space complexity in Python.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "ComplexityAnalysis"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the time complexity of accessing an element in a list by index in Python?",
      options: [
        { optionText: "O(1)", optionTag: "A" },
        { optionText: "O(n)", optionTag: "B" },
        { optionText: "O(log n)", optionTag: "C" },
        { optionText: "O(n^2)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following has the best time complexity?",
      options: [
        { optionText: "O(1)", optionTag: "D" },
        { optionText: "O(n)", optionTag: "A" },
        { optionText: "O(log n)", optionTag: "B" },
        { optionText: "O(n log n)", optionTag: "C" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What is the time complexity of appending an item to the end of a Python list?",
      options: [
        { optionText: "O(n)", optionTag: "C" },
        { optionText: "O(1)", optionTag: "B" },
        { optionText: "O(n^2)", optionTag: "A" },
        { optionText: "O(log n)", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which of these complexities is the worst?",
      options: [
        { optionText: "O(n^2)", optionTag: "C" },
        { optionText: "O(n)", optionTag: "A" },
        { optionText: "O(log n)", optionTag: "D" },
        { optionText: "O(1)", optionTag: "B" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "If an algorithm takes twice as long for each element added, its complexity is:",
      options: [
        { optionText: "O(log n)", optionTag: "B" },
        { optionText: "O(n)", optionTag: "D" },
        { optionText: "O(2^n)", optionTag: "A" },
        { optionText: "O(1)", optionTag: "C" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What does Big-O notation describe?",
      options: [
        { optionText: "Worst-case performance", optionTag: "C" },
        { optionText: "Exact runtime", optionTag: "D" },
        { optionText: "Best-case performance", optionTag: "B" },
        { optionText: "Average-case performance", optionTag: "A" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is the space complexity of storing n integers in a list?",
      options: [
        { optionText: "O(n)", optionTag: "A" },
        { optionText: "O(log n)", optionTag: "C" },
        { optionText: "O(1)", optionTag: "B" },
        { optionText: "O(n^2)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following grows fastest?",
      options: [
        { optionText: "O(n!)", optionTag: "B" },
        { optionText: "O(2^n)", optionTag: "A" },
        { optionText: "O(n^3)", optionTag: "C" },
        { optionText: "O(n log n)", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is the time complexity of checking membership in a set?",
      options: [
        { optionText: "O(1)", optionTag: "D" },
        { optionText: "O(n)", optionTag: "C" },
        { optionText: "O(n log n)", optionTag: "B" },
        { optionText: "O(log n)", optionTag: "A" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which is better: O(n log n) or O(n^2)?",
      options: [
        { optionText: "O(n^2)", optionTag: "C" },
        { optionText: "Both are equal", optionTag: "B" },
        { optionText: "O(n log n)", optionTag: "A" },
        { optionText: "Depends on n", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which Big-O notation represents logarithmic time?",
      options: [
        { optionText: "O(log n)", optionTag: "C" },
        { optionText: "O(n)", optionTag: "A" },
        { optionText: "O(1)", optionTag: "D" },
        { optionText: "O(n^2)", optionTag: "B" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Time complexity of linear search in worst case?",
      options: [
        { optionText: "O(n)", optionTag: "D" },
        { optionText: "O(1)", optionTag: "A" },
        { optionText: "O(log n)", optionTag: "C" },
        { optionText: "O(n^2)", optionTag: "B" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which of these is not a valid complexity class?",
      options: [
        { optionText: "O(√n)", optionTag: "A" },
        { optionText: "O(log log n)", optionTag: "B" },
        { optionText: "O(1)", optionTag: "D" },
        { optionText: "O(n!)", optionTag: "C" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the worst-case time for binary search?",
      options: [
        { optionText: "O(log n)", optionTag: "B" },
        { optionText: "O(n)", optionTag: "D" },
        { optionText: "O(n^2)", optionTag: "A" },
        { optionText: "O(1)", optionTag: "C" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What does O(n^2) mean?",
      options: [
        { optionText: "Time doubles for every input", optionTag: "C" },
        { optionText: "Time proportional to square of input size", optionTag: "A" },
        { optionText: "Linear time", optionTag: "D" },
        { optionText: "Constant time", optionTag: "B" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which operation is fastest in Python dict?",
      options: [
        { optionText: "Access by key", optionTag: "A" },
        { optionText: "Iteration", optionTag: "C" },
        { optionText: "Sorting", optionTag: "B" },
        { optionText: "Adding at end", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Time complexity of inserting at beginning of a Python list?",
      options: [
        { optionText: "O(n)", optionTag: "B" },
        { optionText: "O(1)", optionTag: "D" },
        { optionText: "O(n log n)", optionTag: "A" },
        { optionText: "O(log n)", optionTag: "C" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which structure provides O(1) access time?",
      options: [
        { optionText: "List", optionTag: "B" },
        { optionText: "Dict", optionTag: "A" },
        { optionText: "Tuple", optionTag: "C" },
        { optionText: "Set", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which is better for searching: O(n) or O(log n)?",
      options: [
        { optionText: "O(log n)", optionTag: "C" },
        { optionText: "Both are same", optionTag: "B" },
        { optionText: "O(n)", optionTag: "D" },
        { optionText: "O(n^2)", optionTag: "A" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which of these is constant time?",
      options: [
        { optionText: "Accessing element by index", optionTag: "B" },
        { optionText: "Sorting a list", optionTag: "C" },
        { optionText: "Linear search", optionTag: "A" },
        { optionText: "Looping through a list", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    }
  ]
};

export default quizData;