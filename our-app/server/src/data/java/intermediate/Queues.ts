import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "Java Queues - Intermediate Quiz",
    quizLevel: "intermediate",
    lang: "java",
    description: "This quiz covers intermediate concepts of Queues in Java.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "Queues"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the time complexity of enqueue operation in a queue?",
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
            questionText: "Which method retrieves and removes the head of the queue?",
            options: [
                { optionText: "poll()", optionTag: "A" },
                { optionText: "peek()", optionTag: "B" },
                { optionText: "offer()", optionTag: "C" },
                { optionText: "push()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which Java interface is implemented to create a queue?",
            options: [
                { optionText: "Queue", optionTag: "A" },
                { optionText: "Stack", optionTag: "B" },
                { optionText: "Set", optionTag: "C" },
                { optionText: "List", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which Java class implements a priority queue?",
            options: [
                { optionText: "PriorityQueue", optionTag: "A" },
                { optionText: "LinkedList", optionTag: "B" },
                { optionText: "ArrayList", optionTag: "C" },
                { optionText: "HashSet", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the order of elements in a queue?",
            options: [
                { optionText: "FIFO (First In First Out)", optionTag: "A" },
                { optionText: "LIFO (Last In First Out)", optionTag: "B" },
                { optionText: "Random Order", optionTag: "C" },
                { optionText: "Sorted Order", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which method returns the head of the queue without removing it?",
            options: [
                { optionText: "peek()", optionTag: "A" },
                { optionText: "poll()", optionTag: "B" },
                { optionText: "push()", optionTag: "C" },
                { optionText: "offer()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which queue does not allow null elements?",
            options: [
                { optionText: "PriorityQueue", optionTag: "A" },
                { optionText: "LinkedList", optionTag: "B" },
                { optionText: "ArrayDeque", optionTag: "C" },
                { optionText: "All of the above", optionTag: "D" }
            ],
            correctOption: "D",
            score: 1
        },
        {
            questionText: "Which method is used to insert an element into a queue?",
            options: [
                { optionText: "offer()", optionTag: "A" },
                { optionText: "poll()", optionTag: "B" },
                { optionText: "peek()", optionTag: "C" },
                { optionText: "push()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens if you poll an empty queue?",
            options: [
                { optionText: "Returns null", optionTag: "A" },
                { optionText: "Throws NoSuchElementException", optionTag: "B" },
                { optionText: "Throws NullPointerException", optionTag: "C" },
                { optionText: "Returns -1", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which is a correct implementation of a circular queue?",
            options: [
                { optionText: "Array-based queue with front and rear wrapping", optionTag: "A" },
                { optionText: "LinkedList without tail pointer", optionTag: "B" },
                { optionText: "PriorityQueue with extra space", optionTag: "C" },
                { optionText: "Stack with additional pointers", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
    ]
};

export default quizData;