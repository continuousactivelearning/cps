import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python Strings - Advanced Quiz",
  quizLevel: "advanced",
  lang: "python",
  description: "This quiz tests your advanced understanding of string operations, manipulations, and algorithms in Python.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Strings"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "Which built-in function can reverse a string in Python?",
      options: [
        { optionText: "reversed()", optionTag: "A" },
        { optionText: "reverse()", optionTag: "B" },
        { optionText: "flip()", optionTag: "C" },
        { optionText: "invert()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following is the correct syntax for string slicing?",
      options: [
        { optionText: "str[1:5]", optionTag: "A" },
        { optionText: "str(1:5)", optionTag: "B" },
        { optionText: "str{1:5}", optionTag: "C" },
        { optionText: "slice(str,1,5)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What will 'abc'.zfill(5) return?",
      options: [
        { optionText: "'00abc'", optionTag: "A" },
        { optionText: "'abc00'", optionTag: "B" },
        { optionText: "'abcabc'", optionTag: "C" },
        { optionText: "'abc'", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of these methods can check if a string is alphanumeric?",
      options: [
        { optionText: "isalnum()", optionTag: "A" },
        { optionText: "isalpha()", optionTag: "B" },
        { optionText: "isnumeric()", optionTag: "C" },
        { optionText: "isdecimal()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following removes leading and trailing whitespaces?",
      options: [
        { optionText: "strip()", optionTag: "A" },
        { optionText: "trim()", optionTag: "B" },
        { optionText: "remove()", optionTag: "C" },
        { optionText: "clean()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What will 'Python'.replace('y', 'i') return?",
      options: [
        { optionText: "'Pithon'", optionTag: "A" },
        { optionText: "'Piython'", optionTag: "B" },
        { optionText: "'Pithoni'", optionTag: "C" },
        { optionText: "'Python'", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which method would you use to check if a string ends with a certain character?",
      options: [
        { optionText: "endswith()", optionTag: "A" },
        { optionText: "endchar()", optionTag: "B" },
        { optionText: "terminate()", optionTag: "C" },
        { optionText: "suffix()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What will be the output of len('Hello\\nWorld')?",
      options: [
        { optionText: "11", optionTag: "A" },
        { optionText: "10", optionTag: "B" },
        { optionText: "12", optionTag: "C" },
        { optionText: "9", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What does the .join() method do?",
      options: [
        { optionText: "Concatenates a list into a single string", optionTag: "A" },
        { optionText: "Splits a string into a list", optionTag: "B" },
        { optionText: "Merges dictionaries", optionTag: "C" },
        { optionText: "Joins two integers", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which format string placeholder is used for floating numbers?",
      options: [
        { optionText: "%f", optionTag: "A" },
        { optionText: "%s", optionTag: "B" },
        { optionText: "%d", optionTag: "C" },
        { optionText: "%x", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which function converts an integer to a string?",
      options: [
        { optionText: "str()", optionTag: "A" },
        { optionText: "toString()", optionTag: "B" },
        { optionText: "intToStr()", optionTag: "C" },
        { optionText: "convert()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the output of 'Python'.lower()?",
      options: [
        { optionText: "'python'", optionTag: "A" },
        { optionText: "'PYTHON'", optionTag: "B" },
        { optionText: "'Python'", optionTag: "C" },
        { optionText: "'pYTHON'", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the time complexity of string concatenation using + operator?",
      options: [
        { optionText: "O(n)", optionTag: "A" },
        { optionText: "O(1)", optionTag: "B" },
        { optionText: "O(log n)", optionTag: "C" },
        { optionText: "O(n^2)", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What does 'Hello World!'.split() return?",
      options: [
        { optionText: "['Hello', 'World!']", optionTag: "A" },
        { optionText: "Hello,World!", optionTag: "B" },
        { optionText: "['H','e','l','l','o',' ','W','o','r','l','d','!']", optionTag: "C" },
        { optionText: "['HelloWorld!']", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which string method capitalizes the first character?",
      options: [
        { optionText: "capitalize()", optionTag: "A" },
        { optionText: "upper()", optionTag: "B" },
        { optionText: "title()", optionTag: "C" },
        { optionText: "startcase()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How do you format a string with variable in Python 3?",
      options: [
        { optionText: "f\"Hello {name}\"", optionTag: "A" },
        { optionText: "Hello %name%", optionTag: "B" },
        { optionText: "format(Hello, name)", optionTag: "C" },
        { optionText: "$Hello{name}", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which encoding is default for open() in Python 3?",
      options: [
        { optionText: "utf-8", optionTag: "A" },
        { optionText: "ascii", optionTag: "B" },
        { optionText: "unicode", optionTag: "C" },
        { optionText: "binary", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What will ''.join(['A', 'B', 'C']) return?",
      options: [
        { optionText: "'ABC'", optionTag: "A" },
        { optionText: "'A B C'", optionTag: "B" },
        { optionText: "'A-B-C'", optionTag: "C" },
        { optionText: "['A','B','C']", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How can you remove all digits from a string?",
      options: [
        { optionText: "Use regex: re.sub(r'\\d+', '', string)", optionTag: "A" },
        { optionText: "string.replace(0-9,'')", optionTag: "B" },
        { optionText: "filter(str.isdigit, string)", optionTag: "C" },
        { optionText: "string.remove_digits()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    }
  ]
};

export default quizData;