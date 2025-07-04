
import fs from 'fs';
import path from 'path';
import pdfParse from 'pdf-parse';
import { PDFDocument } from 'pdf-lib';
import { conceptMarkers } from './concepts';

const pdfDir = './pdfs';
const jsonDir = './json_output';
const sourcePdf = './mit_pdfs/lecture_01.pdf';

// Ensure output folders exist
if (!fs.existsSync(jsonDir)) fs.mkdirSync(jsonDir);
if (!fs.existsSync(pdfDir)) fs.mkdirSync(pdfDir);

// Extract concept name from filename
function getConceptName(fileName: string): string {
  return path.basename(fileName, path.extname(fileName)).toLowerCase();
}

// Extract text from a PDF file
async function extractFullText(pdfPath: string): Promise<string> {
  const buffer = fs.readFileSync(pdfPath);
  const data = await pdfParse(buffer);
  return data.text;
}

// Extract specific text based on start/end markers
function extractConceptText(fullText: string, start: string, end: string): string {
  const lines = fullText.split('\n');
  let extract = [] as string[];
  let saving = false;

  for (const line of lines) {
    const lower = line.toLowerCase();
    if (lower.includes(start)) saving = true;
    if (saving) extract.push(line);
    if (lower.includes(end) && saving) break;
  }

  return extract.join('\n').trim();
}

// Save content to JSON
function saveJson(concept: string, content: string) {
  const jsonData = {
    title: concept,
    content
  };
  fs.writeFileSync(path.join(jsonDir, `${concept}.json`), JSON.stringify(jsonData, null, 2), 'utf-8');
  console.log(`✅ JSON saved: ${concept}.json`);
}

// Main script
(async function () {
  const files = fs.readdirSync(pdfDir).filter(f => f.endsWith('.pdf'));
  const fullText = await extractFullText(sourcePdf);

  for (const file of files) {
    const concept = getConceptName(file);
    const markers = conceptMarkers[concept];

    if (!markers) {
      console.warn(`⚠️ No markers defined for concept: ${concept}`);
      continue;
    }

    const extractedText = extractConceptText(fullText, markers.start, markers.end);

    if (extractedText.length > 0) {
      saveJson(concept, extractedText);
    } else {
      console.warn(`❌ No content found for: ${concept}`);
    }
  }
})();
