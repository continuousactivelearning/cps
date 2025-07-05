import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Java Greedy Algorithms - Advanced Quiz",
  quizLevel: "advanced",
  lang: "java",
  description: "Assess your mastery of Greedy algorithm design techniques in Java.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Greedy Algorithms"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "Which of the following problems is best solved using a Greedy Algorithm?",
      options: [
        { optionText: "Activity Selection Problem", optionTag: "A" },
        { optionText: "Tower of Hanoi", optionTag: "B" },
        { optionText: "0/1 Knapsack", optionTag: "C" },
        { optionText: "Edit Distance", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the key strategy in Greedy algorithms?",
      options: [
        { optionText: "Choose local optimum at each step", optionTag: "B" },
        { optionText: "Divide into subproblems", optionTag: "A" },
        { optionText: "Use dynamic programming memoization", optionTag: "D" },
        { optionText: "Try all combinations", optionTag: "C" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "In which case does the Greedy method fail?",
      options: [
        { optionText: "Fractional Knapsack", optionTag: "C" },
        { optionText: "Prim's Algorithm", optionTag: "B" },
        { optionText: "0/1 Knapsack", optionTag: "A" },
        { optionText: "Kruskal’s Algorithm", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of these algorithms is based on Greedy strategy?",
      options: [
        { optionText: "Floyd-Warshall", optionTag: "B" },
        { optionText: "Bellman-Ford", optionTag: "D" },
        { optionText: "Prim’s Algorithm", optionTag: "C" },
        { optionText: "Dijkstra’s Algorithm", optionTag: "A" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which of the following is not typically solved by a Greedy algorithm?",
      options: [
        { optionText: "Fractional Knapsack", optionTag: "A" },
        { optionText: "Job Scheduling", optionTag: "B" },
        { optionText: "Longest Common Subsequence", optionTag: "C" },
        { optionText: "Minimum Spanning Tree", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is the time complexity of Kruskal’s Algorithm using Union-Find?",
      options: [
        { optionText: "O(E log V)", optionTag: "D" },
        { optionText: "O(V²)", optionTag: "A" },
        { optionText: "O(E)", optionTag: "B" },
        { optionText: "O(V + E)", optionTag: "C" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What is the best greedy strategy in the Activity Selection problem?",
      options: [
        { optionText: "Select shortest duration activity", optionTag: "C" },
        { optionText: "Select activity with earliest finish time", optionTag: "B" },
        { optionText: "Select activity with latest start time", optionTag: "D" },
        { optionText: "Select random activity", optionTag: "A" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Greedy algorithms usually work when the problem has the ________ property.",
      options: [
        { optionText: "Backtracking", optionTag: "A" },
        { optionText: "Overlapping Subproblems", optionTag: "C" },
        { optionText: "Greedy Choice & Optimal Substructure", optionTag: "B" },
        { optionText: "Memoization", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which algorithm is used for Huffman Coding?",
      options: [
        { optionText: "Divide and Conquer", optionTag: "C" },
        { optionText: "Greedy", optionTag: "A" },
        { optionText: "Dynamic Programming", optionTag: "D" },
        { optionText: "Backtracking", optionTag: "B" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "In Huffman coding, what structure is used to build the codes?",
      options: [
        { optionText: "Graph", optionTag: "D" },
        { optionText: "Heap", optionTag: "A" },
        { optionText: "BST", optionTag: "C" },
        { optionText: "Queue", optionTag: "B" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is a greedy approach to coin change problem?",
      options: [
        { optionText: "Use max coin value until zero", optionTag: "C" },
        { optionText: "Backtrack all combinations", optionTag: "B" },
        { optionText: "Sort coins descending, pick greedily", optionTag: "A" },
        { optionText: "Dynamic table approach", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Why does greedy fail in some coin change problems?",
      options: [
        { optionText: "Doesn’t explore all options", optionTag: "C" },
        { optionText: "It’s too slow", optionTag: "B" },
        { optionText: "Incorrect syntax", optionTag: "D" },
        { optionText: "Coins not sorted", optionTag: "A" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which of these is a property of greedy algorithms?",
      options: [
        { optionText: "Always gives global optimum", optionTag: "D" },
        { optionText: "Greedy Choice", optionTag: "A" },
        { optionText: "Backtrack Search", optionTag: "B" },
        { optionText: "Memoized path", optionTag: "C" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which algorithm is not based on Greedy strategy?",
      options: [
        { optionText: "Dijkstra", optionTag: "A" },
        { optionText: "Prim", optionTag: "B" },
        { optionText: "Floyd-Warshall", optionTag: "C" },
        { optionText: "Kruskal", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is the key limitation of Greedy strategy?",
      options: [
        { optionText: "Fails to give global optimum", optionTag: "B" },
        { optionText: "Time complexity", optionTag: "C" },
        { optionText: "Requires too much memory", optionTag: "A" },
        { optionText: "Too many subproblems", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which sorting algorithm uses a greedy strategy?",
      options: [
        { optionText: "Selection Sort", optionTag: "A" },
        { optionText: "Merge Sort", optionTag: "D" },
        { optionText: "Quick Sort", optionTag: "C" },
        { optionText: "Heap Sort", optionTag: "B" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Job sequencing problem is solved using:",
      options: [
        { optionText: "Dynamic Programming", optionTag: "B" },
        { optionText: "Greedy Algorithms", optionTag: "D" },
        { optionText: "Backtracking", optionTag: "C" },
        { optionText: "Brute Force", optionTag: "A" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Greedy strategy does not work for:",
      options: [
        { optionText: "Fractional Knapsack", optionTag: "C" },
        { optionText: "0/1 Knapsack", optionTag: "A" },
        { optionText: "Activity Selection", optionTag: "B" },
        { optionText: "Job Sequencing", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "In coin change problem, which type of currency allows greedy to work?",
      options: [
        { optionText: "Canonical coin system", optionTag: "C" },
        { optionText: "Any random set", optionTag: "D" },
        { optionText: "Only prime values", optionTag: "A" },
        { optionText: "Only even coins", optionTag: "B" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which step confirms if greedy works for a problem?",
      options: [
        { optionText: "Mathematical proof", optionTag: "A" },
        { optionText: "Backtracking result", optionTag: "C" },
        { optionText: "Try sample input", optionTag: "B" },
        { optionText: "No step required", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    }
  ]
};

export default quizData;