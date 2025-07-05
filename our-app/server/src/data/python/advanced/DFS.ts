import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python Depth-First Search (DFS) - Advanced Quiz",
  quizLevel: "advanced",
  lang: "python",
  description: "Challenge your mastery of DFS traversal in graphs using Python.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "DFS",
  },
  quizScore: 20,
  questions: [
    {
      questionText: "Which data structure is typically used to implement DFS?",
      options: [
        { optionText: "Queue", optionTag: "A" },
        { optionText: "Stack", optionTag: "B" },
        { optionText: "Priority Queue", optionTag: "C" },
        { optionText: "Hash Table", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What is the time complexity of DFS in an adjacency list representation?",
      options: [
        { optionText: "O(V + E)", optionTag: "A" },
        { optionText: "O(V^2)", optionTag: "B" },
        { optionText: "O(E^2)", optionTag: "C" },
        { optionText: "O(VE)", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What traversal order is followed by DFS?",
      options: [
        { optionText: "Level-order", optionTag: "A" },
        { optionText: "Breadth-first", optionTag: "B" },
        { optionText: "Depth-first", optionTag: "C" },
        { optionText: "Zigzag", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "How can DFS be implemented recursively?",
      options: [
        { optionText: "Using a stack", optionTag: "A" },
        { optionText: "Using a queue", optionTag: "B" },
        { optionText: "Using function calls and visited tracking", optionTag: "C" },
        { optionText: "Using hash maps only", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "What is the main limitation of DFS in finding shortest paths?",
      options: [
        { optionText: "DFS doesn't explore all nodes", optionTag: "A" },
        { optionText: "DFS always finds the longest path", optionTag: "B" },
        { optionText: "DFS may not find the shortest path", optionTag: "C" },
        { optionText: "DFS skips edges", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "DFS is suitable for which of the following applications?",
      options: [
        { optionText: "Shortest path in unweighted graph", optionTag: "A" },
        { optionText: "Finding connected components", optionTag: "B" },
        { optionText: "Cycle detection in weighted graphs", optionTag: "C" },
        { optionText: "Priority-based traversal", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "In DFS, when is a node added to the stack?",
      options: [
        { optionText: "After exploring all neighbors", optionTag: "A" },
        { optionText: "Before checking if visited", optionTag: "B" },
        { optionText: "After marking as visited", optionTag: "C" },
        { optionText: "As soon as it is visited", optionTag: "D" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "What is used to track visited nodes in DFS?",
      options: [
        { optionText: "Priority queue", optionTag: "A" },
        { optionText: "List or set", optionTag: "B" },
        { optionText: "Matrix only", optionTag: "C" },
        { optionText: "Stack only", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "In what order does DFS visit the nodes?",
      options: [
        { optionText: "Top-down only", optionTag: "A" },
        { optionText: "Level-wise", optionTag: "B" },
        { optionText: "As deep as possible before backtracking", optionTag: "C" },
        { optionText: "Random", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which of the following uses DFS?",
      options: [
        { optionText: "Prim's algorithm", optionTag: "A" },
        { optionText: "Topological sort", optionTag: "B" },
        { optionText: "Dijkstra's algorithm", optionTag: "C" },
        { optionText: "Bellman-Ford", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "DFS traversal of a binary tree is also known as:",
      options: [
        { optionText: "Level-order", optionTag: "A" },
        { optionText: "Preorder, Inorder, Postorder", optionTag: "B" },
        { optionText: "Breadth-first", optionTag: "C" },
        { optionText: "Cycle-order", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What is the disadvantage of recursive DFS?",
      options: [
        { optionText: "Slower than BFS", optionTag: "A" },
        { optionText: "Can cause stack overflow on deep graphs", optionTag: "B" },
        { optionText: "Needs more memory", optionTag: "C" },
        { optionText: "Misses nodes", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which of the following avoids recursion in DFS?",
      options: [
        { optionText: "Adjacency list", optionTag: "A" },
        { optionText: "Queue", optionTag: "B" },
        { optionText: "Explicit stack", optionTag: "C" },
        { optionText: "Hash Map", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "How to detect cycle in a directed graph using DFS?",
      options: [
        { optionText: "Track visited and recursion stack", optionTag: "A" },
        { optionText: "Use a min heap", optionTag: "B" },
        { optionText: "Count out-degrees", optionTag: "C" },
        { optionText: "Track depth level", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which traversal is NOT DFS based?",
      options: [
        { optionText: "Preorder", optionTag: "A" },
        { optionText: "Inorder", optionTag: "B" },
        { optionText: "Postorder", optionTag: "C" },
        { optionText: "Level-order", optionTag: "D" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "DFS traversal in disconnected graphs:",
      options: [
        { optionText: "Visits one component", optionTag: "A" },
        { optionText: "Fails", optionTag: "B" },
        { optionText: "Requires calling DFS for each component", optionTag: "C" },
        { optionText: "Works without modification", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "What is backtracking in context of DFS?",
      options: [
        { optionText: "Skipping nodes", optionTag: "A" },
        { optionText: "Returning to previous node after full exploration", optionTag: "B" },
        { optionText: "Visiting same node twice", optionTag: "C" },
        { optionText: "Using a queue", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "DFS is preferred over BFS when:",
      options: [
        { optionText: "Graph is wide", optionTag: "A" },
        { optionText: "Need shortest path", optionTag: "B" },
        { optionText: "Graph is deep", optionTag: "C" },
        { optionText: "Graph is cyclic", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which node is processed last in DFS with stack?",
      options: [
        { optionText: "First pushed", optionTag: "A" },
        { optionText: "Last pushed", optionTag: "B" },
        { optionText: "Root always", optionTag: "C" },
        { optionText: "Random", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "DFS can be used for:",
      options: [
        { optionText: "Finding minimum spanning tree", optionTag: "A" },
        { optionText: "Topological sorting", optionTag: "B" },
        { optionText: "Shortest path in weighted graph", optionTag: "C" },
        { optionText: "Multi-source BFS", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
  ],
};

export default quizData;