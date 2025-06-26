// Path: server/src/app.ts

import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import learningPathRoutes from "./routes/learningPath";
// IMPORTANT: Ensure 'quizGenerator.js' is the correct path for the compiled JS file
import { generateQuizFromText } from './utils/quizGenerator.js'; // <-- Added .js extension and confirmed path

const app = express();
const PORT = process.env.PORT || 3000;

// --- MIDDLEWARE ---
// IMPORTANT: Middleware must come BEFORE routes and app.listen
app.use(bodyParser.json()); // To parse JSON request bodies
app.use(cors({ origin: 'http://localhost:5173' })); // Enable CORS for your frontend

// --- YOUR EXISTING ROUTES ---
app.use("/api", learningPathRoutes);

// Example of a basic root route
app.get('/', (req, res) => {
  res.send('Node.js server is running!');
});

// --- NEW QUIZ GENERATION ROUTE ---
// IMPORTANT: This route must come AFTER middleware like bodyParser.json()
app.post('/api/generate-quiz', async (req, res) => {
    try {
        const { text, topic } = req.body; // Extract text and topic from the request body

        if (!text || !topic) {
            console.error("[QUIZ ERROR] Missing 'text' or 'topic' in request body.");
            res.status(400).json({ error: "Missing 'text' or 'topic' in request body." });
            return; // Explicit return to prevent further execution in this path
        }

        console.log(`[QUIZ] Received request for quiz on topic: "${topic}"`);

        const quiz = await generateQuizFromText(text, topic);
        res.json(quiz); // Send the generated quiz back to the client
        return; // Explicit return after sending response
    } catch (error: any) {
        console.error("❌ Error generating quiz:", error?.response?.data || error);
        res.status(500).json({ error: "Failed to generate quiz due to an internal server error." });
        return; // Explicit return after sending error response
    }
});


// --- START THE SERVER ---
// IMPORTANT: app.listen should be the LAST thing after all middleware and routes are defined
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});