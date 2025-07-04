import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript Stacks - Beginner Quiz",
    quizLevel: "beginner",
    lang: "javascript",
    description: "This quiz tests your understanding of basic Stack concepts using JavaScript.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "Stacks"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is a stack in data structures?",
            options: [
                { optionText: "A collection based on LIFO", optionTag: "A" },
                { optionText: "A queue", optionTag: "B" },
                { optionText: "A hash map", optionTag: "C" },
                { optionText: "A linked list", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does LIFO stand for?",
            options: [
                { optionText: "Last In First Out", optionTag: "A" },
                { optionText: "Last In Few Out", optionTag: "B" },
                { optionText: "Less Input First Output", optionTag: "C" },
                { optionText: "Last Input First Output", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which JavaScript method can simulate a stack push operation?",
            options: [
                { optionText: "push()", optionTag: "A" },
                { optionText: "unshift()", optionTag: "B" },
                { optionText: "insert()", optionTag: "C" },
                { optionText: "append()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which method removes the top element from a stack in JavaScript?",
            options: [
                { optionText: "pop()", optionTag: "A" },
                { optionText: "shift()", optionTag: "B" },
                { optionText: "remove()", optionTag: "C" },
                { optionText: "delete()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What will happen if you call pop() on an empty stack?",
            options: [
                { optionText: "It returns undefined", optionTag: "A" },
                { optionText: "It throws an error", optionTag: "B" },
                { optionText: "It returns 0", optionTag: "C" },
                { optionText: "It crashes the program", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How can you check the top element of a stack in JavaScript?",
            options: [
                { optionText: "stack[stack.length - 1]", optionTag: "A" },
                { optionText: "stack.peek()", optionTag: "B" },
                { optionText: "stack.top()", optionTag: "C" },
                { optionText: "stack.first()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which array method is NOT commonly used for stack operations?",
            options: [
                { optionText: "shift()", optionTag: "A" },
                { optionText: "push()", optionTag: "B" },
                { optionText: "pop()", optionTag: "C" },
                { optionText: "length", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which data structure uses the LIFO principle?",
            options: [
                { optionText: "Stack", optionTag: "A" },
                { optionText: "Queue", optionTag: "B" },
                { optionText: "Array", optionTag: "C" },
                { optionText: "Set", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of push() in a stack implemented using an array?",
            options: [
                { optionText: "O(1)", optionTag: "A" },
                { optionText: "O(n)", optionTag: "B" },
                { optionText: "O(log n)", optionTag: "C" },
                { optionText: "O(n^2)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the primary use case of a stack?",
            options: [
                { optionText: "Function call tracking", optionTag: "A" },
                { optionText: "Queue processing", optionTag: "B" },
                { optionText: "Database storage", optionTag: "C" },
                { optionText: "Hashing", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is NOT a valid stack operation?",
            options: [
                { optionText: "enqueue", optionTag: "A" },
                { optionText: "push", optionTag: "B" },
                { optionText: "pop", optionTag: "C" },
                { optionText: "peek", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How is a stack different from a queue?",
            options: [
                { optionText: "Stack: LIFO, Queue: FIFO", optionTag: "A" },
                { optionText: "Stack: FIFO, Queue: LIFO", optionTag: "B" },
                { optionText: "Stack uses arrays only", optionTag: "C" },
                { optionText: "Queue stores only strings", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following can implement a stack in JavaScript?",
            options: [
                { optionText: "Array", optionTag: "A" },
                { optionText: "Object", optionTag: "B" },
                { optionText: "Set", optionTag: "C" },
                { optionText: "Both A and B", optionTag: "D" }
            ],
            correctOption: "D",
            score: 1
        },
        {
            questionText: "Which method would you use to clear a stack?",
            options: [
                { optionText: "stack.length = 0", optionTag: "A" },
                { optionText: "stack.popAll()", optionTag: "B" },
                { optionText: "stack.clear()", optionTag: "C" },
                { optionText: "stack.remove()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the result of `[].pop()`?",
            options: [
                { optionText: "undefined", optionTag: "A" },
                { optionText: "0", optionTag: "B" },
                { optionText: "null", optionTag: "C" },
                { optionText: "Error", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which method can be used to create a new stack from scratch?",
            options: [
                { optionText: "let stack = []", optionTag: "A" },
                { optionText: "let stack = new Stack()", optionTag: "B" },
                { optionText: "let stack = createStack()", optionTag: "C" },
                { optionText: "stack.init()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Stacks are often used in which of the following?",
            options: [
                { optionText: "Undo mechanisms", optionTag: "A" },
                { optionText: "Priority scheduling", optionTag: "B" },
                { optionText: "Graph traversal", optionTag: "C" },
                { optionText: "Hash tables", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In a call stack, what is stored?",
            options: [
                { optionText: "Function calls", optionTag: "A" },
                { optionText: "HTML tags", optionTag: "B" },
                { optionText: "CSS classes", optionTag: "C" },
                { optionText: "JSON data", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the default return value of pop()?",
            options: [
                { optionText: "Last element", optionTag: "A" },
                { optionText: "First element", optionTag: "B" },
                { optionText: "All elements", optionTag: "C" },
                { optionText: "Stack length", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which operation adds an element to a stack?",
            options: [
                { optionText: "push()", optionTag: "A" },
                { optionText: "pop()", optionTag: "B" },
                { optionText: "insert()", optionTag: "C" },
                { optionText: "shift()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;