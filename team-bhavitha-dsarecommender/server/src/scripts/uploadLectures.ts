// scripts/uploadLectures.ts
import fs from "fs";
import path from "path";
import mongoose from "mongoose";
import { GridFSBucket } from "mongodb";
import dotenv from "dotenv";

dotenv.config({ path: path.join(__dirname, "../../.env") });


const pdfDir = path.join(__dirname, "../data");

async function uploadLectures() {
  await mongoose.connect(process.env.MONGO_URI!);
  const db = mongoose.connection.db;
  if (!db) {
    throw new Error("Database connection is not established.");
  }
  const bucket = new GridFSBucket(db, { bucketName: "pdfs" });

  const lectureFiles = fs.readdirSync(pdfDir).filter(file => file.endsWith(".pdf"));

  for (const file of lectureFiles) {
    const stream = fs.createReadStream(path.join(pdfDir, file));
    const uploadStream = bucket.openUploadStream(file);

    stream.pipe(uploadStream);

    await new Promise((resolve, reject) => {
      uploadStream.on("finish", () => {
        console.log(`✅ Uploaded ${file}`);
        resolve(null);
      });
      uploadStream.on("error", reject);
    });
  }

  console.log("🚀 All PDFs in /data uploaded to GridFS.");
  process.exit();
}

uploadLectures();
