// Developed by Manjistha Bidkar
import path from 'path';

export const config = {
  // For image input (OCR)
  IMAGE_DIR: path.join(process.cwd(), 'images'),
  TESSDATA_PATH: path.join(process.cwd(), process.env.LANG_PATH || 'tessdata_fast'),

  // For YouTube subtitles
  DOWNLOAD_DIR: path.join(process.cwd(), 'downloads'),
  COOKIES_PATH: path.join(process.cwd(), 'cookies.txt'),
  PROXY: process.env.PROXY || '',

  // Shared
  EXCEL_PATH: path.join(process.cwd(), process.env.EXCEL_PATH || 'DSA_Concept_Graph.xlsx'),
};
