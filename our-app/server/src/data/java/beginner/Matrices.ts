import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "Java Matrices - Beginner Quiz",
    quizLevel: "beginner",
    lang: "java",
    description: "This quiz tests your basic knowledge of matrices in Java.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "Matrices"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is a matrix?",
            options: [
                { optionText: "A single value", optionTag: "A" },
                { optionText: "A collection of rows and columns", optionTag: "B" },
                { optionText: "A type of Java class", optionTag: "C" },
                { optionText: "A type of sorting algorithm", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "Which of the following correctly declares a 2D array in Java?",
            options: [
                { optionText: "int[][] matrix;", optionTag: "A" },
                { optionText: "int matrix[][];", optionTag: "B" },
                { optionText: "Both A and B", optionTag: "C" },
                { optionText: "int matrix(2,2);", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "How do you access an element in a matrix?",
            options: [
                { optionText: "matrix[row][column]", optionTag: "A" },
                { optionText: "matrix(row,column)", optionTag: "B" },
                { optionText: "matrix{row,column}", optionTag: "C" },
                { optionText: "matrix[row,column]", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the default value of an int element in a matrix?",
            options: [
                { optionText: "0", optionTag: "A" },
                { optionText: "null", optionTag: "B" },
                { optionText: "undefined", optionTag: "C" },
                { optionText: "Empty", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which Java loop is commonly used to traverse a matrix?",
            options: [
                { optionText: "For loop", optionTag: "A" },
                { optionText: "While loop", optionTag: "B" },
                { optionText: "Do-while loop", optionTag: "C" },
                { optionText: "All of the above", optionTag: "D" }
            ],
            correctOption: "D",
            score: 1
        },
        {
            questionText: "Which method is used to find the length of a matrix row?",
            options: [
                { optionText: "matrix.length", optionTag: "A" },
                { optionText: "matrix[0].length", optionTag: "B" },
                { optionText: "matrix.size()", optionTag: "C" },
                { optionText: "matrix.rows", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which method is used to find the number of columns in a matrix?",
            options: [
                { optionText: "matrix.length", optionTag: "A" },
                { optionText: "matrix[0].length", optionTag: "B" },
                { optionText: "matrix.size()", optionTag: "C" },
                { optionText: "matrix.columns", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "What is the time complexity to traverse all elements of a matrix?",
            options: [
                { optionText: "O(1)", optionTag: "A" },
                { optionText: "O(m * n)", optionTag: "B" },
                { optionText: "O(log n)", optionTag: "C" },
                { optionText: "O(m + n)", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "How can you initialize a matrix with specific values?",
            options: [
                { optionText: "int[][] matrix = {{1, 2}, {3, 4}};", optionTag: "A" },
                { optionText: "int[][] matrix = new int[2][2];", optionTag: "B" },
                { optionText: "Both A and B", optionTag: "C" },
                { optionText: "matrix.initialize()", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "What will matrix[2][3] access in a 3x4 matrix?",
            options: [
                { optionText: "3rd row, 4th column", optionTag: "A" },
                { optionText: "2nd row, 3rd column", optionTag: "B" },
                { optionText: "4th row, 5th column", optionTag: "C" },
                { optionText: "Error", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which matrix operation swaps rows and columns?",
            options: [
                { optionText: "Transpose", optionTag: "A" },
                { optionText: "Reverse", optionTag: "B" },
                { optionText: "Shift", optionTag: "C" },
                { optionText: "Invert", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is required for matrix multiplication to be valid?",
            options: [
                { optionText: "Columns of first matrix = Rows of second matrix", optionTag: "A" },
                { optionText: "Rows of first matrix = Columns of second matrix", optionTag: "B" },
                { optionText: "Both matrices must be square", optionTag: "C" },
                { optionText: "No specific condition", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following best describes a square matrix?",
            options: [
                { optionText: "Rows = Columns", optionTag: "A" },
                { optionText: "Rows > Columns", optionTag: "B" },
                { optionText: "Rows < Columns", optionTag: "C" },
                { optionText: "Only one row", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does matrix.length return in a 2D array?",
            options: [
                { optionText: "Number of rows", optionTag: "A" },
                { optionText: "Number of columns", optionTag: "B" },
                { optionText: "Total elements", optionTag: "C" },
                { optionText: "Maximum value", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which symbol is used to access array elements in Java?",
            options: [
                { optionText: "[]", optionTag: "A" },
                { optionText: "{}", optionTag: "B" },
                { optionText: "()", optionTag: "C" },
                { optionText: "<>", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How many elements are in a 3x3 matrix?",
            options: [
                { optionText: "6", optionTag: "A" },
                { optionText: "9", optionTag: "B" },
                { optionText: "3", optionTag: "C" },
                { optionText: "Depends on input", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "Which of these is a valid way to print all elements of a matrix?",
            options: [
                { optionText: "Nested for loops", optionTag: "A" },
                { optionText: "System.out.println(matrix)", optionTag: "B" },
                { optionText: "matrix.display()", optionTag: "C" },
                { optionText: "matrix.printAll()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the index of the first element in a Java matrix?",
            options: [
                { optionText: "1", optionTag: "A" },
                { optionText: "0", optionTag: "B" },
                { optionText: "Depends on the array type", optionTag: "C" },
                { optionText: "Undefined", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "Which of the following can represent a 3x4 matrix?",
            options: [
                { optionText: "3 rows, 4 columns", optionTag: "A" },
                { optionText: "4 rows, 3 columns", optionTag: "B" },
                { optionText: "3 columns, 4 rows", optionTag: "C" },
                { optionText: "Both A and C", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
