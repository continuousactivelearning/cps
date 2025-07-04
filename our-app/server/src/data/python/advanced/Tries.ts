import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python Tries - Advanced Quiz",
  quizLevel: "advanced",
  lang: "python",
  description: "Master the concepts of Trie (Prefix Tree) data structures in Python.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Tries",
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is a Trie primarily used for?",
      options: [
        { optionText: "Prefix-based searching", optionTag: "C" },
        { optionText: "Graph traversal", optionTag: "A" },
        { optionText: "Sorting integers", optionTag: "B" },
        { optionText: "Balancing binary trees", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "What is the time complexity of searching a word of length L in a Trie?",
      options: [
        { optionText: "O(L)", optionTag: "B" },
        { optionText: "O(n log n)", optionTag: "A" },
        { optionText: "O(log L)", optionTag: "C" },
        { optionText: "O(1)", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which node in a Trie indicates the end of a valid word?",
      options: [
        { optionText: "A node with endOfWord = True", optionTag: "A" },
        { optionText: "The root node", optionTag: "B" },
        { optionText: "Any node with a single child", optionTag: "D" },
        { optionText: "Null node", optionTag: "C" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which of the following is NOT a typical application of Trie?",
      options: [
        { optionText: "IP routing", optionTag: "D" },
        { optionText: "Autocomplete", optionTag: "B" },
        { optionText: "Prefix searching", optionTag: "A" },
        { optionText: "Heap operations", optionTag: "C" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "What does each edge in a Trie typically represent?",
      options: [
        { optionText: "A single character", optionTag: "A" },
        { optionText: "A full word", optionTag: "B" },
        { optionText: "A list of strings", optionTag: "C" },
        { optionText: "A prefix array", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What is the space complexity of a Trie storing N strings of average length L?",
      options: [
        { optionText: "O(N × L)", optionTag: "B" },
        { optionText: "O(N + L)", optionTag: "A" },
        { optionText: "O(L)", optionTag: "D" },
        { optionText: "O(N)", optionTag: "C" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What is the key advantage of a Trie over Hash Maps for string keys?",
      options: [
        { optionText: "Fast prefix matching", optionTag: "D" },
        { optionText: "O(1) insertions", optionTag: "A" },
        { optionText: "Lower memory usage", optionTag: "B" },
        { optionText: "Sorted keys", optionTag: "C" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "Which data structure is ideal for implementing Trie nodes?",
      options: [
        { optionText: "Dictionary (HashMap)", optionTag: "C" },
        { optionText: "List", optionTag: "A" },
        { optionText: "Set", optionTag: "B" },
        { optionText: "Stack", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which operation is most costly in a Trie?",
      options: [
        { optionText: "Deletion", optionTag: "A" },
        { optionText: "Search", optionTag: "C" },
        { optionText: "Insertion", optionTag: "B" },
        { optionText: "Traversal", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What happens if a string is a prefix of another in Trie?",
      options: [
        { optionText: "It ends at a node marked endOfWord = True", optionTag: "C" },
        { optionText: "It cannot be inserted", optionTag: "A" },
        { optionText: "It replaces the longer string", optionTag: "D" },
        { optionText: "A new branch is always created", optionTag: "B" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "How is Trie traversal done for suggestions in autocomplete?",
      options: [
        { optionText: "Depth-First Search from prefix node", optionTag: "D" },
        { optionText: "Breadth-First Search always", optionTag: "B" },
        { optionText: "Heap-based traversal", optionTag: "C" },
        { optionText: "Binary Search", optionTag: "A" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "Can Trie nodes contain a frequency counter?",
      options: [
        { optionText: "Yes, for word frequency tracking", optionTag: "B" },
        { optionText: "No, only letters allowed", optionTag: "A" },
        { optionText: "Only for root nodes", optionTag: "C" },
        { optionText: "Only in balanced Tries", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What happens during deletion of a non-leaf word?",
      options: [
        { optionText: "Only the endOfWord flag is cleared", optionTag: "C" },
        { optionText: "Node is removed", optionTag: "A" },
        { optionText: "Entire path is deleted", optionTag: "B" },
        { optionText: "Children nodes are swapped", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Tries are mainly used for:",
      options: [
        { optionText: "String dictionaries and prefix lookups", optionTag: "A" },
        { optionText: "Array sorting", optionTag: "D" },
        { optionText: "Graph storage", optionTag: "B" },
        { optionText: "Matrix compression", optionTag: "C" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which of these best describes Trie’s space usage?",
      options: [
        { optionText: "Can be more than HashMap", optionTag: "A" },
        { optionText: "Same as AVL tree", optionTag: "B" },
        { optionText: "Less than Set", optionTag: "D" },
        { optionText: "Constant for all keys", optionTag: "C" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which of these is FALSE about Tries?",
      options: [
        { optionText: "They are suitable for string prefixes", optionTag: "B" },
        { optionText: "They require balanced trees", optionTag: "D" },
        { optionText: "They can share paths between words", optionTag: "A" },
        { optionText: "They grow in depth not width", optionTag: "C" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "Which is an efficient way to reduce space in Tries?",
      options: [
        { optionText: "Use compressed or suffix Tries", optionTag: "C" },
        { optionText: "Avoid storing strings", optionTag: "B" },
        { optionText: "Use BFS traversal", optionTag: "A" },
        { optionText: "Limit number of inserts", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which Python module can simulate Trie functionality?",
      options: [
        { optionText: "collections.defaultdict", optionTag: "B" },
        { optionText: "heapq", optionTag: "A" },
        { optionText: "bisect", optionTag: "C" },
        { optionText: "math", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "In a Trie, what causes branching?",
      options: [
        { optionText: "Words with different characters at the same position", optionTag: "D" },
        { optionText: "Repetition of the same word", optionTag: "A" },
        { optionText: "Empty strings", optionTag: "B" },
        { optionText: "Common prefixes", optionTag: "C" },
      ],
      correctOption: "D",
      score: 1,
    },
  ],
};

export default quizData;