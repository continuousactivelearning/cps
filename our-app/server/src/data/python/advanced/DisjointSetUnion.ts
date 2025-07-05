import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python Disjoint Set Union - Advanced Quiz",
  quizLevel: "advanced",
  lang: "python",
  description: "Test your advanced knowledge of Disjoint Set Union (Union-Find) data structure.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "DisjointSetUnion",
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the primary use case of the Disjoint Set Union (DSU) structure?",
      options: [
        { optionText: "Detect cycles in a graph", optionTag: "C" },
        { optionText: "Sort elements", optionTag: "B" },
        { optionText: "Find prime numbers", optionTag: "A" },
        { optionText: "Count inversions", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "What operation does the `find()` function in DSU perform?",
      options: [
        { optionText: "Finds the root parent of a node", optionTag: "B" },
        { optionText: "Adds a new node", optionTag: "D" },
        { optionText: "Sorts the set", optionTag: "C" },
        { optionText: "Deletes a node", optionTag: "A" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which technique is used to optimize the `find()` operation in DSU?",
      options: [
        { optionText: "Path Compression", optionTag: "A" },
        { optionText: "Depth First Search", optionTag: "B" },
        { optionText: "Binary Search", optionTag: "D" },
        { optionText: "Heapify", optionTag: "C" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What does the `union()` function in DSU do?",
      options: [
        { optionText: "Merges two disjoint sets", optionTag: "C" },
        { optionText: "Removes duplicate elements", optionTag: "A" },
        { optionText: "Finds max of two sets", optionTag: "D" },
        { optionText: "Creates a new tree", optionTag: "B" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which technique can be used along with path compression to optimize DSU?",
      options: [
        { optionText: "Union by Rank", optionTag: "B" },
        { optionText: "Dynamic Programming", optionTag: "D" },
        { optionText: "BFS Traversal", optionTag: "C" },
        { optionText: "Memoization", optionTag: "A" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What is the time complexity of DSU with path compression and union by rank?",
      options: [
        { optionText: "O(α(N))", optionTag: "A" },
        { optionText: "O(N)", optionTag: "B" },
        { optionText: "O(log N)", optionTag: "C" },
        { optionText: "O(1)", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What does α(N) denote in DSU time complexity?",
      options: [
        { optionText: "Inverse Ackermann function", optionTag: "D" },
        { optionText: "Logarithmic function", optionTag: "A" },
        { optionText: "Square root", optionTag: "C" },
        { optionText: "Exponential", optionTag: "B" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "Which data structure is best suited for implementing DSU?",
      options: [
        { optionText: "Array", optionTag: "B" },
        { optionText: "Queue", optionTag: "C" },
        { optionText: "Stack", optionTag: "A" },
        { optionText: "Heap", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What is the result of `find(x)` if `x` is the root?",
      options: [
        { optionText: "Returns x itself", optionTag: "C" },
        { optionText: "Returns -1", optionTag: "A" },
        { optionText: "Throws error", optionTag: "D" },
        { optionText: "Returns root's parent", optionTag: "B" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Why is DSU efficient for Kruskal's algorithm?",
      options: [
        { optionText: "Fast cycle detection", optionTag: "A" },
        { optionText: "Sorts edges quickly", optionTag: "D" },
        { optionText: "Calculates MST cost", optionTag: "C" },
        { optionText: "Performs DFS faster", optionTag: "B" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "In DSU, what happens during path compression?",
      options: [
        { optionText: "The nodes directly link to the root", optionTag: "B" },
        { optionText: "The nodes are rebalanced", optionTag: "D" },
        { optionText: "New elements are added", optionTag: "C" },
        { optionText: "Unrelated nodes are connected", optionTag: "A" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What does Union by Rank ensure?",
      options: [
        { optionText: "Tree height is minimized", optionTag: "D" },
        { optionText: "Tree becomes sorted", optionTag: "B" },
        { optionText: "Parent nodes always have greater value", optionTag: "A" },
        { optionText: "Elements are not duplicated", optionTag: "C" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "What happens if you union two trees of equal rank?",
      options: [
        { optionText: "Increase the rank of the new root", optionTag: "A" },
        { optionText: "Delete one tree", optionTag: "B" },
        { optionText: "Reset rank to 0", optionTag: "C" },
        { optionText: "Rank remains unchanged", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which algorithm uses DSU internally for MST construction?",
      options: [
        { optionText: "Kruskal's algorithm", optionTag: "C" },
        { optionText: "Prim's algorithm", optionTag: "D" },
        { optionText: "Dijkstra's algorithm", optionTag: "A" },
        { optionText: "Bellman-Ford algorithm", optionTag: "B" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "What data is typically stored in each DSU element?",
      options: [
        { optionText: "Parent and rank", optionTag: "B" },
        { optionText: "Weight and value", optionTag: "C" },
        { optionText: "Cost and distance", optionTag: "D" },
        { optionText: "Color and degree", optionTag: "A" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which problem type is ideal for DSU?",
      options: [
        { optionText: "Connectivity in dynamic graphs", optionTag: "A" },
        { optionText: "String searching", optionTag: "D" },
        { optionText: "Sorting numbers", optionTag: "B" },
        { optionText: "Matrix multiplication", optionTag: "C" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which Python method updates parent pointers in DSU?",
      options: [
        { optionText: "find()", optionTag: "D" },
        { optionText: "compress()", optionTag: "C" },
        { optionText: "link()", optionTag: "A" },
        { optionText: "connect()", optionTag: "B" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "Which is true for disjoint sets?",
      options: [
        { optionText: "No two sets share common elements", optionTag: "C" },
        { optionText: "They must be ordered", optionTag: "A" },
        { optionText: "They support negative indices", optionTag: "B" },
        { optionText: "They are like dictionaries", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "What data structure does DSU avoid to remain efficient?",
      options: [
        { optionText: "Recursive trees", optionTag: "B" },
        { optionText: "Circular linked lists", optionTag: "D" },
        { optionText: "Deep trees without compression", optionTag: "A" },
        { optionText: "Arrays", optionTag: "C" },
      ],
      correctOption: "A",
      score: 1,
    },
  ],
};

export default quizData;