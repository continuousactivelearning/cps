import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import type { QuizState } from '../interface/types';

function downloadReviewAsPDF(quiz: QuizState) {
  const doc = new jsPDF();
  const quizTitle = quiz.topicId || 'Quiz';

  doc.setFontSize(18);
  doc.text(`Quiz Review: ${quizTitle}`, 14, 22);

  doc.setFontSize(12);
  doc.text(`Score: ${quiz.score}%`, 14, 30);
  const timeTaken = quiz.timeCompleted
    ? Math.round((quiz.timeCompleted.getTime() - quiz.timeStarted.getTime()) / 1000)
    : quiz.timeLimit - quiz.timeRemaining;
  doc.text(`Time Taken: ${timeTaken}s`, 14, 36);

  const rows = quiz.questions.map((q, i) => [
    `${i + 1}. ${q.question}`,
    q.options[q.correctAnswer],
    quiz.userAnswers[i] !== undefined ? q.options[quiz.userAnswers[i]] : 'Not Answered',
    q.explanation
  ]);

  autoTable(doc, {
    head: [['Question', 'Correct Answer', 'Your Answer', 'Explanation']],
    body: rows,
    startY: 45,
    styles: {
    fontSize: 10,
    overflow: 'linebreak', 
    cellWidth: 'wrap',
    valign: 'top',
  },
    columnStyles: {
      0: { cellWidth: 60 },
      1: { cellWidth: 30 },
      2: { cellWidth: 30 },
      3: { cellWidth: 60 },
    },
  });

  doc.save(`${quizTitle}_review.pdf`);
}
export default downloadReviewAsPDF;