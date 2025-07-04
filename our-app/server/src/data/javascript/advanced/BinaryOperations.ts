import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript Binary Operations - Advanced Quiz",
    quizLevel: "advanced",
    lang: "javascript",
    description: "This advanced quiz evaluates your knowledge of binary and bitwise operations in JavaScript, including bit manipulation, operators, and common use cases.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "BinaryOperations"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What does the `&` operator do in JavaScript?",
            options: [
                { optionText: "Bitwise AND", optionTag: "A" },
                { optionText: "Logical AND", optionTag: "B" },
                { optionText: "Bitwise OR", optionTag: "C" },
                { optionText: "Logical OR", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the result of `5 | 3`?",
            options: [
                { optionText: "7", optionTag: "A" },
                { optionText: "6", optionTag: "B" },
                { optionText: "1", optionTag: "C" },
                { optionText: "8", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does the `^` operator do?",
            options: [
                { optionText: "Bitwise XOR", optionTag: "A" },
                { optionText: "Bitwise NOT", optionTag: "B" },
                { optionText: "Bitwise AND", optionTag: "C" },
                { optionText: "Bitwise OR", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the result of `~0` in JavaScript?",
            options: [
                { optionText: "-1", optionTag: "A" },
                { optionText: "0", optionTag: "B" },
                { optionText: "1", optionTag: "C" },
                { optionText: "NaN", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What type conversion occurs before bitwise operations?",
            options: [
                { optionText: "To 32-bit signed integer", optionTag: "A" },
                { optionText: "To 64-bit float", optionTag: "B" },
                { optionText: "To string", optionTag: "C" },
                { optionText: "None", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How do you perform a left shift by 2 bits on `x`?",
            options: [
                { optionText: "x << 2", optionTag: "A" },
                { optionText: "x >> 2", optionTag: "B" },
                { optionText: "x >>> 2", optionTag: "C" },
                { optionText: "x ** 2", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does `>>>` operator perform?",
            options: [
                { optionText: "Zero-fill right shift", optionTag: "A" },
                { optionText: "Sign-propagating right shift", optionTag: "B" },
                { optionText: "Left rotate", optionTag: "C" },
                { optionText: "Arithmetic left shift", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the result of `-1 >>> 1`?",
            options: [
                { optionText: "2147483647", optionTag: "A" },
                { optionText: "-1", optionTag: "B" },
                { optionText: "1073741823", optionTag: "C" },
                { optionText: "0", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How to test if the nth bit of x is set?",
            options: [
                { optionText: "Boolean(x & (1 << n))", optionTag: "A" },
                { optionText: "Boolean(x | (1 << n))", optionTag: "B" },
                { optionText: "x >> n", optionTag: "C" },
                { optionText: "x << n", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is `x & -x` useful for?",
            options: [
                { optionText: "Extracting lowest set bit", optionTag: "A" },
                { optionText: "Clearing all bits", optionTag: "B" },
                { optionText: "Setting all bits", optionTag: "C" },
                { optionText: "Flipping sign", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How to clear the nth bit of x?",
            options: [
                { optionText: "x & ~(1 << n)", optionTag: "A" },
                { optionText: "x | ~(1 << n)", optionTag: "B" },
                { optionText: "x ^ (1 << n)", optionTag: "C" },
                { optionText: "~x & (1 << n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which operator flips all bits of x?",
            options: [
                { optionText: "~x", optionTag: "A" },
                { optionText: "-x", optionTag: "B" },
                { optionText: "^x", optionTag: "C" },
                { optionText: "!x", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What’s the result of `x ^= x`?",
            options: [
                { optionText: "0", optionTag: "A" },
                { optionText: "x", optionTag: "B" },
                { optionText: "-x", optionTag: "C" },
                { optionText: "Undefined", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does `x |= (1 << n)` do?",
            options: [
                { optionText: "Sets the nth bit", optionTag: "A" },
                { optionText: "Clears the nth bit", optionTag: "B" },
                { optionText: "Toggles the nth bit", optionTag: "C" },
                { optionText: "Checks nth bit", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which operator is used for bitwise NOT?",
            options: [
                { optionText: "~", optionTag: "A" },
                { optionText: "!", optionTag: "B" },
                { optionText: "-", optionTag: "C" },
                { optionText: "^", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "When combining bitwise and logical, what is evaluated first?",
            options: [
                { optionText: "Bitwise", optionTag: "A" },
                { optionText: "Logical", optionTag: "B" },
                { optionText: "Depends on operands", optionTag: "C" },
                { optionText: "Neither", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the result of `0b1010 << 2`?",
            options: [
                { optionText: "40", optionTag: "A" },
                { optionText: "10", optionTag: "B" },
                { optionText: "2", optionTag: "C" },
                { optionText: "80", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which operation clears all bits except lowest set bit?",
            options: [
                { optionText: "x & -x", optionTag: "A" },
                { optionText: "x | -x", optionTag: "B" },
                { optionText: "~x", optionTag: "C" },
                { optionText: "x ^ -x", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Why should you be cautious using bitwise on floats?",
            options: [
                { optionText: "They’re converted to 32-bit ints, possibly losing precision", optionTag: "A" },
                { optionText: "They become strings", optionTag: "B" },
                { optionText: "They throw errors", optionTag: "C" },
                { optionText: "They become BigInts", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does `x >> 0` do?",
            options: [
                { optionText: "Converts x to 32-bit int", optionTag: "A" },
                { optionText: "Divides by zero", optionTag: "B" },
                { optionText: "Zero-fill shift", optionTag: "C" },
                { optionText: "No operation", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
