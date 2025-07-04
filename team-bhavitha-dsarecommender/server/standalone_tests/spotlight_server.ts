// standalone_tests/spotlight_server.ts - FINAL CLEANED VERSION

import express, { Request, Response, RequestHandler } from 'express';
import mongoose, { Schema, Document } from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env

const app = express();
const port = process.env.SPOTLIGHT_PORT || 5001;

// --- Middleware ---
app.use(cors()); // Enable CORS for all routes (important for frontend to connect)
app.use(express.json()); // Enable parsing JSON request bodies

// --- Mongoose Concept Model ---
// Interface representing the structure of a concept document in MongoDB
interface IConcept extends Document {
    name: string;
    description?: string;
    spotlight_fact?: string;
    lecture?: string;
}

// Mongoose Schema definition for the 'concepts' collection
const ConceptSchema: Schema = new Schema({
    name: { type: String, required: true, unique: true }, // 'name' should be unique
    description: { type: String },
    spotlight_fact: { type: String },
    lecture: { type: String },
}, { collection: 'concepts' }); // Explicitly link to the 'concepts' collection

// Create or retrieve the Mongoose Model for 'Concept'
const Concept = mongoose.models.Concept || mongoose.model<IConcept>('Concept', ConceptSchema);


// --- Configuration for MongoDB Connection ---
// Use environment variable MONGO_URI, or fallback to your hardcoded one
const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://akssrf2025:Aks1234@cluster0.oek3we1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const DATABASE_NAME = process.env.DATABASE_NAME || "LearnFlowDB";

let mongooseConnected = false; // Flag to track Mongoose connection status

// --- Connect to MongoDB Function ---
async function connectToMongoDB() {
    try {
        console.log(`DEBUG: spotlight_server.ts using MONGO_URI: ${MONGO_URI}`);
        console.log(`DEBUG: spotlight_server.ts targeting DATABASE_NAME: ${DATABASE_NAME}`);
        await mongoose.connect(MONGO_URI, {
            dbName: DATABASE_NAME,
            // useNewUrlParser and useUnifiedTopology are deprecated in Mongoose 6+ and can be safely removed
            // from future Mongoose versions, but keeping for compatibility.
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } as mongoose.ConnectOptions);
        mongooseConnected = true;
        console.log("✅ Mongoose Connected to MongoDB Atlas");

        // Optional: Log collections in the connected DB (useful for verification)
        if (mongoose.connection.db) {
            const collectionsInDb = await mongoose.connection.db.listCollections().toArray();
            console.log("INFO: Collections in connected DB:", collectionsInDb.map(c => c.name));
        }

    } catch (error) {
        console.error("❌ ERROR: Failed to connect to MongoDB:", error);
        process.exit(1); // Exit process if DB connection fails
    }
}

// --- Health Check Endpoint ---
// Provides a simple way to check if the server is running and connected to the DB
app.get('/health', async (req: Request, res: Response) => {
    const status: { [key: string]: string } = { "status": "OK", "database": "Disconnected" };
    if (mongooseConnected) {
        // Check Mongoose connection state (1 means connected, 0 disconnected, 2 connecting, 3 disconnecting)
        if (mongoose.connection.readyState === 1) {
            status["database"] = "Connected";
        } else {
            status["database"] = "Connecting/Disconnected";
        }
    } else {
        status["status"] = "DEGRADED"; // If Mongoose never connected
    }
    res.json(status);
});

// --- API Endpoint: Get All Concept Names ---
// Fetches and returns a list of all concept names from the database.
// This is used to populate the dropdown on the frontend.
app.get('/api/concepts/all', (async (req: Request, res: Response) => {
    console.log("INFO: API request received for all concept names.");
    if (!mongooseConnected) {
        return res.status(503).json({ error: "Database not connected. Cannot fetch all concepts." });
    }

    try {
        // Use Mongoose's find() method to get all documents
        // .select('name -_id') projects only the 'name' field and excludes '_id'
        // .lean() makes the result plain JavaScript objects, not Mongoose documents, for performance
        const concepts = await Concept.find({}, 'name -_id').lean();
        console.log("DEBUG: Raw concepts found by server:", concepts); // ADDED THIS DEBUG LOG

        // Extract just the 'name' from each concept object and filter out any null/undefined names
        const namesOnly = concepts.map(concept => concept.name).filter(Boolean) as string[];

        console.log(`INFO: Found ${namesOnly.length} concept names.`);
        res.json(namesOnly); // Send the array of names as JSON

    } catch (error) {
        console.error("❌ ERROR: Error fetching all concept names:", error);
        res.status(500).json({ error: "Could not retrieve all concept names", details: error instanceof Error ? error.message : String(error) });
    }
}) as RequestHandler);


// --- API Endpoint: Get Concept Spotlight by Name ---
// Fetches and returns the spotlight fact for a specific concept name.
app.get('/api/concept-spotlight/:conceptName', (async (req: Request, res: Response) => {
    const conceptName = req.params.conceptName; // Get concept name from URL parameter

    console.log(`INFO: API request received for concept: '${conceptName}'`);

    if (!mongooseConnected) {
        return res.status(503).json({ error: "Database not connected. Cannot fetch concept spotlight." });
    }

    try {
        // Use Mongoose's findOne() to find a single concept by name (case-insensitive)
        // new RegExp(`^${conceptName}$`, 'i') ensures exact, case-insensitive match
        const conceptData: IConcept | null = await Concept.findOne({ name: new RegExp(`^${conceptName}$`, 'i') });

        let fact = "No fun fact available for this concept yet!"; // Default message if not found or no fact

        // Check if a concept was found AND if it has a valid spotlight_fact
        if (conceptData && typeof conceptData.spotlight_fact === 'string' && conceptData.spotlight_fact.length > 0) {
            fact = conceptData.spotlight_fact;
            console.log(`INFO: Found spotlight fact for '${conceptName}'.`);
        } else {
            console.log(`INFO: No valid spotlight_fact found for concept: '${conceptName}'.`);
        }

        res.json({ concept: conceptName, fact: fact }); // Send the concept name and its fact

    } catch (error) {
        console.error(`❌ ERROR: Error fetching concept spotlight for ${conceptName}:`, error);
        res.status(500).json({ error: "Could not retrieve concept spotlight", details: error instanceof Error ? error.message : String(error) });
    }
}) as RequestHandler);


// --- Start the Server Function ---
// Connects to MongoDB, then starts the Express server.
async function startServer() {
    await connectToMongoDB(); // Ensure database connection before starting to listen for requests
    app.listen(port, () => {
        console.log(`\n======================================================`);
        console.log(`🟢 Standalone Concept Spotlight Server is running!`);
        console.log(`   Local URL: http://localhost:${port}`);
        console.log(`======================================================`);
        console.log(`\nAPI Endpoints Ready:`);
        console.log(`   - Health Check:           http://localhost:${port}/health`);
        console.log(`   - Get All Concepts:       http://localhost:${port}/api/concepts/all`);
        console.log(`   - Get Concept Spotlight:  http://localhost:${port}/api/concept-spotlight/Algorithms (or any other concept name)`);
        console.log(`\n(Remember to use 'ts-node standalone_tests/spotlight_server.ts' to run this server)`);
    });
}

// Call the function to start the server
startServer();