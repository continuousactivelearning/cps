// Developed by Manjistha Bidkar
// This module reads the pdf file into a buffer, parses it, and returns plain text.
import * as fs from 'fs';
import pdf from 'pdf-parse';

export async function extractTextFromPDF(filePath: string): Promise<string> {
  
  try {
    const dataBuffer = fs.readFileSync(filePath);
    const data = await pdf(dataBuffer);
    return data.text // full text content
  } catch (err) {
    return '';
  }
}
