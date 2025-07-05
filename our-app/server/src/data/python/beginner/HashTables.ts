import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python Hash Tables - Beginner Quiz",
  quizLevel: "beginner",
  lang: "python",
  description: "This quiz assesses your fundamental understanding of Python dictionaries and hashing concepts.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "HashTables"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What built-in data type in Python represents a hash table?",
      options: [
        { optionText: "list", optionTag: "A" },
        { optionText: "tuple", optionTag: "B" },
        { optionText: "dict", optionTag: "C" },
        { optionText: "set", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is the time complexity of accessing a value from a dictionary?",
      options: [
        { optionText: "O(n)", optionTag: "B" },
        { optionText: "O(log n)", optionTag: "D" },
        { optionText: "O(1)", optionTag: "A" },
        { optionText: "O(n log n)", optionTag: "C" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which method inserts a key-value pair into a dictionary?",
      options: [
        { optionText: "insert()", optionTag: "C" },
        { optionText: "put()", optionTag: "B" },
        { optionText: "assign()", optionTag: "D" },
        { optionText: "None of the above", optionTag: "A" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which data type is NOT allowed as a dictionary key?",
      options: [
        { optionText: "int", optionTag: "B" },
        { optionText: "tuple", optionTag: "C" },
        { optionText: "list", optionTag: "A" },
        { optionText: "str", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which function returns all the keys in a dictionary?",
      options: [
        { optionText: "get()", optionTag: "C" },
        { optionText: "items()", optionTag: "B" },
        { optionText: "values()", optionTag: "A" },
        { optionText: "keys()", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What happens if you access a key that doesn't exist?",
      options: [
        { optionText: "Returns 0", optionTag: "A" },
        { optionText: "Creates a new key", optionTag: "D" },
        { optionText: "Raises a KeyError", optionTag: "B" },
        { optionText: "Returns None", optionTag: "C" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which method safely retrieves a value without KeyError?",
      options: [
        { optionText: "find()", optionTag: "B" },
        { optionText: "get()", optionTag: "C" },
        { optionText: "lookup()", optionTag: "A" },
        { optionText: "fetch()", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Dictionaries in Python are implemented using:",
      options: [
        { optionText: "Binary Trees", optionTag: "C" },
        { optionText: "Linked Lists", optionTag: "D" },
        { optionText: "Hash Tables", optionTag: "A" },
        { optionText: "Queues", optionTag: "B" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which operator is used to check if a key exists in a dictionary?",
      options: [
        { optionText: "has()", optionTag: "C" },
        { optionText: "in", optionTag: "D" },
        { optionText: "exists()", optionTag: "A" },
        { optionText: "check()", optionTag: "B" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What is returned by dict.get('key', 0) if 'key' is not present?",
      options: [
        { optionText: "None", optionTag: "A" },
        { optionText: "0", optionTag: "C" },
        { optionText: "KeyError", optionTag: "B" },
        { optionText: "True", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What does dict.items() return?",
      options: [
        { optionText: "All values", optionTag: "D" },
        { optionText: "Only keys", optionTag: "B" },
        { optionText: "List of tuples", optionTag: "C" },
        { optionText: "Sorted keys", optionTag: "A" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which method deletes a key-value pair?",
      options: [
        { optionText: "remove()", optionTag: "C" },
        { optionText: "del", optionTag: "A" },
        { optionText: "delete()", optionTag: "B" },
        { optionText: "erase()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Python’s dict uses which probing method?",
      options: [
        { optionText: "Quadratic Probing", optionTag: "B" },
        { optionText: "Double Hashing", optionTag: "D" },
        { optionText: "Separate Chaining", optionTag: "C" },
        { optionText: "Open Addressing", optionTag: "A" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which function merges two dictionaries?",
      options: [
        { optionText: "merge()", optionTag: "D" },
        { optionText: "append()", optionTag: "C" },
        { optionText: "update()", optionTag: "A" },
        { optionText: "combine()", optionTag: "B" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the result of {'a': 1} == {'a': 1}?",
      options: [
        { optionText: "True", optionTag: "B" },
        { optionText: "False", optionTag: "C" },
        { optionText: "KeyError", optionTag: "A" },
        { optionText: "None", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What data type is returned by dict.values()?",
      options: [
        { optionText: "Set", optionTag: "A" },
        { optionText: "List", optionTag: "C" },
        { optionText: "dict_values", optionTag: "B" },
        { optionText: "Tuple", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is hashing used for?",
      options: [
        { optionText: "Sorting", optionTag: "C" },
        { optionText: "Encrypting data", optionTag: "B" },
        { optionText: "Fast lookup", optionTag: "D" },
        { optionText: "Compression", optionTag: "A" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What will len({}) return?",
      options: [
        { optionText: "0", optionTag: "C" },
        { optionText: "1", optionTag: "D" },
        { optionText: "None", optionTag: "B" },
        { optionText: "Error", optionTag: "A" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Are dictionary keys case-sensitive?",
      options: [
        { optionText: "No", optionTag: "D" },
        { optionText: "Only in Python 2", optionTag: "A" },
        { optionText: "Yes", optionTag: "B" },
        { optionText: "Depends on OS", optionTag: "C" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is the default value returned by dict.get('x')?",
      options: [
        { optionText: "0", optionTag: "A" },
        { optionText: "None", optionTag: "D" },
        { optionText: "False", optionTag: "B" },
        { optionText: "KeyError", optionTag: "C" }
      ],
      correctOption: "D",
      score: 1
    }
  ]
};

export default quizData;