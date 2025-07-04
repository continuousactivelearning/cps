// Developed by Manjistha Bidkar
// Dynamically adjusts sharp filters based on whether text is typed or handwritten to improve OCR results

import sharp from 'sharp';

export enum PreprocessMode {
  TYPED = 'TYPED',
  HANDWRITTEN = 'HANDWRITTEN'
}

export async function preprocessImage(
  inputPath: string,
  outputPath: string,
  mode: PreprocessMode
) {
  const image = sharp(inputPath).grayscale();

  // For handwritten text: enhance contrast, sharpen edges, binarize, enlarge
  if (mode === PreprocessMode.HANDWRITTEN) {
    await image
      .normalize() // enhance contrast
      .blur(0.5) // smooth edges
      .sharpen({ sigma: 2 }) // boost stroke boundaries
      .threshold(140) // binarize
      .resize({ width: 2000 }) // upscale for clearer OCR
      .jpeg({ quality: 100 })
      .toFile(outputPath);
  } else {
    // For typed text: just resize and save
    await image
      .resize({ width: 1500 })
      .jpeg({ quality: 100 })
      .toFile(outputPath);
  }
}
