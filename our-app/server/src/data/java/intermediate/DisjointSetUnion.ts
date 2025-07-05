import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Java Disjoint Set Union - Intermediate Quiz",
  quizLevel: "intermediate",
  lang: "java",
  description: "Evaluate your understanding of Disjoint Set Union (Union-Find) data structure used in graph algorithms.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "DisjointSetUnion"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the primary use of Disjoint Set Union (DSU)?",
      options: [
        { optionText: "To detect cycles in a graph", optionTag: "C" },
        { optionText: "To sort elements", optionTag: "A" },
        { optionText: "To implement heaps", optionTag: "B" },
        { optionText: "To store key-value pairs", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What are the two main operations of DSU?",
      options: [
        { optionText: "Find and Union", optionTag: "B" },
        { optionText: "Insert and Delete", optionTag: "C" },
        { optionText: "Sort and Search", optionTag: "A" },
        { optionText: "Enqueue and Dequeue", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What does the 'Find' operation do in DSU?",
      options: [
        { optionText: "Returns the representative of a set", optionTag: "D" },
        { optionText: "Deletes a node", optionTag: "B" },
        { optionText: "Merges two sets", optionTag: "A" },
        { optionText: "Counts the number of sets", optionTag: "C" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What is path compression in DSU?",
      options: [
        { optionText: "Shortens the path to the root", optionTag: "A" },
        { optionText: "Compresses memory", optionTag: "B" },
        { optionText: "Sorts nodes", optionTag: "C" },
        { optionText: "Reverses a tree", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the time complexity of DSU with path compression and union by rank?",
      options: [
        { optionText: "O(α(n))", optionTag: "B" },
        { optionText: "O(n)", optionTag: "A" },
        { optionText: "O(log n)", optionTag: "D" },
        { optionText: "O(1)", optionTag: "C" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which algorithm uses DSU to detect cycles?",
      options: [
        { optionText: "Kruskal's Algorithm", optionTag: "C" },
        { optionText: "Prim's Algorithm", optionTag: "D" },
        { optionText: "Bellman-Ford", optionTag: "A" },
        { optionText: "Dijkstra", optionTag: "B" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which structure is used in DSU to store parent information?",
      options: [
        { optionText: "Array", optionTag: "A" },
        { optionText: "Set", optionTag: "D" },
        { optionText: "Queue", optionTag: "B" },
        { optionText: "Stack", optionTag: "C" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is union by rank?",
      options: [
        { optionText: "Merges smaller tree under larger one", optionTag: "B" },
        { optionText: "Merges larger tree under smaller one", optionTag: "A" },
        { optionText: "Creates equal-sized sets", optionTag: "C" },
        { optionText: "Assigns weights randomly", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which application uses DSU?",
      options: [
        { optionText: "Minimum Spanning Tree", optionTag: "C" },
        { optionText: "Matrix multiplication", optionTag: "A" },
        { optionText: "Bubble sort", optionTag: "D" },
        { optionText: "Recursion", optionTag: "B" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "How does DSU help in Kruskal's Algorithm?",
      options: [
        { optionText: "Avoids cycles while selecting edges", optionTag: "A" },
        { optionText: "Finds shortest path", optionTag: "B" },
        { optionText: "Sorts edges", optionTag: "D" },
        { optionText: "Traverses the tree", optionTag: "C" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is initialized for each element in DSU?",
      options: [
        { optionText: "Each element is its own parent", optionTag: "C" },
        { optionText: "Each element points to null", optionTag: "A" },
        { optionText: "All elements share the same parent", optionTag: "D" },
        { optionText: "Each element is assigned rank 10", optionTag: "B" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "DSU is typically used for:",
      options: [
        { optionText: "Handling disjoint sets", optionTag: "B" },
        { optionText: "Searching", optionTag: "A" },
        { optionText: "Balancing trees", optionTag: "D" },
        { optionText: "String processing", optionTag: "C" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "How many disjoint sets are present initially?",
      options: [
        { optionText: "n", optionTag: "D" },
        { optionText: "1", optionTag: "A" },
        { optionText: "0", optionTag: "B" },
        { optionText: "log n", optionTag: "C" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which DSU operation combines two sets?",
      options: [
        { optionText: "Union", optionTag: "A" },
        { optionText: "Find", optionTag: "B" },
        { optionText: "Insert", optionTag: "C" },
        { optionText: "Split", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Path compression makes which operation faster?",
      options: [
        { optionText: "Find", optionTag: "C" },
        { optionText: "Union", optionTag: "B" },
        { optionText: "Sort", optionTag: "A" },
        { optionText: "Traverse", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is the initial rank of each element in DSU?",
      options: [
        { optionText: "0", optionTag: "D" },
        { optionText: "1", optionTag: "B" },
        { optionText: "n", optionTag: "C" },
        { optionText: "∞", optionTag: "A" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What does union by rank help prevent?",
      options: [
        { optionText: "Tall trees", optionTag: "A" },
        { optionText: "Duplicate sets", optionTag: "B" },
        { optionText: "Empty sets", optionTag: "D" },
        { optionText: "Overlapping keys", optionTag: "C" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "DSU is often combined with which technique?",
      options: [
        { optionText: "Greedy Algorithms", optionTag: "B" },
        { optionText: "Backtracking", optionTag: "D" },
        { optionText: "Recursion", optionTag: "C" },
        { optionText: "Binary Search", optionTag: "A" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which of the following helps optimize DSU performance?",
      options: [
        { optionText: "Path compression and union by rank", optionTag: "C" },
        { optionText: "Heapify and merge", optionTag: "A" },
        { optionText: "Hashing", optionTag: "D" },
        { optionText: "Traversal and recursion", optionTag: "B" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which data type is used to maintain the ranks?",
      options: [
        { optionText: "int[]", optionTag: "A" },
        { optionText: "boolean[]", optionTag: "B" },
        { optionText: "char[]", optionTag: "C" },
        { optionText: "String[]", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    }
  ]
};

export default quizData;