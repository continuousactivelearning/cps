import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "Java Stacks - Advanced Quiz",
    quizLevel: "advanced",
    lang: "java",
    description: "This quiz tests your advanced knowledge of stacks in Java.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "Stacks"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "Which data structure is used to implement function calls in Java?",
            options: [
                { optionText: "Queue", optionTag: "A" },
                { optionText: "Stack", optionTag: "B" },
                { optionText: "Heap", optionTag: "C" },
                { optionText: "Tree", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "Which method is used to add an element to the top of a stack in Java?",
            options: [
                { optionText: "add()", optionTag: "A" },
                { optionText: "push()", optionTag: "B" },
                { optionText: "insert()", optionTag: "C" },
                { optionText: "append()", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "Which method is used to remove the top element of a stack in Java?",
            options: [
                { optionText: "remove()", optionTag: "A" },
                { optionText: "pop()", optionTag: "B" },
                { optionText: "delete()", optionTag: "C" },
                { optionText: "cut()", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "What is the time complexity of push and pop operations in a stack?",
            options: [
                { optionText: "O(1)", optionTag: "A" },
                { optionText: "O(log n)", optionTag: "B" },
                { optionText: "O(n)", optionTag: "C" },
                { optionText: "O(n log n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which Java class provides a built-in stack implementation?",
            options: [
                { optionText: "Queue", optionTag: "A" },
                { optionText: "Deque", optionTag: "B" },
                { optionText: "Stack", optionTag: "C" },
                { optionText: "LinkedList", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "Which method checks the top element of a stack without removing it?",
            options: [
                { optionText: "peek()", optionTag: "A" },
                { optionText: "top()", optionTag: "B" },
                { optionText: "head()", optionTag: "C" },
                { optionText: "front()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these is not a valid stack application?",
            options: [
                { optionText: "Expression evaluation", optionTag: "A" },
                { optionText: "Function call management", optionTag: "B" },
                { optionText: "Browser history", optionTag: "C" },
                { optionText: "Graph traversal using BFS", optionTag: "D" }
            ],
            correctOption: "D",
            score: 1
        },
        {
            questionText: "What will happen if you pop an empty stack?",
            options: [
                { optionText: "Returns null", optionTag: "A" },
                { optionText: "Throws EmptyStackException", optionTag: "B" },
                { optionText: "Returns 0", optionTag: "C" },
                { optionText: "Ignores the operation", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "Which data structure can efficiently implement multiple stacks in a single array?",
            options: [
                { optionText: "Circular Queue", optionTag: "A" },
                { optionText: "Array with partitioning", optionTag: "B" },
                { optionText: "Linked List", optionTag: "C" },
                { optionText: "Heap", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "What is the result of push(5); push(10); pop(); pop(); on an empty stack?",
            options: [
                { optionText: "Empty stack", optionTag: "A" },
                { optionText: "Stack with 5", optionTag: "B" },
                { optionText: "Stack with 10", optionTag: "C" },
                { optionText: "Error", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which traversal order does a stack follow?",
            options: [
                { optionText: "First In First Out", optionTag: "A" },
                { optionText: "Last In First Out", optionTag: "B" },
                { optionText: "In-order", optionTag: "C" },
                { optionText: "Post-order", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "Which of the following problems can be solved using stacks?",
            options: [
                { optionText: "Parenthesis matching", optionTag: "A" },
                { optionText: "Tower of Hanoi", optionTag: "B" },
                { optionText: "Backtracking problems", optionTag: "C" },
                { optionText: "All of the above", optionTag: "D" }
            ],
            correctOption: "D",
            score: 1
        },
        {
            questionText: "Which of the following Java interfaces can be used to implement a stack?",
            options: [
                { optionText: "List", optionTag: "A" },
                { optionText: "Deque", optionTag: "B" },
                { optionText: "Set", optionTag: "C" },
                { optionText: "Queue", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "Which stack operation does not modify the stack?",
            options: [
                { optionText: "push()", optionTag: "A" },
                { optionText: "pop()", optionTag: "B" },
                { optionText: "peek()", optionTag: "C" },
                { optionText: "clear()", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "What is the result of repeated peek() operations on a stack?",
            options: [
                { optionText: "Returns the same top element", optionTag: "A" },
                { optionText: "Throws an error", optionTag: "B" },
                { optionText: "Removes elements", optionTag: "C" },
                { optionText: "Returns null", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which method returns true if the stack is empty?",
            options: [
                { optionText: "isEmpty()", optionTag: "A" },
                { optionText: "empty()", optionTag: "B" },
                { optionText: "size() == 0", optionTag: "C" },
                { optionText: "All of the above", optionTag: "D" }
            ],
            correctOption: "D",
            score: 1
        },
        {
            questionText: "Which of the following is not a valid stack operation?",
            options: [
                { optionText: "push()", optionTag: "A" },
                { optionText: "pop()", optionTag: "B" },
                { optionText: "insert()", optionTag: "C" },
                { optionText: "peek()", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "Which Java collection class is recommended for stack operations in concurrent environments?",
            options: [
                { optionText: "Stack", optionTag: "A" },
                { optionText: "ArrayDeque", optionTag: "B" },
                { optionText: "ConcurrentLinkedDeque", optionTag: "C" },
                { optionText: "PriorityQueue", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "Which Java class is now preferred over the Stack class for stack operations?",
            options: [
                { optionText: "Queue", optionTag: "A" },
                { optionText: "ArrayDeque", optionTag: "B" },
                { optionText: "LinkedList", optionTag: "C" },
                { optionText: "PriorityQueue", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "Which problem is typically solved using two stacks?",
            options: [
                { optionText: "Queue implementation", optionTag: "A" },
                { optionText: "Binary tree traversal", optionTag: "B" },
                { optionText: "Sorting", optionTag: "C" },
                { optionText: "Hashing", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
