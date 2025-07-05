import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Java Greedy Algorithms - Intermediate Quiz",
  quizLevel: "intermediate",
  lang: "java",
  description: "Test your understanding of Greedy Algorithms in Java.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "GreedyAlgorithms"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the key principle of greedy algorithms?",
      options: [
        { optionText: "Choose the best option at each step", optionTag: "A" },
        { optionText: "Divide and Conquer approach", optionTag: "B" },
        { optionText: "Backtrack on all options", optionTag: "C" },
        { optionText: "Use recursion for subproblems", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following problems is solved using a greedy algorithm?",
      options: [
        { optionText: "0/1 Knapsack", optionTag: "A" },
        { optionText: "Huffman Encoding", optionTag: "B" },
        { optionText: "Longest Common Subsequence", optionTag: "C" },
        { optionText: "Subset Sum", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which sorting algorithm is usually used with activity selection?",
      options: [
        { optionText: "Merge Sort", optionTag: "A" },
        { optionText: "Bubble Sort", optionTag: "B" },
        { optionText: "Quick Sort", optionTag: "C" },
        { optionText: "Any efficient sorting", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What is a greedy choice in coin change problem?",
      options: [
        { optionText: "Choose smallest denomination first", optionTag: "A" },
        { optionText: "Choose largest denomination first", optionTag: "B" },
        { optionText: "Try all possibilities", optionTag: "C" },
        { optionText: "Use recursion to find best", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Greedy algorithms always give:",
      options: [
        { optionText: "Optimal solution", optionTag: "A" },
        { optionText: "Worst-case solution", optionTag: "B" },
        { optionText: "Local optimum", optionTag: "C" },
        { optionText: "Backtracking solution", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which graph algorithm is greedy in nature?",
      options: [
        { optionText: "Kruskal's MST", optionTag: "A" },
        { optionText: "Bellman-Ford", optionTag: "B" },
        { optionText: "Floyd-Warshall", optionTag: "C" },
        { optionText: "DFS", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which problem cannot be solved by a greedy approach?",
      options: [
        { optionText: "Fractional Knapsack", optionTag: "A" },
        { optionText: "Job Sequencing with Deadlines", optionTag: "B" },
        { optionText: "Huffman Encoding", optionTag: "C" },
        { optionText: "0/1 Knapsack", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What is the time complexity of Kruskal's algorithm?",
      options: [
        { optionText: "O(E log V)", optionTag: "A" },
        { optionText: "O(V log V)", optionTag: "B" },
        { optionText: "O(V^2)", optionTag: "C" },
        { optionText: "O(E + V)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "In Huffman coding, what determines character frequency?",
      options: [
        { optionText: "Random assignment", optionTag: "A" },
        { optionText: "Number of vowels", optionTag: "B" },
        { optionText: "Frequency in text", optionTag: "C" },
        { optionText: "String length", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which data structure is essential for Prim's algorithm?",
      options: [
        { optionText: "Queue", optionTag: "A" },
        { optionText: "Stack", optionTag: "B" },
        { optionText: "Priority Queue", optionTag: "C" },
        { optionText: "Array", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which step is crucial in greedy strategies?",
      options: [
        { optionText: "Recursion", optionTag: "A" },
        { optionText: "Sorting", optionTag: "B" },
        { optionText: "Backtracking", optionTag: "C" },
        { optionText: "Exhaustive Search", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Greedy algorithms work best when:",
      options: [
        { optionText: "Global optimum is made from local optimum", optionTag: "A" },
        { optionText: "We have multiple optimal paths", optionTag: "B" },
        { optionText: "Dynamic memory is available", optionTag: "C" },
        { optionText: "Backtracking is required", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the nature of choices made in a greedy algorithm?",
      options: [
        { optionText: "Non-reversible", optionTag: "A" },
        { optionText: "Reversible", optionTag: "B" },
        { optionText: "Deferred", optionTag: "C" },
        { optionText: "Guess-based", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which algorithm is used for job scheduling problems?",
      options: [
        { optionText: "Prim's algorithm", optionTag: "A" },
        { optionText: "Dijkstra's algorithm", optionTag: "B" },
        { optionText: "Job Sequencing with Deadlines", optionTag: "C" },
        { optionText: "Floyd-Warshall", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is the efficiency of the greedy solution in coin change problem?",
      options: [
        { optionText: "Depends on coin denominations", optionTag: "A" },
        { optionText: "Always optimal", optionTag: "B" },
        { optionText: "Inefficient for large values", optionTag: "C" },
        { optionText: "Never optimal", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Greedy algorithms are often easier to implement than:",
      options: [
        { optionText: "Divide and Conquer", optionTag: "A" },
        { optionText: "Dynamic Programming", optionTag: "B" },
        { optionText: "Recursion", optionTag: "C" },
        { optionText: "Linear algorithms", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Greedy algorithms usually require:",
      options: [
        { optionText: "Optimal substructure and greedy choice property", optionTag: "A" },
        { optionText: "Backtracking", optionTag: "B" },
        { optionText: "Memoization", optionTag: "C" },
        { optionText: "Dynamic substructure", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "In fractional knapsack, items can be:",
      options: [
        { optionText: "Taken or left entirely", optionTag: "A" },
        { optionText: "Taken in fractions", optionTag: "B" },
        { optionText: "Only integers allowed", optionTag: "C" },
        { optionText: "Sorted alphabetically", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What determines the choice in greedy algorithms?",
      options: [
        { optionText: "Future outcome", optionTag: "A" },
        { optionText: "Current local optimum", optionTag: "B" },
        { optionText: "Random selection", optionTag: "C" },
        { optionText: "Global prediction", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What kind of problems can greedy algorithms efficiently solve?",
      options: [
        { optionText: "All NP-complete problems", optionTag: "A" },
        { optionText: "Problems with greedy choice and optimal substructure", optionTag: "B" },
        { optionText: "Only linear problems", optionTag: "C" },
        { optionText: "Recursive only", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    }
  ]
};

export default quizData;