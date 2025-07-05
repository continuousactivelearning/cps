import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript Recursion - Beginner Quiz",
    quizLevel: "beginner",
    lang: "javascript",
    description: "This quiz evaluates your understanding of basic recursion concepts in JavaScript.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "Recursion"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is recursion in JavaScript?",
            options: [
                { optionText: "A function calling itself", optionTag: "A" },
                { optionText: "A loop inside a function", optionTag: "B" },
                { optionText: "A class within a function", optionTag: "C" },
                { optionText: "None of the above", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which is a necessary part of a recursive function?",
            options: [
                { optionText: "Base case", optionTag: "A" },
                { optionText: "Arrow function", optionTag: "B" },
                { optionText: "Loop", optionTag: "C" },
                { optionText: "Return statement", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens if a base case is not defined in recursion?",
            options: [
                { optionText: "Stack overflow error", optionTag: "A" },
                { optionText: "Returns 0", optionTag: "B" },
                { optionText: "Infinite loop", optionTag: "C" },
                { optionText: "Both A and C", optionTag: "D" }
            ],
            correctOption: "D",
            score: 1
        },
        {
            questionText: "Which keyword is typically used to return a value in recursion?",
            options: [
                { optionText: "return", optionTag: "A" },
                { optionText: "break", optionTag: "B" },
                { optionText: "continue", optionTag: "C" },
                { optionText: "yield", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the result of calling a recursive function with no base case?",
            options: [
                { optionText: "It never ends", optionTag: "A" },
                { optionText: "Syntax error", optionTag: "B" },
                { optionText: "Compilation error", optionTag: "C" },
                { optionText: "The function returns null", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the stack used for during recursion?",
            options: [
                { optionText: "To keep track of function calls", optionTag: "A" },
                { optionText: "To store variables", optionTag: "B" },
                { optionText: "To hold arrays", optionTag: "C" },
                { optionText: "To hold DOM elements", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the base case for factorial(0)?",
            options: [
                { optionText: "1", optionTag: "A" },
                { optionText: "0", optionTag: "B" },
                { optionText: "undefined", optionTag: "C" },
                { optionText: "Infinity", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is a correct recursive call?",
            options: [
                { optionText: "return factorial(n - 1);", optionTag: "A" },
                { optionText: "factorial = factorial - 1;", optionTag: "B" },
                { optionText: "call factorial;", optionTag: "C" },
                { optionText: "factorial(n);", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the depth of recursion?",
            options: [
                { optionText: "Number of nested recursive calls", optionTag: "A" },
                { optionText: "Stack size", optionTag: "B" },
                { optionText: "Function size", optionTag: "C" },
                { optionText: "None of the above", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What will `function f(n){ if(n==0) return; f(n-1); }` do?",
            options: [
                { optionText: "Print nothing", optionTag: "A" },
                { optionText: "Call itself infinitely", optionTag: "B" },
                { optionText: "Call itself n times", optionTag: "C" },
                { optionText: "Return n", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "Which is an advantage of recursion?",
            options: [
                { optionText: "Simplifies code for complex problems", optionTag: "A" },
                { optionText: "Faster execution", optionTag: "B" },
                { optionText: "Consumes less memory", optionTag: "C" },
                { optionText: "Requires no return statement", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the disadvantage of recursion?",
            options: [
                { optionText: "Consumes more memory", optionTag: "A" },
                { optionText: "Difficult to understand", optionTag: "B" },
                { optionText: "Stack overflow", optionTag: "C" },
                { optionText: "All of the above", optionTag: "D" }
            ],
            correctOption: "D",
            score: 1
        },
        {
            questionText: "Which of these problems is best solved with recursion?",
            options: [
                { optionText: "Tree traversal", optionTag: "A" },
                { optionText: "Printing hello", optionTag: "B" },
                { optionText: "Adding two numbers", optionTag: "C" },
                { optionText: "Sorting an array", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which keyword is used to define a function?",
            options: [
                { optionText: "function", optionTag: "A" },
                { optionText: "fun", optionTag: "B" },
                { optionText: "define", optionTag: "C" },
                { optionText: "func", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Is recursion always necessary?",
            options: [
                { optionText: "No", optionTag: "A" },
                { optionText: "Yes", optionTag: "B" },
                { optionText: "Only in loops", optionTag: "C" },
                { optionText: "Only in arrays", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does tail recursion mean?",
            options: [
                { optionText: "Recursive call is the last thing in the function", optionTag: "A" },
                { optionText: "Recursive call is at the beginning", optionTag: "B" },
                { optionText: "Recursion in tail of array", optionTag: "C" },
                { optionText: "Recursive call calls two functions", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these is true about recursive functions?",
            options: [
                { optionText: "They must reach a base case", optionTag: "A" },
                { optionText: "They cannot return a value", optionTag: "B" },
                { optionText: "They do not need return", optionTag: "C" },
                { optionText: "They never end", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is `return n * factorial(n-1);` an example of?",
            options: [
                { optionText: "Recursive multiplication", optionTag: "A" },
                { optionText: "Base case", optionTag: "B" },
                { optionText: "Loop", optionTag: "C" },
                { optionText: "Iteration", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is used to end a recursive loop?",
            options: [
                { optionText: "Base case condition", optionTag: "A" },
                { optionText: "Break", optionTag: "B" },
                { optionText: "Loop limit", optionTag: "C" },
                { optionText: "return false", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How many base cases can a recursive function have?",
            options: [
                { optionText: "One or more", optionTag: "A" },
                { optionText: "Only one", optionTag: "B" },
                { optionText: "None", optionTag: "C" },
                { optionText: "Unlimited", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;