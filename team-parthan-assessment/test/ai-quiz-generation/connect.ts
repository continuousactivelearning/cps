// Author: Srishti Koni

import { parsePdf } from './pdfParser';
import { generateQuiz } from './quizGenerator';

/**
 * Integrates the PDF parser and quiz generator modules.
 * @param pdfPath - Path to the input PDF file
 * @returns A Promise containing the generated quiz or an error message
 */
export async function generateQuizFromPdf(pdfPath: string): Promise<string> {
  try {
    const extractedText = await parsePdf(pdfPath);

    if (!extractedText || extractedText.trim() === '') {
      throw new Error('No text extracted from PDF');
    }

    const quiz = await generateQuiz(extractedText);
    return quiz;

  } catch (error) {
    console.error('Integration error:', error);
    return 'Failed to generate quiz from PDF';
  }
}
