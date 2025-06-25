import fs from "fs";
// pdf-parse does not have official TypeScript types, so add a module declaration


import pdf from "pdf-parse";

/**
 * Extracts raw text content from a PDF file.
 * @param pdfPath Absolute path to the PDF file.
 * @returns Text content from the PDF.
 */
export async function extractTextFromPDF(pdfPath: string): Promise<string> {
  const dataBuffer = fs.readFileSync(pdfPath);
  const data = await pdf(dataBuffer);
  return data.text;
}
