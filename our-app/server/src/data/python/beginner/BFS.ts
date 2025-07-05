import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python - Breadth-First Search (BFS) - Beginner Quiz",
  quizLevel: "beginner",
  lang: "python",
  description: "Test your understanding of BFS concepts and applications in Python.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Breadth-First Search (BFS)",
  },
  quizScore: 20,
  questions: [
    {
      questionText: "Which data structure is primarily used in BFS traversal?",
      options: [
        { optionText: "Queue", optionTag: "B" },
        { optionText: "Stack", optionTag: "A" },
        { optionText: "Priority Queue", optionTag: "C" },
        { optionText: "Hash Table", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What is the time complexity of BFS for a graph with V vertices and E edges?",
      options: [
        { optionText: "O(V + E)", optionTag: "A" },
        { optionText: "O(V^2)", optionTag: "D" },
        { optionText: "O(V)", optionTag: "C" },
        { optionText: "O(E)", optionTag: "B" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "In BFS, when a node is visited, it is:",
      options: [
        { optionText: "Marked as visited and added to queue", optionTag: "C" },
        { optionText: "Pushed onto a stack", optionTag: "D" },
        { optionText: "Ignored", optionTag: "B" },
        { optionText: "Deleted immediately", optionTag: "A" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "What traversal order does BFS follow?",
      options: [
        { optionText: "Level by level", optionTag: "B" },
        { optionText: "Depth first", optionTag: "D" },
        { optionText: "Random", optionTag: "C" },
        { optionText: "Backwards", optionTag: "A" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which of the following problems is BFS commonly used for?",
      options: [
        { optionText: "Shortest path in unweighted graph", optionTag: "A" },
        { optionText: "Tree balancing", optionTag: "B" },
        { optionText: "Sorting elements", optionTag: "D" },
        { optionText: "Finding minimum in array", optionTag: "C" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "BFS is implemented using which Python module’s data structure for efficiency?",
      options: [
        { optionText: "collections.deque", optionTag: "C" },
        { optionText: "heapq", optionTag: "D" },
        { optionText: "itertools", optionTag: "A" },
        { optionText: "functools", optionTag: "B" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "What happens if we do not mark nodes as visited in BFS?",
      options: [
        { optionText: "We may visit the same node multiple times", optionTag: "D" },
        { optionText: "Traversal is faster", optionTag: "B" },
        { optionText: "No traversal occurs", optionTag: "C" },
        { optionText: "The algorithm becomes recursive", optionTag: "A" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "What is initialized first in BFS?",
      options: [
        { optionText: "A queue with the starting node", optionTag: "A" },
        { optionText: "An empty stack", optionTag: "B" },
        { optionText: "Graph dictionary", optionTag: "C" },
        { optionText: "Visited array with False values", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which traversal guarantees visiting all nodes in shortest number of edges?",
      options: [
        { optionText: "BFS", optionTag: "C" },
        { optionText: "DFS", optionTag: "A" },
        { optionText: "In-order", optionTag: "D" },
        { optionText: "Post-order", optionTag: "B" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which Python data type is best suited to track visited nodes?",
      options: [
        { optionText: "Set", optionTag: "B" },
        { optionText: "Tuple", optionTag: "D" },
        { optionText: "String", optionTag: "C" },
        { optionText: "Float", optionTag: "A" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "If a node has no neighbors, how is it handled in BFS?",
      options: [
        { optionText: "It is visited and skipped", optionTag: "A" },
        { optionText: "BFS fails", optionTag: "B" },
        { optionText: "It causes an error", optionTag: "C" },
        { optionText: "It loops back", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which traversal is not recursive by nature?",
      options: [
        { optionText: "BFS", optionTag: "C" },
        { optionText: "DFS", optionTag: "A" },
        { optionText: "Preorder", optionTag: "B" },
        { optionText: "Inorder", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "What happens when the BFS queue becomes empty?",
      options: [
        { optionText: "Traversal ends", optionTag: "A" },
        { optionText: "Program crashes", optionTag: "D" },
        { optionText: "Traversal restarts", optionTag: "B" },
        { optionText: "All nodes get deleted", optionTag: "C" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which condition is checked before inserting a neighbor into the BFS queue?",
      options: [
        { optionText: "If it was not visited", optionTag: "B" },
        { optionText: "If it is less than the current node", optionTag: "C" },
        { optionText: "If it is greater than all nodes", optionTag: "A" },
        { optionText: "None of the above", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "How is the adjacency list represented in Python BFS?",
      options: [
        { optionText: "Using dictionary of lists", optionTag: "C" },
        { optionText: "Using sets only", optionTag: "A" },
        { optionText: "Using strings", optionTag: "B" },
        { optionText: "Using matrix", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which traversal uses memory proportional to number of vertices?",
      options: [
        { optionText: "BFS", optionTag: "D" },
        { optionText: "DFS", optionTag: "A" },
        { optionText: "In-order", optionTag: "B" },
        { optionText: "Level-order", optionTag: "C" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "BFS is ideal for finding paths in which kind of graphs?",
      options: [
        { optionText: "Unweighted graphs", optionTag: "A" },
        { optionText: "Weighted DAGs", optionTag: "C" },
        { optionText: "Weighted cyclic graphs", optionTag: "B" },
        { optionText: "All types", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What does `deque.popleft()` do in Python BFS?",
      options: [
        { optionText: "Removes and returns the first element", optionTag: "A" },
        { optionText: "Adds element to end", optionTag: "C" },
        { optionText: "Removes element at index 0", optionTag: "B" },
        { optionText: "Deletes entire deque", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "In BFS, each vertex is visited:",
      options: [
        { optionText: "Exactly once", optionTag: "C" },
        { optionText: "Twice", optionTag: "B" },
        { optionText: "Only if it’s a leaf", optionTag: "D" },
        { optionText: "Randomly", optionTag: "A" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "What kind of queue is used for BFS?",
      options: [
        { optionText: "FIFO", optionTag: "D" },
        { optionText: "LIFO", optionTag: "B" },
        { optionText: "Priority", optionTag: "A" },
        { optionText: "Circular", optionTag: "C" },
      ],
      correctOption: "D",
      score: 1,
    },
  ],
};

export default quizData;