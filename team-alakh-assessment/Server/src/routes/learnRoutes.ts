// developed by :@Aditya Chandra Das and Alakh Mathur
import express, { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import dotenv from "dotenv";
import fs from "fs"; // For reading fonts (may still be useful for other parts, or remove if not needed)
import path from "path";
import crypto from "crypto";
import MarkdownIt from "markdown-it"; // For parsing markdown
import html_to_pdf from "html-pdf-node";
import LearningHistory from "../models/LearningHistory"; // Assuming correct path
import LearningModule from "../models/LearningModule"; // Assuming correct path

dotenv.config();
const router = express.Router();
const md = new MarkdownIt(); // Initialize markdown-it for parsing Markdown content


const FONT_DIR = path.join(__dirname, "../../fonts");
const FONT_NORMAL = path.join(FONT_DIR, "Roboto-Regular.ttf");
const FONT_BOLD = path.join(FONT_DIR, "Roboto-Bold.ttf");
const FONT_ITALIC = path.join(FONT_DIR, "Roboto-Italic.ttf");
const FONT_BOLD_ITALIC = path.join(FONT_DIR, "Roboto-BoldItalic.ttf");
const FONT_MONO = path.join(FONT_DIR, "RobotoMono-Regular.ttf"); // For code blocks

// --- Interfaces ---
interface LearningModuleType {
  id: string;
  title: string;
  content: string; // This will now contain rich markdown content
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

// Extend Request type for user information from JWT
declare module "express-serve-static-core" {
  interface Request {
    user?: string | JwtPayload;
  }
}

// --- Middleware for JWT Authentication ---
const authenticateToken = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    res.sendStatus(401); // Unauthorized: No token provided
    return;
  }

  const token = authHeader.split(" ")[1];
  if (!token) {
    res.sendStatus(401); // Unauthorized: Token malformed
    return;
  }

  jwt.verify(token, process.env.JWT_SECRET as string, (err, user) => {
    if (err) {
      res.sendStatus(403); // Forbidden: Invalid token
      return;
    }
    req.user = user; // Attach user payload to request
    next();
  });
};

