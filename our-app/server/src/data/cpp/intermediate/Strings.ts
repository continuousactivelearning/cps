import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "C++ Strings - Intermediate Quiz",
  quizLevel: "intermediate",
  lang: "cpp",
  description: "This quiz checks your understanding of string handling, manipulation, and STL functions in C++.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Strings"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "Which C++ header is needed for string operations?",
      options: [
        { optionText: "<string>", optionTag: "A" },
        { optionText: "<cstring>", optionTag: "B" },
        { optionText: "<iostream>", optionTag: "C" },
        { optionText: "<sstream>", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How do you find the length of a C++ string `str`?",
      options: [
        { optionText: "str.length()", optionTag: "A" },
        { optionText: "strlen(str)", optionTag: "B" },
        { optionText: "size(str)", optionTag: "C" },
        { optionText: "str.size()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which operator is used to concatenate two C++ strings?",
      options: [
        { optionText: "+", optionTag: "A" },
        { optionText: "*", optionTag: "B" },
        { optionText: "&", optionTag: "C" },
        { optionText: "!", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which method replaces part of a string in C++?",
      options: [
        { optionText: "replace()", optionTag: "A" },
        { optionText: "swap()", optionTag: "B" },
        { optionText: "overwrite()", optionTag: "C" },
        { optionText: "modify()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What does `str.substr(1, 3)` return?",
      options: [
        { optionText: "Substring starting at index 1, length 3", optionTag: "A" },
        { optionText: "Substring of last 3 characters", optionTag: "B" },
        { optionText: "Substring starting at 3, length 1", optionTag: "C" },
        { optionText: "Error", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which function is used to compare two strings?",
      options: [
        { optionText: "compare()", optionTag: "A" },
        { optionText: "equals()", optionTag: "B" },
        { optionText: "cmp()", optionTag: "C" },
        { optionText: "match()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How to convert a C++ string to uppercase?",
      options: [
        { optionText: "Use transform() with toupper()", optionTag: "A" },
        { optionText: "toupper(str)", optionTag: "B" },
        { optionText: "str.upper()", optionTag: "C" },
        { optionText: "convert_upper(str)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which function checks if a string is empty?",
      options: [
        { optionText: "empty()", optionTag: "A" },
        { optionText: "isempty()", optionTag: "B" },
        { optionText: "length() == 0", optionTag: "C" },
        { optionText: "both A and C", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What does `str.find('a')` return?",
      options: [
        { optionText: "Index of first occurrence of 'a'", optionTag: "A" },
        { optionText: "Index of last occurrence of 'a'", optionTag: "B" },
        { optionText: "Number of a’s in string", optionTag: "C" },
        { optionText: "Always 0", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which is true about C++ std::string?",
      options: [
        { optionText: "Automatically resizes", optionTag: "A" },
        { optionText: "Requires manual memory management", optionTag: "B" },
        { optionText: "Has fixed size", optionTag: "C" },
        { optionText: "Does not support iterators", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the result of `str.insert(3, \"abc\")`?",
      options: [
        { optionText: "Inserts \"abc\" at index 3", optionTag: "A" },
        { optionText: "Appends abc", optionTag: "B" },
        { optionText: "Replaces first 3 characters with abc", optionTag: "C" },
        { optionText: "Deletes first 3 characters", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which method is used to remove all characters from string?",
      options: [
        { optionText: "clear()", optionTag: "A" },
        { optionText: "eraseAll()", optionTag: "B" },
        { optionText: "empty()", optionTag: "C" },
        { optionText: "nullify()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How to access the last character of a string?",
      options: [
        { optionText: "str.back()", optionTag: "A" },
        { optionText: "str[str.length() - 1]", optionTag: "B" },
        { optionText: "str.end()", optionTag: "C" },
        { optionText: "both A and B", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which function converts string to integer in C++?",
      options: [
        { optionText: "stoi()", optionTag: "A" },
        { optionText: "atoi()", optionTag: "B" },
        { optionText: "toInt()", optionTag: "C" },
        { optionText: "parseInt()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the time complexity of string concatenation using '+'?",
      options: [
        { optionText: "O(n)", optionTag: "A" },
        { optionText: "O(1)", optionTag: "B" },
        { optionText: "O(log n)", optionTag: "C" },
        { optionText: "O(n^2)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which object can store formatted string output?",
      options: [
        { optionText: "std::ostringstream", optionTag: "A" },
        { optionText: "std::stringstream", optionTag: "B" },
        { optionText: "std::istringstream", optionTag: "C" },
        { optionText: "All of the above", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which operator is overloaded for string comparison?",
      options: [
        { optionText: "==", optionTag: "A" },
        { optionText: "!=", optionTag: "B" },
        { optionText: "<", optionTag: "C" },
        { optionText: "All of the above", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which of the following is not a valid string method?",
      options: [
        { optionText: "copy()", optionTag: "A" },
        { optionText: "append()", optionTag: "B" },
        { optionText: "extract()", optionTag: "C" },
        { optionText: "resize()", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which function reads an entire line from user input?",
      options: [
        { optionText: "getline()", optionTag: "A" },
        { optionText: "cin.getline()", optionTag: "B" },
        { optionText: "cin >>", optionTag: "C" },
        { optionText: "both A and B", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    }
  ]
};

export default quizData;