import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "Java Linked Lists - Intermediate Quiz",
    quizLevel: "intermediate",
    lang: "java",
    description: "This quiz evaluates your understanding of Linked Lists in Java at an intermediate level.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "Linked Lists"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "Which interface is implemented by LinkedList in Java?",
            options: [
                { optionText: "Queue", optionTag: "A" },
                { optionText: "Deque", optionTag: "B" },
                { optionText: "List", optionTag: "C" },
                { optionText: "All of the above", optionTag: "D" }
            ],
            correctOption: "D",
            score: 1
        },
        {
            questionText: "Which class provides a doubly-linked list implementation in Java?",
            options: [
                { optionText: "ArrayList", optionTag: "A" },
                { optionText: "LinkedList", optionTag: "B" },
                { optionText: "HashSet", optionTag: "C" },
                { optionText: "Stack", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "What is the time complexity of inserting at the beginning of a LinkedList?",
            options: [
                { optionText: "O(n)", optionTag: "A" },
                { optionText: "O(log n)", optionTag: "B" },
                { optionText: "O(1)", optionTag: "C" },
                { optionText: "O(n log n)", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "Which method adds an element to the end of a LinkedList?",
            options: [
                { optionText: "addFirst()", optionTag: "A" },
                { optionText: "add()", optionTag: "B" },
                { optionText: "push()", optionTag: "C" },
                { optionText: "insert()", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "Which method removes and returns the first element of a LinkedList?",
            options: [
                { optionText: "poll()", optionTag: "A" },
                { optionText: "remove()", optionTag: "B" },
                { optionText: "pop()", optionTag: "C" },
                { optionText: "shift()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these allows for constant-time insertions/deletions from both ends?",
            options: [
                { optionText: "Deque", optionTag: "A" },
                { optionText: "ArrayList", optionTag: "B" },
                { optionText: "HashMap", optionTag: "C" },
                { optionText: "Vector", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What will LinkedList.peek() return if the list is empty?",
            options: [
                { optionText: "Throws Exception", optionTag: "A" },
                { optionText: "null", optionTag: "B" },
                { optionText: "0", optionTag: "C" },
                { optionText: "false", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "What is the default capacity of a LinkedList?",
            options: [
                { optionText: "10", optionTag: "A" },
                { optionText: "Unlimited", optionTag: "B" },
                { optionText: "0", optionTag: "C" },
                { optionText: "Dynamic", optionTag: "D" }
            ],
            correctOption: "D",
            score: 1
        },
        {
            questionText: "Which traversal method is most efficient for LinkedLists?",
            options: [
                { optionText: "Index-based for loop", optionTag: "A" },
                { optionText: "Iterator", optionTag: "B" },
                { optionText: "While loop with index", optionTag: "C" },
                { optionText: "do-while loop", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "What is the output of linkedList.get(0) if the list is empty?",
            options: [
                { optionText: "null", optionTag: "A" },
                { optionText: "0", optionTag: "B" },
                { optionText: "Throws IndexOutOfBoundsException", optionTag: "C" },
                { optionText: "false", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "Which method can you use to add a collection to a LinkedList?",
            options: [
                { optionText: "append()", optionTag: "A" },
                { optionText: "addAll()", optionTag: "B" },
                { optionText: "insert()", optionTag: "C" },
                { optionText: "combine()", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "What does LinkedList.removeLast() do?",
            options: [
                { optionText: "Removes first element", optionTag: "A" },
                { optionText: "Removes last element", optionTag: "B" },
                { optionText: "Removes all elements", optionTag: "C" },
                { optionText: "Removes middle element", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "Is LinkedList synchronized in Java?",
            options: [
                { optionText: "Yes", optionTag: "A" },
                { optionText: "No", optionTag: "B" },
                { optionText: "Only during iteration", optionTag: "C" },
                { optionText: "Depends on JVM", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "Which method checks if a LinkedList contains a specific element?",
            options: [
                { optionText: "check()", optionTag: "A" },
                { optionText: "exists()", optionTag: "B" },
                { optionText: "contains()", optionTag: "C" },
                { optionText: "find()", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "Which data structure is used internally by LinkedList in Java?",
            options: [
                { optionText: "Array", optionTag: "A" },
                { optionText: "Tree", optionTag: "B" },
                { optionText: "Nodes", optionTag: "C" },
                { optionText: "Map", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "What is the return type of remove() method in LinkedList?",
            options: [
                { optionText: "boolean", optionTag: "A" },
                { optionText: "Object", optionTag: "B" },
                { optionText: "int", optionTag: "C" },
                { optionText: "void", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "How do you reverse a LinkedList in Java?",
            options: [
                { optionText: "Collections.reverse(list)", optionTag: "A" },
                { optionText: "list.reverse()", optionTag: "B" },
                { optionText: "ReverseUtils.reverse(list)", optionTag: "C" },
                { optionText: "LinkedList.reverse()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these is not a valid LinkedList method?",
            options: [
                { optionText: "addLast()", optionTag: "A" },
                { optionText: "delete()", optionTag: "B" },
                { optionText: "offer()", optionTag: "C" },
                { optionText: "push()", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "LinkedList implements which data structure type?",
            options: [
                { optionText: "Array", optionTag: "A" },
                { optionText: "Graph", optionTag: "B" },
                { optionText: "Linked list", optionTag: "C" },
                { optionText: "Hash table", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "Which method returns the number of elements in a LinkedList?",
            options: [
                { optionText: "count()", optionTag: "A" },
                { optionText: "size()", optionTag: "B" },
                { optionText: "length()", optionTag: "C" },
                { optionText: "getLength()", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        }
    ]
};

export default quizData;