/* AUTHOR - NIKITA S RAJ KAPINI (CREATED ON 17/06/2025)*/

import React, { useRef } from 'react';
import html2pdf from 'html2pdf.js';

interface Question {
  id: number;
  question: string;
  correctAnswer?: string[];
  userAnswer?: string[];
  type: string;
}

interface Props {
  questions: Question[];
  userAnswers: Record<number, string[]>;
  prerequisitesToRevisit: string[];
  onRetry: () => void;
  score: number;
}

const AssessmentReport: React.FC<Props> = ({
  questions,
  userAnswers,
  prerequisitesToRevisit,
  onRetry,
  score,
}) => {
  const reportRef = useRef<HTMLDivElement>(null);

  const downloadPDF = () => {
    if (reportRef.current) {
      html2pdf()
        .set({
          margin: 0.5,
          filename: `assessment_report.pdf`,
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2 },
          jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
        })
        .from(reportRef.current)
        .save();
    }
  };

  return (
    <div className="assessment-report" ref={reportRef}>
      <h3>📊 Assessment Report</h3>
      <div className="question-list">
        {questions.map((q, idx) => {
          const userAns = userAnswers[q.id] || [];
          const correctAns = q.correctAnswer || [];
          const isCorrect =
            userAns.length === correctAns.length &&
            correctAns.every((a) => userAns.includes(a));

          return (
            <div key={q.id} className="question-result">
              <p>
                <strong>Q{idx + 1}:</strong> {q.question}
              </p>
              <p>User Answer: <span className="text-blue-700">{userAns.join(', ') || '—'}</span></p>
              <p>Correct Answer: <span className="text-green-700">{correctAns.join(', ')}</span></p>
              <p className={`font-semibold ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                Score: {isCorrect ? '1/1' : '0/1'}
              </p>
              <hr className="my-3" />
            </div>
          );
        })}
      </div>

      <h4>Total Score: {score}/{questions.length}</h4>

      {prerequisitesToRevisit.length > 0 && (
        <div className="mt-4">
          <h4 className="text-red-600">Topics to Revisit</h4>
          <ul className="list-disc list-inside text-sm ml-4">
            {prerequisitesToRevisit.map((topic, i) => (
              <li key={i}>{topic}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-6 flex gap-4">
        <button className="retry-button" onClick={onRetry}>🔁 Try Again</button>
        <button className="download-button" onClick={downloadPDF}>📄 Download Report</button>
      </div>
    </div>
  );
};

export default AssessmentReport;
