import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ Pointers - Intermediate Quiz",
    quizLevel: "intermediate",
    lang: "cpp",
    description: "This quiz tests your intermediate knowledge of Pointers in C++.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "Pointers"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What does the * operator do when used with a pointer variable?",
            options: [
                { optionText: "Dereferences the pointer", optionTag: "A" },
                { optionText: "Multiplies the value", optionTag: "B" },
                { optionText: "Increments the pointer", optionTag: "C" },
                { optionText: "Divides the value", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the result of incrementing a pointer in C++?",
            options: [
                { optionText: "It moves to the next memory location based on the type", optionTag: "A" },
                { optionText: "It increases by 1 byte always", optionTag: "B" },
                { optionText: "It resets the pointer", optionTag: "C" },
                { optionText: "It causes a segmentation fault", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is a dangling pointer?",
            options: [
                { optionText: "A pointer pointing to a deallocated memory", optionTag: "A" },
                { optionText: "A pointer with NULL value", optionTag: "B" },
                { optionText: "A pointer pointing to itself", optionTag: "C" },
                { optionText: "A pointer pointing to another pointer", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which keyword is used to dynamically allocate memory in C++?",
            options: [
                { optionText: "new", optionTag: "A" },
                { optionText: "malloc", optionTag: "B" },
                { optionText: "allocate", optionTag: "C" },
                { optionText: "create", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens if you dereference a NULL pointer?",
            options: [
                { optionText: "It causes a runtime error or crash", optionTag: "A" },
                { optionText: "It returns NULL", optionTag: "B" },
                { optionText: "It causes a compilation error", optionTag: "C" },
                { optionText: "It points to garbage value", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How is memory deallocated that was allocated using new?",
            options: [
                { optionText: "delete", optionTag: "A" },
                { optionText: "free", optionTag: "B" },
                { optionText: "release", optionTag: "C" },
                { optionText: "dispose", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is a pointer to a pointer?",
            options: [
                { optionText: "int **ptr;", optionTag: "A" },
                { optionText: "int ptr;", optionTag: "B" },
                { optionText: "int *ptr;", optionTag: "C" },
                { optionText: "int &ptr;", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What will happen if you delete a pointer twice?",
            options: [
                { optionText: "Undefined behavior", optionTag: "A" },
                { optionText: "Compilation error", optionTag: "B" },
                { optionText: "Segmentation fault always", optionTag: "C" },
                { optionText: "Memory leak", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the output of sizeof(char*) on a 64-bit system?",
            options: [
                { optionText: "8", optionTag: "A" },
                { optionText: "4", optionTag: "B" },
                { optionText: "2", optionTag: "C" },
                { optionText: "1", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following represents a null pointer?",
            options: [
                { optionText: "nullptr", optionTag: "A" },
                { optionText: "0", optionTag: "B" },
                { optionText: "NULL", optionTag: "C" },
                { optionText: "All of the above", optionTag: "D" }
            ],
            correctOption: "D",
            score: 1
        },
        {
            questionText: "What is pointer arithmetic based on?",
            options: [
                { optionText: "Size of the data type", optionTag: "A" },
                { optionText: "The address value only", optionTag: "B" },
                { optionText: "The data value stored", optionTag: "C" },
                { optionText: "None", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the value of ptr in: int *ptr = NULL; ?",
            options: [
                { optionText: "0", optionTag: "A" },
                { optionText: "Undefined", optionTag: "B" },
                { optionText: "Garbage", optionTag: "C" },
                { optionText: "Pointer to int", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following creates a pointer to an integer variable named x?",
            options: [
                { optionText: "int *p = &x;", optionTag: "A" },
                { optionText: "int p = *x;", optionTag: "B" },
                { optionText: "int *x = &p;", optionTag: "C" },
                { optionText: "int &p = x;", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How can you allocate memory for an array of 10 integers using new?",
            options: [
                { optionText: "int *arr = new int[10];", optionTag: "A" },
                { optionText: "int arr = new int(10);", optionTag: "B" },
                { optionText: "int *arr = malloc(10);", optionTag: "C" },
                { optionText: "int arr[10];", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which type of pointer can point to any data type?",
            options: [
                { optionText: "void *", optionTag: "A" },
                { optionText: "char *", optionTag: "B" },
                { optionText: "int *", optionTag: "C" },
                { optionText: "float *", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is pointer decay?",
            options: [
                { optionText: "Conversion of array to pointer", optionTag: "A" },
                { optionText: "Loss of pointer memory", optionTag: "B" },
                { optionText: "Conversion of int to pointer", optionTag: "C" },
                { optionText: "Corruption of pointer address", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does delete[] do in C++?",
            options: [
                { optionText: "Deallocates memory for arrays", optionTag: "A" },
                { optionText: "Deletes single pointer", optionTag: "B" },
                { optionText: "Deletes struct object", optionTag: "C" },
                { optionText: "Removes pointer completely", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these is a valid way to pass pointer to a function?",
            options: [
                { optionText: "void func(int *p);", optionTag: "A" },
                { optionText: "void func(int p);", optionTag: "B" },
                { optionText: "void func(int &p);", optionTag: "C" },
                { optionText: "int *func(void);", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which operator is used to access the value at the address stored in a pointer?",
            options: [
                { optionText: "*", optionTag: "A" },
                { optionText: "&", optionTag: "B" },
                { optionText: "->", optionTag: "C" },
                { optionText: "%", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which C++ standard introduced nullptr?",
            options: [
                { optionText: "C++11", optionTag: "A" },
                { optionText: "C++98", optionTag: "B" },
                { optionText: "C++03", optionTag: "C" },
                { optionText: "C++20", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
