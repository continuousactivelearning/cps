import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "C++ Matrices - Beginner Quiz",
  quizLevel: "beginner",
  lang: "cpp",
  description: "This quiz tests your fundamental understanding of matrices in C++.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Matrices"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is a matrix in programming?",
      options: [
        { optionText: "A one-dimensional array", optionTag: "A" },
        { optionText: "A table of numbers arranged in rows and columns", optionTag: "B" },
        { optionText: "A loop structure", optionTag: "C" },
        { optionText: "A single variable", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "How is a 2D matrix declared in C++?",
      options: [
        { optionText: "int matrix[3][3];", optionTag: "A" },
        { optionText: "matrix int[3][3];", optionTag: "B" },
        { optionText: "int[] matrix = [3][3];", optionTag: "C" },
        { optionText: "int matrix = {3,3};", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the index of the first element in a C++ matrix?",
      options: [
        { optionText: "[0][0]", optionTag: "A" },
        { optionText: "[1][1]", optionTag: "B" },
        { optionText: "[0][1]", optionTag: "C" },
        { optionText: "[1][0]", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which loop structure is commonly used to traverse a matrix?",
      options: [
        { optionText: "Nested for loops", optionTag: "A" },
        { optionText: "Single for loop", optionTag: "B" },
        { optionText: "While loop", optionTag: "C" },
        { optionText: "Do-while loop", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What does matrix[2][1] represent?",
      options: [
        { optionText: "Element in 3rd row and 2nd column", optionTag: "A" },
        { optionText: "Element in 2nd row and 1st column", optionTag: "B" },
        { optionText: "Element in 1st row and 2nd column", optionTag: "C" },
        { optionText: "Element in 2nd row and 3rd column", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which data type is used for matrix elements?",
      options: [
        { optionText: "Any valid C++ data type", optionTag: "A" },
        { optionText: "Only int", optionTag: "B" },
        { optionText: "Only float", optionTag: "C" },
        { optionText: "Only string", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How many elements are there in a matrix[4][3]?",
      options: [
        { optionText: "12", optionTag: "A" },
        { optionText: "7", optionTag: "B" },
        { optionText: "4", optionTag: "C" },
        { optionText: "3", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which operation adds two matrices?",
      options: [
        { optionText: "Element-wise addition", optionTag: "A" },
        { optionText: "Matrix multiplication", optionTag: "B" },
        { optionText: "Transpose", optionTag: "C" },
        { optionText: "Row shifting", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Matrix multiplication is valid when:",
      options: [
        { optionText: "Columns of first = Rows of second", optionTag: "A" },
        { optionText: "Rows of first = Rows of second", optionTag: "B" },
        { optionText: "Both matrices are square", optionTag: "C" },
        { optionText: "Any size is allowed", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the transpose of a matrix?",
      options: [
        { optionText: "Switching rows and columns", optionTag: "A" },
        { optionText: "Multiplying all elements", optionTag: "B" },
        { optionText: "Reversing matrix", optionTag: "C" },
        { optionText: "Flipping vertically", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which header file is used for input/output in matrix programs?",
      options: [
        { optionText: "<iostream>", optionTag: "A" },
        { optionText: "<math.h>", optionTag: "B" },
        { optionText: "<stdlib.h>", optionTag: "C" },
        { optionText: "<matrix.h>", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the output of matrix[1][2] if assigned 10?",
      options: [
        { optionText: "10", optionTag: "A" },
        { optionText: "2", optionTag: "B" },
        { optionText: "1", optionTag: "C" },
        { optionText: "undefined", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following is a square matrix?",
      options: [
        { optionText: "matrix[3][3]", optionTag: "A" },
        { optionText: "matrix[3][2]", optionTag: "B" },
        { optionText: "matrix[1][3]", optionTag: "C" },
        { optionText: "matrix[5][4]", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How can we initialize a 2x2 matrix?",
      options: [
        { optionText: "int mat[2][2] = {{1,2},{3,4}};", optionTag: "A" },
        { optionText: "int mat[2][2] = {1,2,3,4};", optionTag: "B" },
        { optionText: "int mat[2] = {1,2};", optionTag: "C" },
        { optionText: "int mat[] = [1,2,3,4];", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is an identity matrix?",
      options: [
        { optionText: "A square matrix with 1s on the diagonal", optionTag: "A" },
        { optionText: "All zeroes", optionTag: "B" },
        { optionText: "All ones", optionTag: "C" },
        { optionText: "Reversed elements", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Can matrices be passed to functions in C++?",
      options: [
        { optionText: "Yes", optionTag: "A" },
        { optionText: "No", optionTag: "B" },
        { optionText: "Only in Java", optionTag: "C" },
        { optionText: "Only with pointers", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the result of multiplying matrix[2][2] with matrix[2][1]?",
      options: [
        { optionText: "matrix[2][1]", optionTag: "A" },
        { optionText: "matrix[1][2]", optionTag: "B" },
        { optionText: "matrix[2][2]", optionTag: "C" },
        { optionText: "Invalid operation", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Can you declare matrix size at runtime in C++?",
      options: [
        { optionText: "Yes, using dynamic memory (new)", optionTag: "A" },
        { optionText: "No, must be fixed", optionTag: "B" },
        { optionText: "Only in arrays", optionTag: "C" },
        { optionText: "Only in Java", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is a sparse matrix?",
      options: [
        { optionText: "Matrix with mostly zero elements", optionTag: "A" },
        { optionText: "Matrix with negative numbers", optionTag: "B" },
        { optionText: "Matrix with all elements", optionTag: "C" },
        { optionText: "Matrix with large elements", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    }
  ]
};

export default quizData;