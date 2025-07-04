import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python BFS - Intermediate Quiz",
  quizLevel: "intermediate",
  lang: "python",
  description: "Test your understanding of the Breadth-First Search algorithm in Python.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Breadth-First Search (BFS)"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What data structure is commonly used in BFS?",
      options: [
        { optionText: "Queue", optionTag: "A" },
        { optionText: "Stack", optionTag: "B" },
        { optionText: "HashMap", optionTag: "C" },
        { optionText: "Heap", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the time complexity of BFS in terms of vertices V and edges E?",
      options: [
        { optionText: "O(V + E)", optionTag: "A" },
        { optionText: "O(VE)", optionTag: "B" },
        { optionText: "O(V^2)", optionTag: "C" },
        { optionText: "O(E log V)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "BFS can be used to find:",
      options: [
        { optionText: "Shortest path in unweighted graph", optionTag: "A" },
        { optionText: "Shortest path in weighted graph", optionTag: "B" },
        { optionText: "Minimum spanning tree", optionTag: "C" },
        { optionText: "Depth of DFS", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "BFS is a type of:",
      options: [
        { optionText: "Graph traversal algorithm", optionTag: "A" },
        { optionText: "Sorting algorithm", optionTag: "B" },
        { optionText: "Search tree", optionTag: "C" },
        { optionText: "Heap algorithm", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "In BFS, nodes are visited in:",
      options: [
        { optionText: "Level order", optionTag: "A" },
        { optionText: "Depth order", optionTag: "B" },
        { optionText: "Random order", optionTag: "C" },
        { optionText: "Reverse order", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the auxiliary space complexity of BFS?",
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
      questionText: "Which of the following is true for BFS?",
      options: [
        { optionText: "It visits the neighbors before children", optionTag: "A" },
        { optionText: "It uses recursion", optionTag: "B" },
        { optionText: "It uses stack", optionTag: "C" },
        { optionText: "It is not suitable for shortest path", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "BFS can be implemented using which Python module for queue?",
      options: [
        { optionText: "collections", optionTag: "A" },
        { optionText: "heapq", optionTag: "B" },
        { optionText: "threading", optionTag: "C" },
        { optionText: "itertools", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What happens if visited nodes are not tracked in BFS?",
      options: [
        { optionText: "It may enter an infinite loop", optionTag: "A" },
        { optionText: "It stops immediately", optionTag: "B" },
        { optionText: "It visits only source node", optionTag: "C" },
        { optionText: "It behaves like DFS", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following is not a characteristic of BFS?",
      options: [
        { optionText: "Recursive", optionTag: "A" },
        { optionText: "Complete", optionTag: "B" },
        { optionText: "Optimal for unweighted graphs", optionTag: "C" },
        { optionText: "Uses FIFO", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which traversal is useful for finding the shortest path?",
      options: [
        { optionText: "BFS", optionTag: "A" },
        { optionText: "DFS", optionTag: "B" },
        { optionText: "Inorder", optionTag: "C" },
        { optionText: "Preorder", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "BFS requires a _____ to keep track of visited nodes.",
      options: [
        { optionText: "set or boolean list", optionTag: "A" },
        { optionText: "stack", optionTag: "B" },
        { optionText: "tree", optionTag: "C" },
        { optionText: "dictionary", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the output of BFS on a tree?",
      options: [
        { optionText: "Level-order traversal", optionTag: "A" },
        { optionText: "Postorder traversal", optionTag: "B" },
        { optionText: "Inorder traversal", optionTag: "C" },
        { optionText: "Preorder traversal", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which Python data type is best for BFS queue?",
      options: [
        { optionText: "deque", optionTag: "A" },
        { optionText: "list", optionTag: "B" },
        { optionText: "dict", optionTag: "C" },
        { optionText: "set", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which graph type must be considered while applying BFS?",
      options: [
        { optionText: "Directed and undirected", optionTag: "A" },
        { optionText: "Only trees", optionTag: "B" },
        { optionText: "Only cyclic", optionTag: "C" },
        { optionText: "Only unweighted", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How do you represent a graph in Python for BFS?",
      options: [
        { optionText: "Adjacency list", optionTag: "A" },
        { optionText: "Hash table", optionTag: "B" },
        { optionText: "Heap", optionTag: "C" },
        { optionText: "Matrix only", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which traversal uses the idea of expanding the frontier evenly?",
      options: [
        { optionText: "BFS", optionTag: "A" },
        { optionText: "DFS", optionTag: "B" },
        { optionText: "Heap sort", optionTag: "C" },
        { optionText: "Greedy", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "BFS algorithm is optimal in which type of graphs?",
      options: [
        { optionText: "Unweighted graphs", optionTag: "A" },
        { optionText: "Weighted graphs", optionTag: "B" },
        { optionText: "DAG", optionTag: "C" },
        { optionText: "Cyclic graphs", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "If a node has no neighbors, BFS will:",
      options: [
        { optionText: "Skip the node", optionTag: "A" },
        { optionText: "Go to parent", optionTag: "B" },
        { optionText: "Raise an error", optionTag: "C" },
        { optionText: "Backtrack", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which traversal algorithm guarantees shortest path in unweighted graphs?",
      options: [
        { optionText: "BFS", optionTag: "A" },
        { optionText: "DFS", optionTag: "B" },
        { optionText: "Topological Sort", optionTag: "C" },
        { optionText: "Bellman-Ford", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    }
  ]
};

export default quizData;