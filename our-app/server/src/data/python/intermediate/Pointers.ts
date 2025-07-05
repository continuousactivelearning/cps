import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python Pointers - Intermediate Quiz",
  quizLevel: "intermediate",
  lang: "python",
  description: "Test your understanding of pointer-like behavior in Python using references and memory concepts.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Pointers"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "In Python, what is the equivalent of a pointer in C/C++?",
      options: [
        { optionText: "Reference", optionTag: "A" },
        { optionText: "Integer", optionTag: "B" },
        { optionText: "List", optionTag: "C" },
        { optionText: "Address", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following is a mutable type in Python?",
      options: [
        { optionText: "Tuple", optionTag: "B" },
        { optionText: "String", optionTag: "C" },
        { optionText: "List", optionTag: "D" },
        { optionText: "Integer", optionTag: "A" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What happens when two variables refer to the same list?",
      options: [
        { optionText: "Both reference the same object", optionTag: "C" },
        { optionText: "Each has a copy", optionTag: "D" },
        { optionText: "One is a pointer", optionTag: "A" },
        { optionText: "They become immutable", optionTag: "B" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which function returns the memory address of an object?",
      options: [
        { optionText: "ref()", optionTag: "C" },
        { optionText: "id()", optionTag: "B" },
        { optionText: "address()", optionTag: "A" },
        { optionText: "mem()", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What does the 'is' operator check?",
      options: [
        { optionText: "Value", optionTag: "C" },
        { optionText: "Identity", optionTag: "A" },
        { optionText: "Type", optionTag: "D" },
        { optionText: "Existence", optionTag: "B" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the result of comparing two objects with `==` in Python?",
      options: [
        { optionText: "Object identity", optionTag: "B" },
        { optionText: "Memory address", optionTag: "D" },
        { optionText: "Value equality", optionTag: "A" },
        { optionText: "Hash value", optionTag: "C" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following will create a deep copy?",
      options: [
        { optionText: "copy.deepcopy()", optionTag: "D" },
        { optionText: "slice [:]", optionTag: "C" },
        { optionText: "assignment", optionTag: "B" },
        { optionText: "list()", optionTag: "A" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What is reference counting used for in Python?",
      options: [
        { optionText: "Garbage collection", optionTag: "C" },
        { optionText: "Caching", optionTag: "A" },
        { optionText: "Optimization", optionTag: "B" },
        { optionText: "Speed testing", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What module supports weak references?",
      options: [
        { optionText: "copy", optionTag: "B" },
        { optionText: "gc", optionTag: "C" },
        { optionText: "weakref", optionTag: "A" },
        { optionText: "mem", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What does `del` do in Python?",
      options: [
        { optionText: "Deletes memory location", optionTag: "D" },
        { optionText: "Removes reference", optionTag: "B" },
        { optionText: "Clears variable", optionTag: "C" },
        { optionText: "Resets pointer", optionTag: "A" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which data types are passed by reference in Python?",
      options: [
        { optionText: "Immutable types", optionTag: "D" },
        { optionText: "Functions", optionTag: "C" },
        { optionText: "Mutable types", optionTag: "B" },
        { optionText: "Constants", optionTag: "A" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What does the 'copy()' method of a list return?",
      options: [
        { optionText: "New reference", optionTag: "C" },
        { optionText: "Deep copy", optionTag: "A" },
        { optionText: "Shallow copy", optionTag: "D" },
        { optionText: "Pointer object", optionTag: "B" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "When does garbage collection occur?",
      options: [
        { optionText: "When all references are deleted", optionTag: "C" },
        { optionText: "When memory is low", optionTag: "A" },
        { optionText: "On exit()", optionTag: "B" },
        { optionText: "Every loop", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is the id() function output?",
      options: [
        { optionText: "Memory address", optionTag: "B" },
        { optionText: "Value", optionTag: "D" },
        { optionText: "Type", optionTag: "A" },
        { optionText: "Hash", optionTag: "C" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which of the following is false about references?",
      options: [
        { optionText: "You can have multiple variables point to same object", optionTag: "A" },
        { optionText: "Objects are copied on assignment", optionTag: "D" },
        { optionText: "Variables store references", optionTag: "B" },
        { optionText: "Reference affects mutability", optionTag: "C" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which of the following behaves like pointer dereference?",
      options: [
        { optionText: "Access via index", optionTag: "B" },
        { optionText: "Copying a list", optionTag: "A" },
        { optionText: "Calling id()", optionTag: "C" },
        { optionText: "None of the above", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "How do you avoid aliasing in Python lists?",
      options: [
        { optionText: "Use copy.deepcopy()", optionTag: "A" },
        { optionText: "Use id()", optionTag: "D" },
        { optionText: "Use slicing", optionTag: "C" },
        { optionText: "Use assignment", optionTag: "B" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which type is immutable?",
      options: [
        { optionText: "Tuple", optionTag: "C" },
        { optionText: "List", optionTag: "B" },
        { optionText: "Set", optionTag: "D" },
        { optionText: "Dictionary", optionTag: "A" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What happens if two variables reference same mutable object?",
      options: [
        { optionText: "Change in one reflects in the other", optionTag: "B" },
        { optionText: "Change is isolated", optionTag: "C" },
        { optionText: "Causes error", optionTag: "A" },
        { optionText: "Makes it constant", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is the default behavior of assignment in Python?",
      options: [
        { optionText: "Pass by reference", optionTag: "D" },
        { optionText: "Deep copy", optionTag: "A" },
        { optionText: "Pass by value", optionTag: "C" },
        { optionText: "Shallow copy", optionTag: "B" }
      ],
      correctOption: "D",
      score: 1
    }
  ]
};

export default quizData;