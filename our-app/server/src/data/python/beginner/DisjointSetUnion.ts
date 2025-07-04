import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python - Disjoint Set Union - Beginner Quiz",
  quizLevel: "beginner",
  lang: "python",
  description: "Quiz to assess understanding of Disjoint Set Union (Union-Find) in Python.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Disjoint Set Union",
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the main application of Disjoint Set Union?",
      options: [
        { optionText: "Graph coloring", optionTag: "D" },
        { optionText: "Minimum spanning tree", optionTag: "B" },
        { optionText: "Shortest path finding", optionTag: "A" },
        { optionText: "Stack operations", optionTag: "C" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What does the 'find' operation do in DSU?",
      options: [
        { optionText: "Combines two sets", optionTag: "D" },
        { optionText: "Initializes a node", optionTag: "C" },
        { optionText: "Finds the representative of a set", optionTag: "A" },
        { optionText: "Sorts elements", optionTag: "B" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which technique is used to optimize the 'find' operation?",
      options: [
        { optionText: "Greedy method", optionTag: "D" },
        { optionText: "Path compression", optionTag: "C" },
        { optionText: "Dynamic programming", optionTag: "B" },
        { optionText: "Hashing", optionTag: "A" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which operation joins two subsets?",
      options: [
        { optionText: "Join", optionTag: "D" },
        { optionText: "Merge", optionTag: "A" },
        { optionText: "Connect", optionTag: "B" },
        { optionText: "Union", optionTag: "C" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "What is the worst-case time complexity of union operation with optimizations?",
      options: [
        { optionText: "O(log n)", optionTag: "D" },
        { optionText: "O(n)", optionTag: "C" },
        { optionText: "O(1)", optionTag: "B" },
        { optionText: "O(α(n))", optionTag: "A" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What does α(n) represent in DSU time complexity?",
      options: [
        { optionText: "Logarithmic complexity", optionTag: "C" },
        { optionText: "Amortized constant", optionTag: "B" },
        { optionText: "Ackermann inverse function", optionTag: "D" },
        { optionText: "Array size", optionTag: "A" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "Which of the following is not used in Disjoint Set Union?",
      options: [
        { optionText: "Path compression", optionTag: "B" },
        { optionText: "Union by rank", optionTag: "C" },
        { optionText: "Priority queue", optionTag: "A" },
        { optionText: "Sets", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "DSU is commonly used in which graph algorithm?",
      options: [
        { optionText: "Kruskal’s Algorithm", optionTag: "B" },
        { optionText: "Dijkstra’s Algorithm", optionTag: "C" },
        { optionText: "Prim’s Algorithm", optionTag: "D" },
        { optionText: "Floyd-Warshall Algorithm", optionTag: "A" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "How is 'union by rank' helpful?",
      options: [
        { optionText: "Minimizes number of unions", optionTag: "B" },
        { optionText: "Reduces height of trees", optionTag: "D" },
        { optionText: "Avoids path compression", optionTag: "A" },
        { optionText: "Increases search speed", optionTag: "C" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "In a DSU implementation, what does parent[i] = i indicate?",
      options: [
        { optionText: "Node is part of another set", optionTag: "B" },
        { optionText: "Node has no parent", optionTag: "C" },
        { optionText: "Node is the representative of its set", optionTag: "A" },
        { optionText: "Node is disconnected", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },

    // Next 10
    {
      questionText: "What kind of data structure is commonly used for DSU?",
      options: [
        { optionText: "Stack", optionTag: "D" },
        { optionText: "Array", optionTag: "A" },
        { optionText: "Hash Map", optionTag: "B" },
        { optionText: "Linked List", optionTag: "C" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What is a key difference between naive union and union by rank?",
      options: [
        { optionText: "Union by rank builds deeper trees", optionTag: "C" },
        { optionText: "Naive union avoids cycles", optionTag: "D" },
        { optionText: "Union by rank balances the trees", optionTag: "B" },
        { optionText: "Naive union uses hashing", optionTag: "A" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "In DSU, what does the term 'representative' mean?",
      options: [
        { optionText: "Any node in the set", optionTag: "C" },
        { optionText: "Root node or leader of the set", optionTag: "A" },
        { optionText: "First inserted node", optionTag: "D" },
        { optionText: "Node with smallest value", optionTag: "B" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "When are two nodes in the same set?",
      options: [
        { optionText: "When they have the same parent", optionTag: "C" },
        { optionText: "When they are inserted together", optionTag: "D" },
        { optionText: "When find(x) equals find(y)", optionTag: "B" },
        { optionText: "When they have same rank", optionTag: "A" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which DSU function modifies the data structure the most?",
      options: [
        { optionText: "delete()", optionTag: "A" },
        { optionText: "insert()", optionTag: "C" },
        { optionText: "union()", optionTag: "D" },
        { optionText: "find()", optionTag: "B" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "Which type of tree is ideal in DSU for performance?",
      options: [
        { optionText: "Balanced Tree", optionTag: "C" },
        { optionText: "Binary Search Tree", optionTag: "D" },
        { optionText: "Flat Tree (shallow height)", optionTag: "B" },
        { optionText: "Deep Tree", optionTag: "A" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What happens in union(x, y) if x and y already belong to same set?",
      options: [
        { optionText: "They are swapped", optionTag: "D" },
        { optionText: "Nothing happens", optionTag: "A" },
        { optionText: "They form a cycle", optionTag: "C" },
        { optionText: "New set is created", optionTag: "B" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "How many sets are formed when each node is its own parent?",
      options: [
        { optionText: "1", optionTag: "B" },
        { optionText: "n", optionTag: "C" },
        { optionText: "0", optionTag: "D" },
        { optionText: "Depends on path compression", optionTag: "A" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which concept is fundamental to avoiding cycles in MST using DSU?",
      options: [
        { optionText: "BFS check", optionTag: "A" },
        { optionText: "Path compression", optionTag: "C" },
        { optionText: "Cycle detection using set IDs", optionTag: "D" },
        { optionText: "Checking find(x) != find(y)", optionTag: "B" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which language feature in Python is helpful for implementing DSU?",
      options: [
        { optionText: "list", optionTag: "C" },
        { optionText: "setdefault()", optionTag: "B" },
        { optionText: "collections.defaultdict", optionTag: "A" },
        { optionText: "range()", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
  ],
};

export default quizData;