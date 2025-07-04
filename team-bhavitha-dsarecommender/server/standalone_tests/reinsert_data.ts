// reinsert_data.ts - FINAL CLEANED VERSION

import mongoose, { Schema, Document } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env

// --- Configuration ---
const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://akssrf2025:Aks1234@cluster0.oek3we1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const DATABASE_NAME = process.env.DATABASE_NAME || "LearnFlowDB";
const COLLECTION_NAME = "concepts"; // THIS IS THE COLLECTION NAME THE SERVER USES

// --- Mongoose Concept Model ---
interface IConcept extends Document {
    name: string;
    description: string;
    spotlight_fact: string;
    lecture: string;
    timestamp: Date;
    source: string;
}

const ConceptSchema: Schema = new Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    spotlight_fact: { type: String, required: true },
    lecture: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
    source: { type: String, default: "Initial Data Re-insertion" },
}, { collection: COLLECTION_NAME });

const Concept = mongoose.models.Concept || mongoose.model<IConcept>('Concept', ConceptSchema);

// --- Data to Re-insert ---
// This array contains ALL the unique concepts and their facts
// Total Concepts: 38 (4 new web dev + 34 original, excluding Efficiency Part 1/2)
const conceptsToReinsert = [
    // --- New Web Development Concepts (4 concepts) ---
    {
        name: "HTTP",
        description: "Hypertext Transfer Protocol is the foundation of data communication for the World Wide Web.",
        spotlight_fact: "HTTP is stateless, meaning each request from a client is independent of previous ones.",
        lecture: "Networking Basics"
    },
    {
        name: "REST APIs",
        description: "Representational State Transfer (REST) is an architectural style for designing networked applications.",
        spotlight_fact: "REST APIs commonly use standard HTTP methods (GET, POST, PUT, DELETE) for operations.",
        lecture: "Web Development Concepts"
    },
    {
        name: "Frontend Frameworks",
        description: "Libraries or tools that provide a foundation for building the user interface of web applications.",
        spotlight_fact: "Popular frontend frameworks include React, Angular, and Vue.js.",
        lecture: "Frontend Development"
    },
    {
        name: "Backend Frameworks",
        description: "Libraries or tools that simplify the development of server-side logic and database interactions for web applications.",
        spotlight_fact: "Node.js frameworks like Express.js are commonly used for building scalable APIs.",
        lecture: "Backend Development"
    },
    // --- Original Concepts (34 concepts - 'Efficiency Part 1/2' removed, 'Big-O Notation' kept) ---
    {
        name: "Computation",
        description: "Computation is the act of performing calculations or solving problems using a set of well-defined steps known as algorithms.",
        spotlight_fact: "The foundations of computation stem from mathematics and logic, particularly Turing Machines and Lambda Calculus.",
        lecture: "What is computation?"
    },
    {
        name: "Algorithms",
        description: "Algorithms are structured, step-by-step procedures designed to perform a task or solve a problem.",
        spotlight_fact: "Every software application, from web browsers to video games, relies on algorithms to function.",
        lecture: "What is computation?"
    },
    {
        name: "Problem Solving",
        description: "Problem solving involves analyzing a situation and creating an efficient algorithmic solution.",
        spotlight_fact: "Effective problem solving is the cornerstone of successful programming.",
        lecture: "What is computation?"
    },
    {
        name: "Conditionals",
        description: "Conditionals are statements that run different code blocks depending on whether a condition is true or false.",
        spotlight_fact: "Conditionals empower programs to make decisions dynamically.",
        lecture: "Branching and Iteration"
    },
    {
        name: "Loops",
        description: "Loops allow a program to repeat a block of code until a specific condition is met.",
        spotlight_fact: "Loops help reduce redundancy and automate repetition.",
        lecture: "Branching and Iteration"
    },
    {
        name: "Control Flow",
        description: "Control flow dictates the order in which individual statements, instructions, or function calls are executed.",
        spotlight_fact: "Control flow structures include conditionals, loops, and function calls.",
        lecture: "Branching and Iteration"
    },
    {
        name: "String Manipulation",
        description: "String manipulation involves processing and transforming text data.",
        spotlight_fact: "Strings are one of the most commonly used data types in programming.",
        lecture: "String Manipulation, Guess and Check, Approximations, Bisection"
    },
    {
        name: "Guess and Check",
        description: "Guess and check is a brute-force approach where solutions are tested one by one until the correct one is found.",
        spotlight_fact: "Guess and check is often used when no efficient algorithm is known.",
        lecture: "String Manipulation, Guess and Check, Approximations, Bisection"
    },
    {
        name: "Approximation",
        description: "Approximation refers to techniques that find close-enough answers instead of exact results, often for efficiency.",
        spotlight_fact: "Approximate solutions are useful in problems with large solution spaces or floating-point operations.",
        lecture: "String Manipulation, Guess and Check, Approximations, Bisection"
    },
    {
        name: "Bisection Search",
        description: "Bisection search repeatedly splits a sorted list or range in half to efficiently locate a target value.",
        spotlight_fact: "Bisection reduces search complexity from linear to logarithmic.",
        lecture: "String Manipulation, Guess and Check, Approximations, Bisection"
    },
    {
        name: "Decomposition",
        description: "Decomposition is the practice of breaking complex problems into smaller, more manageable parts.",
        spotlight_fact: "Decomposition improves code readability and modularity.",
        lecture: "Decomposition, Abstractions, Functions"
    },
    {
        name: "Abstraction",
        description: "Abstraction means hiding complex implementation details and showing only the essential features of a concept.",
        spotlight_fact: "Abstraction allows programmers to work with higher-level representations.",
        lecture: "Decomposition, Abstractions, Functions"
    },
    {
        name: "Functions",
        description: "Functions are reusable blocks of code that perform specific tasks and return results.",
        spotlight_fact: "Functions promote code reusability and organization.",
        lecture: "Decomposition, Abstractions, Functions"
    },
    {
        name: "Tuples",
        description: "Tuples are immutable sequences used to group multiple values in a single compound data type.",
        spotlight_fact: "Tuples are ideal for storing fixed collections of heterogeneous data.",
        lecture: "Tuples, Lists, Aliasing, Mutability, Cloning"
    },
    {
        name: "Lists",
        description: "Lists are mutable ordered sequences that can hold elements of any type.",
        spotlight_fact: "Python lists dynamically resize and support slicing.",
        lecture: "Tuples, Lists, Aliasing, Mutability, Cloning"
    },
    {
        name: "Aliasing",
        description: "Aliasing occurs when two variables refer to the same object in memory.",
        spotlight_fact: "Changes made through one alias affect all others.",
        lecture: "Tuples, Lists, Aliasing, Mutability, Cloning"
    },
    {
        name: "Mutability",
        description: "Mutability refers to whether an object can be modified after creation.",
        spotlight_fact: "Lists are mutable; tuples are not.",
        lecture: "Tuples, Lists, Aliasing, Mutability, Cloning"
    },
    {
        name: "Cloning",
        description: "Cloning creates a copy of an object, often to prevent shared references from causing unintended side effects.",
        spotlight_fact: "Shallow vs deep cloning affects whether nested structures are copied.",
        lecture: "Tuples, Lists, Aliasing, Mutability, Cloning"
    },
    {
        name: "Recursion",
        description: "Recursion occurs when a function calls itself to solve a problem by reducing it to smaller instances.",
        spotlight_fact: "All recursive solutions can be rewritten iteratively, though not always elegantly.",
        lecture: "Recursion, Dictionaries"
    },
    {
        name: "Dictionaries",
        description: "Dictionaries store key-value pairs for fast access, lookup, and insertion.",
        spotlight_fact: "Dictionaries in Python are implemented using hash tables.",
        lecture: "Recursion, Dictionaries"
    },
    {
        name: "Testing",
        description: "Testing verifies that code behaves as expected under various inputs.",
        spotlight_fact: "Good testing includes both normal and edge cases.",
        lecture: "Testing, Debugging, Exceptions, Assertions"
    },
    {
        name: "Debugging",
        description: "Debugging is the process of identifying and fixing errors or bugs in code.",
        spotlight_fact: "Systematic debugging can drastically reduce development time.",
        lecture: "Testing, Debugging, Exceptions, Assertions"
    },
    {
        name: "Exceptions",
        description: "Exceptions are runtime errors that disrupt normal program flow and can be caught with try-except blocks.",
        spotlight_fact: "Handling exceptions prevents program crashes and improves robustness.",
        lecture: "Testing, Debugging, Exceptions, Assertions"
    },
    {
        name: "Assertions",
        description: "Assertions are sanity checks that test assumptions made by the code during execution.",
        spotlight_fact: "Assertions help catch bugs early by detecting unexpected behavior.",
        lecture: "Testing, Debugging, Exceptions, Assertions"
    },
    {
        name: "Classes",
        description: "Classes are blueprints for creating objects that bundle data and behavior.",
        spotlight_fact: "Classes enable object-oriented programming and code reuse.",
        lecture: "Object Oriented Programming"
    },
    {
        name: "OOP",
        description: "Object-Oriented Programming (OOP) is a paradigm centered around objects that encapsulate data and behavior.",
        spotlight_fact: "OOP enables modular, reusable, and scalable codebases.",
        lecture: "Object Oriented Programming"
    },
    {
        name: "Encapsulation",
        description: "Encapsulation is the principle of restricting direct access to some components of an object.",
        spotlight_fact: "Encapsulation protects internal state and promotes modular design.",
        lecture: "Object Oriented Programming"
    },
    {
        name: "Inheritance",
        description: "Inheritance allows a class to inherit properties and methods from another class.",
        spotlight_fact: "Inheritance promotes code reuse and logical hierarchy.",
        lecture: "Python Classes and Inheritance"
    },
    {
        name: "Subclasses",
        description: "Subclasses are derived from parent classes and can override or extend their functionality.",
        spotlight_fact: "Python supports multiple inheritance via subclassing.",
        lecture: "Python Classes and Inheritance"
    },
    {
        name: "Class Hierarchies",
        description: "Class hierarchies organize classes in a tree structure to represent inheritance relationships.",
        spotlight_fact: "Well-designed hierarchies simplify complex systems.",
        lecture: "Python Classes and Inheritance"
    },
    {
        name: "Big-O Notation", // KEPT THIS ONE!
        description: "Big-O notation describes the upper bound of an algorithm's running time as input size grows.",
        spotlight_fact: "Big-O helps evaluate and compare algorithmic efficiency.",
        lecture: "Understanding Program Efficiency, Part 1"
    },
    {
        name: "Space Complexity",
        description: "Space complexity refers to the amount of memory an algorithm uses relative to input size.",
        spotlight_fact: "Some problems are memory-bound rather than compute-bound.",
        lecture: "Understanding Program Efficiency, Part 2"
    },
    {
        name: "Search Algorithms",
        description: "Search algorithms are techniques for finding elements in data structures or solving search problems.",
        spotlight_fact: "Common search techniques include linear search, binary search, and graph traversal.",
        lecture: "Searching and Sorting"
    },
    {
        name: "Sorting Algorithms",
        description: "Sorting algorithms arrange data in a particular order, often increasing efficiency for other operations.",
        spotlight_fact: "Well-known sorting algorithms include bubble sort, merge sort, and quicksort.",
        lecture: "Searching and Sorting"
    }
];

