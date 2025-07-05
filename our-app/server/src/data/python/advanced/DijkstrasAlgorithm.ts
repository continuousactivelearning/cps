import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python Dijkstra's Algorithm - Advanced Quiz",
  quizLevel: "advanced",
  lang: "python",
  description: "Test your understanding of Dijkstra's algorithm in graph-based problems using Python.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "DijkstrasAlgorithm",
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the main purpose of Dijkstra's Algorithm?",
      options: [
        { optionText: "Find the longest path", optionTag: "A" },
        { optionText: "Find the shortest path from a source to all nodes", optionTag: "B" },
        { optionText: "Detect cycles", optionTag: "C" },
        { optionText: "Check graph connectivity", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What data structure is used to get the node with minimum distance?",
      options: [
        { optionText: "Queue", optionTag: "A" },
        { optionText: "Stack", optionTag: "B" },
        { optionText: "Priority Queue / Min Heap", optionTag: "C" },
        { optionText: "Set", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "What must the weights of edges be for Dijkstra's Algorithm to work correctly?",
      options: [
        { optionText: "All weights must be the same", optionTag: "A" },
        { optionText: "Negative weights are required", optionTag: "B" },
        { optionText: "All weights must be positive", optionTag: "C" },
        { optionText: "There should be no weights", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "What is the time complexity of Dijkstra's algorithm using a priority queue and adjacency list?",
      options: [
        { optionText: "O(V + E)", optionTag: "A" },
        { optionText: "O((V + E) log V)", optionTag: "B" },
        { optionText: "O(V^2)", optionTag: "C" },
        { optionText: "O(E^2)", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "In Python, which module provides a heap implementation?",
      options: [
        { optionText: "heapq", optionTag: "A" },
        { optionText: "queue", optionTag: "B" },
        { optionText: "collections", optionTag: "C" },
        { optionText: "math", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What is initialized to ∞ at the start of Dijkstra's Algorithm?",
      options: [
        { optionText: "Parent array", optionTag: "A" },
        { optionText: "Visited array", optionTag: "B" },
        { optionText: "Distance array", optionTag: "C" },
        { optionText: "Adjacency list", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "When do we update a node's distance in Dijkstra's Algorithm?",
      options: [
        { optionText: "When a cycle is found", optionTag: "A" },
        { optionText: "When the new distance is smaller", optionTag: "B" },
        { optionText: "When node is unvisited", optionTag: "C" },
        { optionText: "Always", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What is the key limitation of Dijkstra's algorithm?",
      options: [
        { optionText: "Cannot be implemented in Python", optionTag: "A" },
        { optionText: "Does not work with undirected graphs", optionTag: "B" },
        { optionText: "Fails with negative edge weights", optionTag: "C" },
        { optionText: "Has exponential time complexity", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "What should be marked once a node is processed in Dijkstra's algorithm?",
      options: [
        { optionText: "Unvisited", optionTag: "A" },
        { optionText: "Visited", optionTag: "B" },
        { optionText: "Unreachable", optionTag: "C" },
        { optionText: "Infinite", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which graph representation is best suited for Dijkstra's algorithm?",
      options: [
        { optionText: "Adjacency matrix", optionTag: "A" },
        { optionText: "Adjacency list", optionTag: "B" },
        { optionText: "Incidence matrix", optionTag: "C" },
        { optionText: "Edge list", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which of the following is NOT a valid step in Dijkstra's Algorithm?",
      options: [
        { optionText: "Pick the node with smallest distance", optionTag: "A" },
        { optionText: "Ignore visited nodes", optionTag: "B" },
        { optionText: "Recompute distances for already visited nodes", optionTag: "C" },
        { optionText: "Update neighbors' distances", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which is the best-case time complexity of Dijkstra's using binary heap?",
      options: [
        { optionText: "O(1)", optionTag: "A" },
        { optionText: "O(V)", optionTag: "B" },
        { optionText: "O(V log V)", optionTag: "C" },
        { optionText: "O(log V)", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Can Dijkstra's algorithm handle negative weights with any modification?",
      options: [
        { optionText: "Yes, using DFS", optionTag: "A" },
        { optionText: "Yes, using Bellman-Ford", optionTag: "B" },
        { optionText: "No, it's impossible", optionTag: "C" },
        { optionText: "Yes, using Union-Find", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What is the output of Dijkstra's Algorithm?",
      options: [
        { optionText: "Cycle list", optionTag: "A" },
        { optionText: "MST", optionTag: "B" },
        { optionText: "Shortest distance to each node from source", optionTag: "C" },
        { optionText: "Topological ordering", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which node is processed first in Dijkstra's algorithm?",
      options: [
        { optionText: "The one with the largest weight", optionTag: "A" },
        { optionText: "Random node", optionTag: "B" },
        { optionText: "The source node", optionTag: "C" },
        { optionText: "Last node in graph", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "What does the algorithm do when reaching a visited node again?",
      options: [
        { optionText: "Revisit it", optionTag: "A" },
        { optionText: "Restart from it", optionTag: "B" },
        { optionText: "Ignore it", optionTag: "C" },
        { optionText: "Update its path", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which is used to implement Dijkstra efficiently?",
      options: [
        { optionText: "Linked list", optionTag: "A" },
        { optionText: "Stack", optionTag: "B" },
        { optionText: "Binary Heap", optionTag: "C" },
        { optionText: "Set", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which algorithm is similar to Dijkstra's but supports negative weights?",
      options: [
        { optionText: "Prim's", optionTag: "A" },
        { optionText: "Bellman-Ford", optionTag: "B" },
        { optionText: "DFS", optionTag: "C" },
        { optionText: "Floyd-Warshall", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Dijkstra's algorithm is primarily used on which kind of graphs?",
      options: [
        { optionText: "Graphs with negative weights", optionTag: "A" },
        { optionText: "Undirected only", optionTag: "B" },
        { optionText: "Positive-weight graphs", optionTag: "C" },
        { optionText: "Disconnected graphs", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Dijkstra's algorithm is most suitable for which scenario?",
      options: [
        { optionText: "Finding longest paths", optionTag: "A" },
        { optionText: "Solving NP problems", optionTag: "B" },
        { optionText: "Shortest paths from source in weighted graphs", optionTag: "C" },
        { optionText: "Detecting cycles", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
  ],
};

export default quizData;