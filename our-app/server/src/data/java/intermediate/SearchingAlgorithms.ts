import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Java Searching Algorithms - Intermediate Quiz",
  quizLevel: "intermediate",
  lang: "java",
  description: "Assess your grasp of Java searching algorithms and their complexity, use-cases, and variations.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Searching Algorithms"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the worst-case time complexity of linear search?",
      options: [
        { optionText: "O(n)", optionTag: "A" },
        { optionText: "O(1)", optionTag: "B" },
        { optionText: "O(log n)", optionTag: "C" },
        { optionText: "O(n log n)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following is a prerequisite for binary search?",
      options: [
        { optionText: "All elements should be unique", optionTag: "A" },
        { optionText: "Array should be sorted", optionTag: "B" },
        { optionText: "Elements should be in decreasing order", optionTag: "C" },
        { optionText: "Elements must be even", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is the average time complexity of binary search?",
      options: [
        { optionText: "O(1)", optionTag: "A" },
        { optionText: "O(n)", optionTag: "B" },
        { optionText: "O(log n)", optionTag: "C" },
        { optionText: "O(n log n)", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which search algorithm is best for unsorted data?",
      options: [
        { optionText: "Binary Search", optionTag: "A" },
        { optionText: "Linear Search", optionTag: "B" },
        { optionText: "Jump Search", optionTag: "C" },
        { optionText: "Ternary Search", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which algorithm divides the array into three parts instead of two?",
      options: [
        { optionText: "Jump Search", optionTag: "A" },
        { optionText: "Linear Search", optionTag: "B" },
        { optionText: "Ternary Search", optionTag: "C" },
        { optionText: "Exponential Search", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is the advantage of jump search over linear search?",
      options: [
        { optionText: "It doesn’t require sorting", optionTag: "A" },
        { optionText: "It reduces the number of comparisons", optionTag: "B" },
        { optionText: "It’s more accurate", optionTag: "C" },
        { optionText: "It works on any data type", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Exponential Search works best on which type of data?",
      options: [
        { optionText: "Unsorted data", optionTag: "A" },
        { optionText: "Small arrays", optionTag: "B" },
        { optionText: "Sorted arrays", optionTag: "C" },
        { optionText: "Data with duplicates", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which algorithm searches in O(√n) time complexity?",
      options: [
        { optionText: "Binary Search", optionTag: "A" },
        { optionText: "Jump Search", optionTag: "B" },
        { optionText: "Linear Search", optionTag: "C" },
        { optionText: "Ternary Search", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which search technique is used in dictionaries?",
      options: [
        { optionText: "Binary Search", optionTag: "A" },
        { optionText: "Hashing", optionTag: "B" },
        { optionText: "Linear Search", optionTag: "C" },
        { optionText: "DFS", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is the best-case time complexity of binary search?",
      options: [
        { optionText: "O(n)", optionTag: "A" },
        { optionText: "O(1)", optionTag: "B" },
        { optionText: "O(log n)", optionTag: "C" },
        { optionText: "O(n log n)", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which search algorithm is recursive by nature?",
      options: [
        { optionText: "Linear Search", optionTag: "A" },
        { optionText: "Jump Search", optionTag: "B" },
        { optionText: "Binary Search", optionTag: "C" },
        { optionText: "Exponential Search", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which data structure is most suited for binary search?",
      options: [
        { optionText: "Array", optionTag: "A" },
        { optionText: "Stack", optionTag: "B" },
        { optionText: "Queue", optionTag: "C" },
        { optionText: "Linked List", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which algorithm can be considered as an optimization over binary search for unbounded search spaces?",
      options: [
        { optionText: "Linear Search", optionTag: "A" },
        { optionText: "Exponential Search", optionTag: "B" },
        { optionText: "Jump Search", optionTag: "C" },
        { optionText: "Ternary Search", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which searching algorithm has the highest number of comparisons in worst case?",
      options: [
        { optionText: "Binary Search", optionTag: "A" },
        { optionText: "Linear Search", optionTag: "B" },
        { optionText: "Jump Search", optionTag: "C" },
        { optionText: "Exponential Search", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which of the following works well when the element is uniformly distributed?",
      options: [
        { optionText: "Ternary Search", optionTag: "A" },
        { optionText: "Binary Search", optionTag: "B" },
        { optionText: "Interpolation Search", optionTag: "C" },
        { optionText: "Jump Search", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which of the following does not require data to be sorted?",
      options: [
        { optionText: "Binary Search", optionTag: "A" },
        { optionText: "Linear Search", optionTag: "B" },
        { optionText: "Interpolation Search", optionTag: "C" },
        { optionText: "Ternary Search", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is the auxiliary space complexity of binary search (recursive)?",
      options: [
        { optionText: "O(n)", optionTag: "A" },
        { optionText: "O(1)", optionTag: "B" },
        { optionText: "O(log n)", optionTag: "C" },
        { optionText: "O(n log n)", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "In Java, which collection uses binary search internally?",
      options: [
        { optionText: "LinkedList", optionTag: "A" },
        { optionText: "HashMap", optionTag: "B" },
        { optionText: "TreeSet", optionTag: "C" },
        { optionText: "ArrayList", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which algorithm divides and searches at the middle element?",
      options: [
        { optionText: "Jump Search", optionTag: "A" },
        { optionText: "Linear Search", optionTag: "B" },
        { optionText: "Binary Search", optionTag: "C" },
        { optionText: "DFS", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Binary Search fails to find correct element in which of the following?",
      options: [
        { optionText: "Unsorted arrays", optionTag: "A" },
        { optionText: "Sorted arrays", optionTag: "B" },
        { optionText: "Uniform distribution", optionTag: "C" },
        { optionText: "Empty array", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    }
  ]
};

export default quizData;