// Developed by Manjistha Bidkar
// This Express server accepts image uploads, detects whether the content is typed or handwritten,
// preprocesses the image accordingly, extracts text using Tesseract OCR, and returns cleaned text for topic matching.

import express from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import dayjs from 'dayjs';
import { preprocessImage, PreprocessMode } from './utils/preprocess';
import { extractTextFromImage } from './utils/ocr';

const app = express();
const PORT = 3000;

// Directory to store uploaded and processed images
const IMAGE_DIR = path.join(__dirname, '../images');
if (!fs.existsSync(IMAGE_DIR)) fs.mkdirSync(IMAGE_DIR);

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, IMAGE_DIR),
  filename: (req, file, cb) => {
    const timestamp = dayjs().format('YYYYMMDD-HHmmss-SSS');
    const ext = path.extname(file.originalname);
    cb(null, `upload-${timestamp}${ext}`);
  }
});

// Multer setup for file upload
const upload = multer({ dest: IMAGE_DIR });

// Text cleanup function
function cleanText(text: string): string {
  return text
    .replace(/[^\x20-\x7E\n]/g, '')     // Remove non-ASCII
    .replace(/[^\w\s\n]/g, '')          // Remove punctuation
    .replace(/\b\w{1,2}\b/g, '')        // Remove very short words like "j", "oo" if needed
    .replace(/\s{2,}/g, ' ')            // Collapse extra spaces
    .replace(/\n+/g, ' ')               // Remove all newlines
    .toLowerCase()
    .trim();
  }

app.post('/extract-text', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      res.status(400).send('No file uploaded');
      return;
    }

    const originalPath = req.file.path;
    const timestamp = dayjs().format('YYYYMMDD-HHmmss-SSS');
    const processedPath = path.join(IMAGE_DIR, `processed-${timestamp}.jpg`);

    console.log(`[UPLOAD] Received file: ${req.file.originalname} -> Saved as: ${req.file.path}`);

    // Initial scan to detect mode
    const { text: initialText, mode } = await extractTextFromImage(originalPath);

    // Preprocess based on mode
    await preprocessImage(originalPath, processedPath, mode);

    // Final OCR
    const { text: finalText } = await extractTextFromImage(processedPath);

    // Clean text
    const cleanedText = cleanText(finalText);

    // Cleanup
    fs.unlinkSync(originalPath);
    fs.unlinkSync(processedPath);

    res.json({ text: cleanedText });
  } catch (err) {
    console.error('OCR error:', err);
    res.status(500).send('Error processing image');
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

