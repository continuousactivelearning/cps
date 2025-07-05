// beginner/python/strings.ts

import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python Strings - Beginner Quiz",
  quizLevel: "beginner",
  lang: "python",
  description: "This quiz tests your understanding of basic string operations in Python.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Strings"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "Which of the following is a valid string declaration in Python?",
      options: [
        { optionText: `'Hello'`, optionTag: "A" },
        { optionText: `"Hello"`, optionTag: "B" },
        { optionText: `'''Hello'''`, optionTag: "C" },
        { optionText: "All of the above", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What will be the output of: `print(len('Python'))`?",
      options: [
        { optionText: "6", optionTag: "A" },
        { optionText: "5", optionTag: "B" },
        { optionText: "7", optionTag: "C" },
        { optionText: "Error", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How do you access the first character of a string `s = 'Python'`?",
      options: [
        { optionText: "s[0]", optionTag: "A" },
        { optionText: "s[1]", optionTag: "B" },
        { optionText: "s(0)", optionTag: "C" },
        { optionText: "first(s)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which method is used to convert string to lowercase?",
      options: [
        { optionText: "lower()", optionTag: "A" },
        { optionText: "tolower()", optionTag: "B" },
        { optionText: "lowercase()", optionTag: "C" },
        { optionText: "convertlower()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What will `print('abc' + '123')` output?",
      options: [
        { optionText: "abc123", optionTag: "A" },
        { optionText: "abc 123", optionTag: "B" },
        { optionText: "abc+123", optionTag: "C" },
        { optionText: "Error", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which method returns the number of occurrences of a substring?",
      options: [
        { optionText: "count()", optionTag: "A" },
        { optionText: "index()", optionTag: "B" },
        { optionText: "find()", optionTag: "C" },
        { optionText: "match()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What does `s.strip()` do?",
      options: [
        { optionText: "Removes whitespace from both ends", optionTag: "A" },
        { optionText: "Removes all whitespace", optionTag: "B" },
        { optionText: "Removes characters", optionTag: "C" },
        { optionText: "Adds padding", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which method checks if string contains only digits?",
      options: [
        { optionText: "isdigit()", optionTag: "A" },
        { optionText: "isnumber()", optionTag: "B" },
        { optionText: "numeric()", optionTag: "C" },
        { optionText: "isnumeric()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which method returns the index of a substring?",
      options: [
        { optionText: "find()", optionTag: "A" },
        { optionText: "search()", optionTag: "B" },
        { optionText: "locate()", optionTag: "C" },
        { optionText: "match()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "`'python'.capitalize()` returns:",
      options: [
        { optionText: "Python", optionTag: "A" },
        { optionText: "PYTHON", optionTag: "B" },
        { optionText: "python", optionTag: "C" },
        { optionText: "error", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "`'Python'.isalpha()` returns:",
      options: [
        { optionText: "True", optionTag: "A" },
        { optionText: "False", optionTag: "B" },
        { optionText: "None", optionTag: "C" },
        { optionText: "Error", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What will `'Hello {}'.format('World')` return?",
      options: [
        { optionText: "Hello World", optionTag: "A" },
        { optionText: "World Hello", optionTag: "B" },
        { optionText: "Hello {}", optionTag: "C" },
        { optionText: "Error", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What will `print('a' * 5)` output?",
      options: [
        { optionText: "aaaaa", optionTag: "A" },
        { optionText: "a5", optionTag: "B" },
        { optionText: "aaaaaa", optionTag: "C" },
        { optionText: "Error", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which method splits a string into a list?",
      options: [
        { optionText: "split()", optionTag: "A" },
        { optionText: "break()", optionTag: "B" },
        { optionText: "separate()", optionTag: "C" },
        { optionText: "divide()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How to convert a number to a string?",
      options: [
        { optionText: "str()", optionTag: "A" },
        { optionText: "string()", optionTag: "B" },
        { optionText: "int()", optionTag: "C" },
        { optionText: "float()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "`'abc123'.isalnum()` returns:",
      options: [
        { optionText: "True", optionTag: "A" },
        { optionText: "False", optionTag: "B" },
        { optionText: "None", optionTag: "C" },
        { optionText: "Error", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "`'Hello'.endswith('o')` returns:",
      options: [
        { optionText: "True", optionTag: "A" },
        { optionText: "False", optionTag: "B" },
        { optionText: "None", optionTag: "C" },
        { optionText: "Error", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "`'Python Programming'.title()` returns:",
      options: [
        { optionText: "Python Programming", optionTag: "A" },
        { optionText: "PYTHON PROGRAMMING", optionTag: "B" },
        { optionText: "python programming", optionTag: "C" },
        { optionText: "Python programming", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which symbol is used for f-string in Python?",
      options: [
        { optionText: "f before quotes", optionTag: "A" },
        { optionText: "#", optionTag: "B" },
        { optionText: "{}", optionTag: "C" },
        { optionText: "$", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "`'abc'.upper()` returns:",
      options: [
        { optionText: "'ABC'", optionTag: "A" },
        { optionText: "'abc'", optionTag: "B" },
        { optionText: "error", optionTag: "C" },
        { optionText: "'Abc'", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    }
  ]
};

export default quizData;