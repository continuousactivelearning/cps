// scripts/uploadTopicMap.ts
import mongoose from "mongoose";
import { topicMap } from "../utils/topicMap"; // adjust path
import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.join(__dirname, "../../.env") });

async function uploadTopicMappings() {
  await mongoose.connect(process.env.MONGO_URI!);
  const db = mongoose.connection.db;

  if (!db) {
    console.error("❌ Database connection is undefined.");
    process.exit(1);
  }

  const bulk = Object.entries(topicMap).map(([topic, path]) => {
    const filename = path.split("/").pop();
    return { topic, pdf: filename };
  });

  await db.collection("topic_mappings").insertMany(bulk);
  console.log("✅ Topic mappings uploaded.");
  process.exit();
}

uploadTopicMappings();
