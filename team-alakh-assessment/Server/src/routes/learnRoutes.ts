// developed by :@Aditya Chandra Das and Alakh Mathur
import express, { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import dotenv from "dotenv";
import crypto from "crypto";
import MarkdownIt from "markdown-it"; // For parsing markdown
import html_to_pdf from "html-pdf-node";
import LearningHistory from "../models/LearningHistory";
import LearningModule from "../models/LearningModule";

dotenv.config();
const router = express.Router();
const md = new MarkdownIt(); // Initialize markdown-it for parsing Markdown content

interface LearningModuleType {
  id: string;
  title: string;
  content: string;
  duration: string;
  type: "text" | "video" | "interactive";
  downloadUrl?: string;
  completed?: boolean;
}

// TOCItem interface is still relevant if you generate TOC within the HTML
interface TOCItem {
  title: string;
  page: number;
  y: number;
  level: number; // 0 for H1, 1 for H2, 2 for H3
}

declare module "express-serve-static-core" {
  interface Request {
    user?: string | JwtPayload;
  }
}

const authenticateToken = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    res.sendStatus(401);
    return;
  }

  const token = authHeader.split(" ")[1];
  if (!token) {
    res.sendStatus(401);
    return;
  }

  jwt.verify(token, process.env.JWT_SECRET as string, (err, user) => {
    if (err) {
      res.sendStatus(403);
      return;
    }
    req.user = user;
    next();
  });
};

// Instructor-only middleware
function instructorOnly(req: express.Request, res: express.Response, next: express.NextFunction): void {
  const authHeader = req.headers.authorization;
  if (!authHeader) { res.status(401).json({ message: 'No token provided' }); return; }
  const token = authHeader.split(' ')[1];
  try {
    const secret = process.env.JWT_SECRET || 'changeme';
    const decoded = jwt.verify(token, secret);
    if ((decoded as any).role !== 'instructor') { res.status(403).json({ message: 'Instructor only' }); return; }
    (req as any).instructorId = (decoded as any).id;
    next();
  } catch {
    res.status(401).json({ message: 'Invalid or expired token' });
  }
}

// --- Groq API Call for Learning Modules Generation ---
const GROQ_API_KEY = process.env.GROQ_KEY;
const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';

// generateLearningModules.ts
export async function generateLearningModules(
  topic: string
): Promise<typeof LearningModule> {
const prompt = `
You are an expert educational content creator. Generate a JSON array of 5–7 comprehensive learning modules for the topic: "${topic}".

Each module must include:
- "title": Clear, descriptive module title.
- "content": Markdown-formatted, highly detailed learning material (900–1300 words). Structure with:
    - Headings (H1, H2, H3)
    - Step-by-step explanations
    - Real-world examples and analogies
    - Practical applications and use-cases
    - Lists, tables, and code blocks (where relevant)
    - Key takeaways or summary and important note or quote at the end. (Use blockquote for quotes and important notes.)
    - Engaging, accessible language for beginners and intermediates
- "duration": Estimated time to complete (e.g., "45 min", "1 hour").
- "type": "text", "video", or "interactive" (choose "text" unless otherwise specified).

Requirements:
- Output ONLY valid JSON (no markdown, no extra text).
- Escape all special characters (e.g., \\n, \\").
- Content should be self-contained, user-friendly, and suitable for self-study.
- For code blocks use tripple (~) symbol (e.g., \~\~\~ code block \~\~\~
- Each module should build on the previous, covering the topic thoroughly.
- Avoid Including type, title and duration in content.

Return only the raw JSON array.
`;

  try {
    const response = await fetch(GROQ_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "llama3-70b-8192",
        messages: [
          {
            role: "system",
            content: "You are a helpful assistant for generating educational content.",
          },
          { role: "user", content: prompt },
        ],
        max_tokens: 4096,
        temperature: 0.2,
      }),
    });

    const data = await response.json();

    const rawText = data.choices?.[0]?.message?.content || "";

    const cleaned = rawText
      .replace(/```json\n?|```/g, "")
      .replace(/[\x00-\x1F\x7F]/g, "")
      .trim();

    const modulesRaw = JSON.parse(cleaned);

    const modules = modulesRaw.map((m: any) => {
      const id = m.id || crypto.randomUUID();
      return {
        id,
        title: m.title || "Untitled Module",
        content: m.content || "No content provided",
        duration: m.duration || "N/A",
        type: m.type || "text",
        downloadUrl: `/api/learn/download/${encodeURIComponent(topic)}/${id}`,
      };
    });

    const topicDoc = await LearningModule.create({ topic, modules });
    return topicDoc;
  } catch (err) {
    console.error("GROQ error or JSON parse fail:\n", err);

    const fallback = {
      id: "fallback-module",
      title: `Introduction to ${topic} (Fallback Content)`,
      content: `# Introduction to ${topic} (Fallback Content)

This module provides a basic overview of ${topic}. Due to an issue with content generation, detailed information is not available at this moment. Please try again later.

## What is ${topic}?
${topic} is a broad field focusing on [add a general description here].

### Importance
It plays a crucial role in [mention key areas of application].

\`\`\`javascript
// Fallback code example
function understandingTopic() {
  console.log("This is a placeholder for detailed code related to ${topic}.");
}
understandingTopic();
\`\`\`

*For more information*, please consult external resources.`,
      duration: "20 min",
      type: "text",
      downloadUrl: `/api/learn/download/${encodeURIComponent(topic)}/fallback-module`,
    };

    const fallbackDoc = await LearningModule.create({ topic, modules: [fallback] });
    return fallbackDoc;
  }
}



