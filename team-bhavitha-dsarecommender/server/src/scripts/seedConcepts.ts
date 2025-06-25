import mongoose from "mongoose";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import Concept from "../models/concepts"; // adjust if needed

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/learnflow";

// Load concept graph JSON
const graphPath = path.join(__dirname, "../data/concept_graph_full.json");
const graph = JSON.parse(fs.readFileSync(graphPath, "utf-8"));

interface Node {
  id: string;
}
interface Link {
  source: string;
  target: string;
}

const defaultDescriptions: Record<string, string> = {
  "Conditionals": "Conditionals allow a program to execute different code based on logical conditions.",
  "Loops": "Loops allow a program to repeat a block of code until a specific condition is met.",
  "Recursion": "Recursion occurs when a function calls itself to solve a subproblem.",
  // Add more if you want to override for certain topics
};

const defaultFacts: Record<string, string> = {
  "Conditionals": "They are key to implementing decision-making in programs.",
  "Loops": "Loops help reduce redundancy and automate repetition.",
  "Recursion": "Recursion simplifies problems that can be broken down into smaller subproblems.",
};

const defaultLectureMap: Record<string, string> = {
  "Conditionals": "Branching and Iteration",
  "Loops": "Branching and Iteration",
  "Recursion": "Recursion, Dictionaries",
};

const defaultExamples: Record<string, string[]> = {
  "Conditionals": ["if", "if-else", "nested if"],
  "Loops": ["for loop", "while loop", "do-while loop"],
  "Recursion": ["Factorial", "Fibonacci", "Tree Traversal"],
};

async function seedConcepts() {
  await mongoose.connect(MONGODB_URI);
  console.log("✅ Connected to MongoDB");

  const adjacency: Record<string, Set<string>> = {};
  graph.nodes.forEach((node: Node) => {
    adjacency[node.id] = new Set();
  });

  graph.links.forEach((link: Link) => {
    adjacency[link.source].add(link.target);
    adjacency[link.target].add(link.source); // mutual connection
  });

  interface ConceptDocument {
    name: string;
    description: string;
    spotlight_fact: string;
    lecture: string;
    examples: string[];
    related_topics: string[];
    quiz_available: boolean;
  }

  const documents: ConceptDocument[] = graph.nodes.map((node: Node): ConceptDocument => {
    const name: string = node.id;
    return {
      name,
      description: defaultDescriptions[name] || `${name} is a fundamental concept in computer science.`,
      spotlight_fact: defaultFacts[name] || `Did you know? ${name} is widely used in various applications.`,
      lecture: defaultLectureMap[name] || "General Concepts",
      examples: defaultExamples[name] || [],
      related_topics: Array.from(adjacency[name]),
      quiz_available: true,
    };
  });

  await Concept.deleteMany({});
  console.log("🗑️ Old concepts cleared.");

  await Concept.insertMany(documents);
  console.log("🌱 Concepts seeded successfully.");

  process.exit(0);
}

seedConcepts().catch((err) => {
  console.error("❌ Error during concept seeding:", err);
  process.exit(1);
});
