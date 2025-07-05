import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python Segment Trees - Advanced Quiz",
  quizLevel: "advanced",
  lang: "python",
  description: "Test your understanding of Segment Trees for range queries and updates.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "SegmentTrees",
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the typical use of a Segment Tree?",
      options: [
        { optionText: "Efficient range queries and updates", optionTag: "C" },
        { optionText: "Binary sorting", optionTag: "A" },
        { optionText: "Graph traversals", optionTag: "D" },
        { optionText: "Dynamic programming", optionTag: "B" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "What is the time complexity to build a Segment Tree for an array of size N?",
      options: [
        { optionText: "O(N)", optionTag: "C" },
        { optionText: "O(N log N)", optionTag: "A" },
        { optionText: "O(N^2)", optionTag: "D" },
        { optionText: "O(log N)", optionTag: "B" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What is the time complexity for a range query in Segment Tree?",
      options: [
        { optionText: "O(log N)", optionTag: "B" },
        { optionText: "O(N)", optionTag: "C" },
        { optionText: "O(N log N)", optionTag: "A" },
        { optionText: "O(1)", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What is the height of a Segment Tree built for N elements?",
      options: [
        { optionText: "ceil(log2(N))", optionTag: "D" },
        { optionText: "N", optionTag: "B" },
        { optionText: "2N", optionTag: "C" },
        { optionText: "log10(N)", optionTag: "A" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "Which of the following is true for a Segment Tree node?",
      options: [
        { optionText: "It stores information about a range", optionTag: "A" },
        { optionText: "It stores a single value only", optionTag: "D" },
        { optionText: "It holds pointer to parent node", optionTag: "C" },
        { optionText: "It always stores a leaf node", optionTag: "B" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "How many nodes does a Segment Tree contain in worst case for array of size N?",
      options: [
        { optionText: "4N", optionTag: "B" },
        { optionText: "2N", optionTag: "A" },
        { optionText: "N", optionTag: "D" },
        { optionText: "N log N", optionTag: "C" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which operation is more efficient using Segment Trees?",
      options: [
        { optionText: "Range minimum query", optionTag: "C" },
        { optionText: "Insert at beginning", optionTag: "A" },
        { optionText: "Stack push", optionTag: "D" },
        { optionText: "Binary search", optionTag: "B" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "What is a key limitation of Segment Trees?",
      options: [
        { optionText: "High memory usage", optionTag: "A" },
        { optionText: "Only supports min queries", optionTag: "C" },
        { optionText: "Not efficient for updates", optionTag: "D" },
        { optionText: "Slow construction", optionTag: "B" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What data structure is used to implement Segment Trees in Python?",
      options: [
        { optionText: "List or array", optionTag: "B" },
        { optionText: "Set", optionTag: "D" },
        { optionText: "Heap", optionTag: "A" },
        { optionText: "Deque", optionTag: "C" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which technique can be applied with Segment Trees for further optimization?",
      options: [
        { optionText: "Lazy Propagation", optionTag: "C" },
        { optionText: "DFS", optionTag: "D" },
        { optionText: "Kruskal's algorithm", optionTag: "B" },
        { optionText: "Hashing", optionTag: "A" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Segment Tree is most similar to which other tree?",
      options: [
        { optionText: "Binary Tree", optionTag: "C" },
        { optionText: "AVL Tree", optionTag: "A" },
        { optionText: "B-Tree", optionTag: "B" },
        { optionText: "Trie", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "What operation is NOT suited for Segment Tree?",
      options: [
        { optionText: "Finding maximum in range", optionTag: "B" },
        { optionText: "Insert at end", optionTag: "C" },
        { optionText: "Range sum", optionTag: "A" },
        { optionText: "Update at index", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which of the following is correct for leaf nodes in Segment Tree?",
      options: [
        { optionText: "Each corresponds to one element in input array", optionTag: "A" },
        { optionText: "They point to root", optionTag: "B" },
        { optionText: "They are always null", optionTag: "C" },
        { optionText: "They store range size", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which function is typically recursive in Segment Tree?",
      options: [
        { optionText: "Build()", optionTag: "B" },
        { optionText: "Main()", optionTag: "D" },
        { optionText: "Print()", optionTag: "C" },
        { optionText: "Loop()", optionTag: "A" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which operation updates a value at a given index?",
      options: [
        { optionText: "Update()", optionTag: "D" },
        { optionText: "Rebuild()", optionTag: "B" },
        { optionText: "Push()", optionTag: "C" },
        { optionText: "Insert()", optionTag: "A" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "How do you traverse a Segment Tree for range sum?",
      options: [
        { optionText: "Recursively combine child values", optionTag: "C" },
        { optionText: "Always go to left subtree", optionTag: "B" },
        { optionText: "Use BFS", optionTag: "A" },
        { optionText: "Only use parent nodes", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which algorithm improves range updates in Segment Tree?",
      options: [
        { optionText: "Lazy Propagation", optionTag: "A" },
        { optionText: "KMP", optionTag: "C" },
        { optionText: "DFS", optionTag: "B" },
        { optionText: "Union Find", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which scenario best justifies use of Segment Tree?",
      options: [
        { optionText: "Frequent updates and queries on large array", optionTag: "A" },
        { optionText: "Only searching", optionTag: "B" },
        { optionText: "Constant-time access", optionTag: "D" },
        { optionText: "Sorting elements", optionTag: "C" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which property makes Segment Tree ideal for competitive coding?",
      options: [
        { optionText: "Fast updates and queries", optionTag: "C" },
        { optionText: "Easy syntax", optionTag: "D" },
        { optionText: "No need of recursion", optionTag: "A" },
        { optionText: "Minimal lines of code", optionTag: "B" },
      ],
      correctOption: "C",
      score: 1,
    },
  ],
};

export default quizData;