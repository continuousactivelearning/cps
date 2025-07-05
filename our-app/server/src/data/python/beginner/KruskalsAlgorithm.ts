import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python - Kruskal's Algorithm - Beginner Quiz",
  quizLevel: "beginner",
  lang: "python",
  description: "Quiz to assess understanding of Kruskal's Algorithm basics in Python.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "KruskalsAlgorithm",
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the main purpose of Kruskal's Algorithm?",
      options: [
        { optionText: "To find the maximum flow", optionTag: "C" },
        { optionText: "To detect cycles", optionTag: "A" },
        { optionText: "To find the minimum spanning tree", optionTag: "B" },
        { optionText: "To perform topological sorting", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which data structure is primarily used in Kruskal's Algorithm?",
      options: [
        { optionText: "Queue", optionTag: "A" },
        { optionText: "Stack", optionTag: "C" },
        { optionText: "Disjoint Set Union (DSU)", optionTag: "D" },
        { optionText: "Heap", optionTag: "B" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "How does Kruskal's Algorithm process edges?",
      options: [
        { optionText: "From largest to smallest", optionTag: "B" },
        { optionText: "In random order", optionTag: "D" },
        { optionText: "In sorted order by weight", optionTag: "A" },
        { optionText: "By DFS traversal", optionTag: "C" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What is the time complexity of Kruskal's Algorithm?",
      options: [
        { optionText: "O(V log V)", optionTag: "B" },
        { optionText: "O(E log V)", optionTag: "C" },
        { optionText: "O(E log E)", optionTag: "A" },
        { optionText: "O(V^2)", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What is the first step in Kruskal's Algorithm?",
      options: [
        { optionText: "Traverse the graph", optionTag: "C" },
        { optionText: "Sort all the edges", optionTag: "D" },
        { optionText: "Select a starting node", optionTag: "B" },
        { optionText: "Build an adjacency matrix", optionTag: "A" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "Which type of graph does Kruskal's Algorithm apply to?",
      options: [
        { optionText: "Unweighted graphs", optionTag: "C" },
        { optionText: "Directed graphs only", optionTag: "A" },
        { optionText: "Undirected weighted graphs", optionTag: "B" },
        { optionText: "Disconnected graphs", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "How does Kruskal's Algorithm avoid cycles?",
      options: [
        { optionText: "Using a stack", optionTag: "D" },
        { optionText: "Using visited array", optionTag: "B" },
        { optionText: "Using disjoint sets", optionTag: "C" },
        { optionText: "Using recursion", optionTag: "A" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which Python module helps implement disjoint sets?",
      options: [
        { optionText: "math", optionTag: "C" },
        { optionText: "heapq", optionTag: "A" },
        { optionText: "collections", optionTag: "D" },
        { optionText: "No built-in module; custom class required", optionTag: "B" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What is the stopping condition for Kruskal's Algorithm?",
      options: [
        { optionText: "All nodes have degree 2", optionTag: "A" },
        { optionText: "Number of edges in MST = V - 1", optionTag: "C" },
        { optionText: "When all edges are visited", optionTag: "D" },
        { optionText: "Heap becomes empty", optionTag: "B" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Kruskal's Algorithm is based on which strategy?",
      options: [
        { optionText: "Divide and conquer", optionTag: "C" },
        { optionText: "Greedy", optionTag: "A" },
        { optionText: "Backtracking", optionTag: "D" },
        { optionText: "Dynamic programming", optionTag: "B" },
      ],
      correctOption: "A",
      score: 1,
    },

    // Next 10 questions
    {
      questionText: "What does the 'find' operation in DSU do?",
      options: [
        { optionText: "Finds shortest edge", optionTag: "C" },
        { optionText: "Finds root representative of a node", optionTag: "A" },
        { optionText: "Finds the node with minimum degree", optionTag: "B" },
        { optionText: "Finds MST weight", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What does the 'union' operation do in DSU?",
      options: [
        { optionText: "Removes an edge", optionTag: "C" },
        { optionText: "Merges two disjoint sets", optionTag: "D" },
        { optionText: "Updates the graph weight", optionTag: "B" },
        { optionText: "Checks for cycles", optionTag: "A" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "Kruskal's Algorithm guarantees what kind of MST?",
      options: [
        { optionText: "A unique MST", optionTag: "C" },
        { optionText: "The lightest possible MST", optionTag: "B" },
        { optionText: "A maximal spanning tree", optionTag: "D" },
        { optionText: "A random spanning tree", optionTag: "A" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which edge is considered next during the loop in Kruskal's?",
      options: [
        { optionText: "The next smallest weight edge", optionTag: "C" },
        { optionText: "The next largest degree edge", optionTag: "D" },
        { optionText: "Any edge from a visited node", optionTag: "B" },
        { optionText: "The heaviest edge", optionTag: "A" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "How is a graph typically represented for Kruskal's Algorithm?",
      options: [
        { optionText: "Adjacency matrix", optionTag: "D" },
        { optionText: "List of edges", optionTag: "A" },
        { optionText: "Adjacency list", optionTag: "B" },
        { optionText: "DFS tree", optionTag: "C" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which algorithm is most similar to Kruskal's?",
      options: [
        { optionText: "Bellman-Ford", optionTag: "C" },
        { optionText: "Floyd-Warshall", optionTag: "B" },
        { optionText: "Prim's", optionTag: "D" },
        { optionText: "Dijkstra's", optionTag: "A" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "What happens if we don't use DSU in Kruskal's?",
      options: [
        { optionText: "Algorithm fails to find MST", optionTag: "C" },
        { optionText: "Algorithm becomes faster", optionTag: "A" },
        { optionText: "Cycle detection becomes inefficient", optionTag: "B" },
        { optionText: "Graph gets reversed", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What does path compression do in DSU?",
      options: [
        { optionText: "Increases recursion", optionTag: "D" },
        { optionText: "Flattens the structure of the tree", optionTag: "A" },
        { optionText: "Increases edge weights", optionTag: "C" },
        { optionText: "Slows down find operation", optionTag: "B" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What kind of input does Kruskal's Algorithm need?",
      options: [
        { optionText: "Unsorted list of edges", optionTag: "D" },
        { optionText: "Sorted list of nodes", optionTag: "A" },
        { optionText: "Sorted list of edges by weight", optionTag: "B" },
        { optionText: "List of degrees", optionTag: "C" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Kruskal's Algorithm stops adding edges when:",
      options: [
        { optionText: "The number of edges is V-1", optionTag: "A" },
        { optionText: "All nodes have even degrees", optionTag: "C" },
        { optionText: "All edges are used", optionTag: "D" },
        { optionText: "The graph is complete", optionTag: "B" },
      ],
      correctOption: "A",
      score: 1,
    },
  ],
};

export default quizData;