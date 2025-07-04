import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python B-Trees - Advanced Quiz",
  quizLevel: "advanced",
  lang: "python",
  description: "Test your knowledge of B-Trees, widely used in databases and file systems.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "B-Trees",
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What does 'B' in B-Tree stand for?",
      options: [
        { optionText: "Balanced", optionTag: "A" },
        { optionText: "Binary", optionTag: "B" },
        { optionText: "Broad", optionTag: "C" },
        { optionText: "Branching", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which type of tree is a B-Tree?",
      options: [
        { optionText: "Balanced search tree", optionTag: "A" },
        { optionText: "Unbalanced binary tree", optionTag: "B" },
        { optionText: "Min-heap", optionTag: "C" },
        { optionText: "Trie", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What is the time complexity of search in a B-Tree of order m and height h?",
      options: [
        { optionText: "O(h)", optionTag: "A" },
        { optionText: "O(log h)", optionTag: "B" },
        { optionText: "O(m)", optionTag: "C" },
        { optionText: "O(n)", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which operation causes a node split in a B-Tree?",
      options: [
        { optionText: "Insertion", optionTag: "A" },
        { optionText: "Deletion", optionTag: "B" },
        { optionText: "Search", optionTag: "C" },
        { optionText: "Traversal", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What is the minimum number of keys in a non-root B-Tree node of order m?",
      options: [
        { optionText: "⌈m/2⌉ - 1", optionTag: "A" },
        { optionText: "m - 1", optionTag: "B" },
        { optionText: "m", optionTag: "C" },
        { optionText: "0", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which of the following is TRUE about B-Trees?",
      options: [
        { optionText: "All leaves are at the same level", optionTag: "A" },
        { optionText: "Only root can have fewer children", optionTag: "B" },
        { optionText: "Keys can be repeated", optionTag: "C" },
        { optionText: "Each node contains only one key", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which data structure is better than B-Trees for storing indexes in memory?",
      options: [
        { optionText: "B+ Trees", optionTag: "A" },
        { optionText: "AVL Trees", optionTag: "B" },
        { optionText: "Splay Trees", optionTag: "C" },
        { optionText: "Hash Tables", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "In a B-Tree of order m, a node can have how many maximum children?",
      options: [
        { optionText: "m", optionTag: "A" },
        { optionText: "m+1", optionTag: "B" },
        { optionText: "m-1", optionTag: "C" },
        { optionText: "2m", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "When a B-Tree node overflows, how is it handled?",
      options: [
        { optionText: "Split the node and push median to parent", optionTag: "A" },
        { optionText: "Ignore the overflow", optionTag: "B" },
        { optionText: "Remove the largest key", optionTag: "C" },
        { optionText: "Rotate with sibling", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What is the worst-case height of a B-Tree with n keys and order m?",
      options: [
        { optionText: "logₘ(n)", optionTag: "A" },
        { optionText: "n", optionTag: "B" },
        { optionText: "m", optionTag: "C" },
        { optionText: "log₂(n)", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which of these is a real-world application of B-Trees?",
      options: [
        { optionText: "Database indexes", optionTag: "A" },
        { optionText: "CPU registers", optionTag: "B" },
        { optionText: "Stacks", optionTag: "C" },
        { optionText: "Compiler syntax trees", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which of the following operations does NOT change tree height?",
      options: [
        { optionText: "Search", optionTag: "A" },
        { optionText: "Insert", optionTag: "B" },
        { optionText: "Delete", optionTag: "C" },
        { optionText: "Split", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which case requires node merging in B-Trees?",
      options: [
        { optionText: "Underflow during deletion", optionTag: "A" },
        { optionText: "Node overflow", optionTag: "B" },
        { optionText: "Insertion", optionTag: "C" },
        { optionText: "Search miss", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What’s a major difference between B-Trees and Binary Trees?",
      options: [
        { optionText: "B-Trees can have more than 2 children per node", optionTag: "A" },
        { optionText: "Binary trees can have any number of children", optionTag: "B" },
        { optionText: "B-Trees are only for strings", optionTag: "C" },
        { optionText: "Binary Trees are always balanced", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which traversal is commonly used for B-Trees in databases?",
      options: [
        { optionText: "In-order", optionTag: "A" },
        { optionText: "Pre-order", optionTag: "B" },
        { optionText: "Post-order", optionTag: "C" },
        { optionText: "Breadth-First", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which is FALSE about B-Trees?",
      options: [
        { optionText: "Keys in nodes are sorted", optionTag: "A" },
        { optionText: "All leaves are not at the same level", optionTag: "B" },
        { optionText: "All internal nodes except root have at least ⌈m/2⌉ children", optionTag: "C" },
        { optionText: "Root can have fewer than ⌈m/2⌉ children", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "B-Tree operations are efficient due to:",
      options: [
        { optionText: "Low height and high branching factor", optionTag: "A" },
        { optionText: "Balanced binary properties", optionTag: "B" },
        { optionText: "No need for rebalancing", optionTag: "C" },
        { optionText: "Leaf node access only", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which of these operations may involve both merging and redistribution in B-Trees?",
      options: [
        { optionText: "Deletion", optionTag: "A" },
        { optionText: "Search", optionTag: "B" },
        { optionText: "Insert", optionTag: "C" },
        { optionText: "Traversal", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Why are B-Trees better than Binary Search Trees for databases?",
      options: [
        { optionText: "Minimizes disk reads due to fewer levels", optionTag: "A" },
        { optionText: "Takes less memory", optionTag: "B" },
        { optionText: "Simple to implement", optionTag: "C" },
        { optionText: "Uses recursion only", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
  ],
};

export default quizData;