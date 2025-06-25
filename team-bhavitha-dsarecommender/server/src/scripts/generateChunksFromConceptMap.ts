import fs from "fs";
import path from "path";

const concept_map: Record<string, string[]> = {
  "What is computation?": ["Computation", "Algorithms", "Problem Solving"],
  "Branching and Iteration": ["Conditionals", "Loops", "Control Flow"],
  "String Manipulation, Guess and Check, Approximations, Bisection": [
    "String Manipulation",
    "Guess and Check",
    "Approximation",
    "Bisection Search",
  ],
  "Decomposition, Abstractions, Functions": [
    "Decomposition",
    "Abstraction",
    "Functions",
  ],
  "Tuples, Lists, Aliasing, Mutability, Cloning": [
    "Tuples",
    "Lists",
    "Aliasing",
    "Mutability",
    "Cloning",
  ],
  "Recursion, Dictionaries": ["Recursion", "Dictionaries"],
  "Testing, Debugging, Exceptions, Assertions": [
    "Testing",
    "Debugging",
    "Exceptions",
    "Assertions",
  ],
  "Object Oriented Programming": ["Classes", "OOP", "Encapsulation"],
  "Python Classes and Inheritance": [
    "Inheritance",
    "Subclasses",
    "Class Hierarchies",
  ],
  "Understanding Program Efficiency, Part 1": ["Big-O Notation", "Efficiency"],
  "Understanding Program Efficiency, Part 2": ["Efficiency", "Space Complexity"],
  "Searching and Sorting": ["Search Algorithms", "Sorting Algorithms"],
};

interface Chunk {
  topic: string;
  content: string;
}

const chunks: Chunk[] = [];

for (const [lecture, topics] of Object.entries(concept_map)) {
  for (const topic of topics) {
    chunks.push({
      topic,
      content: `This topic appears in lecture: "${lecture}".`,
    });
  }
}

const outputPath = path.join(__dirname, "../src/data/chunks.json");
fs.writeFileSync(outputPath, JSON.stringify(chunks, null, 2));
console.log("✅ chunks.json generated:", chunks.length, "entries");
