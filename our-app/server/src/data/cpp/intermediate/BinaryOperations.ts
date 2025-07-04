import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ Binary Operations - Intermediate Quiz",
    quizLevel: "intermediate",
    lang: "cpp",
    description: "This quiz tests your intermediate understanding of binary operations in C++.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "BinaryOperations"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What does the '^' operator do in C++?",
            options: [
                { optionText: "Performs bitwise XOR", optionTag: "A" },
                { optionText: "Performs power operation", optionTag: "B" },
                { optionText: "Performs AND operation", optionTag: "C" },
                { optionText: "Performs OR operation", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which operator is used for bitwise OR in C++?",
            options: [
                { optionText: "|", optionTag: "A" },
                { optionText: "&", optionTag: "B" },
                { optionText: "||", optionTag: "C" },
                { optionText: "^", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the result of 5 & 3 in binary operations?",
            options: [
                { optionText: "1", optionTag: "A" },
                { optionText: "0", optionTag: "B" },
                { optionText: "7", optionTag: "C" },
                { optionText: "6", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the output of 4 << 1?",
            options: [
                { optionText: "8", optionTag: "A" },
                { optionText: "6", optionTag: "B" },
                { optionText: "2", optionTag: "C" },
                { optionText: "4", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which operation flips all bits in a number?",
            options: [
                { optionText: "~", optionTag: "A" },
                { optionText: "^", optionTag: "B" },
                { optionText: "&", optionTag: "C" },
                { optionText: "|", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How do you check if a number is even using binary operations?",
            options: [
                { optionText: "(num & 1) == 0", optionTag: "A" },
                { optionText: "(num | 1) == 0", optionTag: "B" },
                { optionText: "(num ^ 1) == 0", optionTag: "C" },
                { optionText: "(num && 1) == 1", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which operator is used for right shift?",
            options: [
                { optionText: ">>", optionTag: "A" },
                { optionText: "<<", optionTag: "B" },
                { optionText: ">", optionTag: "C" },
                { optionText: "<", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the result of 1 << 3?",
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
            questionText: "Which of the following is true for bitmasking?",
            options: [
                { optionText: "It is used to set, unset, or toggle specific bits", optionTag: "A" },
                { optionText: "It is used for sorting only", optionTag: "B" },
                { optionText: "It works only with float types", optionTag: "C" },
                { optionText: "It is used to check memory alignment", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How do you set the ith bit of an integer x?",
            options: [
                { optionText: "x | (1 << i)", optionTag: "A" },
                { optionText: "x & (1 << i)", optionTag: "B" },
                { optionText: "x ^ (1 << i)", optionTag: "C" },
                { optionText: "~x & (1 << i)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How do you unset the ith bit of an integer x?",
            options: [
                { optionText: "x & ~(1 << i)", optionTag: "A" },
                { optionText: "x | ~(1 << i)", optionTag: "B" },
                { optionText: "x ^ ~(1 << i)", optionTag: "C" },
                { optionText: "~x | (1 << i)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How do you toggle the ith bit of x?",
            options: [
                { optionText: "x ^ (1 << i)", optionTag: "A" },
                { optionText: "x & (1 << i)", optionTag: "B" },
                { optionText: "x | ~(1 << i)", optionTag: "C" },
                { optionText: "x & ~(1 << i)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following can be used to check if a number is a power of 2?",
            options: [
                { optionText: "num & (num - 1) == 0", optionTag: "A" },
                { optionText: "num | (num - 1) == 0", optionTag: "B" },
                { optionText: "num ^ (num - 1) == 0", optionTag: "C" },
                { optionText: "num + (num - 1) == 0", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the result of 6 ^ 3?",
            options: [
                { optionText: "5", optionTag: "A" },
                { optionText: "7", optionTag: "B" },
                { optionText: "2", optionTag: "C" },
                { optionText: "9", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the result of 10 >> 2?",
            options: [
                { optionText: "2", optionTag: "A" },
                { optionText: "4", optionTag: "B" },
                { optionText: "6", optionTag: "C" },
                { optionText: "8", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is a bitmask?",
            options: [
                { optionText: "A binary pattern used to manipulate specific bits", optionTag: "A" },
                { optionText: "A type of encryption algorithm", optionTag: "B" },
                { optionText: "A C++ compiler", optionTag: "C" },
                { optionText: "A memory leak", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does 'x & (x - 1)' do?",
            options: [
                { optionText: "Turns off the rightmost set bit", optionTag: "A" },
                { optionText: "Sets all bits to 1", optionTag: "B" },
                { optionText: "Turns on the rightmost unset bit", optionTag: "C" },
                { optionText: "Shifts x right by 1", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which operation checks if the ith bit is set?",
            options: [
                { optionText: "x & (1 << i)", optionTag: "A" },
                { optionText: "x | (1 << i)", optionTag: "B" },
                { optionText: "x ^ (1 << i)", optionTag: "C" },
                { optionText: "~x & (1 << i)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How can you count the number of set bits in an integer efficiently?",
            options: [
                { optionText: "Using __builtin_popcount(x)", optionTag: "A" },
                { optionText: "Using x / 2", optionTag: "B" },
                { optionText: "Using x % 10", optionTag: "C" },
                { optionText: "Using x * 2", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following results in clearing all bits of x?",
            options: [
                { optionText: "x = 0", optionTag: "A" },
                { optionText: "x & x", optionTag: "B" },
                { optionText: "x << 0", optionTag: "C" },
                { optionText: "x ^ x", optionTag: "D" }
            ],
            correctOption: "D",
            score: 1
        }
    ]
};

export default quizData;
