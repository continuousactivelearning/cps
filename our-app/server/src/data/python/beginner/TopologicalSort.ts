import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python - Topological Sort - Beginner Quiz",
  quizLevel: "beginner",
  lang: "python",
  description: "Quiz to assess understanding of Topological Sort basics in Python.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "TopologicalSort",
  },
  quizScore: 20,
  questions: [
    {
      questionText: "Topological sorting is applicable only to which type of graph?",
      options: [
        { optionText: "Undirected Graph", optionTag: "C" },
        { optionText: "Weighted Graph", optionTag: "D" },
        { optionText: "Directed Acyclic Graph (DAG)", optionTag: "A" },
        { optionText: "Bipartite Graph", optionTag: "B" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What is the primary use of topological sort?",
      options: [
        { optionText: "Detecting cycles", optionTag: "C" },
        { optionText: "Graph coloring", optionTag: "D" },
        { optionText: "Ordering tasks based on dependencies", optionTag: "B" },
        { optionText: "Finding MST", optionTag: "A" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which traversal technique is typically used in topological sort?",
      options: [
        { optionText: "BFS", optionTag: "C" },
        { optionText: "DFS", optionTag: "D" },
        { optionText: "In-order", optionTag: "A" },
        { optionText: "Level-order", optionTag: "B" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "Which Python data structure is useful in Kahn’s algorithm?",
      options: [
        { optionText: "Stack", optionTag: "A" },
        { optionText: "Set", optionTag: "D" },
        { optionText: "Queue", optionTag: "B" },
        { optionText: "Dictionary", optionTag: "C" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What is the time complexity of topological sort (DFS based)?",
      options: [
        { optionText: "O(V+E)", optionTag: "C" },
        { optionText: "O(VE)", optionTag: "D" },
        { optionText: "O(V^2)", optionTag: "A" },
        { optionText: "O(log V)", optionTag: "B" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "What is the output of topological sort?",
      options: [
        { optionText: "An undirected graph", optionTag: "D" },
        { optionText: "Sorted node degrees", optionTag: "B" },
        { optionText: "Ordering of vertices", optionTag: "A" },
        { optionText: "Shortest paths", optionTag: "C" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Topological sort is invalid if the graph contains:",
      options: [
        { optionText: "Parallel edges", optionTag: "D" },
        { optionText: "Self-loops", optionTag: "C" },
        { optionText: "Cycles", optionTag: "B" },
        { optionText: "Disconnected components", optionTag: "A" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Kahn’s algorithm uses which approach?",
      options: [
        { optionText: "DFS", optionTag: "A" },
        { optionText: "Greedy BFS with in-degree tracking", optionTag: "C" },
        { optionText: "Union-Find", optionTag: "D" },
        { optionText: "Dynamic Programming", optionTag: "B" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "What is the space complexity of topological sort?",
      options: [
        { optionText: "O(V+E)", optionTag: "A" },
        { optionText: "O(V^2)", optionTag: "C" },
        { optionText: "O(E^2)", optionTag: "B" },
        { optionText: "O(log V)", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which of these applications uses topological sorting?",
      options: [
        { optionText: "Finding bridges", optionTag: "D" },
        { optionText: "Graph coloring", optionTag: "A" },
        { optionText: "Job scheduling", optionTag: "C" },
        { optionText: "Shortest path", optionTag: "B" },
      ],
      correctOption: "C",
      score: 1,
    },

    // Next 10 questions
    {
      questionText: "Topological sort of a DAG is:",
      options: [
        { optionText: "Always unique", optionTag: "C" },
        { optionText: "May have multiple valid orders", optionTag: "A" },
        { optionText: "Only valid for trees", optionTag: "B" },
        { optionText: "Only valid for weighted graphs", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which value is used to track vertices in Kahn’s algorithm?",
      options: [
        { optionText: "Out-degree", optionTag: "D" },
        { optionText: "Height", optionTag: "C" },
        { optionText: "In-degree", optionTag: "B" },
        { optionText: "Distance", optionTag: "A" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "In topological sort, when using DFS, when is a node added to the result?",
      options: [
        { optionText: "Before DFS call", optionTag: "D" },
        { optionText: "When in-degree becomes zero", optionTag: "A" },
        { optionText: "After all its neighbors are visited", optionTag: "C" },
        { optionText: "During edge traversal", optionTag: "B" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "If a topological sort returns no output, the graph is likely:",
      options: [
        { optionText: "Weighted", optionTag: "C" },
        { optionText: "Cyclic", optionTag: "A" },
        { optionText: "Tree", optionTag: "D" },
        { optionText: "Disconnected", optionTag: "B" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which algorithm can detect cycles in a DAG?",
      options: [
        { optionText: "Union-Find", optionTag: "B" },
        { optionText: "Kahn’s Algorithm", optionTag: "A" },
        { optionText: "Binary Search", optionTag: "D" },
        { optionText: "BFS only", optionTag: "C" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What is an example of a real-world application of topological sort?",
      options: [
        { optionText: "Minimum spanning tree", optionTag: "C" },
        { optionText: "Compiler dependency resolution", optionTag: "D" },
        { optionText: "Shortest path detection", optionTag: "B" },
        { optionText: "Network flow", optionTag: "A" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "Which property is NOT essential for topological sort?",
      options: [
        { optionText: "No cycles", optionTag: "A" },
        { optionText: "Connectivity", optionTag: "B" },
        { optionText: "Directed edges", optionTag: "D" },
        { optionText: "Vertex count", optionTag: "C" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Topological sort can help in which type of graph problem?",
      options: [
        { optionText: "Cycle detection", optionTag: "C" },
        { optionText: "Dependency resolution", optionTag: "A" },
        { optionText: "Minimum cost path", optionTag: "B" },
        { optionText: "Edge coloring", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which sorting method does topological sort most resemble?",
      options: [
        { optionText: "Heap sort", optionTag: "D" },
        { optionText: "Selection sort", optionTag: "C" },
        { optionText: "Partial ordering", optionTag: "B" },
        { optionText: "Bubble sort", optionTag: "A" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which field heavily uses topological sorting?",
      options: [
        { optionText: "Game development", optionTag: "C" },
        { optionText: "Compiler design", optionTag: "D" },
        { optionText: "Cryptography", optionTag: "B" },
        { optionText: "Web scraping", optionTag: "A" },
      ],
      correctOption: "D",
      score: 1,
    },
  ],
};

export default quizData;