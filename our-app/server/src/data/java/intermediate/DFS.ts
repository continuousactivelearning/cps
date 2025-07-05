import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Java Depth-First Search (DFS) - Intermediate Quiz",
  quizLevel: "intermediate",
  lang: "java",
  description: "Test your grasp on Depth-First Search traversal, implementation, and problem-solving in Java.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "DFS"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What data structure is typically used to implement DFS?",
      options: [
        { optionText: "Queue", optionTag: "A" },
        { optionText: "Stack", optionTag: "B" },
        { optionText: "Heap", optionTag: "C" },
        { optionText: "Deque", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is the time complexity of DFS for a graph with V vertices and E edges?",
      options: [
        { optionText: "O(VE)", optionTag: "A" },
        { optionText: "O(V + E)", optionTag: "B" },
        { optionText: "O(V^2)", optionTag: "C" },
        { optionText: "O(E log V)", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which of the following traversal methods uses recursion naturally?",
      options: [
        { optionText: "DFS", optionTag: "A" },
        { optionText: "BFS", optionTag: "B" },
        { optionText: "Dijkstra's", optionTag: "C" },
        { optionText: "Bellman-Ford", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "DFS is best suited for which kind of problem?",
      options: [
        { optionText: "Finding shortest path", optionTag: "A" },
        { optionText: "Cycle detection", optionTag: "B" },
        { optionText: "Minimum spanning tree", optionTag: "C" },
        { optionText: "Finding maximum flow", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "In DFS, what can happen if a visited array is not used?",
      options: [
        { optionText: "Graph will be optimized", optionTag: "A" },
        { optionText: "Program may enter infinite loop", optionTag: "B" },
        { optionText: "Faster traversal", optionTag: "C" },
        { optionText: "Reduced space usage", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which Java collection class is commonly used in DFS stack implementation?",
      options: [
        { optionText: "HashSet", optionTag: "A" },
        { optionText: "ArrayList", optionTag: "B" },
        { optionText: "LinkedList", optionTag: "C" },
        { optionText: "TreeMap", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "In DFS, what is the order of node exploration?",
      options: [
        { optionText: "Level by level", optionTag: "A" },
        { optionText: "Breadth first", optionTag: "B" },
        { optionText: "As deep as possible", optionTag: "C" },
        { optionText: "Sorted order", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which of the following problems is NOT well-suited for DFS?",
      options: [
        { optionText: "Maze solving", optionTag: "A" },
        { optionText: "Cycle detection", optionTag: "B" },
        { optionText: "Finding shortest path in unweighted graph", optionTag: "C" },
        { optionText: "Path existence", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "In a tree, how many times is each node visited during DFS?",
      options: [
        { optionText: "Once", optionTag: "A" },
        { optionText: "Twice", optionTag: "B" },
        { optionText: "V times", optionTag: "C" },
        { optionText: "Depends on height", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "DFS traversal can be used to detect which type of nodes in a graph?",
      options: [
        { optionText: "Terminal nodes", optionTag: "A" },
        { optionText: "Disconnected nodes", optionTag: "B" },
        { optionText: "Articulation points", optionTag: "C" },
        { optionText: "All of the above", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What is the best case time complexity of DFS?",
      options: [
        { optionText: "O(1)", optionTag: "A" },
        { optionText: "O(V + E)", optionTag: "B" },
        { optionText: "O(VE)", optionTag: "C" },
        { optionText: "O(log V)", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "How can DFS be used in solving puzzles like Sudoku?",
      options: [
        { optionText: "By using backtracking", optionTag: "A" },
        { optionText: "Using greedy algorithms", optionTag: "B" },
        { optionText: "Using BFS traversal", optionTag: "C" },
        { optionText: "Using divide and conquer", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which is a drawback of recursive DFS in Java?",
      options: [
        { optionText: "Stack Overflow error for large graphs", optionTag: "A" },
        { optionText: "Inefficient performance", optionTag: "B" },
        { optionText: "Inability to detect cycles", optionTag: "C" },
        { optionText: "Requires dynamic memory allocation", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "DFS can be used to find strongly connected components using which algorithm?",
      options: [
        { optionText: "Kosaraju's", optionTag: "A" },
        { optionText: "Dijkstra's", optionTag: "B" },
        { optionText: "Floyd-Warshall", optionTag: "C" },
        { optionText: "Prim's", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "DFS can be implemented using which approach in Java?",
      options: [
        { optionText: "Recursion", optionTag: "A" },
        { optionText: "Iteration using Stack", optionTag: "B" },
        { optionText: "Both A and B", optionTag: "C" },
        { optionText: "Neither", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which of the following is not visited during DFS in a disconnected graph?",
      options: [
        { optionText: "All vertices", optionTag: "A" },
        { optionText: "Isolated components", optionTag: "B" },
        { optionText: "Visited nodes", optionTag: "C" },
        { optionText: "Unreachable nodes from source", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "How can DFS be adapted for path finding?",
      options: [
        { optionText: "Store parent of each node", optionTag: "A" },
        { optionText: "Use priority queue", optionTag: "B" },
        { optionText: "Track node weights", optionTag: "C" },
        { optionText: "Ignore visited list", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "DFS starts from a ____ node and explores all branches before backtracking.",
      options: [
        { optionText: "Random", optionTag: "A" },
        { optionText: "Selected", optionTag: "B" },
        { optionText: "Root", optionTag: "C" },
        { optionText: "Goal", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which of these helps avoid cycles during DFS traversal?",
      options: [
        { optionText: "Stack", optionTag: "A" },
        { optionText: "Visited array", optionTag: "B" },
        { optionText: "Priority Queue", optionTag: "C" },
        { optionText: "Edge Weights", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "DFS is particularly useful in which graph application?",
      options: [
        { optionText: "Finding cycles", optionTag: "A" },
        { optionText: "Finding shortest path", optionTag: "B" },
        { optionText: "Web Caching", optionTag: "C" },
        { optionText: "Memory Allocation", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    }
  ]
};

export default quizData;