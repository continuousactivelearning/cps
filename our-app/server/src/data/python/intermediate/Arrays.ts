import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "Python Arrays - Intermediate Quiz",
    quizLevel: "intermediate",
    lang: "python",
    description: "This quiz tests your intermediate knowledge of Arrays in Python.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "Arrays"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "Which module in Python provides an array data structure?",
            options: [
                { optionText: "array", optionTag: "A" },
                { optionText: "lists", optionTag: "B" },
                { optionText: "numpy", optionTag: "C" },
                { optionText: "sequence", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the output of: arr = array.array('i', [1, 2, 3]); print(arr[1])?",
            options: [
                { optionText: "2", optionTag: "A" },
                { optionText: "1", optionTag: "B" },
                { optionText: "3", optionTag: "C" },
                { optionText: "array", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which array operation removes the last element?",
            options: [
                { optionText: "pop()", optionTag: "A" },
                { optionText: "remove()", optionTag: "B" },
                { optionText: "delete()", optionTag: "C" },
                { optionText: "discard()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How do you reverse an array in Python?",
            options: [
                { optionText: "arr.reverse()", optionTag: "A" },
                { optionText: "arr = arr[::-1]", optionTag: "B" },
                { optionText: "reversed(arr)", optionTag: "C" },
                { optionText: "All of the above", optionTag: "D" }
            ],
            correctOption: "D",
            score: 1
        },
        {
            questionText: "Which function returns the index of a specific value in an array?",
            options: [
                { optionText: "index()", optionTag: "A" },
                { optionText: "find()", optionTag: "B" },
                { optionText: "position()", optionTag: "C" },
                { optionText: "get()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the output of len([10, 20, 30, 40])?",
            options: [
                { optionText: "4", optionTag: "A" },
                { optionText: "3", optionTag: "B" },
                { optionText: "5", optionTag: "C" },
                { optionText: "Error", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How do you append an element to a Python array?",
            options: [
                { optionText: "arr.append(5)", optionTag: "A" },
                { optionText: "arr.add(5)", optionTag: "B" },
                { optionText: "arr.insert(5)", optionTag: "C" },
                { optionText: "arr.push(5)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which slicing syntax returns all elements except the first?",
            options: [
                { optionText: "arr[1:]", optionTag: "A" },
                { optionText: "arr[:1]", optionTag: "B" },
                { optionText: "arr[0:]", optionTag: "C" },
                { optionText: "arr[:-1]", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens when you access an out-of-range index in an array?",
            options: [
                { optionText: "IndexError", optionTag: "A" },
                { optionText: "None", optionTag: "B" },
                { optionText: "0", optionTag: "C" },
                { optionText: "Returns last element", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which method removes a specific element from an array?",
            options: [
                { optionText: "remove()", optionTag: "A" },
                { optionText: "delete()", optionTag: "B" },
                { optionText: "pop()", optionTag: "C" },
                { optionText: "discard()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does arr.insert(2, 50) do?",
            options: [
                { optionText: "Inserts 50 at index 2", optionTag: "A" },
                { optionText: "Replaces element at index 2 with 50", optionTag: "B" },
                { optionText: "Deletes element at index 2", optionTag: "C" },
                { optionText: "Appends 50 at end", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which data structure is more efficient than list for numerical arrays?",
            options: [
                { optionText: "numpy array", optionTag: "A" },
                { optionText: "dictionary", optionTag: "B" },
                { optionText: "tuple", optionTag: "C" },
                { optionText: "set", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the output of: arr[-1] in Python?",
            options: [
                { optionText: "Last element", optionTag: "A" },
                { optionText: "First element", optionTag: "B" },
                { optionText: "IndexError", optionTag: "C" },
                { optionText: "None", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How do you clear all elements in a Python array?",
            options: [
                { optionText: "arr.clear()", optionTag: "A" },
                { optionText: "arr.empty()", optionTag: "B" },
                { optionText: "arr = []", optionTag: "C" },
                { optionText: "Both A and C", optionTag: "D" }
            ],
            correctOption: "D",
            score: 1
        },
        {
            questionText: "Which of the following slices a list from index 2 to 4?",
            options: [
                { optionText: "arr[2:5]", optionTag: "A" },
                { optionText: "arr[2:4]", optionTag: "B" },
                { optionText: "arr[2:]", optionTag: "C" },
                { optionText: "arr[:4]", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "Which keyword checks if a value exists in an array?",
            options: [
                { optionText: "in", optionTag: "A" },
                { optionText: "exists", optionTag: "B" },
                { optionText: "has", optionTag: "C" },
                { optionText: "contains", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which method returns the number of occurrences of a value?",
            options: [
                { optionText: "count()", optionTag: "A" },
                { optionText: "frequency()", optionTag: "B" },
                { optionText: "length()", optionTag: "C" },
                { optionText: "find()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How to combine two lists into one?",
            options: [
                { optionText: "Using + operator", optionTag: "A" },
                { optionText: "append()", optionTag: "B" },
                { optionText: "merge()", optionTag: "C" },
                { optionText: "join()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which loop is most commonly used to iterate over arrays?",
            options: [
                { optionText: "for loop", optionTag: "A" },
                { optionText: "while loop", optionTag: "B" },
                { optionText: "do-while loop", optionTag: "C" },
                { optionText: "forEach", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which error is raised when trying to access an invalid index?",
            options: [
                { optionText: "IndexError", optionTag: "A" },
                { optionText: "ValueError", optionTag: "B" },
                { optionText: "KeyError", optionTag: "C" },
                { optionText: "TypeError", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;