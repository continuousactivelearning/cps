import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python - AVL Trees - Beginner Quiz",
  quizLevel: "beginner",
  lang: "python",
  description: "Quiz to assess understanding of AVL Trees fundamentals in Python.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "AVL Trees",
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What does AVL stand for in AVL Tree?",
      options: [
        { optionText: "Adelson-Velsky and Landis", optionTag: "B" },
        { optionText: "Automated Verified Lookup", optionTag: "C" },
        { optionText: "Abstract Vector List", optionTag: "D" },
        { optionText: "Automatic Variable Linking", optionTag: "A" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which property must an AVL tree always satisfy?",
      options: [
        { optionText: "Maximum depth is log(n)", optionTag: "D" },
        { optionText: "Binary search tree ordering", optionTag: "A" },
        { optionText: "Balance factor of every node is -1, 0, or 1", optionTag: "B" },
        { optionText: "Height of tree must be constant", optionTag: "C" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What is the time complexity of insertion in an AVL Tree?",
      options: [
        { optionText: "O(n)", optionTag: "D" },
        { optionText: "O(log n)", optionTag: "A" },
        { optionText: "O(1)", optionTag: "C" },
        { optionText: "O(n log n)", optionTag: "B" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What rotation is required to balance a left-left imbalance?",
      options: [
        { optionText: "Left rotation", optionTag: "C" },
        { optionText: "Right-left rotation", optionTag: "D" },
        { optionText: "Right rotation", optionTag: "A" },
        { optionText: "Left-right rotation", optionTag: "B" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which of the following traversals is typically used to display AVL tree contents in order?",
      options: [
        { optionText: "In-order", optionTag: "D" },
        { optionText: "Post-order", optionTag: "B" },
        { optionText: "Level-order", optionTag: "A" },
        { optionText: "Pre-order", optionTag: "C" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "What is the balance factor of a node?",
      options: [
        { optionText: "Height of left subtree minus height of right subtree", optionTag: "B" },
        { optionText: "Sum of node values", optionTag: "C" },
        { optionText: "Count of children", optionTag: "A" },
        { optionText: "Maximum of left and right height", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "When does an AVL Tree need a double rotation?",
      options: [
        { optionText: "When the tree is already balanced", optionTag: "C" },
        { optionText: "When left-right or right-left imbalance occurs", optionTag: "A" },
        { optionText: "For every insert", optionTag: "B" },
        { optionText: "Only on deletion", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which rotation fixes a right-left imbalance?",
      options: [
        { optionText: "Left rotation", optionTag: "D" },
        { optionText: "Right-left rotation", optionTag: "C" },
        { optionText: "Right rotation", optionTag: "B" },
        { optionText: "Left-right rotation", optionTag: "A" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "In which scenario does a single left rotation occur?",
      options: [
        { optionText: "Left-left imbalance", optionTag: "D" },
        { optionText: "Right-left imbalance", optionTag: "B" },
        { optionText: "Right-right imbalance", optionTag: "C" },
        { optionText: "Left-right imbalance", optionTag: "A" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "What is the height difference limit between left and right subtrees in AVL trees?",
      options: [
        { optionText: "3", optionTag: "C" },
        { optionText: "1", optionTag: "A" },
        { optionText: "0", optionTag: "D" },
        { optionText: "2", optionTag: "B" },
      ],
      correctOption: "A",
      score: 1,
    },

    // Next 10
    {
      questionText: "Which of these operations may trigger rebalancing in an AVL Tree?",
      options: [
        { optionText: "Insertion", optionTag: "C" },
        { optionText: "Traversal", optionTag: "B" },
        { optionText: "Printing", optionTag: "D" },
        { optionText: "Searching", optionTag: "A" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which of these is true for AVL Trees?",
      options: [
        { optionText: "Every BST is an AVL Tree", optionTag: "B" },
        { optionText: "AVL Tree may be unbalanced", optionTag: "A" },
        { optionText: "Every AVL Tree is a BST", optionTag: "D" },
        { optionText: "AVL Tree doesn't allow insertion", optionTag: "C" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "What is the height of an empty AVL tree?",
      options: [
        { optionText: "-1", optionTag: "A" },
        { optionText: "0", optionTag: "B" },
        { optionText: "1", optionTag: "C" },
        { optionText: "Undefined", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What happens when a node is inserted causing imbalance in AVL tree?",
      options: [
        { optionText: "Nothing", optionTag: "B" },
        { optionText: "The tree is deleted", optionTag: "D" },
        { optionText: "Rotations are performed", optionTag: "A" },
        { optionText: "Only leaf nodes are adjusted", optionTag: "C" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which AVL tree operation is most expensive in terms of rotations?",
      options: [
        { optionText: "Insertion", optionTag: "A" },
        { optionText: "Traversal", optionTag: "C" },
        { optionText: "Search", optionTag: "D" },
        { optionText: "Delete", optionTag: "B" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which case requires both left and right rotation?",
      options: [
        { optionText: "Right-right", optionTag: "C" },
        { optionText: "Left-left", optionTag: "D" },
        { optionText: "Left-right", optionTag: "A" },
        { optionText: "No rotation", optionTag: "B" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which of the following is not a valid balance factor?",
      options: [
        { optionText: "-2", optionTag: "B" },
        { optionText: "0", optionTag: "C" },
        { optionText: "1", optionTag: "D" },
        { optionText: "-1", optionTag: "A" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What will be the balance factor of a leaf node?",
      options: [
        { optionText: "0", optionTag: "D" },
        { optionText: "1", optionTag: "C" },
        { optionText: "-1", optionTag: "A" },
        { optionText: "Depends on insertion", optionTag: "B" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "What happens if AVL balance factor exceeds allowed range?",
      options: [
        { optionText: "Graph is deleted", optionTag: "C" },
        { optionText: "Rotations are used to restore balance", optionTag: "B" },
        { optionText: "Tree crashes", optionTag: "A" },
        { optionText: "Node is removed", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What is the maximum height of an AVL tree with 7 nodes?",
      options: [
        { optionText: "4", optionTag: "A" },
        { optionText: "7", optionTag: "D" },
        { optionText: "3", optionTag: "C" },
        { optionText: "2", optionTag: "B" },
      ],
      correctOption: "C",
      score: 1,
    },
  ],
};

export default quizData;