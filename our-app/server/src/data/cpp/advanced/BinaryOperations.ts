import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ Binary Operations - Advanced Quiz",
    quizLevel: "advanced",
    lang: "cpp",
    description: "This quiz tests your advanced understanding of Binary Operations in C++.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "BinaryOperations"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "Which bitwise operation clears the lowest set bit of an integer n?",
            options: [
                { optionText: "n & (n - 1)", optionTag: "A" },
                { optionText: "n | (n - 1)", optionTag: "B" },
                { optionText: "n ^ (n - 1)", optionTag: "C" },
                { optionText: "~n", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following flips all bits of n?",
            options: [
                { optionText: "~n", optionTag: "A" },
                { optionText: "!n", optionTag: "B" },
                { optionText: "n & 0", optionTag: "C" },
                { optionText: "n | 0", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How do you isolate the lowest set bit of n?",
            options: [
                { optionText: "n & -n", optionTag: "A" },
                { optionText: "n | -n", optionTag: "B" },
                { optionText: "n ^ -n", optionTag: "C" },
                { optionText: "n >> 1", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which operator is used for XOR in C++?",
            options: [
                { optionText: "^", optionTag: "A" },
                { optionText: "&", optionTag: "B" },
                { optionText: "|", optionTag: "C" },
                { optionText: "~", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How do you check if the kth bit of n is set?",
            options: [
                { optionText: "(n & (1 << k)) != 0", optionTag: "A" },
                { optionText: "n ^ (1 << k)", optionTag: "B" },
                { optionText: "n | (1 << k)", optionTag: "C" },
                { optionText: "(n >> k) & 0", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which bitwise operation can set the kth bit?",
            options: [
                { optionText: "n | (1 << k)", optionTag: "A" },
                { optionText: "n & ~(1 << k)", optionTag: "B" },
                { optionText: "n ^ (1 << k)", optionTag: "C" },
                { optionText: "n >> k", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How do you toggle the kth bit of a number?",
            options: [
                { optionText: "n ^ (1 << k)", optionTag: "A" },
                { optionText: "n & (1 << k)", optionTag: "B" },
                { optionText: "n | (1 << k)", optionTag: "C" },
                { optionText: "n >> (1 << k)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the result of n ^ n for any integer n?",
            options: [
                { optionText: "0", optionTag: "A" },
                { optionText: "n", optionTag: "B" },
                { optionText: "1", optionTag: "C" },
                { optionText: "~n", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which C++ builtin counts the number of set bits in an integer?",
            options: [
                { optionText: "__builtin_popcount(n)", optionTag: "A" },
                { optionText: "countBits(n)", optionTag: "B" },
                { optionText: "bitCount(n)", optionTag: "C" },
                { optionText: "popcnt(n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which expression sets the lowest unset bit?",
            options: [
                { optionText: "n | (n + 1)", optionTag: "A" },
                { optionText: "n & (n - 1)", optionTag: "B" },
                { optionText: "n ^ (n - 1)", optionTag: "C" },
                { optionText: "n & -n", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How do you check if a number is a power of 2?",
            options: [
                { optionText: "n > 0 && (n & (n - 1)) == 0", optionTag: "A" },
                { optionText: "n == (1 << n)", optionTag: "B" },
                { optionText: "n & n == n", optionTag: "C" },
                { optionText: "n % 2 == 0", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which operator is used for left shift in C++?",
            options: [
                { optionText: "<<", optionTag: "A" },
                { optionText: ">>", optionTag: "B" },
                { optionText: "&", optionTag: "C" },
                { optionText: "|", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the result of 1 << 3?",
            options: [
                { optionText: "8", optionTag: "A" },
                { optionText: "6", optionTag: "B" },
                { optionText: "4", optionTag: "C" },
                { optionText: "16", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which operation unsets the kth bit?",
            options: [
                { optionText: "n & ~(1 << k)", optionTag: "A" },
                { optionText: "n | ~(1 << k)", optionTag: "B" },
                { optionText: "n ^ (1 << k)", optionTag: "C" },
                { optionText: "~n & (1 << k)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the value of ~0 for a 32-bit signed integer?",
            options: [
                { optionText: "-1", optionTag: "A" },
                { optionText: "0", optionTag: "B" },
                { optionText: "MAX_INT", optionTag: "C" },
                { optionText: "MIN_INT", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How do you reverse bits in an integer using a loop?",
            options: [
                { optionText: "Iterate and shift bits to opposite positions", optionTag: "A" },
                { optionText: "Use XOR repeatedly", optionTag: "B" },
                { optionText: "Multiply by 2", optionTag: "C" },
                { optionText: "Divide and conquer", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following will always result in 1?",
            options: [
                { optionText: "n | ~n", optionTag: "A" },
                { optionText: "n & ~n", optionTag: "B" },
                { optionText: "n ^ n", optionTag: "C" },
                { optionText: "~n ^ ~n", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which method is used to rotate bits to the left?",
            options: [
                { optionText: "(n << k) | (n >> (32 - k))", optionTag: "A" },
                { optionText: "(n >> k) & (n << (32 - k))", optionTag: "B" },
                { optionText: "n ^ (1 << k)", optionTag: "C" },
                { optionText: "n | (1 << k)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which bit operation finds the parity (odd/even number of 1s)?",
            options: [
                { optionText: "XOR reduction", optionTag: "A" },
                { optionText: "AND reduction", optionTag: "B" },
                { optionText: "OR reduction", optionTag: "C" },
                { optionText: "Bit rotation", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which expression counts trailing zeros?",
            options: [
                { optionText: "__builtin_ctz(n)", optionTag: "A" },
                { optionText: "__builtin_clz(n)", optionTag: "B" },
                { optionText: "__builtin_popcount(n)", optionTag: "C" },
                { optionText: "log2(n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
