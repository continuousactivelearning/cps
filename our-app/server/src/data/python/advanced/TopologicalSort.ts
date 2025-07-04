import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python Topological Sort - Advanced Quiz",
  quizLevel: "advanced",
  lang: "python",
  description: "Evaluate your skills on Topological Sorting in Directed Acyclic Graphs (DAGs).",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Topological Sort",
  },
  quizScore: 20,
  questions: [
    {
      questionText: "Topological Sort applies only to:",
      options: [
        { optionText: "Directed Acyclic Graphs", optionTag: "A" },
        { optionText: "Undirected Graphs", optionTag: "B" },
        { optionText: "Weighted Graphs", optionTag: "C" },
        { optionText: "Cyclic Graphs", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which traversal is commonly used in Topological Sort?",
      options: [
        { optionText: "BFS", optionTag: "A" },
        { optionText: "DFS", optionTag: "B" },
        { optionText: "Inorder", optionTag: "C" },
        { optionText: "Level Order", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "In DFS-based topological sort, when is a node added to the result?",
      options: [
        { optionText: "When it is visited", optionTag: "A" },
        { optionText: "After all its adjacent nodes are processed", optionTag: "B" },
        { optionText: "Before visiting its neighbors", optionTag: "C" },
        { optionText: "During the recursion", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What is the time complexity of Kahn’s Algorithm for Topological Sort?",
      options: [
        { optionText: "O(V)", optionTag: "A" },
        { optionText: "O(E)", optionTag: "B" },
        { optionText: "O(V + E)", optionTag: "C" },
        { optionText: "O(V^2)", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which data structure is used in Kahn’s Algorithm?",
      options: [
        { optionText: "Stack", optionTag: "A" },
        { optionText: "Priority Queue", optionTag: "B" },
        { optionText: "Queue", optionTag: "C" },
        { optionText: "Heap", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which of the following graphs does NOT have a valid topological sort?",
      options: [
        { optionText: "Graph with back edges", optionTag: "A" },
        { optionText: "Graph with no edges", optionTag: "B" },
        { optionText: "Tree", optionTag: "C" },
        { optionText: "Linear DAG", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Topological Sort of a graph is:",
      options: [
        { optionText: "Always unique", optionTag: "A" },
        { optionText: "Can be multiple", optionTag: "B" },
        { optionText: "Not applicable to trees", optionTag: "C" },
        { optionText: "Only for undirected graphs", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which Python library function helps detect cycles in a graph?",
      options: [
        { optionText: "networkx.simple_cycles", optionTag: "A" },
        { optionText: "collections.dfs_cycle", optionTag: "B" },
        { optionText: "itertools.graph_cycle", optionTag: "C" },
        { optionText: "heapq.cycle_detector", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Topological Sort is useful for:",
      options: [
        { optionText: "Shortest path in DAG", optionTag: "A" },
        { optionText: "Cycle detection", optionTag: "B" },
        { optionText: "Finding MST", optionTag: "C" },
        { optionText: "Traversal in undirected graphs", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which condition implies a cycle in Kahn's algorithm?",
      options: [
        { optionText: "Queue is empty before all nodes are visited", optionTag: "A" },
        { optionText: "All nodes are visited", optionTag: "B" },
        { optionText: "Graph has zero edges", optionTag: "C" },
        { optionText: "Out-degree is zero", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "In Kahn’s Algorithm, what does the in-degree represent?",
      options: [
        { optionText: "Number of cycles", optionTag: "A" },
        { optionText: "Number of incoming edges", optionTag: "B" },
        { optionText: "Depth of tree", optionTag: "C" },
        { optionText: "Longest path", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What is pushed into the queue initially in Kahn’s Algorithm?",
      options: [
        { optionText: "All visited nodes", optionTag: "A" },
        { optionText: "Nodes with in-degree 0", optionTag: "B" },
        { optionText: "All leaf nodes", optionTag: "C" },
        { optionText: "All root nodes", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which method ensures a node appears after all its dependencies in topological order?",
      options: [
        { optionText: "In-degree decrement", optionTag: "A" },
        { optionText: "DFS post-order", optionTag: "B" },
        { optionText: "Queue reordering", optionTag: "C" },
        { optionText: "Stack pre-order", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Can topological sort be performed on cyclic graphs?",
      options: [
        { optionText: "Yes, using DFS", optionTag: "A" },
        { optionText: "No, cycles make it impossible", optionTag: "B" },
        { optionText: "Yes, but only with edge weights", optionTag: "C" },
        { optionText: "Yes, using Dijkstra", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "DFS-based topological sort uses which data structure?",
      options: [
        { optionText: "Queue", optionTag: "A" },
        { optionText: "Stack", optionTag: "B" },
        { optionText: "Heap", optionTag: "C" },
        { optionText: "Map", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What happens when a cycle is detected during DFS topological sort?",
      options: [
        { optionText: "Restart sort", optionTag: "A" },
        { optionText: "Return error", optionTag: "B" },
        { optionText: "Skip node", optionTag: "C" },
        { optionText: "Add anyway", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What is the worst-case space complexity of topological sort?",
      options: [
        { optionText: "O(1)", optionTag: "A" },
        { optionText: "O(V)", optionTag: "B" },
        { optionText: "O(V + E)", optionTag: "C" },
        { optionText: "O(log V)", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "In which of the following problems is topological sort used?",
      options: [
        { optionText: "Scheduling tasks with dependencies", optionTag: "A" },
        { optionText: "Finding articulation points", optionTag: "B" },
        { optionText: "Cycle detection in undirected graphs", optionTag: "C" },
        { optionText: "Finding Eulerian paths", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "A graph has a topological sort only if:",
      options: [
        { optionText: "It is strongly connected", optionTag: "A" },
        { optionText: "It is acyclic", optionTag: "B" },
        { optionText: "It is a tree", optionTag: "C" },
        { optionText: "It is undirected", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What is the output size of topological sort for a graph with V vertices?",
      options: [
        { optionText: "V", optionTag: "A" },
        { optionText: "V+1", optionTag: "B" },
        { optionText: "V-1", optionTag: "C" },
        { optionText: "2V", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
  ],
};

export default quizData;