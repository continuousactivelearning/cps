import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Java Floyd-Warshall Algorithm - Advanced Quiz",
  quizLevel: "advanced",
  lang: "java",
  description: "Evaluate your understanding of the Floyd-Warshall algorithm used for solving all-pairs shortest path problems.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Floyd-Warshall Algorithm"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the time complexity of the Floyd-Warshall algorithm?",
      options: [
        { optionText: "O(VE)", optionTag: "A" },
        { optionText: "O(V^2)", optionTag: "B" },
        { optionText: "O(V^3)", optionTag: "C" },
        { optionText: "O(E log V)", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which data structure is primarily used in Floyd-Warshall algorithm?",
      options: [
        { optionText: "Graph list", optionTag: "A" },
        { optionText: "Heap", optionTag: "C" },
        { optionText: "2D Matrix", optionTag: "D" },
        { optionText: "Adjacency List", optionTag: "B" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What is the main idea of the Floyd-Warshall algorithm?",
      options: [
        { optionText: "Relaxing all edges once", optionTag: "A" },
        { optionText: "Using recursion", optionTag: "D" },
        { optionText: "Checking all intermediate paths", optionTag: "B" },
        { optionText: "Finding MST", optionTag: "C" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which type of graph does Floyd-Warshall work on?",
      options: [
        { optionText: "Only unweighted", optionTag: "A" },
        { optionText: "Graphs without cycles", optionTag: "D" },
        { optionText: "Directed or undirected weighted graph", optionTag: "B" },
        { optionText: "Complete graphs only", optionTag: "C" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "How does Floyd-Warshall handle negative weight cycles?",
      options: [
        { optionText: "Detects and stops", optionTag: "C" },
        { optionText: "Ignores them", optionTag: "D" },
        { optionText: "Calculates incorrect results", optionTag: "A" },
        { optionText: "Detects and removes cycles", optionTag: "B" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Floyd-Warshall Algorithm solves which problem?",
      options: [
        { optionText: "Single source shortest path", optionTag: "C" },
        { optionText: "Minimum spanning tree", optionTag: "A" },
        { optionText: "All pairs shortest path", optionTag: "B" },
        { optionText: "Longest path", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is initialized in the 2D matrix at the beginning?",
      options: [
        { optionText: "Distances to all nodes as ∞", optionTag: "A" },
        { optionText: "Random values", optionTag: "D" },
        { optionText: "Maximum edge weight", optionTag: "B" },
        { optionText: "Shortest path guesses", optionTag: "C" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which nested loops are used in Floyd-Warshall?",
      options: [
        { optionText: "for k, i, j", optionTag: "C" },
        { optionText: "for i, j", optionTag: "D" },
        { optionText: "for j, k", optionTag: "A" },
        { optionText: "for i, k, j", optionTag: "B" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Floyd-Warshall is considered a _____ algorithm.",
      options: [
        { optionText: "Greedy", optionTag: "D" },
        { optionText: "Recursive", optionTag: "A" },
        { optionText: "Dynamic programming", optionTag: "B" },
        { optionText: "Backtracking", optionTag: "C" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "When is the Floyd-Warshall algorithm preferred?",
      options: [
        { optionText: "Sparse graphs", optionTag: "A" },
        { optionText: "Dense graphs", optionTag: "B" },
        { optionText: "Unweighted graphs", optionTag: "C" },
        { optionText: "Acyclic graphs", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What happens if graph has self-loops?",
      options: [
        { optionText: "Ignored by Floyd-Warshall", optionTag: "C" },
        { optionText: "Causes infinite loop", optionTag: "A" },
        { optionText: "Processed as normal", optionTag: "B" },
        { optionText: "Crashes algorithm", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What does the algorithm output?",
      options: [
        { optionText: "Shortest paths from one node", optionTag: "D" },
        { optionText: "Adjacency list", optionTag: "A" },
        { optionText: "Matrix of shortest distances", optionTag: "C" },
        { optionText: "Minimum spanning tree", optionTag: "B" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is the best case complexity of Floyd-Warshall?",
      options: [
        { optionText: "O(V^2)", optionTag: "C" },
        { optionText: "O(E)", optionTag: "D" },
        { optionText: "O(V^3)", optionTag: "A" },
        { optionText: "O(V log V)", optionTag: "B" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "If a node is unreachable, the distance is:",
      options: [
        { optionText: "0", optionTag: "C" },
        { optionText: "-1", optionTag: "A" },
        { optionText: "Infinity", optionTag: "B" },
        { optionText: "1", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which Java data type can represent ∞?",
      options: [
        { optionText: "Integer", optionTag: "D" },
        { optionText: "Long", optionTag: "C" },
        { optionText: "Double.POSITIVE_INFINITY", optionTag: "A" },
        { optionText: "Boolean", optionTag: "B" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How can you check for negative cycles?",
      options: [
        { optionText: "Check diagonals < 0", optionTag: "C" },
        { optionText: "Count edge loops", optionTag: "D" },
        { optionText: "Check if weights increase", optionTag: "B" },
        { optionText: "Run DFS on matrix", optionTag: "A" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is a common limitation of Floyd-Warshall?",
      options: [
        { optionText: "Requires heap", optionTag: "C" },
        { optionText: "Fails for large sparse graphs", optionTag: "B" },
        { optionText: "Slow for weighted graphs", optionTag: "D" },
        { optionText: "Cannot find shortest path", optionTag: "A" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Floyd-Warshall can be used for which type of graph weights?",
      options: [
        { optionText: "Negative and positive", optionTag: "A" },
        { optionText: "Only positive", optionTag: "B" },
        { optionText: "Unweighted only", optionTag: "D" },
        { optionText: "Zero weights only", optionTag: "C" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "If there are V vertices, how many entries in output matrix?",
      options: [
        { optionText: "V", optionTag: "C" },
        { optionText: "V^2", optionTag: "D" },
        { optionText: "2V", optionTag: "A" },
        { optionText: "E", optionTag: "B" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which condition checks for shorter path via k?",
      options: [
        { optionText: "dist[i][j] > dist[i][k] + dist[k][j]", optionTag: "B" },
        { optionText: "dist[i][j] < dist[i][k]", optionTag: "C" },
        { optionText: "dist[i][j] != dist[k][j]", optionTag: "A" },
        { optionText: "dist[i][j] = 0", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    }
  ]
};

export default quizData;