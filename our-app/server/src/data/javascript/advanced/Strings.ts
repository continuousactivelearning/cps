import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "JavaScript Strings - Advanced Quiz",
  quizLevel: "advanced",
  lang: "javascript",
  description: "This quiz tests your advanced understanding of string manipulation, methods, and patterns in JavaScript.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Strings"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "Which method can be used to check if a string contains a substring in JavaScript?",
      options: [
        { optionText: "includes()", optionTag: "A" },
        { optionText: "contains()", optionTag: "B" },
        { optionText: "matchAll()", optionTag: "C" },
        { optionText: "indexOf() > 0", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which string method returns a new string with some or all matches replaced?",
      options: [
        { optionText: "replace()", optionTag: "A" },
        { optionText: "splice()", optionTag: "B" },
        { optionText: "match()", optionTag: "C" },
        { optionText: "slice()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How do you remove whitespace from both ends of a string?",
      options: [
        { optionText: "trim()", optionTag: "A" },
        { optionText: "strip()", optionTag: "B" },
        { optionText: "slice()", optionTag: "C" },
        { optionText: "split()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What does the method padStart() do?",
      options: [
        { optionText: "Pads the string from the start", optionTag: "A" },
        { optionText: "Removes characters from start", optionTag: "B" },
        { optionText: "Adds characters to the end", optionTag: "C" },
        { optionText: "Splits the string", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which method converts a string into an array of substrings?",
      options: [
        { optionText: "split()", optionTag: "A" },
        { optionText: "slice()", optionTag: "B" },
        { optionText: "splice()", optionTag: "C" },
        { optionText: "substr()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How can you compare two strings ignoring case?",
      options: [
        { optionText: "str1.toLowerCase() === str2.toLowerCase()", optionTag: "A" },
        { optionText: "str1 == str2", optionTag: "B" },
        { optionText: "str1.compareTo(str2)", optionTag: "C" },
        { optionText: "str1.equalsIgnoreCase(str2)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What does str.substring(1, 4) return for 'hello'?",
      options: [
        { optionText: "'ell'", optionTag: "A" },
        { optionText: "'hel'", optionTag: "B" },
        { optionText: "'llo'", optionTag: "C" },
        { optionText: "'elo'", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which method checks if a string starts with a given substring?",
      options: [
        { optionText: "startsWith()", optionTag: "A" },
        { optionText: "beginsWith()", optionTag: "B" },
        { optionText: "init()", optionTag: "C" },
        { optionText: "isStarting()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How do you count the number of occurrences of a character in a string?",
      options: [
        { optionText: "Use regex with match()", optionTag: "A" },
        { optionText: "charCount()", optionTag: "B" },
        { optionText: "searchAll()", optionTag: "C" },
        { optionText: "filter()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What does 'hello'.charAt(1) return?",
      options: [
        { optionText: "'e'", optionTag: "A" },
        { optionText: "'h'", optionTag: "B" },
        { optionText: "'l'", optionTag: "C" },
        { optionText: "'o'", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },

    // 10 more questions
    {
      questionText: "Which method is used to check if a string ends with a specific value?",
      options: [
        { optionText: "endsWith()", optionTag: "A" },
        { optionText: "finishWith()", optionTag: "B" },
        { optionText: "isEnding()", optionTag: "C" },
        { optionText: "matches()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How to reverse a string in JavaScript?",
      options: [
        { optionText: "split('').reverse().join('')", optionTag: "A" },
        { optionText: "reverse(str)", optionTag: "B" },
        { optionText: "str.reverse()", optionTag: "C" },
        { optionText: "str[::-1]", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which method can be used to extract a portion of a string?",
      options: [
        { optionText: "slice()", optionTag: "A" },
        { optionText: "cut()", optionTag: "B" },
        { optionText: "chop()", optionTag: "C" },
        { optionText: "extract()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What will 'abc'.repeat(2) return?",
      options: [
        { optionText: "'abcabc'", optionTag: "A" },
        { optionText: "'abc'", optionTag: "B" },
        { optionText: "'aabbcc'", optionTag: "C" },
        { optionText: "'abc2'", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What does 'JavaScript'.indexOf('S') return?",
      options: [
        { optionText: "4", optionTag: "A" },
        { optionText: "5", optionTag: "B" },
        { optionText: "3", optionTag: "C" },
        { optionText: "-1", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which string method uses regular expressions?",
      options: [
        { optionText: "match()", optionTag: "A" },
        { optionText: "split()", optionTag: "B" },
        { optionText: "length", optionTag: "C" },
        { optionText: "charAt()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the result of '  JS  '.trim()?",
      options: [
        { optionText: "'JS'", optionTag: "A" },
        { optionText: "'  JS  '", optionTag: "B" },
        { optionText: "'JS  '", optionTag: "C" },
        { optionText: "'  JS'", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What does String.raw do?",
      options: [
        { optionText: "Preserves backslashes and escapes", optionTag: "A" },
        { optionText: "Removes formatting", optionTag: "B" },
        { optionText: "Concatenates raw strings", optionTag: "C" },
        { optionText: "Removes whitespaces", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How to check if a string contains only digits?",
      options: [
        { optionText: "/^\\d+$/.test(str)", optionTag: "A" },
        { optionText: "str.isDigit()", optionTag: "B" },
        { optionText: "isNaN(str)", optionTag: "C" },
        { optionText: "str == Number", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What does 'a+b+c'.split('+').length return?",
      options: [
        { optionText: "3", optionTag: "A" },
        { optionText: "2", optionTag: "B" },
        { optionText: "4", optionTag: "C" },
        { optionText: "0", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    }
  ]
};

export default quizData;