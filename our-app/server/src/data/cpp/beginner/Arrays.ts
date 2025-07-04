import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "C++ Arrays - Beginner Quiz",
  quizLevel: "beginner",
  lang: "cpp",
  description: "This quiz tests your basic understanding of arrays in C++.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Arrays"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the index of the first element in a C++ array?",
      options: [
        { optionText: "0", optionTag: "A" },
        { optionText: "1", optionTag: "B" },
        { optionText: "-1", optionTag: "C" },
        { optionText: "Depends on type", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which syntax correctly declares an integer array in C++?",
      options: [
        { optionText: "int arr[10];", optionTag: "A" },
        { optionText: "arr int[10];", optionTag: "B" },
        { optionText: "int[] arr = new int[10];", optionTag: "C" },
        { optionText: "array arr[10];", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How can you access the third element of array `arr`?",
      options: [
        { optionText: "arr[2]", optionTag: "A" },
        { optionText: "arr(3)", optionTag: "B" },
        { optionText: "arr[3]", optionTag: "C" },
        { optionText: "*arr + 2", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What will be the default value in an uninitialized int array in C++?",
      options: [
        { optionText: "Garbage value", optionTag: "A" },
        { optionText: "0", optionTag: "B" },
        { optionText: "NULL", optionTag: "C" },
        { optionText: "Undefined", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following is used to get the size of an array in C++?",
      options: [
        { optionText: "sizeof(arr)/sizeof(arr[0])", optionTag: "A" },
        { optionText: "arr.length()", optionTag: "B" },
        { optionText: "arr.size()", optionTag: "C" },
        { optionText: "length(arr)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What will `sizeof(arr)` return for int arr[5]?",
      options: [
        { optionText: "20 (on most systems)", optionTag: "A" },
        { optionText: "5", optionTag: "B" },
        { optionText: "10", optionTag: "C" },
        { optionText: "4", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which loop is most commonly used to traverse arrays in C++?",
      options: [
        { optionText: "for loop", optionTag: "A" },
        { optionText: "while loop", optionTag: "B" },
        { optionText: "do-while loop", optionTag: "C" },
        { optionText: "foreach loop", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What will `arr[5]` return if arr has only 5 elements?",
      options: [
        { optionText: "Undefined behavior", optionTag: "A" },
        { optionText: "0", optionTag: "B" },
        { optionText: "Runtime error", optionTag: "C" },
        { optionText: "Last element", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How do you initialize all elements of array to 0 in C++?",
      options: [
        { optionText: "int arr[5] = {0};", optionTag: "A" },
        { optionText: "int arr[5] = 0;", optionTag: "B" },
        { optionText: "arr[5] = {0};", optionTag: "C" },
        { optionText: "arr = {0};", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which header file is needed for using std::array?",
      options: [
        { optionText: "<array>", optionTag: "A" },
        { optionText: "<vector>", optionTag: "B" },
        { optionText: "<iostream>", optionTag: "C" },
        { optionText: "<list>", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the output of sizeof(char arr[10])?",
      options: [
        { optionText: "10", optionTag: "A" },
        { optionText: "40", optionTag: "B" },
        { optionText: "1", optionTag: "C" },
        { optionText: "Depends on compiler", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Can array size be changed after declaration in C++?",
      options: [
        { optionText: "No", optionTag: "A" },
        { optionText: "Yes", optionTag: "B" },
        { optionText: "Only for dynamic arrays", optionTag: "C" },
        { optionText: "Depends on OS", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which data structure is most similar to an array?",
      options: [
        { optionText: "List", optionTag: "A" },
        { optionText: "Stack", optionTag: "B" },
        { optionText: "Queue", optionTag: "C" },
        { optionText: "Vector", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which of these is a 2D array declaration?",
      options: [
        { optionText: "int arr[3][3];", optionTag: "A" },
        { optionText: "int[3,3] arr;", optionTag: "B" },
        { optionText: "array arr[3,3];", optionTag: "C" },
        { optionText: "int arr = [3][3];", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which keyword is used to define arrays?",
      options: [
        { optionText: "int", optionTag: "A" },
        { optionText: "array", optionTag: "B" },
        { optionText: "define", optionTag: "C" },
        { optionText: "arr", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which library function can copy array contents?",
      options: [
        { optionText: "std::copy()", optionTag: "A" },
        { optionText: "memcpy()", optionTag: "B" },
        { optionText: "copy_arr()", optionTag: "C" },
        { optionText: "Both A and B", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Is it valid: int arr[] = {1,2,3}; in C++?",
      options: [
        { optionText: "Yes", optionTag: "A" },
        { optionText: "No", optionTag: "B" },
        { optionText: "Only in C", optionTag: "C" },
        { optionText: "Only in classes", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What happens if you access arr[-1]?",
      options: [
        { optionText: "Undefined behavior", optionTag: "A" },
        { optionText: "Returns first element", optionTag: "B" },
        { optionText: "Compiler error", optionTag: "C" },
        { optionText: "0", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following can store different data types?",
      options: [
        { optionText: "std::variant", optionTag: "A" },
        { optionText: "int[]", optionTag: "B" },
        { optionText: "float[]", optionTag: "C" },
        { optionText: "char[]", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    }
  ]
};

export default quizData;