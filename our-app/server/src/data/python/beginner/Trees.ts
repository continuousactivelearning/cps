import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python Trees - Beginner Quiz",
  quizLevel: "beginner",
  lang: "python",
  description: "This quiz tests your understanding of basic tree concepts and implementations in Python.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Trees"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is a tree in data structures?",
      options: [
        { optionText: "A linear data structure", optionTag: "A" },
        { optionText: "A hierarchical data structure", optionTag: "B" },
        { optionText: "A type of array", optionTag: "C" },
        { optionText: "A function in Python", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is the topmost node of a tree called?",
      options: [
        { optionText: "Root", optionTag: "C" },
        { optionText: "Leaf", optionTag: "D" },
        { optionText: "Parent", optionTag: "A" },
        { optionText: "Branch", optionTag: "B" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is a node with no children called?",
      options: [
        { optionText: "Root", optionTag: "A" },
        { optionText: "Leaf", optionTag: "B" },
        { optionText: "Parent", optionTag: "C" },
        { optionText: "Sibling", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "In a binary tree, each node can have at most:",
      options: [
        { optionText: "1 child", optionTag: "A" },
        { optionText: "3 children", optionTag: "B" },
        { optionText: "2 children", optionTag: "C" },
        { optionText: "Unlimited children", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which traversal method visits nodes in the order: left, root, right?",
      options: [
        { optionText: "Postorder", optionTag: "B" },
        { optionText: "Inorder", optionTag: "D" },
        { optionText: "Preorder", optionTag: "C" },
        { optionText: "Level Order", optionTag: "A" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What does a preorder traversal visit first?",
      options: [
        { optionText: "Left subtree", optionTag: "C" },
        { optionText: "Right subtree", optionTag: "D" },
        { optionText: "Root", optionTag: "A" },
        { optionText: "Leaf", optionTag: "B" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which traversal uses a queue?",
      options: [
        { optionText: "Postorder", optionTag: "A" },
        { optionText: "Preorder", optionTag: "C" },
        { optionText: "Level Order", optionTag: "B" },
        { optionText: "Inorder", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which is not a type of tree?",
      options: [
        { optionText: "Binary Tree", optionTag: "C" },
        { optionText: "Ternary Tree", optionTag: "B" },
        { optionText: "Circular Tree", optionTag: "A" },
        { optionText: "General Tree", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which Python module can be used to draw tree structures?",
      options: [
        { optionText: "math", optionTag: "A" },
        { optionText: "os", optionTag: "D" },
        { optionText: "graphviz", optionTag: "B" },
        { optionText: "random", optionTag: "C" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is the maximum number of nodes in a binary tree of height h?",
      options: [
        { optionText: "h", optionTag: "C" },
        { optionText: "2^h - 1", optionTag: "A" },
        { optionText: "h^2", optionTag: "B" },
        { optionText: "h!", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "In a tree, every child has exactly one:",
      options: [
        { optionText: "Root", optionTag: "C" },
        { optionText: "Leaf", optionTag: "D" },
        { optionText: "Sibling", optionTag: "B" },
        { optionText: "Parent", optionTag: "A" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which is used to avoid recursion in tree traversal?",
      options: [
        { optionText: "Heap", optionTag: "C" },
        { optionText: "Stack", optionTag: "D" },
        { optionText: "Queue", optionTag: "A" },
        { optionText: "Array", optionTag: "B" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which traversal visits all the leaf nodes first?",
      options: [
        { optionText: "Inorder", optionTag: "A" },
        { optionText: "Preorder", optionTag: "B" },
        { optionText: "Postorder", optionTag: "C" },
        { optionText: "Level Order", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which traversal visits nodes in breadth-first manner?",
      options: [
        { optionText: "Preorder", optionTag: "A" },
        { optionText: "Inorder", optionTag: "C" },
        { optionText: "Level Order", optionTag: "D" },
        { optionText: "Postorder", optionTag: "B" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "A node with both left and right child is called:",
      options: [
        { optionText: "Root", optionTag: "D" },
        { optionText: "Binary Node", optionTag: "A" },
        { optionText: "Internal Node", optionTag: "C" },
        { optionText: "Leaf", optionTag: "B" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which traversal is used to copy a tree?",
      options: [
        { optionText: "Inorder", optionTag: "B" },
        { optionText: "Postorder", optionTag: "A" },
        { optionText: "Preorder", optionTag: "C" },
        { optionText: "Level Order", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is the height of a single node tree?",
      options: [
        { optionText: "1", optionTag: "B" },
        { optionText: "2", optionTag: "D" },
        { optionText: "0", optionTag: "C" },
        { optionText: "-1", optionTag: "A" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is the minimum number of nodes in a full binary tree of height h?",
      options: [
        { optionText: "2^h - 1", optionTag: "D" },
        { optionText: "h", optionTag: "B" },
        { optionText: "h + 1", optionTag: "A" },
        { optionText: "h * 2", optionTag: "C" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which node has no parent?",
      options: [
        { optionText: "Leaf", optionTag: "B" },
        { optionText: "Sibling", optionTag: "C" },
        { optionText: "Root", optionTag: "A" },
        { optionText: "Child", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is a balanced tree?",
      options: [
        { optionText: "Every node has 2 children", optionTag: "A" },
        { optionText: "Left and right subtree heights differ by at most 1", optionTag: "D" },
        { optionText: "All leaves at the same level", optionTag: "B" },
        { optionText: "Only one child per node", optionTag: "C" }
      ],
      correctOption: "D",
      score: 1
    }
  ]
};

export default quizData;