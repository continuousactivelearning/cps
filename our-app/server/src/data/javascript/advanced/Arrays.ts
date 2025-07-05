import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "JavaScript Arrays - Advanced Quiz",
  quizLevel: "advanced",
  lang: "javascript",
  description: "This advanced quiz challenges your understanding of complex array operations and behaviors in JavaScript.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Arrays"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What will be the output of `[1, 2, 3].reduce((a, b) => a + b, 0)`?",
      options: [
        { optionText: "6", optionTag: "A" },
        { optionText: "123", optionTag: "B" },
        { optionText: "NaN", optionTag: "C" },
        { optionText: "undefined", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which method returns a shallow copy of a portion of an array?",
      options: [
        { optionText: "slice()", optionTag: "A" },
        { optionText: "splice()", optionTag: "B" },
        { optionText: "copy()", optionTag: "C" },
        { optionText: "extract()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How do you remove the first element from an array?",
      options: [
        { optionText: "shift()", optionTag: "A" },
        { optionText: "pop()", optionTag: "B" },
        { optionText: "splice(0, 1)", optionTag: "C" },
        { optionText: "Both A and C", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What does `Array.from(new Set([1,2,2,3]))` return?",
      options: [
        { optionText: "[1, 2, 3]", optionTag: "A" },
        { optionText: "[1, 2, 2, 3]", optionTag: "B" },
        { optionText: "Set(3) {1, 2, 3}", optionTag: "C" },
        { optionText: "Error", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How can you flatten a nested array [1, [2, [3, 4]]] to depth 2?",
      options: [
        { optionText: "[1, 2, 3, 4] using flat(2)", optionTag: "A" },
        { optionText: "[1, [2, [3, 4]]]", optionTag: "B" },
        { optionText: "[1, 2, [3, 4]]", optionTag: "C" },
        { optionText: "flatMap()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which array method would you use to sort objects by a numeric property?",
      options: [
        { optionText: "sort((a, b) => a.age - b.age)", optionTag: "A" },
        { optionText: "sort(a.age)", optionTag: "B" },
        { optionText: "compare(a, b)", optionTag: "C" },
        { optionText: "order()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the result of `[...Array(3)]`?",
      options: [
        { optionText: "[undefined, undefined, undefined]", optionTag: "A" },
        { optionText: "[null, null, null]", optionTag: "B" },
        { optionText: "[]", optionTag: "C" },
        { optionText: "SyntaxError", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "`Array(2).fill(5)` returns?",
      options: [
        { optionText: "[5, 5]", optionTag: "A" },
        { optionText: "[2, 2, 2, 2, 2]", optionTag: "B" },
        { optionText: "[undefined, undefined]", optionTag: "C" },
        { optionText: "[null, null]", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What does `[].map.call('123', Number)` return?",
      options: [
        { optionText: "[1, 2, 3]", optionTag: "A" },
        { optionText: "[123]", optionTag: "B" },
        { optionText: "[1, NaN, NaN]", optionTag: "C" },
        { optionText: "[NaN, NaN, NaN]", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "`arr.concat().reverse()` returns?",
      options: [
        { optionText: "A reversed copy of arr", optionTag: "A" },
        { optionText: "Original arr reversed", optionTag: "B" },
        { optionText: "Empty array", optionTag: "C" },
        { optionText: "arr unchanged", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },

    // Additional 10
    {
      questionText: "Which function can deeply clone an array with nested objects?",
      options: [
        { optionText: "structuredClone()", optionTag: "A" },
        { optionText: "JSON.parse(JSON.stringify())", optionTag: "B" },
        { optionText: "slice()", optionTag: "C" },
        { optionText: "Both A and B", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "`arr.findIndex(x => x > 10)` returns?",
      options: [
        { optionText: "First index with value > 10", optionTag: "A" },
        { optionText: "Last index > 10", optionTag: "B" },
        { optionText: "true/false", optionTag: "C" },
        { optionText: "undefined", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which method mutates the original array?",
      options: [
        { optionText: "splice()", optionTag: "A" },
        { optionText: "map()", optionTag: "B" },
        { optionText: "filter()", optionTag: "C" },
        { optionText: "slice()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "`Array.prototype.every()` returns?",
      options: [
        { optionText: "true if all elements pass the test", optionTag: "A" },
        { optionText: "true if any element passes the test", optionTag: "B" },
        { optionText: "false if one passes", optionTag: "C" },
        { optionText: "An array of passed items", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What does `Array.isArray({})` return?",
      options: [
        { optionText: "false", optionTag: "A" },
        { optionText: "true", optionTag: "B" },
        { optionText: "undefined", optionTag: "C" },
        { optionText: "throws error", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How to check if array includes NaN?",
      options: [
        { optionText: "arr.includes(NaN)", optionTag: "A" },
        { optionText: "arr.indexOf(NaN)", optionTag: "B" },
        { optionText: "arr.find(NaN)", optionTag: "C" },
        { optionText: "arr.contains(NaN)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "`flatMap()` is best used when?",
      options: [
        { optionText: "You need to map and flatten", optionTag: "A" },
        { optionText: "Just map", optionTag: "B" },
        { optionText: "Just flatten", optionTag: "C" },
        { optionText: "To reverse array", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which array method removes and returns the last element?",
      options: [
        { optionText: "pop()", optionTag: "A" },
        { optionText: "shift()", optionTag: "B" },
        { optionText: "splice()", optionTag: "C" },
        { optionText: "removeLast()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "`[1,2].push([3,4])` returns?",
      options: [
        { optionText: "3", optionTag: "A" },
        { optionText: "[1, 2, [3,4]]", optionTag: "B" },
        { optionText: "Error", optionTag: "C" },
        { optionText: "4", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is `Array.of(1,2,3)`?",
      options: [
        { optionText: "[1,2,3]", optionTag: "A" },
        { optionText: "Array(3)", optionTag: "B" },
        { optionText: "undefined", optionTag: "C" },
        { optionText: "null", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    }
  ]
};

export default quizData;