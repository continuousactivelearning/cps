import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python Hash Tables - Advanced Quiz",
  quizLevel: "advanced",
  lang: "python",
  description: "Assess your mastery of Hash Tables and dictionaries in Python.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Hash Tables",
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the average-case time complexity for inserting into a hash table?",
      options: [
        { optionText: "O(log n)", optionTag: "A" },
        { optionText: "O(1)", optionTag: "B" },
        { optionText: "O(n)", optionTag: "C" },
        { optionText: "O(n log n)", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which Python data type is implemented using hash tables?",
      options: [
        { optionText: "set", optionTag: "A" },
        { optionText: "list", optionTag: "B" },
        { optionText: "tuple", optionTag: "C" },
        { optionText: "array", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What happens when two keys hash to the same index?",
      options: [
        { optionText: "KeyError is raised", optionTag: "A" },
        { optionText: "Hash collision occurs", optionTag: "B" },
        { optionText: "Python restarts", optionTag: "C" },
        { optionText: "Index is discarded", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which method removes all elements from a dictionary?",
      options: [
        { optionText: "delete()", optionTag: "A" },
        { optionText: "remove()", optionTag: "B" },
        { optionText: "clear()", optionTag: "C" },
        { optionText: "pop()", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which collision resolution technique does Python dictionary use?",
      options: [
        { optionText: "Chaining", optionTag: "A" },
        { optionText: "Open Addressing", optionTag: "B" },
        { optionText: "Double Hashing", optionTag: "C" },
        { optionText: "Quadratic Probing", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What does `dict.get('key', default)` return if the key is absent?",
      options: [
        { optionText: "Error", optionTag: "A" },
        { optionText: "None", optionTag: "B" },
        { optionText: "default", optionTag: "C" },
        { optionText: "0", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which of these cannot be used as a dictionary key?",
      options: [
        { optionText: "int", optionTag: "A" },
        { optionText: "list", optionTag: "B" },
        { optionText: "tuple", optionTag: "C" },
        { optionText: "str", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which method returns a list of key-value pairs?",
      options: [
        { optionText: "dict.items()", optionTag: "A" },
        { optionText: "dict.values()", optionTag: "B" },
        { optionText: "dict.keys()", optionTag: "C" },
        { optionText: "dict.pairs()", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What does `dict.setdefault(key, default)` do?",
      options: [
        { optionText: "Sets key to default if absent", optionTag: "A" },
        { optionText: "Deletes key", optionTag: "B" },
        { optionText: "Overrides value", optionTag: "C" },
        { optionText: "Raises KeyError", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which of these is the correct way to remove a key?",
      options: [
        { optionText: "dict.pop(key)", optionTag: "A" },
        { optionText: "dict.remove(key)", optionTag: "B" },
        { optionText: "delete dict[key]", optionTag: "C" },
        { optionText: "dict.clear(key)", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What is the worst-case time complexity of searching in a hash table?",
      options: [
        { optionText: "O(log n)", optionTag: "A" },
        { optionText: "O(n)", optionTag: "B" },
        { optionText: "O(1)", optionTag: "C" },
        { optionText: "O(n log n)", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What does `len(dict)` return?",
      options: [
        { optionText: "Total size of dict", optionTag: "A" },
        { optionText: "Number of keys", optionTag: "B" },
        { optionText: "Length of values", optionTag: "C" },
        { optionText: "Memory usage", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What is the main reason Python dictionaries are fast?",
      options: [
        { optionText: "Tree-based indexing", optionTag: "A" },
        { optionText: "Hashing", optionTag: "B" },
        { optionText: "Sequential access", optionTag: "C" },
        { optionText: "Recursive calls", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which of the following is true for Python dicts?",
      options: [
        { optionText: "Keys must be unique", optionTag: "A" },
        { optionText: "Values must be unique", optionTag: "B" },
        { optionText: "Keys can be mutable", optionTag: "C" },
        { optionText: "Duplicates are allowed", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which of these can be a dictionary value?",
      options: [
        { optionText: "list", optionTag: "A" },
        { optionText: "dict", optionTag: "B" },
        { optionText: "function", optionTag: "C" },
        { optionText: "All of the above", optionTag: "D" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "In a hash table, the hash function is responsible for:",
      options: [
        { optionText: "Sorting keys", optionTag: "A" },
        { optionText: "Mapping keys to indices", optionTag: "B" },
        { optionText: "Comparing values", optionTag: "C" },
        { optionText: "Cloning tables", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which method updates one dictionary with another?",
      options: [
        { optionText: "dict.update()", optionTag: "A" },
        { optionText: "dict.append()", optionTag: "B" },
        { optionText: "dict.merge()", optionTag: "C" },
        { optionText: "dict.set()", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which of the following types are hashable?",
      options: [
        { optionText: "str", optionTag: "A" },
        { optionText: "int", optionTag: "B" },
        { optionText: "tuple", optionTag: "C" },
        { optionText: "All of the above", optionTag: "D" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "Which method is used to retrieve value safely from a dictionary?",
      options: [
        { optionText: "get()", optionTag: "A" },
        { optionText: "index()", optionTag: "B" },
        { optionText: "fetch()", optionTag: "C" },
        { optionText: "search()", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What will be the result of accessing a non-existent key using []?",
      options: [
        { optionText: "None", optionTag: "A" },
        { optionText: "KeyError", optionTag: "B" },
        { optionText: "0", optionTag: "C" },
        { optionText: "False", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    }
  ]
};

export default quizData;