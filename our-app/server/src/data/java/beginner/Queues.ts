import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "Java Queues - Beginner Quiz",
    quizLevel: "beginner",
    lang: "java",
    description: "This quiz covers beginner-level concepts of Queues in Java.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "Queues"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the basic principle of a queue?",
            options: [
                { optionText: "FIFO (First In First Out)", optionTag: "A" },
                { optionText: "LIFO (Last In First Out)", optionTag: "B" },
                { optionText: "Random Access", optionTag: "C" },
                { optionText: "Sorted Order", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which method is used to insert an element into a queue in Java?",
            options: [
                { optionText: "add()", optionTag: "A" },
                { optionText: "remove()", optionTag: "B" },
                { optionText: "peek()", optionTag: "C" },
                { optionText: "poll()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which method retrieves and removes the head of the queue?",
            options: [
                { optionText: "poll()", optionTag: "A" },
                { optionText: "add()", optionTag: "B" },
                { optionText: "peek()", optionTag: "C" },
                { optionText: "offer()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which interface in Java is implemented by all queue classes?",
            options: [
                { optionText: "Queue", optionTag: "A" },
                { optionText: "List", optionTag: "B" },
                { optionText: "Map", optionTag: "C" },
                { optionText: "Set", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which queue method retrieves but does not remove the head?",
            options: [
                { optionText: "peek()", optionTag: "A" },
                { optionText: "poll()", optionTag: "B" },
                { optionText: "add()", optionTag: "C" },
                { optionText: "clear()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens if you remove from an empty queue using remove()?",
            options: [
                { optionText: "Throws NoSuchElementException", optionTag: "A" },
                { optionText: "Returns null", optionTag: "B" },
                { optionText: "Returns -1", optionTag: "C" },
                { optionText: "Does nothing", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which method inserts an element into a queue without throwing an exception?",
            options: [
                { optionText: "offer()", optionTag: "A" },
                { optionText: "add()", optionTag: "B" },
                { optionText: "push()", optionTag: "C" },
                { optionText: "put()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is a queue implementation in Java?",
            options: [
                { optionText: "LinkedList", optionTag: "A" },
                { optionText: "ArrayList", optionTag: "B" },
                { optionText: "HashMap", optionTag: "C" },
                { optionText: "TreeSet", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which operation checks if the queue is empty?",
            options: [
                { optionText: "isEmpty()", optionTag: "A" },
                { optionText: "size()", optionTag: "B" },
                { optionText: "peek()", optionTag: "C" },
                { optionText: "poll()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does the size() method return for a queue?",
            options: [
                { optionText: "Number of elements in the queue", optionTag: "A" },
                { optionText: "Maximum capacity", optionTag: "B" },
                { optionText: "Memory used", optionTag: "C" },
                { optionText: "Queue type", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
    ]
};

export default quizData;
