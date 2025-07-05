import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ Binary Operations - Beginner Quiz",
    quizLevel: "beginner",
    lang: "cpp",
    description: "This quiz tests your basic understanding of binary operations in C++.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "BinaryOperations"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What does the bitwise AND operator '&' do?",
            options: [
                { optionText: "Performs AND operation on each pair of bits", optionTag: "A" },
                { optionText: "Performs OR operation on each pair of bits", optionTag: "B" },
                { optionText: "Adds two numbers", optionTag: "C" },
                { optionText: "Inverts all bits", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the result of 5 & 3 in binary?",
            options: [
                { optionText: "1", optionTag: "A" },
                { optionText: "7", optionTag: "B" },
                { optionText: "0", optionTag: "C" },
                { optionText: "5", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does the bitwise OR operator '|' do?",
            options: [
                { optionText: "Sets bit to 1 if either bit is 1", optionTag: "A" },
                { optionText: "Sets bit to 0 if both bits are 0", optionTag: "B" },
                { optionText: "Flips each bit", optionTag: "C" },
                { optionText: "Adds numbers", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the result of 6 | 3 in binary?",
            options: [
                { optionText: "7", optionTag: "A" },
                { optionText: "3", optionTag: "B" },
                { optionText: "5", optionTag: "C" },
                { optionText: "0", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does the bitwise XOR operator '^' do?",
            options: [
                { optionText: "Sets bit to 1 if bits are different", optionTag: "A" },
                { optionText: "Sets bit to 1 if bits are same", optionTag: "B" },
                { optionText: "Always returns 1", optionTag: "C" },
                { optionText: "Inverts all bits", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the result of 4 ^ 5?",
            options: [
                { optionText: "1", optionTag: "A" },
                { optionText: "9", optionTag: "B" },
                { optionText: "0", optionTag: "C" },
                { optionText: "7", optionTag: "D" }
            ],
            correctOption: "D",
            score: 1
        },
        {
            questionText: "Which operator is used for bitwise NOT?",
            options: [
                { optionText: "~", optionTag: "A" },
                { optionText: "!", optionTag: "B" },
                { optionText: "^", optionTag: "C" },
                { optionText: "#", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the binary representation of decimal 8?",
            options: [
                { optionText: "1000", optionTag: "A" },
                { optionText: "0100", optionTag: "B" },
                { optionText: "0010", optionTag: "C" },
                { optionText: "1111", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which operation shifts bits to the left?",
            options: [
                { optionText: "<<", optionTag: "A" },
                { optionText: ">>", optionTag: "B" },
                { optionText: "<<<", optionTag: "C" },
                { optionText: "^", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does (3 << 1) return?",
            options: [
                { optionText: "6", optionTag: "A" },
                { optionText: "2", optionTag: "B" },
                { optionText: "1", optionTag: "C" },
                { optionText: "0", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which operation shifts bits to the right?",
            options: [
                { optionText: ">>", optionTag: "A" },
                { optionText: "<<", optionTag: "B" },
                { optionText: ">>>", optionTag: "C" },
                { optionText: "><", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does (4 >> 1) return?",
            options: [
                { optionText: "2", optionTag: "A" },
                { optionText: "1", optionTag: "B" },
                { optionText: "4", optionTag: "C" },
                { optionText: "8", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is (1 << 3)?",
            options: [
                { optionText: "8", optionTag: "A" },
                { optionText: "3", optionTag: "B" },
                { optionText: "1", optionTag: "C" },
                { optionText: "0", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these is not a bitwise operator?",
            options: [
                { optionText: "+", optionTag: "A" },
                { optionText: "&", optionTag: "B" },
                { optionText: "|", optionTag: "C" },
                { optionText: "^", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the output of ~0 in C++ (on 32-bit system)?",
            options: [
                { optionText: "-1", optionTag: "A" },
                { optionText: "0", optionTag: "B" },
                { optionText: "1", optionTag: "C" },
                { optionText: "All bits 1", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is 7 & 1?",
            options: [
                { optionText: "1", optionTag: "A" },
                { optionText: "7", optionTag: "B" },
                { optionText: "6", optionTag: "C" },
                { optionText: "0", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the use of bitwise operators?",
            options: [
                { optionText: "To manipulate bits directly", optionTag: "A" },
                { optionText: "To print data", optionTag: "B" },
                { optionText: "To format strings", optionTag: "C" },
                { optionText: "To define classes", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which is the result of 15 ^ 15?",
            options: [
                { optionText: "0", optionTag: "A" },
                { optionText: "15", optionTag: "B" },
                { optionText: "1", optionTag: "C" },
                { optionText: "-1", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which operator clears a bit in a bitmask?",
            options: [
                { optionText: "& with NOT mask", optionTag: "A" },
                { optionText: "| mask", optionTag: "B" },
                { optionText: "^ with 0", optionTag: "C" },
                { optionText: "~ value", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which operator toggles a bit?",
            options: [
                { optionText: "^", optionTag: "A" },
                { optionText: "&", optionTag: "B" },
                { optionText: "|", optionTag: "C" },
                { optionText: "~", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
