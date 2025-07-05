import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Java Binary Trees - Intermediate Quiz",
  quizLevel: "intermediate",
  lang: "java",
  description: "This quiz evaluates your understanding of Binary Trees and related operations in Java.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "BinaryTrees"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the maximum number of nodes in a binary tree of depth k?",
      options: [
        { optionText: "2^(k+1) - 1", optionTag: "A" },
        { optionText: "2k", optionTag: "B" },
        { optionText: "2^k - 1", optionTag: "C" },
        { optionText: "k^2", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which traversal method is used to get a sorted order in BST?",
      options: [
        { optionText: "Inorder", optionTag: "A" },
        { optionText: "Postorder", optionTag: "B" },
        { optionText: "Preorder", optionTag: "C" },
        { optionText: "Level order", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "In binary tree traversal, which is not a valid order?",
      options: [
        { optionText: "Preorder", optionTag: "A" },
        { optionText: "Inorder", optionTag: "B" },
        { optionText: "Reverseorder", optionTag: "C" },
        { optionText: "Postorder", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "A node with no children is called?",
      options: [
        { optionText: "Leaf", optionTag: "A" },
        { optionText: "Root", optionTag: "B" },
        { optionText: "Branch", optionTag: "C" },
        { optionText: "Internal", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Time complexity to count nodes in a binary tree is?",
      options: [
        { optionText: "O(n)", optionTag: "A" },
        { optionText: "O(log n)", optionTag: "B" },
        { optionText: "O(n log n)", optionTag: "C" },
        { optionText: "O(1)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which traversal visits nodes level by level?",
      options: [
        { optionText: "Level order", optionTag: "A" },
        { optionText: "Postorder", optionTag: "B" },
        { optionText: "Preorder", optionTag: "C" },
        { optionText: "Inorder", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the height of a complete binary tree with n nodes?",
      options: [
        { optionText: "log₂n", optionTag: "A" },
        { optionText: "n", optionTag: "B" },
        { optionText: "n/2", optionTag: "C" },
        { optionText: "√n", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which binary tree type allows at most two children per node?",
      options: [
        { optionText: "Binary Tree", optionTag: "A" },
        { optionText: "Ternary Tree", optionTag: "B" },
        { optionText: "B-Tree", optionTag: "C" },
        { optionText: "Trie", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What does a balanced binary tree ensure?",
      options: [
        { optionText: "Minimum height difference", optionTag: "A" },
        { optionText: "Maximum nodes", optionTag: "B" },
        { optionText: "Only one child per node", optionTag: "C" },
        { optionText: "Every node has two children", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "A complete binary tree must have:",
      options: [
        { optionText: "All levels filled except possibly last", optionTag: "A" },
        { optionText: "Every level full", optionTag: "B" },
        { optionText: "Only one node per level", optionTag: "C" },
        { optionText: "All nodes have 2 children", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which traversal technique uses recursion and stack?",
      options: [
        { optionText: "Depth First", optionTag: "A" },
        { optionText: "Breadth First", optionTag: "B" },
        { optionText: "Level Order", optionTag: "C" },
        { optionText: "Zigzag", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the minimum number of nodes in height h?",
      options: [
        { optionText: "h", optionTag: "A" },
        { optionText: "h + 1", optionTag: "B" },
        { optionText: "h - 1", optionTag: "C" },
        { optionText: "1", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which of these operations is not defined on binary trees?",
      options: [
        { optionText: "Insert", optionTag: "A" },
        { optionText: "Traverse", optionTag: "B" },
        { optionText: "Delete", optionTag: "C" },
        { optionText: "Push", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "In binary tree, what is the maximum number of leaf nodes with height h?",
      options: [
        { optionText: "2^h", optionTag: "A" },
        { optionText: "2^(h+1)", optionTag: "B" },
        { optionText: "2^(h-1)", optionTag: "C" },
        { optionText: "2^(h+1) - 1", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which is a non-recursive traversal method?",
      options: [
        { optionText: "Level Order", optionTag: "A" },
        { optionText: "Inorder", optionTag: "B" },
        { optionText: "Postorder", optionTag: "C" },
        { optionText: "Preorder", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which data structure is required for level order traversal?",
      options: [
        { optionText: "Queue", optionTag: "A" },
        { optionText: "Stack", optionTag: "B" },
        { optionText: "Tree", optionTag: "C" },
        { optionText: "Heap", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "In a binary tree, what does the term degree mean?",
      options: [
        { optionText: "Number of children", optionTag: "A" },
        { optionText: "Height of node", optionTag: "B" },
        { optionText: "Number of ancestors", optionTag: "C" },
        { optionText: "Number of leaves", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following is used to implement recursion?",
      options: [
        { optionText: "Stack", optionTag: "A" },
        { optionText: "Queue", optionTag: "B" },
        { optionText: "Tree", optionTag: "C" },
        { optionText: "Heap", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which condition indicates a balanced binary tree?",
      options: [
        { optionText: "Difference of left and right subtree height ≤ 1", optionTag: "A" },
        { optionText: "All nodes have 2 children", optionTag: "B" },
        { optionText: "Height of tree is n", optionTag: "C" },
        { optionText: "Root has no child", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which traversal gives postfix expression?",
      options: [
        { optionText: "Postorder", optionTag: "A" },
        { optionText: "Preorder", optionTag: "B" },
        { optionText: "Inorder", optionTag: "C" },
        { optionText: "Level order", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    }
  ]
};

export default quizData;