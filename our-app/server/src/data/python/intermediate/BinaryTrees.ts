import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python Binary Trees - Intermediate Quiz",
  quizLevel: "intermediate",
  lang: "python",
  description: "Assess your knowledge of binary tree properties, traversals, and operations in Python.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "BinaryTrees"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "Which of the following traversal methods is used to reconstruct a unique binary tree?",
      options: [
        { optionText: "Inorder and Preorder", optionTag: "A" },
        { optionText: "Postorder and Inorder", optionTag: "B" },
        { optionText: "Inorder and Postorder", optionTag: "C" },
        { optionText: "All of the above", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "How many null links does a binary tree with n nodes have?",
      options: [
        { optionText: "n", optionTag: "A" },
        { optionText: "2n", optionTag: "B" },
        { optionText: "n+1", optionTag: "C" },
        { optionText: "n-1", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "In a complete binary tree of height h, how many nodes can be there at most?",
      options: [
        { optionText: "2^h - 1", optionTag: "A" },
        { optionText: "2^(h+1) - 1", optionTag: "B" },
        { optionText: "2h - 1", optionTag: "C" },
        { optionText: "2h", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is the output of inorder traversal of the tree: Root(1) -> Left(2) -> Right(3)?",
      options: [
        { optionText: "2 1 3", optionTag: "A" },
        { optionText: "1 2 3", optionTag: "B" },
        { optionText: "3 1 2", optionTag: "C" },
        { optionText: "2 3 1", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following statements is true for a binary tree?",
      options: [
        { optionText: "It can never be unbalanced", optionTag: "C" },
        { optionText: "All non-leaf nodes must have 2 children", optionTag: "B" },
        { optionText: "Each node has at most two children", optionTag: "A" },
        { optionText: "Every tree is a binary tree", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the maximum number of nodes at level i of a binary tree?",
      options: [
        { optionText: "2^i", optionTag: "A" },
        { optionText: "2^(i-1)", optionTag: "B" },
        { optionText: "i", optionTag: "C" },
        { optionText: "2i", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which traversal method is most suitable for copying a binary tree?",
      options: [
        { optionText: "Preorder", optionTag: "C" },
        { optionText: "Inorder", optionTag: "A" },
        { optionText: "Postorder", optionTag: "B" },
        { optionText: "Level order", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "How do you identify a full binary tree?",
      options: [
        { optionText: "All levels are completely filled", optionTag: "A" },
        { optionText: "Every node has 0 or 2 children", optionTag: "D" },
        { optionText: "All leaf nodes are at same level", optionTag: "C" },
        { optionText: "Height = number of nodes", optionTag: "B" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which of these is NOT a valid binary tree traversal?",
      options: [
        { optionText: "Top-down", optionTag: "A" },
        { optionText: "Inorder", optionTag: "B" },
        { optionText: "Preorder", optionTag: "C" },
        { optionText: "Postorder", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the space complexity of an inorder traversal (recursive)?",
      options: [
        { optionText: "O(log n)", optionTag: "C" },
        { optionText: "O(n)", optionTag: "A" },
        { optionText: "O(1)", optionTag: "D" },
        { optionText: "O(n^2)", optionTag: "B" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which node in a binary tree is always null?",
      options: [
        { optionText: "Parent node", optionTag: "C" },
        { optionText: "Leaf node’s children", optionTag: "D" },
        { optionText: "Root node", optionTag: "B" },
        { optionText: "Internal node", optionTag: "A" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "In a binary tree, a node having exactly one child is called?",
      options: [
        { optionText: "Leaf node", optionTag: "B" },
        { optionText: "Half node", optionTag: "C" },
        { optionText: "Full node", optionTag: "A" },
        { optionText: "Root", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "In a binary tree, the number of leaf nodes is always:",
      options: [
        { optionText: "Equal to internal nodes", optionTag: "A" },
        { optionText: "One more than internal nodes", optionTag: "B" },
        { optionText: "Less than internal nodes", optionTag: "C" },
        { optionText: "Cannot be determined", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is a degenerate tree?",
      options: [
        { optionText: "Tree with nodes having 3 children", optionTag: "A" },
        { optionText: "Each node has only one child", optionTag: "B" },
        { optionText: "All leaf nodes at same level", optionTag: "C" },
        { optionText: "Tree with all internal nodes", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which traversal visits nodes level by level?",
      options: [
        { optionText: "Inorder", optionTag: "C" },
        { optionText: "Level order", optionTag: "A" },
        { optionText: "Preorder", optionTag: "B" },
        { optionText: "Postorder", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How many binary trees are possible with 3 nodes?",
      options: [
        { optionText: "1", optionTag: "A" },
        { optionText: "3", optionTag: "C" },
        { optionText: "5", optionTag: "B" },
        { optionText: "10", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "In a binary tree, which traversal visits the left subtree, then root, then right subtree?",
      options: [
        { optionText: "Preorder", optionTag: "A" },
        { optionText: "Postorder", optionTag: "B" },
        { optionText: "Inorder", optionTag: "C" },
        { optionText: "Level order", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What’s the maximum number of nodes in a binary tree of height h?",
      options: [
        { optionText: "2^h - 1", optionTag: "C" },
        { optionText: "2h", optionTag: "B" },
        { optionText: "h^2", optionTag: "D" },
        { optionText: "log h", optionTag: "A" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which condition is necessary for a complete binary tree?",
      options: [
        { optionText: "All levels filled", optionTag: "A" },
        { optionText: "All nodes must have 2 children", optionTag: "B" },
        { optionText: "All leaves on left", optionTag: "C" },
        { optionText: "All internal nodes must be full", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "In a binary tree, what is a sibling node?",
      options: [
        { optionText: "Node with two children", optionTag: "A" },
        { optionText: "Node with same parent", optionTag: "B" },
        { optionText: "Node with no parent", optionTag: "C" },
        { optionText: "Node with same child", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    }
  ]
};

export default quizData;