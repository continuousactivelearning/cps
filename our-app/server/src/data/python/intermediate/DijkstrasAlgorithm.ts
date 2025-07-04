import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python Dijkstra’s Algorithm - Intermediate Quiz",
  quizLevel: "intermediate",
  lang: "python",
  description: "Assess your knowledge of Dijkstra’s shortest path algorithm in Python.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Dijkstra’s Algorithm"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What type of graph is Dijkstra’s algorithm typically applied to?",
      options: [
        { optionText: "Weighted graphs with non-negative weights", optionTag: "A" },
        { optionText: "Unweighted graphs only", optionTag: "B" },
        { optionText: "Graphs with negative weights", optionTag: "C" },
        { optionText: "Undirected acyclic graphs only", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which data structure is commonly used to improve Dijkstra’s algorithm performance?",
      options: [
        { optionText: "Min-heap (priority queue)", optionTag: "A" },
        { optionText: "Stack", optionTag: "B" },
        { optionText: "Hash Table", optionTag: "C" },
        { optionText: "Deque", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the time complexity of Dijkstra’s algorithm using a min-heap?",
      options: [
        { optionText: "O((V + E) log V)", optionTag: "A" },
        { optionText: "O(V^2)", optionTag: "B" },
        { optionText: "O(E)", optionTag: "C" },
        { optionText: "O(VE)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What does Dijkstra’s algorithm find?",
      options: [
        { optionText: "Shortest path from a source to all other vertices", optionTag: "A" },
        { optionText: "Longest path in a graph", optionTag: "B" },
        { optionText: "Minimum spanning tree", optionTag: "C" },
        { optionText: "All possible paths", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "In Python, which module provides a priority queue?",
      options: [
        { optionText: "heapq", optionTag: "A" },
        { optionText: "queue", optionTag: "B" },
        { optionText: "collections", optionTag: "C" },
        { optionText: "functools", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What happens if the graph contains negative weights?",
      options: [
        { optionText: "Dijkstra’s algorithm may produce incorrect results", optionTag: "A" },
        { optionText: "Algorithm runs faster", optionTag: "B" },
        { optionText: "Algorithm skips negative edges", optionTag: "C" },
        { optionText: "No impact", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which graph traversal technique does Dijkstra’s algorithm resemble?",
      options: [
        { optionText: "BFS with priority queue", optionTag: "A" },
        { optionText: "DFS", optionTag: "B" },
        { optionText: "Simple BFS", optionTag: "C" },
        { optionText: "Topological Sort", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of these is essential in Dijkstra’s algorithm?",
      options: [
        { optionText: "Distance array", optionTag: "A" },
        { optionText: "Visited queue", optionTag: "B" },
        { optionText: "Stack trace", optionTag: "C" },
        { optionText: "Recursion stack", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What does a distance array store?",
      options: [
        { optionText: "Shortest distance from source to each node", optionTag: "A" },
        { optionText: "Longest path to each node", optionTag: "B" },
        { optionText: "Edges only", optionTag: "C" },
        { optionText: "Visited status only", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following languages is commonly used for teaching Dijkstra’s algorithm?",
      options: [
        { optionText: "Python", optionTag: "A" },
        { optionText: "HTML", optionTag: "B" },
        { optionText: "CSS", optionTag: "C" },
        { optionText: "Markdown", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "In the worst case, Dijkstra’s algorithm can visit how many vertices?",
      options: [
        { optionText: "All vertices", optionTag: "A" },
        { optionText: "Only the start vertex", optionTag: "B" },
        { optionText: "Only leaf nodes", optionTag: "C" },
        { optionText: "Half of the graph", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is initialized to infinity in Dijkstra’s algorithm?",
      options: [
        { optionText: "Distance to each node", optionTag: "A" },
        { optionText: "Edge weights", optionTag: "B" },
        { optionText: "Number of neighbors", optionTag: "C" },
        { optionText: "Graph depth", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of these is false about Dijkstra’s?",
      options: [
        { optionText: "It can handle negative weights", optionTag: "A" },
        { optionText: "It finds shortest path", optionTag: "B" },
        { optionText: "Uses priority queue", optionTag: "C" },
        { optionText: "Fails for negative cycles", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Why is a priority queue important for Dijkstra’s?",
      options: [
        { optionText: "To fetch the next closest node efficiently", optionTag: "A" },
        { optionText: "To store all visited nodes", optionTag: "B" },
        { optionText: "To implement DFS", optionTag: "C" },
        { optionText: "To remove edges", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the initial distance to the source node?",
      options: [
        { optionText: "0", optionTag: "A" },
        { optionText: "1", optionTag: "B" },
        { optionText: "Infinity", optionTag: "C" },
        { optionText: "-1", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the distance to all other nodes initially?",
      options: [
        { optionText: "Infinity", optionTag: "A" },
        { optionText: "0", optionTag: "B" },
        { optionText: "1", optionTag: "C" },
        { optionText: "-1", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How do you mark a node as visited in Python implementation?",
      options: [
        { optionText: "Using a visited set", optionTag: "A" },
        { optionText: "Using a heap", optionTag: "B" },
        { optionText: "Changing node color", optionTag: "C" },
        { optionText: "Assigning a random value", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following does Dijkstra’s NOT require?",
      options: [
        { optionText: "Negative edge handling", optionTag: "A" },
        { optionText: "Priority Queue", optionTag: "B" },
        { optionText: "Graph adjacency list", optionTag: "C" },
        { optionText: "Distance array", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What happens if Dijkstra is run on a disconnected graph?",
      options: [
        { optionText: "Unreachable nodes stay at infinity", optionTag: "A" },
        { optionText: "It crashes", optionTag: "B" },
        { optionText: "It stops immediately", optionTag: "C" },
        { optionText: "It loops forever", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which case breaks Dijkstra’s correctness?",
      options: [
        { optionText: "Negative weight edges", optionTag: "A" },
        { optionText: "Positive cycles", optionTag: "B" },
        { optionText: "Sparse graphs", optionTag: "C" },
        { optionText: "Dense graphs", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    }
  ]
};

export default quizData;