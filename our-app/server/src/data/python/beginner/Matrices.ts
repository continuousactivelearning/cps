// beginner/python/matrices.ts

import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python Matrices - Beginner Quiz",
  quizLevel: "beginner",
  lang: "python",
  description: "This quiz tests your basic knowledge of Matrices in Python.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Matrices"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "How can you represent a 2x2 matrix in Python using lists?",
      options: [
        { optionText: "[[1, 2], [3, 4]]", optionTag: "A" },
        { optionText: "[1, 2, 3, 4]", optionTag: "B" },
        { optionText: "{1, 2, 3, 4}", optionTag: "C" },
        { optionText: "(1, 2, 3, 4)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which library is commonly used for matrix operations in Python?",
      options: [
        { optionText: "NumPy", optionTag: "A" },
        { optionText: "Matplotlib", optionTag: "B" },
        { optionText: "Pandas", optionTag: "C" },
        { optionText: "TensorFlow", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How do you access the element at the 2nd row and 1st column of a list matrix?",
      options: [
        { optionText: "matrix[1][0]", optionTag: "A" },
        { optionText: "matrix[0][1]", optionTag: "B" },
        { optionText: "matrix[2][1]", optionTag: "C" },
        { optionText: "matrix[1,0]", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What does the shape of a 3x4 matrix mean?",
      options: [
        { optionText: "3 rows, 4 columns", optionTag: "A" },
        { optionText: "4 rows, 3 columns", optionTag: "B" },
        { optionText: "12 rows", optionTag: "C" },
        { optionText: "3 elements", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How do you transpose a matrix `A` in NumPy?",
      options: [
        { optionText: "A.T", optionTag: "A" },
        { optionText: "A.transpose()", optionTag: "B" },
        { optionText: "np.transpose(A)", optionTag: "C" },
        { optionText: "All of the above", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which of the following is **not** a valid matrix operation in NumPy?",
      options: [
        { optionText: "Matrix division", optionTag: "A" },
        { optionText: "Matrix addition", optionTag: "B" },
        { optionText: "Matrix subtraction", optionTag: "C" },
        { optionText: "Matrix multiplication", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which function is used to create a zero matrix in NumPy?",
      options: [
        { optionText: "np.zeros()", optionTag: "A" },
        { optionText: "np.empty()", optionTag: "B" },
        { optionText: "np.ones()", optionTag: "C" },
        { optionText: "np.full()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the output of np.eye(3)?",
      options: [
        { optionText: "3x3 Identity matrix", optionTag: "A" },
        { optionText: "3x3 Zero matrix", optionTag: "B" },
        { optionText: "3x3 Matrix with all elements 3", optionTag: "C" },
        { optionText: "Error", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which method is used for matrix multiplication in NumPy?",
      options: [
        { optionText: "np.dot()", optionTag: "A" },
        { optionText: "np.multiply()", optionTag: "B" },
        { optionText: "np.add()", optionTag: "C" },
        { optionText: "np.concat()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How to find the inverse of a square matrix in NumPy?",
      options: [
        { optionText: "np.linalg.inv()", optionTag: "A" },
        { optionText: "np.inverse()", optionTag: "B" },
        { optionText: "np.matrix.inverse()", optionTag: "C" },
        { optionText: "inv()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },

    // Additional 10 questions for a total of 20
    {
      questionText: "What does np.ones((2,3)) return?",
      options: [
        { optionText: "2x3 matrix filled with 1s", optionTag: "A" },
        { optionText: "3x2 matrix filled with 0s", optionTag: "B" },
        { optionText: "2x3 identity matrix", optionTag: "C" },
        { optionText: "Error", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which function joins matrices horizontally?",
      options: [
        { optionText: "np.hstack()", optionTag: "A" },
        { optionText: "np.vstack()", optionTag: "B" },
        { optionText: "np.stack()", optionTag: "C" },
        { optionText: "np.concat()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the output of np.array([[1,2],[3,4]]).shape?",
      options: [
        { optionText: "(2, 2)", optionTag: "A" },
        { optionText: "[2, 2]", optionTag: "B" },
        { optionText: "4", optionTag: "C" },
        { optionText: "2", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How do you reshape a 1D array of 6 elements into 2 rows and 3 columns?",
      options: [
        { optionText: "arr.reshape(2, 3)", optionTag: "A" },
        { optionText: "arr.resize(2, 3)", optionTag: "B" },
        { optionText: "arr.split(2, 3)", optionTag: "C" },
        { optionText: "arr.swap(2, 3)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How to access the last row of a matrix `mat`?",
      options: [
        { optionText: "mat[-1]", optionTag: "A" },
        { optionText: "mat[mat.length]", optionTag: "B" },
        { optionText: "mat[last]", optionTag: "C" },
        { optionText: "mat[0][0]", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which function vertically stacks arrays?",
      options: [
        { optionText: "np.vstack()", optionTag: "A" },
        { optionText: "np.stack()", optionTag: "B" },
        { optionText: "np.hstack()", optionTag: "C" },
        { optionText: "np.append()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which NumPy function returns the max value in a matrix?",
      options: [
        { optionText: "np.max()", optionTag: "A" },
        { optionText: "np.maximum()", optionTag: "B" },
        { optionText: "np.high()", optionTag: "C" },
        { optionText: "np.top()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How can you create a matrix filled with random values?",
      options: [
        { optionText: "np.random.rand()", optionTag: "A" },
        { optionText: "np.rand()", optionTag: "B" },
        { optionText: "np.matrix.random()", optionTag: "C" },
        { optionText: "random.array()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How do you access the number of rows in a NumPy 2D array `mat`?",
      options: [
        { optionText: "mat.shape[0]", optionTag: "A" },
        { optionText: "mat.size", optionTag: "B" },
        { optionText: "mat.rows()", optionTag: "C" },
        { optionText: "len(mat[0])", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which method flattens a matrix into a 1D array?",
      options: [
        { optionText: "mat.flatten()", optionTag: "A" },
        { optionText: "mat.reshape(1)", optionTag: "B" },
        { optionText: "mat.squeeze()", optionTag: "C" },
        { optionText: "mat.unroll()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    }
  ]
};

export default quizData;