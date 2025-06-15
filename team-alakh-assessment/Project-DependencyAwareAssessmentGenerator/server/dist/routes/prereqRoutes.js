"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const Prerequisite_1 = __importDefault(require("../models/Prerequisite"));
dotenv_1.default.config();
const router = express_1.default.Router();
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent?key=' + GEMINI_API_KEY;
function generatePrerequisites(topic) {
    return __awaiter(this, void 0, void 0, function* () {
        const prompt = `
Generate a list of prerequisites required to learn "${topic}".
Respond ONLY with a JSON array of prerequisite strings, or an array of objects with 'prerequisite' and 'description'.
Wrap your response in raw JSON format (avoid markdown code blocks).
`;
        try {
            const response = yield fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: prompt }] }]
                })
            });
            const raw = yield response.text();
            const data = JSON.parse(raw);
            const rawText = data.candidates[0].content.parts[0].text;
            const cleaned = rawText.replace(/```json\n?|\n?```/g, '');
            // Parse JSON string
            const parsedArray = JSON.parse(cleaned);
            // Extract only the 'prerequisite' fields
            const prerequisites = parsedArray.map((item) => item.prerequisite);
            // Output
            console.log(prerequisites);
            return prerequisites;
        }
        catch (error) {
            console.error("❌ Gemini fetch error:", error);
            return [`Error: ${error.message || error}`];
        }
    });
}
router.get('/:topic', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { topic } = req.params;
    try {
        let prereq = yield Prerequisite_1.default.findOne({ topic });
        if (!prereq) {
            const prerequisites = yield generatePrerequisites(topic);
            prereq = new Prerequisite_1.default({ topic, prerequisites });
            yield prereq.save();
        }
        res.status(200).json({ topic: prereq.topic, prerequisites: prereq.prerequisites });
    }
    catch (error) {
        console.error('Error fetching prerequisites:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}));
exports.default = router;