// learnRoutes.ts or wherever your router is defined
router.get("/:topic/modules", authenticateToken, async (req: any, res: Response) => {
  try {
    const topic = req.params.topic.trim().toLowerCase();
    const userEmail = req.user.email;

    // Find topic or generate it
    let topicDoc = await LearningModule.findOne({ topic });

    if (!topicDoc) {
      topicDoc = await generateLearningModules(topic); // now returns full doc
    }

    if (!topicDoc || !topicDoc.modules) {
      return res.status(404).json({ message: "Topic not found" });
    }

    // Get completed module IDs for the user
    const history = await LearningHistory.find({ userEmail, topic });
    const completedIds = history.map((h) => h.moduleId);

    // Convert Mongoose modules to plain JS objects + add completed field
    const modulesWithProgress = topicDoc.modules.map((m: any) => {
      const plain = m.toObject ? m.toObject() : m; // handles .lean() case too
      return {
        ...plain,
        completed: completedIds.includes(plain.id),
      };
    });

    res.json({ modules: modulesWithProgress });
  } catch (err) {
    console.error("Error loading modules:", err);
    res.status(500).json({ message: "Failed to load modules" });
  }
});



router.get(
  "/:topic/module/:moduleId",
  authenticateToken,
  async (req: Request, res: Response) => {
    try {
      const { topic, moduleId } = req.params;
      const normalizedTopic = decodeURIComponent(topic).trim().toLowerCase();

      const topicDoc = await LearningModule.findOne({ topic: normalizedTopic });

      if (!topicDoc) {
        res.status(404).json({ message: "Topic not found." });
        return;
      }

      const module = topicDoc.modules.find((m: any) => m.id === moduleId);

      if (!module) {
        res.status(404).json({ message: "Module not found within this topic." });
        return;
      }

      res.json({ moduleTitle: module.title, content: module.content });
    } catch (error) {
      console.error("Error fetching specific module content:", error);
      res.status(500).json({ message: "Failed to retrieve module content." });
    }
  }
);


router.post(
  "/complete-module",
  authenticateToken,
  async (req: any, res: Response) => {
    try {
      let { topic, moduleId } = req.body;
      const userEmail = req.user.email;

      if (!topic || !moduleId) {
        return res.status(400).json({ message: "Topic and moduleId required." });
      }

      topic = topic.trim().toLowerCase();

      const existing = await LearningHistory.findOne({
        userEmail,
        topic,
        moduleId,
      });

      if (existing && existing.completed) {
        return res.json({ message: "Already completed" });
      }

      if (existing) {
        existing.completed = true;
        existing.completedAt = new Date();
        await existing.save();
      } else {
        await LearningHistory.create({
          userEmail,
          topic,
          moduleId,
          completed: true,
          completedAt: new Date(),
        });
      }

      res.json({ message: "Marked as completed" });
    } catch (err) {
      console.error("Error marking module as complete:", err);
      res.status(500).json({ message: "Failed to mark module as complete" });
    }
  }
);


router.get(
  "/history/:topic",
  authenticateToken,
  async (req: any, res: Response) => {
    try {
      const topic = decodeURIComponent(req.params.topic).trim().toLowerCase();
      const userEmail = req.user.email;

      const history = await LearningHistory.find({ userEmail, topic }).sort({
        completedAt: -1,
      });

      res.json({ history });
    } catch (err) {
      console.error("Error fetching history:", err);
      res.status(500).json({ message: "Failed to get history" });
    }
  }
);

