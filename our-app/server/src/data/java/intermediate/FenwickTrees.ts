import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Java Fenwick Trees - Intermediate Quiz",
  quizLevel: "intermediate",
  lang: "java",
  description: "Assess your understanding of Fenwick Trees (Binary Indexed Trees) used for efficient prefix queries.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "FenwickTrees"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is another name for a Fenwick Tree?",
      options: [
        { optionText: "Binary Indexed Tree", optionTag: "A" },
        { optionText: "AVL Tree", optionTag: "B" },
        { optionText: "Prefix Tree", optionTag: "C" },
        { optionText: "Balanced Binary Tree", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the main use of Fenwick Trees?",
      options: [
        { optionText: "Efficient prefix sum queries", optionTag: "C" },
        { optionText: "Finding shortest paths", optionTag: "A" },
        { optionText: "Graph traversal", optionTag: "B" },
        { optionText: "Dynamic memory allocation", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is the time complexity of point update in Fenwick Tree?",
      options: [
        { optionText: "O(log n)", optionTag: "D" },
        { optionText: "O(1)", optionTag: "A" },
        { optionText: "O(n)", optionTag: "C" },
        { optionText: "O(n log n)", optionTag: "B" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What is the time complexity of prefix sum query in Fenwick Tree?",
      options: [
        { optionText: "O(log n)", optionTag: "B" },
        { optionText: "O(n)", optionTag: "C" },
        { optionText: "O(1)", optionTag: "D" },
        { optionText: "O(n^2)", optionTag: "A" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which bitwise operation is often used in Fenwick Tree logic?",
      options: [
        { optionText: "x & -x", optionTag: "C" },
        { optionText: "x << 1", optionTag: "A" },
        { optionText: "x ^ x", optionTag: "D" },
        { optionText: "x >> 1", optionTag: "B" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "How is a Fenwick Tree typically implemented?",
      options: [
        { optionText: "Using an array", optionTag: "A" },
        { optionText: "Using a hashmap", optionTag: "C" },
        { optionText: "Using a stack", optionTag: "D" },
        { optionText: "Using a set", optionTag: "B" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following is a limitation of Fenwick Trees?",
      options: [
        { optionText: "Not suitable for range updates", optionTag: "B" },
        { optionText: "Cannot compute prefix sums", optionTag: "C" },
        { optionText: "Requires O(n^2) space", optionTag: "A" },
        { optionText: "Works only on strings", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which operation cannot be performed efficiently with Fenwick Tree?",
      options: [
        { optionText: "Range minimum query", optionTag: "C" },
        { optionText: "Point update", optionTag: "A" },
        { optionText: "Prefix sum query", optionTag: "D" },
        { optionText: "Initialization", optionTag: "B" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Fenwick Tree is commonly used in which type of problems?",
      options: [
        { optionText: "Competitive programming", optionTag: "D" },
        { optionText: "Database transactions", optionTag: "C" },
        { optionText: "String matching", optionTag: "B" },
        { optionText: "Graph coloring", optionTag: "A" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which function helps you find prefix sum up to index 'i'?",
      options: [
        { optionText: "query(i)", optionTag: "B" },
        { optionText: "range(i, j)", optionTag: "D" },
        { optionText: "update(i, val)", optionTag: "C" },
        { optionText: "reset(i)", optionTag: "A" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What does tree[i] store in a Fenwick Tree?",
      options: [
        { optionText: "Sum of certain range ending at i", optionTag: "C" },
        { optionText: "Exact value at index i", optionTag: "B" },
        { optionText: "Frequency of elements", optionTag: "D" },
        { optionText: "Product of range", optionTag: "A" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What does the index update formula look like in Fenwick Tree?",
      options: [
        { optionText: "i += i & -i", optionTag: "A" },
        { optionText: "i = i + 1", optionTag: "C" },
        { optionText: "i = i * 2", optionTag: "B" },
        { optionText: "i = 0", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Can Fenwick Tree support range sum queries?",
      options: [
        { optionText: "Yes, using prefix sums", optionTag: "D" },
        { optionText: "Only with range updates", optionTag: "B" },
        { optionText: "No", optionTag: "A" },
        { optionText: "Only in trees", optionTag: "C" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which data structure is more memory efficient for prefix sums?",
      options: [
        { optionText: "Fenwick Tree", optionTag: "A" },
        { optionText: "Segment Tree", optionTag: "D" },
        { optionText: "AVL Tree", optionTag: "B" },
        { optionText: "Trie", optionTag: "C" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Fenwick Tree stores elements in:",
      options: [
        { optionText: "1-based indexing", optionTag: "C" },
        { optionText: "0-based indexing", optionTag: "A" },
        { optionText: "TreeMap", optionTag: "D" },
        { optionText: "Stack", optionTag: "B" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which use-case is ideal for Fenwick Trees?",
      options: [
        { optionText: "Tracking cumulative frequencies", optionTag: "A" },
        { optionText: "Parsing XML", optionTag: "B" },
        { optionText: "Simulating graphs", optionTag: "D" },
        { optionText: "Sorting strings", optionTag: "C" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the maximum number of nodes visited in a single query?",
      options: [
        { optionText: "log n", optionTag: "B" },
        { optionText: "n", optionTag: "C" },
        { optionText: "1", optionTag: "D" },
        { optionText: "sqrt(n)", optionTag: "A" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which problem is commonly solved using Fenwick Trees?",
      options: [
        { optionText: "Inversion count", optionTag: "D" },
        { optionText: "Shortest path", optionTag: "A" },
        { optionText: "Cycle detection", optionTag: "C" },
        { optionText: "String matching", optionTag: "B" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What is required to convert Segment Tree operations to Fenwick Tree?",
      options: [
        { optionText: "Only prefix sums allowed", optionTag: "A" },
        { optionText: "Support for range minimum", optionTag: "C" },
        { optionText: "Hashing", optionTag: "D" },
        { optionText: "Memoization", optionTag: "B" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the main advantage of Fenwick Tree over Segment Tree?",
      options: [
        { optionText: "Lower memory usage", optionTag: "C" },
        { optionText: "Faster updates", optionTag: "A" },
        { optionText: "Higher space complexity", optionTag: "D" },
        { optionText: "Supports all range queries", optionTag: "B" }
      ],
      correctOption: "C",
      score: 1
    }
  ]
};

export default quizData;