import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python - Tries - Beginner Quiz",
  quizLevel: "beginner",
  lang: "python",
  description: "Quiz to assess understanding of Tries in Python.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Tries",
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is a Trie primarily used for?",
      options: [
        { optionText: "Sorting arrays", optionTag: "D" },
        { optionText: "String searching", optionTag: "B" },
        { optionText: "Finding prime numbers", optionTag: "C" },
        { optionText: "Stack implementation", optionTag: "A" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which data type is typically stored in a Trie?",
      options: [
        { optionText: "Integers", optionTag: "C" },
        { optionText: "Strings", optionTag: "A" },
        { optionText: "Booleans", optionTag: "D" },
        { optionText: "Floating points", optionTag: "B" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What is the time complexity of searching a key in a Trie?",
      options: [
        { optionText: "O(n)", optionTag: "D" },
        { optionText: "O(1)", optionTag: "B" },
        { optionText: "O(m)", optionTag: "A" },
        { optionText: "O(log n)", optionTag: "C" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What does each node in a Trie typically represent?",
      options: [
        { optionText: "A full string", optionTag: "C" },
        { optionText: "A single character", optionTag: "B" },
        { optionText: "A number", optionTag: "D" },
        { optionText: "A dictionary", optionTag: "A" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which Python data structure can be used to build a Trie?",
      options: [
        { optionText: "List", optionTag: "D" },
        { optionText: "Dictionary", optionTag: "A" },
        { optionText: "Tuple", optionTag: "C" },
        { optionText: "Set", optionTag: "B" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What is a terminal node in a Trie?",
      options: [
        { optionText: "Node with most children", optionTag: "C" },
        { optionText: "Node that marks end of a word", optionTag: "B" },
        { optionText: "Node that starts a string", optionTag: "A" },
        { optionText: "Node with empty value", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which operation is not efficient in Tries?",
      options: [
        { optionText: "Searching", optionTag: "A" },
        { optionText: "Insertion", optionTag: "B" },
        { optionText: "Sorting", optionTag: "D" },
        { optionText: "Prefix matching", optionTag: "C" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "Which feature makes Tries unique?",
      options: [
        { optionText: "Fast deletion", optionTag: "C" },
        { optionText: "Efficient prefix searching", optionTag: "A" },
        { optionText: "Dynamic resizing", optionTag: "D" },
        { optionText: "Constant time lookup", optionTag: "B" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "How is a Trie different from a Binary Search Tree?",
      options: [
        { optionText: "Trie stores data hierarchically by character", optionTag: "B" },
        { optionText: "Trie nodes contain only left/right children", optionTag: "D" },
        { optionText: "Trie supports only numbers", optionTag: "A" },
        { optionText: "Trie has a single root with two children", optionTag: "C" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which condition marks a successful search in a Trie?",
      options: [
        { optionText: "Node has no children", optionTag: "C" },
        { optionText: "All characters found and terminal node reached", optionTag: "D" },
        { optionText: "Root is matched", optionTag: "A" },
        { optionText: "Prefix is matched", optionTag: "B" },
      ],
      correctOption: "D",
      score: 1,
    },

    // Next 10 Questions
    {
      questionText: "What is the space complexity of a Trie?",
      options: [
        { optionText: "O(n)", optionTag: "D" },
        { optionText: "O(m * n)", optionTag: "A" },
        { optionText: "O(log n)", optionTag: "B" },
        { optionText: "O(m)", optionTag: "C" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "In a Trie, how are words stored?",
      options: [
        { optionText: "Each character has its own node", optionTag: "C" },
        { optionText: "Each node represents a word", optionTag: "A" },
        { optionText: "One node stores the whole word", optionTag: "D" },
        { optionText: "Nodes store ASCII values", optionTag: "B" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which type of search is most optimized in Tries?",
      options: [
        { optionText: "Range search", optionTag: "B" },
        { optionText: "Prefix search", optionTag: "D" },
        { optionText: "Binary search", optionTag: "A" },
        { optionText: "Linear search", optionTag: "C" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "Which method is used to insert into a Trie in Python?",
      options: [
        { optionText: "append()", optionTag: "A" },
        { optionText: "insert()", optionTag: "C" },
        { optionText: "addWord()", optionTag: "B" },
        { optionText: "put()", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Tries are best suited for which of the following applications?",
      options: [
        { optionText: "Compiler optimization", optionTag: "C" },
        { optionText: "IP routing", optionTag: "A" },
        { optionText: "Sorting numbers", optionTag: "D" },
        { optionText: "Matrix multiplication", optionTag: "B" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which traversal is most useful for word listing in a Trie?",
      options: [
        { optionText: "In-order traversal", optionTag: "B" },
        { optionText: "Pre-order traversal", optionTag: "C" },
        { optionText: "Post-order traversal", optionTag: "D" },
        { optionText: "Level-order traversal", optionTag: "A" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "What is a benefit of using Tries for autocomplete systems?",
      options: [
        { optionText: "Saves space for large datasets", optionTag: "D" },
        { optionText: "Allows instant result fetch for typed prefix", optionTag: "B" },
        { optionText: "Removes duplicates automatically", optionTag: "A" },
        { optionText: "Performs binary search internally", optionTag: "C" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which is true about deletion in a Trie?",
      options: [
        { optionText: "Deletes all children of a node always", optionTag: "A" },
        { optionText: "Requires careful prefix check", optionTag: "C" },
        { optionText: "Removes all strings", optionTag: "B" },
        { optionText: "Does not change structure", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "A Trie can be used to solve which of the following?",
      options: [
        { optionText: "Palindrome generation", optionTag: "A" },
        { optionText: "Prefix matching problems", optionTag: "D" },
        { optionText: "Heap sort", optionTag: "B" },
        { optionText: "Dijkstra's algorithm", optionTag: "C" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "What is the root of a Trie initialized as?",
      options: [
        { optionText: "List", optionTag: "B" },
        { optionText: "Empty node", optionTag: "A" },
        { optionText: "String", optionTag: "C" },
        { optionText: "Array", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
  ],
};

export default quizData;