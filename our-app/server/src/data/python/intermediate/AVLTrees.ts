import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python AVL Trees - Intermediate Quiz",
  quizLevel: "intermediate",
  lang: "python",
  description: "This quiz tests your understanding of AVL Trees in Python.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "AVLTrees",
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the maximum height difference allowed between left and right subtrees in an AVL Tree?",
      options: [
        { optionText: "1", optionTag: "A" },
        { optionText: "0", optionTag: "B" },
        { optionText: "2", optionTag: "C" },
        { optionText: "3", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which traversal is most commonly used to check the balance factor of an AVL Tree?",
      options: [
        { optionText: "In-order", optionTag: "A" },
        { optionText: "Post-order", optionTag: "B" },
        { optionText: "Pre-order", optionTag: "C" },
        { optionText: "Level-order", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which of the following is NOT a valid rotation in AVL Trees?",
      options: [
        { optionText: "LL Rotation", optionTag: "A" },
        { optionText: "RR Rotation", optionTag: "B" },
        { optionText: "LR Rotation", optionTag: "C" },
        { optionText: "RL Rotation", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the balance factor of a node in an AVL tree?",
      options: [
        { optionText: "Height(left) - Height(right)", optionTag: "A" },
        { optionText: "Height(right) - Height(left)", optionTag: "B" },
        { optionText: "Height(left) + Height(right)", optionTag: "C" },
        { optionText: "Max(Height(left), Height(right))", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which condition causes a left-right (LR) rotation?",
      options: [
        { optionText: "Left child has a right-heavy subtree", optionTag: "A" },
        { optionText: "Right child has a right-heavy subtree", optionTag: "B" },
        { optionText: "Left child has a left-heavy subtree", optionTag: "C" },
        { optionText: "Right child has a left-heavy subtree", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which Python data structure can be used to implement AVL Trees efficiently?",
      options: [
        { optionText: "List", optionTag: "A" },
        { optionText: "Dictionary", optionTag: "B" },
        { optionText: "Class with Node objects", optionTag: "C" },
        { optionText: "Tuple", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is the time complexity of insertion in an AVL tree?",
      options: [
        { optionText: "O(log n)", optionTag: "A" },
        { optionText: "O(n)", optionTag: "B" },
        { optionText: "O(n log n)", optionTag: "C" },
        { optionText: "O(1)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What causes the tree to become unbalanced in AVL Trees?",
      options: [
        { optionText: "Random insertions", optionTag: "A" },
        { optionText: "Skewed insertions", optionTag: "B" },
        { optionText: "Balanced insertions", optionTag: "C" },
        { optionText: "Sorted insertions", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which rotation is used when a new node is inserted into the left subtree of the left child?",
      options: [
        { optionText: "LL Rotation", optionTag: "A" },
        { optionText: "RR Rotation", optionTag: "B" },
        { optionText: "LR Rotation", optionTag: "C" },
        { optionText: "RL Rotation", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following operations can violate the AVL property?",
      options: [
        { optionText: "Insertion", optionTag: "A" },
        { optionText: "Search", optionTag: "B" },
        { optionText: "Traversal", optionTag: "C" },
        { optionText: "Printing", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which AVL Tree operation uses recursive backtracking to check balance?",
      options: [
        { optionText: "Deletion", optionTag: "A" },
        { optionText: "Insertion", optionTag: "B" },
        { optionText: "Search", optionTag: "C" },
        { optionText: "Update", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "AVL Tree is a type of which broader data structure?",
      options: [
        { optionText: "Graph", optionTag: "A" },
        { optionText: "Heap", optionTag: "B" },
        { optionText: "Binary Search Tree", optionTag: "C" },
        { optionText: "Linked List", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What happens when the balance factor is >1 or <-1?",
      options: [
        { optionText: "Rotation required", optionTag: "A" },
        { optionText: "No change", optionTag: "B" },
        { optionText: "Tree becomes static", optionTag: "C" },
        { optionText: "Height increases", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which rotation is needed when a new node is inserted in the right subtree of the left child?",
      options: [
        { optionText: "LR Rotation", optionTag: "A" },
        { optionText: "LL Rotation", optionTag: "B" },
        { optionText: "RR Rotation", optionTag: "C" },
        { optionText: "RL Rotation", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "The AVL tree guarantees which time complexity for deletion?",
      options: [
        { optionText: "O(log n)", optionTag: "A" },
        { optionText: "O(n)", optionTag: "B" },
        { optionText: "O(n^2)", optionTag: "C" },
        { optionText: "O(1)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the minimum number of nodes in an AVL tree of height 3?",
      options: [
        { optionText: "4", optionTag: "A" },
        { optionText: "7", optionTag: "B" },
        { optionText: "5", optionTag: "C" },
        { optionText: "6", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which property does AVL Tree NOT guarantee?",
      options: [
        { optionText: "Height Balance", optionTag: "A" },
        { optionText: "Sorted Structure", optionTag: "B" },
        { optionText: "Constant Lookup", optionTag: "C" },
        { optionText: "Self-balancing", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is the worst-case height of an AVL tree with n nodes?",
      options: [
        { optionText: "O(log n)", optionTag: "A" },
        { optionText: "O(n)", optionTag: "B" },
        { optionText: "O(n log n)", optionTag: "C" },
        { optionText: "O(1)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How does an AVL tree ensure balance?",
      options: [
        { optionText: "By using heap properties", optionTag: "A" },
        { optionText: "By adjusting root height", optionTag: "B" },
        { optionText: "By using balance factors and rotations", optionTag: "C" },
        { optionText: "By sorting nodes", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is the balance factor of a leaf node in an AVL Tree?",
      options: [
        { optionText: "0", optionTag: "A" },
        { optionText: "1", optionTag: "B" },
        { optionText: "-1", optionTag: "C" },
        { optionText: "Undefined", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    }
  ]
};

export default quizData;