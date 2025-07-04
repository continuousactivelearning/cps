import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python Red-Black Trees - Intermediate Quiz",
  quizLevel: "intermediate",
  lang: "python",
  description: "This quiz tests your understanding of Red-Black Trees in Python.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Red-Black Trees",
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What color is the root node of a Red-Black Tree?",
      options: [
        { optionText: "Red", optionTag: "A" },
        { optionText: "Black", optionTag: "B" },
        { optionText: "Either red or black", optionTag: "C" },
        { optionText: "White", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which of the following is NOT a property of Red-Black Trees?",
      options: [
        { optionText: "Every path from root to leaf has the same number of black nodes", optionTag: "A" },
        { optionText: "No two red nodes can be adjacent", optionTag: "B" },
        { optionText: "The root is always red", optionTag: "C" },
        { optionText: "All leaves (NIL) are black", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Red-Black Trees are a type of which broader data structure?",
      options: [
        { optionText: "Binary Heap", optionTag: "A" },
        { optionText: "Binary Search Tree", optionTag: "B" },
        { optionText: "B-Tree", optionTag: "C" },
        { optionText: "Trie", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is the worst-case time complexity for insert in a Red-Black Tree?",
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
      questionText: "Which operation is used during balancing in Red-Black Trees?",
      options: [
        { optionText: "Swapping", optionTag: "A" },
        { optionText: "Heapify", optionTag: "B" },
        { optionText: "Rotation", optionTag: "C" },
        { optionText: "Shuffling", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is the color of a newly inserted node in Red-Black Tree?",
      options: [
        { optionText: "Black", optionTag: "A" },
        { optionText: "Red", optionTag: "B" },
        { optionText: "White", optionTag: "C" },
        { optionText: "Random", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is the purpose of coloring nodes in Red-Black Trees?",
      options: [
        { optionText: "To mark duplicates", optionTag: "A" },
        { optionText: "To store additional information", optionTag: "B" },
        { optionText: "To maintain balance of tree", optionTag: "C" },
        { optionText: "To improve search speed", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is the maximum height of a Red-Black Tree with n nodes?",
      options: [
        { optionText: "O(n)", optionTag: "A" },
        { optionText: "O(log n)", optionTag: "B" },
        { optionText: "O(√n)", optionTag: "C" },
        { optionText: "O(1)", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which of the following violations requires recoloring in Red-Black Trees?",
      options: [
        { optionText: "Red parent with red child", optionTag: "A" },
        { optionText: "Black parent with red child", optionTag: "B" },
        { optionText: "Equal keys", optionTag: "C" },
        { optionText: "All black subtree", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which case leads to a double rotation in Red-Black Trees?",
      options: [
        { optionText: "Left-Right or Right-Left imbalance", optionTag: "A" },
        { optionText: "Right-Right imbalance", optionTag: "B" },
        { optionText: "Left-Left imbalance", optionTag: "C" },
        { optionText: "Balanced case", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which is a valid rotation used in Red-Black Trees?",
      options: [
        { optionText: "Left Rotation", optionTag: "A" },
        { optionText: "Right Rotation", optionTag: "B" },
        { optionText: "Both A and B", optionTag: "C" },
        { optionText: "No rotation used", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Red-Black Trees are often used in which kind of libraries?",
      options: [
        { optionText: "Graphics", optionTag: "A" },
        { optionText: "Standard Template Library (STL)", optionTag: "B" },
        { optionText: "Networking", optionTag: "C" },
        { optionText: "Machine Learning", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which property helps ensure logarithmic height in Red-Black Trees?",
      options: [
        { optionText: "Color property", optionTag: "A" },
        { optionText: "Tree depth", optionTag: "B" },
        { optionText: "Binary rule", optionTag: "C" },
        { optionText: "Balance factor", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following Red-Black Tree operations takes O(log n) time?",
      options: [
        { optionText: "Insertion", optionTag: "A" },
        { optionText: "Search", optionTag: "B" },
        { optionText: "Deletion", optionTag: "C" },
        { optionText: "All of the above", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "When does rotation occur during insertion in Red-Black Tree?",
      options: [
        { optionText: "When node is red", optionTag: "A" },
        { optionText: "When parent is red and uncle is black", optionTag: "B" },
        { optionText: "When both children are red", optionTag: "C" },
        { optionText: "Always", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Red-Black Tree is a self-balancing tree. Which other tree is also self-balancing?",
      options: [
        { optionText: "AVL Tree", optionTag: "A" },
        { optionText: "Binary Tree", optionTag: "B" },
        { optionText: "Min-Heap", optionTag: "C" },
        { optionText: "Trie", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Red-Black Trees prevent skewing by maintaining which condition?",
      options: [
        { optionText: "Strict binary condition", optionTag: "A" },
        { optionText: "Minimum children condition", optionTag: "B" },
        { optionText: "Black height property", optionTag: "C" },
        { optionText: "Symmetric nodes", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which of the following is TRUE about Red-Black Trees?",
      options: [
        { optionText: "It allows two consecutive red nodes", optionTag: "A" },
        { optionText: "Every leaf node is red", optionTag: "B" },
        { optionText: "It maintains balance using color properties", optionTag: "C" },
        { optionText: "Height is not fixed", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which scenario does NOT require a tree rotation?",
      options: [
        { optionText: "Red uncle", optionTag: "A" },
        { optionText: "Black uncle with red parent", optionTag: "B" },
        { optionText: "Root insertion", optionTag: "C" },
        { optionText: "Double red violation", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "In a Red-Black Tree, the leaves are:",
      options: [
        { optionText: "Always black", optionTag: "A" },
        { optionText: "Always red", optionTag: "B" },
        { optionText: "Random", optionTag: "C" },
        { optionText: "Not colored", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    }
  ]
};

export default quizData;