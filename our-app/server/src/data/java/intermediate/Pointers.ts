import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "Java Pointers - Intermediate Quiz",
    quizLevel: "intermediate",
    lang: "java",
    description: "This quiz tests your understanding of pointer-like behavior and reference concepts in Java.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "Pointers"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What does Java use in place of traditional pointers?",
            options: [
                { optionText: "References", optionTag: "A" },
                { optionText: "Direct Memory Addresses", optionTag: "B" },
                { optionText: "Pointers", optionTag: "C" },
                { optionText: "Stacks", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which statement is true about object references in Java?",
            options: [
                { optionText: "They store the memory address of the object", optionTag: "A" },
                { optionText: "They store object values directly", optionTag: "B" },
                { optionText: "They are primitive types", optionTag: "C" },
                { optionText: "They are passed by copy", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In Java, if an object reference is passed to a method:",
            options: [
                { optionText: "The original object can be modified", optionTag: "A" },
                { optionText: "A copy of the object is passed", optionTag: "B" },
                { optionText: "The reference cannot affect the original object", optionTag: "C" },
                { optionText: "Java passes pointers by default", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these is not a type of reference in Java?",
            options: [
                { optionText: "Strong Reference", optionTag: "A" },
                { optionText: "Weak Reference", optionTag: "B" },
                { optionText: "Double Reference", optionTag: "C" },
                { optionText: "Phantom Reference", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "What happens if a Java reference points to null?",
            options: [
                { optionText: "It causes a compilation error", optionTag: "A" },
                { optionText: "It refers to an empty object", optionTag: "B" },
                { optionText: "It throws NullPointerException on use", optionTag: "C" },
                { optionText: "It can be dereferenced safely", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "Which class in Java provides weak references?",
            options: [
                { optionText: "java.lang.Reference", optionTag: "A" },
                { optionText: "java.lang.WeakReference", optionTag: "B" },
                { optionText: "java.util.Memory", optionTag: "C" },
                { optionText: "java.util.Pointer", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "How can circular references be avoided in Java?",
            options: [
                { optionText: "By avoiding garbage collection", optionTag: "A" },
                { optionText: "Using null references", optionTag: "B" },
                { optionText: "By using weak references", optionTag: "C" },
                { optionText: "By increasing heap size", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "Java references point to:",
            options: [
                { optionText: "Primitive types", optionTag: "A" },
                { optionText: "Static variables", optionTag: "B" },
                { optionText: "Objects in heap", optionTag: "C" },
                { optionText: "Class-level methods", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "Which keyword is used for creating objects and references in Java?",
            options: [
                { optionText: "make", optionTag: "A" },
                { optionText: "new", optionTag: "B" },
                { optionText: "create", optionTag: "C" },
                { optionText: "reference", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "Can a reference variable refer to multiple objects during its lifetime?",
            options: [
                { optionText: "Yes", optionTag: "A" },
                { optionText: "No", optionTag: "B" },
                { optionText: "Only if static", optionTag: "C" },
                { optionText: "Only for arrays", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does 'null' mean in Java?",
            options: [
                { optionText: "Empty array", optionTag: "A" },
                { optionText: "Reference to no object", optionTag: "B" },
                { optionText: "Unused variable", optionTag: "C" },
                { optionText: "Zero memory location", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "Which of the following is true about reference equality?",
            options: [
                { optionText: "It checks if two objects have same content", optionTag: "A" },
                { optionText: "It checks if references point to the same object", optionTag: "B" },
                { optionText: "It compares hash codes", optionTag: "C" },
                { optionText: "It’s same as .equals()", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "How do you compare contents of two objects in Java?",
            options: [
                { optionText: "Using ==", optionTag: "A" },
                { optionText: "Using hashCode()", optionTag: "B" },
                { optionText: "Using equals()", optionTag: "C" },
                { optionText: "Using toString()", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "Which operation reassigns a reference in Java?",
            options: [
                { optionText: "obj = null;", optionTag: "A" },
                { optionText: "delete obj;", optionTag: "B" },
                { optionText: "free(obj);", optionTag: "C" },
                { optionText: "obj.drop();", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "When is an object eligible for garbage collection?",
            options: [
                { optionText: "When it has zero value", optionTag: "A" },
                { optionText: "When it’s not reachable by any reference", optionTag: "B" },
                { optionText: "When explicitly freed", optionTag: "C" },
                { optionText: "When stored in static memory", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "Which memory region stores reference variables in Java?",
            options: [
                { optionText: "Heap", optionTag: "A" },
                { optionText: "Stack", optionTag: "B" },
                { optionText: "PermGen", optionTag: "C" },
                { optionText: "Metaspace", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "What happens when two references point to the same object?",
            options: [
                { optionText: "Changes via one reflect on the other", optionTag: "A" },
                { optionText: "Both become independent", optionTag: "B" },
                { optionText: "Only the first can modify it", optionTag: "C" },
                { optionText: "Compilation error", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these is false about Java references?",
            options: [
                { optionText: "They can be null", optionTag: "A" },
                { optionText: "They can reference primitive types", optionTag: "B" },
                { optionText: "They can reference objects in heap", optionTag: "C" },
                { optionText: "They support polymorphism", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "Can Java references be cast to different types?",
            options: [
                { optionText: "Yes, using explicit casting", optionTag: "A" },
                { optionText: "No, casting is illegal", optionTag: "B" },
                { optionText: "Only for integers", optionTag: "C" },
                { optionText: "Only for strings", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which utility can monitor references in Java?",
            options: [
                { optionText: "Garbage Collector", optionTag: "A" },
                { optionText: "ReferenceQueue", optionTag: "B" },
                { optionText: "System Monitor", optionTag: "C" },
                { optionText: "PointerManager", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        }
    ]
};

export default quizData;