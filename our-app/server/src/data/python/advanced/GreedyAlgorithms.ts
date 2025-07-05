import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python Greedy Algorithms - Advanced Quiz",
  quizLevel: "advanced",
  lang: "python",
  description: "Test your mastery of Greedy algorithm techniques in Python.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Greedy Algorithms",
  },
  quizScore: 20,
  questions: [
    {
      questionText: "Which of the following problems can be solved using greedy algorithms?",
      options: [
        { optionText: "Fractional Knapsack Problem", optionTag: "A" },
        { optionText: "Longest Increasing Subsequence", optionTag: "B" },
        { optionText: "Matrix Multiplication", optionTag: "C" },
        { optionText: "Dijkstra's Algorithm with negative weights", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Why does greedy work for the fractional knapsack problem?",
      options: [
        { optionText: "Because of integer constraints", optionTag: "A" },
        { optionText: "Because we can take fractions of items", optionTag: "B" },
        { optionText: "Because it uses dynamic programming", optionTag: "C" },
        { optionText: "Because items are equal in value", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What’s the time complexity of the greedy algorithm for Activity Selection?",
      options: [
        { optionText: "O(n log n)", optionTag: "A" },
        { optionText: "O(n^2)", optionTag: "B" },
        { optionText: "O(n)", optionTag: "C" },
        { optionText: "O(log n)", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which greedy approach does Huffman Coding use?",
      options: [
        { optionText: "Select the longest code first", optionTag: "A" },
        { optionText: "Use frequency of characters", optionTag: "B" },
        { optionText: "Sort characters alphabetically", optionTag: "C" },
        { optionText: "Select random nodes", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What data structure is essential in Huffman Coding?",
      options: [
        { optionText: "Hash Table", optionTag: "A" },
        { optionText: "Stack", optionTag: "B" },
        { optionText: "Min Heap", optionTag: "C" },
        { optionText: "Queue", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which of the following is NOT solved by greedy strategy?",
      options: [
        { optionText: "Prim's Algorithm", optionTag: "A" },
        { optionText: "0/1 Knapsack", optionTag: "B" },
        { optionText: "Kruskal’s Algorithm", optionTag: "C" },
        { optionText: "Huffman Encoding", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which of the following problems does Prim’s Algorithm solve?",
      options: [
        { optionText: "Shortest path", optionTag: "A" },
        { optionText: "Minimum Spanning Tree", optionTag: "B" },
        { optionText: "Topological Sort", optionTag: "C" },
        { optionText: "Traveling Salesman Problem", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What is the greedy choice in Kruskal’s algorithm?",
      options: [
        { optionText: "Choose smallest weight edge that doesn't form a cycle", optionTag: "A" },
        { optionText: "Choose largest weight edge", optionTag: "B" },
        { optionText: "Choose the nearest unvisited node", optionTag: "C" },
        { optionText: "Choose any random edge", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Greedy algorithms are best suited when:",
      options: [
        { optionText: "We need to find optimal substructure", optionTag: "A" },
        { optionText: "Every local optimum is a global optimum", optionTag: "B" },
        { optionText: "We have overlapping subproblems", optionTag: "C" },
        { optionText: "We have cycles", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which problem has a greedy solution but not a DP solution?",
      options: [
        { optionText: "Fractional Knapsack", optionTag: "A" },
        { optionText: "0/1 Knapsack", optionTag: "B" },
        { optionText: "Matrix Chain Multiplication", optionTag: "C" },
        { optionText: "Floyd-Warshall Algorithm", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Greedy algorithms are guaranteed to provide optimal solutions for:",
      options: [
        { optionText: "All optimization problems", optionTag: "A" },
        { optionText: "Only some problems with greedy property", optionTag: "B" },
        { optionText: "NP-complete problems", optionTag: "C" },
        { optionText: "Recursive problems", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which of the following is a greedy algorithm for MST?",
      options: [
        { optionText: "Dijkstra’s", optionTag: "A" },
        { optionText: "Floyd-Warshall", optionTag: "B" },
        { optionText: "Prim’s", optionTag: "C" },
        { optionText: "Bellman-Ford", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "What is the greedy decision in job scheduling with deadlines?",
      options: [
        { optionText: "Schedule the job with latest deadline", optionTag: "A" },
        { optionText: "Schedule the highest profit job first", optionTag: "B" },
        { optionText: "Schedule job randomly", optionTag: "C" },
        { optionText: "Schedule jobs in lexicographic order", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What’s the space complexity of Kruskal’s algorithm using Union-Find?",
      options: [
        { optionText: "O(V + E)", optionTag: "A" },
        { optionText: "O(E log V)", optionTag: "B" },
        { optionText: "O(E)", optionTag: "C" },
        { optionText: "O(V)", optionTag: "D" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "What is the greedy approach in coin change problem?",
      options: [
        { optionText: "Use maximum number of coins", optionTag: "A" },
        { optionText: "Use smallest number of coins using largest denominations", optionTag: "B" },
        { optionText: "Use all denominations equally", optionTag: "C" },
        { optionText: "Use dynamic programming", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which algorithm is NOT greedy?",
      options: [
        { optionText: "Dijkstra", optionTag: "A" },
        { optionText: "Bellman-Ford", optionTag: "B" },
        { optionText: "Kruskal", optionTag: "C" },
        { optionText: "Prim", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Greedy strategy works only if the problem has:",
      options: [
        { optionText: "Greedy-choice property and optimal substructure", optionTag: "A" },
        { optionText: "Dynamic choices", optionTag: "B" },
        { optionText: "Exponential paths", optionTag: "C" },
        { optionText: "Infinite states", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What’s the goal in greedy graph coloring?",
      options: [
        { optionText: "Maximize colors used", optionTag: "A" },
        { optionText: "Minimize colors used", optionTag: "B" },
        { optionText: "Sort nodes", optionTag: "C" },
        { optionText: "Avoid backtracking", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What is the greedy solution to interval partitioning?",
      options: [
        { optionText: "Minimize overlapping intervals", optionTag: "A" },
        { optionText: "Sort by start time", optionTag: "B" },
        { optionText: "Use minimum number of machines", optionTag: "C" },
        { optionText: "Schedule intervals backward", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "What is the goal of greedy strategy in Optimal Merge Pattern?",
      options: [
        { optionText: "Minimize merge steps", optionTag: "A" },
        { optionText: "Minimize total computation cost", optionTag: "B" },
        { optionText: "Maximize array size", optionTag: "C" },
        { optionText: "Use all files simultaneously", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
  ],
};

export default quizData;