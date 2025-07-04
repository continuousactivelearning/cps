import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Java Disjoint Set Union - Advanced Quiz",
  quizLevel: "advanced",
  lang: "java",
  description: "Evaluate your understanding of Disjoint Set Union (DSU), also known as Union-Find data structure.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Disjoint Set Union"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the primary operation of Disjoint Set Union?",
      options: [
        { optionText: "Union and Find", optionTag: "A" },
        { optionText: "Push and Pop", optionTag: "D" },
        { optionText: "Insert and Delete", optionTag: "B" },
        { optionText: "Sort and Merge", optionTag: "C" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which optimization reduces the tree height in DSU?",
      options: [
        { optionText: "Union by Size", optionTag: "C" },
        { optionText: "In-order Traversal", optionTag: "D" },
        { optionText: "Post-order Union", optionTag: "B" },
        { optionText: "Union by Rank", optionTag: "A" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What does path compression do in DSU?",
      options: [
        { optionText: "Compress the input array", optionTag: "C" },
        { optionText: "Shortens paths during find", optionTag: "B" },
        { optionText: "Removes redundant edges", optionTag: "D" },
        { optionText: "Flattens the graph", optionTag: "A" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is the amortized time complexity of DSU operations with both optimizations?",
      options: [
        { optionText: "O(log n)", optionTag: "C" },
        { optionText: "O(n)", optionTag: "B" },
        { optionText: "O(α(n))", optionTag: "D" },
        { optionText: "O(1)", optionTag: "A" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What is α(n) in DSU time complexity?",
      options: [
        { optionText: "Ackermann inverse function", optionTag: "C" },
        { optionText: "Array index", optionTag: "A" },
        { optionText: "Logarithmic base", optionTag: "D" },
        { optionText: "Exponent of n", optionTag: "B" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which of the following is NOT an application of DSU?",
      options: [
        { optionText: "Cycle detection in graphs", optionTag: "B" },
        { optionText: "Minimum Spanning Tree", optionTag: "D" },
        { optionText: "Graph coloring", optionTag: "C" },
        { optionText: "Connected component detection", optionTag: "A" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "How is the parent array initialized in DSU?",
      options: [
        { optionText: "Each element points to itself", optionTag: "A" },
        { optionText: "All elements point to 0", optionTag: "C" },
        { optionText: "Random parents", optionTag: "D" },
        { optionText: "All elements point to -1", optionTag: "B" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How do you find the leader of a set?",
      options: [
        { optionText: "Using a stack", optionTag: "D" },
        { optionText: "Calling union function", optionTag: "C" },
        { optionText: "Recursively using find function", optionTag: "B" },
        { optionText: "Sorting the array", optionTag: "A" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is the role of rank[] in DSU?",
      options: [
        { optionText: "Tracks tree height for union", optionTag: "C" },
        { optionText: "Stores parent node", optionTag: "A" },
        { optionText: "Stores min element", optionTag: "B" },
        { optionText: "Tracks recursion depth", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What happens if both trees have the same rank in DSU?",
      options: [
        { optionText: "Either can be parent", optionTag: "A" },
        { optionText: "One is deleted", optionTag: "D" },
        { optionText: "An exception is thrown", optionTag: "B" },
        { optionText: "Graph becomes cyclic", optionTag: "C" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which MST algorithm uses DSU?",
      options: [
        { optionText: "Prim's", optionTag: "C" },
        { optionText: "Bellman-Ford", optionTag: "D" },
        { optionText: "Kruskal's", optionTag: "B" },
        { optionText: "Dijkstra's", optionTag: "A" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "How to represent DSU using Java?",
      options: [
        { optionText: "Using queues", optionTag: "A" },
        { optionText: "Using arrays", optionTag: "C" },
        { optionText: "Using maps only", optionTag: "B" },
        { optionText: "Using stack and list", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is the result of find(x) when x is root?",
      options: [
        { optionText: "Its own value", optionTag: "B" },
        { optionText: "Zero", optionTag: "D" },
        { optionText: "Rank of x", optionTag: "C" },
        { optionText: "Parent of x", optionTag: "A" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which is TRUE for DSU after multiple unions?",
      options: [
        { optionText: "Set may have multiple leaders", optionTag: "C" },
        { optionText: "All elements point to a common parent", optionTag: "B" },
        { optionText: "DSU resets automatically", optionTag: "D" },
        { optionText: "Cycle must be formed", optionTag: "A" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which of these can be used for dynamic connectivity?",
      options: [
        { optionText: "Disjoint Set", optionTag: "A" },
        { optionText: "Stack", optionTag: "C" },
        { optionText: "Queue", optionTag: "B" },
        { optionText: "Heap", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which data structure supports union-find efficiently?",
      options: [
        { optionText: "Trie", optionTag: "D" },
        { optionText: "Binary Tree", optionTag: "C" },
        { optionText: "Hash Map", optionTag: "B" },
        { optionText: "Array with path compression", optionTag: "A" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What causes cycle in union operations?",
      options: [
        { optionText: "Repeated union of same sets", optionTag: "B" },
        { optionText: "Random initialization", optionTag: "C" },
        { optionText: "Path compression", optionTag: "D" },
        { optionText: "Parent array not updated", optionTag: "A" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "DSU can be extended to support what additional query?",
      options: [
        { optionText: "Find max element", optionTag: "B" },
        { optionText: "Find connected component size", optionTag: "C" },
        { optionText: "Traversal order", optionTag: "D" },
        { optionText: "Heapify operation", optionTag: "A" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which of the following is most efficient DSU variant?",
      options: [
        { optionText: "Union by size only", optionTag: "B" },
        { optionText: "Union by rank + path compression", optionTag: "C" },
        { optionText: "Path compression only", optionTag: "A" },
        { optionText: "Randomized union", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "DSU can be used in offline queries by which algorithm?",
      options: [
        { optionText: "Tarjan’s Algorithm", optionTag: "D" },
        { optionText: "Dijkstra", optionTag: "B" },
        { optionText: "BFS", optionTag: "C" },
        { optionText: "Prim", optionTag: "A" }
      ],
      correctOption: "D",
      score: 1
    }
  ]
};

export default quizData;