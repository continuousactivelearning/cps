import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python Fenwick Trees - Intermediate Quiz",
  quizLevel: "intermediate",
  lang: "python",
  description: "This quiz tests your understanding of Fenwick Trees (Binary Indexed Trees) in Python.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Fenwick Trees",
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is another name for a Fenwick Tree?",
      options: [
        { optionText: "Segment Tree", optionTag: "A" },
        { optionText: "Binary Indexed Tree", optionTag: "B" },
        { optionText: "Trie", optionTag: "C" },
        { optionText: "Balanced Tree", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What operation does a Fenwick Tree efficiently perform?",
      options: [
        { optionText: "Range minimum query", optionTag: "A" },
        { optionText: "Point update and prefix sum", optionTag: "B" },
        { optionText: "Median query", optionTag: "C" },
        { optionText: "Binary search", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is the time complexity of an update operation in a Fenwick Tree?",
      options: [
        { optionText: "O(1)", optionTag: "A" },
        { optionText: "O(log n)", optionTag: "B" },
        { optionText: "O(n)", optionTag: "C" },
        { optionText: "O(n log n)", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "How is a Fenwick Tree typically implemented?",
      options: [
        { optionText: "Linked list", optionTag: "A" },
        { optionText: "Array", optionTag: "B" },
        { optionText: "Hash map", optionTag: "C" },
        { optionText: "Tree structure", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is the purpose of the least significant bit (LSB) in Fenwick Trees?",
      options: [
        { optionText: "It determines the next node to query or update", optionTag: "A" },
        { optionText: "It stores the prefix sum", optionTag: "B" },
        { optionText: "It balances the tree", optionTag: "C" },
        { optionText: "It resets the node value", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which bitwise operation helps in finding the parent in Fenwick Tree?",
      options: [
        { optionText: "i & (i + 1)", optionTag: "A" },
        { optionText: "i | (i - 1)", optionTag: "B" },
        { optionText: "i - (i & -i)", optionTag: "C" },
        { optionText: "i ^ (i >> 1)", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Can Fenwick Tree be used for range updates and queries directly?",
      options: [
        { optionText: "Yes, natively", optionTag: "A" },
        { optionText: "No, only point queries", optionTag: "B" },
        { optionText: "With some modification", optionTag: "C" },
        { optionText: "Only in C++", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is the initial size of a Fenwick Tree array for n elements?",
      options: [
        { optionText: "n", optionTag: "A" },
        { optionText: "2n", optionTag: "B" },
        { optionText: "n+1", optionTag: "C" },
        { optionText: "n-1", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which of the following is a common use case for Fenwick Trees?",
      options: [
        { optionText: "Heap construction", optionTag: "A" },
        { optionText: "Prefix sum computation", optionTag: "B" },
        { optionText: "Balanced binary search", optionTag: "C" },
        { optionText: "Graph traversal", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "How do you compute the LSB in Python?",
      options: [
        { optionText: "i & -i", optionTag: "A" },
        { optionText: "i | i", optionTag: "B" },
        { optionText: "i ^ i", optionTag: "C" },
        { optionText: "i % 2", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which operation is NOT efficiently supported by Fenwick Tree?",
      options: [
        { optionText: "Prefix sum", optionTag: "A" },
        { optionText: "Range sum with update", optionTag: "B" },
        { optionText: "Range minimum", optionTag: "C" },
        { optionText: "Point update", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is the root index of a Fenwick Tree?",
      options: [
        { optionText: "0", optionTag: "A" },
        { optionText: "1", optionTag: "B" },
        { optionText: "Depends on implementation", optionTag: "C" },
        { optionText: "n", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Why do we use 1-based indexing in Fenwick Trees?",
      options: [
        { optionText: "To simplify bitwise manipulation", optionTag: "A" },
        { optionText: "To align with tree height", optionTag: "B" },
        { optionText: "To reserve 0 for null", optionTag: "C" },
        { optionText: "For performance optimization", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is returned if the query index is 0?",
      options: [
        { optionText: "0", optionTag: "A" },
        { optionText: "Error", optionTag: "B" },
        { optionText: "Last prefix sum", optionTag: "C" },
        { optionText: "Undefined", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What’s the benefit of Fenwick Tree over naive prefix sum approach?",
      options: [
        { optionText: "Better update time", optionTag: "A" },
        { optionText: "Faster queries", optionTag: "B" },
        { optionText: "More memory efficient", optionTag: "C" },
        { optionText: "Simpler logic", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following is a core concept for BIT?",
      options: [
        { optionText: "Recursion", optionTag: "A" },
        { optionText: "Divide and Conquer", optionTag: "B" },
        { optionText: "Bit Manipulation", optionTag: "C" },
        { optionText: "Greedy", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "In Fenwick Tree, what does i += (i & -i) do?",
      options: [
        { optionText: "Moves to parent node", optionTag: "A" },
        { optionText: "Moves to child node", optionTag: "B" },
        { optionText: "Initializes the array", optionTag: "C" },
        { optionText: "Terminates the loop", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "How many operations are required to query prefix sum in worst case?",
      options: [
        { optionText: "O(n)", optionTag: "A" },
        { optionText: "O(log n)", optionTag: "B" },
        { optionText: "O(1)", optionTag: "C" },
        { optionText: "O(n log n)", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What will be the query result if all elements are initially 0?",
      options: [
        { optionText: "Undefined", optionTag: "A" },
        { optionText: "Negative number", optionTag: "B" },
        { optionText: "0", optionTag: "C" },
        { optionText: "Depends on index", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which one is more flexible for arbitrary queries?",
      options: [
        { optionText: "Segment Tree", optionTag: "A" },
        { optionText: "Fenwick Tree", optionTag: "B" },
        { optionText: "Heap", optionTag: "C" },
        { optionText: "Binary Search Tree", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    }
  ]
};

export default quizData;