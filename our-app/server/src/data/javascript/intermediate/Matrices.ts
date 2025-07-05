import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "JavaScript Matrices - Intermediate Quiz",
  quizLevel: "intermediate",
  lang: "javascript",
  description: "This quiz tests your intermediate understanding of matrices in JavaScript, including manipulation and operations.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Matrices"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "How do you declare a 2x2 matrix in JavaScript?",
      options: [
        { optionText: "let matrix = [[1,2],[3,4]];", optionTag: "A" },
        { optionText: "let matrix = {1,2,3,4};", optionTag: "B" },
        { optionText: "let matrix = (1,2,3,4);", optionTag: "C" },
        { optionText: "let matrix = [[1,2,3,4]];", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which method is used to iterate over each row in a 2D matrix?",
      options: [
        { optionText: "forEach()", optionTag: "A" },
        { optionText: "map()", optionTag: "B" },
        { optionText: "for...of", optionTag: "C" },
        { optionText: "All of the above", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "How can you access the second element of the third row in a matrix?",
      options: [
        { optionText: "matrix[2][1]", optionTag: "A" },
        { optionText: "matrix[1][2]", optionTag: "B" },
        { optionText: "matrix[3][2]", optionTag: "C" },
        { optionText: "matrix[1][3]", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the result of matrix.length if matrix = [[1],[2],[3]]?",
      options: [
        { optionText: "3", optionTag: "A" },
        { optionText: "1", optionTag: "B" },
        { optionText: "0", optionTag: "C" },
        { optionText: "undefined", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which operation is used to reverse each row of a matrix?",
      options: [
        { optionText: "row.reverse()", optionTag: "A" },
        { optionText: "row.sort()", optionTag: "B" },
        { optionText: "reverse(row)", optionTag: "C" },
        { optionText: "matrix.reverse(row)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which operation results in matrix transposition?",
      options: [
        { optionText: "matrix[i][j] = matrix[j][i]", optionTag: "A" },
        { optionText: "matrix[j][i] = matrix[i][j]", optionTag: "B" },
        { optionText: "matrix[i][j] = matrix[i][j]", optionTag: "C" },
        { optionText: "matrix[j][j] = matrix[i][i]", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the default value of an uninitialized matrix cell?",
      options: [
        { optionText: "undefined", optionTag: "A" },
        { optionText: "0", optionTag: "B" },
        { optionText: "null", optionTag: "C" },
        { optionText: "false", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which method flattens a 2D matrix to a 1D array?",
      options: [
        { optionText: "flat()", optionTag: "A" },
        { optionText: "toString()", optionTag: "B" },
        { optionText: "join()", optionTag: "C" },
        { optionText: "flatten()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How to create an empty 3x3 matrix?",
      options: [
        { optionText: "Array.from({length: 3}, () => Array(3).fill(0))", optionTag: "A" },
        { optionText: "new Array(3).fill(0)", optionTag: "B" },
        { optionText: "Array(3).map(() => 0)", optionTag: "C" },
        { optionText: "matrix(3, 3)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which algorithm is used to rotate a square matrix 90 degrees clockwise?",
      options: [
        { optionText: "Transpose and then reverse rows", optionTag: "A" },
        { optionText: "Reverse and then transpose", optionTag: "B" },
        { optionText: "Sort rows", optionTag: "C" },
        { optionText: "Flip vertically", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },

    // Additional 10 questions
    {
      questionText: "What is matrix[1].length if matrix = [[1,2,3],[4,5],[6]]?",
      options: [
        { optionText: "2", optionTag: "A" },
        { optionText: "3", optionTag: "B" },
        { optionText: "1", optionTag: "C" },
        { optionText: "undefined", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the result of multiplying two matrices A and B of size 2x3 and 3x2?",
      options: [
        { optionText: "2x2", optionTag: "A" },
        { optionText: "3x3", optionTag: "B" },
        { optionText: "3x2", optionTag: "C" },
        { optionText: "Invalid multiplication", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What does the expression matrix[0][0] access?",
      options: [
        { optionText: "First element of the first row", optionTag: "A" },
        { optionText: "Last element", optionTag: "B" },
        { optionText: "Second row, first element", optionTag: "C" },
        { optionText: "Undefined element", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which method checks if all elements in a row are even?",
      options: [
        { optionText: "every(x => x % 2 === 0)", optionTag: "A" },
        { optionText: "filter(x => x % 2 === 0)", optionTag: "B" },
        { optionText: "map(x => x % 2 === 0)", optionTag: "C" },
        { optionText: "some(x => x % 2 === 0)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which matrix has all zero elements except on the diagonal?",
      options: [
        { optionText: "Identity Matrix", optionTag: "A" },
        { optionText: "Zero Matrix", optionTag: "B" },
        { optionText: "Diagonal Matrix", optionTag: "C" },
        { optionText: "Triangular Matrix", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "How do you find the sum of all matrix elements?",
      options: [
        { optionText: "Use nested reduce", optionTag: "A" },
        { optionText: "Use map only", optionTag: "B" },
        { optionText: "Use join and split", optionTag: "C" },
        { optionText: "Use push method", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which method is used to check dimensions of a matrix?",
      options: [
        { optionText: "matrix.length and matrix[0].length", optionTag: "A" },
        { optionText: "matrix.size", optionTag: "B" },
        { optionText: "matrix.rows", optionTag: "C" },
        { optionText: "matrix.height", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How to reverse the order of rows in a matrix?",
      options: [
        { optionText: "matrix.reverse()", optionTag: "A" },
        { optionText: "matrix.flip()", optionTag: "B" },
        { optionText: "matrix.sort()", optionTag: "C" },
        { optionText: "matrix.push()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which matrix has only one row?",
      options: [
        { optionText: "Row matrix", optionTag: "A" },
        { optionText: "Column matrix", optionTag: "B" },
        { optionText: "Square matrix", optionTag: "C" },
        { optionText: "Null matrix", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which matrix has only one column?",
      options: [
        { optionText: "Column matrix", optionTag: "A" },
        { optionText: "Row matrix", optionTag: "B" },
        { optionText: "Zero matrix", optionTag: "C" },
        { optionText: "Diagonal matrix", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    }
  ]
};

export default quizData;