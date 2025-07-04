import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript Queues - Beginner Quiz",
    quizLevel: "beginner",
    lang: "javascript",
    description: "This quiz evaluates your fundamental understanding of queues using JavaScript.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "Queues"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the primary rule of a queue?",
            options: [
                { optionText: "First In First Out (FIFO)", optionTag: "A" },
                { optionText: "Last In First Out (LIFO)", optionTag: "B" },
                { optionText: "Random Access", optionTag: "C" },
                { optionText: "None of the above", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which array method is used to add an item to the end of a queue?",
            options: [
                { optionText: "push()", optionTag: "A" },
                { optionText: "pop()", optionTag: "B" },
                { optionText: "shift()", optionTag: "C" },
                { optionText: "unshift()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which method is used to remove the front element from a queue?",
            options: [
                { optionText: "shift()", optionTag: "A" },
                { optionText: "pop()", optionTag: "B" },
                { optionText: "push()", optionTag: "C" },
                { optionText: "slice()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How can you check if a queue is empty?",
            options: [
                { optionText: "queue.length === 0", optionTag: "A" },
                { optionText: "queue === []", optionTag: "B" },
                { optionText: "queue.isEmpty()", optionTag: "C" },
                { optionText: "queue.empty()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of adding/removing an element in a queue implemented with an array?",
            options: [
                { optionText: "O(1) for push, O(n) for shift", optionTag: "A" },
                { optionText: "O(n) for both", optionTag: "B" },
                { optionText: "O(1) for both", optionTag: "C" },
                { optionText: "O(log n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What JavaScript data type is commonly used to implement a queue?",
            options: [
                { optionText: "Array", optionTag: "A" },
                { optionText: "Object", optionTag: "B" },
                { optionText: "Set", optionTag: "C" },
                { optionText: "Map", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following simulates a queue using JavaScript?",
            options: [
                { optionText: "push() and shift()", optionTag: "A" },
                { optionText: "push() and pop()", optionTag: "B" },
                { optionText: "unshift() and pop()", optionTag: "C" },
                { optionText: "shift() and slice()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which end is the front of a queue in JavaScript array implementation?",
            options: [
                { optionText: "Start of the array (index 0)", optionTag: "A" },
                { optionText: "End of the array", optionTag: "B" },
                { optionText: "Middle of the array", optionTag: "C" },
                { optionText: "Random", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which operation removes the oldest item from a queue?",
            options: [
                { optionText: "shift()", optionTag: "A" },
                { optionText: "pop()", optionTag: "B" },
                { optionText: "splice()", optionTag: "C" },
                { optionText: "slice()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "To peek at the front of the queue, what would you access?",
            options: [
                { optionText: "queue[0]", optionTag: "A" },
                { optionText: "queue.peek()", optionTag: "B" },
                { optionText: "queue[queue.length - 1]", optionTag: "C" },
                { optionText: "queue.front()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these is NOT a typical queue operation?",
            options: [
                { optionText: "pop()", optionTag: "A" },
                { optionText: "enqueue", optionTag: "B" },
                { optionText: "dequeue", optionTag: "C" },
                { optionText: "peek", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which built-in method adds an element at the beginning of an array?",
            options: [
                { optionText: "unshift()", optionTag: "A" },
                { optionText: "push()", optionTag: "B" },
                { optionText: "prepend()", optionTag: "C" },
                { optionText: "insertFirst()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How can you implement a queue using a class in JavaScript?",
            options: [
                { optionText: "Using constructor and methods like enqueue(), dequeue()", optionTag: "A" },
                { optionText: "Using JSON", optionTag: "B" },
                { optionText: "Using only arrays", optionTag: "C" },
                { optionText: "Using switch statements", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does the shift() method return?",
            options: [
                { optionText: "The removed front element", optionTag: "A" },
                { optionText: "The length of the array", optionTag: "B" },
                { optionText: "undefined", optionTag: "C" },
                { optionText: "The last element", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which method returns the number of elements in the queue?",
            options: [
                { optionText: "length", optionTag: "A" },
                { optionText: "size()", optionTag: "B" },
                { optionText: "count()", optionTag: "C" },
                { optionText: "total()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Can a queue store objects in JavaScript?",
            options: [
                { optionText: "Yes", optionTag: "A" },
                { optionText: "No", optionTag: "B" },
                { optionText: "Only strings", optionTag: "C" },
                { optionText: "Only numbers", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which method is used to remove the last item in an array?",
            options: [
                { optionText: "pop()", optionTag: "A" },
                { optionText: "shift()", optionTag: "B" },
                { optionText: "slice()", optionTag: "C" },
                { optionText: "cut()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How do you check the rear element of a queue using array?",
            options: [
                { optionText: "queue[queue.length - 1]", optionTag: "A" },
                { optionText: "queue[0]", optionTag: "B" },
                { optionText: "queue.peek()", optionTag: "C" },
                { optionText: "queue.tail()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which method adds elements to the front of the queue?",
            options: [
                { optionText: "unshift()", optionTag: "A" },
                { optionText: "push()", optionTag: "B" },
                { optionText: "shift()", optionTag: "C" },
                { optionText: "addFirst()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Is it efficient to implement queues with arrays in JavaScript?",
            options: [
                { optionText: "Not always, shift() is O(n)", optionTag: "A" },
                { optionText: "Yes, arrays are fast for all", optionTag: "B" },
                { optionText: "Only for small sizes", optionTag: "C" },
                { optionText: "No, JavaScript does not support queues", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;