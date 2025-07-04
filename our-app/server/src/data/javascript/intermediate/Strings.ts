import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "JavaScript Strings - Intermediate Quiz",
  quizLevel: "intermediate",
  lang: "javascript",
  description: "This quiz assesses your understanding of JavaScript string methods and manipulation.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Strings"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "Which method is used to extract a section of a string?",
      options: [
        { optionText: "slice()", optionTag: "A" },
        { optionText: "extract()", optionTag: "B" },
        { optionText: "cut()", optionTag: "C" },
        { optionText: "substringOf()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What does 'Hello'.charAt(1) return?",
      options: [
        { optionText: "'e'", optionTag: "A" },
        { optionText: "'H'", optionTag: "B" },
        { optionText: "'l'", optionTag: "C" },
        { optionText: "undefined", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which method combines two or more strings?",
      options: [
        { optionText: "concat()", optionTag: "A" },
        { optionText: "join()", optionTag: "B" },
        { optionText: "merge()", optionTag: "C" },
        { optionText: "append()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is returned by 'JavaScript'.substring(4,10)?",
      options: [
        { optionText: "'Script'", optionTag: "A" },
        { optionText: "'JavaS'", optionTag: "B" },
        { optionText: "'Scrip'", optionTag: "C" },
        { optionText: "'aScri'", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which method is used to convert a string to lowercase?",
      options: [
        { optionText: "toLowerCase()", optionTag: "A" },
        { optionText: "lower()", optionTag: "B" },
        { optionText: "smallCase()", optionTag: "C" },
        { optionText: "caseLower()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the output of 'abc'.repeat(3)?",
      options: [
        { optionText: "'abcabcabc'", optionTag: "A" },
        { optionText: "'abc abc abc'", optionTag: "B" },
        { optionText: "'abcabc'", optionTag: "C" },
        { optionText: "'abc3'", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which method checks if a string ends with a specific value?",
      options: [
        { optionText: "endsWith()", optionTag: "A" },
        { optionText: "isEnding()", optionTag: "B" },
        { optionText: "checkEnd()", optionTag: "C" },
        { optionText: "finishWith()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What does '   Hello   '.trim() return?",
      options: [
        { optionText: "'Hello'", optionTag: "A" },
        { optionText: "'   Hello'", optionTag: "B" },
        { optionText: "'Hello   '", optionTag: "C" },
        { optionText: "'   Hello   '", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the result of 'Hello World'.split(' ')[1]?",
      options: [
        { optionText: "'World'", optionTag: "A" },
        { optionText: "'Hello'", optionTag: "B" },
        { optionText: "' '", optionTag: "C" },
        { optionText: "undefined", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How do you replace 'Java' with 'Type' in 'JavaScript'?",
      options: [
        { optionText: "'JavaScript'.replace('Java','Type')", optionTag: "A" },
        { optionText: "'JavaScript'.change('Java','Type')", optionTag: "B" },
        { optionText: "'JavaScript'.update('Java','Type')", optionTag: "C" },
        { optionText: "'JavaScript'.edit('Java','Type')", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },

    // Additional 10
    {
      questionText: "What will 'abc'.includes('a') return?",
      options: [
        { optionText: "true", optionTag: "A" },
        { optionText: "false", optionTag: "B" },
        { optionText: "'a'", optionTag: "C" },
        { optionText: "undefined", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "'JavaScript'.indexOf('S') returns?",
      options: [
        { optionText: "4", optionTag: "A" },
        { optionText: "5", optionTag: "B" },
        { optionText: "6", optionTag: "C" },
        { optionText: "-1", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the length of 'Hello\\nWorld'?",
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
      questionText: "Which method returns a string in uppercase?",
      options: [
        { optionText: "toUpperCase()", optionTag: "A" },
        { optionText: "upper()", optionTag: "B" },
        { optionText: "toCaps()", optionTag: "C" },
        { optionText: "capitalize()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "'hello'.startsWith('h') returns?",
      options: [
        { optionText: "true", optionTag: "A" },
        { optionText: "false", optionTag: "B" },
        { optionText: "undefined", optionTag: "C" },
        { optionText: "'h'", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which method finds the last occurrence of a character in a string?",
      options: [
        { optionText: "lastIndexOf()", optionTag: "A" },
        { optionText: "indexOf()", optionTag: "B" },
        { optionText: "search()", optionTag: "C" },
        { optionText: "findLast()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which escape sequence represents a new line?",
      options: [
        { optionText: "\\n", optionTag: "A" },
        { optionText: "\\t", optionTag: "B" },
        { optionText: "\\r", optionTag: "C" },
        { optionText: "\\b", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "'Hello'.padEnd(10,'!') returns?",
      options: [
        { optionText: "'Hello!!!!!'", optionTag: "A" },
        { optionText: "'Hello'", optionTag: "B" },
        { optionText: "'!!!!!Hello'", optionTag: "C" },
        { optionText: "'Hello     '", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which method would you use to get part of a string from index 2 to 5?",
      options: [
        { optionText: "substring(2,5)", optionTag: "A" },
        { optionText: "slice(2,5)", optionTag: "B" },
        { optionText: "Both A and B", optionTag: "C" },
        { optionText: "split(2,5)", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which method converts a number to a string?",
      options: [
        { optionText: "toString()", optionTag: "A" },
        { optionText: "stringify()", optionTag: "B" },
        { optionText: "toText()", optionTag: "C" },
        { optionText: "convert()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    }
  ]
};

export default quizData;