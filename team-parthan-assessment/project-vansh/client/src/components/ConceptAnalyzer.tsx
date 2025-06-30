// components/ConceptAnalyzer.tsx
import React from "react";
import type { Topic } from "../interface/types";
import { CheckCircle } from "lucide-react";

type Concepts = {
  mainTopic: string[];
  prerequisites: string[];
};

interface Props {
  file?: File | null;
  youtubeUrl?: string;
  typeofinput: string;
  concepts: Concepts | null;
  setConcepts: (c: Concepts | null) => void;
  loading: boolean;
  setLoading: (v: boolean) => void;
  topics: Topic[];
}

const ConceptAnalyzer: React.FC<Props> = ({
  file,
  youtubeUrl,
  typeofinput,
  concepts,
  setConcepts,
  loading,
  setLoading,
  topics
}) => {
  const handleAnalyze = async () => {
    if (!file && !youtubeUrl) return;


    const formData = new FormData();

    if (file) {
      formData.append("file", file);
      formData.append("typeofinput", typeofinput);
    }

    if (youtubeUrl) {
      formData.append("input", youtubeUrl);
      formData.append("typeofinput", typeofinput);
    }

    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/analyze", {
        method: "POST",
        body: formData,
      });
      if (!res.ok) throw new Error("Failed to analyze file");
      const data = await res.json();
      console.log(data);
      setConcepts(data);
    } catch (err) {
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        disabled={loading}
        onClick={handleAnalyze}
        className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg transition-colors mb-4"
      >
        {loading ? "Analyzing..." : "Get concepts"}
      </button>

      {concepts && (
        <div className="mt-4 bg-gray-50 p-4 rounded-lg">
          <h4 className="text-lg font-bold mb-2">Concepts Extracted:</h4>
          <div className="mb-2">
            <strong>Main Topics:</strong>
            <ul className="space-y-2 text-gray-800">
              {concepts.mainTopic.map((topic, idx) => (
                <li key={idx} className="flex items-center">
                  <span className="w-2.5 h-2.5 mr-3 rounded-full bg-indigo-500"></span>
                  <span className="font-semibold">{topic}</span>
                </li>
              ))}
            </ul>

          </div>
          <div>
            <strong>Prerequisites:</strong>
            <ul className="space-y-2 text-gray-800">
              {concepts.prerequisites.map((pre, idx) => {
                const isMastered = topics.some(t => t.name === pre && t.status === 'mastered');

                return (
                  <li key={idx} className="flex items-center">
                    <span
                      className={`w-2.5 h-2.5 mr-3 rounded-full ${isMastered ? 'bg-green-500' : 'bg-yellow-400'
                        }`}
                    ></span>
                    <span className="font-medium">{pre}</span>
                    {isMastered && (
                      <span className="ml-2 text-sm text-green-600 bg-green-100 px-2 py-0.5 rounded-full">
                        Mastered
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>

          </div>
        </div>
      )}

      {concepts && (<div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg mb-4">
        <div className="flex items-start space-x-3">
          <CheckCircle className="w-6 h-6 text-green-600 mt-0.5" />
          <div>
            {concepts.prerequisites.every(pre =>
              topics.some(t => t.name === pre && t.status === 'mastered')
            ) ? (
              <>
                <h3 className="font-medium text-gray-900 mb-1">
                  You're Ready! ✅
                </h3>
                <p className="text-sm text-green-700">
                  All prerequisites are mastered. You can now begin <strong>{file ? file.name : youtubeUrl}</strong>.
                </p>
              </>
            ) : (
              <>
                <h3 className="font-medium text-gray-900 mb-1">
                  Complete Prerequisites First ⚠️
                </h3>
                <p className="text-sm text-yellow-700">
                  Please master all required topics to unlock <strong>{file ? file.name : youtubeUrl}</strong>.
                </p>
              </>
            )}
          </div>
        </div>
      </div>)}
    </>
  );
};

export default ConceptAnalyzer;
