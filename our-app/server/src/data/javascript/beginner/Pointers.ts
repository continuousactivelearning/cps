import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript Pointers - Beginner Quiz",
    quizLevel: "beginner",
    lang: "javascript",
    description: "This quiz tests your basic understanding of references (simulated pointers) in JavaScript.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "Pointers"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "Does JavaScript have traditional pointers like C or C++?",
            options: [
                { optionText: "No, it uses references instead", optionTag: "A" },
                { optionText: "Yes, using the & and * operators", optionTag: "B" },
                { optionText: "Only for arrays", optionTag: "C" },
                { optionText: "Yes, through memory management libraries", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens when you assign an object to another variable?",
            options: [
                { optionText: "A reference is copied", optionTag: "A" },
                { optionText: "A deep copy is made", optionTag: "B" },
                { optionText: "A pointer address is printed", optionTag: "C" },
                { optionText: "A null reference is created", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does this code print?\n```js\nlet a = {x: 1};\nlet b = a;\nb.x = 2;\nconsole.log(a.x);\n```",
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
            questionText: "How can you create a deep copy of an object in JavaScript?",
            options: [
                { optionText: "Using JSON.parse(JSON.stringify(obj))", optionTag: "A" },
                { optionText: "Using let newObj = obj;", optionTag: "B" },
                { optionText: "Using obj.clone()", optionTag: "C" },
                { optionText: "Using Object.pointer(obj)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which data types in JS are passed by reference?",
            options: [
                { optionText: "Objects and arrays", optionTag: "A" },
                { optionText: "Numbers", optionTag: "B" },
                { optionText: "Booleans", optionTag: "C" },
                { optionText: "Strings", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which data types in JS are passed by value?",
            options: [
                { optionText: "Primitives like number, boolean", optionTag: "A" },
                { optionText: "Objects", optionTag: "B" },
                { optionText: "Arrays", optionTag: "C" },
                { optionText: "Functions", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does this code do?\n```js\nlet arr1 = [1, 2];\nlet arr2 = arr1;\narr2.push(3);\n```",
            options: [
                { optionText: "Modifies both arr1 and arr2", optionTag: "A" },
                { optionText: "Creates a new array", optionTag: "B" },
                { optionText: "Throws error", optionTag: "C" },
                { optionText: "Leaves arr1 unchanged", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which is true about references in JavaScript?",
            options: [
                { optionText: "They are automatically managed", optionTag: "A" },
                { optionText: "They must be explicitly freed", optionTag: "B" },
                { optionText: "They can point to memory addresses", optionTag: "C" },
                { optionText: "They must use the & operator", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following creates a shallow copy of an object?",
            options: [
                { optionText: "Object.assign({}, obj)", optionTag: "A" },
                { optionText: "obj.copy()", optionTag: "B" },
                { optionText: "JSON.copy(obj)", optionTag: "C" },
                { optionText: "clone(obj)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which operation changes the original object?",
            options: [
                { optionText: "Modifying through a reference", optionTag: "A" },
                { optionText: "Copying into a new variable", optionTag: "B" },
                { optionText: "Using Object.create()", optionTag: "C" },
                { optionText: "Freezing the object", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Are functions passed by reference in JS?",
            options: [
                { optionText: "Yes, like objects", optionTag: "A" },
                { optionText: "No, functions are passed by value", optionTag: "B" },
                { optionText: "Only arrow functions", optionTag: "C" },
                { optionText: "Only in strict mode", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the output?\n```js\nlet a = [1, 2];\nlet b = [...a];\nb.push(3);\nconsole.log(a);\n```",
            options: [
                { optionText: "[1, 2]", optionTag: "A" },
                { optionText: "[1, 2, 3]", optionTag: "B" },
                { optionText: "[]", optionTag: "C" },
                { optionText: "undefined", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these creates a deep clone?",
            options: [
                { optionText: "structuredClone(obj)", optionTag: "A" },
                { optionText: "Object.assign({}, obj)", optionTag: "B" },
                { optionText: "obj.copy()", optionTag: "C" },
                { optionText: "[...obj]", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens when you set a variable to null?",
            options: [
                { optionText: "The reference is removed", optionTag: "A" },
                { optionText: "The memory is freed instantly", optionTag: "B" },
                { optionText: "The value is changed", optionTag: "C" },
                { optionText: "It points to zero", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Can two different variables refer to the same object?",
            options: [
                { optionText: "Yes", optionTag: "A" },
                { optionText: "No", optionTag: "B" },
                { optionText: "Only in C", optionTag: "C" },
                { optionText: "Only with deep copy", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is garbage collection in JS?",
            options: [
                { optionText: "Automatic memory cleanup", optionTag: "A" },
                { optionText: "Manual memory release", optionTag: "B" },
                { optionText: "Error handling mechanism", optionTag: "C" },
                { optionText: "Syntax checker", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which method prevents object mutation?",
            options: [
                { optionText: "Object.freeze()", optionTag: "A" },
                { optionText: "Object.copy()", optionTag: "B" },
                { optionText: "JSON.stringify()", optionTag: "C" },
                { optionText: "Object.hide()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is 'undefined' in JS referencing?",
            options: [
                { optionText: "A variable declared but not initialized", optionTag: "A" },
                { optionText: "A pointer to null", optionTag: "B" },
                { optionText: "A memory address", optionTag: "C" },
                { optionText: "A global pointer", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Is memory directly accessible in JS?",
            options: [
                { optionText: "No", optionTag: "A" },
                { optionText: "Yes, via & and *", optionTag: "B" },
                { optionText: "Only using WebAssembly", optionTag: "C" },
                { optionText: "Only for strings", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
