// // Developed by Manjistha Bidkar

// // extracting text from pdf

// // import express, { Request, Response } from 'express';
// // import multer from 'multer';
// // import pdf from 'pdf-parse';
// // import fs from 'fs';

// // const router = express.Router();
// // const upload = multer({ dest: 'uploads/' });

// // router.post('/extractPDFText', upload.single('pdf'), async (req: Request, res: Response): Promise<void> => {
// //   if (!req.file) {
// //     res.status(400).json({ error: 'No file uploaded' });
// //     return;
// //   }

// //   try {
// //     const dataBuffer = fs.readFileSync(req.file.path);
// //     const data = await pdf(dataBuffer);
// //     res.json({ text: data.text });
// //   } catch (err) {
// //     res.status(500).json({ error: 'Failed to extract text', details: err });
// //   }
// // });

// // export default router;

// // Concept mathing from extracted text
// import express, { Request, Response } from 'express';
// import multer from 'multer';
// import fs from 'fs';
// import path from 'path';
// //import { extractTextFromPDF } from '../utils/pdfExtractor';
// //import { loadConceptsFromExcel, identifyConcepts } from '../utils/matchTopics';

// const router = express.Router();
// const upload = multer({ dest: 'uploads/' });

// router.post('/analyzePDF', upload.single('pdf'), async (req: Request, res: Response): Promise<void> => {
//   if (!req.file) {
//     res.status(400).json({ error: 'No PDF file uploaded' });
//     return;
//   }

//   const pdfPath = req.file.path;
//   const excelPath = path.join(__dirname, '../../DSA_Concept_Graph.xlsx');

//   try {
//     const text = await extractTextFromPDF(pdfPath);
//     const concepts = loadConceptsFromExcel(excelPath);
//     console.log(concepts)
//     const matchedConcepts = identifyConcepts(text, concepts);

//     // Delete uploaded file
//     fs.unlinkSync(pdfPath);

//     res.status(200).json({
//       message: 'Topics identified from PDF',
//       matchedConcepts
//     });
//   } catch (error) {
//     console.error('PDF analysis error:', error);
//     res.status(500).json({ error: 'Failed to analyze PDF', details: (error as Error).message });
//   }
// });

// export default router;
