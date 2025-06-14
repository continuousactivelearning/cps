// src/app.ts

import express from "express";
import bodyParser from "body-parser";
import learningPathRoutes from "./routes/learningPath";
import cors from 'cors';
// frontend port


const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use("/api", learningPathRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
app.use(cors({ origin: 'http://localhost:5173' })); 
