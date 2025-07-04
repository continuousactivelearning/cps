import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript Pointers - Advanced Quiz",
    quizLevel: "advanced",
    lang: "javascript",
    description: "This quiz tests your advanced knowledge of pointers and references in JavaScript, including how memory references, closures, and object manipulation work.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "Pointers"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "In JavaScript, what do variables of non-primitive types actually store?",
            options: [
                { optionText: "References (or pointers) to objects in memory", optionTag: "A" },
                { optionText: "Copies of the objects", optionTag: "B" },
                { optionText: "Memory addresses directly exposed", optionTag: "C" },
                { optionText: "Primitive values", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following best describes how JavaScript handles function parameters for objects?",
            options: [
                { optionText: "Passed by reference (reference to the object is passed)", optionTag: "A" },
                { optionText: "Passed by value (deep copy)", optionTag: "B" },
                { optionText: "Passed by value (primitive copy)", optionTag: "C" },
                { optionText: "Cannot pass objects as parameters", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is a closure in JavaScript with respect to pointers/references?",
            options: [
                { optionText: "A function retaining access to variables from its lexical scope", optionTag: "A" },
                { optionText: "A way to directly access memory addresses", optionTag: "B" },
                { optionText: "A garbage collection mechanism", optionTag: "C" },
                { optionText: "A method to deep clone objects", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How does JavaScript handle assignment of objects to variables?",
            options: [
                { optionText: "Copies the reference, not the object itself", optionTag: "A" },
                { optionText: "Copies the entire object", optionTag: "B" },
                { optionText: "Copies a stringified version", optionTag: "C" },
                { optionText: "Copies only the keys", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens when you modify an object via one reference in JavaScript?",
            options: [
                { optionText: "All references to that object see the change", optionTag: "A" },
                { optionText: "Only that reference is changed", optionTag: "B" },
                { optionText: "The original object is copied and changed", optionTag: "C" },
                { optionText: "Modification is disallowed", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which JavaScript type is immutable and thus never passed by reference?",
            options: [
                { optionText: "Primitive types like number, string, boolean", optionTag: "A" },
                { optionText: "Objects", optionTag: "B" },
                { optionText: "Arrays", optionTag: "C" },
                { optionText: "Functions", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How can you create a shallow copy of an object in JavaScript?",
            options: [
                { optionText: "Using Object.assign({}, obj)", optionTag: "A" },
                { optionText: "Using JSON.stringify()", optionTag: "B" },
                { optionText: "Using a pointer copy", optionTag: "C" },
                { optionText: "Using a closure", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the difference between shallow and deep copy with respect to references?",
            options: [
                { optionText: "Shallow copy copies top-level references, deep copy duplicates all nested objects", optionTag: "A" },
                { optionText: "Shallow copy duplicates objects, deep copy duplicates references", optionTag: "B" },
                { optionText: "Shallow copy only copies primitives", optionTag: "C" },
                { optionText: "No difference", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What will the following code output?\n\nlet a = {x: 1};\nlet b = a;\nb.x = 2;\nconsole.log(a.x);",
            options: [
                { optionText: "2", optionTag: "A" },
                { optionText: "1", optionTag: "B" },
                { optionText: "undefined", optionTag: "C" },
                { optionText: "Error", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following can break references in JavaScript, creating independent objects?",
            options: [
                { optionText: "Deep cloning", optionTag: "A" },
                { optionText: "Variable assignment", optionTag: "B" },
                { optionText: "Reference assignment", optionTag: "C" },
                { optionText: "Garbage collection", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How do JavaScript arrays store their elements?",
            options: [
                { optionText: "As references to objects or primitives", optionTag: "A" },
                { optionText: "Only as primitive copies", optionTag: "B" },
                { optionText: "Only as contiguous memory blocks", optionTag: "C" },
                { optionText: "They do not store elements", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the role of garbage collection in relation to pointers/references in JavaScript?",
            options: [
                { optionText: "Automatically frees memory no longer referenced", optionTag: "A" },
                { optionText: "Prevents all memory leaks", optionTag: "B" },
                { optionText: "Copies objects between variables", optionTag: "C" },
                { optionText: "Tracks function calls", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which keyword is used to create a new object reference in JavaScript?",
            options: [
                { optionText: "let or const with assignment", optionTag: "A" },
                { optionText: "new", optionTag: "B" },
                { optionText: "var", optionTag: "C" },
                { optionText: "ref", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following can lead to unintended shared references between objects?",
            options: [
                { optionText: "Assigning one object to another without cloning", optionTag: "A" },
                { optionText: "Using spread syntax", optionTag: "B" },
                { optionText: "Creating a new object", optionTag: "C" },
                { optionText: "Deleting object properties", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How do closures relate to references in JavaScript?",
            options: [
                { optionText: "They capture and keep references to variables in lexical scope", optionTag: "A" },
                { optionText: "They copy all variables by value", optionTag: "B" },
                { optionText: "They free memory immediately", optionTag: "C" },
                { optionText: "They are unrelated concepts", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which method creates a shallow copy of an array in JavaScript?",
            options: [
                { optionText: "slice()", optionTag: "A" },
                { optionText: "push()", optionTag: "B" },
                { optionText: "pop()", optionTag: "C" },
                { optionText: "concat()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What will happen if you modify a nested object inside a shallow-copied object?",
            options: [
                { optionText: "Both objects reflect the change", optionTag: "A" },
                { optionText: "Only the copied object changes", optionTag: "B" },
                { optionText: "Only the original object changes", optionTag: "C" },
                { optionText: "No changes happen", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the difference between '==' and '===' when comparing objects in JavaScript?",
            options: [
                { optionText: "Both compare references, no difference for objects", optionTag: "A" },
                { optionText: "'==' compares values, '===' compares references", optionTag: "B" },
                { optionText: "'==' compares references, '===' compares values", optionTag: "C" },
                { optionText: "They cannot be used for objects", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How do you avoid accidental mutation of objects passed as function parameters?",
            options: [
                { optionText: "Clone objects before modifying", optionTag: "A" },
                { optionText: "Pass primitives only", optionTag: "B" },
                { optionText: "Use global variables", optionTag: "C" },
                { optionText: "Avoid functions", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the typical behavior of 'this' keyword in JavaScript with respect to object references?",
            options: [
                { optionText: "'this' refers to the object context where the function is called", optionTag: "A" },
                { optionText: "'this' always refers to global object", optionTag: "B" },
                { optionText: "'this' is undefined in all functions", optionTag: "C" },
                { optionText: "'this' copies object values", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
