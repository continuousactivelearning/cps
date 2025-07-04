import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Java Pointers - Beginner Quiz",
  quizLevel: "beginner",
  lang: "java",
  description: "This quiz tests your understanding of references and memory addressing concepts in Java.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Pointers"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "Does Java support pointers like C/C++?",
      options: [
        { optionText: "No", optionTag: "A" },
        { optionText: "Yes", optionTag: "B" },
        { optionText: "Only in Java 11", optionTag: "C" },
        { optionText: "Only for arrays", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "In Java, what is used instead of pointers?",
      options: [
        { optionText: "References", optionTag: "A" },
        { optionText: "Direct Memory Address", optionTag: "B" },
        { optionText: "Handles", optionTag: "C" },
        { optionText: "Pointers", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following is true about Java references?",
      options: [
        { optionText: "They do not expose memory addresses", optionTag: "A" },
        { optionText: "They are the same as pointers in C", optionTag: "B" },
        { optionText: "They allow pointer arithmetic", optionTag: "C" },
        { optionText: "They use & and * operators", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Why are pointers not allowed in Java?",
      options: [
        { optionText: "For safety and simplicity", optionTag: "A" },
        { optionText: "To make Java faster", optionTag: "B" },
        { optionText: "To support multiple inheritance", optionTag: "C" },
        { optionText: "To support multithreading", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which keyword in Java is used to create object references?",
      options: [
        { optionText: "new", optionTag: "A" },
        { optionText: "this", optionTag: "B" },
        { optionText: "ref", optionTag: "C" },
        { optionText: "object", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Can you perform pointer arithmetic in Java?",
      options: [
        { optionText: "No", optionTag: "A" },
        { optionText: "Yes", optionTag: "B" },
        { optionText: "Only in special cases", optionTag: "C" },
        { optionText: "Only in arrays", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the default value of an uninitialized object reference in Java?",
      options: [
        { optionText: "null", optionTag: "A" },
        { optionText: "0", optionTag: "B" },
        { optionText: "undefined", optionTag: "C" },
        { optionText: "empty", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What happens if you try to use a null reference?",
      options: [
        { optionText: "NullPointerException", optionTag: "A" },
        { optionText: "ReferenceError", optionTag: "B" },
        { optionText: "Segmentation Fault", optionTag: "C" },
        { optionText: "TypeError", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which method is used to compare two references in Java?",
      options: [
        { optionText: "== operator", optionTag: "A" },
        { optionText: "equals()", optionTag: "B" },
        { optionText: "compareTo()", optionTag: "C" },
        { optionText: "Both A and B", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What does 'this' keyword refer to in Java?",
      options: [
        { optionText: "Current object", optionTag: "A" },
        { optionText: "Parent class", optionTag: "B" },
        { optionText: "Global variable", optionTag: "C" },
        { optionText: "Local class", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Can Java methods return object references?",
      options: [
        { optionText: "Yes", optionTag: "A" },
        { optionText: "No", optionTag: "B" },
        { optionText: "Only for arrays", optionTag: "C" },
        { optionText: "Only in static methods", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What will 'null' reference do in Java?",
      options: [
        { optionText: "Indicates no reference", optionTag: "A" },
        { optionText: "Refers to a memory address", optionTag: "B" },
        { optionText: "Causes compile error", optionTag: "C" },
        { optionText: "Indicates an error object", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Are references automatically garbage collected in Java?",
      options: [
        { optionText: "Yes", optionTag: "A" },
        { optionText: "No", optionTag: "B" },
        { optionText: "Only for static objects", optionTag: "C" },
        { optionText: "Only if explicitly deleted", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How do you check if a reference is null in Java?",
      options: [
        { optionText: "if (ref == null)", optionTag: "A" },
        { optionText: "if (ref is null)", optionTag: "B" },
        { optionText: "if (ref === null)", optionTag: "C" },
        { optionText: "if (ref != 0)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What does '==' compare in case of object references?",
      options: [
        { optionText: "Memory addresses", optionTag: "A" },
        { optionText: "Values", optionTag: "B" },
        { optionText: "Types", optionTag: "C" },
        { optionText: "Hash codes", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Can we assign one object reference to another in Java?",
      options: [
        { optionText: "Yes", optionTag: "A" },
        { optionText: "No", optionTag: "B" },
        { optionText: "Only in static methods", optionTag: "C" },
        { optionText: "Only if it is final", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which exception is thrown if you try to access a method on null reference?",
      options: [
        { optionText: "NullPointerException", optionTag: "A" },
        { optionText: "ArrayIndexOutOfBoundsException", optionTag: "B" },
        { optionText: "IllegalArgumentException", optionTag: "C" },
        { optionText: "NumberFormatException", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is a reference variable?",
      options: [
        { optionText: "A variable that stores the address of an object", optionTag: "A" },
        { optionText: "A variable that stores primitive value", optionTag: "B" },
        { optionText: "A pointer to a function", optionTag: "C" },
        { optionText: "A method to call objects", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of these is not a feature of Java references?",
      options: [
        { optionText: "Direct memory manipulation", optionTag: "A" },
        { optionText: "Automatic garbage collection", optionTag: "B" },
        { optionText: "Safe memory access", optionTag: "C" },
        { optionText: "Reference assignment", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    }
  ]
};

export default quizData;