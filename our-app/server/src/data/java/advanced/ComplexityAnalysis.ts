import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Java Complexity Analysis - Advanced Quiz",
  quizLevel: "advanced",
  lang: "java",
  description: "This quiz tests your advanced understanding of complexity analysis in Java and algorithmic thinking.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "ComplexityAnalysis"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the time complexity of inserting an element in a HashMap with proper hash function?",
      options: [
        { optionText: "O(1)", optionTag: "A" },
        { optionText: "O(log n)", optionTag: "B" },
        { optionText: "O(n)", optionTag: "C" },
        { optionText: "O(n log n)", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which notation denotes the best case complexity?",
      options: [
        { optionText: "Θ (Theta)", optionTag: "A" },
        { optionText: "Ω (Omega)", optionTag: "B" },
        { optionText: "O (Big-O)", optionTag: "C" },
        { optionText: "Δ (Delta)", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which of the following sorting algorithms has O(n^2) worst case complexity?",
      options: [
        { optionText: "Quick Sort", optionTag: "A" },
        { optionText: "Merge Sort", optionTag: "B" },
        { optionText: "Heap Sort", optionTag: "C" },
        { optionText: "Bubble Sort", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which operation has O(n) complexity in an ArrayList?",
      options: [
        { optionText: "Get element by index", optionTag: "A" },
        { optionText: "Add element at end", optionTag: "B" },
        { optionText: "Remove element at beginning", optionTag: "C" },
        { optionText: "Check size", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is the space complexity of Merge Sort?",
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
      questionText: "Which data structure provides O(log n) insertion time?",
      options: [
        { optionText: "HashMap", optionTag: "A" },
        { optionText: "ArrayList", optionTag: "B" },
        { optionText: "TreeMap", optionTag: "C" },
        { optionText: "LinkedList", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is the worst-case time complexity of Quick Sort?",
      options: [
        { optionText: "O(n log n)", optionTag: "A" },
        { optionText: "O(n)", optionTag: "B" },
        { optionText: "O(n^2)", optionTag: "C" },
        { optionText: "O(log n)", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which of the following is not a valid asymptotic notation?",
      options: [
        { optionText: "O", optionTag: "A" },
        { optionText: "Θ", optionTag: "B" },
        { optionText: "Φ", optionTag: "C" },
        { optionText: "Ω", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Amortized analysis is most commonly applied in which scenario?",
      options: [
        { optionText: "Hashing", optionTag: "A" },
        { optionText: "Dynamic Arrays", optionTag: "B" },
        { optionText: "Binary Search", optionTag: "C" },
        { optionText: "Tree traversal", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is the average time complexity of searching in a Binary Search Tree?",
      options: [
        { optionText: "O(n)", optionTag: "A" },
        { optionText: "O(log n)", optionTag: "B" },
        { optionText: "O(n log n)", optionTag: "C" },
        { optionText: "O(1)", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which of the following best describes time complexity?",
      options: [
        { optionText: "Rate at which memory is allocated", optionTag: "A" },
        { optionText: "Rate at which input increases", optionTag: "B" },
        { optionText: "Growth of runtime with input size", optionTag: "C" },
        { optionText: "Stack usage", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which notation gives the upper bound of algorithm performance?",
      options: [
        { optionText: "Θ", optionTag: "A" },
        { optionText: "Ω", optionTag: "B" },
        { optionText: "O", optionTag: "C" },
        { optionText: "μ", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which data structure has O(1) access time?",
      options: [
        { optionText: "Array", optionTag: "A" },
        { optionText: "LinkedList", optionTag: "B" },
        { optionText: "Stack", optionTag: "C" },
        { optionText: "Tree", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which algorithm is the best for finding the k-th smallest element?",
      options: [
        { optionText: "QuickSelect", optionTag: "A" },
        { optionText: "Binary Search", optionTag: "B" },
        { optionText: "Heap Sort", optionTag: "C" },
        { optionText: "Bubble Sort", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the Big-O complexity of checking if an element exists in a balanced BST?",
      options: [
        { optionText: "O(n)", optionTag: "A" },
        { optionText: "O(log n)", optionTag: "B" },
        { optionText: "O(1)", optionTag: "C" },
        { optionText: "O(n log n)", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is the purpose of Big-O notation?",
      options: [
        { optionText: "To describe actual running time", optionTag: "A" },
        { optionText: "To estimate worst-case complexity", optionTag: "B" },
        { optionText: "To determine best case", optionTag: "C" },
        { optionText: "To find memory usage", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "In Java, accessing an element in an array takes?",
      options: [
        { optionText: "O(n)", optionTag: "A" },
        { optionText: "O(log n)", optionTag: "B" },
        { optionText: "O(1)", optionTag: "C" },
        { optionText: "O(n^2)", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which of these notations indicates both upper and lower bounds?",
      options: [
        { optionText: "O", optionTag: "A" },
        { optionText: "Ω", optionTag: "B" },
        { optionText: "Θ", optionTag: "C" },
        { optionText: "Σ", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "If an algorithm has complexity O(n^2), what does it imply?",
      options: [
        { optionText: "Runtime grows linearly", optionTag: "A" },
        { optionText: "Runtime grows exponentially", optionTag: "B" },
        { optionText: "Runtime grows quadratically", optionTag: "C" },
        { optionText: "Runtime stays constant", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which notation represents lower bound of algorithm?",
      options: [
        { optionText: "Ω", optionTag: "A" },
        { optionText: "Θ", optionTag: "B" },
        { optionText: "O", optionTag: "C" },
        { optionText: "π", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    }
  ]
};

export default quizData;