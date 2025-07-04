import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Java AVL Trees - Intermediate Quiz",
  quizLevel: "intermediate",
  lang: "java",
  description: "Assess your understanding of AVL Trees and their operations.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "AVL Trees"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the key property of an AVL Tree?",
      options: [
        { optionText: "Balance factor of each node is -1, 0, or 1", optionTag: "B" },
        { optionText: "All nodes must have two children", optionTag: "A" },
        { optionText: "Tree must be complete", optionTag: "C" },
        { optionText: "Each node has a unique color", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What does AVL stand for?",
      options: [
        { optionText: "Adelson-Velsky and Landis", optionTag: "D" },
        { optionText: "Advanced Virtual Logic", optionTag: "A" },
        { optionText: "Average Value Lookup", optionTag: "C" },
        { optionText: "Automatic Value Limiter", optionTag: "B" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What is the maximum allowed difference in heights of left and right subtrees in AVL?",
      options: [
        { optionText: "1", optionTag: "A" },
        { optionText: "2", optionTag: "C" },
        { optionText: "0", optionTag: "B" },
        { optionText: "No restriction", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is a balance factor in AVL trees?",
      options: [
        { optionText: "Height(left subtree) - Height(right subtree)", optionTag: "C" },
        { optionText: "Number of left children", optionTag: "A" },
        { optionText: "Total height", optionTag: "D" },
        { optionText: "Sum of node values", optionTag: "B" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which rotation is applied when left child of left subtree causes imbalance?",
      options: [
        { optionText: "Right Rotation", optionTag: "B" },
        { optionText: "Left Rotation", optionTag: "A" },
        { optionText: "Left-Right Rotation", optionTag: "C" },
        { optionText: "Right-Left Rotation", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which of these is not a type of rotation in AVL Trees?",
      options: [
        { optionText: "Bottom-Up Rotation", optionTag: "C" },
        { optionText: "Left Rotation", optionTag: "A" },
        { optionText: "Right Rotation", optionTag: "B" },
        { optionText: "Left-Right Rotation", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which operation may require rotations to maintain AVL balance?",
      options: [
        { optionText: "Insertion", optionTag: "D" },
        { optionText: "Traversal", optionTag: "B" },
        { optionText: "Printing", optionTag: "C" },
        { optionText: "Searching", optionTag: "A" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What is the time complexity for insertion in an AVL tree?",
      options: [
        { optionText: "O(log n)", optionTag: "B" },
        { optionText: "O(n)", optionTag: "A" },
        { optionText: "O(n log n)", optionTag: "D" },
        { optionText: "O(1)", optionTag: "C" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which of the following AVL tree operations does not involve rotation?",
      options: [
        { optionText: "Searching", optionTag: "A" },
        { optionText: "Insertion", optionTag: "B" },
        { optionText: "Deletion", optionTag: "C" },
        { optionText: "Rebalancing", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which condition leads to Left-Right Rotation?",
      options: [
        { optionText: "Left child has right-heavy subtree", optionTag: "D" },
        { optionText: "Right child has right-heavy subtree", optionTag: "A" },
        { optionText: "Left child has left-heavy subtree", optionTag: "B" },
        { optionText: "Root is balanced", optionTag: "C" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "AVL Trees ensure:",
      options: [
        { optionText: "Balanced height for optimal search time", optionTag: "C" },
        { optionText: "Sorted node values", optionTag: "B" },
        { optionText: "Max heap property", optionTag: "A" },
        { optionText: "Parent always greater", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What happens after insertion in an AVL tree?",
      options: [
        { optionText: "Check and fix balance using rotation", optionTag: "B" },
        { optionText: "Recreate the entire tree", optionTag: "A" },
        { optionText: "Convert to binary tree", optionTag: "C" },
        { optionText: "Nothing changes", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "How many types of rotations are there in AVL trees?",
      options: [
        { optionText: "4", optionTag: "A" },
        { optionText: "3", optionTag: "D" },
        { optionText: "2", optionTag: "B" },
        { optionText: "1", optionTag: "C" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "After a rotation, AVL tree must:",
      options: [
        { optionText: "Maintain BST and balance properties", optionTag: "C" },
        { optionText: "Lose balance", optionTag: "A" },
        { optionText: "Ignore child nodes", optionTag: "D" },
        { optionText: "Reset values", optionTag: "B" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which is a bottom-up balancing method?",
      options: [
        { optionText: "AVL Tree rebalancing", optionTag: "B" },
        { optionText: "Bubble Sort", optionTag: "A" },
        { optionText: "Heapify", optionTag: "C" },
        { optionText: "Breadth First Search", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which traversal is best for printing AVL tree structure?",
      options: [
        { optionText: "Level-order", optionTag: "D" },
        { optionText: "In-order", optionTag: "C" },
        { optionText: "Pre-order", optionTag: "A" },
        { optionText: "Post-order", optionTag: "B" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "How is balance factor recalculated?",
      options: [
        { optionText: "Height(left) - Height(right)", optionTag: "A" },
        { optionText: "Child count", optionTag: "B" },
        { optionText: "Sum of subtree values", optionTag: "C" },
        { optionText: "Max of left and right nodes", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which is true about AVL deletion?",
      options: [
        { optionText: "Can trigger multiple rebalancing", optionTag: "C" },
        { optionText: "Deletes entire tree", optionTag: "A" },
        { optionText: "Slower than insertion", optionTag: "B" },
        { optionText: "Not supported", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "AVL Tree is a type of:",
      options: [
        { optionText: "Self-balancing BST", optionTag: "B" },
        { optionText: "Heap", optionTag: "A" },
        { optionText: "Hash Table", optionTag: "C" },
        { optionText: "Graph", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "When is AVL tree most effective?",
      options: [
        { optionText: "Frequent insertions and deletions", optionTag: "D" },
        { optionText: "Only search operations", optionTag: "B" },
        { optionText: "Only insertions", optionTag: "A" },
        { optionText: "In static datasets", optionTag: "C" }
      ],
      correctOption: "D",
      score: 1
    }
  ]
};

export default quizData;