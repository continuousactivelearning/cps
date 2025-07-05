import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "Java Linked Lists - Beginner Quiz",
    quizLevel: "beginner",
    lang: "java",
    description: "This quiz helps beginners understand the fundamentals of Linked Lists in Java.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "Linked Lists"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is a Linked List?",
            options: [
                { optionText: "A type of array", optionTag: "A" },
                { optionText: "A sequential collection of nodes", optionTag: "B" },
                { optionText: "A method", optionTag: "C" },
                { optionText: "A Java keyword", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "Which Java class is used to implement Linked Lists?",
            options: [
                { optionText: "ArrayList", optionTag: "A" },
                { optionText: "LinkedList", optionTag: "B" },
                { optionText: "HashSet", optionTag: "C" },
                { optionText: "Map", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "What does each node in a singly linked list contain?",
            options: [
                { optionText: "Only data", optionTag: "A" },
                { optionText: "Only pointer", optionTag: "B" },
                { optionText: "Data and pointer to next node", optionTag: "C" },
                { optionText: "Class and method", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "Which method adds an element to the end of a LinkedList in Java?",
            options: [
                { optionText: "addLast()", optionTag: "A" },
                { optionText: "insertEnd()", optionTag: "B" },
                { optionText: "append()", optionTag: "C" },
                { optionText: "push()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which method removes the first element from a LinkedList?",
            options: [
                { optionText: "remove()", optionTag: "A" },
                { optionText: "delete()", optionTag: "B" },
                { optionText: "shift()", optionTag: "C" },
                { optionText: "removeFirst()", optionTag: "D" }
            ],
            correctOption: "D",
            score: 1
        },
        {
            questionText: "What happens if you access an index beyond the size of a LinkedList?",
            options: [
                { optionText: "Returns null", optionTag: "A" },
                { optionText: "Throws IndexOutOfBoundsException", optionTag: "B" },
                { optionText: "Returns 0", optionTag: "C" },
                { optionText: "Returns -1", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "Which method checks if the LinkedList is empty?",
            options: [
                { optionText: "checkEmpty()", optionTag: "A" },
                { optionText: "isEmpty()", optionTag: "B" },
                { optionText: "empty()", optionTag: "C" },
                { optionText: "size()", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "Which method gets the number of elements in a LinkedList?",
            options: [
                { optionText: "count()", optionTag: "A" },
                { optionText: "length()", optionTag: "B" },
                { optionText: "size()", optionTag: "C" },
                { optionText: "getSize()", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "Which data structure does LinkedList implement?",
            options: [
                { optionText: "Array", optionTag: "A" },
                { optionText: "Tree", optionTag: "B" },
                { optionText: "List", optionTag: "C" },
                { optionText: "Set", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "What is the index of the first element in a LinkedList?",
            options: [
                { optionText: "1", optionTag: "A" },
                { optionText: "0", optionTag: "B" },
                { optionText: "-1", optionTag: "C" },
                { optionText: "Depends on JVM", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "Which of the following can LinkedList store?",
            options: [
                { optionText: "Only strings", optionTag: "A" },
                { optionText: "Only integers", optionTag: "B" },
                { optionText: "Only objects", optionTag: "C" },
                { optionText: "Any type of objects", optionTag: "D" }
            ],
            correctOption: "D",
            score: 1
        },
        {
            questionText: "How is a LinkedList different from an ArrayList?",
            options: [
                { optionText: "LinkedList allows random access", optionTag: "A" },
                { optionText: "ArrayList is based on nodes", optionTag: "B" },
                { optionText: "LinkedList is based on nodes", optionTag: "C" },
                { optionText: "They are the same", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "Can LinkedList have duplicate elements?",
            options: [
                { optionText: "Yes", optionTag: "A" },
                { optionText: "No", optionTag: "B" },
                { optionText: "Only if using set()", optionTag: "C" },
                { optionText: "Only strings can be duplicate", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which method retrieves, but does not remove, the first element?",
            options: [
                { optionText: "peek()", optionTag: "A" },
                { optionText: "poll()", optionTag: "B" },
                { optionText: "pop()", optionTag: "C" },
                { optionText: "get()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does pop() do in LinkedList?",
            options: [
                { optionText: "Adds at start", optionTag: "A" },
                { optionText: "Removes and returns first element", optionTag: "B" },
                { optionText: "Clears list", optionTag: "C" },
                { optionText: "Returns size", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "What is the type of LinkedList in Java Collections Framework?",
            options: [
                { optionText: "Interface", optionTag: "A" },
                { optionText: "Class", optionTag: "B" },
                { optionText: "Enum", optionTag: "C" },
                { optionText: "Abstract class", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "Which of the following adds an element at the start?",
            options: [
                { optionText: "addStart()", optionTag: "A" },
                { optionText: "add()", optionTag: "B" },
                { optionText: "addFirst()", optionTag: "C" },
                { optionText: "insertTop()", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "What will linkedList.clear() do?",
            options: [
                { optionText: "Add null values", optionTag: "A" },
                { optionText: "Clear the LinkedList", optionTag: "B" },
                { optionText: "Set values to 0", optionTag: "C" },
                { optionText: "Remove only last element", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "Is LinkedList part of Java util package?",
            options: [
                { optionText: "Yes", optionTag: "A" },
                { optionText: "No", optionTag: "B" },
                { optionText: "Only in Java 8+", optionTag: "C" },
                { optionText: "It's in java.io", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which method returns the element at a specific index?",
            options: [
                { optionText: "peek()", optionTag: "A" },
                { optionText: "get(index)", optionTag: "B" },
                { optionText: "fetch()", optionTag: "C" },
                { optionText: "read()", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        }
    ]
};

export default quizData;