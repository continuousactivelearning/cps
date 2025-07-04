// Developed by Manjistha Bidkar

declare module 'pdf-parse' {
  interface PDFResult {
    text: string;
    numpages: number;
    numrender: number;
    info: object;
    metadata: object;
    version: string;
  }

  function pdf(dataBuffer: Buffer): Promise<PDFResult>;

  export = pdf;
}
