import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "C++ Strings - Beginner Quiz",
  quizLevel: "beginner",
  lang: "cpp",
  description: "This quiz evaluates basic understanding of string handling in C++.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Strings"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "Which header file is used for string in C++?",
      options: [
        { optionText: "<string>", optionTag: "A" },
        { optionText: "<cstring>", optionTag: "B" },
        { optionText: "<str>", optionTag: "C" },
        { optionText: "<string.h>", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How to declare a string variable in C++?",
      options: [
        { optionText: "string name;", optionTag: "A" },
        { optionText: "str name;", optionTag: "B" },
        { optionText: "String name;", optionTag: "C" },
        { optionText: "text name;", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What will `s.length()` return in a C++ string?",
      options: [
        { optionText: "Number of characters", optionTag: "A" },
        { optionText: "Memory size", optionTag: "B" },
        { optionText: "Last character", optionTag: "C" },
        { optionText: "Undefined", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which operator is used to concatenate strings in C++?",
      options: [
        { optionText: "+", optionTag: "A" },
        { optionText: "*", optionTag: "B" },
        { optionText: "&", optionTag: "C" },
        { optionText: "-", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which method converts a string to all uppercase?",
      options: [
        { optionText: "transform()", optionTag: "A" },
        { optionText: "toupper()", optionTag: "B" },
        { optionText: "toUpperCase()", optionTag: "C" },
        { optionText: "str.upper()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the correct syntax to find substring in a string?",
      options: [
        { optionText: "s.substr(start, length)", optionTag: "A" },
        { optionText: "s.substring(start, end)", optionTag: "B" },
        { optionText: "s.sub(start, len)", optionTag: "C" },
        { optionText: "substring(s)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which function returns index of first occurrence of a character?",
      options: [
        { optionText: "find()", optionTag: "A" },
        { optionText: "indexOf()", optionTag: "B" },
        { optionText: "locate()", optionTag: "C" },
        { optionText: "position()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which method clears a string's content?",
      options: [
        { optionText: "clear()", optionTag: "A" },
        { optionText: "eraseAll()", optionTag: "B" },
        { optionText: "reset()", optionTag: "C" },
        { optionText: "empty()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which function returns true if string is empty?",
      options: [
        { optionText: "empty()", optionTag: "A" },
        { optionText: "isEmpty()", optionTag: "B" },
        { optionText: "length() == 0", optionTag: "C" },
        { optionText: "All of the above", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which function is used to remove characters from a string?",
      options: [
        { optionText: "erase()", optionTag: "A" },
        { optionText: "delete()", optionTag: "B" },
        { optionText: "remove()", optionTag: "C" },
        { optionText: "pop()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which C++ operator is used to compare strings?",
      options: [
        { optionText: "==", optionTag: "A" },
        { optionText: "!=", optionTag: "B" },
        { optionText: ">", optionTag: "C" },
        { optionText: "All of the above", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "How do you access the third character of string `s`?",
      options: [
        { optionText: "s[2]", optionTag: "A" },
        { optionText: "s[3]", optionTag: "B" },
        { optionText: "charAt(3)", optionTag: "C" },
        { optionText: "s.get(2)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What will be output of `string s = \"abc\" + \"def\";`?",
      options: [
        { optionText: "Compiler Error", optionTag: "A" },
        { optionText: "abcdef", optionTag: "B" },
        { optionText: "abc def", optionTag: "C" },
        { optionText: "abc+def", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following modifies a string in-place?",
      options: [
        { optionText: "append()", optionTag: "A" },
        { optionText: "+", optionTag: "B" },
        { optionText: "operator=", optionTag: "C" },
        { optionText: "==", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How to get the last character of string `s`?",
      options: [
        { optionText: "s[s.length()-1]", optionTag: "A" },
        { optionText: "s.end()", optionTag: "B" },
        { optionText: "s.back()", optionTag: "C" },
        { optionText: "Both A and C", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which is true for C++ string and char array?",
      options: [
        { optionText: "C++ string is safer and easier", optionTag: "A" },
        { optionText: "char[] requires null terminator", optionTag: "B" },
        { optionText: "string supports dynamic size", optionTag: "C" },
        { optionText: "All are true", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which method appends a character to the end?",
      options: [
        { optionText: "push_back()", optionTag: "A" },
        { optionText: "append()", optionTag: "B" },
        { optionText: "insert()", optionTag: "C" },
        { optionText: "add()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How to replace part of a string in C++?",
      options: [
        { optionText: "replace()", optionTag: "A" },
        { optionText: "set()", optionTag: "B" },
        { optionText: "update()", optionTag: "C" },
        { optionText: "overwrite()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which function removes last character of a string?",
      options: [
        { optionText: "pop_back()", optionTag: "A" },
        { optionText: "remove()", optionTag: "B" },
        { optionText: "erase_last()", optionTag: "C" },
        { optionText: "truncate()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How to convert a string to integer in C++?",
      options: [
        { optionText: "stoi()", optionTag: "A" },
        { optionText: "atoi()", optionTag: "B" },
        { optionText: "int()", optionTag: "C" },
        { optionText: "parseInt()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    }
  ]
};

export default quizData;