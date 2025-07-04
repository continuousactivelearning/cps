import { extractTextFromPDF } from './utils/pdfExtractor';
import { loadConceptsFromExcel, identifyConcepts } from './utils/matchTopics';

async function runTopicMatching() {
  const pdfPath = "C:/Users/parth/Downloads/CST201 M2 Ktunotes.in.pdf"; // Replace with uploaded filename
  const excelPath = 'DSA_Concept_Graph.xlsx';

  const pdfText = await extractTextFromPDF(pdfPath);
  const concepts = loadConceptsFromExcel(excelPath);
  const matched = identifyConcepts(pdfText, concepts);

  console.log('\n Topics identified from PDF:');
  console.log(matched);
}

runTopicMatching();
