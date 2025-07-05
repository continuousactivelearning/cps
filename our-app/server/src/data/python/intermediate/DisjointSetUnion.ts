import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python Disjoint Set Union - Intermediate Quiz",
  quizLevel: "intermediate",
  lang: "python",
  description: "Test your understanding of Disjoint Set Union (Union-Find) data structure in Python.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "DisjointSetUnion",
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the primary application of Disjoint Set Union (DSU)?",
      options: [
        { optionText: "Shortest Path Finding", optionTag: "A" },
        { optionText: "Cycle Detection in Graphs", optionTag: "B" },
        { optionText: "Binary Search", optionTag: "C" },
        { optionText: "Matrix Multiplication", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What does the union operation in DSU do?",
      options: [
        { optionText: "Splits sets into smaller ones", optionTag: "A" },
        { optionText: "Finds the representative of the set", optionTag: "B" },
        { optionText: "Joins two sets into one", optionTag: "C" },
        { optionText: "Deletes a set", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is the time complexity of union and find operations using path compression?",
      options: [
        { optionText: "O(log n)", optionTag: "A" },
        { optionText: "O(n)", optionTag: "B" },
        { optionText: "O(α(n))", optionTag: "C" },
        { optionText: "O(1)", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is α(n) in time complexity of DSU?",
      options: [
        { optionText: "Logarithmic function", optionTag: "A" },
        { optionText: "Inverse Ackermann function", optionTag: "B" },
        { optionText: "Constant function", optionTag: "C" },
        { optionText: "Exponential function", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which of the following improves DSU performance?",
      options: [
        { optionText: "Path Compression", optionTag: "A" },
        { optionText: "Merge Sort", optionTag: "B" },
        { optionText: "Dijkstra’s Algorithm", optionTag: "C" },
        { optionText: "Recursion", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which Python data structure is commonly used for DSU?",
      options: [
        { optionText: "List", optionTag: "A" },
        { optionText: "Dictionary", optionTag: "B" },
        { optionText: "Set", optionTag: "C" },
        { optionText: "Tuple", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which method is used to find the leader of a set?",
      options: [
        { optionText: "merge()", optionTag: "A" },
        { optionText: "find()", optionTag: "B" },
        { optionText: "insert()", optionTag: "C" },
        { optionText: "connect()", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is the result of find(3) if parent[3] = 2 and parent[2] = 1?",
      options: [
        { optionText: "1", optionTag: "A" },
        { optionText: "2", optionTag: "B" },
        { optionText: "3", optionTag: "C" },
        { optionText: "None", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How can you optimize union operations?",
      options: [
        { optionText: "Using Rank or Size", optionTag: "A" },
        { optionText: "Sorting the sets", optionTag: "B" },
        { optionText: "Avoiding recursion", optionTag: "C" },
        { optionText: "Using hashmaps", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which algorithm uses DSU for cycle detection?",
      options: [
        { optionText: "Prim's", optionTag: "A" },
        { optionText: "Bellman-Ford", optionTag: "B" },
        { optionText: "Kruskal’s", optionTag: "C" },
        { optionText: "BFS", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which of the following best represents DSU?",
      options: [
        { optionText: "Directed Graph", optionTag: "A" },
        { optionText: "Array of linked lists", optionTag: "B" },
        { optionText: "Forest of trees", optionTag: "C" },
        { optionText: "Single tree", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is union by rank?",
      options: [
        { optionText: "Join larger set to smaller", optionTag: "A" },
        { optionText: "Join smaller set to larger", optionTag: "B" },
        { optionText: "Join based on alphabetical order", optionTag: "C" },
        { optionText: "Join by random choice", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "When is path compression applied?",
      options: [
        { optionText: "During union()", optionTag: "A" },
        { optionText: "During initialization", optionTag: "B" },
        { optionText: "During find()", optionTag: "C" },
        { optionText: "During deletion", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Can DSU be used for dynamic connectivity queries?",
      options: [
        { optionText: "Yes", optionTag: "A" },
        { optionText: "No", optionTag: "B" },
        { optionText: "Only on trees", optionTag: "C" },
        { optionText: "Only with sorting", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How is parent array updated in path compression?",
      options: [
        { optionText: "Set all to root", optionTag: "A" },
        { optionText: "Set root to parent", optionTag: "B" },
        { optionText: "Do not update", optionTag: "C" },
        { optionText: "Set to next neighbor", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which one gives better performance?",
      options: [
        { optionText: "Union by size only", optionTag: "A" },
        { optionText: "Union by rank + Path compression", optionTag: "B" },
        { optionText: "Recursion only", optionTag: "C" },
        { optionText: "DFS and BFS", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Can DSU help in detecting redundant connections in a graph?",
      options: [
        { optionText: "No", optionTag: "A" },
        { optionText: "Yes", optionTag: "B" },
        { optionText: "Only in trees", optionTag: "C" },
        { optionText: "Only in DAGs", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is the parent of a set’s root?",
      options: [
        { optionText: "None", optionTag: "A" },
        { optionText: "Itself", optionTag: "B" },
        { optionText: "Infinity", optionTag: "C" },
        { optionText: "-1", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which of these is true about DSU?",
      options: [
        { optionText: "It stores graphs in matrix", optionTag: "A" },
        { optionText: "It only stores values", optionTag: "B" },
        { optionText: "It groups disjoint sets", optionTag: "C" },
        { optionText: "It works only with strings", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is a drawback of DSU?",
      options: [
        { optionText: "No support for dynamic sets", optionTag: "A" },
        { optionText: "Can’t find prefix sums", optionTag: "B" },
        { optionText: "Only static operations", optionTag: "C" },
        { optionText: "Does not support graph operations", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    }
  ]
};

export default quizData;