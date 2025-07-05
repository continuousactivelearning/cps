import mongoose from "mongoose";
import seedCourses from "./seedCourses";
import seedUsers from "./seedUsers";
// Java seeding scripts
import seedJavaBeginnerQuizzes from "./difficulty-based/seedJavaBeginnerQuizzes";
import seedJavaIntermediateQuizzes from "./difficulty-based/seedJavaIntermediateQuizzes";
import seedJavaAdvancedQuizzes from "./difficulty-based/seedJavaAdvancedQuizzes";

// C++ seeding scripts
import seedCppBeginnerQuizzes from "./difficulty-based/seedCppBeginnerQuizzes";
import seedCppIntermediateQuizzes from "./difficulty-based/seedCppIntermediateQuizzes";
import seedCppAdvancedQuizzes from "./difficulty-based/seedCppAdvancedQuizzes";

// JavaScript seeding scripts
import seedJavaScriptBeginnerQuizzes from "./difficulty-based/seedJavaScriptBeginnerQuizzes";
import seedJavaScriptIntermediateQuizzes from "./difficulty-based/seedJavaScriptIntermediateQuizzes";
import seedJavaScriptAdvancedQuizzes from "./difficulty-based/seedJavaScriptAdvancedQuizzes";

// Python seeding scripts
import seedPythonBeginnerQuizzes from "./difficulty-based/seedPythonBeginnerQuizzes";
import seedPythonIntermediateQuizzes from "./difficulty-based/seedPythonIntermediateQuizzes";
import seedPythonAdvancedQuizzes from "./difficulty-based/seedPythonAdvancedQuizzes";
import seedBasicQuizzes from "./seedBasicQuizzes";

// Topic-based seeding is available but not used by default
// import seedJavaTopicQuizzes from "./topic-based/seedJavaTopicQuizzes";

const seedData = async (options: {
    all?: boolean;
    quiz?: boolean;
    user?: boolean;
    course?: boolean;
    basic?: boolean;
} = {}) => {
    const link = process.env.MONGODB_URI || 'mongodb://localhost:27017/our-app-db';

    try {
        await mongoose.connect(link);
        console.log("Connected to MongoDB");

        // If no specific options provided, default to all
        if (!options.all && !options.quiz && !options.user && !options.course && !options.basic) {
            options.all = true;
        }

        if (options.all || options.course) {
            console.log("Seeding courses...");
            await seedCourses();
            console.log("Courses seeded successfully");
        }

        if (options.all || options.user) {
            console.log("Seeding users...");
            await seedUsers();
            console.log("Users seeded successfully");
        }

        if (options.all || options.quiz) {
            console.log("Seeding quizzes...");
            
            // Java quizzes
            console.log("Seeding Java quizzes...");
            await seedJavaBeginnerQuizzes();
            await seedJavaIntermediateQuizzes();
            await seedJavaAdvancedQuizzes();
            
            // C++ quizzes
            console.log("Seeding C++ quizzes...");
            await seedCppBeginnerQuizzes();
            await seedCppIntermediateQuizzes();
            await seedCppAdvancedQuizzes();
            
            // JavaScript quizzes
            console.log("Seeding JavaScript quizzes...");
            await seedJavaScriptBeginnerQuizzes();
            await seedJavaScriptIntermediateQuizzes();
            await seedJavaScriptAdvancedQuizzes();
            
            // Python quizzes
            console.log("Seeding Python quizzes...");
            await seedPythonBeginnerQuizzes();
            await seedPythonIntermediateQuizzes();
            await seedPythonAdvancedQuizzes();
            
            console.log("✅ All quizzes seeded successfully");

            // Alternative topic-based approach
            // await seedJavaTopicQuizzes();
        }
        if (options.all || options.basic) {
            console.log("Seeding basic quizzes...");
            // Assuming seedBasicQuizzes is defined in the same way as the others
            await seedBasicQuizzes();
            console.log("Basic quizzes seeded successfully");
        }

        console.log("\nDatabase seeding completed successfully!");
        console.log("\nSummary:");
        if (options.all || options.course) console.log("- Courses seeded");
        if (options.all || options.user) console.log("- Users seeded");
        if (options.all || options.quiz) console.log("- Quizzes seeded");
        if (options.all || options.basic) console.log("- Basic quizzes seeded");

    } catch (error) {
        console.error("Error during database seeding:", error);
        throw error;
    } finally {
        await mongoose.disconnect();
        console.log("Disconnected from MongoDB");
    }
};

// If this script is run directly
if (process.argv[1]?.includes('seed.ts')) {
    console.log('Seed script started');
    console.log('Command line arguments:', process.argv);

    // Parse command line arguments
    const args = process.argv.slice(2);
    console.log('Parsed arguments:', args);

    const options = {
        all: args.includes('--all'),
        quiz: args.includes('--quiz'),
        user: args.includes('--user'),
        course: args.includes('--course'),
        basic : args.includes('--basic')
    };

    console.log('Options:', options);

    seedData(options);
}

export default seedData; 