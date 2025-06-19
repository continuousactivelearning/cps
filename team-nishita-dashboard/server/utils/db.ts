import mongoose from "mongoose";

const DB_URI = process.env.MONGO_DB_URI || 'mongodb://127.0.0.1:27017/recommendation_app';
const DB_NAME = process.env.DB_NAME || 'Dashboard';
if (DB_URI === undefined) {
    throw new Error('Database not connected');
}

export async function connectToDatabase() {
    try {
        await mongoose.connect(`${DB_URI}/${DB_NAME}`)
        console.log("connected to MongoDB")
    } catch (err) {
         console.log('MongoDB connection Error', err);

    }
}
