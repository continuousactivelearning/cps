// routes/uploadPdf.ts
import express from "express";
import multer from "multer";
import { GridFsStorage } from "multer-gridfs-storage";

import mongoose from "mongoose";

const router = express.Router();

//@ts-ignore
const storage = new GridFsStorage({
  url: process.env.MONGO_URI!,
  file: (req, file) => {
    const { topic } = req.body;
    return {
      filename: file.originalname,
      metadata: { topic },
      bucketName: "pdfs",
    };
  },
});
//@ts-ignore
const upload = multer({ storage });

router.post("/upload-pdf", upload.single("pdf"), (req, res) => {
  res.status(201).json({
    message: "PDF uploaded successfully",
    file: req.file,
  });
});

export default router;
