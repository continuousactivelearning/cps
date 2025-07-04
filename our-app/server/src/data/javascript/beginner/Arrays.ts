import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "JavaScript Arrays - Beginner Quiz",
  quizLevel: "beginner",
  lang: "javascript",
  description: "This quiz tests your basic knowledge of Arrays in JavaScript.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Arrays"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the index of the first element in a JavaScript array?",
      options: [
        { optionText: "0", optionTag: "A" },
        { optionText: "1", optionTag: "B" },
        { optionText: "-1", optionTag: "C" },
        { optionText: "Depends on data type", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following correctly declares an array in JavaScript?",
      options: [
        { optionText: "let arr = [];", optionTag: "A" },
        { optionText: "array arr = [];", optionTag: "B" },
        { optionText: "arr = array();", optionTag: "C" },
        { optionText: "let arr = array[];", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How do you find the length of an array in JavaScript?",
      options: [
        { optionText: "arr.length", optionTag: "A" },
        { optionText: "arr.size()", optionTag: "B" },
        { optionText: "length(arr)", optionTag: "C" },
        { optionText: "arr.length()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which method adds an element to the end of an array?",
      options: [
        { optionText: "push()", optionTag: "A" },
        { optionText: "append()", optionTag: "B" },
        { optionText: "add()", optionTag: "C" },
        { optionText: "insert()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which method removes the last element from an array?",
      options: [
        { optionText: "pop()", optionTag: "A" },
        { optionText: "remove()", optionTag: "B" },
        { optionText: "shift()", optionTag: "C" },
        { optionText: "delete()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following is used to join array elements into a string?",
      options: [
        { optionText: "join()", optionTag: "A" },
        { optionText: "merge()", optionTag: "B" },
        { optionText: "toString()", optionTag: "C" },
        { optionText: "concat()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What does arr[1] refer to?",
      options: [
        { optionText: "Second element of the array", optionTag: "A" },
        { optionText: "First element", optionTag: "B" },
        { optionText: "Length of array", optionTag: "C" },
        { optionText: "An array method", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following methods removes the first element from an array?",
      options: [
        { optionText: "shift()", optionTag: "A" },
        { optionText: "pop()", optionTag: "B" },
        { optionText: "removeFirst()", optionTag: "C" },
        { optionText: "splice()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How do you check if a variable is an array?",
      options: [
        { optionText: "Array.isArray(var)", optionTag: "A" },
        { optionText: "var.isArray()", optionTag: "B" },
        { optionText: "typeof var === 'array'", optionTag: "C" },
        { optionText: "checkArray(var)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which method creates a shallow copy of part of an array?",
      options: [
        { optionText: "slice()", optionTag: "A" },
        { optionText: "splice()", optionTag: "B" },
        { optionText: "copy()", optionTag: "C" },
        { optionText: "split()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How do you loop through array elements?",
      options: [
        { optionText: "for loop", optionTag: "A" },
        { optionText: "forEach()", optionTag: "B" },
        { optionText: "for...of", optionTag: "C" },
        { optionText: "All of the above", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which method combines two arrays?",
      options: [
        { optionText: "concat()", optionTag: "A" },
        { optionText: "combine()", optionTag: "B" },
        { optionText: "merge()", optionTag: "C" },
        { optionText: "append()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the result of typeof [] in JavaScript?",
      options: [
        { optionText: "'object'", optionTag: "A" },
        { optionText: "'array'", optionTag: "B" },
        { optionText: "'list'", optionTag: "C" },
        { optionText: "'undefined'", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which array method modifies the original array?",
      options: [
        { optionText: "splice()", optionTag: "A" },
        { optionText: "slice()", optionTag: "B" },
        { optionText: "map()", optionTag: "C" },
        { optionText: "filter()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which method removes elements based on condition and returns a new array?",
      options: [
        { optionText: "filter()", optionTag: "A" },
        { optionText: "map()", optionTag: "B" },
        { optionText: "reduce()", optionTag: "C" },
        { optionText: "pop()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which method returns the index of the first occurrence of an element?",
      options: [
        { optionText: "indexOf()", optionTag: "A" },
        { optionText: "find()", optionTag: "B" },
        { optionText: "search()", optionTag: "C" },
        { optionText: "position()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which method tests whether at least one element passes the test?",
      options: [
        { optionText: "some()", optionTag: "A" },
        { optionText: "every()", optionTag: "B" },
        { optionText: "includes()", optionTag: "C" },
        { optionText: "find()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which method checks if an array includes a certain value?",
      options: [
        { optionText: "includes()", optionTag: "A" },
        { optionText: "has()", optionTag: "B" },
        { optionText: "exist()", optionTag: "C" },
        { optionText: "contains()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What does arr.length return?",
      options: [
        { optionText: "Total number of elements", optionTag: "A" },
        { optionText: "Last index", optionTag: "B" },
        { optionText: "Size in bytes", optionTag: "C" },
        { optionText: "Undefined", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What happens if you access arr[10] on a 5-element array?",
      options: [
        { optionText: "Returns undefined", optionTag: "A" },
        { optionText: "Throws error", optionTag: "B" },
        { optionText: "Returns 0", optionTag: "C" },
        { optionText: "Returns false", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    }
  ]
};

export default quizData;