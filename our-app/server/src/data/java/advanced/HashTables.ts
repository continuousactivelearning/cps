import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Java Hash Tables - Advanced Quiz",
  quizLevel: "advanced",
  lang: "java",
  description: "This advanced quiz tests your in-depth knowledge of hash tables, collision handling, hashing functions, and internal mechanisms in Java.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "HashTables"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "Which method is primarily used by Java's HashMap to store keys?",
      options: [
        { optionText: "equals()", optionTag: "A" },
        { optionText: "hashCode()", optionTag: "B" },
        { optionText: "compareTo()", optionTag: "C" },
        { optionText: "clone()", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is the default load factor for a HashMap in Java?",
      options: [
        { optionText: "1.0", optionTag: "A" },
        { optionText: "0.5", optionTag: "B" },
        { optionText: "0.75", optionTag: "C" },
        { optionText: "2.0", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which of the following resolves hash collisions in HashMap?",
      options: [
        { optionText: "Rehashing", optionTag: "A" },
        { optionText: "Separate chaining", optionTag: "B" },
        { optionText: "Quadratic probing", optionTag: "C" },
        { optionText: "Heapification", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which class does HashMap internally use to store a bucket?",
      options: [
        { optionText: "MapNode", optionTag: "A" },
        { optionText: "Entry", optionTag: "B" },
        { optionText: "HashEntry", optionTag: "C" },
        { optionText: "BucketNode", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "If two objects are equal (equals() returns true), what must also be true?",
      options: [
        { optionText: "Their hashCodes must be same", optionTag: "A" },
        { optionText: "They must be from same class", optionTag: "B" },
        { optionText: "Their memory location is same", optionTag: "C" },
        { optionText: "They must not be final", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "When does HashMap switch from linked list to tree for a bucket?",
      options: [
        { optionText: "At 8 elements", optionTag: "A" },
        { optionText: "At 4 elements", optionTag: "B" },
        { optionText: "At 12 elements", optionTag: "C" },
        { optionText: "At 16 elements", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which hashing technique is used by Java HashMap?",
      options: [
        { optionText: "Open addressing", optionTag: "A" },
        { optionText: "Custom hash strategy", optionTag: "B" },
        { optionText: "Separate chaining with balanced tree fallback", optionTag: "C" },
        { optionText: "CRC hashing", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which Java interface must be implemented for a key to be stored in HashMap?",
      options: [
        { optionText: "Comparable", optionTag: "A" },
        { optionText: "Serializable", optionTag: "B" },
        { optionText: "Cloneable", optionTag: "C" },
        { optionText: "None of these", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What does rehashing in HashMap involve?",
      options: [
        { optionText: "Compressing entries", optionTag: "A" },
        { optionText: "Increasing load factor", optionTag: "B" },
        { optionText: "Resizing the array and recalculating hash", optionTag: "C" },
        { optionText: "Rewriting entries in heap", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which method should be overridden along with hashCode() to ensure HashMap works correctly?",
      options: [
        { optionText: "compareTo()", optionTag: "A" },
        { optionText: "equals()", optionTag: "B" },
        { optionText: "toString()", optionTag: "C" },
        { optionText: "finalize()", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "In Java 8+, which data structure is used in place of linked list in hash buckets?",
      options: [
        { optionText: "Heap", optionTag: "A" },
        { optionText: "AVL Tree", optionTag: "B" },
        { optionText: "Red-Black Tree", optionTag: "C" },
        { optionText: "Graph", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "How is thread safety ensured in ConcurrentHashMap?",
      options: [
        { optionText: "Full synchronization", optionTag: "A" },
        { optionText: "Synchronized blocks on buckets", optionTag: "B" },
        { optionText: "Using ReentrantLocks on segments", optionTag: "C" },
        { optionText: "None of these", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which is true about Hashtable?",
      options: [
        { optionText: "It is unsynchronized", optionTag: "A" },
        { optionText: "It allows null keys", optionTag: "B" },
        { optionText: "It is thread-safe", optionTag: "C" },
        { optionText: "It supports concurrent access", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What happens if hashCode() returns same value for different keys?",
      options: [
        { optionText: "They cannot be stored", optionTag: "A" },
        { optionText: "Last inserted will overwrite previous", optionTag: "B" },
        { optionText: "They'll go in same bucket", optionTag: "C" },
        { optionText: "Compile error", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is the expected time complexity for get() in HashMap?",
      options: [
        { optionText: "O(n)", optionTag: "A" },
        { optionText: "O(log n)", optionTag: "B" },
        { optionText: "O(1)", optionTag: "C" },
        { optionText: "O(n log n)", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "How many null keys are allowed in HashMap?",
      options: [
        { optionText: "0", optionTag: "A" },
        { optionText: "1", optionTag: "B" },
        { optionText: "Unlimited", optionTag: "C" },
        { optionText: "2", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which package provides HashMap in Java?",
      options: [
        { optionText: "java.util", optionTag: "A" },
        { optionText: "java.hash", optionTag: "B" },
        { optionText: "java.data", optionTag: "C" },
        { optionText: "java.structures", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the maximum capacity of a HashMap?",
      options: [
        { optionText: "2^32", optionTag: "A" },
        { optionText: "2^20", optionTag: "B" },
        { optionText: "2^30", optionTag: "C" },
        { optionText: "Unlimited", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which of the following allows duplicate keys?",
      options: [
        { optionText: "HashMap", optionTag: "A" },
        { optionText: "TreeMap", optionTag: "B" },
        { optionText: "Hashtable", optionTag: "C" },
        { optionText: "None of these", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which is true regarding hashCode and equals method?",
      options: [
        { optionText: "Only hashCode must be overridden", optionTag: "A" },
        { optionText: "Only equals must be overridden", optionTag: "B" },
        { optionText: "Both must be overridden to avoid issues", optionTag: "C" },
        { optionText: "Neither is needed", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    }
  ]
};

export default quizData;