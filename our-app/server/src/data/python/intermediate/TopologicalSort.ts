import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python Topological Sort - Intermediate Quiz",
  quizLevel: "intermediate",
  lang: "python",
  description: "Assess your knowledge of Topological Sort in Directed Acyclic Graphs (DAGs).",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Topological Sort"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "Topological Sort applies to which type of graph?",
      options: [
        { optionText: "Directed Acyclic Graph", optionTag: "A" },
        { optionText: "Undirected Graph", optionTag: "B" },
        { optionText: "Connected Graph", optionTag: "C" },
        { optionText: "Weighted Graph", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following is used to perform Topological Sort?",
      options: [
        { optionText: "DFS", optionTag: "A" },
        { optionText: "BFS only", optionTag: "B" },
        { optionText: "Prim's Algorithm", optionTag: "C" },
        { optionText: "Kruskal’s Algorithm", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "In Python, which data structure is best for storing the result of a topological sort?",
      options: [
        { optionText: "List", optionTag: "A" },
        { optionText: "Set", optionTag: "B" },
        { optionText: "Dictionary", optionTag: "C" },
        { optionText: "Tuple", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which sorting technique is used to schedule tasks based on dependencies?",
      options: [
        { optionText: "Topological Sort", optionTag: "A" },
        { optionText: "Merge Sort", optionTag: "B" },
        { optionText: "Heap Sort", optionTag: "C" },
        { optionText: "Quick Sort", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What happens if a cycle is detected during Topological Sort?",
      options: [
        { optionText: "Sorting is not possible", optionTag: "A" },
        { optionText: "Cycle is removed automatically", optionTag: "B" },
        { optionText: "Cycle is skipped", optionTag: "C" },
        { optionText: "DFS terminates", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which algorithm can also be used for Topological Sorting?",
      options: [
        { optionText: "Kahn’s Algorithm", optionTag: "A" },
        { optionText: "Dijkstra’s Algorithm", optionTag: "B" },
        { optionText: "Kruskal’s Algorithm", optionTag: "C" },
        { optionText: "Bellman-Ford Algorithm", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "In DFS-based Topological Sort, when is a node added to the result?",
      options: [
        { optionText: "After exploring all its neighbors", optionTag: "A" },
        { optionText: "Before exploring neighbors", optionTag: "B" },
        { optionText: "As soon as visited", optionTag: "C" },
        { optionText: "When it has no incoming edge", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which Python library can help represent graphs for topological sorting?",
      options: [
        { optionText: "networkx", optionTag: "A" },
        { optionText: "math", optionTag: "B" },
        { optionText: "collections", optionTag: "C" },
        { optionText: "itertools", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Kahn’s Algorithm uses which technique to process nodes?",
      options: [
        { optionText: "Queue and in-degree tracking", optionTag: "A" },
        { optionText: "Stack and depth tracking", optionTag: "B" },
        { optionText: "Heap", optionTag: "C" },
        { optionText: "Recursion only", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the time complexity of Topological Sort (DFS-based)?",
      options: [
        { optionText: "O(V + E)", optionTag: "A" },
        { optionText: "O(V^2)", optionTag: "B" },
        { optionText: "O(E log V)", optionTag: "C" },
        { optionText: "O(V log V)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Topological Sort is used in:",
      options: [
        { optionText: "Task Scheduling", optionTag: "A" },
        { optionText: "Shortest Path Algorithms", optionTag: "B" },
        { optionText: "Graph coloring", optionTag: "C" },
        { optionText: "Cycle detection", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following indicates a valid topological order?",
      options: [
        { optionText: "Every directed edge (u → v) implies u appears before v", optionTag: "A" },
        { optionText: "v appears before u", optionTag: "B" },
        { optionText: "Both u and v are visited last", optionTag: "C" },
        { optionText: "v is always the starting node", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How do you detect cycles during Topological Sort using DFS?",
      options: [
        { optionText: "By using a recursion stack", optionTag: "A" },
        { optionText: "Using queue length", optionTag: "B" },
        { optionText: "Tracking leaf nodes", optionTag: "C" },
        { optionText: "By in-degree list", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following statements is false?",
      options: [
        { optionText: "Topological Sort works only on DAGs", optionTag: "A" },
        { optionText: "A DAG may have multiple valid topological orders", optionTag: "B" },
        { optionText: "Topological Sort is not defined for cyclic graphs", optionTag: "C" },
        { optionText: "Topological Sort works for undirected graphs", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "In Kahn’s Algorithm, which node is selected first?",
      options: [
        { optionText: "Node with 0 in-degree", optionTag: "A" },
        { optionText: "Node with maximum degree", optionTag: "B" },
        { optionText: "Random node", optionTag: "C" },
        { optionText: "Node with self-loop", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What does in-degree mean in graphs?",
      options: [
        { optionText: "Number of incoming edges", optionTag: "A" },
        { optionText: "Number of outgoing edges", optionTag: "B" },
        { optionText: "Degree of the node", optionTag: "C" },
        { optionText: "Number of neighbors", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Can Topological Sort be performed on disconnected DAGs?",
      options: [
        { optionText: "Yes", optionTag: "A" },
        { optionText: "No", optionTag: "B" },
        { optionText: "Only if connected", optionTag: "C" },
        { optionText: "Only using DFS", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Topological Sort is used in which compiler process?",
      options: [
        { optionText: "Dependency resolution", optionTag: "A" },
        { optionText: "Code formatting", optionTag: "B" },
        { optionText: "Tokenization", optionTag: "C" },
        { optionText: "Execution plan", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the result if a cycle is found in the graph?",
      options: [
        { optionText: "Topological sort fails", optionTag: "A" },
        { optionText: "Partial sort", optionTag: "B" },
        { optionText: "All edges skipped", optionTag: "C" },
        { optionText: "None of the above", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which Python module can help in queue processing during Kahn’s Algorithm?",
      options: [
        { optionText: "collections.deque", optionTag: "A" },
        { optionText: "sys", optionTag: "B" },
        { optionText: "heapq", optionTag: "C" },
        { optionText: "os", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    }
  ]
};

export default quizData;