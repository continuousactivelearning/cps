import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python Floyd-Warshall Algorithm - Advanced Quiz",
  quizLevel: "advanced",
  lang: "python",
  description: "Assess your grasp of the Floyd-Warshall algorithm used to find shortest paths between all pairs of nodes.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Floyd-Warshall Algorithm",
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the Floyd-Warshall algorithm used for?",
      options: [
        { optionText: "Shortest path from a source", optionTag: "A" },
        { optionText: "All-pairs shortest path", optionTag: "B" },
        { optionText: "Topological sort", optionTag: "C" },
        { optionText: "Cycle detection", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What is the time complexity of the Floyd-Warshall algorithm?",
      options: [
        { optionText: "O(V+E)", optionTag: "A" },
        { optionText: "O(V^2)", optionTag: "B" },
        { optionText: "O(V^3)", optionTag: "C" },
        { optionText: "O(E log V)", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "What is the primary data structure used in Floyd-Warshall?",
      options: [
        { optionText: "Heap", optionTag: "A" },
        { optionText: "Adjacency list", optionTag: "B" },
        { optionText: "2D Matrix", optionTag: "C" },
        { optionText: "Queue", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "What does a negative value on the diagonal of the final matrix indicate?",
      options: [
        { optionText: "Graph is undirected", optionTag: "A" },
        { optionText: "Disconnected nodes", optionTag: "B" },
        { optionText: "Negative weight cycle", optionTag: "C" },
        { optionText: "Shortest path found", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "What does Floyd-Warshall not require to function properly?",
      options: [
        { optionText: "No negative weights", optionTag: "A" },
        { optionText: "No negative cycles", optionTag: "B" },
        { optionText: "Graph connectivity", optionTag: "C" },
        { optionText: "Directed edges", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which step is repeated V times in Floyd-Warshall?",
      options: [
        { optionText: "Relaxing all edges", optionTag: "A" },
        { optionText: "Using each vertex as an intermediate node", optionTag: "B" },
        { optionText: "Removing nodes", optionTag: "C" },
        { optionText: "Sorting vertices", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Floyd-Warshall can detect:",
      options: [
        { optionText: "Negative edges only", optionTag: "A" },
        { optionText: "Negative cycles", optionTag: "B" },
        { optionText: "Self-loops", optionTag: "C" },
        { optionText: "Minimum spanning tree", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What is the base condition in Floyd-Warshall?",
      options: [
        { optionText: "Direct distances from adjacency list", optionTag: "A" },
        { optionText: "Infinity for all nodes", optionTag: "B" },
        { optionText: "Matrix filled with -1", optionTag: "C" },
        { optionText: "Max distances to all nodes", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which programming paradigm is Floyd-Warshall based on?",
      options: [
        { optionText: "Greedy", optionTag: "A" },
        { optionText: "Backtracking", optionTag: "B" },
        { optionText: "Dynamic Programming", optionTag: "C" },
        { optionText: "Divide and Conquer", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which Python library can be used to implement Floyd-Warshall efficiently?",
      options: [
        { optionText: "pandas", optionTag: "A" },
        { optionText: "collections", optionTag: "B" },
        { optionText: "numpy", optionTag: "C" },
        { optionText: "heapq", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "How is infinity represented in Python for Floyd-Warshall?",
      options: [
        { optionText: "float('inf')", optionTag: "A" },
        { optionText: "None", optionTag: "B" },
        { optionText: "0", optionTag: "C" },
        { optionText: "1e10", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "How many nested loops are used in Floyd-Warshall?",
      options: [
        { optionText: "1", optionTag: "A" },
        { optionText: "2", optionTag: "B" },
        { optionText: "3", optionTag: "C" },
        { optionText: "4", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "What is the space complexity of Floyd-Warshall?",
      options: [
        { optionText: "O(V)", optionTag: "A" },
        { optionText: "O(V^2)", optionTag: "B" },
        { optionText: "O(E)", optionTag: "C" },
        { optionText: "O(E log V)", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which of the following is updated in every iteration?",
      options: [
        { optionText: "Graph edges", optionTag: "A" },
        { optionText: "Distance matrix", optionTag: "B" },
        { optionText: "Heap queue", optionTag: "C" },
        { optionText: "Priority list", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Floyd-Warshall can handle which kind of graph?",
      options: [
        { optionText: "Undirected only", optionTag: "A" },
        { optionText: "Directed only", optionTag: "B" },
        { optionText: "Both directed and undirected", optionTag: "C" },
        { optionText: "Cyclic only", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Can Floyd-Warshall handle graphs with negative edge weights?",
      options: [
        { optionText: "Yes", optionTag: "A" },
        { optionText: "No", optionTag: "B" },
        { optionText: "Only positive weights", optionTag: "C" },
        { optionText: "Only zero weights", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "If a node has no edge to another, what value is used initially?",
      options: [
        { optionText: "0", optionTag: "A" },
        { optionText: "float('inf')", optionTag: "B" },
        { optionText: "-1", optionTag: "C" },
        { optionText: "None", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What does the algorithm check for at the end?",
      options: [
        { optionText: "Minimum spanning tree", optionTag: "A" },
        { optionText: "Connected components", optionTag: "B" },
        { optionText: "Negative cycles", optionTag: "C" },
        { optionText: "Shortest cycles", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which operation updates the matrix in Floyd-Warshall?",
      options: [
        { optionText: "Addition and minimum", optionTag: "A" },
        { optionText: "Multiplication", optionTag: "B" },
        { optionText: "XOR", optionTag: "C" },
        { optionText: "Shift", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What is the role of the intermediate node in the algorithm?",
      options: [
        { optionText: "Breaks recursion", optionTag: "A" },
        { optionText: "Skips invalid paths", optionTag: "B" },
        { optionText: "Tries to improve existing distances", optionTag: "C" },
        { optionText: "Calculates average cost", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
  ],
};

export default quizData;