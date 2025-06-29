import mongoose from "mongoose";
import seedCourses from "./seedCourses";
import seedUsers from "./seedUsers";
import seedJavaBeginnerQuizzes from "./difficulty-based/seedJavaBeginnerQuizzes";
import seedJavaIntermediateQuizzes from "./difficulty-based/seedJavaIntermediateQuizzes";
import seedJavaAdvancedQuizzes from "./difficulty-based/seedJavaAdvancedQuizzes";

// Topic-based seeding is available but not used by default
// import seedJavaTopicQuizzes from "./topic-based/seedJavaTopicQuizzes";

const seedData = async (options: {
    all?: boolean;
    quiz?: boolean;
    user?: boolean;
    course?: boolean;
} = {}) => {
    const link = process.env.MONGODB_URI || 'mongodb://localhost:27017/our-app-db';

    try {
        await mongoose.connect(link);
        console.log("🔗 Connected to MongoDB");

        // If no specific options provided, default to all
        if (!options.all && !options.quiz && !options.user && !options.course) {
            options.all = true;
        }

        if (options.all || options.course) {
            console.log("🌱 Seeding courses...");
            await seedCourses();
            console.log("✅ Courses seeded successfully");
        }

        if (options.all || options.user) {
            console.log("👥 Seeding users...");
            await seedUsers();
            console.log("✅ Users seeded successfully");
        }

        if (options.all || options.quiz) {
            console.log("📝 Seeding quizzes...");
            // Using difficulty-based seeding approach
            await seedJavaBeginnerQuizzes();
            await seedJavaIntermediateQuizzes();
            await seedJavaAdvancedQuizzes();
            console.log("✅ Quizzes seeded successfully");

            // Alternative topic-based approach
            // await seedJavaTopicQuizzes();
        }

        console.log("\n🎉 Database seeding completed successfully!");
        console.log("\n📊 Summary:");
        if (options.all || options.course) console.log("- Courses seeded");
        if (options.all || options.user) console.log("- Users seeded");
        if (options.all || options.quiz) console.log("- Quizzes seeded");

    } catch (error) {
        console.error("❌ Error during database seeding:", error);
        throw error;
    } finally {
        await mongoose.disconnect();
        console.log("🔌 Disconnected from MongoDB");
    }
};

// If this script is run directly
if (process.argv[1]?.includes('seed.ts')) {
    console.log('🚀 Seed script started');
    console.log('📝 Command line arguments:', process.argv);

    // Parse command line arguments
    const args = process.argv.slice(2);
    console.log('🔍 Parsed arguments:', args);

    const options = {
        all: args.includes('--all'),
        quiz: args.includes('--quiz'),
        user: args.includes('--user'),
        course: args.includes('--course')
    };

    console.log('⚙️  Options:', options);

    seedData(options);
}

export default seedData; 