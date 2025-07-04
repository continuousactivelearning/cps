import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "C++ Strings - Advanced Quiz",
  quizLevel: "advanced",
  lang: "cpp",
  description: "This quiz tests your advanced understanding of strings in C++, including manipulation, STL usage, and algorithms involving strings.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Strings"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "Which C++ STL function is used to find a substring within a string?",
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
      questionText: "What does the following return? std::string(\"hello\").substr(1, 3)",
      options: [
        { optionText: "ell", optionTag: "A" },
        { optionText: "hel", optionTag: "B" },
        { optionText: "llo", optionTag: "C" },
        { optionText: "heo", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which STL function compares two strings lexicographically?",
      options: [
        { optionText: "compare()", optionTag: "A" },
        { optionText: "match()", optionTag: "B" },
        { optionText: "equals()", optionTag: "C" },
        { optionText: "strcmp()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the time complexity of reversing a string of length n in C++?",
      options: [
        { optionText: "O(n)", optionTag: "A" },
        { optionText: "O(log n)", optionTag: "B" },
        { optionText: "O(1)", optionTag: "C" },
        { optionText: "O(n^2)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which function replaces part of a string with another string in C++?",
      options: [
        { optionText: "replace()", optionTag: "A" },
        { optionText: "overwrite()", optionTag: "B" },
        { optionText: "assign()", optionTag: "C" },
        { optionText: "copy()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following checks if a string starts with a given prefix in C++20?",
      options: [
        { optionText: "starts_with()", optionTag: "A" },
        { optionText: "hasPrefix()", optionTag: "B" },
        { optionText: "prefix_of()", optionTag: "C" },
        { optionText: "begin_with()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which method is used to append a character to a string?",
      options: [
        { optionText: "push_back()", optionTag: "A" },
        { optionText: "append_char()", optionTag: "B" },
        { optionText: "insert_back()", optionTag: "C" },
        { optionText: "add()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which algorithm is used for string pattern matching in linear time?",
      options: [
        { optionText: "KMP", optionTag: "A" },
        { optionText: "Bubble Sort", optionTag: "B" },
        { optionText: "DFS", optionTag: "C" },
        { optionText: "Binary Search", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the output of std::string s = \"abc\" + \"def\"?",
      options: [
        { optionText: "Compilation error", optionTag: "A" },
        { optionText: "abcdef", optionTag: "B" },
        { optionText: "abc def", optionTag: "C" },
        { optionText: "abc+def", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which function removes the last character of a string?",
      options: [
        { optionText: "pop_back()", optionTag: "A" },
        { optionText: "remove_last()", optionTag: "B" },
        { optionText: "truncate()", optionTag: "C" },
        { optionText: "cut()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How can you convert a string to an integer in C++?",
      options: [
        { optionText: "stoi()", optionTag: "A" },
        { optionText: "toInt()", optionTag: "B" },
        { optionText: "parseInt()", optionTag: "C" },
        { optionText: "int_cast()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What will be the result of s = \"abc\"; s[3] = 'd';?",
      options: [
        { optionText: "Runtime error", optionTag: "A" },
        { optionText: "abcd", optionTag: "B" },
        { optionText: "abc", optionTag: "C" },
        { optionText: "Segmentation fault", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which method is used to clear the contents of a string?",
      options: [
        { optionText: "clear()", optionTag: "A" },
        { optionText: "erase_all()", optionTag: "B" },
        { optionText: "truncate()", optionTag: "C" },
        { optionText: "remove()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which method checks if a string is empty?",
      options: [
        { optionText: "empty()", optionTag: "A" },
        { optionText: "isNull()", optionTag: "B" },
        { optionText: "hasContent()", optionTag: "C" },
        { optionText: "isempty()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which function reads a full line including spaces from input?",
      options: [
        { optionText: "getline()", optionTag: "A" },
        { optionText: "cin >>", optionTag: "B" },
        { optionText: "scanf()", optionTag: "C" },
        { optionText: "readline()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How do you compare two strings s1 and s2 ignoring case in C++?",
      options: [
        { optionText: "Use transform() to convert to lower and then compare", optionTag: "A" },
        { optionText: "Use s1 == s2", optionTag: "B" },
        { optionText: "Use strcmp()", optionTag: "C" },
        { optionText: "Compare char by char only", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which function is used to insert a substring into a string?",
      options: [
        { optionText: "insert()", optionTag: "A" },
        { optionText: "append()", optionTag: "B" },
        { optionText: "copy()", optionTag: "C" },
        { optionText: "concat()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which iterator type is used to traverse a string in reverse?",
      options: [
        { optionText: "reverse_iterator", optionTag: "A" },
        { optionText: "back_iterator", optionTag: "B" },
        { optionText: "rev_iterator", optionTag: "C" },
        { optionText: "negative_iterator", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which header file is required to use std::string in C++?",
      options: [
        { optionText: "<string>", optionTag: "A" },
        { optionText: "<cstring>", optionTag: "B" },
        { optionText: "<sstream>", optionTag: "C" },
        { optionText: "<iostream>", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the result of s = \"abc\"; s += 'd';?",
      options: [
        { optionText: "abcd", optionTag: "A" },
        { optionText: "abc d", optionTag: "B" },
        { optionText: "Compilation error", optionTag: "C" },
        { optionText: "abd", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    }
  ]
};

export default quizData;