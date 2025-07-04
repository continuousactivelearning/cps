// Developed by Manjistha Bidkar
// Fuzzy but safe topic matcher using conservative Fuse.js settings

import xlsx from 'xlsx';
import path from 'path';
import Fuse from 'fuse.js';

 //Extracts first column of the Excel as topics
 
export function loadTopicsFromExcel(filePath: string): string[] {
  const workbook = xlsx.readFile(filePath);
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const data = xlsx.utils.sheet_to_json(sheet, { header: 1 }) as string[][];

  const topics = data.map(row => row[0]?.toLowerCase().trim()).filter(Boolean);
  return topics;
}

/**
 * Matches topics more strictly:
 * - First by direct substring
 * - Then by fuzzy scoring 
 */
export function matchTopics(text: string, topics: string[]): string[] {
  const cleanedText = text.toLowerCase();
  const matchedTopics = new Set<string>();

  // 1. Direct phrase match first
  for (const topic of topics) {
    if (cleanedText.includes(topic)) {
      matchedTopics.add(topic);
    }
  }

  // 2. Fuzzy match if direct match not found
  const fuse = new Fuse(topics, {
    includeScore: true,
    threshold: 0.02, 
  });

  // Break text into words for loose fuzzy match
  const words = cleanedText.split(/\s+/);
  for (const word of words) {
    const results = fuse.search(word);
    for (const result of results) {
      if (!matchedTopics.has(result.item) && result.score !== undefined && result.score < 0.02) {
        matchedTopics.add(result.item);
      }
    }
  }

  return Array.from(matchedTopics);
}
