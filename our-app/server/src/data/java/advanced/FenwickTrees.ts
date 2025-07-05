import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Java Fenwick Trees - Advanced Quiz",
  quizLevel: "advanced",
  lang: "java",
  description: "Test your understanding of Fenwick Trees, also known as Binary Indexed Trees.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "FenwickTrees"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the primary use of a Fenwick Tree?",
      options: [
        { optionText: "Finding minimum element in range", optionTag: "A" },
        { optionText: "Fast prefix sum computation", optionTag: "C" },
        { optionText: "Sorting data", optionTag: "B" },
        { optionText: "Graph traversals", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is the time complexity for point update in a Fenwick Tree?",
      options: [
        { optionText: "O(n)", optionTag: "D" },
        { optionText: "O(log n)", optionTag: "A" },
        { optionText: "O(1)", optionTag: "B" },
        { optionText: "O(n log n)", optionTag: "C" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the size of a Fenwick Tree for an array of size n?",
      options: [
        { optionText: "n", optionTag: "B" },
        { optionText: "n + 1", optionTag: "D" },
        { optionText: "2n", optionTag: "A" },
        { optionText: "log n", optionTag: "C" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What does the function 'lowbit(i)' return in BIT implementation?",
      options: [
        { optionText: "i & -i", optionTag: "C" },
        { optionText: "i << 1", optionTag: "B" },
        { optionText: "i >> 1", optionTag: "D" },
        { optionText: "i | i", optionTag: "A" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is the time complexity for a prefix sum query in a Fenwick Tree?",
      options: [
        { optionText: "O(n)", optionTag: "C" },
        { optionText: "O(log n)", optionTag: "B" },
        { optionText: "O(1)", optionTag: "A" },
        { optionText: "O(n^2)", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is the main limitation of a Fenwick Tree?",
      options: [
        { optionText: "Cannot perform range updates efficiently", optionTag: "C" },
        { optionText: "Slow construction time", optionTag: "B" },
        { optionText: "Only supports min queries", optionTag: "D" },
        { optionText: "High space usage", optionTag: "A" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which bitwise operation is heavily used in Fenwick Trees?",
      options: [
        { optionText: "OR", optionTag: "A" },
        { optionText: "XOR", optionTag: "B" },
        { optionText: "AND", optionTag: "C" },
        { optionText: "AND with complement", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "In BIT, which index should be updated when updating value at index i?",
      options: [
        { optionText: "All indices from i to n with +lowbit(i)", optionTag: "B" },
        { optionText: "Only i", optionTag: "D" },
        { optionText: "Indices in the range i-1 to 0", optionTag: "C" },
        { optionText: "Random index", optionTag: "A" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which of these is NOT a use case of Fenwick Tree?",
      options: [
        { optionText: "Prefix sum", optionTag: "C" },
        { optionText: "Range minimum queries", optionTag: "D" },
        { optionText: "K-th smallest element", optionTag: "B" },
        { optionText: "Inversion count", optionTag: "A" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "How does Fenwick Tree differ from Segment Tree?",
      options: [
        { optionText: "Faster range updates", optionTag: "A" },
        { optionText: "More complex to code", optionTag: "C" },
        { optionText: "Supports multiple operations", optionTag: "D" },
        { optionText: "Less memory and simpler implementation", optionTag: "B" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which range operations can BIT efficiently perform?",
      options: [
        { optionText: "Range max queries", optionTag: "D" },
        { optionText: "Range updates and queries (with tricks)", optionTag: "C" },
        { optionText: "Point max queries", optionTag: "A" },
        { optionText: "Graph traversal", optionTag: "B" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which programming technique is crucial in BIT?",
      options: [
        { optionText: "Recursion", optionTag: "A" },
        { optionText: "Bit manipulation", optionTag: "C" },
        { optionText: "Graph coloring", optionTag: "B" },
        { optionText: "DP memoization", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "BIT tree structure is generally implemented as:",
      options: [
        { optionText: "2D Tree", optionTag: "C" },
        { optionText: "Flat 1D array", optionTag: "A" },
        { optionText: "Binary Tree", optionTag: "B" },
        { optionText: "Linked list", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What does BIT[i] store?",
      options: [
        { optionText: "Value at index i", optionTag: "C" },
        { optionText: "Sum of a specific range ending at i", optionTag: "B" },
        { optionText: "Minimum of left half", optionTag: "D" },
        { optionText: "Product up to i", optionTag: "A" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which query is not efficient in a BIT?",
      options: [
        { optionText: "Range minimum query", optionTag: "C" },
        { optionText: "Range sum", optionTag: "B" },
        { optionText: "Prefix sum", optionTag: "D" },
        { optionText: "Point update", optionTag: "A" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which is a common extension of BIT for 2D data?",
      options: [
        { optionText: "Segment Tree", optionTag: "C" },
        { optionText: "2D Fenwick Tree", optionTag: "D" },
        { optionText: "Trie", optionTag: "A" },
        { optionText: "Graph", optionTag: "B" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which of the following operations can be done in O(log n) using BIT?",
      options: [
        { optionText: "Range maximum", optionTag: "C" },
        { optionText: "Prefix sum", optionTag: "B" },
        { optionText: "Range query for mode", optionTag: "D" },
        { optionText: "Suffix product", optionTag: "A" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which condition leads to worst-case performance in BIT?",
      options: [
        { optionText: "Sparse data", optionTag: "B" },
        { optionText: "All elements are same", optionTag: "A" },
        { optionText: "Highly unbalanced updates", optionTag: "D" },
        { optionText: "Random data", optionTag: "C" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Can Fenwick Tree be used for range addition and point query?",
      options: [
        { optionText: "No", optionTag: "B" },
        { optionText: "Yes, with modification", optionTag: "A" },
        { optionText: "Only for max queries", optionTag: "C" },
        { optionText: "Only for even elements", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is another name for Fenwick Tree?",
      options: [
        { optionText: "Prefix Tree", optionTag: "D" },
        { optionText: "Binary Indexed Tree", optionTag: "C" },
        { optionText: "Suffix Tree", optionTag: "A" },
        { optionText: "AVL Tree", optionTag: "B" }
      ],
      correctOption: "C",
      score: 1
    }
  ]
};

export default quizData;