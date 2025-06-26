// Developed by Manjistha Bidkar
// Loads topic list from Excel and performs direct keyword matching

import xlsx from 'xlsx';
import path from 'path';

/**
 * Reads the first column of the first sheet in the Excel file.
 * Each cell in the column is treated as a topic keyword.
 */
export function loadTopicsFromExcel(filePath: string): string[] {
  const workbook = xlsx.readFile(filePath);
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const data = xlsx.utils.sheet_to_json(sheet, { header: 1 }) as string[][];

  const topics = data.map(row => row[0]?.toLowerCase().trim()).filter(Boolean);
  return topics;
}