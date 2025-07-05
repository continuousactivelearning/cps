import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Java Depth-First Search (DFS) - Advanced Quiz",
  quizLevel: "advanced",
  lang: "java",
  description: "Challenge your understanding of DFS traversal and its advanced applications in Java.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "DFS"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the key data structure used in DFS implementation?",
      options: [
        { optionText: "Stack", optionTag: "A" },
        { optionText: "Queue", optionTag: "B" },
        { optionText: "HashMap", optionTag: "C" },
        { optionText: "Heap", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "In DFS, what happens if we forget to mark nodes as visited?",
      options: [
        { optionText: "We get a segmentation fault", optionTag: "A" },
        { optionText: "Program runs efficiently", optionTag: "B" },
        { optionText: "Infinite loop or stack overflow", optionTag: "C" },
        { optionText: "Traversal completes correctly", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is the time complexity of DFS in a graph with V vertices and E edges?",
      options: [
        { optionText: "O(V + E)", optionTag: "A" },
        { optionText: "O(V × E)", optionTag: "B" },
        { optionText: "O(V²)", optionTag: "C" },
        { optionText: "O(log V)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which traversal method does DFS follow?",
      options: [
        { optionText: "Breadth-first", optionTag: "A" },
        { optionText: "Greedy", optionTag: "B" },
        { optionText: "Depth-first", optionTag: "C" },
        { optionText: "Level-order", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What can be detected using DFS in a directed graph?",
      options: [
        { optionText: "Minimum Spanning Tree", optionTag: "A" },
        { optionText: "Topological Order", optionTag: "B" },
        { optionText: "Shortest Path", optionTag: "C" },
        { optionText: "Strongly Connected Components", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which method in Java recursion is commonly used for DFS?",
      options: [
        { optionText: "Iterative DFS", optionTag: "A" },
        { optionText: "Function Call Stack", optionTag: "B" },
        { optionText: "Multithreading", optionTag: "C" },
        { optionText: "BufferedReader", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "DFS is preferred over BFS in which of the following cases?",
      options: [
        { optionText: "Finding shortest path", optionTag: "A" },
        { optionText: "Finding connected components", optionTag: "B" },
        { optionText: "Level order traversal", optionTag: "C" },
        { optionText: "Finding minimum edge", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which problem is efficiently solved using DFS?",
      options: [
        { optionText: "Cycle Detection", optionTag: "A" },
        { optionText: "Shortest Distance", optionTag: "B" },
        { optionText: "Greedy Scheduling", optionTag: "C" },
        { optionText: "Dijkstra's Path", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which traversal method uses recursion more naturally?",
      options: [
        { optionText: "BFS", optionTag: "A" },
        { optionText: "DFS", optionTag: "B" },
        { optionText: "Prim's", optionTag: "C" },
        { optionText: "Kruskal's", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which of the following graphs would DFS work correctly on?",
      options: [
        { optionText: "Only trees", optionTag: "A" },
        { optionText: "Only directed graphs", optionTag: "B" },
        { optionText: "Any graph structure", optionTag: "C" },
        { optionText: "Only unweighted graphs", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is used to prevent infinite loops in DFS?",
      options: [
        { optionText: "Timer", optionTag: "A" },
        { optionText: "Stack size check", optionTag: "B" },
        { optionText: "Visited set or boolean array", optionTag: "C" },
        { optionText: "Edge limit", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "DFS uses which traversal mechanism?",
      options: [
        { optionText: "Horizontal", optionTag: "A" },
        { optionText: "Depth-first", optionTag: "B" },
        { optionText: "Breadth-wise", optionTag: "C" },
        { optionText: "Level-wise", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is the worst-case space complexity of DFS using recursion?",
      options: [
        { optionText: "O(E)", optionTag: "A" },
        { optionText: "O(V)", optionTag: "B" },
        { optionText: "O(1)", optionTag: "C" },
        { optionText: "O(V+E)", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which condition is sufficient to perform DFS from every vertex?",
      options: [
        { optionText: "Graph is connected", optionTag: "A" },
        { optionText: "Graph is cyclic", optionTag: "B" },
        { optionText: "Graph is weighted", optionTag: "C" },
        { optionText: "Graph is bipartite", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following uses DFS at its core?",
      options: [
        { optionText: "Topological Sorting", optionTag: "A" },
        { optionText: "Dijkstra's Algorithm", optionTag: "B" },
        { optionText: "Prim's Algorithm", optionTag: "C" },
        { optionText: "Bellman-Ford", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "If a graph has n vertices and n edges, how many recursive DFS calls can it make at most?",
      options: [
        { optionText: "n", optionTag: "A" },
        { optionText: "2n", optionTag: "B" },
        { optionText: "n-1", optionTag: "C" },
        { optionText: "Depends on structure", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which traversal is more memory-efficient for shallow graphs?",
      options: [
        { optionText: "DFS", optionTag: "A" },
        { optionText: "BFS", optionTag: "B" },
        { optionText: "In-order", optionTag: "C" },
        { optionText: "Post-order", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the advantage of iterative DFS over recursive DFS?",
      options: [
        { optionText: "Less memory usage", optionTag: "A" },
        { optionText: "Avoids stack overflow", optionTag: "B" },
        { optionText: "Faster", optionTag: "C" },
        { optionText: "No need to mark visited", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which concept is crucial for DFS-based cycle detection?",
      options: [
        { optionText: "Visited and recursion stack", optionTag: "A" },
        { optionText: "Degree of vertex", optionTag: "B" },
        { optionText: "Graph coloring", optionTag: "C" },
        { optionText: "DFS tree depth", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which traversal is likely to explore paths deeply before backtracking?",
      options: [
        { optionText: "DFS", optionTag: "A" },
        { optionText: "BFS", optionTag: "B" },
        { optionText: "Dijkstra", optionTag: "C" },
        { optionText: "Bellman-Ford", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    }
  ]
};

export default quizData;