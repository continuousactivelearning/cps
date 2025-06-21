// Developed by Manjistha Bidkar
// Preprocess the image for better content extraction
export async function preprocessImage(inputPath: string, outputPath: string) {
  await sharp(inputPath)
    .grayscale()                    // Convert to grayscale
    .trim()                         // Remove borders
    .normalize()                    // Normalize lighting
    .sharpen()                      // Sharpen edges for better recognition
    .threshold(130)                 // Binarize (lower = darker text)
    .resize({ width: 1500 })        // Upscale image to help text clarity
    .jpeg({ quality: 100 })         // Save with no compression artifacts
    .toFile(outputPath);
}
