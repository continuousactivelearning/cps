import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python Bellman-Ford Algorithm - Advanced Quiz",
  quizLevel: "advanced",
  lang: "python",
  description: "Evaluate your understanding of the Bellman-Ford algorithm for shortest paths with negative weights.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "BellmanFordAlgorithm",
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the primary use of the Bellman-Ford algorithm?",
      options: [
        { optionText: "Cycle detection", optionTag: "A" },
        { optionText: "Shortest path with negative weights", optionTag: "B" },
        { optionText: "Minimum spanning tree", optionTag: "C" },
        { optionText: "Graph coloring", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "How many times are all edges relaxed in Bellman-Ford algorithm?",
      options: [
        { optionText: "V", optionTag: "A" },
        { optionText: "V-1", optionTag: "B" },
        { optionText: "E", optionTag: "C" },
        { optionText: "E-1", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which of the following is a key advantage of Bellman-Ford over Dijkstra?",
      options: [
        { optionText: "Faster execution", optionTag: "A" },
        { optionText: "Works with negative weights", optionTag: "B" },
        { optionText: "Simpler code", optionTag: "C" },
        { optionText: "Requires no data structures", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What does Bellman-Ford detect in a graph?",
      options: [
        { optionText: "Disconnected components", optionTag: "A" },
        { optionText: "Negative weight cycles", optionTag: "B" },
        { optionText: "Longest path", optionTag: "C" },
        { optionText: "Bridges", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What is the time complexity of Bellman-Ford algorithm?",
      options: [
        { optionText: "O(V^2)", optionTag: "A" },
        { optionText: "O(V + E)", optionTag: "B" },
        { optionText: "O(VE)", optionTag: "C" },
        { optionText: "O(E log V)", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "What data structure is typically used to store graph edges in Bellman-Ford?",
      options: [
        { optionText: "Adjacency matrix", optionTag: "A" },
        { optionText: "Adjacency list", optionTag: "B" },
        { optionText: "Edge list", optionTag: "C" },
        { optionText: "Heap", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "When is a negative cycle reported in Bellman-Ford?",
      options: [
        { optionText: "After V-1 iterations", optionTag: "A" },
        { optionText: "If any edge can still be relaxed after V-1 iterations", optionTag: "B" },
        { optionText: "If the graph is disconnected", optionTag: "C" },
        { optionText: "If the heap is empty", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What does relaxing an edge mean?",
      options: [
        { optionText: "Adding it to the MST", optionTag: "A" },
        { optionText: "Reducing its weight", optionTag: "B" },
        { optionText: "Updating distance if a better path is found", optionTag: "C" },
        { optionText: "Removing it", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which language feature in Python is ideal for representing a graph as an edge list?",
      options: [
        { optionText: "List of dictionaries", optionTag: "A" },
        { optionText: "Tuple list", optionTag: "B" },
        { optionText: "Set of strings", optionTag: "C" },
        { optionText: "Deque", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which of the following types of graphs can Bellman-Ford handle?",
      options: [
        { optionText: "Only positive edge weights", optionTag: "A" },
        { optionText: "Graphs with negative edge weights and cycles", optionTag: "B" },
        { optionText: "Graphs with negative edge weights but no negative cycles", optionTag: "C" },
        { optionText: "Graphs with self-loops only", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Bellman-Ford algorithm is an example of which programming paradigm?",
      options: [
        { optionText: "Greedy", optionTag: "A" },
        { optionText: "Divide and Conquer", optionTag: "B" },
        { optionText: "Dynamic Programming", optionTag: "C" },
        { optionText: "Backtracking", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "What is the base condition of Bellman-Ford?",
      options: [
        { optionText: "Start node has distance 0, others ∞", optionTag: "A" },
        { optionText: "All nodes have distance 0", optionTag: "B" },
        { optionText: "Start and end node have same value", optionTag: "C" },
        { optionText: "Graph must be complete", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What happens if a graph has a negative cycle reachable from the source?",
      options: [
        { optionText: "The algorithm still works", optionTag: "A" },
        { optionText: "The algorithm reports it and stops", optionTag: "B" },
        { optionText: "The output will be an MST", optionTag: "C" },
        { optionText: "The algorithm ignores it", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which application uses Bellman-Ford often?",
      options: [
        { optionText: "Web development", optionTag: "A" },
        { optionText: "Routing protocols like RIP", optionTag: "B" },
        { optionText: "Sorting large datasets", optionTag: "C" },
        { optionText: "Gaming AI", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "How do you represent infinite in Python?",
      options: [
        { optionText: "float(‘inf’)", optionTag: "A" },
        { optionText: "None", optionTag: "B" },
        { optionText: "sys.maxsize", optionTag: "C" },
        { optionText: "int(‘inf’)", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "In Bellman-Ford, which condition confirms shortest paths are found?",
      options: [
        { optionText: "After E iterations", optionTag: "A" },
        { optionText: "After all nodes relaxed", optionTag: "B" },
        { optionText: "No changes in distances in V-1 iteration", optionTag: "C" },
        { optionText: "All edges processed", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which is NOT a feature of Bellman-Ford?",
      options: [
        { optionText: "Handles negative weights", optionTag: "A" },
        { optionText: "Detects negative cycles", optionTag: "B" },
        { optionText: "Faster than Dijkstra", optionTag: "C" },
        { optionText: "Based on relaxation", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "What is used to track distance in Bellman-Ford implementation?",
      options: [
        { optionText: "List", optionTag: "A" },
        { optionText: "Tuple", optionTag: "B" },
        { optionText: "String", optionTag: "C" },
        { optionText: "Matrix", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "If there are V vertices, how many edges may exist in a fully connected directed graph?",
      options: [
        { optionText: "V", optionTag: "A" },
        { optionText: "V^2", optionTag: "B" },
        { optionText: "V-1", optionTag: "C" },
        { optionText: "2V", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which loop structure is used for V-1 iterations in Python Bellman-Ford?",
      options: [
        { optionText: "while", optionTag: "A" },
        { optionText: "for", optionTag: "B" },
        { optionText: "do-while", optionTag: "C" },
        { optionText: "map", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
  ],
};

export default quizData;