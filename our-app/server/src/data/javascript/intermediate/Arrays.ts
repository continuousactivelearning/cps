import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "JavaScript Arrays - Intermediate Quiz",
  quizLevel: "intermediate",
  lang: "javascript",
  description: "This quiz assesses your intermediate knowledge of Arrays in JavaScript.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Arrays"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the result of `['1', '2', '3'].map(Number)`?",
      options: [
        { optionText: "[1, 2, 3]", optionTag: "A" },
        { optionText: "[NaN, NaN, NaN]", optionTag: "B" },
        { optionText: "['1', '2', '3']", optionTag: "C" },
        { optionText: "[undefined, undefined, undefined]", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which method returns the first element that satisfies a condition?",
      options: [
        { optionText: "filter()", optionTag: "A" },
        { optionText: "find()", optionTag: "B" },
        { optionText: "map()", optionTag: "C" },
        { optionText: "forEach()", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What does `Array.from('123')` return?",
      options: [
        { optionText: "['123']", optionTag: "A" },
        { optionText: "[1, 2, 3]", optionTag: "B" },
        { optionText: "['1', '2', '3']", optionTag: "C" },
        { optionText: "[123]", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which array method changes the original array?",
      options: [
        { optionText: "slice()", optionTag: "A" },
        { optionText: "map()", optionTag: "B" },
        { optionText: "filter()", optionTag: "C" },
        { optionText: "splice()", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What does `arr.flat()` do?",
      options: [
        { optionText: "Converts array to string", optionTag: "A" },
        { optionText: "Flattens nested arrays", optionTag: "B" },
        { optionText: "Sorts the array", optionTag: "C" },
        { optionText: "Reverses the array", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which method is used to merge arrays?",
      options: [
        { optionText: "merge()", optionTag: "A" },
        { optionText: "combine()", optionTag: "B" },
        { optionText: "concat()", optionTag: "C" },
        { optionText: "append()", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "How do you remove the first element from an array?",
      options: [
        { optionText: "arr.pop()", optionTag: "A" },
        { optionText: "arr.shift()", optionTag: "B" },
        { optionText: "arr.splice(0,1)", optionTag: "C" },
        { optionText: "Both B and C", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which method checks if all elements pass a test?",
      options: [
        { optionText: "some()", optionTag: "A" },
        { optionText: "filter()", optionTag: "B" },
        { optionText: "every()", optionTag: "C" },
        { optionText: "reduce()", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is the output of `[1,2,3].reduce((a,b) => a+b)`?",
      options: [
        { optionText: "6", optionTag: "A" },
        { optionText: "[1,2,3]", optionTag: "B" },
        { optionText: "undefined", optionTag: "C" },
        { optionText: "1", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What does `arr.includes(2)` return if 2 is in arr?",
      options: [
        { optionText: "true", optionTag: "A" },
        { optionText: "false", optionTag: "B" },
        { optionText: "2", optionTag: "C" },
        { optionText: "Error", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },

    // Remaining 10 questions
    {
      questionText: "Which method creates a new array with the results of calling a function?",
      options: [
        { optionText: "filter()", optionTag: "A" },
        { optionText: "map()", optionTag: "B" },
        { optionText: "reduce()", optionTag: "C" },
        { optionText: "find()", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is the purpose of `Array.fill()`?",
      options: [
        { optionText: "Fill array with objects", optionTag: "A" },
        { optionText: "Replace elements with a static value", optionTag: "B" },
        { optionText: "Copy elements", optionTag: "C" },
        { optionText: "Generate unique values", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which method sorts the array in ascending order by default?",
      options: [
        { optionText: "sort()", optionTag: "A" },
        { optionText: "order()", optionTag: "B" },
        { optionText: "arrange()", optionTag: "C" },
        { optionText: "sequence()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What does `arr.some(callback)` return?",
      options: [
        { optionText: "true if all elements pass test", optionTag: "A" },
        { optionText: "true if at least one element passes test", optionTag: "B" },
        { optionText: "undefined", optionTag: "C" },
        { optionText: "number of elements", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is returned by `Array.isArray([])`?",
      options: [
        { optionText: "true", optionTag: "A" },
        { optionText: "false", optionTag: "B" },
        { optionText: "undefined", optionTag: "C" },
        { optionText: "null", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How do you get the last item of an array `arr`?",
      options: [
        { optionText: "arr[arr.length - 1]", optionTag: "A" },
        { optionText: "arr[-1]", optionTag: "B" },
        { optionText: "arr.last()", optionTag: "C" },
        { optionText: "arr.getLast()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How to create an array of 5 undefined items?",
      options: [
        { optionText: "new Array(5)", optionTag: "A" },
        { optionText: "[5]", optionTag: "B" },
        { optionText: "[undefined, undefined, undefined, undefined, undefined]", optionTag: "C" },
        { optionText: "array(5)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How to convert an array to a string?",
      options: [
        { optionText: "arr.toString()", optionTag: "A" },
        { optionText: "arr.stringify()", optionTag: "B" },
        { optionText: "arr.toJSON()", optionTag: "C" },
        { optionText: "String(arr)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What does `arr.indexOf(5)` return if 5 is not in array?",
      options: [
        { optionText: "-1", optionTag: "A" },
        { optionText: "null", optionTag: "B" },
        { optionText: "undefined", optionTag: "C" },
        { optionText: "0", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which method creates a shallow copy of array?",
      options: [
        { optionText: "arr.copy()", optionTag: "A" },
        { optionText: "arr.slice()", optionTag: "B" },
        { optionText: "arr.clone()", optionTag: "C" },
        { optionText: "arr.splice()", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    }
  ]
};

export default quizData;