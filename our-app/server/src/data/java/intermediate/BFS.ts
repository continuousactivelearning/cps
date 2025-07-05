import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Java Breadth-First Search (BFS) - Intermediate Quiz",
  quizLevel: "intermediate",
  lang: "java",
  description: "Assess your understanding of BFS traversal, implementation, and applications in Java.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Breadth-First Search (BFS)"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What data structure is commonly used to implement BFS?",
      options: [
        { optionText: "Stack", optionTag: "A" },
        { optionText: "Queue", optionTag: "B" },
        { optionText: "Tree", optionTag: "C" },
        { optionText: "Heap", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is the time complexity of BFS for a graph with V vertices and E edges?",
      options: [
        { optionText: "O(V + E)", optionTag: "A" },
        { optionText: "O(VE)", optionTag: "B" },
        { optionText: "O(V^2)", optionTag: "C" },
        { optionText: "O(E^2)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "BFS traversal is most suitable for finding the ____ path in an unweighted graph.",
      options: [
        { optionText: "Longest", optionTag: "A" },
        { optionText: "Shortest", optionTag: "B" },
        { optionText: "Random", optionTag: "C" },
        { optionText: "Cyclic", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which of the following problems can be solved using BFS?",
      options: [
        { optionText: "Cycle Detection in Graph", optionTag: "A" },
        { optionText: "Topological Sort", optionTag: "B" },
        { optionText: "Inorder Traversal", optionTag: "C" },
        { optionText: "Heap Sort", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What happens if a visited[] array is not maintained in BFS?",
      options: [
        { optionText: "Some nodes may be missed", optionTag: "A" },
        { optionText: "BFS won't terminate for cyclic graphs", optionTag: "B" },
        { optionText: "Memory usage is reduced", optionTag: "C" },
        { optionText: "It will work faster", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "In Java, which collection class is ideal for implementing BFS?",
      options: [
        { optionText: "Stack", optionTag: "A" },
        { optionText: "PriorityQueue", optionTag: "B" },
        { optionText: "LinkedList", optionTag: "C" },
        { optionText: "HashSet", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "BFS uses which of the following traversal orders?",
      options: [
        { optionText: "Depth-First", optionTag: "A" },
        { optionText: "Level-Order", optionTag: "B" },
        { optionText: "Preorder", optionTag: "C" },
        { optionText: "Postorder", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which of these algorithms is conceptually similar to BFS?",
      options: [
        { optionText: "Dijkstra’s Algorithm", optionTag: "A" },
        { optionText: "DFS", optionTag: "B" },
        { optionText: "Quicksort", optionTag: "C" },
        { optionText: "Prim’s Algorithm", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "BFS is not suitable when the graph has ____ edges.",
      options: [
        { optionText: "Few", optionTag: "A" },
        { optionText: "Weighted", optionTag: "B" },
        { optionText: "Undirected", optionTag: "C" },
        { optionText: "Multiple", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which of these is true about BFS and DFS?",
      options: [
        { optionText: "Both use recursion", optionTag: "A" },
        { optionText: "BFS uses more memory", optionTag: "B" },
        { optionText: "DFS guarantees shortest path", optionTag: "C" },
        { optionText: "BFS never uses a queue", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is a common application of BFS in AI?",
      options: [
        { optionText: "Game Tree Evaluation", optionTag: "A" },
        { optionText: "Web Crawling", optionTag: "B" },
        { optionText: "Cryptography", optionTag: "C" },
        { optionText: "String Matching", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which of the following best describes BFS traversal pattern?",
      options: [
        { optionText: "Greedy", optionTag: "A" },
        { optionText: "Exponential", optionTag: "B" },
        { optionText: "Layer by Layer", optionTag: "C" },
        { optionText: "Logarithmic", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which Java class provides efficient queue implementation for BFS?",
      options: [
        { optionText: "Deque", optionTag: "A" },
        { optionText: "LinkedList", optionTag: "B" },
        { optionText: "ArrayList", optionTag: "C" },
        { optionText: "TreeSet", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is the worst-case space complexity of BFS?",
      options: [
        { optionText: "O(1)", optionTag: "A" },
        { optionText: "O(V)", optionTag: "B" },
        { optionText: "O(E)", optionTag: "C" },
        { optionText: "O(log V)", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which graph representation is most efficient for BFS?",
      options: [
        { optionText: "Adjacency Matrix", optionTag: "A" },
        { optionText: "Adjacency List", optionTag: "B" },
        { optionText: "Edge List", optionTag: "C" },
        { optionText: "Incidence Matrix", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which traversal is used for minimum spanning tree?",
      options: [
        { optionText: "DFS", optionTag: "A" },
        { optionText: "Level Order", optionTag: "B" },
        { optionText: "BFS", optionTag: "C" },
        { optionText: "Prim’s Algorithm", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "In an adjacency list, how are neighbors of a vertex stored?",
      options: [
        { optionText: "As a matrix", optionTag: "A" },
        { optionText: "As a set", optionTag: "B" },
        { optionText: "As a linked list", optionTag: "C" },
        { optionText: "As an integer", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which scenario is ideal for BFS usage?",
      options: [
        { optionText: "When shortest path is needed", optionTag: "A" },
        { optionText: "When graph is weighted", optionTag: "B" },
        { optionText: "When memory is limited", optionTag: "C" },
        { optionText: "When recursion is mandatory", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "In Java, how can one mark nodes as visited in BFS?",
      options: [
        { optionText: "Using array", optionTag: "A" },
        { optionText: "Using HashSet", optionTag: "B" },
        { optionText: "Using Map", optionTag: "C" },
        { optionText: "All of the above", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What is returned if BFS does not find the element?",
      options: [
        { optionText: "-1", optionTag: "A" },
        { optionText: "null", optionTag: "B" },
        { optionText: "Exception", optionTag: "C" },
        { optionText: "false", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    }
  ]
};

export default quizData;