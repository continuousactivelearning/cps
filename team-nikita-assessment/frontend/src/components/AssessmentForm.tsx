/* AUTHOR - SHREYAS MENE (CREATED ON 13/06/2025) */
/*UPDATED BY NIKITA S RAJ KAPINI ON 16/06/2025*/

import axios from 'axios';
import React, { useState } from 'react';

export default function AssessmentForm() {
  const [topic, setTopic] = useState('');
  const [result, setResult] = useState<any>(null);

  const handleSubmit = async () => {
    const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/assessment/generate`, { target: topic });
    setResult(res.data);
  };

  return (
    <div className="p-4">
      <input
        className="border p-2"
        type="text"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        placeholder="Enter Target Topic"
      />
      <button className="bg-blue-500 text-white px-4 py-2 ml-2" onClick={handleSubmit}>
        Generate Assessment
      </button>

      {result && (
        <div className="mt-4">
          <h2 className="text-xl font-bold">Assessment for {result.targetTopic}</h2>
          <ul>
            {result.questions.map((q: any, idx: number) => (
              <li key={idx} className="mb-4">
                <strong>Q{idx + 1}:</strong> {q.question}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
