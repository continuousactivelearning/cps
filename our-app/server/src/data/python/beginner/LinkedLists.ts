import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "Python Linked Lists - Beginner Quiz",
    quizLevel: "beginner",
    lang: "python",
    description: "This quiz tests your basic understanding of Linked Lists in Python.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "LinkedLists"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is a linked list?",
            options: [
                { optionText: "A linear data structure where elements are stored in nodes", optionTag: "A" },
                { optionText: "A list of integers only", optionTag: "B" },
                { optionText: "A Python dictionary", optionTag: "C" },
                { optionText: "A dynamic array", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does each node in a singly linked list contain?",
            options: [
                { optionText: "Data and pointer to the next node", optionTag: "A" },
                { optionText: "Only data", optionTag: "B" },
                { optionText: "Data and previous node pointer", optionTag: "C" },
                { optionText: "Index and data", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the starting point of a linked list called?",
            options: [
                { optionText: "Head", optionTag: "A" },
                { optionText: "Start", optionTag: "B" },
                { optionText: "Root", optionTag: "C" },
                { optionText: "First", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which operation is used to add an element at the beginning of a linked list?",
            options: [
                { optionText: "Insert at head", optionTag: "A" },
                { optionText: "Append", optionTag: "B" },
                { optionText: "Push back", optionTag: "C" },
                { optionText: "Insert tail", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these is a benefit of linked lists over arrays?",
            options: [
                { optionText: "Dynamic size", optionTag: "A" },
                { optionText: "Faster random access", optionTag: "B" },
                { optionText: "Simpler indexing", optionTag: "C" },
                { optionText: "Fixed memory usage", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity to search for an element in a linked list?",
            options: [
                { optionText: "O(n)", optionTag: "A" },
                { optionText: "O(1)", optionTag: "B" },
                { optionText: "O(log n)", optionTag: "C" },
                { optionText: "O(n log n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How do you access the last node of a singly linked list?",
            options: [
                { optionText: "By traversing till next is None", optionTag: "A" },
                { optionText: "Using last index", optionTag: "B" },
                { optionText: "Using arr[-1]", optionTag: "C" },
                { optionText: "Using tail pointer only", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the next pointer of the last node in a singly linked list?",
            options: [
                { optionText: "None", optionTag: "A" },
                { optionText: "Points to itself", optionTag: "B" },
                { optionText: "Points to head", optionTag: "C" },
                { optionText: "Invalid", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the main difference between singly and doubly linked lists?",
            options: [
                { optionText: "Doubly linked list has pointers to both next and previous nodes", optionTag: "A" },
                { optionText: "Singly linked list stores strings", optionTag: "B" },
                { optionText: "Singly linked list is circular", optionTag: "C" },
                { optionText: "Doubly linked list uses arrays", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is not a valid linked list type?",
            options: [
                { optionText: "Ternary linked list", optionTag: "A" },
                { optionText: "Singly linked list", optionTag: "B" },
                { optionText: "Doubly linked list", optionTag: "C" },
                { optionText: "Circular linked list", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens when you delete the head node in a linked list?",
            options: [
                { optionText: "The second node becomes the new head", optionTag: "A" },
                { optionText: "The list becomes empty", optionTag: "B" },
                { optionText: "Nothing changes", optionTag: "C" },
                { optionText: "The list crashes", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which pointer helps in traversal in a singly linked list?",
            options: [
                { optionText: "next", optionTag: "A" },
                { optionText: "prev", optionTag: "B" },
                { optionText: "head", optionTag: "C" },
                { optionText: "tail", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In Python, how is a new node typically created?",
            options: [
                { optionText: "Using a class constructor", optionTag: "A" },
                { optionText: "Using def function", optionTag: "B" },
                { optionText: "Using list()", optionTag: "C" },
                { optionText: "Using array()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which operation adds an element at the end of a singly linked list?",
            options: [
                { optionText: "Insert at tail", optionTag: "A" },
                { optionText: "Insert at head", optionTag: "B" },
                { optionText: "Push front", optionTag: "C" },
                { optionText: "Reverse", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What data structure is ideal for implementing undo functionality?",
            options: [
                { optionText: "Doubly linked list", optionTag: "A" },
                { optionText: "Singly linked list", optionTag: "B" },
                { optionText: "Queue", optionTag: "C" },
                { optionText: "Hashmap", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the best case time complexity to insert at the beginning of a linked list?",
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
            questionText: "Which pointer is updated when a node is deleted from the middle?",
            options: [
                { optionText: "The previous node’s next pointer", optionTag: "A" },
                { optionText: "The next node’s pointer", optionTag: "B" },
                { optionText: "The head only", optionTag: "C" },
                { optionText: "None", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Can Python lists be used to simulate linked lists?",
            options: [
                { optionText: "Yes, but less efficient for insert/delete", optionTag: "A" },
                { optionText: "No", optionTag: "B" },
                { optionText: "Yes, and they are faster", optionTag: "C" },
                { optionText: "Only in C language", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which method is used to display all elements in a linked list?",
            options: [
                { optionText: "Traverse the list using a loop", optionTag: "A" },
                { optionText: "print(list)", optionTag: "B" },
                { optionText: "get()", optionTag: "C" },
                { optionText: "findAll()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;