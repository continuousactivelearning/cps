import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python Hash Tables - Intermediate Quiz",
  quizLevel: "intermediate",
  lang: "python",
  description: "Test your understanding of hash tables and dictionary operations in Python.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "HashTables"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "Which built-in Python data structure is used to implement hash tables?",
      options: [
        { optionText: "Set", optionTag: "A" },
        { optionText: "List", optionTag: "B" },
        { optionText: "Dictionary", optionTag: "C" },
        { optionText: "Tuple", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is the time complexity of inserting a key-value pair into a Python dictionary?",
      options: [
        { optionText: "O(n)", optionTag: "A" },
        { optionText: "O(1)", optionTag: "B" },
        { optionText: "O(log n)", optionTag: "C" },
        { optionText: "O(n log n)", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What will be the result of accessing a non-existing key in a dictionary?",
      options: [
        { optionText: "None", optionTag: "C" },
        { optionText: "KeyError", optionTag: "A" },
        { optionText: "0", optionTag: "D" },
        { optionText: "False", optionTag: "B" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which method can safely retrieve a value for a key in a dictionary?",
      options: [
        { optionText: "dict.pull()", optionTag: "D" },
        { optionText: "dict.fetch()", optionTag: "C" },
        { optionText: "dict.get()", optionTag: "A" },
        { optionText: "dict.pop()", optionTag: "B" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which data types can be used as keys in a dictionary?",
      options: [
        { optionText: "Mutable types", optionTag: "D" },
        { optionText: "Only integers", optionTag: "B" },
        { optionText: "Hashable types", optionTag: "C" },
        { optionText: "Lists", optionTag: "A" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What will `dict.keys()` return?",
      options: [
        { optionText: "List of key-value pairs", optionTag: "D" },
        { optionText: "View object of keys", optionTag: "B" },
        { optionText: "List of values", optionTag: "C" },
        { optionText: "String of keys", optionTag: "A" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which operation will remove an item from a dictionary?",
      options: [
        { optionText: "dict.delete()", optionTag: "A" },
        { optionText: "dict.pop(key)", optionTag: "C" },
        { optionText: "dict.erase(key)", optionTag: "D" },
        { optionText: "dict.pull()", optionTag: "B" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "How can you merge two dictionaries in Python 3.9+?",
      options: [
        { optionText: "dict1 & dict2", optionTag: "B" },
        { optionText: "dict1.update(dict2)", optionTag: "D" },
        { optionText: "dict1 | dict2", optionTag: "A" },
        { optionText: "dict1 + dict2", optionTag: "C" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which is NOT a valid dictionary method?",
      options: [
        { optionText: "clear()", optionTag: "B" },
        { optionText: "has_key()", optionTag: "D" },
        { optionText: "popitem()", optionTag: "C" },
        { optionText: "values()", optionTag: "A" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What does `dict.popitem()` do?",
      options: [
        { optionText: "Removes an arbitrary key-value pair", optionTag: "C" },
        { optionText: "Clears dictionary", optionTag: "A" },
        { optionText: "Removes all keys", optionTag: "D" },
        { optionText: "Returns value only", optionTag: "B" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What does `setdefault(key, default)` do?",
      options: [
        { optionText: "Deletes the key", optionTag: "C" },
        { optionText: "Sets key with default if not exists", optionTag: "B" },
        { optionText: "Always sets new value", optionTag: "A" },
        { optionText: "Throws KeyError", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which of the following is True?",
      options: [
        { optionText: "Dictionaries are ordered in Python 2", optionTag: "D" },
        { optionText: "Dictionaries allow duplicate keys", optionTag: "A" },
        { optionText: "Dictionaries are unordered before Python 3.7", optionTag: "B" },
        { optionText: "Keys must be strings", optionTag: "C" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which built-in function gives the number of items in a dictionary?",
      options: [
        { optionText: "len()", optionTag: "A" },
        { optionText: "size()", optionTag: "D" },
        { optionText: "count()", optionTag: "C" },
        { optionText: "length()", optionTag: "B" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What will be the result of `{1: 'a', 1: 'b'}`?",
      options: [
        { optionText: "{1: 'b'}", optionTag: "C" },
        { optionText: "{1: 'a', 1: 'b'}", optionTag: "B" },
        { optionText: "Error", optionTag: "D" },
        { optionText: "None", optionTag: "A" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What happens if you use a list as a key?",
      options: [
        { optionText: "Works fine", optionTag: "A" },
        { optionText: "Raises TypeError", optionTag: "B" },
        { optionText: "Converts to string", optionTag: "D" },
        { optionText: "Stores as a value", optionTag: "C" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which method returns all values from a dictionary?",
      options: [
        { optionText: "values()", optionTag: "A" },
        { optionText: "get_values()", optionTag: "D" },
        { optionText: "items()", optionTag: "C" },
        { optionText: "keys()", optionTag: "B" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How do you check if a key exists in a dictionary?",
      options: [
        { optionText: "'key' in dict", optionTag: "C" },
        { optionText: "dict.has_key()", optionTag: "A" },
        { optionText: "dict.contains(key)", optionTag: "B" },
        { optionText: "'key' exists dict", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What does `update()` method do?",
      options: [
        { optionText: "Adds new keys and updates existing ones", optionTag: "B" },
        { optionText: "Clears dictionary", optionTag: "D" },
        { optionText: "Returns new dictionary", optionTag: "C" },
        { optionText: "Removes duplicates", optionTag: "A" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which is true about keys in dictionaries?",
      options: [
        { optionText: "Can be mutable", optionTag: "C" },
        { optionText: "Must be unique", optionTag: "D" },
        { optionText: "Can have None type", optionTag: "B" },
        { optionText: "Can be a list", optionTag: "A" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What will be the output of `dict.get('missing', 0)` if 'missing' is not a key?",
      options: [
        { optionText: "KeyError", optionTag: "D" },
        { optionText: "None", optionTag: "A" },
        { optionText: "0", optionTag: "B" },
        { optionText: "Error", optionTag: "C" }
      ],
      correctOption: "B",
      score: 1
    }
  ]
};

export default quizData;