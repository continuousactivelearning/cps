const fs = require('fs');
const path = require('path');
const csvFilePath = path.resolve(__dirname, '../../../dsaquestions.csv');
const outputFilePath = path.resolve(__dirname, '../../../dsaquestions_cleaned.csv');

const lines = fs.readFileSync(csvFilePath, 'utf-8').split('\n');
const cleanedLines = lines.map(line => {
  // Remove quotes only from the first column (topic name)
  const parts = line.split(',');
  if (parts.length > 0) {
    // Remove quotes and trim spaces from topic name
    parts[0] = parts[0].replace(/"/g, '').trim();
  }
  return parts.join(',');
});

fs.writeFileSync(outputFilePath, cleanedLines.join('\n'), 'utf-8');
console.log('Cleaned CSV saved to:', outputFilePath);
