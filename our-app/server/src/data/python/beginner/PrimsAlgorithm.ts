import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python - Prim's Algorithm - Beginner Quiz",
  quizLevel: "beginner",
  lang: "python",
  description: "Quiz to assess understanding of Prim's Algorithm basics in Python.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "PrimsAlgorithm",
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the purpose of Prim's Algorithm?",
      options: [
        { optionText: "To find the shortest path between nodes", optionTag: "C" },
        { optionText: "To find the minimum spanning tree", optionTag: "B" },
        { optionText: "To find the maximum flow", optionTag: "D" },
        { optionText: "To detect cycles", optionTag: "A" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which data structure can optimize Prim's Algorithm?",
      options: [
        { optionText: "Stack", optionTag: "A" },
        { optionText: "Binary Heap", optionTag: "D" },
        { optionText: "Queue", optionTag: "C" },
        { optionText: "Deque", optionTag: "B" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "Which of the following is a key characteristic of Prim's Algorithm?",
      options: [
        { optionText: "Selects the lightest edge that connects a visited node to an unvisited node", optionTag: "A" },
        { optionText: "Uses depth-first search", optionTag: "C" },
        { optionText: "Uses recursion for path-finding", optionTag: "B" },
        { optionText: "Only works on directed graphs", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What is the time complexity of Prim's Algorithm using a binary heap?",
      options: [
        { optionText: "O(V^2)", optionTag: "C" },
        { optionText: "O(E log V)", optionTag: "B" },
        { optionText: "O(V + E)", optionTag: "D" },
        { optionText: "O(V log V)", optionTag: "A" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Prim's Algorithm starts from which node?",
      options: [
        { optionText: "Node with maximum degree", optionTag: "D" },
        { optionText: "Any arbitrary node", optionTag: "C" },
        { optionText: "Leaf node", optionTag: "A" },
        { optionText: "Root node only", optionTag: "B" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which of the following statements is true?",
      options: [
        { optionText: "Prim's Algorithm works only for DAGs", optionTag: "C" },
        { optionText: "Prim's Algorithm uses recursion", optionTag: "A" },
        { optionText: "Prim's Algorithm ensures no cycles in MST", optionTag: "D" },
        { optionText: "Prim's Algorithm requires sorted edges", optionTag: "B" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "In Python, which library provides a heap implementation?",
      options: [
        { optionText: "collections", optionTag: "A" },
        { optionText: "heapq", optionTag: "C" },
        { optionText: "numpy", optionTag: "B" },
        { optionText: "math", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "What does MST stand for?",
      options: [
        { optionText: "Minimum Spanning Tree", optionTag: "A" },
        { optionText: "Maximum Spanning Tree", optionTag: "C" },
        { optionText: "Multiple Spanning Trees", optionTag: "B" },
        { optionText: "Matrix Spanning Tree", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "How many edges does a Minimum Spanning Tree have?",
      options: [
        { optionText: "E - 1", optionTag: "B" },
        { optionText: "V - 1", optionTag: "C" },
        { optionText: "V", optionTag: "D" },
        { optionText: "E", optionTag: "A" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "What type of graph does Prim's Algorithm work on?",
      options: [
        { optionText: "Unweighted Graph", optionTag: "A" },
        { optionText: "Directed Acyclic Graph", optionTag: "B" },
        { optionText: "Undirected Weighted Graph", optionTag: "D" },
        { optionText: "Tree", optionTag: "C" },
      ],
      correctOption: "D",
      score: 1,
    },

    // Next 10 Questions
    {
      questionText: "Which algorithm is similar in function to Prim's?",
      options: [
        { optionText: "Dijkstra's", optionTag: "A" },
        { optionText: "Kruskal's", optionTag: "B" },
        { optionText: "Floyd-Warshall", optionTag: "D" },
        { optionText: "DFS", optionTag: "C" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which of the following is a necessary property of MST?",
      options: [
        { optionText: "It must include cycles", optionTag: "A" },
        { optionText: "It must include all vertices", optionTag: "C" },
        { optionText: "It can skip nodes", optionTag: "B" },
        { optionText: "It must be directed", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "What is added to the MST in each iteration of Prim's?",
      options: [
        { optionText: "A new node with highest cost", optionTag: "C" },
        { optionText: "Shortest path edge", optionTag: "A" },
        { optionText: "Lightest edge to unvisited node", optionTag: "D" },
        { optionText: "All edges from a node", optionTag: "B" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "Which traversal is similar to Prim's edge selection strategy?",
      options: [
        { optionText: "Breadth-First Search", optionTag: "C" },
        { optionText: "Dijkstra's Algorithm", optionTag: "A" },
        { optionText: "Depth-First Search", optionTag: "D" },
        { optionText: "Topological Sort", optionTag: "B" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Can Prim's Algorithm be applied to disconnected graphs?",
      options: [
        { optionText: "Yes, always", optionTag: "B" },
        { optionText: "Only with directed edges", optionTag: "D" },
        { optionText: "No, because MST doesn't exist", optionTag: "A" },
        { optionText: "Only with loops", optionTag: "C" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What determines the stopping condition of Prim's Algorithm?",
      options: [
        { optionText: "All edges visited", optionTag: "D" },
        { optionText: "Heap is empty", optionTag: "B" },
        { optionText: "Number of vertices in MST is V", optionTag: "C" },
        { optionText: "All nodes have even degree", optionTag: "A" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which of the following does Prim's Algorithm avoid?",
      options: [
        { optionText: "Edges with highest weights", optionTag: "A" },
        { optionText: "Cycles", optionTag: "B" },
        { optionText: "Self loops", optionTag: "D" },
        { optionText: "Multiple components", optionTag: "C" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What is the role of the visited set in Prim's Algorithm?",
      options: [
        { optionText: "Keeps track of parent nodes", optionTag: "C" },
        { optionText: "Avoids revisiting nodes", optionTag: "A" },
        { optionText: "Sorts all edges", optionTag: "D" },
        { optionText: "Ensures direction", optionTag: "B" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Prim's Algorithm builds the MST using which strategy?",
      options: [
        { optionText: "Top-down", optionTag: "C" },
        { optionText: "Greedy", optionTag: "A" },
        { optionText: "Divide and conquer", optionTag: "B" },
        { optionText: "Brute force", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which edge does Prim's Algorithm prioritize?",
      options: [
        { optionText: "Shortest path edge", optionTag: "C" },
        { optionText: "Heaviest unvisited edge", optionTag: "A" },
        { optionText: "Lightest unvisited edge from visited nodes", optionTag: "B" },
        { optionText: "Random edge", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
  ],
};

export default quizData;