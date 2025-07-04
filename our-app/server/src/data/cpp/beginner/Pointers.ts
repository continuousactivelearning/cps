import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ Pointers - Beginner Quiz",
    quizLevel: "beginner",
    lang: "cpp",
    description: "This quiz tests your basic understanding of pointers in C++.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "Pointers"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is a pointer in C++?",
            options: [
                { optionText: "A variable that stores the address of another variable", optionTag: "A" },
                { optionText: "A function", optionTag: "B" },
                { optionText: "A constant", optionTag: "C" },
                { optionText: "A structure", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which operator is used to access the address of a variable?",
            options: [
                { optionText: "&", optionTag: "A" },
                { optionText: "*", optionTag: "B" },
                { optionText: "#", optionTag: "C" },
                { optionText: "@", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which operator is used to access the value at the address stored in a pointer?",
            options: [
                { optionText: "*", optionTag: "A" },
                { optionText: "&", optionTag: "B" },
                { optionText: "$", optionTag: "C" },
                { optionText: "!", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What will the following code print?\n```cpp\nint x = 10;\nint* p = &x;\ncout << *p;\n```",
            options: [
                { optionText: "10", optionTag: "A" },
                { optionText: "Address of x", optionTag: "B" },
                { optionText: "Garbage value", optionTag: "C" },
                { optionText: "0", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the default value of an uninitialized pointer?",
            options: [
                { optionText: "Undefined/Garbage", optionTag: "A" },
                { optionText: "0", optionTag: "B" },
                { optionText: "NULL", optionTag: "C" },
                { optionText: "&NULL", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following correctly declares a pointer to an int?",
            options: [
                { optionText: "int* ptr;", optionTag: "A" },
                { optionText: "ptr int*;", optionTag: "B" },
                { optionText: "int ptr*;", optionTag: "C" },
                { optionText: "*int ptr;", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is a NULL pointer?",
            options: [
                { optionText: "A pointer that points to nothing", optionTag: "A" },
                { optionText: "A pointer that points to 0", optionTag: "B" },
                { optionText: "A pointer that points to garbage", optionTag: "C" },
                { optionText: "A pointer that points to itself", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is used to allocate memory dynamically in C++?",
            options: [
                { optionText: "new", optionTag: "A" },
                { optionText: "malloc", optionTag: "B" },
                { optionText: "alloc", optionTag: "C" },
                { optionText: "calloc", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How do you free dynamically allocated memory in C++?",
            options: [
                { optionText: "delete", optionTag: "A" },
                { optionText: "free", optionTag: "B" },
                { optionText: "remove", optionTag: "C" },
                { optionText: "clear", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following creates a pointer to a float?",
            options: [
                { optionText: "float* ptr;", optionTag: "A" },
                { optionText: "float ptr*;", optionTag: "B" },
                { optionText: "*float ptr;", optionTag: "C" },
                { optionText: "ptr float*;", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is pointer arithmetic?",
            options: [
                { optionText: "Performing arithmetic operations on pointer values", optionTag: "A" },
                { optionText: "Using pointers for calculations", optionTag: "B" },
                { optionText: "Changing pointer types", optionTag: "C" },
                { optionText: "Assigning one pointer to another", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What will `ptr++` do if ptr is a pointer to an int?",
            options: [
                { optionText: "Move pointer to next int location", optionTag: "A" },
                { optionText: "Increment value at ptr", optionTag: "B" },
                { optionText: "Cause error", optionTag: "C" },
                { optionText: "Move pointer to next byte", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is a double pointer?",
            options: [
                { optionText: "int** ptr;", optionTag: "A" },
                { optionText: "int ptr;", optionTag: "B" },
                { optionText: "int* ptr;", optionTag: "C" },
                { optionText: "int ptr**;", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the output of `cout << &x;` if x is an int?",
            options: [
                { optionText: "Memory address of x", optionTag: "A" },
                { optionText: "Value of x", optionTag: "B" },
                { optionText: "0", optionTag: "C" },
                { optionText: "Compilation error", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Can pointers point to functions in C++?",
            options: [
                { optionText: "Yes", optionTag: "A" },
                { optionText: "No", optionTag: "B" },
                { optionText: "Only in C", optionTag: "C" },
                { optionText: "Only for static functions", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is a dangling pointer?",
            options: [
                { optionText: "A pointer pointing to freed memory", optionTag: "A" },
                { optionText: "A pointer pointing to NULL", optionTag: "B" },
                { optionText: "A pointer that never changes", optionTag: "C" },
                { optionText: "A pointer pointing to static memory", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which operator is used to deallocate memory in C++?",
            options: [
                { optionText: "delete", optionTag: "A" },
                { optionText: "remove", optionTag: "B" },
                { optionText: "free", optionTag: "C" },
                { optionText: "release", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Can we assign NULL to a pointer in C++?",
            options: [
                { optionText: "Yes", optionTag: "A" },
                { optionText: "No", optionTag: "B" },
                { optionText: "Only in C", optionTag: "C" },
                { optionText: "Only in 64-bit systems", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How do you dynamically allocate an array of 5 integers in C++?",
            options: [
                { optionText: "int* arr = new int[5];", optionTag: "A" },
                { optionText: "int arr = new int(5);", optionTag: "B" },
                { optionText: "int arr[5];", optionTag: "C" },
                { optionText: "int arr = malloc(5);", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the result of dereferencing a NULL pointer?",
            options: [
                { optionText: "Runtime error or crash", optionTag: "A" },
                { optionText: "Value 0", optionTag: "B" },
                { optionText: "Nothing", optionTag: "C" },
                { optionText: "Undefined but safe", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
