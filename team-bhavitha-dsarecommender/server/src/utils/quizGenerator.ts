import { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } from '@google/generative-ai';

// Make sure your .env file in the 'server' directory has GEMINI_API_KEY=YOUR_API_KEY
const API_KEY = process.env.GEMINI_API_KEY;

// Check if API key is set
if (!API_KEY) {
    console.error("Error: GEMINI_API_KEY environment variable is not set. Please set it in your .env file in the server directory.");
    // You might want to throw an error or handle this more gracefully
    // For now, we'll proceed but API calls will fail.
    // throw new Error("GEMINI_API_KEY environment variable is not set.");
}

const genAI = new GoogleGenerativeAI(API_KEY || ''); // Provide a fallback empty string if API_KEY is undefined

// For text-only input, use the gemini-pro model
const model = genAI.getGenerativeModel({ model: "gemini-pro"});

export async function generateQuiz(topic: string, difficulty: string, numQuestions: number): Promise<any> {
    try {
        // --- YOU NEED TO RECREATE YOUR SPECIFIC PROMPT LOGIC HERE ---
        // This is where you craft the detailed instructions for Gemini.
        // If you were using RAG, this is where you'd include your retrieved context.
        const prompt = `Generate a ${difficulty} difficulty quiz with ${numQuestions} multiple-choice questions on the topic of "${topic}". Each question should have 4 options (A, B, C, D) and specify the correct answer. Provide the output in a JSON array format, where each object has "question", "options" (an array of strings), and "correctAnswer" (the letter A, B, C, or D). Ensure the JSON is valid and only the JSON is returned, no extra text.`;

        // Optional: Configuration for generation (adjust as needed for output control)
        const generationConfig = {
            maxOutputTokens: 2000,
            temperature: 0.7, // Lower for more deterministic, higher for more creative
            topP: 0.95,
            topK: 64,
        };

        // Optional: Safety settings (adjust as needed for content moderation)
        const safetySettings = [
            {
                category: HarmCategory.HARM_CATEGORY_HARASSMENT,
                threshold: HarmBlockThreshold.BLOCK_NONE, // Or BLOCK_MEDIUM_AND_ABOVE etc.
            },
            {
                category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
                threshold: HarmBlockThreshold.BLOCK_NONE,
            },
            {
                category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
                threshold: HarmBlockThreshold.BLOCK_NONE,
            },
            {
                category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
                threshold: HarmBlockThreshold.BLOCK_NONE,
            },
        ];

        console.log("Sending prompt to Gemini:", prompt);
        const result = await model.generateContent({
            contents: [{ parts: [{ text: prompt }] }],
            generationConfig,
            safetySettings,
        });

        const response = result.response;
        const text = response.text();

        console.log("Gemini API Raw Response:", text); // Log raw response for debugging

        // --- YOU NEED TO RECREATE YOUR PARSING LOGIC HERE ---
        // The AI might return text that needs cleaning or specific JSON parsing.
        // For example, if it wraps JSON in markdown code blocks (```json ... ```)
        let cleanedText = text.replace(/```json\n|\n```/g, '').trim();

        let quizData;
        try {
            quizData = JSON.parse(cleanedText);
            // Basic validation to ensure it's an array of objects
            if (!Array.isArray(quizData) || !quizData.every(q => typeof q === 'object' && q !== null)) {
                throw new Error("Parsed data is not an array of quiz objects.");
            }
        } catch (parseError) {
            console.error("Failed to parse Gemini response as JSON:", parseError);
            console.error("Raw text attempted to parse:", cleanedText);
            // Implement a fallback or more robust parsing if necessary
            // For example, try to extract JSON using regex if parsing fails due to extra text
            throw new Error("Could not parse AI response into valid JSON for quiz. Raw response might be malformed.");
        }

        return quizData;

    } catch (error: any) {
        console.error('Error in generateQuiz:', error);
        // Add more specific error handling for Gemini API errors like rate limits, safety blocks etc.
        if (error.message.includes("SAFETY")) {
             throw new Error("Quiz generation failed due to safety filters. Please try a different topic or wording.");
        }
        if (error.message.includes("rate limit")) {
            throw new Error("Quiz generation failed due to API rate limits. Please try again in a few minutes or check your quota.");
        }
        // General error
        throw new Error(`Quiz generation failed: ${error.message || "Unknown error"}`);
    }
}