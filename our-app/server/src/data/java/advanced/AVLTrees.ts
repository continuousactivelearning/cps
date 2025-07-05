import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Java AVL Trees - Advanced Quiz",
  quizLevel: "advanced",
  lang: "java",
  description: "Challenge your knowledge on AVL Trees, rotations, and balancing operations in Java.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "AVL Trees"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the main property of an AVL Tree?",
      options: [
        { optionText: "It is a binary tree", optionTag: "A" },
        { optionText: "It is height-balanced", optionTag: "B" },
        { optionText: "It has no duplicate values", optionTag: "C" },
        { optionText: "It uses red-black rules", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is the maximum balance factor allowed in an AVL Tree node?",
      options: [
        { optionText: "1", optionTag: "D" },
        { optionText: "3", optionTag: "A" },
        { optionText: "2", optionTag: "C" },
        { optionText: "0", optionTag: "B" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which of the following is NOT a rotation used in AVL Trees?",
      options: [
        { optionText: "Left Rotation", optionTag: "A" },
        { optionText: "Right Rotation", optionTag: "B" },
        { optionText: "Right-Left Rotation", optionTag: "C" },
        { optionText: "Downward Rotation", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "When does a Left Rotation occur in AVL Trees?",
      options: [
        { optionText: "Left-Left imbalance", optionTag: "C" },
        { optionText: "Right-Left imbalance", optionTag: "A" },
        { optionText: "Right-Right imbalance", optionTag: "D" },
        { optionText: "Left-Right imbalance", optionTag: "B" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "AVL tree is named after which of the following?",
      options: [
        { optionText: "Adelson-Velsky and Landis", optionTag: "A" },
        { optionText: "Alan Turing", optionTag: "C" },
        { optionText: "Alfred Venn", optionTag: "D" },
        { optionText: "Anton von Leeuwenhoek", optionTag: "B" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "In Java, what is the best way to implement rotations in AVL Trees?",
      options: [
        { optionText: "Using recursion", optionTag: "A" },
        { optionText: "Using array", optionTag: "D" },
        { optionText: "Using pointer manipulation of TreeNode objects", optionTag: "B" },
        { optionText: "Using stack", optionTag: "C" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is the time complexity of insertion in an AVL Tree?",
      options: [
        { optionText: "O(log n)", optionTag: "A" },
        { optionText: "O(n)", optionTag: "B" },
        { optionText: "O(1)", optionTag: "D" },
        { optionText: "O(n log n)", optionTag: "C" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How many rotations are required for Left-Right imbalance?",
      options: [
        { optionText: "3", optionTag: "D" },
        { optionText: "0", optionTag: "B" },
        { optionText: "2", optionTag: "C" },
        { optionText: "1", optionTag: "A" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which of the following traversal orders is used to verify AVL properties?",
      options: [
        { optionText: "Level Order", optionTag: "B" },
        { optionText: "Preorder", optionTag: "D" },
        { optionText: "Postorder", optionTag: "C" },
        { optionText: "Inorder", optionTag: "A" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What happens after deletion in AVL Tree?",
      options: [
        { optionText: "Tree is left as-is", optionTag: "C" },
        { optionText: "Rebalancing is done from root", optionTag: "D" },
        { optionText: "Rebalancing is done from deleted node upward", optionTag: "B" },
        { optionText: "Insertions are re-applied", optionTag: "A" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which method helps in getting balance factor?",
      options: [
        { optionText: "getBalance()", optionTag: "C" },
        { optionText: "getHeight()", optionTag: "A" },
        { optionText: "getFactor()", optionTag: "B" },
        { optionText: "getWeight()", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which condition triggers a Right-Left rotation?",
      options: [
        { optionText: "Left child of right subtree causes imbalance", optionTag: "D" },
        { optionText: "Right child of right subtree causes imbalance", optionTag: "A" },
        { optionText: "Left child of left subtree causes imbalance", optionTag: "B" },
        { optionText: "Right child of left subtree causes imbalance", optionTag: "C" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What is the maximum height of an AVL tree with 7 nodes?",
      options: [
        { optionText: "3", optionTag: "A" },
        { optionText: "5", optionTag: "D" },
        { optionText: "4", optionTag: "B" },
        { optionText: "2", optionTag: "C" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following is true for AVL Trees?",
      options: [
        { optionText: "Faster than BST in all cases", optionTag: "D" },
        { optionText: "Always balanced perfectly", optionTag: "B" },
        { optionText: "Can have balance factor -1, 0, 1", optionTag: "C" },
        { optionText: "Requires no rotation on deletion", optionTag: "A" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "If a node’s left subtree is higher by 2 and its left child has left child, which rotation?",
      options: [
        { optionText: "Right Rotation", optionTag: "A" },
        { optionText: "Left Rotation", optionTag: "D" },
        { optionText: "Right-Left", optionTag: "B" },
        { optionText: "Left-Right", optionTag: "C" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How is height calculated in AVL Tree?",
      options: [
        { optionText: "1 + max(leftHeight, rightHeight)", optionTag: "C" },
        { optionText: "leftHeight + rightHeight", optionTag: "D" },
        { optionText: "1 + min(leftHeight, rightHeight)", optionTag: "A" },
        { optionText: "Only leftHeight is used", optionTag: "B" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which Java structure is best to use for implementing AVL?",
      options: [
        { optionText: "Custom Node class", optionTag: "A" },
        { optionText: "ArrayList", optionTag: "B" },
        { optionText: "Stack", optionTag: "C" },
        { optionText: "Map", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which rotation is applied when imbalance occurs due to insertion in left-right position?",
      options: [
        { optionText: "Right Rotation", optionTag: "B" },
        { optionText: "Left-Right Rotation", optionTag: "D" },
        { optionText: "Left Rotation", optionTag: "C" },
        { optionText: "Right-Left Rotation", optionTag: "A" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "In which condition would a single rotation NOT fix the AVL imbalance?",
      options: [
        { optionText: "Left-Left", optionTag: "D" },
        { optionText: "Right-Right", optionTag: "B" },
        { optionText: "Left-Right", optionTag: "C" },
        { optionText: "None", optionTag: "A" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which of the following makes AVL Tree more efficient than BST in search?",
      options: [
        { optionText: "Smaller height", optionTag: "C" },
        { optionText: "Random insertion", optionTag: "B" },
        { optionText: "Greater branching factor", optionTag: "D" },
        { optionText: "Duplicate entries", optionTag: "A" }
      ],
      correctOption: "C",
      score: 1
    }
  ]
};

export default quizData;