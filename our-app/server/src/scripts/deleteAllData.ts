import mongoose from 'mongoose';
import Course from '../models/Course';
import Quiz from '../models/Quiz';
import CustomQuiz from '../models/CustomQuiz';
import User from '../models/User';

const deleteData = async (options: {
    all?: boolean;
    quiz?: boolean;
    user?: boolean;
    course?: boolean;
    customQuiz?: boolean;
} = {}) => {
    try {
        console.log('Starting data deletion...\n');

        // If no specific options provided, default to all
        if (!options.all && !options.quiz && !options.user && !options.course && !options.customQuiz) {
            options.all = true;
        }

        // Delete all courses
        if (options.all || options.course) {
            const courseResult = await Course.deleteMany({});
            console.log(`Deleted ${courseResult.deletedCount} courses`);
        }

        // Delete all quizzes
        if (options.all || options.quiz) {
            const quizResult = await Quiz.deleteMany({});
            console.log(`Deleted ${quizResult.deletedCount} quizzes`);
        }

        // Delete all custom quizzes
        if (options.all || options.customQuiz) {
            const customQuizResult = await CustomQuiz.deleteMany({});
            console.log(`Deleted ${customQuizResult.deletedCount} custom quizzes`);
        }

        // Delete all users
        if (options.all || options.user) {
            const userResult = await User.deleteMany({});
            console.log(`Deleted ${userResult.deletedCount} users`);
        }

        console.log('\nData deletion completed successfully!');
        console.log('\nSummary:');
        if (options.all || options.course) console.log('- Courses deleted');
        if (options.all || options.quiz) console.log('- Quizzes deleted');
        if (options.all || options.customQuiz) console.log('- Custom Quizzes deleted');
        if (options.all || options.user) console.log('- Users deleted');

    } catch (error) {
        console.error('Error deleting data:', error);
        throw error;
    }
};

// If this script is run directly
if (process.argv[1]?.includes('deleteAllData.ts')) {
    console.log('Script started');
    console.log('Command line arguments:', process.argv);

    // Parse command line arguments
    const args = process.argv.slice(2);
    console.log('Parsed arguments:', args);

    const options = {
        all: args.includes('--all'),
        quiz: args.includes('--quiz'),
        user: args.includes('--user'),
        course: args.includes('--course'),
        customQuiz: args.includes('--custom-quiz')
    };

    console.log('Options:', options);

    // Connect to MongoDB using the same URI as other scripts
    const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/our-app-db';
    console.log('Connecting to MongoDB:', MONGODB_URI);

    mongoose.connect(MONGODB_URI)
        .then(async () => {
            console.log('Connected to MongoDB');
            await deleteData(options);
            console.log('Data deletion completed');
            await mongoose.disconnect();
            console.log('Disconnected from MongoDB');
            process.exit(0);
        })
        .catch((error) => {
            console.error('Failed to connect to MongoDB:', error);
            process.exit(1);
        });
}

export default deleteData; 