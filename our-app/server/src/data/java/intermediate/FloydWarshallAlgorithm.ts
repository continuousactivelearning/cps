import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Java Floyd-Warshall Algorithm - Intermediate Quiz",
  quizLevel: "intermediate",
  lang: "java",
  description: "Test your understanding of the Floyd-Warshall algorithm used for all-pairs shortest path problems.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "FloydWarshallAlgorithm"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the primary goal of the Floyd-Warshall algorithm?",
      options: [
        { optionText: "Finding the shortest paths between all pairs of vertices", optionTag: "B" },
        { optionText: "Finding minimum spanning tree", optionTag: "A" },
        { optionText: "Finding a Hamiltonian path", optionTag: "C" },
        { optionText: "Finding single-source shortest path", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is the time complexity of the Floyd-Warshall algorithm?",
      options: [
        { optionText: "O(V^3)", optionTag: "D" },
        { optionText: "O(VE)", optionTag: "A" },
        { optionText: "O(E log V)", optionTag: "C" },
        { optionText: "O(V^2)", optionTag: "B" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which data structure is used by the Floyd-Warshall algorithm?",
      options: [
        { optionText: "Adjacency matrix", optionTag: "A" },
        { optionText: "Edge list", optionTag: "C" },
        { optionText: "Adjacency list", optionTag: "B" },
        { optionText: "Min heap", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What does the matrix entry dist[i][j] represent after the algorithm completes?",
      options: [
        { optionText: "The shortest distance from node i to node j", optionTag: "C" },
        { optionText: "Whether a path exists between i and j", optionTag: "A" },
        { optionText: "The maximum weight edge between i and j", optionTag: "B" },
        { optionText: "Total number of paths from i to j", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "How many iterations does the outermost loop run?",
      options: [
        { optionText: "V times", optionTag: "B" },
        { optionText: "E times", optionTag: "C" },
        { optionText: "V^2 times", optionTag: "A" },
        { optionText: "Once", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which condition is used to update the shortest distance in the algorithm?",
      options: [
        { optionText: "dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])", optionTag: "D" },
        { optionText: "dist[i][j] = max(dist[i][j], dist[i][k] + dist[k][j])", optionTag: "A" },
        { optionText: "dist[i][j] = dist[i][j] - dist[k][j]", optionTag: "B" },
        { optionText: "dist[i][j] = dist[i][k] * dist[k][j]", optionTag: "C" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What must be initialized to 0 before the algorithm begins?",
      options: [
        { optionText: "dist[i][i] for all i", optionTag: "A" },
        { optionText: "dist[i][j] for all edges", optionTag: "C" },
        { optionText: "dist[0][0] only", optionTag: "D" },
        { optionText: "dist[i][j] for i ≠ j", optionTag: "B" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Floyd-Warshall can detect which condition?",
      options: [
        { optionText: "Negative weight cycles", optionTag: "C" },
        { optionText: "Disconnected components", optionTag: "A" },
        { optionText: "Zero weight edges", optionTag: "B" },
        { optionText: "Self-loops only", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What will be the value of dist[i][j] if there is no path from i to j?",
      options: [
        { optionText: "INFINITY", optionTag: "D" },
        { optionText: "0", optionTag: "A" },
        { optionText: "1", optionTag: "B" },
        { optionText: "-1", optionTag: "C" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What type of algorithm is Floyd-Warshall?",
      options: [
        { optionText: "Dynamic Programming", optionTag: "B" },
        { optionText: "Greedy", optionTag: "A" },
        { optionText: "Backtracking", optionTag: "D" },
        { optionText: "Divide and Conquer", optionTag: "C" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which algorithm is better for sparse graphs?",
      options: [
        { optionText: "Dijkstra's", optionTag: "A" },
        { optionText: "Floyd-Warshall", optionTag: "C" },
        { optionText: "Kruskal's", optionTag: "D" },
        { optionText: "Prim's", optionTag: "B" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which matrix is updated in Floyd-Warshall?",
      options: [
        { optionText: "Distance matrix", optionTag: "C" },
        { optionText: "Adjacency list", optionTag: "A" },
        { optionText: "Weight array", optionTag: "D" },
        { optionText: "Path matrix", optionTag: "B" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "If a negative weight cycle exists, what happens?",
      options: [
        { optionText: "dist[i][i] becomes negative", optionTag: "A" },
        { optionText: "dist[i][i] remains 0", optionTag: "B" },
        { optionText: "dist[i][j] is infinite", optionTag: "D" },
        { optionText: "Loop terminates", optionTag: "C" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "The algorithm checks how many intermediate vertices?",
      options: [
        { optionText: "All vertices", optionTag: "D" },
        { optionText: "Only first and last", optionTag: "A" },
        { optionText: "Only leaf nodes", optionTag: "C" },
        { optionText: "None", optionTag: "B" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What is used to simulate infinity in Java?",
      options: [
        { optionText: "Integer.MAX_VALUE", optionTag: "B" },
        { optionText: "0", optionTag: "A" },
        { optionText: "-1", optionTag: "C" },
        { optionText: "Double.POSITIVE_INFINITY", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "How many nested loops are there in the implementation?",
      options: [
        { optionText: "3", optionTag: "C" },
        { optionText: "2", optionTag: "A" },
        { optionText: "1", optionTag: "B" },
        { optionText: "4", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is the purpose of the 'k' loop?",
      options: [
        { optionText: "Acts as intermediate vertex", optionTag: "A" },
        { optionText: "Initializes distance", optionTag: "B" },
        { optionText: "Stores result", optionTag: "C" },
        { optionText: "Checks termination", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What should be the value of dist[i][i] at the start?",
      options: [
        { optionText: "0", optionTag: "C" },
        { optionText: "1", optionTag: "A" },
        { optionText: "INFINITY", optionTag: "B" },
        { optionText: "-1", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is the result of Floyd-Warshall algorithm?",
      options: [
        { optionText: "All-pairs shortest path distances", optionTag: "B" },
        { optionText: "Minimum spanning tree", optionTag: "A" },
        { optionText: "Topological sort", optionTag: "C" },
        { optionText: "Maximum flow", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    }
  ]
};

export default quizData;