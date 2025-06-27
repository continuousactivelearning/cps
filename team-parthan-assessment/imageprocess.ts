//Author Srishti Koni
//image processing module
import express from 'express';
import multer from 'multer';
import cors from 'cors';
import * as fs from 'fs';
import * as path from 'path';
import Tesseract from 'tesseract.js';

const app = express();
const port = 5000;
app.use(cors());
app.use(express.json());

// Multer config for image upload
const upload = multer({ dest: 'uploads/' });

app.get('/', (_req, res) => {
  res.send('DSA Assessment Hub OCR API is running!');
});

app.post('/upload-image', upload.single('image'), async (req, res) => {
  const imageFile = req.file;

  if (!imageFile) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  const imagePath = path.resolve(imageFile.path);

  try {
    const result = await Tesseract.recognize(imagePath, 'eng');
    const extractedText = result.data.text;

    // Delete the uploaded file after processing
    fs.unlinkSync(imagePath);

    res.json({
      status: 'success',
      extracted_text: extractedText.trim()
    });
  } catch (err) {
    console.error('OCR failed:', err);
    res.status(500).json({ error: 'Text extraction failed' });
  }
});

app.listen(port, () => {
  console.log(Server running at http://localhost:${port});
});
