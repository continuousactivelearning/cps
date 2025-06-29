import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "Java Strings - Advanced Quiz",
    quizLevel: "advanced",
    lang: "java",
    description: "This quiz covers advanced concepts of Strings in Java.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "Strings"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the time complexity of the String concatenation using '+' in a loop?",
            options: [
                { optionText: "O(n^2)", optionTag: "A" },
                { optionText: "O(n)", optionTag: "B" },
                { optionText: "O(log n)", optionTag: "C" },
                { optionText: "O(1)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which class should be used for efficient string concatenation in Java?",
            options: [
                { optionText: "StringBuffer", optionTag: "A" },
                { optionText: "StringBuilder", optionTag: "B" },
                { optionText: "Both A and B", optionTag: "C" },
                { optionText: "String", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "What is returned by the split() method in Java?",
            options: [
                { optionText: "Array of Strings", optionTag: "A" },
                { optionText: "StringBuffer", optionTag: "B" },
                { optionText: "StringBuilder", optionTag: "C" },
                { optionText: "List of Strings", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which method is used to compare two strings lexicographically, ignoring case?",
            options: [
                { optionText: "compareToIgnoreCase()", optionTag: "A" },
                { optionText: "compare()", optionTag: "B" },
                { optionText: "equalsIgnoreCase()", optionTag: "C" },
                { optionText: "compareStrings()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which class is thread-safe: StringBuffer or StringBuilder?",
            options: [
                { optionText: "StringBuffer", optionTag: "A" },
                { optionText: "StringBuilder", optionTag: "B" },
                { optionText: "Both", optionTag: "C" },
                { optionText: "Neither", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the output of \"Java\".substring(1, 3)?",
            options: [
                { optionText: "av", optionTag: "A" },
                { optionText: "va", optionTag: "B" },
                { optionText: "Ja", optionTag: "C" },
                { optionText: "Error", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which method is used to convert a string to a character array?",
            options: [
                { optionText: "toCharArray()", optionTag: "A" },
                { optionText: "charArray()", optionTag: "B" },
                { optionText: "convertChars()", optionTag: "C" },
                { optionText: "toArray()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does the intern() method in Java do?",
            options: [
                { optionText: "Adds string to String Pool", optionTag: "A" },
                { optionText: "Removes duplicates", optionTag: "B" },
                { optionText: "Converts string to lowercase", optionTag: "C" },
                { optionText: "Converts string to uppercase", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which method checks if a string starts with a specific prefix?",
            options: [
                { optionText: "startsWith()", optionTag: "A" },
                { optionText: "hasPrefix()", optionTag: "B" },
                { optionText: "starts()", optionTag: "C" },
                { optionText: "beginsWith()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the return type of indexOf() method in Java String?",
            options: [
                { optionText: "int", optionTag: "A" },
                { optionText: "String", optionTag: "B" },
                { optionText: "char", optionTag: "C" },
                { optionText: "boolean", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;