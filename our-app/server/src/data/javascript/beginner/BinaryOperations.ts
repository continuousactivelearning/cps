import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript Binary Operations - Beginner Quiz",
    quizLevel: "beginner",
    lang: "javascript",
    description: "This quiz tests your basic understanding of binary operations in JavaScript.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "BinaryOperations"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the result of `5 & 3` in JavaScript?",
            options: [
                { optionText: "1", optionTag: "A" },
                { optionText: "7", optionTag: "B" },
                { optionText: "3", optionTag: "C" },
                { optionText: "0", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does the `|` operator do in binary operations?",
            options: [
                { optionText: "Performs bitwise OR", optionTag: "A" },
                { optionText: "Performs bitwise AND", optionTag: "B" },
                { optionText: "Performs bitwise NOT", optionTag: "C" },
                { optionText: "Performs bitwise XOR", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does the `^` operator do?",
            options: [
                { optionText: "Bitwise XOR", optionTag: "A" },
                { optionText: "Bitwise OR", optionTag: "B" },
                { optionText: "Bitwise AND", optionTag: "C" },
                { optionText: "Bitwise NOT", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does the `~` operator do in JavaScript?",
            options: [
                { optionText: "Bitwise NOT", optionTag: "A" },
                { optionText: "Bitwise AND", optionTag: "B" },
                { optionText: "Bitwise OR", optionTag: "C" },
                { optionText: "Bitwise XOR", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is `5 << 1` equal to?",
            options: [
                { optionText: "10", optionTag: "A" },
                { optionText: "2", optionTag: "B" },
                { optionText: "6", optionTag: "C" },
                { optionText: "3", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is `8 >> 2` equal to?",
            options: [
                { optionText: "2", optionTag: "A" },
                { optionText: "4", optionTag: "B" },
                { optionText: "1", optionTag: "C" },
                { optionText: "0", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which binary operator zero-fills left bits on right shift?",
            options: [
                { optionText: ">>>", optionTag: "A" },
                { optionText: "<<", optionTag: "B" },
                { optionText: ">>", optionTag: "C" },
                { optionText: "~", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "`1 << 3` results in:",
            options: [
                { optionText: "8", optionTag: "A" },
                { optionText: "3", optionTag: "B" },
                { optionText: "4", optionTag: "C" },
                { optionText: "6", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Binary of 10 is:",
            options: [
                { optionText: "1010", optionTag: "A" },
                { optionText: "1100", optionTag: "B" },
                { optionText: "1001", optionTag: "C" },
                { optionText: "1110", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "`10 & 6` equals:",
            options: [
                { optionText: "2", optionTag: "A" },
                { optionText: "4", optionTag: "B" },
                { optionText: "6", optionTag: "C" },
                { optionText: "0", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Binary shift left by 1 multiplies by:",
            options: [
                { optionText: "2", optionTag: "A" },
                { optionText: "10", optionTag: "B" },
                { optionText: "4", optionTag: "C" },
                { optionText: "0.5", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "`~0` in JavaScript is:",
            options: [
                { optionText: "-1", optionTag: "A" },
                { optionText: "0", optionTag: "B" },
                { optionText: "1", optionTag: "C" },
                { optionText: "undefined", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "`3 | 4` equals:",
            options: [
                { optionText: "7", optionTag: "A" },
                { optionText: "1", optionTag: "B" },
                { optionText: "4", optionTag: "C" },
                { optionText: "3", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "`6 ^ 3` equals:",
            options: [
                { optionText: "5", optionTag: "A" },
                { optionText: "3", optionTag: "B" },
                { optionText: "6", optionTag: "C" },
                { optionText: "2", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which binary operator checks bits and sets to 1 if both bits are 1?",
            options: [
                { optionText: "&", optionTag: "A" },
                { optionText: "|", optionTag: "B" },
                { optionText: "^", optionTag: "C" },
                { optionText: "~", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "`7 >> 1` equals:",
            options: [
                { optionText: "3", optionTag: "A" },
                { optionText: "2", optionTag: "B" },
                { optionText: "1", optionTag: "C" },
                { optionText: "4", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How many bits does a number in JavaScript use internally?",
            options: [
                { optionText: "32", optionTag: "A" },
                { optionText: "16", optionTag: "B" },
                { optionText: "64", optionTag: "C" },
                { optionText: "8", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "`1 ^ 1` results in:",
            options: [
                { optionText: "0", optionTag: "A" },
                { optionText: "1", optionTag: "B" },
                { optionText: "2", optionTag: "C" },
                { optionText: "undefined", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "`~1` equals:",
            options: [
                { optionText: "-2", optionTag: "A" },
                { optionText: "0", optionTag: "B" },
                { optionText: "1", optionTag: "C" },
                { optionText: "-1", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Binary of 15 is:",
            options: [
                { optionText: "1111", optionTag: "A" },
                { optionText: "1010", optionTag: "B" },
                { optionText: "1001", optionTag: "C" },
                { optionText: "1101", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
