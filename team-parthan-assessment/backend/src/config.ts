// Developed by Manjistha Bidkar
import path from 'path';

export const config = {
  EXCEL_PATH: path.join(process.cwd(), process.env.EXCEL_PATH || 'DSA_Concept_Graph.xlsx'),
  TESSDATA_PATH: path.join(process.cwd(), process.env.LANG_PATH || 'tessdata_fast'),
  IMAGE_DIR: path.join(process.cwd(), 'images')
};
