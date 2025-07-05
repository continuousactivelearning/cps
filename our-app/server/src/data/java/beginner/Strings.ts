import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "Java Strings - Beginner Quiz",
    quizLevel: "beginner",
    lang: "java",
    description: "This quiz covers beginner-level concepts of Strings in Java.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "Strings"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the default value of a String in Java?",
            options: [
                { optionText: "null", optionTag: "A" },
                { optionText: "Empty String", optionTag: "B" },
                { optionText: "0", optionTag: "C" },
                { optionText: "Undefined", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which method is used to find the length of a string?",
            options: [
                { optionText: "size()", optionTag: "A" },
                { optionText: "length()", optionTag: "B" },
                { optionText: "getSize()", optionTag: "C" },
                { optionText: "getLength()", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "Which of the following is the correct way to create a string in Java?",
            options: [
                { optionText: "String s = 'Hello';", optionTag: "A" },
                { optionText: "String s = \"Hello\";", optionTag: "B" },
                { optionText: "String s = new char[] {'H','e','l','l','o'};", optionTag: "C" },
                { optionText: "String s = new StringBuilder();", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "Are strings mutable in Java?",
            options: [
                { optionText: "Yes", optionTag: "A" },
                { optionText: "No", optionTag: "B" },
                { optionText: "Depends on usage", optionTag: "C" },
                { optionText: "Only in StringBuffer", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "Which class is used for mutable strings in Java?",
            options: [
                { optionText: "String", optionTag: "A" },
                { optionText: "StringBuffer", optionTag: "B" },
                { optionText: "StringBuilder", optionTag: "C" },
                { optionText: "Both B and C", optionTag: "D" }
            ],
            correctOption: "D",
            score: 1
        },
        {
            questionText: "Which method is used to compare two strings for equality?",
            options: [
                { optionText: "equals()", optionTag: "A" },
                { optionText: "compare()", optionTag: "B" },
                { optionText: "==", optionTag: "C" },
                { optionText: "match()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What will 'Hello'.charAt(1) return?",
            options: [
                { optionText: "H", optionTag: "A" },
                { optionText: "e", optionTag: "B" },
                { optionText: "l", optionTag: "C" },
                { optionText: "o", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "Which method returns the index of the first occurrence of a character?",
            options: [
                { optionText: "indexOf()", optionTag: "A" },
                { optionText: "findIndex()", optionTag: "B" },
                { optionText: "search()", optionTag: "C" },
                { optionText: "locate()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which method is used to convert all characters to lowercase?",
            options: [
                { optionText: "toLower()", optionTag: "A" },
                { optionText: "lowerCase()", optionTag: "B" },
                { optionText: "toLowerCase()", optionTag: "C" },
                { optionText: "smallCase()", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "What is the result of 'abc' + 'def'?",
            options: [
                { optionText: "abcdef", optionTag: "A" },
                { optionText: "abc def", optionTag: "B" },
                { optionText: "abc+def", optionTag: "C" },
                { optionText: "Error", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;