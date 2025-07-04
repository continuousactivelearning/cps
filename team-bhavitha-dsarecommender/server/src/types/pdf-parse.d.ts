// server/types/pdf-parse.d.ts

declare module 'pdf-parse' {
  interface PDFParseResult {
    text: string;
    numpages: number;
    numrender: number;
    info: any;
    metadata: any;
    version: string;
  }

  function pdfParse(dataBuffer: Buffer): Promise<PDFParseResult>;

  export = pdfParse;
}