// --- Gemini API Call for Learning Modules Generation ---
async function generateLearningModules(
  topic: string
): Promise<LearningModuleType[]> {
  const prompt = `
Generate a comprehensive, academic-level learning sequence for the topic of "${topic}".
The content should be detailed, accurate, and suitable for an undergraduate curriculum.
Divide the material into 5-7 distinct learning modules.

For each module, provide:
-   **A clear, descriptive title.**
-   **Extensive learning content (approx. 700-1000 words).** Use rich Markdown formatting for clarity and structure:
    -   Top-level module headings: Start with \`# [Module Title]\`.
    -   Main sections within a module: Use \`## [Section Heading]\`.
    -   Sub-sections: Use \`### [Sub-section Heading]\`.
    -   Lists: Use bullet points (\`-\`) or numbered lists (\`1.\`).
    -   Emphasis: Use bold (\`**text**\`) for important terms and italic (\`*text*\`) for definitions or specific concepts.
    -   Code snippets: Include relevant code snippets using fenced code blocks (\~\~\~language\ncode here\n\~\~\~).
    -   Quotes: Use blockquotes (\`> Quote text\`).
-   **An estimated duration** for completing the module (e.g., "30 min", "1 hour").
-   **A type** indicating the primary content format ("text", "video", or "interactive").

Ensure the modules flow logically, building knowledge progressively. The overall tone should be formal and educational.
The output MUST be a JSON array of module objects. Do not include any text outside the JSON block.

Example JSON structure for one module:
\`\`\`json
[
  {
    "id": "[unique-module-id-e.g.-UUID]",
    "title": "Module 1: Foundations of ${topic}",
    "content": "# Module 1: Foundations of ${topic}\n\nThis module introduces the core principles and historical context of ${topic}...\n\n## Key Concepts\n\n### Definition\n\n${topic} can be defined as **[definition here]**...\n\n### Historical Evolution\n\n1.  **Early Beginnings**: Brief history point.\n2.  **Modern Era**: Significant developments.\n\n> "The only way to do great work is to love what you do." - Steve Jobs\n\n\`\`\`python\n# Example Python code related to ${topic}\ndef hello_${topic.toLowerCase().replace(/ /g, '_')}():\n    print(\"Hello, ${topic}!\")\n\`\`\`\n\n*Important Note*: Pay close attention to this section.\n",
    "duration": "60 min",
    "type": "text"
  }
]
\`\`\`
`;

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
      }
    );

    const data = await response.json();
    const rawText = data.candidates[0].content.parts[0].text;
    const cleaned = rawText.replace(/```json\n?|\n?```/g, "").trim();

    const modulesRaw = JSON.parse(cleaned);
    const modules = modulesRaw.map((m: any) => {
      const id = m.id || crypto.randomUUID();
      return {
        id,
        title: m.title || "Untitled Module",
        content: m.content || "No content provided.",
        duration: m.duration || "N/A",
        type: m.type || "text",
        downloadUrl: `/api/learn/download/${encodeURIComponent(topic)}/${id}`,
      };
    });

    await LearningModule.create({ topic, modules });
    return modules;
  } catch (err) {
    console.error("Gemini API error or JSON parsing failed:", err);
    return [
      {
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

*For more information*, please consult external resources.
`,
        duration: "20 min",
        type: "text",
        downloadUrl: `/api/learn/download/${encodeURIComponent(
          topic
        )}/fallback-module`,
      },
    ];
  }
}

// --- Routes for Web Display ---

// **MODIFIED:** This route now explicitly gets ALL modules for a topic.
// Frontend can use this to build a list of modules or render them all.
router.get(
  "/:topic/modules",
  authenticateToken,
  async (req: any, res: Response) => {
    try {
      const { topic } = req.params;
      const userEmail = req.user.email;

      let topicDoc = await LearningModule.findOne({ topic });
      if (!topicDoc) {
        await generateLearningModules(topic); // Generate modules if not found
        topicDoc = await LearningModule.findOne({ topic }); // refetch after creation
      }

      if (!topicDoc) {
        res.status(404).json({ message: "Topic not found after generation." });
        return;
      }

      const history = await LearningHistory.find({ userEmail, topic });
      const completedIds = history.map((h) => h.moduleId);

      const modules = topicDoc.modules.map((m: any) => ({
        ...m.toObject(),
        completed: completedIds.includes(m.id),
      }));

      // Return the full modules array, including markdown content for each module
      res.json({ modules });
    } catch (err) {
      console.error("Error getting modules:", err);
      res.status(500).json({ message: "Failed to retrieve modules" });
    }
  }
);

// **NEW ROUTE:** Get content for a specific module by its ID
router.get(
  "/:topic/module/:moduleId",
  authenticateToken,
  async (req: Request, res: Response) => {
    try {
      const { topic, moduleId } = req.params;
      const topicDoc = await LearningModule.findOne({ topic });

      if (!topicDoc) {
        res.status(404).json({ message: "Topic not found." });
        return;
      }

      const module = topicDoc.modules.find((m: any) => m.id === moduleId);

      if (!module) {
        res.status(404).json({ message: "Module not found within this topic." });
        return;
      }

      // Return the module's content (markdown)
      res.json({ moduleTitle: module.title, content: module.content });
    } catch (error) {
      console.error("Error fetching specific module content:", error);
      res.status(500).json({ message: "Failed to retrieve module content." });
    }
  }
);



// --- Routes for Learning Progress ---

router.post(
  "/complete-module",
  authenticateToken,
  async (req: any, res: Response) => {
    try {
      const { topic, moduleId } = req.body;
      const userEmail = req.user.email;

      const existing = await LearningHistory.findOne({
        userEmail,
        topic,
        moduleId,
      });
      if (existing && existing.completed) {
        res.json({ message: "Module already marked as completed." });
        return;
      }

      if (existing) {
        existing.completed = true;
        existing.completedAt = new Date();
        await existing.save();
      } else {
        await new LearningHistory({
          userEmail,
          topic,
          moduleId,
          completed: true,
          completedAt: new Date(),
        }).save();
      }

      res.json({ message: "Module marked as completed successfully." });
    } catch (error) {
      console.error("Error completing module:", error);
      res.status(500).json({ message: "Failed to mark module as complete" });
    }
  }
);

router.get(
  "/history/:topic",
  authenticateToken,
  async (req: any, res: Response) => {
    try {
      const { topic } = req.params;
      const userEmail = req.user.email;

      const history = await LearningHistory.find({ userEmail, topic }).sort({
        completedAt: -1, // Sort by most recent completion
      });
      res.json({ history });
    } catch (error) {
      console.error("Error getting history:", error);
      res.status(500).json({ message: "Failed to retrieve history" });
    }
  }
);


router.get(
  "/download/:topic/:moduleId",
  authenticateToken,
  async (req: Request, res: Response) => {
    const { topic, moduleId } = req.params;

    let moduleTitle = `Module ${moduleId}`;
    let moduleContentMarkdown = `Content for module ${moduleId} not found.`;

    try {
      const doc = await LearningModule.findOne({ topic });
      if (doc) {
        const module = doc.modules.find((m: any) => m.id === moduleId);
        if (module) {
          moduleTitle = module.title ?? `Module ${moduleId}`;
          moduleContentMarkdown =
            module.content ?? `Content for module ${moduleId} not found.`;
        }
      }

      // Convert markdown to HTML with MarkdownIt
      const parsedContent = md.render(moduleContentMarkdown);

      // Construct the HTML document
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

      const fileName = `${topic.replace(/\s+/g, "_")}_${moduleId}.pdf`;

      const file = { content: htmlContent }; // html-pdf-node uses a file object with the `content` key
      const options = {
        format: "A4",
        printBackground: true,
        margin: { top: "20mm", bottom: "20mm", left: "15mm", right: "15mm" },
      };

      const pdfBuffer = await html_to_pdf.generatePdf(file, options);

      res.setHeader("Content-Type", "application/pdf");
      res.setHeader(
        "Content-Disposition",
        `attachment; filename="${fileName}"`
      );
      res.send(pdfBuffer);
    } catch (error) {
      console.error("Error generating PDF:", error);
      res.status(500).json({ message: "Failed to generate PDF document." });
    }
  }
);


export default router;