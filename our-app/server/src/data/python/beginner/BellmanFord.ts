import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python - Bellman-Ford Algorithm - Beginner Quiz",
  quizLevel: "beginner",
  lang: "python",
  description: "Quiz to assess foundational understanding of Bellman-Ford Algorithm in Python.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Bellman-Ford Algorithm",
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the Bellman-Ford algorithm primarily used for?",
      options: [
        { optionText: "Finding the minimum spanning tree", optionTag: "C" },
        { optionText: "Topological sorting", optionTag: "D" },
        { optionText: "Shortest path with possible negative weights", optionTag: "A" },
        { optionText: "Cycle detection only", optionTag: "B" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "How many times does the Bellman-Ford algorithm relax all edges?",
      options: [
        { optionText: "E times", optionTag: "C" },
        { optionText: "V - 1 times", optionTag: "B" },
        { optionText: "Once", optionTag: "D" },
        { optionText: "V times", optionTag: "A" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which of the following conditions does Bellman-Ford handle that Dijkstra’s algorithm cannot?",
      options: [
        { optionText: "Graphs with loops", optionTag: "C" },
        { optionText: "Graphs with negative edge weights", optionTag: "D" },
        { optionText: "Graphs with disconnected components", optionTag: "A" },
        { optionText: "Graphs with self-loops", optionTag: "B" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "What is the time complexity of Bellman-Ford algorithm?",
      options: [
        { optionText: "O(E log V)", optionTag: "B" },
        { optionText: "O(V + E)", optionTag: "D" },
        { optionText: "O(VE)", optionTag: "A" },
        { optionText: "O(V^2)", optionTag: "C" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What data structure is commonly used to store the graph in Bellman-Ford?",
      options: [
        { optionText: "Adjacency matrix", optionTag: "D" },
        { optionText: "List of lists", optionTag: "C" },
        { optionText: "List of dictionaries", optionTag: "B" },
        { optionText: "Edge list", optionTag: "A" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What happens if a negative weight cycle is detected in Bellman-Ford?",
      options: [
        { optionText: "An exception is thrown", optionTag: "B" },
        { optionText: "The algorithm enters an infinite loop", optionTag: "D" },
        { optionText: "A warning is raised", optionTag: "A" },
        { optionText: "Algorithm reports negative cycle and terminates", optionTag: "C" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which of the following is a key step in the Bellman-Ford algorithm?",
      options: [
        { optionText: "Edge sorting", optionTag: "C" },
        { optionText: "Relaxing all edges", optionTag: "A" },
        { optionText: "Adding all nodes to a priority queue", optionTag: "D" },
        { optionText: "Counting node visits", optionTag: "B" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What will Bellman-Ford return if no negative weight cycle exists?",
      options: [
        { optionText: "Shortest path tree", optionTag: "B" },
        { optionText: "Disconnected graph", optionTag: "A" },
        { optionText: "MST", optionTag: "C" },
        { optionText: "Cycle list", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which condition is checked after relaxing all edges V-1 times?",
      options: [
        { optionText: "Any node left unvisited", optionTag: "C" },
        { optionText: "Any unreachable vertex", optionTag: "A" },
        { optionText: "If further relaxation improves a path", optionTag: "D" },
        { optionText: "Topological order", optionTag: "B" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "What will the algorithm do if a shorter path is found after V-1 iterations?",
      options: [
        { optionText: "Exit successfully", optionTag: "B" },
        { optionText: "Re-run the algorithm", optionTag: "A" },
        { optionText: "Detect a negative cycle", optionTag: "C" },
        { optionText: "Ignore the shorter path", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    // Next 10
    {
      questionText: "What type of algorithm is Bellman-Ford?",
      options: [
        { optionText: "Greedy", optionTag: "A" },
        { optionText: "Backtracking", optionTag: "D" },
        { optionText: "Divide and conquer", optionTag: "C" },
        { optionText: "Dynamic programming-based", optionTag: "B" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "In Python, which loop is used for edge relaxation in Bellman-Ford?",
      options: [
        { optionText: "for _ in range(V-1)", optionTag: "A" },
        { optionText: "while True", optionTag: "C" },
        { optionText: "if-else", optionTag: "B" },
        { optionText: "do-while", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "If there are V vertices and E edges, how many total edge relaxations are done?",
      options: [
        { optionText: "V + E", optionTag: "C" },
        { optionText: "V * E", optionTag: "D" },
        { optionText: "(V-1) * E", optionTag: "B" },
        { optionText: "E", optionTag: "A" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What type of values does Bellman-Ford maintain for each vertex?",
      options: [
        { optionText: "Color and depth", optionTag: "D" },
        { optionText: "Parent and weight", optionTag: "C" },
        { optionText: "Shortest distance estimate", optionTag: "A" },
        { optionText: "Pre-order index", optionTag: "B" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which of these can Bellman-Ford be used to detect?",
      options: [
        { optionText: "Balanced binary trees", optionTag: "C" },
        { optionText: "Negative weight cycles", optionTag: "B" },
        { optionText: "Cycle count", optionTag: "D" },
        { optionText: "Edge color", optionTag: "A" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What happens if all edges have positive weights in Bellman-Ford?",
      options: [
        { optionText: "Algorithm crashes", optionTag: "C" },
        { optionText: "Algorithm is inefficient", optionTag: "D" },
        { optionText: "Algorithm still works correctly", optionTag: "A" },
        { optionText: "Algorithm ignores edges", optionTag: "B" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which module helps represent graphs easily in Python?",
      options: [
        { optionText: "heapq", optionTag: "B" },
        { optionText: "networkx", optionTag: "D" },
        { optionText: "math", optionTag: "C" },
        { optionText: "collections", optionTag: "A" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "What is the output of Bellman-Ford if a negative cycle exists?",
      options: [
        { optionText: "An exception", optionTag: "B" },
        { optionText: "List of negative cycles", optionTag: "C" },
        { optionText: "Distance estimates become invalid", optionTag: "A" },
        { optionText: "A sorted list", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "How many iterations are done if the graph has 5 vertices?",
      options: [
        { optionText: "5", optionTag: "C" },
        { optionText: "3", optionTag: "B" },
        { optionText: "4", optionTag: "A" },
        { optionText: "6", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which algorithm is typically faster for graphs without negative edges?",
      options: [
        { optionText: "Prim’s Algorithm", optionTag: "D" },
        { optionText: "Floyd-Warshall", optionTag: "C" },
        { optionText: "Dijkstra’s Algorithm", optionTag: "B" },
        { optionText: "Bellman-Ford", optionTag: "A" },
      ],
      correctOption: "B",
      score: 1,
    },
  ],
};

export default quizData;