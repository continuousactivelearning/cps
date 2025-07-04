import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python - Segment Trees - Beginner Quiz",
  quizLevel: "beginner",
  lang: "python",
  description: "Quiz to assess understanding of Segment Trees in Python.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Segment Trees",
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the primary use of a Segment Tree?",
      options: [
        { optionText: "Matrix multiplication", optionTag: "A" },
        { optionText: "Range queries and updates", optionTag: "D" },
        { optionText: "Sorting elements", optionTag: "B" },
        { optionText: "Graph traversal", optionTag: "C" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "What is the time complexity for querying a Segment Tree?",
      options: [
        { optionText: "O(log n)", optionTag: "A" },
        { optionText: "O(n)", optionTag: "C" },
        { optionText: "O(n log n)", optionTag: "D" },
        { optionText: "O(1)", optionTag: "B" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which operation is efficiently supported by a Segment Tree?",
      options: [
        { optionText: "Linear Search", optionTag: "C" },
        { optionText: "Range minimum query", optionTag: "D" },
        { optionText: "Sorting", optionTag: "B" },
        { optionText: "Matrix addition", optionTag: "A" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "How many nodes does a Segment Tree require for n elements?",
      options: [
        { optionText: "2n", optionTag: "A" },
        { optionText: "4n", optionTag: "B" },
        { optionText: "n", optionTag: "C" },
        { optionText: "n^2", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What is the height of a Segment Tree for n elements?",
      options: [
        { optionText: "log₂n", optionTag: "A" },
        { optionText: "n", optionTag: "B" },
        { optionText: "n/2", optionTag: "C" },
        { optionText: "√n", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Segment Trees are mainly used in which domain?",
      options: [
        { optionText: "Operating Systems", optionTag: "B" },
        { optionText: "Competitive Programming", optionTag: "C" },
        { optionText: "Web Development", optionTag: "D" },
        { optionText: "Networking", optionTag: "A" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which traversal method is commonly used to build a Segment Tree?",
      options: [
        { optionText: "Breadth-first traversal", optionTag: "B" },
        { optionText: "Pre-order traversal", optionTag: "A" },
        { optionText: "Post-order traversal", optionTag: "C" },
        { optionText: "In-order traversal", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What type of structure is a Segment Tree?",
      options: [
        { optionText: "Linear list", optionTag: "D" },
        { optionText: "Graph", optionTag: "C" },
        { optionText: "Binary tree", optionTag: "A" },
        { optionText: "Heap", optionTag: "B" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What is stored in each node of a Segment Tree?",
      options: [
        { optionText: "Sum of a segment", optionTag: "C" },
        { optionText: "Address of data", optionTag: "D" },
        { optionText: "Heap value", optionTag: "A" },
        { optionText: "Length of array", optionTag: "B" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which type of queries can Segment Trees answer?",
      options: [
        { optionText: "Only single element queries", optionTag: "C" },
        { optionText: "Range queries like sum/min/max", optionTag: "B" },
        { optionText: "Only max queries", optionTag: "D" },
        { optionText: "Only sum queries", optionTag: "A" },
      ],
      correctOption: "B",
      score: 1,
    },

    // Next 10 Questions
    {
      questionText: "Which operation updates the tree structure in Segment Trees?",
      options: [
        { optionText: "Query", optionTag: "A" },
        { optionText: "Build", optionTag: "B" },
        { optionText: "Update", optionTag: "D" },
        { optionText: "Traverse", optionTag: "C" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "What is the space complexity of Segment Tree?",
      options: [
        { optionText: "O(log n)", optionTag: "D" },
        { optionText: "O(n log n)", optionTag: "B" },
        { optionText: "O(n)", optionTag: "A" },
        { optionText: "O(4n)", optionTag: "C" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which of the following is a common use of Segment Trees?",
      options: [
        { optionText: "Balancing BSTs", optionTag: "A" },
        { optionText: "Querying data range efficiently", optionTag: "B" },
        { optionText: "Searching values in O(1)", optionTag: "D" },
        { optionText: "Detecting cycles in a graph", optionTag: "C" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "When building a Segment Tree, the array is divided:",
      options: [
        { optionText: "Into non-overlapping subarrays", optionTag: "A" },
        { optionText: "Into overlapping subarrays", optionTag: "D" },
        { optionText: "Into pairs only", optionTag: "C" },
        { optionText: "Randomly", optionTag: "B" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What kind of tree is a Segment Tree?",
      options: [
        { optionText: "Non-binary tree", optionTag: "B" },
        { optionText: "Full binary tree", optionTag: "C" },
        { optionText: "Threaded tree", optionTag: "A" },
        { optionText: "Ternary tree", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "What is the build time of a Segment Tree?",
      options: [
        { optionText: "O(n)", optionTag: "D" },
        { optionText: "O(n log n)", optionTag: "B" },
        { optionText: "O(log n)", optionTag: "C" },
        { optionText: "O(n^2)", optionTag: "A" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "Segment Trees can be modified to support:",
      options: [
        { optionText: "Dynamic array resizing", optionTag: "C" },
        { optionText: "Range updates", optionTag: "A" },
        { optionText: "Pointer arithmetic", optionTag: "D" },
        { optionText: "Floating-point precision", optionTag: "B" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which problem is NOT typically solved with Segment Trees?",
      options: [
        { optionText: "Range sum queries", optionTag: "C" },
        { optionText: "Finding median", optionTag: "A" },
        { optionText: "Range minimum queries", optionTag: "B" },
        { optionText: "Range max queries", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "How are Segment Trees initialized in Python?",
      options: [
        { optionText: "Using list comprehensions", optionTag: "C" },
        { optionText: "Using binary heaps", optionTag: "B" },
        { optionText: "Using array doubling", optionTag: "D" },
        { optionText: "Using recursion", optionTag: "A" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which scenario is ideal for using Segment Trees?",
      options: [
        { optionText: "Real-time user interactions", optionTag: "D" },
        { optionText: "Dynamic queries and updates on arrays", optionTag: "B" },
        { optionText: "One-time array access", optionTag: "A" },
        { optionText: "Searching a sorted array", optionTag: "C" },
      ],
      correctOption: "B",
      score: 1,
    },
  ],
};

export default quizData;