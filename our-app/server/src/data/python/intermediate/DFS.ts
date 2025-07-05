import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python DFS - Intermediate Quiz",
  quizLevel: "intermediate",
  lang: "python",
  description: "Test your understanding of Depth-First Search algorithm in Python.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Depth-First Search (DFS)"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "Which data structure is commonly used to implement DFS?",
      options: [
        { optionText: "Stack", optionTag: "A" },
        { optionText: "Queue", optionTag: "B" },
        { optionText: "Heap", optionTag: "C" },
        { optionText: "Set", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the worst-case time complexity of DFS?",
      options: [
        { optionText: "O(V + E)", optionTag: "A" },
        { optionText: "O(VE)", optionTag: "B" },
        { optionText: "O(E log V)", optionTag: "C" },
        { optionText: "O(V^2)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "DFS explores as far as possible along each:",
      options: [
        { optionText: "Branch", optionTag: "A" },
        { optionText: "Level", optionTag: "B" },
        { optionText: "Path", optionTag: "C" },
        { optionText: "Node", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which traversal method uses recursion by default?",
      options: [
        { optionText: "DFS", optionTag: "A" },
        { optionText: "BFS", optionTag: "B" },
        { optionText: "Greedy", optionTag: "C" },
        { optionText: "Dijkstra", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "DFS is not suitable for:",
      options: [
        { optionText: "Finding shortest paths in unweighted graphs", optionTag: "A" },
        { optionText: "Cycle detection", optionTag: "B" },
        { optionText: "Topological sort", optionTag: "C" },
        { optionText: "Connected components", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What happens if visited nodes are not marked in DFS?",
      options: [
        { optionText: "It may go into infinite recursion", optionTag: "A" },
        { optionText: "It ends prematurely", optionTag: "B" },
        { optionText: "It becomes BFS", optionTag: "C" },
        { optionText: "It skips unvisited nodes", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which Python structure can help implement a stack?",
      options: [
        { optionText: "list", optionTag: "A" },
        { optionText: "dict", optionTag: "B" },
        { optionText: "set", optionTag: "C" },
        { optionText: "tuple", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "DFS can be used in which application?",
      options: [
        { optionText: "Solving mazes", optionTag: "A" },
        { optionText: "Shortest path in unweighted graph", optionTag: "B" },
        { optionText: "Minimum spanning tree", optionTag: "C" },
        { optionText: "Priority queue", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "In DFS, which node is explored next?",
      options: [
        { optionText: "The most recently discovered", optionTag: "A" },
        { optionText: "The least recently discovered", optionTag: "B" },
        { optionText: "The nearest", optionTag: "C" },
        { optionText: "The farthest", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the typical auxiliary space complexity of DFS?",
      options: [
        { optionText: "O(V)", optionTag: "A" },
        { optionText: "O(1)", optionTag: "B" },
        { optionText: "O(log V)", optionTag: "C" },
        { optionText: "O(V^2)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How does DFS behave in an unconnected graph?",
      options: [
        { optionText: "It visits only the connected component", optionTag: "A" },
        { optionText: "It visits all components", optionTag: "B" },
        { optionText: "It fails to run", optionTag: "C" },
        { optionText: "It loops forever", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "In DFS traversal of a tree, which traversal matches?",
      options: [
        { optionText: "Preorder", optionTag: "A" },
        { optionText: "Level order", optionTag: "B" },
        { optionText: "Postorder only", optionTag: "C" },
        { optionText: "Inorder only", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "DFS is useful in solving:",
      options: [
        { optionText: "Backtracking problems", optionTag: "A" },
        { optionText: "Pathfinding in unweighted graphs", optionTag: "B" },
        { optionText: "Priority scheduling", optionTag: "C" },
        { optionText: "Hash collisions", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which data type is best for marking visited nodes in Python DFS?",
      options: [
        { optionText: "set", optionTag: "A" },
        { optionText: "list", optionTag: "B" },
        { optionText: "tuple", optionTag: "C" },
        { optionText: "int", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "DFS performs well on which structure?",
      options: [
        { optionText: "Tree", optionTag: "A" },
        { optionText: "Priority Queue", optionTag: "B" },
        { optionText: "Min Heap", optionTag: "C" },
        { optionText: "Matrix", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What must be tracked in DFS to avoid revisiting nodes?",
      options: [
        { optionText: "Visited set", optionTag: "A" },
        { optionText: "Depth", optionTag: "B" },
        { optionText: "Distance", optionTag: "C" },
        { optionText: "Parent", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "DFS starts from which type of node?",
      options: [
        { optionText: "Source node", optionTag: "A" },
        { optionText: "Leaf node", optionTag: "B" },
        { optionText: "Farthest node", optionTag: "C" },
        { optionText: "End node", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which graph traversal visits depth before breadth?",
      options: [
        { optionText: "DFS", optionTag: "A" },
        { optionText: "BFS", optionTag: "B" },
        { optionText: "Dijkstra", optionTag: "C" },
        { optionText: "Kruskal", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "In a graph cycle detection, which traversal is helpful?",
      options: [
        { optionText: "DFS", optionTag: "A" },
        { optionText: "BFS", optionTag: "B" },
        { optionText: "Prim", optionTag: "C" },
        { optionText: "Topological", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "DFS can be used in which tree algorithm?",
      options: [
        { optionText: "Topological sort", optionTag: "A" },
        { optionText: "Heapify", optionTag: "B" },
        { optionText: "BST search", optionTag: "C" },
        { optionText: "Level-order print", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    }
  ]
};

export default quizData;