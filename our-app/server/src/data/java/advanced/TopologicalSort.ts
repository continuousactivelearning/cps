import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Java Topological Sort - Advanced Quiz",
  quizLevel: "advanced",
  lang: "java",
  description: "Assess your understanding of topological sorting in Directed Acyclic Graphs (DAGs) using Java.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Topological Sort"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "Topological sort can be applied only on which type of graph?",
      options: [
        { optionText: "Directed Acyclic Graph (DAG)", optionTag: "B" },
        { optionText: "Undirected Graph", optionTag: "C" },
        { optionText: "Cyclic Graph", optionTag: "D" },
        { optionText: "Tree", optionTag: "A" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which algorithm is commonly used for Topological Sort?",
      options: [
        { optionText: "BFS and DFS", optionTag: "A" },
        { optionText: "Kruskal's Algorithm", optionTag: "C" },
        { optionText: "Dijkstra’s Algorithm", optionTag: "D" },
        { optionText: "Bellman-Ford", optionTag: "B" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which data structure is used in Kahn’s algorithm for Topological Sorting?",
      options: [
        { optionText: "Stack", optionTag: "C" },
        { optionText: "Queue", optionTag: "D" },
        { optionText: "Heap", optionTag: "A" },
        { optionText: "Set", optionTag: "B" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Topological sort gives:",
      options: [
        { optionText: "Shortest Path", optionTag: "C" },
        { optionText: "Minimum Spanning Tree", optionTag: "B" },
        { optionText: "Linear ordering of vertices", optionTag: "A" },
        { optionText: "Cycle Detection", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the time complexity of Topological Sort using DFS?",
      options: [
        { optionText: "O(V + E)", optionTag: "C" },
        { optionText: "O(E log V)", optionTag: "B" },
        { optionText: "O(V^2)", optionTag: "D" },
        { optionText: "O(E)", optionTag: "A" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "If a graph has a cycle, Topological Sort:",
      options: [
        { optionText: "Returns multiple results", optionTag: "D" },
        { optionText: "Returns no result", optionTag: "B" },
        { optionText: "Fails or returns error", optionTag: "A" },
        { optionText: "Returns one of the shortest paths", optionTag: "C" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "In DFS approach of Topological Sort, vertices are added to:",
      options: [
        { optionText: "Queue", optionTag: "B" },
        { optionText: "Stack in post-order", optionTag: "C" },
        { optionText: "Array in pre-order", optionTag: "A" },
        { optionText: "Priority Queue", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which Java class is useful for storing adjacency list?",
      options: [
        { optionText: "HashMap<String, List<String>>", optionTag: "D" },
        { optionText: "ArrayList<Integer>", optionTag: "C" },
        { optionText: "HashSet<Integer>", optionTag: "A" },
        { optionText: "LinkedList<Character>", optionTag: "B" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "How is indegree used in Kahn’s algorithm?",
      options: [
        { optionText: "To count visited vertices", optionTag: "A" },
        { optionText: "To identify source vertices", optionTag: "B" },
        { optionText: "To track distance", optionTag: "D" },
        { optionText: "To maintain cycle count", optionTag: "C" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Topological Sort is useful in:",
      options: [
        { optionText: "Task scheduling", optionTag: "C" },
        { optionText: "Flood fill", optionTag: "A" },
        { optionText: "Cycle detection", optionTag: "D" },
        { optionText: "Sorting numbers", optionTag: "B" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What happens if multiple vertices have indegree 0 in Kahn’s algorithm?",
      options: [
        { optionText: "Cycle occurs", optionTag: "A" },
        { optionText: "Randomly pick one", optionTag: "C" },
        { optionText: "None can be added", optionTag: "D" },
        { optionText: "Remove all simultaneously", optionTag: "B" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which of the following applications uses Topological Sort?",
      options: [
        { optionText: "Compiler dependency resolution", optionTag: "C" },
        { optionText: "Finding MST", optionTag: "D" },
        { optionText: "Graph coloring", optionTag: "A" },
        { optionText: "Matrix multiplication", optionTag: "B" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is the base condition to stop Kahn’s algorithm?",
      options: [
        { optionText: "No unvisited edges", optionTag: "D" },
        { optionText: "Queue becomes empty", optionTag: "B" },
        { optionText: "Cycle count = 0", optionTag: "C" },
        { optionText: "Indegree array becomes null", optionTag: "A" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What happens if Topological Sort is applied to a cyclic graph?",
      options: [
        { optionText: "It gives incorrect result", optionTag: "A" },
        { optionText: "Stack overflows", optionTag: "C" },
        { optionText: "It fails or throws error", optionTag: "D" },
        { optionText: "Returns empty list", optionTag: "B" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which Java method is used to remove elements from a Queue in Kahn’s algorithm?",
      options: [
        { optionText: "remove()", optionTag: "C" },
        { optionText: "pop()", optionTag: "B" },
        { optionText: "delete()", optionTag: "D" },
        { optionText: "clear()", optionTag: "A" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which vertex order is valid topological order for DAG A->B, A->C, B->D?",
      options: [
        { optionText: "C A B D", optionTag: "D" },
        { optionText: "A B C D", optionTag: "A" },
        { optionText: "B A D C", optionTag: "B" },
        { optionText: "D C B A", optionTag: "C" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "DFS-based topological sort inserts node into:",
      options: [
        { optionText: "Queue after all children", optionTag: "A" },
        { optionText: "Stack before children", optionTag: "B" },
        { optionText: "Stack after all children", optionTag: "C" },
        { optionText: "Set immediately", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "How many topological orders can a DAG have?",
      options: [
        { optionText: "Exactly 1", optionTag: "B" },
        { optionText: "None", optionTag: "C" },
        { optionText: "Multiple", optionTag: "A" },
        { optionText: "Infinite", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which graph traversal is essential in Topological Sort?",
      options: [
        { optionText: "DFS and BFS", optionTag: "D" },
        { optionText: "Dijkstra", optionTag: "C" },
        { optionText: "Prim’s", optionTag: "A" },
        { optionText: "Kruskal’s", optionTag: "B" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which Java collection helps maintaining order of insertion during Kahn’s algorithm?",
      options: [
        { optionText: "LinkedList", optionTag: "B" },
        { optionText: "HashSet", optionTag: "A" },
        { optionText: "HashMap", optionTag: "C" },
        { optionText: "PriorityQueue", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    }
  ]
};

export default quizData;