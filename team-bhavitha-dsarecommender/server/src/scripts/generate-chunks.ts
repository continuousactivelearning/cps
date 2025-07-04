// server/scripts/generateChunks.ts

import dotenv from "dotenv";
dotenv.config();

import fs from "fs";
import path from "path";
import { extractTextFromPDF } from "../utils/pdfParser";
import { embedChunk } from "../utils/embeddingGenerator";
import { topicMap } from "../utils/topicMap";

const OUTPUT_PATH = path.join(__dirname, "../data/chunks.json");

// Utility to split text into chunks
function chunkText(text: string, chunkSize = 500): string[] {
  const sentences = text.split(/(?<=[.?!])\s+/);
  const chunks: string[] = [];

  let current = "";
  for (const sentence of sentences) {
    if ((current + sentence).length > chunkSize) {
      if (current) chunks.push(current.trim());
      current = sentence;
    } else {
      current += " " + sentence;
    }
  }
  if (current) chunks.push(current.trim());
  return chunks;
}

async function generateChunks() {
  const allChunks: any[] = [];

  for (const [topic, pdfPath] of Object.entries(topicMap)) {
    const fullPath = path.resolve(pdfPath);
    const text = await extractTextFromPDF(fullPath);
    const chunks = chunkText(text);

    for (const chunk of chunks) {
      const embedding = await embedChunk(chunk);
      allChunks.push({
        topic,
        content: chunk,
        embedding,
      });
    }

    console.log(`✅ Processed: ${topic}`);
  }

  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(allChunks, null, 2));
  console.log(`\n🎉 chunks.json saved to: ${OUTPUT_PATH}`);
}

generateChunks().catch((err) => {
  console.error("❌ Error in generating chunks:", err);
});
