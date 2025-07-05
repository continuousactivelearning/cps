import mongoose from "mongoose";
import Quiz from "../models/Quiz";
import { questions } from "../../../shared/questions/basicQuestions";

// Helper to map language and level to your enums
const languageMap: Record<string, string> = {
  "C++": "cpp",
  Java: "java",
  Python: "python",
  JavaScript: "javascript",
};
const levelMap: Record<string, string> = {
  easy: "beginner",
  intermediate: "intermediate",
  hard: "advanced",
};

// Don't connect here, let the main seed script handle connection

async function seedBasicQuizzes() {
  // Clear existing basic quizzes first
  await Quiz.deleteMany({ "topic.courseName": "basic" });
  console.log("Cleared existing basic quizzes");

  const grouped: Record<string, any[]> = {};
  for (const q of questions) {
    const lang = languageMap[q.language];
    const lvl = levelMap[q.difficulty];
    if (!lang || !lvl) continue;
    const key = `${lang}_${lvl}`;
    if (!grouped[key]) grouped[key] = [];
    grouped[key].push({
      questionText: q.questionText,
      options: q.options.map(
        (opt: { optionText: string; optionTag: string }) => ({
          optionText: opt.optionText,
          optionTag: opt.optionTag,
        })
      ),
      correctOption: q.correctOption,
      score: q.score || 1, // Use score from question or default to 1
    });
  }

  // Insert one quiz per language/level
  for (const key in grouped) {
    const [language, level] = key.split("_");
    const capitalizedLang = language === 'cpp' ? 'C++' : language.charAt(0).toUpperCase() + language.slice(1);
    const capitalizedLevel = level.charAt(0).toUpperCase() + level.slice(1);

    await Quiz.create({
      title: `${capitalizedLang} Basic Quiz - ${capitalizedLevel}`,
      quizLevel: level,
      lang: language,
      description: `This quiz covers ${level} concepts in ${capitalizedLang}.`,
      topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "basic"
      },
      questions: grouped[key],
    });
  }
  console.log("Basic quizzes seeded!");
}

export default seedBasicQuizzes;
