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
// Path: server/listModels.ts
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
// Ensure .env is loaded correctly (assuming it's in the 'server' root)
dotenv_1.default.config({ path: path_1.default.join(__dirname, '.env') });
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const LIST_MODELS_URL = 'https://generativelanguage.googleapis.com/v1beta/models'; // Endpoint to list models
function listAvailableGeminiModels() {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        if (!GEMINI_API_KEY) {
            console.error('GEMINI_API_KEY is not set in your .env file.');
            return;
        }
        console.log('Attempting to list models...');
        try {
            const response = yield axios_1.default.get(`${LIST_MODELS_URL}?key=${GEMINI_API_KEY}`);
            const models = response.data.models;
            console.log('\n--- Available Gemini Models ---');
            models.forEach((model) => {
                console.log(`ID: ${model.name}`);
                console.log(`  DisplayName: ${model.displayName}`);
                console.log(`  Supported Methods: ${model.supportedGenerationMethods.join(', ')}`);
                console.log('---');
            });
            console.log('\nLook for models that support "generateContent".');
        }
        catch (error) {
            console.error('❌ Error listing models:', ((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) || (error === null || error === void 0 ? void 0 : error.message) || error);
        }
    });
}
listAvailableGeminiModels();
