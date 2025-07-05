// Developed by Manjistha Bidkar
import path from 'path';

export const config = {
  // For image input (OCR-based)
  IMAGE_DIR: path.join(process.cwd(), 'images'),
  TESSDATA_PATH: path.join(process.cwd(), process.env.LANG_PATH || 'tessdata_fast'),

  // For YouTube transcript input
  DOWNLOAD_DIR: path.join(process.cwd(), 'downloads'),

  // Shared resource (concepts from Excel)
  EXCEL_PATH: path.join(process.cwd(), process.env.EXCEL_PATH || 'DSA_Concept_Graph.xlsx'),
};
