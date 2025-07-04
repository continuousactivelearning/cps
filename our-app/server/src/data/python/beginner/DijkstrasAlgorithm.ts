import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python - Dijkstra’s Algorithm - Beginner Quiz",
  quizLevel: "beginner",
  lang: "python",
  description: "Quiz to assess foundational understanding of Dijkstra’s Algorithm in Python.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Dijkstra’s Algorithm",
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the primary use of Dijkstra’s Algorithm?",
      options: [
        { optionText: "To find the shortest path", optionTag: "C" },
        { optionText: "To search in a sorted array", optionTag: "B" },
        { optionText: "To balance trees", optionTag: "D" },
        { optionText: "To traverse graphs in depth-first", optionTag: "A" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which data structure is typically used in Dijkstra’s Algorithm for optimization?",
      options: [
        { optionText: "Priority Queue (Min Heap)", optionTag: "B" },
        { optionText: "Stack", optionTag: "A" },
        { optionText: "Queue", optionTag: "C" },
        { optionText: "Hash Map", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What must be true about the edge weights in Dijkstra’s Algorithm?",
      options: [
        { optionText: "They must be non-negative", optionTag: "A" },
        { optionText: "They must be integers", optionTag: "C" },
        { optionText: "They must be negative", optionTag: "D" },
        { optionText: "They can be any number", optionTag: "B" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What does Dijkstra’s Algorithm compute?",
      options: [
        { optionText: "All pairs shortest path", optionTag: "B" },
        { optionText: "Shortest path from a single source", optionTag: "D" },
        { optionText: "Longest path in a graph", optionTag: "C" },
        { optionText: "Spanning tree", optionTag: "A" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "What is the time complexity of Dijkstra’s Algorithm using a min heap?",
      options: [
        { optionText: "O(V + E)", optionTag: "D" },
        { optionText: "O(V log V + E)", optionTag: "A" },
        { optionText: "O(E^2)", optionTag: "B" },
        { optionText: "O(VE)", optionTag: "C" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which graph representation works best with Dijkstra’s Algorithm?",
      options: [
        { optionText: "Adjacency list", optionTag: "C" },
        { optionText: "Edge list", optionTag: "A" },
        { optionText: "Adjacency matrix", optionTag: "B" },
        { optionText: "Incidence matrix", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "What happens if Dijkstra’s Algorithm is used with negative weights?",
      options: [
        { optionText: "It may produce incorrect results", optionTag: "B" },
        { optionText: "It runs faster", optionTag: "D" },
        { optionText: "It optimizes better", optionTag: "A" },
        { optionText: "It throws an error", optionTag: "C" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which of the following is NOT true about Dijkstra’s Algorithm?",
      options: [
        { optionText: "It does not handle graphs with negative weight edges", optionTag: "D" },
        { optionText: "It uses a greedy approach", optionTag: "A" },
        { optionText: "It gives correct results for DAGs with negative edges", optionTag: "B" },
        { optionText: "It guarantees the shortest path", optionTag: "C" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which algorithm is better for graphs with negative weights?",
      options: [
        { optionText: "Prim's Algorithm", optionTag: "A" },
        { optionText: "Floyd-Warshall Algorithm", optionTag: "C" },
        { optionText: "Dijkstra’s Algorithm", optionTag: "D" },
        { optionText: "Bellman-Ford Algorithm", optionTag: "B" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "How does Dijkstra choose the next vertex to visit?",
      options: [
        { optionText: "Based on lowest edge cost", optionTag: "A" },
        { optionText: "At random", optionTag: "D" },
        { optionText: "Using depth-first search", optionTag: "C" },
        { optionText: "Based on current shortest distance", optionTag: "B" },
      ],
      correctOption: "B",
      score: 1,
    },
    // Next 10
    {
      questionText: "What is initialized for all vertices except the source in Dijkstra’s Algorithm?",
      options: [
        { optionText: "Distance as infinity", optionTag: "C" },
        { optionText: "Distance as 0", optionTag: "D" },
        { optionText: "Distance as 1", optionTag: "B" },
        { optionText: "Visited flag as true", optionTag: "A" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "What does Dijkstra's algorithm maintain for each node?",
      options: [
        { optionText: "Color", optionTag: "B" },
        { optionText: "Shortest distance from source", optionTag: "A" },
        { optionText: "Predecessor list", optionTag: "D" },
        { optionText: "Traversal order", optionTag: "C" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "In what kind of graph is Dijkstra’s Algorithm guaranteed to work correctly?",
      options: [
        { optionText: "Any weighted graph", optionTag: "C" },
        { optionText: "Graphs with only positive weights", optionTag: "B" },
        { optionText: "Unweighted graphs", optionTag: "A" },
        { optionText: "Graphs with loops", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What is the main idea behind the greedy nature of Dijkstra’s Algorithm?",
      options: [
        { optionText: "Making optimal local choices", optionTag: "C" },
        { optionText: "Trying all possibilities", optionTag: "D" },
        { optionText: "Using dynamic memory", optionTag: "B" },
        { optionText: "Minimizing graph size", optionTag: "A" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "What happens if a better path to a node is found in Dijkstra’s Algorithm?",
      options: [
        { optionText: "We discard the new path", optionTag: "B" },
        { optionText: "We keep the older path", optionTag: "C" },
        { optionText: "We update the node’s distance", optionTag: "D" },
        { optionText: "We remove the node", optionTag: "A" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "Dijkstra’s Algorithm works best for which graph density?",
      options: [
        { optionText: "Sparse graphs", optionTag: "A" },
        { optionText: "Dense graphs", optionTag: "C" },
        { optionText: "Complete graphs", optionTag: "B" },
        { optionText: "Disjoint graphs", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What is a common practical application of Dijkstra’s Algorithm?",
      options: [
        { optionText: "Data sorting", optionTag: "B" },
        { optionText: "Pathfinding in GPS", optionTag: "A" },
        { optionText: "Image processing", optionTag: "C" },
        { optionText: "File compression", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "If the graph is unweighted, which algorithm can be used instead of Dijkstra?",
      options: [
        { optionText: "Prim’s", optionTag: "C" },
        { optionText: "BFS", optionTag: "D" },
        { optionText: "Bellman-Ford", optionTag: "B" },
        { optionText: "DFS", optionTag: "A" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "Which part of the algorithm ensures no node is processed twice?",
      options: [
        { optionText: "Visited set", optionTag: "A" },
        { optionText: "Parent array", optionTag: "C" },
        { optionText: "Distance matrix", optionTag: "B" },
        { optionText: "Recursion", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which language feature makes Dijkstra easy to implement in Python?",
      options: [
        { optionText: "Dynamic typing", optionTag: "D" },
        { optionText: "PriorityQueue module", optionTag: "B" },
        { optionText: "Lambda expressions", optionTag: "A" },
        { optionText: "Tuples", optionTag: "C" },
      ],
      correctOption: "B",
      score: 1,
    },
  ],
};

export default quizData;