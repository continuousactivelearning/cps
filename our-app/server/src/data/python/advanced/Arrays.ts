import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python Arrays - Advanced Quiz",
  quizLevel: "advanced",
  lang: "python",
  description: "This quiz evaluates your understanding of advanced array operations and algorithms in Python.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Arrays"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "Which method returns the number of characters in a string?",
      options: [
        { optionText: "len()", optionTag: "A" },
        { optionText: "count()", optionTag: "B" },
        { optionText: "size()", optionTag: "C" },
        { optionText: "length()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of these methods removes whitespace from both ends of a string?",
      options: [
        { optionText: "strip()", optionTag: "A" },
        { optionText: "trim()", optionTag: "B" },
        { optionText: "remove()", optionTag: "C" },
        { optionText: "erase()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What will be the output of 'abc'.upper()?",
      options: [
        { optionText: "'ABC'", optionTag: "A" },
        { optionText: "'abc'", optionTag: "B" },
        { optionText: "'Abc'", optionTag: "C" },
        { optionText: "'aBc'", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the result of 'abcde'[2:4]?",
      options: [
        { optionText: "'cd'", optionTag: "A" },
        { optionText: "'bc'", optionTag: "B" },
        { optionText: "'de'", optionTag: "C" },
        { optionText: "'ab'", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following checks if a string ends with 'ing'?",
      options: [
        { optionText: "string.endswith('ing')", optionTag: "A" },
        { optionText: "string.last('ing')", optionTag: "B" },
        { optionText: "string.endsWith('ing')", optionTag: "C" },
        { optionText: "string.finish('ing')", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which method can split a string into a list of words?",
      options: [
        { optionText: "split()", optionTag: "A" },
        { optionText: "slice()", optionTag: "B" },
        { optionText: "partition()", optionTag: "C" },
        { optionText: "break()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How do you concatenate strings in Python?",
      options: [
        { optionText: "Using + operator", optionTag: "A" },
        { optionText: "Using & operator", optionTag: "B" },
        { optionText: "Using .append()", optionTag: "C" },
        { optionText: "Using concat()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which method converts a string to lowercase?",
      options: [
        { optionText: "lower()", optionTag: "A" },
        { optionText: "down()", optionTag: "B" },
        { optionText: "small()", optionTag: "C" },
        { optionText: "min()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following removes all characters from a string?",
      options: [
        { optionText: "string = ''", optionTag: "A" },
        { optionText: "string.clear()", optionTag: "B" },
        { optionText: "del string", optionTag: "C" },
        { optionText: "string.erase()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What does string.find('x') return if 'x' is not found?",
      options: [
        { optionText: "-1", optionTag: "A" },
        { optionText: "0", optionTag: "B" },
        { optionText: "None", optionTag: "C" },
        { optionText: "Error", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What will 'hello' * 3 return?",
      options: [
        { optionText: "'hellohellohello'", optionTag: "A" },
        { optionText: "'hello3'", optionTag: "B" },
        { optionText: "'hellohello'", optionTag: "C" },
        { optionText: "'hello*3'", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How do you check if a substring is in a string?",
      options: [
        { optionText: "'sub' in string", optionTag: "A" },
        { optionText: "string.has('sub')", optionTag: "B" },
        { optionText: "string.contains('sub')", optionTag: "C" },
        { optionText: "check(string, 'sub')", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the result of 'Python'[1:4]?",
      options: [
        { optionText: "'yth'", optionTag: "A" },
        { optionText: "'tho'", optionTag: "B" },
        { optionText: "'Pyt'", optionTag: "C" },
        { optionText: "'ytho'", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which method replaces parts of a string?",
      options: [
        { optionText: "replace()", optionTag: "A" },
        { optionText: "switch()", optionTag: "B" },
        { optionText: "change()", optionTag: "C" },
        { optionText: "edit()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is string slicing?",
      options: [
        { optionText: "Extracting a substring using indexes", optionTag: "A" },
        { optionText: "Breaking into characters", optionTag: "B" },
        { optionText: "Reversing string", optionTag: "C" },
        { optionText: "Sorting string", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What will 'HELLO'.isupper() return?",
      options: [
        { optionText: "True", optionTag: "A" },
        { optionText: "False", optionTag: "B" },
        { optionText: "Error", optionTag: "C" },
        { optionText: "None", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the use of .join() in Python?",
      options: [
        { optionText: "Concatenate elements of a list with a separator", optionTag: "A" },
        { optionText: "Break a string", optionTag: "B" },
        { optionText: "Merge two strings", optionTag: "C" },
        { optionText: "Connect variables", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which method checks if a string is alphanumeric?",
      options: [
        { optionText: "isalnum()", optionTag: "A" },
        { optionText: "isalpha()", optionTag: "B" },
        { optionText: "isdigit()", optionTag: "C" },
        { optionText: "isnumeric()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What will be the result of 'Python'.replace('P', 'J')?",
      options: [
        { optionText: "'Jython'", optionTag: "A" },
        { optionText: "'Python'", optionTag: "B" },
        { optionText: "'Pjthon'", optionTag: "C" },
        { optionText: "'JPython'", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    }
  ]
};

export default quizData;