import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Java Tries - Intermediate Quiz",
  quizLevel: "intermediate",
  lang: "java",
  description: "Test your understanding of Tries, a tree-like data structure used to store associative arrays.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Tries"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is a Trie primarily used for?",
      options: [
        { optionText: "Storing strings for fast retrieval", optionTag: "C" },
        { optionText: "Sorting arrays", optionTag: "A" },
        { optionText: "Calculating prime numbers", optionTag: "B" },
        { optionText: "Storing binary data", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which of the following is NOT a feature of Trie?",
      options: [
        { optionText: "Allows fast prefix lookup", optionTag: "A" },
        { optionText: "Saves space using compression", optionTag: "C" },
        { optionText: "Efficient for storing strings", optionTag: "B" },
        { optionText: "Guarantees O(1) search time", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Each edge in a Trie represents:",
      options: [
        { optionText: "A character", optionTag: "A" },
        { optionText: "A complete word", optionTag: "C" },
        { optionText: "A pointer", optionTag: "B" },
        { optionText: "An index", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the space complexity of a Trie?",
      options: [
        { optionText: "O(N*M)", optionTag: "B" },
        { optionText: "O(log N)", optionTag: "A" },
        { optionText: "O(N)", optionTag: "C" },
        { optionText: "O(1)", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which operation is most efficient in Tries?",
      options: [
        { optionText: "Prefix search", optionTag: "D" },
        { optionText: "Sorting", optionTag: "C" },
        { optionText: "Traversal", optionTag: "A" },
        { optionText: "Counting characters", optionTag: "B" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which type of tree is Trie considered?",
      options: [
        { optionText: "Prefix tree", optionTag: "A" },
        { optionText: "Binary tree", optionTag: "D" },
        { optionText: "AVL tree", optionTag: "B" },
        { optionText: "Heap", optionTag: "C" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is a common use of Trie in autocomplete?",
      options: [
        { optionText: "To store possible completions of a word", optionTag: "C" },
        { optionText: "To suggest grammar rules", optionTag: "B" },
        { optionText: "To sort words alphabetically", optionTag: "A" },
        { optionText: "To calculate search rank", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which data structure is used in each node of a Trie?",
      options: [
        { optionText: "HashMap or array", optionTag: "A" },
        { optionText: "Linked list", optionTag: "C" },
        { optionText: "Queue", optionTag: "B" },
        { optionText: "Stack", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What marks the end of a valid word in a Trie?",
      options: [
        { optionText: "A boolean flag", optionTag: "B" },
        { optionText: "A null reference", optionTag: "A" },
        { optionText: "A special character", optionTag: "C" },
        { optionText: "A counter", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which one is true about insertion in Trie?",
      options: [
        { optionText: "It inserts character by character", optionTag: "D" },
        { optionText: "It inserts the whole word at once", optionTag: "A" },
        { optionText: "It requires balancing", optionTag: "B" },
        { optionText: "It inserts by sorting", optionTag: "C" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What is the average time complexity of search in Trie?",
      options: [
        { optionText: "O(L)", optionTag: "C" },
        { optionText: "O(log L)", optionTag: "B" },
        { optionText: "O(N)", optionTag: "A" },
        { optionText: "O(1)", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which of the following is false about Trie?",
      options: [
        { optionText: "It provides prefix-based search", optionTag: "A" },
        { optionText: "It can store integers", optionTag: "D" },
        { optionText: "It requires AVL balancing", optionTag: "B" },
        { optionText: "It works well for dictionaries", optionTag: "C" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Tries can be optimized using:",
      options: [
        { optionText: "Radix trees", optionTag: "C" },
        { optionText: "Min-heaps", optionTag: "A" },
        { optionText: "Binary heaps", optionTag: "B" },
        { optionText: "Red-black trees", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which of these languages heavily benefit from Tries?",
      options: [
        { optionText: "Spell-check and autocomplete systems", optionTag: "D" },
        { optionText: "Compilers", optionTag: "A" },
        { optionText: "Network protocols", optionTag: "C" },
        { optionText: "Operating systems", optionTag: "B" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "If a word exists in a Trie, search will return:",
      options: [
        { optionText: "True", optionTag: "A" },
        { optionText: "Exception", optionTag: "C" },
        { optionText: "Null", optionTag: "B" },
        { optionText: "Character list", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is a suffix trie used for?",
      options: [
        { optionText: "Pattern matching", optionTag: "B" },
        { optionText: "Spell checking", optionTag: "C" },
        { optionText: "Array sorting", optionTag: "D" },
        { optionText: "Palindrome detection", optionTag: "A" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Tries provide advantage over hash tables in:",
      options: [
        { optionText: "Prefix matching", optionTag: "D" },
        { optionText: "Memory usage", optionTag: "A" },
        { optionText: "Random access", optionTag: "B" },
        { optionText: "Constant time lookup", optionTag: "C" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which is the major drawback of Tries?",
      options: [
        { optionText: "High memory usage", optionTag: "C" },
        { optionText: "Slow insertion", optionTag: "B" },
        { optionText: "Inefficient search", optionTag: "A" },
        { optionText: "Low accuracy", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which method is used to delete a word from Trie?",
      options: [
        { optionText: "Recursive backtracking", optionTag: "A" },
        { optionText: "Sorting", optionTag: "C" },
        { optionText: "Hashing", optionTag: "B" },
        { optionText: "In-order traversal", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "The root of a Trie usually represents:",
      options: [
        { optionText: "An empty string", optionTag: "B" },
        { optionText: "A space", optionTag: "C" },
        { optionText: "Null pointer", optionTag: "A" },
        { optionText: "The first word", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    }
  ]
};

export default quizData;