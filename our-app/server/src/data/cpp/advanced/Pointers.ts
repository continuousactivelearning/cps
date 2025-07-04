import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ Pointers - Advanced Quiz",
    quizLevel: "advanced",
    lang: "cpp",
    description: "This quiz tests your advanced knowledge of Pointers in C++.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "Pointers"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What does the expression `*(ptr + i)` access in C++?",
            options: [
                { optionText: "The value at the (i+1)th position from ptr", optionTag: "A" },
                { optionText: "The address of the ith element", optionTag: "B" },
                { optionText: "The value of ptr", optionTag: "C" },
                { optionText: "The base address of the array", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following allows you to simulate dynamic multidimensional arrays?",
            options: [
                { optionText: "Array of pointers", optionTag: "A" },
                { optionText: "Single pointer", optionTag: "B" },
                { optionText: "Reference variable", optionTag: "C" },
                { optionText: "Static array", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which operation is invalid with pointers?",
            options: [
                { optionText: "Multiplication", optionTag: "A" },
                { optionText: "Addition", optionTag: "B" },
                { optionText: "Subtraction", optionTag: "C" },
                { optionText: "Comparison", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What will `delete[] ptr;` do in C++?",
            options: [
                { optionText: "Deallocate memory allocated for an array", optionTag: "A" },
                { optionText: "Delete only the pointer", optionTag: "B" },
                { optionText: "Cause memory leak", optionTag: "C" },
                { optionText: "Throw runtime error", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does a dangling pointer refer to?",
            options: [
                { optionText: "Pointer pointing to freed memory", optionTag: "A" },
                { optionText: "Pointer pointing to NULL", optionTag: "B" },
                { optionText: "Uninitialized pointer", optionTag: "C" },
                { optionText: "Pointer to a constant", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How to avoid dangling pointers?",
            options: [
                { optionText: "Assign NULL after deletion", optionTag: "A" },
                { optionText: "Avoid delete", optionTag: "B" },
                { optionText: "Reallocate the memory", optionTag: "C" },
                { optionText: "Use malloc instead", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is a smart pointer in C++?",
            options: [
                { optionText: "Pointer with automatic memory management", optionTag: "A" },
                { optionText: "Pointer to a function", optionTag: "B" },
                { optionText: "Pointer holding memory size", optionTag: "C" },
                { optionText: "Pointer with type conversion", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which smart pointer releases memory when no longer used?",
            options: [
                { optionText: "shared_ptr", optionTag: "A" },
                { optionText: "raw pointer", optionTag: "B" },
                { optionText: "const pointer", optionTag: "C" },
                { optionText: "void pointer", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these can be used to point to class member functions?",
            options: [
                { optionText: "Pointer to member function", optionTag: "A" },
                { optionText: "Void pointer", optionTag: "B" },
                { optionText: "Function pointer", optionTag: "C" },
                { optionText: "Reference", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which header provides smart pointers in C++11?",
            options: [
                { optionText: "<memory>", optionTag: "A" },
                { optionText: "<smartptr>", optionTag: "B" },
                { optionText: "<pointer>", optionTag: "C" },
                { optionText: "<stdlib>", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the size of a null pointer?",
            options: [
                { optionText: "Same as any pointer", optionTag: "A" },
                { optionText: "0", optionTag: "B" },
                { optionText: "Depends on architecture", optionTag: "C" },
                { optionText: "8 bytes always", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does `int *const ptr` mean?",
            options: [
                { optionText: "Pointer to int that cannot change the address it points to", optionTag: "A" },
                { optionText: "Pointer to a constant int", optionTag: "B" },
                { optionText: "Constant pointer to constant", optionTag: "C" },
                { optionText: "Void pointer", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does `const int* ptr` imply?",
            options: [
                { optionText: "Pointer to a constant int", optionTag: "A" },
                { optionText: "Constant pointer to int", optionTag: "B" },
                { optionText: "Non-constant int and pointer", optionTag: "C" },
                { optionText: "Void pointer", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which smart pointer avoids circular references?",
            options: [
                { optionText: "weak_ptr", optionTag: "A" },
                { optionText: "shared_ptr", optionTag: "B" },
                { optionText: "unique_ptr", optionTag: "C" },
                { optionText: "scoped_ptr", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens if you dereference a NULL pointer?",
            options: [
                { optionText: "Runtime error", optionTag: "A" },
                { optionText: "Compile error", optionTag: "B" },
                { optionText: "0 is returned", optionTag: "C" },
                { optionText: "Memory leak", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which operator is used to access members via pointer to object?",
            options: [
                { optionText: "->", optionTag: "A" },
                { optionText: ".", optionTag: "B" },
                { optionText: "::", optionTag: "C" },
                { optionText: "&", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does `ptr++` do in pointer arithmetic?",
            options: [
                { optionText: "Moves to next memory location", optionTag: "A" },
                { optionText: "Increments value at ptr", optionTag: "B" },
                { optionText: "Changes address to 0", optionTag: "C" },
                { optionText: "Multiplies ptr by 2", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which pointer can hold any data type?",
            options: [
                { optionText: "void pointer", optionTag: "A" },
                { optionText: "char pointer", optionTag: "B" },
                { optionText: "int pointer", optionTag: "C" },
                { optionText: "reference pointer", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these ensures unique ownership of a resource?",
            options: [
                { optionText: "unique_ptr", optionTag: "A" },
                { optionText: "shared_ptr", optionTag: "B" },
                { optionText: "weak_ptr", optionTag: "C" },
                { optionText: "auto_ptr", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which is safer: raw pointers or smart pointers?",
            options: [
                { optionText: "Smart pointers", optionTag: "A" },
                { optionText: "Raw pointers", optionTag: "B" },
                { optionText: "Both are same", optionTag: "C" },
                { optionText: "Depends on compiler", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
