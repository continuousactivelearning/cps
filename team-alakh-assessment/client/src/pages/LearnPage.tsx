// developed by :@AlakhMathur
import React, { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  BookOpen,
  CheckCircle,
  Clock,
  Trophy,
  Play,
  Download,
  FileText,
  Video,
  BookMarked,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Plus,
  Minus,
} from "lucide-react";
import { Listbox, Transition } from "@headlessui/react";
import api from "../services/api";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "../components/ThemeToggle";
import { marked } from "marked";

marked.setOptions({
  gfm: true, // Enable GitHub Flavored Markdown
  breaks: true, // Convert line breaks to <br>
});

interface LearningModule {
  id: string;
  title: string;
  content: string; // This will hold the raw Markdown
  duration: string;
  type: "text" | "video" | "interactive";
  downloadUrl?: string;
  completed: boolean;
}

const LearnPage: React.FC = () => {
  const { topic } = useParams<{ topic: string }>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [fontSize, setFontSize] = useState<"sm" | "base" | "lg" | "xl">("base");
  const [renderedContent, setRenderedContent] = useState<string>(""); // Store HTML content
  const [modules, setModules] = useState<LearningModule[]>([]);
  const [currentModuleIndex, setCurrentModuleIndex] = useState(0); // Renamed for clarity
  const [expandedModules, setExpandedModules] = useState<Set<number>>(
    new Set([0])
  );
  const [error, setError] = useState("");
  const [isDownloading, setIsDownloading] = useState<Record<string, boolean>>(
    {}
  ); // New state for download loading

  interface LearningHistoryEntry {
    moduleId: string;
    completedAt: string;
  }
  const [learningHistory, setLearningHistory] = useState<
    LearningHistoryEntry[]
  >([]);
  const [totalProgress, setTotalProgress] = useState(0);

  // Function to fetch and display a specific module's content
  const fetchAndDisplayModuleContent = useCallback(
    async (moduleToDisplay: LearningModule) => {
      try {
        const token = localStorage.getItem("token");
        const response = await api.get(
          `/api/learn/${encodeURIComponent(topic!)}/module/${
            moduleToDisplay.id
          }`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        // Convert Markdown to HTML
        const html = await marked.parse(response.data.content);
        setRenderedContent(html);
      } catch (err) {
        console.error("Error fetching module content:", err);
        setRenderedContent("<p>Failed to load module content.</p>");
      }
    },
    [topic]
  ); // Dependency on topic

  useEffect(() => {
    const fetchLearningData = async () => {
      try {
        const token = localStorage.getItem("token");

        // Fetch all modules for the topic
        const modulesResponse = await api.get(
          `/api/learn/${encodeURIComponent(topic!)}/modules`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        const fetchedModules: LearningModule[] =
          modulesResponse.data.modules || [];
        setModules(fetchedModules);
        console.log(fetchedModules);

        // Fetch learning history
        const historyResponse = await api.get(
          `/api/learn/history/${encodeURIComponent(topic!)}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setLearningHistory(historyResponse.data.history || []);

        // Calculate progress
        const completedModules = fetchedModules.filter(
          (m) => m.completed
        ).length;
        const totalModules = fetchedModules.length || 1;
        setTotalProgress(Math.round((completedModules / totalModules) * 100));

        // If modules exist, fetch and display the first one's content initially
        if (fetchedModules.length > 0) {
          fetchAndDisplayModuleContent(fetchedModules[0]);
          setCurrentModuleIndex(0); // Ensure the first module is active
        }
      } catch (err: unknown) {
        console.error("Error fetching learning data:", err);
        setError("Failed to load learning content. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    if (topic) fetchLearningData();
  }, [topic, fetchAndDisplayModuleContent]); // Add fetchAndDisplayModuleContent to dependencies

  // Effect to update displayed content when currentModuleIndex changes
  useEffect(() => {
    if (modules.length > 0 && modules[currentModuleIndex]) {
      fetchAndDisplayModuleContent(modules[currentModuleIndex]);
      window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top when module changes
    }
  }, [currentModuleIndex, modules, fetchAndDisplayModuleContent]);

  const handleModuleComplete = async (moduleId: string) => {
    try {
      const token = localStorage.getItem("token");
      await api.post(
        `/api/learn/complete-module`,
        { topic, moduleId },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      // Update local state to reflect completion
      setModules((prev) =>
        prev.map((m) => (m.id === moduleId ? { ...m, completed: true } : m))
      );

      // Recalculate progress
      const updatedModules = modules.map((m) =>
        m.id === moduleId ? { ...m, completed: true } : m
      );
      const completedCount = updatedModules.filter((m) => m.completed).length;
      setTotalProgress(Math.round((completedCount / modules.length) * 100));
    } catch (err) {
      console.error("Error marking module as complete:", err);
    }
  };

  const toggleModuleExpansion = (index: number) => {
    const newExpanded = new Set(expandedModules);
    if (newExpanded.has(index)) newExpanded.delete(index);
    else newExpanded.add(index);
    setExpandedModules(newExpanded);
  };

  const downloadMaterial = async (moduleId: string, title: string) => {
    setIsDownloading((prev) => ({ ...prev, [moduleId]: true })); // Set loading true for this module
    try {
      const token = localStorage.getItem("token");
      const response = await api.get(
        `/api/learn/download/${encodeURIComponent(topic!)}/${moduleId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
          responseType: "blob", // Important for binary data like PDF
        }
      );

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `${title.replace(/\s+/g, "_")}.pdf`);
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url); // Clean up the URL object
    } catch (err) {
      console.error("Error downloading material:", err);
      alert("Failed to download PDF. Please try again.");
    } finally {
      setIsDownloading((prev) => ({ ...prev, [moduleId]: false })); // Set loading false for this module
    }
  };

  if (loading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
      >
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 text-center transition-colors">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
            Loading Content
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Preparing learning material for {topic}...
          </p>
        </div>
      </motion.div>
    );
  }

  if (error) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 px-4 py-8 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
      >
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => navigate("/dashboard")}
            className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 transition-colors mb-8"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Dashboard</span>
          </button>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 text-center transition-colors">
            <div className="bg-red-100 dark:bg-red-900 p-4 rounded-full w-fit mx-auto mb-6">
              <BookOpen className="h-12 w-12 text-red-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Content Loading Failed
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mb-6">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </motion.div>
    );
  }

  const currentModule = modules[currentModuleIndex];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 transition-colors duration-500"
    >
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 transition-colors">
        <div className="max-w-6xl mx-auto px-2 md:px-4 py-2 md:py-4">
          <div className="flex items-center justify-between gap-1 sm:gap-0">
            <button
              onClick={() => navigate("/dashboard")}
              className="flex items-center space-x-1 sm:space-x-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 transition-colors text-xs sm:text-base"
            >
              <ArrowLeft className="h-4 sm:h-5 w-4 sm:w-5" />
              <span className="hidden md:inline">Back to Dashboard</span>
            </button>

            <div className="hidden md:block">
              <div className="flex items-center space-x-1 sm:space-x-2 bg-gray-50 shadow-md text-gray-700 dark:bg-gray-700 dark:text-gray-300 rounded-lg p-1 text-xs sm:text-sm">
                <button
                  onClick={() => {
                    if (fontSize === "xl") setFontSize("lg");
                    else if (fontSize === "lg") setFontSize("base");
                    else if (fontSize === "base") setFontSize("sm");
                  }}
                  disabled={fontSize === "sm"}
                  className="p-1 rounded-md hover:bg-white hover:bg-opacity-20 disabled:opacity-50"
                  aria-label="Decrease font size"
                >
                  <Minus className="h-3 sm:h-5 w-3 sm:w-5" />
                </button>
                <span className="text-xs w-6 text-center">{fontSize}</span>
                <button
                  onClick={() => {
                    if (fontSize === "sm") setFontSize("base");
                    else if (fontSize === "base") setFontSize("lg");
                    else if (fontSize === "lg") setFontSize("xl");
                  }}
                  disabled={fontSize === "xl"}
                  className="p-1 rounded-md hover:bg-white hover:bg-opacity-20 disabled:opacity-50"
                  aria-label="Increase font size"
                >
                  <Plus className="h-3 sm:h-5 w-3 sm:w-5" />
                </button>
              </div>
            </div>

            <div className="md:hidden">
              <ThemeToggle />
            </div>

            <div className="flex items-center space-x-2 sm:space-x-3 sm:w-auto justify-center sm:justify-end">
              <div className="flex bg-blue-600 p-2 rounded-xl">
                <BookOpen className="h-5 sm:h-6 w-5 sm:w-6 text-white" />
              </div>
              <div className="text-center md:text-left">
                <h1 className="text-sm sm:text-xl font-bold text-gray-900 dark:text-gray-100 truncate max-w-[150px] sm:max-w-none overflow-x-hidden">
                  Learning: {topic}
                </h1>
                <div className="flex items-center justify-start space-x-1 sm:space-x-2 mt-1">
                  <div className="w-16 sm:w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-green-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${totalProgress}%` }}
                    />
                  </div>
                  <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                    {totalProgress}% Complete
                  </span>
                </div>
              </div>
            </div>

            <div className="md:hidden">
              <div className="flex items-center space-x-1 sm:space-x-2 bg-gray-50 shadow-md text-gray-700 dark:bg-gray-700 dark:text-gray-300 rounded-lg p-1 text-xs sm:text-sm">
                <button
                  onClick={() => {
                    if (fontSize === "xl") setFontSize("lg");
                    else if (fontSize === "lg") setFontSize("base");
                    else if (fontSize === "base") setFontSize("sm");
                  }}
                  disabled={fontSize === "sm"}
                  className="p-1 rounded-md hover:bg-white hover:bg-opacity-20 disabled:opacity-50"
                  aria-label="Decrease font size"
                >
                  <Minus className="h-3 sm:h-5 w-3 sm:w-5" />
                </button>
                <button
                  onClick={() => {
                    if (fontSize === "sm") setFontSize("base");
                    else if (fontSize === "base") setFontSize("lg");
                    else if (fontSize === "lg") setFontSize("xl");
                  }}
                  disabled={fontSize === "xl"}
                  className="p-1 rounded-md hover:bg-white hover:bg-opacity-20 disabled:opacity-50"
                  aria-label="Increase font size"
                >
                  <Plus className="h-3 sm:h-5 w-3 sm:w-5" />
                </button>
              </div>
            </div>

            <div className="hidden md:block">
              <ThemeToggle />
            </div>

            <button
              onClick={() => navigate(`/quiz/${encodeURIComponent(topic!)}`)}
              className="hidden sm:flex flex items-center space-x-1 sm:space-x-2 bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white text-xs sm:text-base px-3 py-2 rounded-lg transition-colors"
            >
              <Trophy className="h-3 sm:h-4 w-3 sm:w-4" />
              <span>Take Quiz</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-2 md:px-4 py-8">
        {/* Mobile Module Dropdown */}
        <div className="sm:hidden mb-6 relative z-20">
          <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
            <BookMarked className="h-5 w-5 mr-2 text-blue-600" />
            Learning Modules
          </h3>
          <Listbox
            value={currentModuleIndex}
            onChange={(index) => {
              setCurrentModuleIndex(index);
              fetchAndDisplayModuleContent(modules[index]);
            }}
          >
            {({ open }) => (
              <>
                <Listbox.Button className="relative w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-3 shadow-md flex items-center justify-between text-sm">
                  <span className="flex items-center space-x-2">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center scroll-y-auto overflow-y-scroll bg-red ${
                        modules[currentModuleIndex]?.completed
                          ? "bg-green-100 text-green-600"
                          : "bg-white bg-opacity-20 text-white"
                      }`}
                    >
                      {modules[currentModuleIndex]?.completed ? (
                        <CheckCircle className="h-3 w-3" />
                      ) : (
                        <span className="text-xs">
                          {currentModuleIndex + 1}
                        </span>
                      )}
                    </div>
                    <span className="font-semibold truncate">
                      {modules[currentModuleIndex]?.title}
                    </span>
                  </span>
                  <ChevronDown className="h-4 w-4 text-white" />
                </Listbox.Button>

                <Transition
                  show={open}
                  enter="transition ease-out duration-100"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  {/* Styled Listbox.Options to mimic desktop sidebar */}
                  <Listbox.Options className="overflow-y-scroll absolute mt-2 w-full h-[400%] rounded-2xl shadow-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 overflow-hidden p-6 space-y-3">
                    {modules.map((module, index) => (
                      // Styled Listbox.Option to mimic desktop sidebar items
                      <Listbox.Option
                        key={module.id}
                        value={index}
                        className={({ active }) =>
                          `cursor-pointer select-none w-full p-3 flex items-center justify-between rounded-lg transition-colors border
                           ${
                             active
                               ? "bg-blue-50 dark:bg-gray-700 border-blue-200 dark:border-gray-600"
                               : "hover:bg-gray-50 dark:hover:bg-gray-700 border-gray-200 dark:border-gray-700"
                           }
                           ${
                             currentModuleIndex === index
                               ? "bg-blue-100 dark:bg-gray-700 border-blue-300 dark:border-gray-600"
                               : "" // No additional border for non-active, non-hovered
                           }`
                        }
                      >
                        <div className="flex items-center space-x-3">
                          <div
                            className={`w-6 h-6 rounded-full flex items-center justify-center ${
                              module.completed
                                ? "bg-green-100 text-green-600"
                                : "bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500"
                            }`}
                          >
                            {module.completed ? (
                              <CheckCircle className="h-4 w-4" />
                            ) : (
                              <span className="text-xs font-medium">
                                {index + 1}
                              </span>
                            )}
                          </div>
                          <div>
                            <p className="font-medium text-sm text-gray-900 dark:text-gray-100">
                              {module.title}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center">
                              <Clock className="h-3 w-3 mr-1" />
                              {module.duration}
                            </p>
                          </div>
                        </div>
                        {/* Optional: Add a subtle indicator for current module if desired */}
                        {currentModuleIndex === index && (
                          <span className="text-blue-600 dark:text-blue-400 text-xs ml-2">
                            Active
                          </span>
                        )}
                        {module.downloadUrl && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation(); // Prevent Listbox.Option from closing when clicking download
                              downloadMaterial(module.id, module.title);
                            }}
                            className="flex-shrink-0 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 p-2 rounded-full transition-colors"
                            title="Download material"
                            disabled={isDownloading[module.id]}
                          >
                            {isDownloading[module.id] ? (
                              <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                            ) : (
                              <Download className="h-4 w-4" />
                            )}
                          </button>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </>
            )}
          </Listbox>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Learning Modules Sidebar */}
          <div className="hidden sm:block w-[95vw] md:w-full lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sticky top-8 transition-colors">
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
                <BookMarked className="h-5 w-5 mr-2 text-blue-600" />
                Learning Modules
              </h3>

              <div className="space-y-3">
                {modules.map((module, index) => (
                  <div
                    key={module.id}
                    className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden transition-colors"
                  >
                    <button
                      onClick={() => toggleModuleExpansion(index)}
                      className={`w-full p-3 text-left flex items-center justify-between transition-colors ${
                        currentModuleIndex === index
                          ? "bg-blue-50 dark:bg-gray-700 border-blue-200 dark:border-gray-600"
                          : "hover:bg-gray-50 dark:hover:bg-gray-700"
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center ${
                            module.completed
                              ? "bg-green-100 text-green-600"
                              : "bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500"
                          }`}
                        >
                          {module.completed ? (
                            <CheckCircle className="h-4 w-4" />
                          ) : (
                            <span className="text-xs font-medium">
                              {index + 1}
                            </span>
                          )}
                        </div>
                        <div>
                          <p className="font-medium text-sm text-gray-900 dark:text-gray-100">
                            {module.title}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {module.duration}
                          </p>
                        </div>
                      </div>
                      {expandedModules.has(index) ? (
                        <ChevronDown className="h-4 w-4 text-gray-400 dark:text-gray-300" />
                      ) : (
                        <ChevronRight className="h-4 w-4 text-gray-400 dark:text-gray-300" />
                      )}
                    </button>

                    <AnimatePresence>
                      {expandedModules.has(index) && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="p-3 bg-gray-50 dark:bg-gray-700 border-t border-gray-200 dark:border-gray-600 transition-colors"
                        >
                          <div className="flex items-center space-x-2 mb-2">
                            {module.type === "video" && (
                              <Video className="h-4 w-4 text-purple-600" />
                            )}
                            {module.type === "text" && (
                              <FileText className="h-4 w-4 text-blue-600" />
                            )}
                            {module.type === "interactive" && (
                              <Play className="h-4 w-4 text-green-600" />
                            )}
                            <span className="text-xs text-gray-600 dark:text-gray-300 capitalize">
                              {module.type}
                            </span>
                          </div>
                          <div className="flex space-x-2">
                            <button
                              onClick={() => {
                                setCurrentModuleIndex(index);
                                // Ensure this module's content is displayed immediately
                                fetchAndDisplayModuleContent(modules[index]);
                              }}
                              className="flex-1 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white text-xs py-2 px-3 rounded transition-colors"
                            >
                              Study
                            </button>
                            {module.downloadUrl && (
                              <button
                                onClick={() =>
                                  downloadMaterial(module.id, module.title)
                                }
                                className="bg-gray-600 hover:bg-gray-700 dark:bg-gray-500 dark:hover:bg-gray-600 text-white text-xs py-2 px-3 rounded transition-colors"
                              >
                                <Download className="h-3 w-3" />
                              </button>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="w-[95vw] md:w-full lg:col-span-3">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transition-colors">
              {/* Content Header */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-4 md:px-8 py-3 md:py-6 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center md:space-x-4 space-x-2">
                    <div className="bg-white bg-opacity-20 p-3 rounded-xl">
                      <BookOpen className="h-6 md:h-8 w-6 md:w-8 text-white" />
                    </div>
                    <div>
                      <h1 className="text-lg md:text-3xl font-bold">
                        {currentModule?.title || topic}
                      </h1>
                      <p className="text-sm md:text-base text-blue-100 md:mt-1">
                        {currentModule?.type === "video"
                          ? "Video Content"
                          : currentModule?.type === "text"
                          ? "Reading Material"
                          : currentModule?.type === "interactive"
                          ? "Interactive Learning"
                          : "Comprehensive Learning Guide"}
                      </p>
                    </div>
                  </div>

                  {currentModule && !currentModule.completed && (
                    <button
                      onClick={() => handleModuleComplete(currentModule.id)}
                      className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white md:px-4 px-2 py-2 rounded-lg transition-colors flex items-center space-x-2"
                    >
                      <CheckCircle className="h-4 w-4" />
                      <span className="hidden md:inline">Mark Complete</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Content Body - Rendered Markdown */}
              <div className="p-4 md:p-8">
                <div
                  className={`prose ${
                    fontSize === "sm"
                      ? "prose-sm"
                      : fontSize === "base"
                      ? "prose-base"
                      : fontSize === "lg"
                      ? "prose-lg"
                      : "prose-xl"
                  } dark:prose-invert max-w-none text-gray-800 dark:text-gray-100 transition-all duration-200`}
                >
                  <div
                    className="leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: renderedContent,
                    }}
                  />
                </div>

                {/* Module Navigation */}
                {modules.length > 0 && (
                  <div className="mt-12 flex items-center justify-between p-6 bg-gray-50 dark:bg-gray-700 rounded-xl transition-colors">
                    <button
                      onClick={() =>
                        setCurrentModuleIndex(
                          Math.max(0, currentModuleIndex - 1)
                        )
                      }
                      disabled={currentModuleIndex === 0}
                      className="flex items-center space-x-2 bg-gray-600 hover:bg-gray-700 dark:bg-gray-500 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      <ChevronLeft className="h-4 w-4" />
                      <span className="hidden md:inline">Previous</span>
                    </button>

                    <span className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                      Module {currentModuleIndex + 1} of {modules.length}
                    </span>

                    <button
                      onClick={() =>
                        setCurrentModuleIndex(
                          Math.min(modules.length - 1, currentModuleIndex + 1)
                        )
                      }
                      disabled={currentModuleIndex === modules.length - 1}
                      className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      <span className="hidden md:inline">Next</span>
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                )}

                {/* Action Section */}
                <div className="no-scrollbar mt-12 p-2 md:p-4 bg-gradient-to-r from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-800 rounded-xl border border-green-200 dark:border-green-700 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex justify-between items-center space-x-6">
                      <div className="bg-green-100 dark:bg-green-800 p-3 rounded-xl">
                        <CheckCircle className="h-6 md:h-8 W-6 md:w-8 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-sm md:text-xl font-semibold text-gray-900 dark:text-white">
                          Ready to Test Your Knowledge?
                        </h3>
                        <p className="text-sm hidden md:block text-gray-600 dark:text-gray-300 mt-1">
                          Take the quiz to demonstrate your understanding and
                          unlock new topics.
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() =>
                        navigate(`/quiz/${encodeURIComponent(topic!)}`)
                      }
                      className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white font-semibold py-2 md:py-3 px-3 md:px-6 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg"
                    >
                      <Play className="h-5 w-5" />
                      <span className="text-xs md:text-base">Start Quiz</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LearnPage;
