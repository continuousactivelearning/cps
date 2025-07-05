// Profile.tsx
//Developed by @Omkar
import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  getProfile,
  updateProfile,
  getAssessmentHistory,
  getAchievements,
  getStats,
  getRecommendations,
  getTopics,
  getSearchHistory,
  getPrerequisites,
  getActivityCalendar,
} from "../services/api";
import api from "../services/api";
import { X } from "lucide-react";

interface ProfileProps {
  onClose: () => void;
  topicsRef?: React.RefObject<HTMLDivElement>;
  dependencyMapRef?: React.RefObject<HTMLDivElement>;
  assessmentRef?: React.RefObject<HTMLDivElement>;
  statsRef?: React.RefObject<HTMLDivElement>;
}

const Profile: React.FC<ProfileProps> = ({
  onClose,
  topicsRef,
  dependencyMapRef,
  assessmentRef,
  statsRef,
}) => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState<any>(null);
  const [quizHistory, setQuizHistory] = useState<any[]>([]);
  const [achievements, setAchievements] = useState<string[]>([]);
  const [stats, setStats] = useState<any>(null);
  const [recommendations, setRecommendations] = useState<string[]>([]);
  const [topics, setTopics] = useState<any[]>([]);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [searchedTopicsWithPrereqs, setSearchedTopicsWithPrereqs] = useState<
    any[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [editMode, setEditMode] = useState(false);
  const [editName, setEditName] = useState("");
  const [editPicture, setEditPicture] = useState("");
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");
  const [showPrereqModal, setShowPrereqModal] = useState(false);
  const [selectedPrereq, setSelectedPrereq] = useState<string>("");
  const [showToast, setShowToast] = useState(false);
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [activityDates, setActivityDates] = useState<string[]>([]);
  const [prereqModalType, setPrereqModalType] = useState<
    "passed" | "unpassed" | null
  >(null);
  const [passedTopics, setPassedTopics] = useState<string[]>([]);

  const modalRef = useRef<HTMLDivElement>(null);
  const lastFocusedElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const fetchAll = async () => {
      setLoading(true);
      setError(null);
      try {
        const token = localStorage.getItem("token");
        if (!token) throw new Error("Unauthorized");
        const [
          profileRes,
          quizRes,
          achRes,
          statsRes,
          recRes,
          topicsRes,
          searchRes,
          activityRes,
          passedRes,
        ] = await Promise.all([
          getProfile(token),
          getAssessmentHistory(token),
          getAchievements(token),
          getStats(token),
          getRecommendations(token),
          getTopics(),
          getSearchHistory(token),
          getActivityCalendar(token),
          api.get("/api/user/passed", {
            headers: { Authorization: `Bearer ${token}` },
          }),
        ]);
        setProfile(profileRes.data);
        setQuizHistory(quizRes.data);
        setAchievements(achRes.data.achievements);
        setStats(statsRes.data);
        setRecommendations(recRes.data.recommended);
        setTopics(topicsRes.data);
        setSearchHistory(searchRes.data.searchHistory || []);
        setEditName(profileRes.data.profile?.name || "");
        setEditPicture(profileRes.data.profile?.picture || "");
        setActivityDates(activityRes.data.activityDates || []);
        setPassedTopics(passedRes.data.passed || []);

        // Debug logging
        console.log("Search history from API:", searchRes.data.searchHistory);
        console.log("All topics from API:", topicsRes.data);
        console.log(
          "Filtered searched topics:",
          topicsRes.data.filter((t: any) =>
            (searchRes.data.searchHistory || []).includes(t.topic)
          )
        );

        // Additional debugging
        const searchHistoryArray = searchRes.data.searchHistory || [];
        const topicsArray = topicsRes.data || [];
        console.log("Search history array:", searchHistoryArray);
        console.log(
          "Topics array:",
          topicsArray.map((t: any) => t.topic)
        );

        // Check for exact matches
        searchHistoryArray.forEach((searched: string) => {
          const found = topicsArray.find((t: any) => t.topic === searched);
          console.log(
            `Searching for "${searched}":`,
            found ? "FOUND" : "NOT FOUND"
          );
        });

        // Fetch prerequisites for searched topics that don't exist in topics array
        const missingSearchedTopics = searchHistoryArray.filter(
          (searched: string) =>
            !topicsArray.some((t: any) => t.topic === searched)
        );

        console.log("Missing searched topics:", missingSearchedTopics);

        // Fetch prerequisites for missing topics
        const missingTopicsWithPrereqs = await Promise.all(
          missingSearchedTopics.map(async (topic: string) => {
            try {
              const prereqRes = await getPrerequisites(token, topic);
              console.log(
                `Prerequisites for ${topic}:`,
                prereqRes.data.prerequisites
              );
              return {
                topic,
                prerequisites: prereqRes.data.prerequisites || [],
                modules: [],
              };
            } catch {
              console.log(`No prerequisites found for ${topic}`);
              return {
                topic,
                prerequisites: [],
                modules: [],
              };
            }
          })
        );

        // Combine topics from topics array and missing topics with prerequisites
        const searchedTopics = topicsArray.filter((t: any) =>
          searchHistoryArray.includes(t.topic)
        );
        const allSearchedTopics = [
          ...searchedTopics,
          ...missingTopicsWithPrereqs,
        ];

        console.log(
          "Final searched topics with prerequisites:",
          allSearchedTopics
        );
        setSearchedTopicsWithPrereqs(allSearchedTopics);
      } catch (err: any) {
        setError(err.message || "Failed to load profile");
      } finally {
        setLoading(false);
      }
    };
    fetchAll();
  }, []);

  useEffect(() => {
    // Save last focused element
    lastFocusedElement.current = document.activeElement as HTMLElement;
    // Focus the modal
    if (modalRef.current) {
      const focusable = modalRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length) focusable[0].focus();
    }
    // Trap focus
    const handleTab = (e: KeyboardEvent) => {
      if (!modalRef.current) return;
      const focusable = modalRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.key === "Tab") {
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };
    window.addEventListener("keydown", handleTab);
    return () => {
      window.removeEventListener("keydown", handleTab);
      // Restore focus
      if (lastFocusedElement.current) lastFocusedElement.current.focus();
    };
  }, []);

  useEffect(() => {
    if (!localStorage.getItem("profileOnboarded")) {
      setShowOnboarding(true);
    }
  }, []);

  // Get quiz results for a specific topic
  const getTopicQuizResult = (topic: string) => {
    const topicQuizzes = quizHistory.filter((q: any) => q.topic === topic);
    if (topicQuizzes.length === 0) return "not-attempted";
    const latestQuiz = topicQuizzes[0]; // Most recent
    return latestQuiz.passed ? "passed" : "failed";
  };

  // Utility to get color for prerequisite
  const getPrereqColor = (prereq: string) =>
    passedTopics.includes(prereq)
      ? "bg-green-100 text-green-800 border-green-300 hover:bg-green-200 dark:bg-green-900 dark:text-green-200 dark:border-green-700 dark:hover:bg-green-800"
      : "bg-amber-100 text-amber-800 border-amber-300 hover:bg-amber-200 dark:bg-amber-900 dark:text-amber-200 dark:border-amber-700 dark:hover:bg-amber-800";

  // Get topic progress status
  const getTopicStatus = (topic: string) => {
    const result = getTopicQuizResult(topic);
    switch (result) {
      case "passed":
        return {
          status: "passed",
          color:
            "bg-green-100 text-green-800 border-green-300 dark:bg-green-900 dark:text-green-200 dark:border-green-700",
          text: "✅ Passed",
        };
      case "failed":
        return {
          status: "failed",
          color:
            "bg-red-100 text-red-800 border-red-300 dark:bg-red-900 dark:text-red-200 dark:border-red-700",
          text: "❌ Failed",
        };
      default:
        return {
          status: "not-attempted",
          color:
            "bg-gray-100 text-gray-600 border-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600",
          text: "⏳ Not Attempted",
        };
    }
  };

  // Get missing prerequisites for a topic
  const getMissingPrereqs = (topic: any) => {
    const topicData = topics.find((t: any) => t.topic === topic.topic);
    if (!topicData) return [];
    return topicData.prerequisites.filter(
      (prereq: string) => !passedTopics.includes(prereq)
    );
  };

  // Generate smart recommendations for missing prerequisites
  const getPrereqRecommendations = () => {
    const recommendations: string[] = [];

    // Get all topics the user has attempted (from quiz history)
    const attemptedTopics = new Set(quizHistory.map((q: any) => q.topic));

    // Get failed topics (attempted but not passed)
    const failedTopics = new Set(
      quizHistory.filter((q: any) => !q.passed).map((q: any) => q.topic)
    );

    searchedTopicsWithPrereqs.forEach((topic: any) => {
      // Only recommend prerequisites for topics that user hasn't passed yet
      if (!passedTopics.includes(topic.topic)) {
        topic.prerequisites.forEach((prereq: string) => {
          // Recommend prerequisites that user hasn't passed (including failed ones)
          if (!passedTopics.includes(prereq)) {
            if (!recommendations.includes(prereq)) {
              recommendations.push(prereq);
            }
          }
        });
      }
    });

    // Prioritize failed prerequisites first, then unattempted ones
    const failedPrereqs = recommendations.filter((prereq) =>
      failedTopics.has(prereq)
    );
    const unattemptedPrereqs = recommendations.filter(
      (prereq) => !attemptedTopics.has(prereq)
    );
    const attemptedButNotFailed = recommendations.filter(
      (prereq) => attemptedTopics.has(prereq) && !failedTopics.has(prereq)
    );

    return [
      ...failedPrereqs,
      ...unattemptedPrereqs,
      ...attemptedButNotFailed,
    ].slice(0, 5);
  };

  // Handle prerequisite click
  const handlePrereqClick = (prereq: string) => {
    if (passedTopics.includes(prereq)) {
      setPrereqModalType("passed");
    } else {
      setPrereqModalType("unpassed");
    }
    setSelectedPrereq(prereq);
    setShowPrereqModal(true);
  };

  // Handle prerequisite action
  const handlePrereqAction = (action: "learn" | "quiz") => {
    setShowPrereqModal(false);
    if (action === "learn") {
      navigate(`/learn/${encodeURIComponent(selectedPrereq)}`);
    } else {
      navigate(`/quiz/${encodeURIComponent(selectedPrereq)}`);
    }
  };

  // Handle image file selection
  const handleImageSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith("image/")) {
        alert("Please select an image file (JPEG, PNG, GIF, etc.)");
        return;
      }

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert("Image size should be less than 5MB");
        return;
      }

      setSelectedImage(file);

      // Create preview URL
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Convert image to base64 for storage
  const convertImageToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  // Sidebar/tab navigation handler
  const handleNav = (
    section: "topics" | "inprogress" | "assessments" | "stats"
  ) => {
    let ref: any = null;
    if (section === "topics") ref = topicsRef;
    if (section === "inprogress") ref = dependencyMapRef;
    if (section === "assessments") ref = assessmentRef;
    if (section === "stats") ref = statsRef;
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Show toast on profile save
  const handleProfileSave = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("Unauthorized");

      let pictureData = editPicture;

      // If a new image was selected, convert it to base64
      if (selectedImage) {
        pictureData = await convertImageToBase64(selectedImage);
      }

      await updateProfile(token, { name: editName, picture: pictureData });
      setProfile((prev: any) => ({
        ...prev,
        profile: { name: editName, picture: pictureData },
      }));
      setEditMode(false);
      setSelectedImage(null);
      setImagePreview("");
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    } catch (err: any) {
      setError(err.message || "Failed to update profile");
    }
  };

  const prereqRecommendations = getPrereqRecommendations();

  const handleDismissOnboarding = () => {
    setShowOnboarding(false);
    localStorage.setItem("profileOnboarded", "true");
  };

  // Calendar Heatmap Component for Profile
  const renderProfileCalendarHeatmap = () => {
    if (!activityDates.length) return null;
    // Get the last 60 days
    const today = new Date();
    const days = [];
    for (let i = 59; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(today.getDate() - i);
      const dateStr =
        d.getFullYear() +
        "-" +
        String(d.getMonth() + 1).padStart(2, "0") +
        "-" +
        String(d.getDate()).padStart(2, "0");
      days.push({ date: dateStr, active: activityDates.includes(dateStr) });
    }
    return (
      <div className="mb-4">
        <div className="flex items-center mb-2">
          <span className="text-yellow-500 text-2xl mr-2">🔥</span>
          <span className="font-semibold text-gray-800 dark:text-gray-200 text-base md:text-lg">
            Learning Streak
          </span>
          <span className=" ml-2 px-3 py-1 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 text-white font-bold text-sm md:text-md shadow text-center">
            {stats?.currentStreak || 0} days
          </span>
        </div>
        <div className="flex items-center gap-4 mb-2">
          <span className="flex items-center gap-1 text-xs font-medium">
            <span className="inline-block w-5 h-5 rounded bg-yellow-400 border border-yellow-500"></span>{" "}
            <span className="text-yellow-700 dark:text-yellow-300">
              Activity
            </span>
          </span>
          <span className="flex items-center gap-1 text-xs font-medium">
            <span className="inline-block w-5 h-5 rounded bg-gray-200 border border-gray-400 dark:bg-gray-700 dark:border-gray-600"></span>{" "}
            <span className="text-gray-700 dark:text-gray-300">
              No Activity
            </span>
          </span>
        </div>
        <div className="grid grid-cols-12 gap-1 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-gray-800 dark:to-gray-800 p-2 rounded-xl border border-yellow-200 dark:border-gray-700">
          {days.map((day, idx) => (
            <div
              key={day.date}
              title={day.date + (day.active ? " - Active" : "")}
              className={`w-5 h-5 rounded-lg transition-all duration-200 border
                ${
                  day.active
                    ? "bg-yellow-400 border-yellow-500"
                    : "bg-gray-200 border-gray-400 dark:bg-gray-700 dark:border-gray-600"
                }`}
            ></div>
          ))}
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl">
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <span className="text-gray-700 dark:text-gray-300">
              Loading profile...
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl max-w-md">
          <div className="text-center">
            <div className="text-red-500 text-4xl mb-4">⚠️</div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
              Error Loading Profile
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">{error}</p>
            <button
              onClick={onClose}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div
        ref={modalRef}
        className="scroll-smooth w-full max-w-3xl sm:max-w-2xl md:max-w-4xl lg:max-w-5xl mx-auto bg-white dark:bg-[#181818] rounded-2xl shadow-2xl p-4 md:p-8 overflow-y-auto max-h-[90vh]"
      >
        {/* Header */}
        <div className="sticky top-0 bg-white dark:bg-gray-800 rounded-t-3xl p-4 md:p-6 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
          <div>
            <h1 className="text-xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Your Learning Profile
            </h1>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mt-1">
              Track your progress, achievements, and learning path
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Sidebar/tab navigation */}
        <div className="text-xs md:text-base flex flex-wrap gap-1 md:gap-2 mb-6 justify-center items-center md:justify-start sticky top-0 z-30 bg-white dark:bg-[#181818] py-3 rounded-t-2xl shadow-sm">
          <button
            onClick={() => handleNav("topics")}
            className="px-2 md:px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-medium"
          >
            Topics
          </button>
          <button
            onClick={() => handleNav("inprogress")}
            className="px-2 md:px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-medium"
          >
            In Progress
          </button>
          <button
            onClick={() => handleNav("assessments")}
            className="px-2 md:px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-medium"
          >
            Assessments
          </button>
          <button
            onClick={() => handleNav("stats")}
            className="px-2 md:px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-medium"
          >
            Stats
          </button>
        </div>

        {/* Content */}
        <div className="md:p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Profile & Stats */}
            <div className="lg:col-span-1 space-y-6">
              {/* Profile Card */}
              <div
                ref={topicsRef}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
              >
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-indigo-400 to-purple-500 mx-auto mb-4 overflow-hidden flex items-center justify-center">
                    {profile?.profile?.picture ? (
                      <img
                        src={profile.profile.picture}
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-3xl text-white">👤</span>
                    )}
                  </div>
                  {editMode ? (
                    <div className="space-y-3">
                      <input
                        className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm dark:bg-gray-700 dark:text-white"
                        value={editName}
                        onChange={(e) => setEditName(e.target.value)}
                        placeholder="Name"
                      />

                      {/* Image Upload Section */}
                      <div className="space-y-3">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                          Profile Picture
                        </label>

                        {/* Image Preview */}
                        {(imagePreview || profile?.profile?.picture) && (
                          <div className="flex justify-center">
                            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-300 dark:border-gray-600">
                              <img
                                src={imagePreview || profile?.profile?.picture}
                                alt="Profile preview"
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        )}

                        {/* File Upload Button */}
                        <div className="flex items-center justify-center w-full">
                          <label className="flex flex-col items-center justify-center w-full h-24 border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                              <svg
                                className="w-8 h-8 mb-2 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 16"
                              >
                                <path
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                />
                              </svg>
                              <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
                                <span className="font-semibold">
                                  Click to upload
                                </span>{" "}
                                or drag and drop
                              </p>
                              <p className="text-xs text-gray-500 dark:text-gray-400">
                                PNG, JPG, GIF up to 5MB
                              </p>
                            </div>
                            <input
                              type="file"
                              className="hidden"
                              accept="image/*"
                              onChange={handleImageSelect}
                            />
                          </label>
                        </div>

                        {/* Selected File Info */}
                        {selectedImage && (
                          <div className="text-xs text-gray-600 dark:text-gray-400 text-center">
                            Selected: {selectedImage.name}
                          </div>
                        )}
                      </div>

                      <div className="flex gap-2">
                        <button
                          className="flex-1 bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-lg text-sm transition-colors"
                          onClick={handleProfileSave}
                        >
                          Save
                        </button>
                        <button
                          className="flex-1 bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500 px-3 py-2 rounded-lg text-sm transition-colors"
                          onClick={() => {
                            setEditMode(false);
                            setSelectedImage(null);
                            setImagePreview("");
                          }}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">
                        {profile?.profile?.name || "No Name"}
                      </h2>
                      <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">
                        {profile?.email}
                      </p>
                      <button
                        className="text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 text-sm font-medium"
                        onClick={() => setEditMode(true)}
                      >
                        Edit Profile
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Learning Statistics */}
              <div
                ref={statsRef}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
              >
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                  <span className="text-xl md:text-2xl mr-2">📊</span>
                  Learning Analytics
                </h3>
                {renderProfileCalendarHeatmap()}
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-green-50 dark:bg-green-900/30 rounded-lg">
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      Topics Mastered
                    </span>
                    <span className="font-bold text-green-600 dark:text-green-400 text-lg">
                      {passedTopics.length}
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      In Progress
                    </span>
                    <span className="font-bold text-blue-600 dark:text-blue-400 text-lg">
                      {
                        searchedTopicsWithPrereqs.filter(
                          (t: any) => !passedTopics.includes(t.topic)
                        ).length
                      }
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      Total Assessments
                    </span>
                    <span className="font-bold text-purple-600 dark:text-purple-400 text-lg">
                      {stats?.totalQuizzes || 0}
                    </span>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                  <span className="text-xl md:text-2xl mr-2">🏆</span>
                  Achievements
                </h3>
                <div className="flex flex-wrap gap-2">
                  {achievements.length > 0 ? (
                    achievements.map((ach, i) => (
                      <span
                        key={i}
                        className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {ach}
                      </span>
                    ))
                  ) : (
                    <div className="text-center py-4">
                      <span className="text-gray-400 text-sm">
                        No achievements yet
                      </span>
                      <p className="text-xs text-gray-400 mt-1">
                        Complete more topics to earn badges!
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column - Learning Progress & Recommendations */}
            <div className="lg:col-span-2 space-y-6">
              {/* Prerequisite Recommendations */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                  <span className="text-xl md:text-2xl mr-2">🎯</span>
                  Smart Prerequisite Recommendations
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Based on your learning path, here are the prerequisites you
                  should focus on:
                </p>
                <div className="flex flex-wrap gap-3">
                  {prereqRecommendations.length > 0 ? (
                    prereqRecommendations.map((t: string, i: number) => (
                      <button
                        key={i}
                        onClick={() => handlePrereqClick(t)}
                        className={`bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg text-xs md:text-sm font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105`}
                        disabled={passedTopics.includes(t)}
                      >
                        📚 {t}
                      </button>
                    ))
                  ) : (
                    <div className="text-center py-4 w-full">
                      <span className="text-gray-400 dark:text-gray-500 text-sm">
                        No prerequisite recommendations
                      </span>
                      <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                        Search for more topics to get personalized
                        recommendations!
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Searched Topics Progress */}
              <div
                ref={dependencyMapRef}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
              >
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                  <span className="text-xl md:text-2xl mr-2">🗺️</span>
                  Dependency Learning Map
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                  Your searched topics and their prerequisite status:
                </p>
                <div className="space-y-4">
                  {searchedTopicsWithPrereqs.length > 0 ? (
                    searchedTopicsWithPrereqs.map((topic: any, i: number) => {
                      const topicStatus = getTopicStatus(topic.topic);
                      const missingPrereqs = getMissingPrereqs(topic);
                      return (
                        <div
                          key={i}
                          className="border border-gray-200 dark:border-gray-700 rounded-xl p-4 hover:shadow-md transition-shadow duration-200 dark:hover:bg-gray-700/50"
                        >
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="font-semibold text-gray-800 dark:text-white text-md md:text-lg">
                              {topic.topic}
                            </h4>
                            <span
                              className={`px-1 md:px-3 py-1 rounded-full text-xs font-medium border ${topicStatus.color}`}
                            >
                              {topicStatus.text}
                            </span>
                          </div>
                          {topic.prerequisites.length > 0 ? (
                            <div>
                              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 font-medium">
                                Prerequisites:
                              </p>
                              <div className="flex flex-wrap gap-2 mb-3">
                                {topic.prerequisites.map(
                                  (prereq: string, j: number) => (
                                    <button
                                      key={j}
                                      onClick={() => handlePrereqClick(prereq)}
                                      className={`px-3 py-1 rounded-full text-[10px] md:text-xs font-medium border cursor-pointer transition-all duration-200 hover:scale-105 ${getPrereqColor(
                                        prereq
                                      )}`}
                                      disabled={passedTopics.includes(prereq)}
                                    >
                                      {prereq}
                                    </button>
                                  )
                                )}
                              </div>
                              {missingPrereqs.length > 0 && (
                                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/30 dark:to-orange-900/30 border border-yellow-200 dark:border-yellow-800 rounded-lg p-3">
                                  <p className="text-sm text-yellow-800 dark:text-yellow-200 font-medium mb-1">
                                    ⚠️ Missing Prerequisites
                                  </p>
                                  <p className="text-xs text-yellow-700 dark:text-yellow-300">
                                    Complete these to unlock:{" "}
                                    {missingPrereqs.join(", ")}
                                  </p>
                                </div>
                              )}
                            </div>
                          ) : (
                            <span className="text-gray-400 dark:text-gray-500 text-sm">
                              No prerequisites required
                            </span>
                          )}
                        </div>
                      );
                    })
                  ) : (
                    <div className="text-center py-8 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-800 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600">
                      <span className="text-xl md:text-4xl mb-4 block">🔍</span>
                      <p className="text-gray-500 dark:text-gray-400 font-medium">
                        No topics searched yet
                      </p>
                      <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">
                        Start your dependency-aware learning journey!
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Assessment History */}
              <div
                ref={assessmentRef}
                className="bg-white dark:bg-gray-800 rounded-2xl p-2 md:p-6 shadow-lg border border-gray-100 dark:border-gray-700"
              >
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                  <span className="text-xl md:text-2xl mr-2">📝</span>
                  Assessment History
                </h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full text-xs md:text-sm">
                    <thead>
                      <tr className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30">
                        <th className="px-4 py-3 text-left font-semibold text-gray-700 dark:text-gray-300">
                          Topic
                        </th>
                        <th className="px-4 py-3 text-left font-semibold text-gray-700 dark:text-gray-300">
                          Score
                        </th>
                        <th className="px-4 py-3 text-left font-semibold text-gray-700 dark:text-gray-300">
                          Result
                        </th>
                        <th className="px-4 py-3 text-left font-semibold text-gray-700 dark:text-gray-300">
                          Date
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {quizHistory.length > 0 ? (
                        quizHistory.map((q: any, i: number) => (
                          <tr
                            key={i}
                            className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50"
                          >
                            <td className="px-4 py-3 text-xs md:text-sm font-medium text-gray-800 dark:text-white">
                              {q.topic}
                            </td>
                            <td className="px-4 py-3 dark:text-gray-300">
                              {q.score}/10
                            </td>
                            <td className="px-4 py-3">
                              {q.passed ? (
                                <span className="text-green-600 dark:text-green-400 font-semibold">
                                  ✅ Passed
                                </span>
                              ) : (
                                <span className="text-red-600 dark:text-red-400 font-semibold">
                                  ❌ Failed
                                </span>
                              )}
                            </td>
                            <td className="px-4 py-3 text-gray-500 dark:text-gray-400">
                              {new Date(q.createdAt).toLocaleDateString()}
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td
                            colSpan={4}
                            className="text-center py-8 text-gray-400 dark:text-gray-500"
                          >
                            <span className="text-2xl block mb-2">📊</span>
                            No assessment history yet
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Prerequisite Action Modal */}
        {showPrereqModal && (
          <div className="fixed inset-0 z-60 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl">
              {prereqModalType === "passed" ? (
                <>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6 text-center">
                    Topic Mastered
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 text-center">
                    You have already{" "}
                    <span className="text-green-600 dark:text-green-400 font-bold">
                      passed
                    </span>{" "}
                    <strong>"{selectedPrereq}"</strong>.<br />
                    You can revise the material or learn again if you wish.
                  </p>
                  <button
                    onClick={() => {
                      setShowPrereqModal(false);
                      navigate(`/learn/${encodeURIComponent(selectedPrereq)}`);
                    }}
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-200 transform hover:scale-105 shadow-lg mb-2"
                  >
                    📚 Revise / Learn Again
                  </button>
                  <button
                    onClick={() => setShowPrereqModal(false)}
                    className="w-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white py-3 px-6 rounded-xl font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-200"
                  >
                    Close
                  </button>
                </>
              ) : (
                <>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6 text-center">
                    Choose Your Learning Path
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 text-center">
                    What would you like to do with{" "}
                    <strong>"{selectedPrereq}"</strong>?
                  </p>
                  <button
                    onClick={() => handlePrereqAction("learn")}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
                    disabled={passedTopics.includes(selectedPrereq)}
                  >
                    📚 Learn the Material
                  </button>
                  <button
                    onClick={() => handlePrereqAction("quiz")}
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
                    disabled={passedTopics.includes(selectedPrereq)}
                  >
                    🧠 Take Assessment
                  </button>
                  <button
                    onClick={() => setShowPrereqModal(false)}
                    className="w-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white py-3 px-6 rounded-xl font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-200"
                  >
                    Cancel
                  </button>
                </>
              )}
            </div>
          </div>
        )}

        {/* Toast notification */}
        {showToast && (
          <div className="fixed top-8 left-1/2 -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-xl shadow-lg z-50 animate-fade-in-scale">
            Profile updated successfully!
          </div>
        )}

        {/* Onboarding Tooltips */}
        {showOnboarding && (
          <div className="absolute w-[90vw] md:w-auto left-1/2 top-4 -translate-x-1/2 bg-blue-600 text-white px-2 md:px-4 py-2 rounded-xl shadow-lg z-50 animate-fade-in-scale flex items-center gap-1 md:gap-2">
            <span>Click a stat to jump to that section!</span>
            <button
              onClick={handleDismissOnboarding}
              className="ml-1 text-xs underline"
            >
              Got it
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
