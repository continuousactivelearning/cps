import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript Binary Operations - Intermediate Quiz",
    quizLevel: "intermediate",
    lang: "javascript",
    description: "This quiz tests your intermediate understanding of binary operations in JavaScript.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "BinaryOperations"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the result of the expression 5 & 3 in JavaScript?",
            options: [
                { optionText: "1", optionTag: "A" },
                { optionText: "7", optionTag: "B" },
                { optionText: "0", optionTag: "C" },
                { optionText: "3", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does the '>>>' operator do in JavaScript?",
            options: [
                { optionText: "Unsigned right shift", optionTag: "A" },
                { optionText: "Signed right shift", optionTag: "B" },
                { optionText: "Left shift", optionTag: "C" },
                { optionText: "Bitwise AND", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the binary representation of the number 10?",
            options: [
                { optionText: "1010", optionTag: "A" },
                { optionText: "1001", optionTag: "B" },
                { optionText: "1110", optionTag: "C" },
                { optionText: "0101", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does the expression 4 | 1 evaluate to?",
            options: [
                { optionText: "5", optionTag: "A" },
                { optionText: "0", optionTag: "B" },
                { optionText: "3", optionTag: "C" },
                { optionText: "6", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following performs a bitwise XOR?",
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
            questionText: "What is the result of ~5 in JavaScript?",
            options: [
                { optionText: "-6", optionTag: "A" },
                { optionText: "-5", optionTag: "B" },
                { optionText: "4", optionTag: "C" },
                { optionText: "0", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does (8 >> 2) return?",
            options: [
                { optionText: "2", optionTag: "A" },
                { optionText: "1", optionTag: "B" },
                { optionText: "4", optionTag: "C" },
                { optionText: "16", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which operation sets the n-th bit of a number to 1?",
            options: [
                { optionText: "number | (1 << n)", optionTag: "A" },
                { optionText: "number & (1 << n)", optionTag: "B" },
                { optionText: "number ^ (1 << n)", optionTag: "C" },
                { optionText: "number << n", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which operator in JavaScript checks for equality without type conversion?",
            options: [
                { optionText: "===", optionTag: "A" },
                { optionText: "==", optionTag: "B" },
                { optionText: "=", optionTag: "C" },
                { optionText: "!==", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the value of 1 << 3?",
            options: [
                { optionText: "8", optionTag: "A" },
                { optionText: "3", optionTag: "B" },
                { optionText: "6", optionTag: "C" },
                { optionText: "4", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What operation clears the n-th bit of a number?",
            options: [
                { optionText: "number & ~(1 << n)", optionTag: "A" },
                { optionText: "number | ~(1 << n)", optionTag: "B" },
                { optionText: "number ^ ~(1 << n)", optionTag: "C" },
                { optionText: "number << n", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which bitwise operator inverts all the bits?",
            options: [
                { optionText: "~", optionTag: "A" },
                { optionText: "&", optionTag: "B" },
                { optionText: "|", optionTag: "C" },
                { optionText: "^", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How do you check if a number is a power of 2 using binary operations?",
            options: [
                { optionText: "(num & (num - 1)) === 0", optionTag: "A" },
                { optionText: "(num | (num - 1)) === 0", optionTag: "B" },
                { optionText: "(num ^ (num - 1)) === 0", optionTag: "C" },
                { optionText: "(num + (num - 1)) === 0", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How do you toggle the n-th bit of a number?",
            options: [
                { optionText: "number ^ (1 << n)", optionTag: "A" },
                { optionText: "number & (1 << n)", optionTag: "B" },
                { optionText: "number | (1 << n)", optionTag: "C" },
                { optionText: "number << n", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the use of the & operator in binary manipulation?",
            options: [
                { optionText: "To mask bits", optionTag: "A" },
                { optionText: "To toggle bits", optionTag: "B" },
                { optionText: "To set bits", optionTag: "C" },
                { optionText: "To shift bits", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is 7 ^ 3?",
            options: [
                { optionText: "4", optionTag: "A" },
                { optionText: "5", optionTag: "B" },
                { optionText: "6", optionTag: "C" },
                { optionText: "10", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which operator performs a logical AND in JavaScript?",
            options: [
                { optionText: "&&", optionTag: "A" },
                { optionText: "&", optionTag: "B" },
                { optionText: "and", optionTag: "C" },
                { optionText: "^", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How can you check if the 2nd bit is set in a number?",
            options: [
                { optionText: "(number & (1 << 1)) !== 0", optionTag: "A" },
                { optionText: "(number | (1 << 1)) === 0", optionTag: "B" },
                { optionText: "(number ^ (1 << 1)) === 0", optionTag: "C" },
                { optionText: "(number >> 1) === 1", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the value of (14 >> 1)?",
            options: [
                { optionText: "7", optionTag: "A" },
                { optionText: "6", optionTag: "B" },
                { optionText: "8", optionTag: "C" },
                { optionText: "12", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the result of the binary expression: 1100 & 1010?",
            options: [
                { optionText: "1000", optionTag: "A" },
                { optionText: "1110", optionTag: "B" },
                { optionText: "0100", optionTag: "C" },
                { optionText: "0110", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
