// Developed by Manjistha Bidkar
// use ocr to idenfity content in the image
import Tesseract from 'tesseract.js';

export async function extractTextFromImage(imagePath: string): Promise<string> {
  const options: any = {
    logger: (m: any) => console.log(`[OCR]: ${m.status} - ${Math.round(m.progress * 100)}%`),
    config: [
      'tessedit_char_whitelist=abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,:;-()[]{}!?\'" ',
      'tessedit_pageseg_mode=6' // SINGLE_BLOCK
    ]
  };

  const { data: { text } } = await Tesseract.recognize(imagePath, 'eng', options);
  return text;
}

