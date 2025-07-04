// utils/gridfs.ts
import mongoose from "mongoose";
import { GridFSBucket } from "mongodb";

let gfs: GridFSBucket;

mongoose.connection.once("open", () => {
  gfs = new mongoose.mongo.GridFSBucket(mongoose.connection.db!, {
    bucketName: "pdfs"
  });
});

export const getGFS = () => gfs;
