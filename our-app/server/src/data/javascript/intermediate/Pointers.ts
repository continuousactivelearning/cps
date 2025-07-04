import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript Pointers - Intermediate Quiz",
    quizLevel: "intermediate",
    lang: "javascript",
    description: "This quiz tests your intermediate understanding of pointer-like behavior in JavaScript, including references, object manipulation, and memory handling concepts.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "Pointers"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "Which JavaScript data types are passed by reference?",
            options: [
                { optionText: "Objects and Arrays", optionTag: "A" },
                { optionText: "Strings and Numbers", optionTag: "B" },
                { optionText: "Booleans and Null", optionTag: "C" },
                { optionText: "All primitive types", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens when an object is assigned to another variable?",
            options: [
                { optionText: "A new copy is created", optionTag: "A" },
                { optionText: "Only a reference is copied", optionTag: "B" },
                { optionText: "Both values are stored separately", optionTag: "C" },
                { optionText: "Values are deep cloned", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "Which of these allows copying by value in JavaScript?",
            options: [
                { optionText: "Spread syntax with primitive", optionTag: "A" },
                { optionText: "Direct assignment of objects", optionTag: "B" },
                { optionText: "Assignment of arrays", optionTag: "C" },
                { optionText: "Passing an object into a function", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the result of modifying an object through another variable that references it?",
            options: [
                { optionText: "Original object is changed", optionTag: "A" },
                { optionText: "Original object is deleted", optionTag: "B" },
                { optionText: "New object is created", optionTag: "C" },
                { optionText: "Error is thrown", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which statement is true about arrays and objects in JavaScript?",
            options: [
                { optionText: "They are reference types", optionTag: "A" },
                { optionText: "They are value types", optionTag: "B" },
                { optionText: "They are immutable", optionTag: "C" },
                { optionText: "They are passed by deep copy", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which method can be used to create a shallow copy of an object?",
            options: [
                { optionText: "Object.assign({}, obj)", optionTag: "A" },
                { optionText: "obj.slice()", optionTag: "B" },
                { optionText: "obj.map()", optionTag: "C" },
                { optionText: "JSON.stringify(obj)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does the spread operator (...) do when used on an array?",
            options: [
                { optionText: "Creates a shallow copy", optionTag: "A" },
                { optionText: "Creates a deep copy", optionTag: "B" },
                { optionText: "References the original array", optionTag: "C" },
                { optionText: "Makes the array immutable", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following causes side-effects due to reference passing?",
            options: [
                { optionText: "Mutating a function parameter that is an object", optionTag: "A" },
                { optionText: "Assigning a number to a variable", optionTag: "B" },
                { optionText: "Comparing two strings", optionTag: "C" },
                { optionText: "Reassigning a constant", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does `===` check when used on two object variables?",
            options: [
                { optionText: "Reference equality", optionTag: "A" },
                { optionText: "Deep value equality", optionTag: "B" },
                { optionText: "Content match", optionTag: "C" },
                { optionText: "Type equality only", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the best method to create a deep clone of a JSON-safe object?",
            options: [
                { optionText: "JSON.parse(JSON.stringify(obj))", optionTag: "A" },
                { optionText: "Object.assign({}, obj)", optionTag: "B" },
                { optionText: "[...obj]", optionTag: "C" },
                { optionText: "obj.copy()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Why doesn't JavaScript have true pointers like C or C++?",
            options: [
                { optionText: "JavaScript is a high-level memory-safe language", optionTag: "A" },
                { optionText: "It uses linked lists", optionTag: "B" },
                { optionText: "It doesn’t allow object manipulation", optionTag: "C" },
                { optionText: "Variables are not stored in memory", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens when you reassign an object reference in a function?",
            options: [
                { optionText: "Original reference remains unchanged", optionTag: "A" },
                { optionText: "Original object is deleted", optionTag: "B" },
                { optionText: "Original reference also changes", optionTag: "C" },
                { optionText: "It causes a runtime error", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How do you ensure an object remains unchanged after being passed to a function?",
            options: [
                { optionText: "Create a shallow copy and pass it", optionTag: "A" },
                { optionText: "Pass it directly", optionTag: "B" },
                { optionText: "Use 'const' while passing", optionTag: "C" },
                { optionText: "Wrap it in an array", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which keyword ensures that a variable reference cannot be reassigned?",
            options: [
                { optionText: "const", optionTag: "A" },
                { optionText: "let", optionTag: "B" },
                { optionText: "var", optionTag: "C" },
                { optionText: "static", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is true about `const obj = {}`?",
            options: [
                { optionText: "You can modify properties of `obj`", optionTag: "A" },
                { optionText: "You cannot modify `obj` at all", optionTag: "B" },
                { optionText: "You can reassign `obj`", optionTag: "C" },
                { optionText: "It throws error on property access", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which is an example of mutating an object?",
            options: [
                { optionText: "obj.name = 'new'", optionTag: "A" },
                { optionText: "obj = {}", optionTag: "B" },
                { optionText: "let obj2 = {...obj}", optionTag: "C" },
                { optionText: "Object.freeze(obj)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How do you prevent mutation of an object?",
            options: [
                { optionText: "Using Object.freeze()", optionTag: "A" },
                { optionText: "Using var", optionTag: "B" },
                { optionText: "Using arrow functions", optionTag: "C" },
                { optionText: "Using delete operator", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these indicates an alias of an object?",
            options: [
                { optionText: "Two variables referencing same object", optionTag: "A" },
                { optionText: "Two objects with same content", optionTag: "B" },
                { optionText: "String literal comparisons", optionTag: "C" },
                { optionText: "Using rest parameters", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which technique can simulate pointer behavior in JavaScript?",
            options: [
                { optionText: "Using objects to hold values", optionTag: "A" },
                { optionText: "Using closures", optionTag: "B" },
                { optionText: "Using arrays only", optionTag: "C" },
                { optionText: "Using promises", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is a major risk of reference manipulation?",
            options: [
                { optionText: "Unintended side-effects", optionTag: "A" },
                { optionText: "Memory leaks always", optionTag: "B" },
                { optionText: "Loss of stack trace", optionTag: "C" },
                { optionText: "Automatic garbage collection failure", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
