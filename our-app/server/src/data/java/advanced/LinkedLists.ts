import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "Java LinkedList - Advanced Quiz",
    quizLevel: "advanced",
    lang: "java",
    description: "This quiz tests your advanced knowledge of Linked Lists in Java.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "LinkedLists"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the time complexity to insert a node at the beginning of a singly linked list?",
            options: [
                { optionText: "O(n)", optionTag: "A" },
                { optionText: "O(1)", optionTag: "B" },
                { optionText: "O(log n)", optionTag: "C" },
                { optionText: "O(n log n)", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "Which data structure is not suitable for random access?",
            options: [
                { optionText: "Array", optionTag: "A" },
                { optionText: "Linked List", optionTag: "B" },
                { optionText: "HashMap", optionTag: "C" },
                { optionText: "Stack", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "Which type of linked list allows traversal in both directions?",
            options: [
                { optionText: "Singly Linked List", optionTag: "A" },
                { optionText: "Circular Linked List", optionTag: "B" },
                { optionText: "Doubly Linked List", optionTag: "C" },
                { optionText: "None of the above", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "What is the time complexity to delete the last node of a singly linked list?",
            options: [
                { optionText: "O(1)", optionTag: "A" },
                { optionText: "O(n)", optionTag: "B" },
                { optionText: "O(log n)", optionTag: "C" },
                { optionText: "O(n log n)", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "Which of the following algorithms can be used to detect a cycle in a linked list?",
            options: [
                { optionText: "Floyd's cycle detection algorithm", optionTag: "A" },
                { optionText: "Prim's algorithm", optionTag: "B" },
                { optionText: "Kruskal's algorithm", optionTag: "C" },
                { optionText: "Dijkstra's algorithm", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is true about the tail pointer in a singly linked list?",
            options: [
                { optionText: "It always points to the head node.", optionTag: "A" },
                { optionText: "It always points to the last node.", optionTag: "B" },
                { optionText: "It points to a random node.", optionTag: "C" },
                { optionText: "It does not exist in a linked list.", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "How do you reverse a singly linked list?",
            options: [
                { optionText: "Using a stack", optionTag: "A" },
                { optionText: "Using recursion", optionTag: "B" },
                { optionText: "Using iteration", optionTag: "C" },
                { optionText: "All of the above", optionTag: "D" }
            ],
            correctOption: "D",
            score: 1
        },
        {
            questionText: "What is the best approach to find the middle element of a linked list?",
            options: [
                { optionText: "Traverse the list twice", optionTag: "A" },
                { optionText: "Use slow and fast pointers", optionTag: "B" },
                { optionText: "Store elements in an array", optionTag: "C" },
                { optionText: "None of the above", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "What is the space complexity of an iterative linked list reversal?",
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
            questionText: "What is the space complexity of a recursive linked list reversal?",
            options: [
                { optionText: "O(1)", optionTag: "A" },
                { optionText: "O(n)", optionTag: "B" },
                { optionText: "O(log n)", optionTag: "C" },
                { optionText: "O(n log n)", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "Which pointer is not used in a singly linked list?",
            options: [
                { optionText: "Head pointer", optionTag: "A" },
                { optionText: "Next pointer", optionTag: "B" },
                { optionText: "Previous pointer", optionTag: "C" },
                { optionText: "Tail pointer", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "What is the primary advantage of using a circular linked list?",
            options: [
                { optionText: "Easier to traverse", optionTag: "A" },
                { optionText: "Memory efficiency", optionTag: "B" },
                { optionText: "No need for a tail pointer", optionTag: "C" },
                { optionText: "All of the above", optionTag: "D" }
            ],
            correctOption: "D",
            score: 1
        },
        {
            questionText: "What does the next pointer of the last node in a circular linked list point to?",
            options: [
                { optionText: "Null", optionTag: "A" },
                { optionText: "The first node", optionTag: "B" },
                { optionText: "Itself", optionTag: "C" },
                { optionText: "None of the above", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "What is the best time complexity for searching an element in a linked list?",
            options: [
                { optionText: "O(1)", optionTag: "A" },
                { optionText: "O(log n)", optionTag: "B" },
                { optionText: "O(n)", optionTag: "C" },
                { optionText: "O(n log n)", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "How can you detect the starting node of a cycle in a linked list?",
            options: [
                { optionText: "Using Floyd's algorithm and resetting slow pointer", optionTag: "A" },
                { optionText: "By counting nodes", optionTag: "B" },
                { optionText: "By checking next pointers manually", optionTag: "C" },
                { optionText: "Using DFS", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the worst-case time complexity to delete a node by value in a singly linked list?",
            options: [
                { optionText: "O(1)", optionTag: "A" },
                { optionText: "O(log n)", optionTag: "B" },
                { optionText: "O(n)", optionTag: "C" },
                { optionText: "O(n log n)", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "What is the best way to merge two sorted linked lists?",
            options: [
                { optionText: "Using iteration", optionTag: "A" },
                { optionText: "Using recursion", optionTag: "B" },
                { optionText: "Both A and B", optionTag: "C" },
                { optionText: "Using a stack", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "What is the best data structure to reverse a linked list in O(n) time using O(1) space?",
            options: [
                { optionText: "Stack", optionTag: "A" },
                { optionText: "Queue", optionTag: "B" },
                { optionText: "Pointer manipulation", optionTag: "C" },
                { optionText: "Array", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "Which of the following best describes a circular doubly linked list?",
            options: [
                { optionText: "Last node points to the first node, and first node points to the last node", optionTag: "A" },
                { optionText: "Only the last node points to the first node", optionTag: "B" },
                { optionText: "Only the first node points to the last node", optionTag: "C" },
                { optionText: "There is no connection between nodes", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
