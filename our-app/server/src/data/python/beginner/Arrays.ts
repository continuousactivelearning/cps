import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "Python Arrays - Beginner Quiz",
    quizLevel: "beginner",
    lang: "python",
    description: "This quiz tests your basic knowledge of Arrays (lists) in Python.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "Arrays"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the index of the first element in a Python list?",
            options: [
                { optionText: "0", optionTag: "A" },
                { optionText: "1", optionTag: "B" },
                { optionText: "-1", optionTag: "C" },
                { optionText: "Depends on list type", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is the correct way to create a list in Python?",
            options: [
                { optionText: "my_list = [1, 2, 3]", optionTag: "A" },
                { optionText: "list my_list = (1, 2, 3)", optionTag: "B" },
                { optionText: "int my_list[] = [1, 2, 3]", optionTag: "C" },
                { optionText: "array my_list = [1, 2, 3]", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How do you access the third element in a Python list named `arr`?",
            options: [
                { optionText: "arr[2]", optionTag: "A" },
                { optionText: "arr(3)", optionTag: "B" },
                { optionText: "arr{3}", optionTag: "C" },
                { optionText: "arr.3", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which method adds an element to the end of a Python list?",
            options: [
                { optionText: "append()", optionTag: "A" },
                { optionText: "add()", optionTag: "B" },
                { optionText: "insert()", optionTag: "C" },
                { optionText: "push()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does the `len()` function do in Python?",
            options: [
                { optionText: "Returns the number of elements in a list", optionTag: "A" },
                { optionText: "Returns the length of a string only", optionTag: "B" },
                { optionText: "Counts the number of characters", optionTag: "C" },
                { optionText: "Returns index of the list", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following removes the last element in a list?",
            options: [
                { optionText: "pop()", optionTag: "A" },
                { optionText: "remove()", optionTag: "B" },
                { optionText: "del()", optionTag: "C" },
                { optionText: "clear()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does `arr[-1]` return?",
            options: [
                { optionText: "The last element", optionTag: "A" },
                { optionText: "The first element", optionTag: "B" },
                { optionText: "Syntax error", optionTag: "C" },
                { optionText: "Reversed list", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which keyword is used to loop over a list?",
            options: [
                { optionText: "for", optionTag: "A" },
                { optionText: "each", optionTag: "B" },
                { optionText: "loop", optionTag: "C" },
                { optionText: "iterate", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which method sorts a list in-place?",
            options: [
                { optionText: "arr.sort()", optionTag: "A" },
                { optionText: "sort(arr)", optionTag: "B" },
                { optionText: "arr.ordered()", optionTag: "C" },
                { optionText: "sorted(arr)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the default data type of elements in a list?",
            options: [
                { optionText: "Any type", optionTag: "A" },
                { optionText: "Only integers", optionTag: "B" },
                { optionText: "Only strings", optionTag: "C" },
                { optionText: "Only floats", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which function returns a new sorted list?",
            options: [
                { optionText: "sorted(arr)", optionTag: "A" },
                { optionText: "arr.sort()", optionTag: "B" },
                { optionText: "sort(arr)", optionTag: "C" },
                { optionText: "arr.sorted()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which method removes a specific element by value?",
            options: [
                { optionText: "remove()", optionTag: "A" },
                { optionText: "pop()", optionTag: "B" },
                { optionText: "del()", optionTag: "C" },
                { optionText: "clear()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How can you concatenate two lists?",
            options: [
                { optionText: "Using + operator", optionTag: "A" },
                { optionText: "Using * operator", optionTag: "B" },
                { optionText: "Using & operator", optionTag: "C" },
                { optionText: "Using append()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which function gives the index of a value in a list?",
            options: [
                { optionText: "index()", optionTag: "A" },
                { optionText: "find()", optionTag: "B" },
                { optionText: "locate()", optionTag: "C" },
                { optionText: "position()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does the `in` keyword check?",
            options: [
                { optionText: "If a value exists in a list", optionTag: "A" },
                { optionText: "If a list is sorted", optionTag: "B" },
                { optionText: "If list is empty", optionTag: "C" },
                { optionText: "Length of list", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the output of `[1, 2] * 2`?",
            options: [
                { optionText: "[1, 2, 1, 2]", optionTag: "A" },
                { optionText: "[2, 4]", optionTag: "B" },
                { optionText: "[1, 2, 2]", optionTag: "C" },
                { optionText: "[1, 2, 2, 4]", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which method inserts an element at a specific index?",
            options: [
                { optionText: "insert()", optionTag: "A" },
                { optionText: "append()", optionTag: "B" },
                { optionText: "add()", optionTag: "C" },
                { optionText: "extend()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following creates an empty list?",
            options: [
                { optionText: "[]", optionTag: "A" },
                { optionText: "list()", optionTag: "B" },
                { optionText: "Both A and B", optionTag: "C" },
                { optionText: "None of the above", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "How to check the number of elements in a list?",
            options: [
                { optionText: "len(list)", optionTag: "A" },
                { optionText: "list.length", optionTag: "B" },
                { optionText: "count(list)", optionTag: "C" },
                { optionText: "size(list)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens if you try to access an index out of range?",
            options: [
                { optionText: "IndexError", optionTag: "A" },
                { optionText: "None", optionTag: "B" },
                { optionText: "0", optionTag: "C" },
                { optionText: "SyntaxError", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;