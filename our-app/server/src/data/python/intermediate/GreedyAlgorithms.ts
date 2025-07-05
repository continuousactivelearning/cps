import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python Greedy Algorithms - Intermediate Quiz",
  quizLevel: "intermediate",
  lang: "python",
  description: "Assess your understanding of Greedy Algorithms and their implementation in Python.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "GreedyAlgorithms"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the main strategy used in Greedy Algorithms?",
      options: [
        { optionText: "Choosing the local optimum at each step", optionTag: "A" },
        { optionText: "Divide the problem into subproblems", optionTag: "B" },
        { optionText: "Backtracking from failures", optionTag: "C" },
        { optionText: "Storing results for reuse", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following problems is solved using Greedy Algorithm?",
      options: [
        { optionText: "Huffman Coding", optionTag: "A" },
        { optionText: "Matrix Chain Multiplication", optionTag: "B" },
        { optionText: "Longest Common Subsequence", optionTag: "C" },
        { optionText: "Knapsack (0/1)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the time complexity of the activity selection problem using greedy approach?",
      options: [
        { optionText: "O(n log n)", optionTag: "A" },
        { optionText: "O(n^2)", optionTag: "B" },
        { optionText: "O(n)", optionTag: "C" },
        { optionText: "O(log n)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which greedy algorithm is used to construct a minimum spanning tree?",
      options: [
        { optionText: "Prim's Algorithm", optionTag: "A" },
        { optionText: "Bellman-Ford", optionTag: "B" },
        { optionText: "Floyd-Warshall", optionTag: "C" },
        { optionText: "Binary Search", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Greedy algorithms make decisions based on:",
      options: [
        { optionText: "Current best choice", optionTag: "A" },
        { optionText: "Global analysis", optionTag: "B" },
        { optionText: "All possible paths", optionTag: "C" },
        { optionText: "Backtracking", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which data structure is often used in greedy problems?",
      options: [
        { optionText: "Priority Queue", optionTag: "A" },
        { optionText: "Stack", optionTag: "B" },
        { optionText: "Hash Table", optionTag: "C" },
        { optionText: "Deque", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "In fractional knapsack, what is the greedy strategy?",
      options: [
        { optionText: "Take items with highest value/weight ratio", optionTag: "A" },
        { optionText: "Take smallest item first", optionTag: "B" },
        { optionText: "Take lightest item first", optionTag: "C" },
        { optionText: "Take items in given order", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which condition must a problem satisfy for greedy to work optimally?",
      options: [
        { optionText: "Greedy-choice property", optionTag: "A" },
        { optionText: "Overlapping subproblems", optionTag: "B" },
        { optionText: "No local optimum", optionTag: "C" },
        { optionText: "Dynamic states", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which is NOT a characteristic of greedy algorithms?",
      options: [
        { optionText: "Backtracking from wrong choices", optionTag: "A" },
        { optionText: "Greedy-choice property", optionTag: "B" },
        { optionText: "Optimal substructure", optionTag: "C" },
        { optionText: "Efficient for specific problems", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Greedy algorithms are generally:",
      options: [
        { optionText: "Faster than dynamic programming", optionTag: "A" },
        { optionText: "Slower than brute-force", optionTag: "B" },
        { optionText: "As slow as recursion", optionTag: "C" },
        { optionText: "Space-consuming", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following is a greedy approach to finding an MST?",
      options: [
        { optionText: "Kruskal's Algorithm", optionTag: "A" },
        { optionText: "Floyd-Warshall", optionTag: "B" },
        { optionText: "Bellman-Ford", optionTag: "C" },
        { optionText: "Dijkstra", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which greedy algorithm uses edge weights to choose edges?",
      options: [
        { optionText: "Kruskal’s Algorithm", optionTag: "A" },
        { optionText: "DFS", optionTag: "B" },
        { optionText: "BFS", optionTag: "C" },
        { optionText: "Prim's without weights", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What does greedy-choice property imply?",
      options: [
        { optionText: "Global optimum is built by local choices", optionTag: "A" },
        { optionText: "Backtracking is necessary", optionTag: "B" },
        { optionText: "All paths must be evaluated", optionTag: "C" },
        { optionText: "Optimal solution only at end", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which problem is not always solved optimally by greedy?",
      options: [
        { optionText: "0/1 Knapsack", optionTag: "A" },
        { optionText: "Fractional Knapsack", optionTag: "B" },
        { optionText: "Huffman Coding", optionTag: "C" },
        { optionText: "Activity Selection", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which principle does Huffman Coding use?",
      options: [
        { optionText: "Greedy", optionTag: "A" },
        { optionText: "Divide and Conquer", optionTag: "B" },
        { optionText: "Backtracking", optionTag: "C" },
        { optionText: "Dynamic Programming", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following is true for greedy algorithms?",
      options: [
        { optionText: "They never reconsider choices", optionTag: "A" },
        { optionText: "They track all solutions", optionTag: "B" },
        { optionText: "They always give correct result", optionTag: "C" },
        { optionText: "They solve NP problems", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Can greedy algorithms use recursion?",
      options: [
        { optionText: "Yes", optionTag: "A" },
        { optionText: "Only with dynamic programming", optionTag: "B" },
        { optionText: "No", optionTag: "C" },
        { optionText: "Only in backtracking", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which problem is a good example of greedy technique?",
      options: [
        { optionText: "Activity Selection", optionTag: "A" },
        { optionText: "0/1 Knapsack", optionTag: "B" },
        { optionText: "Travelling Salesman", optionTag: "C" },
        { optionText: "Subset Sum", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Greedy algorithms guarantee optimal solution when problem has:",
      options: [
        { optionText: "Greedy-choice property and optimal substructure", optionTag: "A" },
        { optionText: "Overlapping subproblems", optionTag: "B" },
        { optionText: "Global dependency", optionTag: "C" },
        { optionText: "Multiple recursive paths", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which algorithm is NOT based on greedy strategy?",
      options: [
        { optionText: "Matrix Chain Multiplication", optionTag: "A" },
        { optionText: "Prim’s Algorithm", optionTag: "B" },
        { optionText: "Kruskal’s Algorithm", optionTag: "C" },
        { optionText: "Huffman Encoding", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    }
  ]
};

export default quizData;
