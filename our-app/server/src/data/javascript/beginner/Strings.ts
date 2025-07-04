import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript Strings - Beginner Quiz",
    quizLevel: "beginner",
    lang: "javascript",
    description: "This quiz evaluates your understanding of basic string operations in JavaScript.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "Strings"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "How do you define a string in JavaScript?",
            options: [
                { optionText: `"Hello"`, optionTag: "A" },
                { optionText: `Hello`, optionTag: "B" },
                { optionText: `str = Hello`, optionTag: "C" },
                { optionText: `string Hello`, optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What method is used to find the length of a string?",
            options: [
                { optionText: "length", optionTag: "A" },
                { optionText: "size()", optionTag: "B" },
                { optionText: "count()", optionTag: "C" },
                { optionText: "strlen()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which method converts a string to uppercase?",
            options: [
                { optionText: "toUpperCase()", optionTag: "A" },
                { optionText: "uppercase()", optionTag: "B" },
                { optionText: "makeUpper()", optionTag: "C" },
                { optionText: "strUpper()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How can you concatenate two strings in JavaScript?",
            options: [
                { optionText: `"Hello" + "World"`, optionTag: "A" },
                { optionText: `"Hello".concat("World")`, optionTag: "B" },
                { optionText: "Both A and B", optionTag: "C" },
                { optionText: "None of the above", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "What is the result of '5' + 3 in JavaScript?",
            options: [
                { optionText: `"53"`, optionTag: "A" },
                { optionText: `"8"`, optionTag: "B" },
                { optionText: `8`, optionTag: "C" },
                { optionText: `Error`, optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which character is used to escape characters in strings?",
            options: [
                { optionText: "\\", optionTag: "A" },
                { optionText: "/", optionTag: "B" },
                { optionText: "#", optionTag: "C" },
                { optionText: "&", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does `charAt(2)` return from 'JavaScript'?",
            options: [
                { optionText: "v", optionTag: "A" },
                { optionText: "a", optionTag: "B" },
                { optionText: "J", optionTag: "C" },
                { optionText: "S", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the index of the first character in a string?",
            options: [
                { optionText: "0", optionTag: "A" },
                { optionText: "1", optionTag: "B" },
                { optionText: "-1", optionTag: "C" },
                { optionText: "Depends", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What method checks if a string starts with a specific substring?",
            options: [
                { optionText: "startsWith()", optionTag: "A" },
                { optionText: "beginWith()", optionTag: "B" },
                { optionText: "isStart()", optionTag: "C" },
                { optionText: "start()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How do you check if a string includes a certain character?",
            options: [
                { optionText: "includes()", optionTag: "A" },
                { optionText: "contains()", optionTag: "B" },
                { optionText: "has()", optionTag: "C" },
                { optionText: "exist()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which method extracts a substring?",
            options: [
                { optionText: "substring()", optionTag: "A" },
                { optionText: "slice()", optionTag: "B" },
                { optionText: "Both A and B", optionTag: "C" },
                { optionText: "strcut()", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "What does `trim()` do?",
            options: [
                { optionText: "Removes whitespace from both ends", optionTag: "A" },
                { optionText: "Deletes entire string", optionTag: "B" },
                { optionText: "Removes inner spaces", optionTag: "C" },
                { optionText: "Shortens string length", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How to change 'Hello' to lowercase?",
            options: [
                { optionText: "toLowerCase()", optionTag: "A" },
                { optionText: "lower()", optionTag: "B" },
                { optionText: "makeLower()", optionTag: "C" },
                { optionText: "toSmall()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which method replaces part of a string?",
            options: [
                { optionText: "replace()", optionTag: "A" },
                { optionText: "switch()", optionTag: "B" },
                { optionText: "modify()", optionTag: "C" },
                { optionText: "substitute()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the result of `'Hello'.length`?",
            options: [
                { optionText: "5", optionTag: "A" },
                { optionText: "4", optionTag: "B" },
                { optionText: "6", optionTag: "C" },
                { optionText: "Error", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does `split()` do?",
            options: [
                { optionText: "Divides string into array", optionTag: "A" },
                { optionText: "Removes string", optionTag: "B" },
                { optionText: "Joins strings", optionTag: "C" },
                { optionText: "Reverses string", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What method combines array elements into a string?",
            options: [
                { optionText: "join()", optionTag: "A" },
                { optionText: "combine()", optionTag: "B" },
                { optionText: "concat()", optionTag: "C" },
                { optionText: "append()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How to find the index of 'l' in 'Hello'?",
            options: [
                { optionText: `"Hello".indexOf('l')`, optionTag: "A" },
                { optionText: `"Hello".search('l')`, optionTag: "B" },
                { optionText: `"Hello".position('l')`, optionTag: "C" },
                { optionText: `"Hello".find('l')`, optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What method checks if a string ends with a specific substring?",
            options: [
                { optionText: "endsWith()", optionTag: "A" },
                { optionText: "finish()", optionTag: "B" },
                { optionText: "lastChar()", optionTag: "C" },
                { optionText: "checkEnd()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How to convert a number to string?",
            options: [
                { optionText: "toString()", optionTag: "A" },
                { optionText: "convert()", optionTag: "B" },
                { optionText: "parseString()", optionTag: "C" },
                { optionText: "asString()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;