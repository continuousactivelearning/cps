import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "Java Stacks - Intermediate Quiz",
    quizLevel: "intermediate",
    lang: "java",
    description: "This quiz covers intermediate concepts of Stacks in Java.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "Stacks"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the time complexity of the push operation in a stack?",
            options: [
                { optionText: "O(1)", optionTag: "A" },
                { optionText: "O(n)", optionTag: "B" },
                { optionText: "O(log n)", optionTag: "C" },
                { optionText: "O(n log n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following methods is used to remove the top element of a stack in Java?",
            options: [
                { optionText: "pop()", optionTag: "A" },
                { optionText: "push()", optionTag: "B" },
                { optionText: "peek()", optionTag: "C" },
                { optionText: "top()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens when you call pop() on an empty stack?",
            options: [
                { optionText: "Throws EmptyStackException", optionTag: "A" },
                { optionText: "Returns null", optionTag: "B" },
                { optionText: "Returns 0", optionTag: "C" },
                { optionText: "Throws NullPointerException", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which method is used to view the top element without removing it?",
            options: [
                { optionText: "peek()", optionTag: "A" },
                { optionText: "pop()", optionTag: "B" },
                { optionText: "top()", optionTag: "C" },
                { optionText: "show()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the underlying data structure of Java's Stack class?",
            options: [
                { optionText: "Vector", optionTag: "A" },
                { optionText: "ArrayList", optionTag: "B" },
                { optionText: "LinkedList", optionTag: "C" },
                { optionText: "Array", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which stack operation is not supported directly by the Stack class?",
            options: [
                { optionText: "Insert at bottom", optionTag: "A" },
                { optionText: "Push", optionTag: "B" },
                { optionText: "Pop", optionTag: "C" },
                { optionText: "Peek", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens if you push elements beyond the stack's initial capacity?",
            options: [
                { optionText: "The stack automatically resizes", optionTag: "A" },
                { optionText: "StackOverflowError is thrown", optionTag: "B" },
                { optionText: "Elements are overwritten", optionTag: "C" },
                { optionText: "Compilation error", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following applications typically use stacks?",
            options: [
                { optionText: "Function call management", optionTag: "A" },
                { optionText: "Undo operations", optionTag: "B" },
                { optionText: "Expression evaluation", optionTag: "C" },
                { optionText: "All of the above", optionTag: "D" }
            ],
            correctOption: "D",
            score: 1
        },
        {
            questionText: "Which Java package provides the Stack class?",
            options: [
                { optionText: "java.util", optionTag: "A" },
                { optionText: "java.stack", optionTag: "B" },
                { optionText: "java.ds", optionTag: "C" },
                { optionText: "java.collections", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the initial state of an empty stack?",
            options: [
                { optionText: "Top pointer at -1", optionTag: "A" },
                { optionText: "Top pointer at 0", optionTag: "B" },
                { optionText: "Top pointer at null", optionTag: "C" },
                { optionText: "Top pointer at 1", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the order of elements in a stack?",
            options: [
                { optionText: "LIFO (Last In First Out)", optionTag: "A" },
                { optionText: "FIFO (First In First Out)", optionTag: "B" },
                { optionText: "Sorted Order", optionTag: "C" },
                { optionText: "Random Order", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the output of isEmpty() when the stack has elements?",
            options: [
                { optionText: "false", optionTag: "A" },
                { optionText: "true", optionTag: "B" },
                { optionText: "0", optionTag: "C" },
                { optionText: "1", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which stack method is used to search an element?",
            options: [
                { optionText: "search()", optionTag: "A" },
                { optionText: "find()", optionTag: "B" },
                { optionText: "lookup()", optionTag: "C" },
                { optionText: "locate()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is returned by stack.search() if the element is not found?",
            options: [
                { optionText: "-1", optionTag: "A" },
                { optionText: "0", optionTag: "B" },
                { optionText: "null", optionTag: "C" },
                { optionText: "Throws an exception", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is a common use of stacks in recursion?",
            options: [
                { optionText: "Tracking function calls", optionTag: "A" },
                { optionText: "Sorting arrays", optionTag: "B" },
                { optionText: "Searching arrays", optionTag: "C" },
                { optionText: "Memory cleanup", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which method removes all elements from a stack?",
            options: [
                { optionText: "clear()", optionTag: "A" },
                { optionText: "removeAll()", optionTag: "B" },
                { optionText: "delete()", optionTag: "C" },
                { optionText: "reset()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does the capacity() method return in the context of Java's Stack?",
            options: [
                { optionText: "Total allocated storage", optionTag: "A" },
                { optionText: "Number of elements", optionTag: "B" },
                { optionText: "Memory address", optionTag: "C" },
                { optionText: "Stack depth", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following data structures can simulate a stack?",
            options: [
                { optionText: "LinkedList", optionTag: "A" },
                { optionText: "Array", optionTag: "B" },
                { optionText: "Both A and B", optionTag: "C" },
                { optionText: "Queue", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "Which operation is typically not constant time in a stack?",
            options: [
                { optionText: "Search", optionTag: "A" },
                { optionText: "Push", optionTag: "B" },
                { optionText: "Pop", optionTag: "C" },
                { optionText: "Peek", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which stack operation can lead to EmptyStackException?",
            options: [
                { optionText: "pop()", optionTag: "A" },
                { optionText: "push()", optionTag: "B" },
                { optionText: "add()", optionTag: "C" },
                { optionText: "clear()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
