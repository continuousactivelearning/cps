import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript Matrices - Beginner Quiz",
    quizLevel: "beginner",
    lang: "javascript",
    description: "This quiz tests your basic knowledge of matrices using arrays in JavaScript.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "Matrices"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "How can you create a 2D matrix in JavaScript?",
            options: [
                { optionText: "Using nested arrays", optionTag: "A" },
                { optionText: "Using a single array", optionTag: "B" },
                { optionText: "Using JSON objects", optionTag: "C" },
                { optionText: "Using matrix() function", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What will be the result of accessing matrix[1][2]?",
            options: [
                { optionText: "The element in 2nd row and 3rd column", optionTag: "A" },
                { optionText: "The element in 1st column and 2nd row", optionTag: "B" },
                { optionText: "A syntax error", optionTag: "C" },
                { optionText: "undefined", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which method is used to iterate over a matrix in JavaScript?",
            options: [
                { optionText: "Nested for loops", optionTag: "A" },
                { optionText: "Single while loop", optionTag: "B" },
                { optionText: "map() only", optionTag: "C" },
                { optionText: "matrix.loop()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How can you check the number of rows in a 2D array `matrix`?",
            options: [
                { optionText: "matrix.length", optionTag: "A" },
                { optionText: "matrix.rows", optionTag: "B" },
                { optionText: "matrix.columns", optionTag: "C" },
                { optionText: "matrix.size()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How can you get the number of columns in a matrix row?",
            options: [
                { optionText: "matrix[0].length", optionTag: "A" },
                { optionText: "matrix.length", optionTag: "B" },
                { optionText: "matrix.cols()", optionTag: "C" },
                { optionText: "matrix.columnCount", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How do you add a new row to a matrix?",
            options: [
                { optionText: "matrix.push([values])", optionTag: "A" },
                { optionText: "matrix.addRow([values])", optionTag: "B" },
                { optionText: "matrix.append(values)", optionTag: "C" },
                { optionText: "matrix.insertRow(values)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What will `typeof matrix` return for a 2D array?",
            options: [
                { optionText: "'object'", optionTag: "A" },
                { optionText: "'array'", optionTag: "B" },
                { optionText: "'matrix'", optionTag: "C" },
                { optionText: "'undefined'", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which function checks if a value is an array?",
            options: [
                { optionText: "Array.isArray()", optionTag: "A" },
                { optionText: "isArray()", optionTag: "B" },
                { optionText: "typeof === 'array'", optionTag: "C" },
                { optionText: "checkArray()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How do you remove the last row from a matrix?",
            options: [
                { optionText: "matrix.pop()", optionTag: "A" },
                { optionText: "matrix.removeLast()", optionTag: "B" },
                { optionText: "matrix.delete()", optionTag: "C" },
                { optionText: "matrix.popRow()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How can you update a value at matrix[1][1]?",
            options: [
                { optionText: "matrix[1][1] = newValue", optionTag: "A" },
                { optionText: "matrix.update(1,1)", optionTag: "B" },
                { optionText: "matrix.setValue(1,1)", optionTag: "C" },
                { optionText: "matrix.change(1,1)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What will happen if you try to access an index that doesn’t exist?",
            options: [
                { optionText: "Returns undefined", optionTag: "A" },
                { optionText: "Throws an error", optionTag: "B" },
                { optionText: "Crashes the program", optionTag: "C" },
                { optionText: "Returns null", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which built-in method can be used to flatten a 2D array?",
            options: [
                { optionText: "flat()", optionTag: "A" },
                { optionText: "flatten()", optionTag: "B" },
                { optionText: "combine()", optionTag: "C" },
                { optionText: "merge()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the default value of an element in an uninitialized array index?",
            options: [
                { optionText: "undefined", optionTag: "A" },
                { optionText: "null", optionTag: "B" },
                { optionText: "0", optionTag: "C" },
                { optionText: "empty", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How to print all elements of a matrix row?",
            options: [
                { optionText: "Using a loop on matrix[row]", optionTag: "A" },
                { optionText: "Using matrix.display(row)", optionTag: "B" },
                { optionText: "matrix[row].print()", optionTag: "C" },
                { optionText: "console.print(matrix[row])", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the type of matrix[0] in a 2D array?",
            options: [
                { optionText: "array", optionTag: "A" },
                { optionText: "object", optionTag: "B" },
                { optionText: "string", optionTag: "C" },
                { optionText: "function", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How do you reverse the order of rows in a matrix?",
            options: [
                { optionText: "matrix.reverse()", optionTag: "A" },
                { optionText: "matrix.reverseRows()", optionTag: "B" },
                { optionText: "reverse(matrix)", optionTag: "C" },
                { optionText: "matrix.rowReverse()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Can JavaScript matrices contain mixed data types?",
            options: [
                { optionText: "Yes", optionTag: "A" },
                { optionText: "No", optionTag: "B" },
                { optionText: "Only numbers", optionTag: "C" },
                { optionText: "Only strings", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How to declare an empty matrix?",
            options: [
                { optionText: "let matrix = [];", optionTag: "A" },
                { optionText: "let matrix = new Array();", optionTag: "B" },
                { optionText: "let matrix = [[]];", optionTag: "C" },
                { optionText: "All of the above", optionTag: "D" }
            ],
            correctOption: "D",
            score: 1
        },
        {
            questionText: "How to find the total number of elements in a 2D array?",
            options: [
                { optionText: "Sum of all row lengths", optionTag: "A" },
                { optionText: "matrix.length", optionTag: "B" },
                { optionText: "matrix.count()", optionTag: "C" },
                { optionText: "matrix.size", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How do you print all elements of a matrix?",
            options: [
                { optionText: "Use nested for loops", optionTag: "A" },
                { optionText: "Use matrix.show()", optionTag: "B" },
                { optionText: "console.table(matrix)", optionTag: "C" },
                { optionText: "Both A and C", optionTag: "D" }
            ],
            correctOption: "D",
            score: 1
        }
    ]
};

export default quizData;