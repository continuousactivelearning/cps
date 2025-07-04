import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python AVL Trees - Advanced Quiz",
  quizLevel: "advanced",
  lang: "python",
  description: "Test your in-depth knowledge of AVL Trees, rotations, and balance factors.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "AVL Trees",
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the balance factor of a node in AVL Tree?",
      options: [
        { optionText: "Height of right subtree - height of left subtree", optionTag: "A" },
        { optionText: "Height of left subtree - height of right subtree", optionTag: "B" },
        { optionText: "Sum of left and right subtree heights", optionTag: "C" },
        { optionText: "Height of parent - height of child", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What is the maximum height difference allowed between left and right subtrees in AVL?",
      options: [
        { optionText: "1", optionTag: "A" },
        { optionText: "2", optionTag: "B" },
        { optionText: "3", optionTag: "C" },
        { optionText: "0", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What kind of rotation is needed when inserting in left-left (LL) case?",
      options: [
        { optionText: "Right Rotation", optionTag: "A" },
        { optionText: "Left Rotation", optionTag: "B" },
        { optionText: "Left-Right Rotation", optionTag: "C" },
        { optionText: "Right-Left Rotation", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What kind of rotation is used in left-right (LR) case?",
      options: [
        { optionText: "Right Rotation", optionTag: "A" },
        { optionText: "Left Rotation", optionTag: "B" },
        { optionText: "Left-Right Rotation", optionTag: "C" },
        { optionText: "Right-Left Rotation", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "What is the time complexity of insertion in AVL tree?",
      options: [
        { optionText: "O(log n)", optionTag: "A" },
        { optionText: "O(n)", optionTag: "B" },
        { optionText: "O(n log n)", optionTag: "C" },
        { optionText: "O(1)", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which of these operations may cause imbalance in AVL tree?",
      options: [
        { optionText: "Insertion", optionTag: "A" },
        { optionText: "Deletion", optionTag: "B" },
        { optionText: "Both insertion and deletion", optionTag: "C" },
        { optionText: "Search", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which case causes a double rotation in AVL Trees?",
      options: [
        { optionText: "LL or RR", optionTag: "A" },
        { optionText: "LR or RL", optionTag: "B" },
        { optionText: "Only RL", optionTag: "C" },
        { optionText: "Only LL", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What is the worst-case height of an AVL Tree with n nodes?",
      options: [
        { optionText: "O(log n)", optionTag: "A" },
        { optionText: "O(n)", optionTag: "B" },
        { optionText: "O(n log n)", optionTag: "C" },
        { optionText: "O(1)", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "In AVL Trees, which traversal is used to print nodes in sorted order?",
      options: [
        { optionText: "Preorder", optionTag: "A" },
        { optionText: "Postorder", optionTag: "B" },
        { optionText: "Inorder", optionTag: "C" },
        { optionText: "Level Order", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "How many rotations are needed in worst-case during insertion?",
      options: [
        { optionText: "1", optionTag: "A" },
        { optionText: "2", optionTag: "B" },
        { optionText: "3", optionTag: "C" },
        { optionText: "0", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What is the space complexity of AVL Tree?",
      options: [
        { optionText: "O(n)", optionTag: "A" },
        { optionText: "O(log n)", optionTag: "B" },
        { optionText: "O(1)", optionTag: "C" },
        { optionText: "O(n^2)", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "In AVL, which operation is faster than in normal BST?",
      options: [
        { optionText: "Search", optionTag: "A" },
        { optionText: "Insertion", optionTag: "B" },
        { optionText: "Deletion", optionTag: "C" },
        { optionText: "All of the above", optionTag: "D" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "AVL Tree maintains balance using:",
      options: [
        { optionText: "Hashing", optionTag: "A" },
        { optionText: "Rotations", optionTag: "B" },
        { optionText: "Swapping", optionTag: "C" },
        { optionText: "Sorting", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which type of tree is AVL Tree?",
      options: [
        { optionText: "Complete Binary Tree", optionTag: "A" },
        { optionText: "Self-balancing Binary Search Tree", optionTag: "B" },
        { optionText: "B-Tree", optionTag: "C" },
        { optionText: "Heap", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Who invented AVL Tree?",
      options: [
        { optionText: "Adelson-Velsky and Landis", optionTag: "A" },
        { optionText: "Alan Turing", optionTag: "B" },
        { optionText: "Donald Knuth", optionTag: "C" },
        { optionText: "Tony Hoare", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which of the following is NOT a valid rotation?",
      options: [
        { optionText: "Left-Right Rotation", optionTag: "A" },
        { optionText: "Right-Left Rotation", optionTag: "B" },
        { optionText: "Right-Right Rotation", optionTag: "C" },
        { optionText: "Left-Up Rotation", optionTag: "D" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "Balance factor of a perfectly balanced node is:",
      options: [
        { optionText: "0", optionTag: "A" },
        { optionText: "1", optionTag: "B" },
        { optionText: "-1", optionTag: "C" },
        { optionText: "2", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which case in AVL requires Left-Right rotation?",
      options: [
        { optionText: "Left of Left", optionTag: "A" },
        { optionText: "Right of Right", optionTag: "B" },
        { optionText: "Right of Left", optionTag: "C" },
        { optionText: "Left of Right", optionTag: "D" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "Which condition causes Right-Left rotation?",
      options: [
        { optionText: "Left of Left", optionTag: "A" },
        { optionText: "Right of Left", optionTag: "B" },
        { optionText: "Right of Right", optionTag: "C" },
        { optionText: "Left of Right", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Is AVL Tree a binary tree?",
      options: [
        { optionText: "Yes", optionTag: "A" },
        { optionText: "No", optionTag: "B" },
        { optionText: "Only in special cases", optionTag: "C" },
        { optionText: "Depends on data", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
  ],
};

export default quizData;