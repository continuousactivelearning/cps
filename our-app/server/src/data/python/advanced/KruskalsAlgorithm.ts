import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python Kruskal's Algorithm - Advanced Quiz",
  quizLevel: "advanced",
  lang: "python",
  description: "Assess your understanding of Kruskal's Algorithm for constructing MSTs.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "KruskalsAlgorithm",
  },
  quizScore: 20,
  questions: [
    {
      questionText: "Kruskal's Algorithm is based on which paradigm?",
      options: [
        { optionText: "Greedy", optionTag: "A" },
        { optionText: "Dynamic Programming", optionTag: "B" },
        { optionText: "Backtracking", optionTag: "C" },
        { optionText: "Divide and Conquer", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which data structure is essential in Kruskal's Algorithm?",
      options: [
        { optionText: "Priority Queue", optionTag: "A" },
        { optionText: "Disjoint Set (Union-Find)", optionTag: "B" },
        { optionText: "Stack", optionTag: "C" },
        { optionText: "Graph Matrix", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "The first step in Kruskal's algorithm is to:",
      options: [
        { optionText: "Create adjacency matrix", optionTag: "A" },
        { optionText: "Sort all edges", optionTag: "B" },
        { optionText: "Pick random edge", optionTag: "C" },
        { optionText: "Traverse graph using DFS", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "How many edges are there in a Minimum Spanning Tree for a graph with V vertices?",
      options: [
        { optionText: "V", optionTag: "A" },
        { optionText: "V+1", optionTag: "B" },
        { optionText: "V-1", optionTag: "C" },
        { optionText: "V/2", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Kruskal's algorithm stops when:",
      options: [
        { optionText: "All edges are included", optionTag: "A" },
        { optionText: "MST has V-1 edges", optionTag: "B" },
        { optionText: "Cycle is formed", optionTag: "C" },
        { optionText: "All nodes are visited", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What is the time complexity of Kruskal's algorithm?",
      options: [
        { optionText: "O(V log V)", optionTag: "A" },
        { optionText: "O(E log E)", optionTag: "B" },
        { optionText: "O(V^2)", optionTag: "C" },
        { optionText: "O(E + V)", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What ensures cycle detection in Kruskal's Algorithm?",
      options: [
        { optionText: "DFS traversal", optionTag: "A" },
        { optionText: "Union operation in DSU", optionTag: "B" },
        { optionText: "Stack check", optionTag: "C" },
        { optionText: "Edge comparison", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which condition is checked before adding an edge in Kruskal's Algorithm?",
      options: [
        { optionText: "Edge connects to leaf", optionTag: "A" },
        { optionText: "Vertices are from different sets", optionTag: "B" },
        { optionText: "Vertex degree < 2", optionTag: "C" },
        { optionText: "Both nodes are visited", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Kruskal's algorithm works well with which type of graph representation?",
      options: [
        { optionText: "Adjacency list", optionTag: "A" },
        { optionText: "Adjacency matrix", optionTag: "B" },
        { optionText: "Edge list", optionTag: "C" },
        { optionText: "Node map", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which Python built-in function is typically used to sort edges in Kruskal's?",
      options: [
        { optionText: "heapq.heapify", optionTag: "A" },
        { optionText: "sorted()", optionTag: "B" },
        { optionText: "min()", optionTag: "C" },
        { optionText: "map()", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What type of graph does Kruskal's algorithm require?",
      options: [
        { optionText: "Undirected and connected", optionTag: "A" },
        { optionText: "Directed and connected", optionTag: "B" },
        { optionText: "Unweighted and undirected", optionTag: "C" },
        { optionText: "Cyclic", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Kruskal's algorithm selects edges based on:",
      options: [
        { optionText: "Vertex value", optionTag: "A" },
        { optionText: "Smallest weight", optionTag: "B" },
        { optionText: "Cycle count", optionTag: "C" },
        { optionText: "Edge type", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "In DSU, the 'find' function is used to:",
      options: [
        { optionText: "Locate edge", optionTag: "A" },
        { optionText: "Identify parent set", optionTag: "B" },
        { optionText: "Count edges", optionTag: "C" },
        { optionText: "Track cycles", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which technique improves DSU performance?",
      options: [
        { optionText: "Breadth-first merging", optionTag: "A" },
        { optionText: "Path compression", optionTag: "B" },
        { optionText: "Heap balancing", optionTag: "C" },
        { optionText: "Level-order traversal", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What's the worst-case time for DSU operations with optimizations?",
      options: [
        { optionText: "O(n)", optionTag: "A" },
        { optionText: "O(log n)", optionTag: "B" },
        { optionText: "O(α(n))", optionTag: "C" },
        { optionText: "O(n log n)", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which edge is considered next in Kruskal's?",
      options: [
        { optionText: "Highest weight edge", optionTag: "A" },
        { optionText: "Already included edge", optionTag: "B" },
        { optionText: "Next minimum weight edge not forming a cycle", optionTag: "C" },
        { optionText: "Longest edge in MST", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Kruskal's algorithm always results in:",
      options: [
        { optionText: "Unique MST", optionTag: "A" },
        { optionText: "DFS tree", optionTag: "B" },
        { optionText: "One of possibly many MSTs", optionTag: "C" },
        { optionText: "All possible MSTs", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Kruskal's can be applied to:",
      options: [
        { optionText: "Disconnected graphs", optionTag: "A" },
        { optionText: "Unconnected graphs", optionTag: "B" },
        { optionText: "Weighted DAGs", optionTag: "C" },
        { optionText: "Graphs with loops", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "MST generated by Kruskal's algorithm has:",
      options: [
        { optionText: "No cycles", optionTag: "A" },
        { optionText: "Maximum edges", optionTag: "B" },
        { optionText: "Only even vertices", optionTag: "C" },
        { optionText: "Only odd vertices", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which edge causes rejection in Kruskal's?",
      options: [
        { optionText: "Duplicates", optionTag: "A" },
        { optionText: "Forms a cycle", optionTag: "B" },
        { optionText: "Low weight", optionTag: "C" },
        { optionText: "Too long", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
  ],
};

export default quizData;