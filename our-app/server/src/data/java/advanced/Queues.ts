import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "Java Queues - Advanced Quiz",
    quizLevel: "advanced",
    lang: "java",
    description: "This quiz covers advanced concepts of Queues in Java.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "Queues"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the time complexity of enqueuing in a priority queue implemented with a binary heap?",
            options: [
                { optionText: "O(log n)", optionTag: "A" },
                { optionText: "O(1)", optionTag: "B" },
                { optionText: "O(n)", optionTag: "C" },
                { optionText: "O(n log n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which Java class implements a priority queue?",
            options: [
                { optionText: "PriorityQueue", optionTag: "A" },
                { optionText: "Queue", optionTag: "B" },
                { optionText: "LinkedList", optionTag: "C" },
                { optionText: "ArrayDeque", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the default ordering of a PriorityQueue in Java?",
            options: [
                { optionText: "Natural ordering", optionTag: "A" },
                { optionText: "Reverse ordering", optionTag: "B" },
                { optionText: "Custom comparator", optionTag: "C" },
                { optionText: "Random ordering", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which interface must a custom object implement to be stored in a PriorityQueue?",
            options: [
                { optionText: "Comparable", optionTag: "A" },
                { optionText: "Queueable", optionTag: "B" },
                { optionText: "Serializable", optionTag: "C" },
                { optionText: "Iterable", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which queue implementation is best suited for fast insertion and deletion from both ends?",
            options: [
                { optionText: "Deque", optionTag: "A" },
                { optionText: "PriorityQueue", optionTag: "B" },
                { optionText: "LinkedList", optionTag: "C" },
                { optionText: "ArrayQueue", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which method retrieves but does not remove the head of the queue, returning null if the queue is empty?",
            options: [
                { optionText: "peek()", optionTag: "A" },
                { optionText: "poll()", optionTag: "B" },
                { optionText: "element()", optionTag: "C" },
                { optionText: "remove()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens if you use remove() on an empty queue?",
            options: [
                { optionText: "Throws NoSuchElementException", optionTag: "A" },
                { optionText: "Returns null", optionTag: "B" },
                { optionText: "Returns false", optionTag: "C" },
                { optionText: "Does nothing", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which queue type allows duplicate elements and natural ordering?",
            options: [
                { optionText: "PriorityQueue", optionTag: "A" },
                { optionText: "Deque", optionTag: "B" },
                { optionText: "BlockingQueue", optionTag: "C" },
                { optionText: "ConcurrentLinkedQueue", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which queue implementation in Java is thread-safe?",
            options: [
                { optionText: "ConcurrentLinkedQueue", optionTag: "A" },
                { optionText: "ArrayDeque", optionTag: "B" },
                { optionText: "LinkedList", optionTag: "C" },
                { optionText: "PriorityQueue", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which queue method is preferred in concurrent applications to avoid exceptions?",
            options: [
                { optionText: "offer()", optionTag: "A" },
                { optionText: "add()", optionTag: "B" },
                { optionText: "remove()", optionTag: "C" },
                { optionText: "element()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
    ]
};

export default quizData;