// --- Main function to connect, re-insert, and disconnect ---
async function reinsertData() {
    // Removed 'let client: MongoClient | null = null;' as it's not used with Mongoose direct connect
    try {
        console.log("Attempting to connect to MongoDB for data re-insertion...");
        console.log(`DEBUG: reinsert_data.ts using MONGO_URI: ${MONGO_URI}`);
        console.log(`DEBUG: reinsert_data.ts targeting DATABASE_NAME: ${DATABASE_NAME}`);

        await mongoose.connect(MONGO_URI, { dbName: DATABASE_NAME } as mongoose.ConnectOptions);
        console.log("✅ Successfully connected to MongoDB for re-insertion.");

        const db = mongoose.connection.db; // Get the native MongoDB driver DB object
        // Added check for db
        if (db) {
            console.log(`Connected to database: ${db.databaseName}`);
            console.log(`Operating on collection: ${COLLECTION_NAME}`);
        } else {
            console.warn("WARN: Mongoose connection.db is not available yet.");
        }


        // 1. Delete all existing documents in the collection
        const deleteResult = await Concept.deleteMany({});
        console.log(`🗑️ Deleted ${deleteResult.deletedCount} existing concepts.`);

        // 2. Insert new documents
        const insertResult = await Concept.insertMany(conceptsToReinsert);
        console.log(`✨ Successfully re-inserted ${insertResult.length} new concepts.`);

    } catch (error) {
        console.error("❌ Error during data re-insertion:", error);
    } finally {
        // Ensure to close Mongoose connection if it was opened
        if (mongoose.connection.readyState !== 0) { // Check if not disconnected
            await mongoose.disconnect();
            console.log("MongoDB connection closed.");
        }
    }
}

// Call the function to execute the data re-insertion
reinsertData();