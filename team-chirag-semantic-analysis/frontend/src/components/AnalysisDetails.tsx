import React from 'react';

interface Analysis {
  summary: string;
  tone?: string;
  sentiment?: string;
  keywords?: string[];
}

interface AnalysisDetailsProps {
  analysis: Analysis;
}

const AnalysisDetails: React.FC<AnalysisDetailsProps> = ({ analysis }) => {
  return (
    <div className="bg-white border-l-4 border-blue-400 p-3 rounded shadow-sm">
      <h4 className="font-semibold text-blue-600 mb-1">Analysis</h4>
      <p className="text-sm text-gray-800 mb-2">{analysis.summary}</p>
      
      <div className="text-sm text-gray-700 space-y-1">
        {analysis.tone && (
          <div>
            <span className="font-medium">Tone:</span> {analysis.tone}
          </div>
        )}
        {analysis.sentiment && (
          <div>
            <span className="font-medium">Sentiment:</span> {analysis.sentiment}
          </div>
        )}
        {analysis.keywords && analysis.keywords.length > 0 && (
          <div>
            <span className="font-medium">Keywords:</span> {analysis.keywords.join(', ')}
          </div>
        )}
      </div>
    </div>
  );
};

export default AnalysisDetails;
