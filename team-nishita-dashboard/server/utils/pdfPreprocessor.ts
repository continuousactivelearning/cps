import { pdfToText, pdfToPages, PageType } from 'pdf-ts';
import fs from 'fs';

export async function extractText(filePath: string): Promise<{ text: string, pages: PageType[] }> {
  const pdf = fs.readFileSync(filePath);
  const text = await pdfToText(pdf);
  const pages = await pdfToPages(pdf);
  return { text, pages }
}