router.get(
  "/download/:topic/:moduleId",
  authenticateToken,
  async (req: Request, res: Response) => {
    const { topic, moduleId } = req.params;
    const normalizedTopic = decodeURIComponent(topic).trim().toLowerCase();

    let moduleTitle = `Module ${moduleId}`;
    let moduleContentMarkdown = `Content for module ${moduleId} not found.`;

    try {
      const doc = await LearningModule.findOne({ topic: normalizedTopic });

      if (doc) {
        const module = doc.modules.find((m: any) => m.id === moduleId);
        if (module) {
          moduleTitle = module.title ?? moduleTitle;
          moduleContentMarkdown = module.content ?? moduleContentMarkdown;
        }
      }

      // Convert markdown to styled HTML
      const parsedContent = md.render(moduleContentMarkdown);

      const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8" />
          <title>${moduleTitle}</title>
          <style>
            body {
              font-family: 'Roboto', sans-serif;
              margin: 20px;
              color: #000;
              text-align: justify;
            }
            h1 { font-size: 24px; color: #002147; margin-bottom: 12px; }
            h2 { font-size: 20px; color: #333; margin-bottom: 8px; }
            h3 { font-size: 16px; color: #555; margin-bottom: 6px; }
            p { font-size: 12px; line-height: 1.5; margin-bottom: 10px; }
            ul, ol { margin-left: 20px; margin-bottom: 10px; }
            li { margin-bottom: 4px; }
            pre {
              font-family: 'RobotoMono', monospace;
              font-size: 11px;
              background: #f5f5f5;
              border-radius: 6px;
              padding: 10px;
              overflow-x: auto;
              margin-bottom: 12px;
            }
            code {
              font-family: 'RobotoMono', monospace;
              background: #f0f0f0;
              padding: 2px 4px;
              border-radius: 4px;
              font-size: 11px;
            }
            blockquote {
              border-left: 4px solid #b3e5fc;
              background: #f0f8ff;
              margin: 10px 0;
              padding: 10px 15px;
              font-style: italic;
              color: #333;
              border-radius: 6px;
            }
          </style>
        </head>
        <body>
          ${parsedContent}
        </body>
        </html>
      `;

      const fileName = `${normalizedTopic.replace(/\s+/g, "_")}_${moduleId}.pdf`;
      const file = { content: htmlContent };
      const options = {
        format: "A4",
        printBackground: true,
        margin: { top: "20mm", bottom: "20mm", left: "15mm", right: "15mm" },
      };

      const pdfBuffer = await html_to_pdf.generatePdf(file, options);

      res.setHeader("Content-Type", "application/pdf");
      res.setHeader("Content-Disposition", `attachment; filename="${fileName}"`);
      res.send(pdfBuffer);
    } catch (error) {
      console.error("Error generating PDF:", error);
      res.status(500).json({ message: "Failed to generate PDF document." });
    }
  }
);

// Instructor: Get learning material for a topic (full modules)
router.get('/instructor/:topic', instructorOnly, async (req, res) => {
  try {
    const topic = decodeURIComponent(req.params.topic).trim().toLowerCase();
    const doc = await LearningModule.findOne({ topic });
    if (!doc) {
      return res.status(404).json({ message: 'No material found' });
    }
    res.json({ topic: doc.topic, modules: doc.modules });
  } catch (err) {
    console.error("GET instructor topic error:", err);
    res.status(500).json({ message: 'Failed to fetch material' });
  }
});


// Instructor: Update learning material for a topic
// Instructor: Update learning material for a topic
router.put('/instructor/:topic', instructorOnly, async (req, res) => {
  try {
    const topic = decodeURIComponent(req.params.topic).trim().toLowerCase();
    const { modules } = req.body;
    if (!Array.isArray(modules)) {
      return res.status(400).json({ message: 'Modules must be an array' });
    }
    const updated = await LearningModule.findOneAndUpdate(
      { topic },
      { modules },
      { new: true, upsert: false }
    );
    if (!updated) {
      return res.status(404).json({ message: 'No material found' });
    }
    res.json({ message: 'Material updated', topic: updated.topic, modules: updated.modules });
  } catch (err) {
    console.error("PUT instructor topic error:", err);
    res.status(500).json({ message: 'Failed to update material' });
  }
});


// Instructor: Create new learning material for a topic
// Instructor: Create new learning material for a topic
router.post('/instructor', instructorOnly, async (req, res) => {
  try {
    let { topic, modules } = req.body;

    if (!topic || !Array.isArray(modules)) {
      return res.status(400).json({ message: 'Topic and modules required' });
    }

    topic = topic.trim().toLowerCase(); // Normalize topic before saving

    const exists = await LearningModule.findOne({ topic });
    if (exists) {
      return res.status(400).json({ message: 'Material for topic already exists' });
    }

    const created = await LearningModule.create({ topic, modules });
    res.status(201).json({ message: 'Material created', topic: created.topic, modules: created.modules });
  } catch (err) {
    console.error("POST instructor material error:", err);
    res.status(500).json({ message: 'Failed to create material' });
  }
});

export default router;
