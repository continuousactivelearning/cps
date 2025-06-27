import mongoose from 'mongoose';

async function testDatabase() {
    try {
        console.log('Testing database connection...');
        // Connect to the database
        await mongoose.connect('mongodb://localhost:27017/our-app-db');
        console.log('Connected to MongoDB');
        console.log('Database name:', mongoose.connection.name);

        // List collections
        if (!mongoose.connection.db) {
            throw new Error('Database connection is undefined.');
        }
        const collections = await mongoose.connection.db.listCollections().toArray();
        console.log('Available collections:', collections.map(c => c.name));

        // Print document count and a sample for each collection
        for (const collection of collections) {
            const count = await mongoose.connection.db.collection(collection.name).countDocuments();
            console.log(`${collection.name}: ${count} documents`);
            if (count > 0) {
                // Ensure db is defined before accessing collection
                const sample = await mongoose.connection.db.collection(collection.name).findOne();
                console.log(`Sample from ${collection.name}:`, sample);
            }
        }
    } catch (error) {
        console.error('Database test failed:', error);
    } finally {
        await mongoose.disconnect();
        console.log('Disconnected from MongoDB');
    }
}

testDatabase(); 