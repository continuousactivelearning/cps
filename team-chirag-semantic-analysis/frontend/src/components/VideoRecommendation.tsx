import React, { useRef, useState } from 'react';

interface Concept {
  name: string;
  confidence: number;
}

interface Gap {
  concept: string;
  description: string;
}

interface Video {
  url: string;
  title: string;
  description: string;
  duration: string;
  difficulty: string;
  matchScore: number;
  thumbnail?: string;
}

interface AnalysisResult {
  concepts?: Concept[];
  gaps?: Gap[];
  video?: Video;
}

interface VideoRecommendationProps {
  result: AnalysisResult | null;
  loading: boolean;
}

const VideoRecommendation: React.FC<VideoRecommendationProps> = ({ result, loading }) => {
  const [] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Finding the best video for your query...</p>
      </div>
    );
  }

  if (!result) return null;

  return (
    <div className="video-recommendation">
      <div className="analysis-results">
        <h3>Analysis Results</h3>
        <div className="concepts-detected">
          <h4>Key Concepts Identified:</h4>
          <div className="concept-tags">
            {result.concepts?.map((concept, index) => (
              <span key={index} className="concept-tag">
                {concept.name} ({Math.round(concept.confidence * 100)}%)
              </span>
            ))}
          </div>
        </div>

        {result.gaps && result.gaps.length > 0 && (
          <div className="concept-gaps">
            <h4>Concept Gaps Detected:</h4>
            <ul>
              {result.gaps.map((gap, index) => (
                <li key={index} className="gap-item">
                  <strong>{gap.concept}</strong>: {gap.description}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="recommended-video">
        <h3>Recommended Video</h3>
        <div className="video-container">
          {result.video?.url ? (
            <>
              <video
                ref={videoRef}
                className="video-player"
                width="100%"
                height="400"
                controls
                poster={result.video.thumbnail}
              >
                <source src={result.video.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              <div className="video-info">
                <h4>{result.video.title}</h4>
                <p className="video-description">{result.video.description}</p>
                <div className="video-metadata">
                  <span className="duration">Duration: {result.video.duration}</span>
                  <span className="difficulty">Difficulty: {result.video.difficulty}</span>
                  <span className="match-score">
                    Match Score: {Math.round(result.video.matchScore * 100)}%
                  </span>
                </div>
              </div>
            </>
          ) : (
            <div className="no-video">
              <p>No suitable video found for your query.</p>
              <button className="suggest-video-btn">
                Suggest a Video Topic
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoRecommendation;
