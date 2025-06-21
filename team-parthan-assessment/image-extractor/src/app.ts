// Developed by Manjistha Bidkar
import express from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { preprocessImage } from './utils/preprocess';
import { extractTextFromImage } from './utils/ocr';

const app = express();
const PORT = 3000;

// Create images folder if not exists
const IMAGE_DIR = path.join(__dirname, '../images');
if (!fs.existsSync(IMAGE_DIR)) fs.mkdirSync(IMAGE_DIR);

// Multer setup for file upload
const upload = multer({ dest: IMAGE_DIR });

app.post('/extract-text', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      res.status(400).send('No file uploaded');
      return;
    }

    const originalPath = req.file.path;
    const processedPath = path.join(__dirname, '../images/processed-' + Date.now() + '.png');

    await preprocessImage(originalPath, processedPath);
    const extractedText = await extractTextFromImage(processedPath);

    fs.unlinkSync(originalPath);
    fs.unlinkSync(processedPath);

    res.json({ text: extractedText.trim() });  
  } catch (err) {
    console.error(err);
    res.status(500).send('Error processing image');
  }
});


app.listen(PORT, () => {
  console.log(` Server running at http://localhost:${PORT}`);
});
