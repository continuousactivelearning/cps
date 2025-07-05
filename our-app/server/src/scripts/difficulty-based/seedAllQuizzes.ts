import mongoose from "mongoose";
import Course from "../../models/Course";
import Quiz from "../../models/Quiz";
import {Lang, Level} from "../../types/customTypes";

// Java seeding scripts
import seedJavaBeginnerQuizzes from "./seedJavaBeginnerQuizzes";
import seedJavaIntermediateQuizzes from "./seedJavaIntermediateQuizzes";
import seedJavaAdvancedQuizzes from "./seedJavaAdvancedQuizzes";

// C++ seeding scripts
import seedCppBeginnerQuizzes from "./seedCppBeginnerQuizzes";
import seedCppIntermediateQuizzes from "./seedCppIntermediateQuizzes";
import seedCppAdvancedQuizzes from "./seedCppAdvancedQuizzes";

// JavaScript seeding scripts
import seedJavaScriptBeginnerQuizzes from "./seedJavaScriptBeginnerQuizzes";
import seedJavaScriptIntermediateQuizzes from "./seedJavaScriptIntermediateQuizzes";
import seedJavaScriptAdvancedQuizzes from "./seedJavaScriptAdvancedQuizzes";

// Python seeding scripts
import seedPythonBeginnerQuizzes from "./seedPythonBeginnerQuizzes";
import seedPythonIntermediateQuizzes from "./seedPythonIntermediateQuizzes";
import seedPythonAdvancedQuizzes from "./seedPythonAdvancedQuizzes";

interface SeedingOptions {
    languages?: string[];
    difficulties?: string[];
    clearExisting?: boolean;
}

const seedAllQuizzes = async (options: SeedingOptions = {}) => {
    const {
        languages = ['java', 'cpp', 'javascript', 'python'],
        difficulties = ['beginner', 'intermediate', 'advanced'],
        clearExisting = false
    } = options;

    try {
        const link = process.env.MONGODB_URI || 'mongodb://localhost:27017/our-app-db';
        await mongoose.connect(link);
        console.log("Connected to MongoDB");

        if (clearExisting) {
            console.log("Clearing existing quizzes...");
            await Quiz.deleteMany({});
            console.log("Existing quizzes cleared");
        }

        type Lang = 'java' | 'cpp' | 'javascript' | 'python';
        type Level = 'beginner' | 'intermediate' | 'advanced';

        const seedingFunctions: Record<Lang, Record<Level, () => Promise<void>>> = {
            java: {
                beginner: seedJavaBeginnerQuizzes,
                intermediate: seedJavaIntermediateQuizzes,
                advanced: seedJavaAdvancedQuizzes
            },
            cpp: {
                beginner: seedCppBeginnerQuizzes,
                intermediate: seedCppIntermediateQuizzes,
                advanced: seedCppAdvancedQuizzes
            },
            javascript: {
                beginner: seedJavaScriptBeginnerQuizzes,
                intermediate: seedJavaScriptIntermediateQuizzes,
                advanced: seedJavaScriptAdvancedQuizzes
            },
            python: {
                beginner: seedPythonBeginnerQuizzes,
                intermediate: seedPythonIntermediateQuizzes,
                advanced: seedPythonAdvancedQuizzes
            }
        };

        for (const language of languages) {
            if (!Object.keys(seedingFunctions).includes(language)) {
                console.warn(`Unknown language: ${language}. Skipping...`);
                continue;
            }

            console.log(`\n=== Seeding ${language.toUpperCase()} quizzes ===`);

            for (const difficulty of difficulties) {
                if (!Object.keys(seedingFunctions[language as Lang]).includes(difficulty)) {
                    console.warn(`Unknown difficulty: ${difficulty} for ${language}. Skipping...`);
                    continue;
                }

                console.log(`Seeding ${language} ${difficulty} quizzes...`);
                try {
                    await seedingFunctions[language as Lang][difficulty as Level]();
                    console.log(`✅ ${language} ${difficulty} quizzes seeded successfully`);
                } catch (error) {
                    console.error(`❌ Error seeding ${language} ${difficulty} quizzes:`, error);
                }
            }
        }

        console.log("\n🎉 All quiz seeding completed!");

        // Count total quizzes
        const totalQuizzes = await Quiz.countDocuments();
        console.log(`📊 Total quizzes in database: ${totalQuizzes}`);

    } catch (error) {
        console.error("Error during quiz seeding:", error);
        throw error;
    } finally {
        await mongoose.disconnect();
        console.log("Disconnected from MongoDB");
    }
};

// If this script is run directly
if (process.argv[1]?.includes('seedAllQuizzes.ts')) {
    console.log('Seed All Quizzes script started');
    console.log('Command line arguments:', process.argv);

    // Parse command line arguments
    const args = process.argv.slice(2);
    console.log('Parsed arguments:', args);

    const options: SeedingOptions = {
        languages: args.includes('--all-languages') ? undefined :
            args.filter(arg => arg.startsWith('--lang=')).map(arg => arg.replace('--lang=', '')),
        difficulties: args.includes('--all-difficulties') ? undefined :
            args.filter(arg => arg.startsWith('--difficulty=')).map(arg => arg.replace('--difficulty=', '')),
        clearExisting: args.includes('--clear')
    };

    // If no specific languages provided, default to all
    if (!options.languages || options.languages.length === 0) {
        options.languages = ['java', 'cpp', 'javascript', 'python'];
    }

    // If no specific difficulties provided, default to all
    if (!options.difficulties || options.difficulties.length === 0) {
        options.difficulties = ['beginner', 'intermediate', 'advanced'];
    }

    console.log('Options:', options);

    seedAllQuizzes(options);
}

export default seedAllQuizzes; 