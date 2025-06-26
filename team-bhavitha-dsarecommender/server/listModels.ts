// Path: server/listModels.ts
import axios from 'axios';
import dotenv from 'dotenv';
import path from 'path';

// Ensure .env is loaded correctly (assuming it's in the 'server' root)
dotenv.config({ path: path.join(__dirname, '.env') }); 

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const LIST_MODELS_URL = 'https://generativelanguage.googleapis.com/v1beta/models'; // Endpoint to list models

async function listAvailableGeminiModels() {
  if (!GEMINI_API_KEY) {
    console.error('GEMINI_API_KEY is not set in your .env file.');
    return;
  }

  console.log('Attempting to list models...');
  try {
    const response = await axios.get(`${LIST_MODELS_URL}?key=${GEMINI_API_KEY}`);
    const models = response.data.models;

    console.log('\n--- Available Gemini Models ---');
    models.forEach((model: any) => {
      console.log(`ID: ${model.name}`);
      console.log(`  DisplayName: ${model.displayName}`);
      console.log(`  Supported Methods: ${model.supportedGenerationMethods.join(', ')}`);
      console.log('---');
    });
    console.log('\nLook for models that support "generateContent".');

  } catch (error: any) {
    console.error('❌ Error listing models:', error?.response?.data || error?.message || error);
  }
}

listAvailableGeminiModels();