import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python Binary Trees - Advanced Quiz",
  quizLevel: "advanced",
  lang: "python",
  description: "Evaluate your deep knowledge of binary trees in Python with this advanced quiz.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "BinaryTrees",
  },
  quizScore: 20,
  questions: [
    {
      questionText: "Which of the following statements is true for a perfect binary tree?",
      options: [
        { optionText: "All levels are fully filled except the last", optionTag: "A" },
        { optionText: "Every non-leaf node has exactly one child", optionTag: "B" },
        { optionText: "All internal nodes have two children and all leaves are at the same level", optionTag: "C" },
        { optionText: "Only root node exists", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "What is the height of a complete binary tree with n nodes (approx)?",
      options: [
        { optionText: "n", optionTag: "A" },
        { optionText: "log₂n", optionTag: "B" },
        { optionText: "√n", optionTag: "C" },
        { optionText: "n/2", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "In a binary tree, each node has at most how many children?",
      options: [
        { optionText: "1", optionTag: "A" },
        { optionText: "3", optionTag: "B" },
        { optionText: "2", optionTag: "C" },
        { optionText: "4", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which traversal order gives postfix expression from a binary expression tree?",
      options: [
        { optionText: "Inorder", optionTag: "A" },
        { optionText: "Preorder", optionTag: "B" },
        { optionText: "Postorder", optionTag: "C" },
        { optionText: "Level-order", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "What is the number of null links in a binary tree with n nodes?",
      options: [
        { optionText: "n", optionTag: "A" },
        { optionText: "n + 1", optionTag: "B" },
        { optionText: "2n", optionTag: "C" },
        { optionText: "2n + 1", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which property is true for binary search trees?",
      options: [
        { optionText: "Left child is always smaller than parent", optionTag: "A" },
        { optionText: "Right child is always greater than parent", optionTag: "B" },
        { optionText: "Both A and B", optionTag: "C" },
        { optionText: "Only root has a special rule", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which of these is used for deletion in binary trees?",
      options: [
        { optionText: "Node copying", optionTag: "A" },
        { optionText: "Node merging", optionTag: "B" },
        { optionText: "Replacing with inorder successor", optionTag: "C" },
        { optionText: "Replacing with preorder successor", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which method is used to traverse a tree in a zig-zag order?",
      options: [
        { optionText: "Recursive Preorder", optionTag: "A" },
        { optionText: "Modified Level-order with a deque", optionTag: "B" },
        { optionText: "Postorder", optionTag: "C" },
        { optionText: "Inorder", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which data structure is ideal for implementing iterative inorder traversal?",
      options: [
        { optionText: "Queue", optionTag: "A" },
        { optionText: "Stack", optionTag: "B" },
        { optionText: "Heap", optionTag: "C" },
        { optionText: "Deque", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which node in the binary tree has no parent?",
      options: [
        { optionText: "Leaf", optionTag: "A" },
        { optionText: "Child", optionTag: "B" },
        { optionText: "Internal", optionTag: "C" },
        { optionText: "Root", optionTag: "D" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "The number of binary trees that can be made with n nodes is related to:",
      options: [
        { optionText: "Fibonacci numbers", optionTag: "A" },
        { optionText: "Catalan numbers", optionTag: "B" },
        { optionText: "Bell numbers", optionTag: "C" },
        { optionText: "Prime numbers", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which of the following is not true for binary trees?",
      options: [
        { optionText: "Postorder = Left → Right → Root", optionTag: "A" },
        { optionText: "Inorder = Root → Left → Right", optionTag: "B" },
        { optionText: "Preorder = Root → Left → Right", optionTag: "C" },
        { optionText: "Level-order uses queue", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which tree traversal uses recursion for both subtrees first?",
      options: [
        { optionText: "Preorder", optionTag: "A" },
        { optionText: "Postorder", optionTag: "B" },
        { optionText: "Inorder", optionTag: "C" },
        { optionText: "Level-order", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which of these does not follow the binary tree property?",
      options: [
        { optionText: "Each node has at most two children", optionTag: "A" },
        { optionText: "Tree contains cycles", optionTag: "B" },
        { optionText: "Root has no parent", optionTag: "C" },
        { optionText: "Leaves have no children", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which is the most space-efficient tree traversal method?",
      options: [
        { optionText: "Morris Traversal", optionTag: "A" },
        { optionText: "Postorder", optionTag: "B" },
        { optionText: "Inorder", optionTag: "C" },
        { optionText: "Preorder", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What does inorder traversal of a BST return?",
      options: [
        { optionText: "Random order", optionTag: "A" },
        { optionText: "Ascending order", optionTag: "B" },
        { optionText: "Descending order", optionTag: "C" },
        { optionText: "None", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which traversal technique is used for deletion in heap trees?",
      options: [
        { optionText: "Postorder", optionTag: "A" },
        { optionText: "Inorder", optionTag: "B" },
        { optionText: "Preorder", optionTag: "C" },
        { optionText: "Level-order", optionTag: "D" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "What is the time complexity to search in a balanced binary tree?",
      options: [
        { optionText: "O(1)", optionTag: "A" },
        { optionText: "O(n)", optionTag: "B" },
        { optionText: "O(log n)", optionTag: "C" },
        { optionText: "O(n log n)", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "How can a binary tree be represented in Python?",
      options: [
        { optionText: "As nested lists", optionTag: "A" },
        { optionText: "As class-based structures", optionTag: "B" },
        { optionText: "As arrays", optionTag: "C" },
        { optionText: "All of the above", optionTag: "D" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "Which of these methods builds a tree from a traversal sequence?",
      options: [
        { optionText: "Recursion", optionTag: "A" },
        { optionText: "Iteration", optionTag: "B" },
        { optionText: "Mapping index of inorder and preorder", optionTag: "C" },
        { optionText: "Only A and C", optionTag: "D" },
      ],
      correctOption: "D",
      score: 1,
    }
  ]
};

export default quizData;