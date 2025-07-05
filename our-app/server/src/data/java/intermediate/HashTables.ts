import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Java Hash Tables - Intermediate Quiz",
  quizLevel: "intermediate",
  lang: "java",
  description: "This quiz evaluates your understanding of Hash Tables and their implementation in Java.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "HashTables"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the time complexity of inserting an element into a HashMap in the average case?",
      options: [
        { optionText: "O(1)", optionTag: "A" },
        { optionText: "O(log n)", optionTag: "B" },
        { optionText: "O(n)", optionTag: "C" },
        { optionText: "O(n log n)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which method is used to check if a key exists in a HashMap?",
      options: [
        { optionText: "hasKey()", optionTag: "A" },
        { optionText: "contains()", optionTag: "B" },
        { optionText: "containsKey()", optionTag: "C" },
        { optionText: "exists()", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What does the `put()` method return in a HashMap if the key was already present?",
      options: [
        { optionText: "The new value", optionTag: "A" },
        { optionText: "The previous value associated with the key", optionTag: "B" },
        { optionText: "null", optionTag: "C" },
        { optionText: "A boolean indicating success", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which of these classes implement the Map interface?",
      options: [
        { optionText: "TreeSet", optionTag: "A" },
        { optionText: "HashSet", optionTag: "B" },
        { optionText: "HashMap", optionTag: "C" },
        { optionText: "ArrayList", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "In Java, what is the default load factor of a HashMap?",
      options: [
        { optionText: "0.5", optionTag: "A" },
        { optionText: "0.75", optionTag: "B" },
        { optionText: "1.0", optionTag: "C" },
        { optionText: "2.0", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "How does HashMap handle collisions internally?",
      options: [
        { optionText: "Chaining with LinkedList or Tree", optionTag: "A" },
        { optionText: "Replacing the value", optionTag: "B" },
        { optionText: "Creating a new hash function", optionTag: "C" },
        { optionText: "Skipping the key", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which method is used to retrieve a value in HashMap?",
      options: [
        { optionText: "getValue()", optionTag: "A" },
        { optionText: "find()", optionTag: "B" },
        { optionText: "get()", optionTag: "C" },
        { optionText: "search()", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which data structure is used behind Java's HashMap?",
      options: [
        { optionText: "Array", optionTag: "A" },
        { optionText: "Array of LinkedList/Binary Tree", optionTag: "B" },
        { optionText: "Queue", optionTag: "C" },
        { optionText: "Stack", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which method removes a key-value pair in a HashMap?",
      options: [
        { optionText: "delete()", optionTag: "A" },
        { optionText: "removeKey()", optionTag: "B" },
        { optionText: "erase()", optionTag: "C" },
        { optionText: "remove()", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What is the worst-case time complexity of search in a HashMap?",
      options: [
        { optionText: "O(1)", optionTag: "A" },
        { optionText: "O(n)", optionTag: "B" },
        { optionText: "O(log n)", optionTag: "C" },
        { optionText: "O(n log n)", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which Java package contains the HashMap class?",
      options: [
        { optionText: "java.util", optionTag: "A" },
        { optionText: "java.map", optionTag: "B" },
        { optionText: "java.ds", optionTag: "C" },
        { optionText: "java.structure", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How does Java compute the index in a HashMap?",
      options: [
        { optionText: "By key.toString()", optionTag: "A" },
        { optionText: "By memory address", optionTag: "B" },
        { optionText: "By key.hashCode()", optionTag: "C" },
        { optionText: "By reference", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What happens if two keys have the same hash code?",
      options: [
        { optionText: "One will overwrite the other", optionTag: "A" },
        { optionText: "An exception is thrown", optionTag: "B" },
        { optionText: "Collision resolution handles it", optionTag: "C" },
        { optionText: "Nothing; only one will be stored", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which collection maintains insertion order?",
      options: [
        { optionText: "HashMap", optionTag: "A" },
        { optionText: "TreeMap", optionTag: "B" },
        { optionText: "LinkedHashMap", optionTag: "C" },
        { optionText: "HashTable", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "How to get only keys from a HashMap?",
      options: [
        { optionText: "map.keyList()", optionTag: "A" },
        { optionText: "map.getKeys()", optionTag: "B" },
        { optionText: "map.keySet()", optionTag: "C" },
        { optionText: "map.getKeySet()", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which is synchronized: HashMap or Hashtable?",
      options: [
        { optionText: "Both", optionTag: "A" },
        { optionText: "Hashtable only", optionTag: "B" },
        { optionText: "HashMap only", optionTag: "C" },
        { optionText: "Neither", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is returned by get() if the key does not exist?",
      options: [
        { optionText: "false", optionTag: "A" },
        { optionText: "0", optionTag: "B" },
        { optionText: "null", optionTag: "C" },
        { optionText: "exception", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "How can you iterate over all entries in a HashMap?",
      options: [
        { optionText: "Using entrySet()", optionTag: "A" },
        { optionText: "Using index", optionTag: "B" },
        { optionText: "Using get()", optionTag: "C" },
        { optionText: "Using find()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which method returns the number of key-value pairs in a HashMap?",
      options: [
        { optionText: "size()", optionTag: "A" },
        { optionText: "count()", optionTag: "B" },
        { optionText: "length()", optionTag: "C" },
        { optionText: "getLength()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Is null allowed as a key in HashMap?",
      options: [
        { optionText: "Yes, only one", optionTag: "A" },
        { optionText: "Yes, unlimited", optionTag: "B" },
        { optionText: "No", optionTag: "C" },
        { optionText: "Only in Java 11+", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    }
  ]
};

export default quizData;