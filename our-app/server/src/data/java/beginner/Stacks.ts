import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "Java Stacks - Beginner Quiz",
    quizLevel: "beginner",
    lang: "java",
    description: "This quiz covers basic concepts of Stacks in Java.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "Stacks"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is a stack in data structures?",
            options: [
                { optionText: "A linear data structure following LIFO", optionTag: "A" },
                { optionText: "A tree-based structure", optionTag: "B" },
                { optionText: "A graph structure", optionTag: "C" },
                { optionText: "A queue structure", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does LIFO stand for?",
            options: [
                { optionText: "Last In First Out", optionTag: "A" },
                { optionText: "Last In Final Out", optionTag: "B" },
                { optionText: "First In First Out", optionTag: "C" },
                { optionText: "First In Final Out", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which Java class is used to implement stacks?",
            options: [
                { optionText: "Stack", optionTag: "A" },
                { optionText: "Queue", optionTag: "B" },
                { optionText: "ArrayList", optionTag: "C" },
                { optionText: "HashMap", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which method is used to add an element to a stack?",
            options: [
                { optionText: "push()", optionTag: "A" },
                { optionText: "add()", optionTag: "B" },
                { optionText: "insert()", optionTag: "C" },
                { optionText: "enqueue()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which method is used to remove the top element of a stack?",
            options: [
                { optionText: "pop()", optionTag: "A" },
                { optionText: "delete()", optionTag: "B" },
                { optionText: "remove()", optionTag: "C" },
                { optionText: "clear()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does the peek() method do in a stack?",
            options: [
                { optionText: "Returns the top element without removing it", optionTag: "A" },
                { optionText: "Removes the top element", optionTag: "B" },
                { optionText: "Clears the stack", optionTag: "C" },
                { optionText: "Searches for an element", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following best describes the order of elements in a stack?",
            options: [
                { optionText: "LIFO", optionTag: "A" },
                { optionText: "FIFO", optionTag: "B" },
                { optionText: "Sorted", optionTag: "C" },
                { optionText: "Random", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which exception is thrown if pop() is called on an empty stack?",
            options: [
                { optionText: "EmptyStackException", optionTag: "A" },
                { optionText: "NullPointerException", optionTag: "B" },
                { optionText: "IndexOutOfBoundsException", optionTag: "C" },
                { optionText: "IllegalArgumentException", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does isEmpty() return for a stack with no elements?",
            options: [
                { optionText: "true", optionTag: "A" },
                { optionText: "false", optionTag: "B" },
                { optionText: "0", optionTag: "C" },
                { optionText: "null", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the initial state of a stack?",
            options: [
                { optionText: "Empty", optionTag: "A" },
                { optionText: "Full", optionTag: "B" },
                { optionText: "Partially filled", optionTag: "C" },
                { optionText: "Overflowed", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
    ]
};

export default quizData;
