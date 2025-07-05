import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python B-Trees - Intermediate Quiz",
  quizLevel: "intermediate",
  lang: "python",
  description: "This quiz evaluates your understanding of B-Trees and their operations in Python.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "B-Trees",
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the minimum number of keys in a non-root B-Tree node of degree t?",
      options: [
        { optionText: "0", optionTag: "A" },
        { optionText: "t - 1", optionTag: "B" },
        { optionText: "1", optionTag: "C" },
        { optionText: "t", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which of the following is TRUE for a B-Tree of order t?",
      options: [
        { optionText: "Each internal node can have at most t children", optionTag: "A" },
        { optionText: "Each node has at most 2t - 1 keys", optionTag: "B" },
        { optionText: "All leaves have different depths", optionTag: "C" },
        { optionText: "It is a binary tree", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is the maximum number of children a node in a B-Tree of order 3 can have?",
      options: [
        { optionText: "3", optionTag: "A" },
        { optionText: "4", optionTag: "B" },
        { optionText: "6", optionTag: "C" },
        { optionText: "5", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which of the following operations may cause a B-Tree node to split?",
      options: [
        { optionText: "Search", optionTag: "A" },
        { optionText: "Traversal", optionTag: "B" },
        { optionText: "Insertion", optionTag: "C" },
        { optionText: "Deletion", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "B-Trees are commonly used in:",
      options: [
        { optionText: "Image processing", optionTag: "A" },
        { optionText: "Databases and file systems", optionTag: "B" },
        { optionText: "Compilers", optionTag: "C" },
        { optionText: "Graphics rendering", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which traversal gives sorted output in B-Trees?",
      options: [
        { optionText: "Pre-order", optionTag: "A" },
        { optionText: "In-order", optionTag: "B" },
        { optionText: "Post-order", optionTag: "C" },
        { optionText: "Level-order", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "A B-Tree of minimum degree t has a maximum of how many keys in a node?",
      options: [
        { optionText: "2t - 1", optionTag: "A" },
        { optionText: "2t", optionTag: "B" },
        { optionText: "t", optionTag: "C" },
        { optionText: "t - 1", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "In B-Trees, all leaves are at:",
      options: [
        { optionText: "Different levels", optionTag: "A" },
        { optionText: "Same level", optionTag: "B" },
        { optionText: "Root level", optionTag: "C" },
        { optionText: "Odd levels only", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What happens when a B-Tree node becomes too full?",
      options: [
        { optionText: "It is ignored", optionTag: "A" },
        { optionText: "It is deleted", optionTag: "B" },
        { optionText: "It is split into two nodes", optionTag: "C" },
        { optionText: "Its keys are rotated", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which operation can cause a merge in a B-Tree?",
      options: [
        { optionText: "Insertion", optionTag: "A" },
        { optionText: "Deletion", optionTag: "B" },
        { optionText: "Traversal", optionTag: "C" },
        { optionText: "Search", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "How does a B-Tree handle underflow in a node?",
      options: [
        { optionText: "Ignores it", optionTag: "A" },
        { optionText: "Merges with sibling or borrows from it", optionTag: "B" },
        { optionText: "Deletes the node", optionTag: "C" },
        { optionText: "Rotates the subtree", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is the time complexity of insertion in a B-Tree?",
      options: [
        { optionText: "O(n)", optionTag: "A" },
        { optionText: "O(log n)", optionTag: "B" },
        { optionText: "O(n log n)", optionTag: "C" },
        { optionText: "O(1)", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which of the following is TRUE about B-Trees?",
      options: [
        { optionText: "They are always balanced", optionTag: "A" },
        { optionText: "They allow duplicate keys", optionTag: "B" },
        { optionText: "They are used in graph processing", optionTag: "C" },
        { optionText: "They don’t support deletion", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which data structure does a B-Tree generalize?",
      options: [
        { optionText: "Binary Search Tree", optionTag: "A" },
        { optionText: "Heap", optionTag: "B" },
        { optionText: "Stack", optionTag: "C" },
        { optionText: "Queue", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is a major advantage of B-Trees over binary search trees?",
      options: [
        { optionText: "Less memory usage", optionTag: "A" },
        { optionText: "Faster in-memory operations", optionTag: "B" },
        { optionText: "Better performance with large disk reads", optionTag: "C" },
        { optionText: "Easier implementation", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which factor determines the height of a B-Tree?",
      options: [
        { optionText: "Number of nodes", optionTag: "A" },
        { optionText: "Order of the tree", optionTag: "B" },
        { optionText: "Degree of nodes", optionTag: "C" },
        { optionText: "Number of children", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "A node in a B-Tree must have at least how many children?",
      options: [
        { optionText: "t", optionTag: "A" },
        { optionText: "t - 1", optionTag: "B" },
        { optionText: "t + 1", optionTag: "C" },
        { optionText: "1", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "B-Trees are designed to work well with what type of storage?",
      options: [
        { optionText: "Cache memory", optionTag: "A" },
        { optionText: "Hard drives and file systems", optionTag: "B" },
        { optionText: "Registers", optionTag: "C" },
        { optionText: "RAM", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "In which case will the root of a B-Tree change?",
      options: [
        { optionText: "When root is deleted", optionTag: "A" },
        { optionText: "When root splits", optionTag: "B" },
        { optionText: "When root is rebalanced", optionTag: "C" },
        { optionText: "All of the above", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which of the following is FALSE about B-Trees?",
      options: [
        { optionText: "They are height-balanced", optionTag: "A" },
        { optionText: "They may contain duplicate keys", optionTag: "B" },
        { optionText: "Each node contains multiple keys", optionTag: "C" },
        { optionText: "All leaves are at the same level", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    }
  ]
};

export default quizData;