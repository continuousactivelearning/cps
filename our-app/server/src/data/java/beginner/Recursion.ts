import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "Java Recursion - Beginner Quiz",
    quizLevel: "beginner",
    lang: "java",
    description: "This quiz covers the fundamentals of recursion in Java for beginners.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "Recursion"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is recursion in Java?",
            options: [
                { optionText: "A method calling itself", optionTag: "A" },
                { optionText: "A type of loop", optionTag: "B" },
                { optionText: "A class that inherits another", optionTag: "C" },
                { optionText: "A design pattern", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which part is most important in a recursive function?",
            options: [
                { optionText: "Loop counter", optionTag: "A" },
                { optionText: "Base case", optionTag: "B" },
                { optionText: "Constructor", optionTag: "C" },
                { optionText: "Print statement", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "What happens if the base case is missing in a recursive method?",
            options: [
                { optionText: "The program runs faster", optionTag: "A" },
                { optionText: "The program ends normally", optionTag: "B" },
                { optionText: "StackOverflowError occurs", optionTag: "C" },
                { optionText: "The method returns null", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "Which of these is a good example of recursion?",
            options: [
                { optionText: "Calculating factorial", optionTag: "A" },
                { optionText: "Opening a file", optionTag: "B" },
                { optionText: "Creating a thread", optionTag: "C" },
                { optionText: "Declaring variables", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which keyword is used to define a method in Java?",
            options: [
                { optionText: "func", optionTag: "A" },
                { optionText: "method", optionTag: "B" },
                { optionText: "def", optionTag: "C" },
                { optionText: "void/int/etc.", optionTag: "D" }
            ],
            correctOption: "D",
            score: 1
        },
        {
            questionText: "Which is the base case in this recursion: factorial(n)?",
            options: [
                { optionText: "n == 0 or n == 1", optionTag: "A" },
                { optionText: "n == 2", optionTag: "B" },
                { optionText: "n < 0", optionTag: "C" },
                { optionText: "n % 2 == 0", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the return type of a method that returns a value?",
            options: [
                { optionText: "void", optionTag: "A" },
                { optionText: "int, String, etc.", optionTag: "B" },
                { optionText: "method", optionTag: "C" },
                { optionText: "return", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "Which keyword is used to return a value in recursion?",
            options: [
                { optionText: "break", optionTag: "A" },
                { optionText: "exit", optionTag: "B" },
                { optionText: "return", optionTag: "C" },
                { optionText: "stop", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "Which of the following is a recursive solution?",
            options: [
                { optionText: "Iterating with for loop", optionTag: "A" },
                { optionText: "Method calling itself", optionTag: "B" },
                { optionText: "Declaring arrays", optionTag: "C" },
                { optionText: "Using Scanner", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "Recursion uses which memory structure to store function calls?",
            options: [
                { optionText: "Queue", optionTag: "A" },
                { optionText: "Stack", optionTag: "B" },
                { optionText: "Array", optionTag: "C" },
                { optionText: "Tree", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "Is recursion always better than iteration?",
            options: [
                { optionText: "Yes, always", optionTag: "A" },
                { optionText: "Only for small data", optionTag: "B" },
                { optionText: "Not always", optionTag: "C" },
                { optionText: "Yes, in Java only", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "What is the output of a function with base case return 1 and called with n = 1?",
            options: [
                { optionText: "0", optionTag: "A" },
                { optionText: "1", optionTag: "B" },
                { optionText: "Error", optionTag: "C" },
                { optionText: "Infinite loop", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "Which method calls itself?",
            options: [
                { optionText: "loop()", optionTag: "A" },
                { optionText: "selfCall()", optionTag: "B" },
                { optionText: "recursion()", optionTag: "C" },
                { optionText: "Any method with its name inside", optionTag: "D" }
            ],
            correctOption: "D",
            score: 1
        },
        {
            questionText: "How many base cases are required in recursion?",
            options: [
                { optionText: "At least 1", optionTag: "A" },
                { optionText: "2 minimum", optionTag: "B" },
                { optionText: "None", optionTag: "C" },
                { optionText: "Unlimited", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Can we use if-else in recursion?",
            options: [
                { optionText: "No", optionTag: "A" },
                { optionText: "Only else", optionTag: "B" },
                { optionText: "Yes", optionTag: "C" },
                { optionText: "Only if", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "Recursion is useful for which problem?",
            options: [
                { optionText: "Finding max in array", optionTag: "A" },
                { optionText: "Tree traversal", optionTag: "B" },
                { optionText: "File input", optionTag: "C" },
                { optionText: "User login", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "Which condition causes recursive termination?",
            options: [
                { optionText: "void return", optionTag: "A" },
                { optionText: "Method end", optionTag: "B" },
                { optionText: "Base case satisfied", optionTag: "C" },
                { optionText: "If statement", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "Which error is common in deep recursion?",
            options: [
                { optionText: "NullPointerException", optionTag: "A" },
                { optionText: "IndexOutOfBoundsException", optionTag: "B" },
                { optionText: "StackOverflowError", optionTag: "C" },
                { optionText: "IOException", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "Is the base case checked before or after recursive call?",
            options: [
                { optionText: "Before", optionTag: "A" },
                { optionText: "After", optionTag: "B" },
                { optionText: "At the same time", optionTag: "C" },
                { optionText: "Never checked", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which recursion is direct?",
            options: [
                { optionText: "A method calls another", optionTag: "A" },
                { optionText: "A method calls itself", optionTag: "B" },
                { optionText: "Two methods call each other", optionTag: "C" },
                { optionText: "A method runs a loop", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        }
    ]
};

export default quizData;