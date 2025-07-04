import React from "react";

export interface TopicStats {
  total: number;
  correct: number;
}

interface CustomQuizResultProps {
  results: Record<string, TopicStats>;
}

const CustomQuizResult: React.FC<CustomQuizResultProps> = ({ results }) => {
  const weakTopics: string[] = [];

  const topicElements = Object.entries(results).map(([topic, { total, correct }]) => {
    const percentage = Math.round((correct / total) * 100);
    const status = percentage >= 70 ? "Mastered" : "Failed";
    const statusColor = percentage >= 70 ? "text-green-600" : "text-red-600";
    const progressColor = percentage >= 70 ? "bg-green-500" : "bg-red-500";

    if (percentage < 70) {
      weakTopics.push(topic);
    }

    return (
      <div key={topic} className="p-4 border border-gray-200 rounded-lg shadow-sm">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-medium text-gray-700">{topic}</h3>
          <span className={`text-sm font-semibold ${statusColor}`}>{status}</span>
        </div>
        <div className="w-full bg-gray-100 h-3 rounded-full mb-2">
          <div
            className={`h-full ${progressColor} rounded-full transition-all`}
            style={{ width: `${percentage}%` }}
          />
        </div>
        <div className="text-sm text-gray-600">
          Score: {correct} / {total} ({percentage}%)
        </div>
      </div>
    );
  });

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Custom Quiz Results</h2>
      <div className="space-y-4">{topicElements}</div>

      <div className="mt-6 text-center text-lg font-medium text-gray-800">
        {weakTopics.length > 0 ? (
          <>
            Please revise{" "}
            <span className="text-red-600 font-semibold">
              {weakTopics.join(", ")}
            </span>{" "}
            before proceeding.
          </>
        ) : (
          <span className="text-green-600">✅ You are ready to proceed!</span>
        )}
      </div>
    </div>
  );
};

export default CustomQuizResult;
