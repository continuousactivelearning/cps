// Developed by Manjistha Bidkar
// Identifies topic matches from transcript text using strict and fuzzy logic.

import * as XLSX from 'xlsx';
import Fuse from 'fuse.js';
import { cleanText } from './textCleaner';

export function loadConceptsFromExcel(filePath: string): string[] {
  const workbook = XLSX.readFile(filePath);
  const sheet = workbook.Sheets['DSA_Concept_Graph'];
  const data = XLSX.utils.sheet_to_json<{ Concept: string }>(sheet);

  return data
    .map(row => row.Concept?.trim().toLowerCase())
    .filter((v): v is string => !!v);
}

export function identifyConcepts(text: string, concepts: string[]): string[] {
  const cleanedText = text.toLowerCase();
  const matchedConcepts = new Set<string>();

  // 1. Strict match (direct phrase match)
  for (const concept of concepts) {
    if (cleanedText.includes(concept)) {
      matchedConcepts.add(concept);
    }
  }

  // 2. Fuzzy match on remaining concepts
  const unmatchedConcepts = concepts.filter(c => !matchedConcepts.has(c));
  const fuse = new Fuse(unmatchedConcepts, {
    includeScore: true,
    threshold: 0.03,
    minMatchCharLength: 4
  });

  // Use sliding window of phrases (2-3 words)
  const words = cleanedText.split(/\s+/);
  const phrases: string[] = [...words];
  
  for (let i = 0; i < words.length - 1; i++) {
    phrases.push(`${words[i]} ${words[i + 1]}`);
    if (i < words.length - 2) {
      phrases.push(`${words[i]} ${words[i + 1]} ${words[i + 2]}`);
    }
  }

  for (const phrase of phrases) {
    const results = fuse.search(phrase);
    for (const result of results) {
      if (result.score !== undefined && result.score < 0.03) {
        matchedConcepts.add(result.item);
      }
    }
  }

  return Array.from(matchedConcepts);
}
