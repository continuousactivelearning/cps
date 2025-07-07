import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import { useParams, useNavigate } from "react-router-dom";
import { getCourseBySlug } from "../api/api";
import type { Course as Course } from '../api/api'

const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API || "YOUTUBE_API_KEY";

function extractPlaylistId(url: string): string | null {
  const match = url.match(/[?&]list=([a-zA-Z0-9_-]+)/);
  return match ? match[1] : null;
}

const CoursePlaylistPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [course, setCourse] = useState<Course | null>(null);
  const [playlistItems, setPlaylistItems] = useState<any[]>([]);
  const [currentVideoId, setCurrentVideoId] = useState<string | null>(null);

  useEffect(() => {
    if (slug) {
      getCourseBySlug(slug).then(res => {
        setCourse(res.data.course);
        const playlistId = extractPlaylistId(res.data.course.playlistURL);
        if (playlistId) fetchPlaylistItems(playlistId);
      });
    }
  }, [slug]);

  const fetchPlaylistItems = async (playlistId: string) => {
    const resp = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistId}&key=${YOUTUBE_API_KEY}`
    );
    const data = await resp.json();
    setPlaylistItems(data.items || []);
    if (data.items && data.items.length > 0) {
      setCurrentVideoId(data.items[0].snippet.resourceId.videoId);
    }
  };

  if (!course) return <div>Loading playlist...</div>;

  return (
    <div style={{ display: "flex", height: "100vh", background: "#232b36" }}>
      {/* Sidebar */}
      <div style={{ width: 320, overflowY: "auto", background: "#20232a", color: "#fff", padding: 16 }}>
        <h3 style={{ margin: "0 0 1rem 0" }}>{course.courseName} Playlist</h3>
        {playlistItems.map(item => (
          <div
            key={item.id}
            onClick={() => setCurrentVideoId(item.snippet.resourceId.videoId)}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: 12,
              cursor: "pointer",
              background: currentVideoId === item.snippet.resourceId.videoId ? "#2c3440" : "transparent",
              borderRadius: 6,
              padding: 6,
            }}
          >
            <img
              src={item.snippet.thumbnails.default.url}
              alt={item.snippet.title}
              style={{ width: 60, height: 45, objectFit: "cover", borderRadius: 4, marginRight: 12 }}
            />
            <div style={{ fontSize: 14, fontWeight: 500 }}>{item.snippet.title}</div>
          </div>
        ))}
      </div>
      {/* Main Video Area */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <button
          onClick={() => navigate(-1)}
          style={{
            alignSelf: "flex-start",
            margin: "2rem 0 1rem 2rem",
            background: "none",
            color: "#fff",
            border: "none",
            fontSize: 16,
            cursor: "pointer"
          }}
        >
          ← Back to Course
        </button>
        {currentVideoId ? (
          <YouTube
            videoId={currentVideoId}
            opts={{
              width: "900",
              height: "500",
              playerVars: { autoplay: 1 }
            }}
          />
        ) : (
          <div style={{ color: "#fff" }}>No video selected.</div>
        )}
      </div>
    </div>
  );
};

export default CoursePlaylistPage;
