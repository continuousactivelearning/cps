import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python Floyd-Warshall Algorithm - Intermediate Quiz",
  quizLevel: "intermediate",
  lang: "python",
  description: "Test your understanding of the Floyd-Warshall algorithm in Python.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Floyd-Warshall Algorithm"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the purpose of the Floyd-Warshall algorithm?",
      options: [
        { optionText: "Find all-pairs shortest paths", optionTag: "A" },
        { optionText: "Detect negative cycles", optionTag: "B" },
        { optionText: "Find MST", optionTag: "C" },
        { optionText: "Traverse graph in DFS order", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the time complexity of the Floyd-Warshall algorithm?",
      options: [
        { optionText: "O(V^3)", optionTag: "A" },
        { optionText: "O(VE)", optionTag: "B" },
        { optionText: "O(E log V)", optionTag: "C" },
        { optionText: "O(V^2)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which data structure is typically used to implement Floyd-Warshall?",
      options: [
        { optionText: "2D matrix", optionTag: "A" },
        { optionText: "Adjacency list", optionTag: "B" },
        { optionText: "Priority queue", optionTag: "C" },
        { optionText: "Stack", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Floyd-Warshall is best suited for which type of graph?",
      options: [
        { optionText: "Dense graphs", optionTag: "A" },
        { optionText: "Sparse graphs", optionTag: "B" },
        { optionText: "Unweighted graphs", optionTag: "C" },
        { optionText: "Undirected graphs only", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What does the matrix entry `dist[i][j]` represent?",
      options: [
        { optionText: "Shortest distance from i to j", optionTag: "A" },
        { optionText: "Sum of node values", optionTag: "B" },
        { optionText: "Path count from i to j", optionTag: "C" },
        { optionText: "Total number of edges", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How are negative edge weights handled in Floyd-Warshall?",
      options: [
        { optionText: "They are allowed", optionTag: "A" },
        { optionText: "They are removed", optionTag: "B" },
        { optionText: "They cause infinite loops", optionTag: "C" },
        { optionText: "They convert to 0", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What does Floyd-Warshall NOT do?",
      options: [
        { optionText: "Detect negative cycles automatically", optionTag: "A" },
        { optionText: "Compute shortest paths", optionTag: "B" },
        { optionText: "Work on directed graphs", optionTag: "C" },
        { optionText: "Handle weighted graphs", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How do you detect a negative cycle in Floyd-Warshall?",
      options: [
        { optionText: "If dist[i][i] < 0 for any i", optionTag: "A" },
        { optionText: "If all weights are zero", optionTag: "B" },
        { optionText: "If dist[0][V-1] == INF", optionTag: "C" },
        { optionText: "If matrix is diagonal", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which programming construct is heavily used in Floyd-Warshall?",
      options: [
        { optionText: "Triple nested loops", optionTag: "A" },
        { optionText: "Recursion", optionTag: "B" },
        { optionText: "While loop", optionTag: "C" },
        { optionText: "Switch statement", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Initial distance matrix is usually filled with:",
      options: [
        { optionText: "INF for all except 0 on diagonals", optionTag: "A" },
        { optionText: "Zeroes everywhere", optionTag: "B" },
        { optionText: "Ones everywhere", optionTag: "C" },
        { optionText: "Random weights", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the role of intermediate vertex `k` in the algorithm?",
      options: [
        { optionText: "Checks if i → k → j is shorter than i → j", optionTag: "A" },
        { optionText: "Tracks visited nodes", optionTag: "B" },
        { optionText: "Builds adjacency list", optionTag: "C" },
        { optionText: "Swaps graph nodes", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the output if no paths exist between two nodes?",
      options: [
        { optionText: "INF", optionTag: "A" },
        { optionText: "-1", optionTag: "B" },
        { optionText: "0", optionTag: "C" },
        { optionText: "None", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Can Floyd-Warshall be used for negative weight edges?",
      options: [
        { optionText: "Yes, as long as there's no negative cycle", optionTag: "A" },
        { optionText: "No", optionTag: "B" },
        { optionText: "Only in undirected graphs", optionTag: "C" },
        { optionText: "Only if weights are unique", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "In Python, what is typically used to represent infinity?",
      options: [
        { optionText: "float('inf')", optionTag: "A" },
        { optionText: "999999", optionTag: "B" },
        { optionText: "None", optionTag: "C" },
        { optionText: "NaN", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Floyd-Warshall is a ______ algorithm.",
      options: [
        { optionText: "Dynamic Programming", optionTag: "A" },
        { optionText: "Greedy", optionTag: "B" },
        { optionText: "Backtracking", optionTag: "C" },
        { optionText: "Divide and Conquer", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which loop order is correct in the Python implementation?",
      options: [
        { optionText: "for k → for i → for j", optionTag: "A" },
        { optionText: "for i → for j → for k", optionTag: "B" },
        { optionText: "for j → for k → for i", optionTag: "C" },
        { optionText: "for i → for k → for j", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Is Floyd-Warshall suitable for very large graphs?",
      options: [
        { optionText: "No, due to O(V^3) time complexity", optionTag: "A" },
        { optionText: "Yes, it’s linear", optionTag: "B" },
        { optionText: "Yes, with BFS", optionTag: "C" },
        { optionText: "Only if sparse", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What happens when Floyd-Warshall finds a better path?",
      options: [
        { optionText: "It updates the matrix", optionTag: "A" },
        { optionText: "It stores a copy of the graph", optionTag: "B" },
        { optionText: "It terminates", optionTag: "C" },
        { optionText: "It adds an edge", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which is a key advantage of Floyd-Warshall?",
      options: [
        { optionText: "Solves all pairs in one run", optionTag: "A" },
        { optionText: "Faster than DFS", optionTag: "B" },
        { optionText: "Uses no loops", optionTag: "C" },
        { optionText: "Works only with unweighted graphs", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Can Floyd-Warshall be modified to return actual paths?",
      options: [
        { optionText: "Yes, using a path matrix", optionTag: "A" },
        { optionText: "No, only distances are returned", optionTag: "B" },
        { optionText: "Only in Dijkstra's version", optionTag: "C" },
        { optionText: "Yes, by modifying weights", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    }
  ]
};

export default quizData;