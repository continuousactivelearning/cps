
import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.join(__dirname, "../../.env") });
import { OpenAI } from "openai";


console.log("OPENAI_API_KEY:", process.env.OPENAI_API_KEY);
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY});

/**
 * Generates an embedding vector for a given text using OpenAI's API.
 * @param text A string chunk (≤8192 tokens recommended).
 * @returns Embedding vector (array of floats).
 */
export async function embedChunk(text: string): Promise<number[]> {
  const response = await openai.embeddings.create({
    model: "text-embedding-3-small", // or 'text-embedding-ada-002'
    input: text,
  });

  return response.data[0].embedding;
}
