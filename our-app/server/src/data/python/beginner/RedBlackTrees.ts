import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python - Red-Black Trees - Beginner Quiz",
  quizLevel: "beginner",
  lang: "python",
  description: "Quiz to assess understanding of Red-Black Trees basics in Python.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "RedBlackTrees",
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What type of tree is a Red-Black Tree?",
      options: [
        { optionText: "Self-balancing binary search tree", optionTag: "B" },
        { optionText: "Heap", optionTag: "C" },
        { optionText: "Graph", optionTag: "D" },
        { optionText: "Trie", optionTag: "A" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What is the color of a newly inserted node in a Red-Black Tree?",
      options: [
        { optionText: "Black", optionTag: "C" },
        { optionText: "Red", optionTag: "D" },
        { optionText: "White", optionTag: "A" },
        { optionText: "Depends on the parent", optionTag: "B" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "Which of the following is NOT a property of Red-Black Trees?",
      options: [
        { optionText: "Every node is either red or black", optionTag: "C" },
        { optionText: "Root is always red", optionTag: "B" },
        { optionText: "Red nodes cannot have red children", optionTag: "A" },
        { optionText: "All paths from a node to its descendant leaves contain the same number of black nodes", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What is the maximum height of a Red-Black Tree with n nodes?",
      options: [
        { optionText: "2 * log(n + 1)", optionTag: "A" },
        { optionText: "log(n)", optionTag: "B" },
        { optionText: "n", optionTag: "D" },
        { optionText: "n/2", optionTag: "C" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What rotation is needed in a Left-Left imbalance during insertion?",
      options: [
        { optionText: "Right Rotation", optionTag: "A" },
        { optionText: "Left Rotation", optionTag: "D" },
        { optionText: "Double Rotation", optionTag: "C" },
        { optionText: "No rotation needed", optionTag: "B" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "How are Red-Black Trees and AVL Trees different?",
      options: [
        { optionText: "RB Trees are more rigidly balanced", optionTag: "B" },
        { optionText: "AVL Trees allow red nodes", optionTag: "C" },
        { optionText: "RB Trees offer faster insertion in practice", optionTag: "D" },
        { optionText: "AVL Trees are not binary search trees", optionTag: "A" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "Which operation may trigger rebalancing in a Red-Black Tree?",
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
      questionText: "Which of the following is true for Red-Black Trees?",
      options: [
        { optionText: "All leaf nodes are black", optionTag: "A" },
        { optionText: "All leaf nodes are red", optionTag: "C" },
        { optionText: "Leaf nodes are always null", optionTag: "D" },
        { optionText: "All nodes must be red", optionTag: "B" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which scenario causes a recoloring operation?",
      options: [
        { optionText: "Uncle is black", optionTag: "C" },
        { optionText: "Uncle is red", optionTag: "B" },
        { optionText: "Parent is root", optionTag: "A" },
        { optionText: "Root is black", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What is the color of a Red-Black Tree root after insertion fix-up?",
      options: [
        { optionText: "White", optionTag: "C" },
        { optionText: "Red", optionTag: "D" },
        { optionText: "Green", optionTag: "A" },
        { optionText: "Black", optionTag: "B" },
      ],
      correctOption: "B",
      score: 1,
    },

    // Next 10
    {
      questionText: "What happens if Red-Black Tree becomes unbalanced?",
      options: [
        { optionText: "It’s rebuilt from scratch", optionTag: "D" },
        { optionText: "Tree is deleted", optionTag: "C" },
        { optionText: "Rotations and recoloring fix it", optionTag: "A" },
        { optionText: "Only left child is adjusted", optionTag: "B" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What is the time complexity of insertion in Red-Black Trees?",
      options: [
        { optionText: "O(n)", optionTag: "D" },
        { optionText: "O(log n)", optionTag: "A" },
        { optionText: "O(1)", optionTag: "B" },
        { optionText: "O(n^2)", optionTag: "C" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "How many colors can a node have in a Red-Black Tree?",
      options: [
        { optionText: "Three", optionTag: "D" },
        { optionText: "One", optionTag: "C" },
        { optionText: "Four", optionTag: "A" },
        { optionText: "Two", optionTag: "B" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What is the black height of a Red-Black Tree?",
      options: [
        { optionText: "Number of red nodes from root to leaf", optionTag: "B" },
        { optionText: "Number of black nodes from root to leaf", optionTag: "A" },
        { optionText: "Total height of tree", optionTag: "C" },
        { optionText: "Balance factor", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What is the leaf node in a Red-Black Tree?",
      options: [
        { optionText: "A red-colored node", optionTag: "B" },
        { optionText: "Node with no children (nulls)", optionTag: "C" },
        { optionText: "Root node", optionTag: "D" },
        { optionText: "Node with highest value", optionTag: "A" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which traversal will give sorted elements from Red-Black Tree?",
      options: [
        { optionText: "In-order", optionTag: "A" },
        { optionText: "Pre-order", optionTag: "C" },
        { optionText: "Post-order", optionTag: "B" },
        { optionText: "Level-order", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "When does recoloring occur?",
      options: [
        { optionText: "When parent and uncle are red", optionTag: "D" },
        { optionText: "When root is inserted", optionTag: "C" },
        { optionText: "When no imbalance", optionTag: "B" },
        { optionText: "Only after deletion", optionTag: "A" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "Which type of tree does a Red-Black Tree generalize?",
      options: [
        { optionText: "Binary Heap", optionTag: "B" },
        { optionText: "Binary Search Tree", optionTag: "A" },
        { optionText: "AVL Tree", optionTag: "D" },
        { optionText: "Trie", optionTag: "C" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which case requires left-right rotation?",
      options: [
        { optionText: "Parent and uncle black", optionTag: "C" },
        { optionText: "Left-right imbalance", optionTag: "B" },
        { optionText: "Red root", optionTag: "D" },
        { optionText: "Black height violation", optionTag: "A" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What is the benefit of using Red-Black Trees?",
      options: [
        { optionText: "Maintains logarithmic height for efficient operations", optionTag: "C" },
        { optionText: "Stores data in compressed format", optionTag: "D" },
        { optionText: "Supports duplicate keys", optionTag: "B" },
        { optionText: "Can store strings only", optionTag: "A" },
      ],
      correctOption: "C",
      score: 1,
    },
  ],
};

export default quizData;