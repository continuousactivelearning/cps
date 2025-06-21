import React, { useState, useRef, useEffect } from "react";
import {
  Brain,
  Network,
  Clock,
  CheckCircle,
  AlertCircle,
  User,
  RotateCcw,
  Upload,
  Youtube,
  FileText,
  Image,
  Loader,
  Plus,
  X,
  ExternalLink,
  Search,
} from "lucide-react";
import { TOPIC_QUIZ_DATA } from "./data/quizData";
import type {
  Topic,
  UserProfile,
  CustomContent,
  Quiz,
  QuizQuestion,
  QuizState,
} from "../interface/types";
import TopicCard from "./TopicCard";
import QuizModal from "./QuizModal";
import QuizResults from "./QuizResults";
import UserStats from "./UserStats";
import MobileNav from "./MobileNav";
import UserProfileDropdown from "./UserProfileDropdown";
import { submitQuiz } from "../services/progressUpdate";
import { mutate } from "swr";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";

import ConceptAnalyzer from "./ConceptAnalyzer";
import { getDetails, updateDetails } from "../services/detailService";
import api from "../services/api";

const MainPage: React.FC = () => {
  // const [selectedTopic, setSelectedTopic] = useState<string>('');
  // const [showProfile, setShowProfile] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [uploadType, setUploadType] = useState<"youtube" | "pdf" | "image">(
    "youtube"
  );
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [customContents, setCustomContents] = useState<CustomContent[]>([]);
  const [generatedQuizzes, setGeneratedQuizzes] = useState<Quiz[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [activeTab, setActiveTab] = useState<"topics" | "custom">("topics");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [quizHistory, setQuizHistory] = useState<QuizState[]>([]);
  const [showQuizModal, setShowQuizModal] = useState(false);
  const [currentQuiz, setCurrentQuiz] = useState<QuizState | null>(null);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [reviewQuiz, setReviewQuiz] = useState<QuizState | null>(null);

  const [searchQuery, setSearchQuery] = useState("");
  const [topics, setTopics] = useState<Topic[]>([]);

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const res = await api.get("/user-progress/");
        const data = res.data;

        const fixed = data.map((topic: Topic) => ({
          ...topic,
          lastAttempt: topic.lastAttempt
            ? new Date(topic.lastAttempt)
            : undefined,
        }));

        setTopics(fixed);
      } catch (err) {
        console.error("Failed to fetch topics:", err);
        setTopics([]);
      }
    };
    fetchTopics();
  }, []);

  const [userProfile, setUserProfile] = useState<UserProfile>({
    name: "",
    masteredTopics: topics
      .filter((t) => t.status === "mastered")
      .map((t) => t.name).length,
    totalScore: 0,
    streak: 0,
  });
  useEffect(() => {
  const setstreak = async () => {
    await api.get("/me/streak");
    mutate("/me");
  };
  setstreak();
}, []); 
  useEffect(() => {
    const profile = async () => {
      try {
        const details = await getDetails();
        setUserProfile((prev) => ({
          ...prev,
          name: details.name,
          masteredTopics: details.masteredTopics ? details.masteredTopics : 0,
          totalScore: details.totalScore ? details.totalScore : 0,
          streak: details.streak ? details.streak : 0,
        }));
      } catch (error) {
        console.log("Error fetching details in mainpage ", error);
      }
    };
    profile();
  }, []);
  useEffect(() => {
    const updateMasteredTopics = async () => {
      try {
        await updateDetails({
          item: "masteredTopics",
          value: topics
            .filter((t) => t.status === "mastered")
            .map((t) => t.name).length,
        });
        setUserProfile((prev) => ({
          ...prev,
          masteredTopics: topics
            .filter((t) => t.status === "mastered")
            .map((t) => t.name).length,
        }));
      } catch (error) {
        console.log("Error updating mastered topics: ", error);
      }
    };
    updateMasteredTopics();
    mutate("/me");
    const updateAverageScore = async () => {
      const averageScore =
        topics.reduce((acc, topic) => {
          if (topic.score && topic.totalQuestions) {
            return acc + (topic.score / topic.totalQuestions) * 100;
          }
          return acc;
        }, 0) / topics.filter((t) => t.score).length || 0;
      try {
        await updateDetails({
          item: "totalScore",
          value: Math.round(averageScore * 100) / 100,
        });
        setUserProfile((prev) => ({
          ...prev,
          totalScore: Math.round(averageScore * 100) / 100,
        }));
      } catch (error) {
        console.log("Error updating average score: ", error);
      }
    };
    updateAverageScore();
    mutate("/me");
  }, [topics]);
  // Timer effect for quiz
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (
      currentQuiz &&
      !currentQuiz.isCompleted &&
      currentQuiz.timeRemaining > 0
    ) {
      interval = setInterval(() => {
        setCurrentQuiz((prev) => {
          if (!prev || prev.isCompleted) return prev;

          const newTimeRemaining = prev.timeRemaining - 1;

          if (newTimeRemaining <= 0) {
            completeQuiz();
            return { ...prev, timeRemaining: 0 };
          }

          return { ...prev, timeRemaining: newTimeRemaining };
        });
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [currentQuiz?.isCompleted, currentQuiz?.timeRemaining]);

  const getTopicStatus = (topic: Topic) => {
    const allPrereqsMastered = topic.prerequisites.every(
      (prereq) => topics.find((t) => t.id === prereq)?.status === "mastered"
    );

    if (topic.status === "mastered") return "mastered";
    if (topic.status === "in-progress") return "in-progress";
    if (allPrereqsMastered || topic.prerequisites.length === 0) return "ready";
    return "locked";
  };

  // Generate quiz questions from extracted text
  const generateQuestionsFromText = (
    text: string,
    fileName: string
  ): QuizQuestion[] => {
    const questions: QuizQuestion[] = [];

    if (text.toLowerCase().includes("array")) {
      questions.push({
        id: "1",
        question:
          "Based on the content, what is the time complexity of accessing an element in an array?",
        options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
        correctAnswer: 0,
        explanation:
          "Arrays provide constant time O(1) access because elements are stored in contiguous memory locations.",
      });
    }

    if (text.toLowerCase().includes("linked list")) {
      questions.push({
        id: "2",
        question:
          "What is the main advantage of linked lists mentioned in the content?",
        options: [
          "Faster access",
          "Dynamic memory allocation",
          "Less memory usage",
          "Better cache performance",
        ],
        correctAnswer: 1,
        explanation:
          "Linked lists provide dynamic memory allocation, allowing the data structure to grow and shrink at runtime.",
      });
    }

    if (text.toLowerCase().includes("stack")) {
      questions.push({
        id: "3",
        question: "According to the content, which principle do stacks follow?",
        options: ["FIFO", "LIFO", "Random access", "Priority based"],
        correctAnswer: 1,
        explanation:
          "Stacks follow the LIFO (Last In First Out) principle where the last element added is the first one to be removed.",
      });
    }

    if (text.toLowerCase().includes("tree")) {
      questions.push({
        id: "4",
        question:
          "What type of data structure are trees according to the content?",
        options: ["Linear", "Hierarchical", "Circular", "Sequential"],
        correctAnswer: 1,
        explanation:
          "Trees are hierarchical data structures with parent-child relationships between nodes.",
      });
    }

    if (text.toLowerCase().includes("binary search")) {
      questions.push({
        id: "5",
        question:
          "What is the time complexity of binary search mentioned in the content?",
        options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
        correctAnswer: 1,
        explanation:
          "Binary search has O(log n) time complexity as it divides the search space in half with each comparison.",
      });
    }

    if (questions.length === 0) {
      questions.push({
        id: "1",
        question: `Based on the uploaded content (${fileName}), which is most important for algorithm analysis?`,
        options: [
          "Code length",
          "Time complexity",
          "Variable names",
          "Comments",
        ],
        correctAnswer: 1,
        explanation:
          "Time complexity is crucial for algorithm analysis as it determines how the algorithm scales with input size.",
      });
    }

    return questions.slice(0, 5);
  };

  const processFileContent = (file: File): Promise<string> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (file.type.includes("pdf")) {
          resolve(`
            Data Structures and Algorithms Concepts...
          `);
        } else {
          resolve(`
            Algorithm Complexity Analysis...
          `);
        }
      }, 2000);
    });
  };

  const handleYouTubeUpload = async () => {
    if (!youtubeUrl.trim()) return;

    setIsProcessing(true);
    const newContent: CustomContent = {
      id: Date.now().toString(),
      type: "youtube",
      title: `YouTube Video - ${new Date().toLocaleDateString()}`,
      url: youtubeUrl,
      uploadDate: new Date().toISOString(),
      status: "processing",
    };

    setCustomContents((prev) => [...prev, newContent]);
    setYoutubeUrl("");
    setShowUploadModal(false);

    setTimeout(() => {
      const extractedText = `Data Structures and Algorithms Tutorial...`;
      setCustomContents((prev) =>
        prev.map((content) =>
          content.id === newContent.id
            ? {
                ...content,
                status: "ready",
                quizGenerated: true,
                extractedText,
              }
            : content
        )
      );

      const questions = generateQuestionsFromText(
        extractedText,
        "YouTube Video"
      );
      const sampleQuiz: Quiz = {
        id: `quiz-${newContent.id}`,
        title: "AI Generated Quiz from YouTube Video",
        contentId: newContent.id,
        questions,
      };

      setGeneratedQuizzes((prev) => [...prev, sampleQuiz]);
      setIsProcessing(false);
    }, 3000);
  };

  const handleFileUpload = async (files: FileList | null) => {
    if (!files || files.length === 0) return;

    const file = files[0];
    const fileType = file.type.includes("pdf") ? "pdf" : "image";
    //setUploadedFile(file.type.includes('pdf') ? file : null);

    setIsProcessing(true);
    const newContent: CustomContent = {
      id: Date.now().toString(),
      type: fileType,
      title: file.name,
      fileName: file.name,
      uploadDate: new Date().toISOString(),
      status: "processing",
    };

    setCustomContents((prev) => [...prev, newContent]);
    //setShowUploadModal(false);

    try {
      const extractedText = await processFileContent(file);

      setTimeout(() => {
        setCustomContents((prev) =>
          prev.map((content) =>
            content.id === newContent.id
              ? {
                  ...content,
                  status: "ready",
                  quizGenerated: true,
                  extractedText,
                }
              : content
          )
        );

        const questions = generateQuestionsFromText(extractedText, file.name);
        const sampleQuiz: Quiz = {
          id: `quiz-${newContent.id}`,
          title: `AI Generated Quiz from ${file.name}`,
          contentId: newContent.id,
          questions,
        };

        setGeneratedQuizzes((prev) => [...prev, sampleQuiz]);
        setIsProcessing(false);
      }, 1000);
    } catch (error) {
      setCustomContents((prev) =>
        prev.map((content) =>
          content.id === newContent.id
            ? { ...content, status: "failed" }
            : content
        )
      );
      setIsProcessing(false);
    }
  };

  const removeCustomContent = (id: string) => {
    setCustomContents((prev) => prev.filter((content) => content.id !== id));
    setGeneratedQuizzes((prev) => prev.filter((quiz) => quiz.contentId !== id));
  };

  const getContentIcon = (type: string) => {
    switch (type) {
      case "youtube":
        return <Youtube className="w-5 h-5 text-red-500" />;
      case "pdf":
        return <FileText className="w-5 h-5 text-red-500" />;
      case "image":
        return <Image className="w-5 h-5 text-blue-500" />;
      default:
        return <FileText className="w-5 h-5 text-gray-500" />;
    }
  };

  const generateQuizForTopic = (topicId: string): QuizQuestion[] => {
    const topicData = TOPIC_QUIZ_DATA[topicId as keyof typeof TOPIC_QUIZ_DATA];
    if (!topicData) {
      return [
        {
          id: "1",
          question: `What is a key concept in ${
            topics.find((t) => t.id === topicId)?.name
          }?`,
          options: ["Concept A", "Concept B", "Concept C", "All of the above"],
          correctAnswer: 3,
          explanation:
            "This is a placeholder question. More questions will be added for this topic.",
        },
      ];
    }

    const shuffledQuestions = [...topicData.questions].sort(
      () => Math.random() - 0.5
    );
    return shuffledQuestions.slice(0, 5);
  };

  const startQuizForTopic = (topicId: string) => {
    const topic = topics.find((t) => t.id === topicId);
    if (!topic) return;

    // Update topic status to in-progress if it's the first time
    if (
      topic.status === "not-started" ||
      (topic.status === "ready" && !topic.attempts)
    ) {
      setTopics((prev) =>
        prev.map((t) =>
          t.id === topicId
            ? {
                ...t,
                status: "in-progress",
                totalQuestions: 5,
                attempts: 0,
                bestScore: 0,
                score: 0,
              }
            : t
        )
      );
    }

    const questions = generateQuizForTopic(topicId);
    const timeLimit = questions.length * 60;
    const attemptNumber = (topic.attempts || 0) + 1;

    const newQuiz: QuizState = {
      topicId,
      questions,
      currentQuestionIndex: 0,
      userAnswers: new Array(questions.length).fill(undefined),
      score: 0,
      isCompleted: false,
      timeStarted: new Date(),
      timeLimit,
      timeRemaining: timeLimit,
      attempt: attemptNumber,
    };

    setCurrentQuiz(newQuiz);
    setShowQuizModal(true);
  };

  const startCustomQuiz = (contentId: string) => {
    const quiz = generatedQuizzes.find((q) => q.contentId === contentId);
    if (!quiz) return;

    const timeLimit = quiz.questions.length * 60;

    const newQuiz: QuizState = {
      contentId,
      questions: quiz.questions,
      currentQuestionIndex: 0,
      userAnswers: new Array(quiz.questions.length).fill(undefined),
      score: 0,
      isCompleted: false,
      timeStarted: new Date(),
      timeLimit,
      timeRemaining: timeLimit,
    };

    setCurrentQuiz(newQuiz);
    setShowQuizModal(true);
  };

  const handleQuizAnswer = (answerIndex: number) => {
    if (!currentQuiz || currentQuiz.isCompleted) return;

    const updatedAnswers = [...currentQuiz.userAnswers];
    updatedAnswers[currentQuiz.currentQuestionIndex] = answerIndex;

    setCurrentQuiz({
      ...currentQuiz,
      userAnswers: updatedAnswers,
    });
  };

  const nextQuizQuestion = () => {
    if (!currentQuiz) return;

    if (currentQuiz.currentQuestionIndex < currentQuiz.questions.length - 1) {
      setCurrentQuiz({
        ...currentQuiz,
        currentQuestionIndex: currentQuiz.currentQuestionIndex + 1,
      });
    } else {
      completeQuiz();
    }
  };

  const previousQuizQuestion = () => {
    if (!currentQuiz || currentQuiz.currentQuestionIndex === 0) return;

    setCurrentQuiz({
      ...currentQuiz,
      currentQuestionIndex: currentQuiz.currentQuestionIndex - 1,
    });
  };

  const completeQuiz = async () => {
    if (!currentQuiz) return;

    let correctAnswers = 0;
    currentQuiz.questions.forEach((question, index) => {
      if (currentQuiz.userAnswers[index] === question.correctAnswer) {
        correctAnswers++;
      }
    });

    const score = Math.round(
      (correctAnswers / currentQuiz.questions.length) * 100
    );
    const completedQuiz: QuizState = {
      ...currentQuiz,
      score,
      isCompleted: true,
      timeCompleted: new Date(),
    };

    setQuizHistory((prev) => [...prev, completedQuiz]);

    // Update topic status and statistics
    //if (completedQuiz.topicId) {
    // setTopics(prev => prev.map(topic => {
    //   if (topic.id === completedQuiz.topicId) {
    //     const newAttempts = (topic.attempts || 0) + 1;
    //     const newBestScore = Math.max(topic.bestScore || 0, score);
    //     const newStatus = score >= 70 ? 'mastered' : 'in-progress';

    //     return {
    //       ...topic,
    //       status: newStatus,
    //       score: correctAnswers,
    //       totalQuestions: 5,
    //       attempts: newAttempts,
    //       bestScore: newBestScore,
    //       lastAttempt: new Date()
    //     };
    //   }
    //   return topic;
    // }));
    const passed = score >= 70;

    if (completedQuiz.topicId) {
      try {
        const updated = await submitQuiz(
          completedQuiz.topicId,
          passed,
          correctAnswers
        );
        const fixed = updated.map((t) => ({
          ...t,
          lastAttempt: t.lastAttempt ? new Date(t.lastAttempt) : undefined,
        }));
        setTopics(fixed);
      } catch (err) {
        console.error("Error submitting quiz:", err);
      }
    }
    // }

    setCurrentQuiz(completedQuiz);
  };

  const closeQuizModal = () => {
    setShowQuizModal(false);
    setCurrentQuiz(null);
  };

  const showTopicReview = (topicId: string) => {
    const topicQuizHistory = quizHistory.filter(
      (quiz) => quiz.topicId === topicId && quiz.isCompleted
    );

    const latestQuiz = topicQuizHistory[topicQuizHistory.length - 1];
    if (latestQuiz) {
      setReviewQuiz(latestQuiz);
      setShowReviewModal(true);
    }
  };

  const retakeQuiz = (topicId: string) => {
    startQuizForTopic(topicId);
  };
  const filteredTopics = topics.filter((topic) =>
    topic.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-2 rounded-lg">
                <Network className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <div>
                <h1 className="text-lg md:text-2xl font-bold text-gray-900">
                  DSA Assessment Hub
                </h1>
                <p className="text-xs md:text-sm text-gray-600">
                  Dependency-Aware Learning System
                </p>
              </div>
            </div>
            <div className="ml-auto">
              <MobileNav
                userProfile={userProfile}
                onUploadClick={() => setShowUploadModal(true)}
                activeTab={activeTab}
                onTabChange={setActiveTab}
                customContents={customContents}
                topics={topics}
              />
            </div>
            <div className="flex items-center space-x-2 md:space-x-4">
              <div className="hidden lg:block">
                <UserProfileDropdown />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-4 md:space-y-8">
            {/* Welcome Section */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-4 md:p-8 text-white">
              <div className="flex items-center space-x-4 mb-4">
                <Brain className="w-8 h-8 md:w-12 md:h-12" />
                <div>
                  <h2 className="text-xl md:text-3xl font-bold">
                    Master Data Structures & Algorithms
                  </h2>
                  <p className="text-indigo-100 mt-2 text-sm md:text-base">
                    Learn step-by-step with our prerequisite-aware assessment
                    system
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="relative group">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black w-5 h-5" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for topics like Arrays, Linked Lists, Trees..."
                    className="w-full pl-12 pr-4 py-2 border bg-white placeholder:text-gray-400 text-black border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-lg"
                  />
                </div>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-4 md:space-x-8">
                <button
                  onClick={() => setActiveTab("topics")}
                  className={`py-2 px-1 border-b-2 font-medium text-sm md:text-base transition-colors ${
                    activeTab === "topics"
                      ? "border-indigo-500 text-indigo-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  Standard Learning Path
                </button>
                <button
                  onClick={() => setActiveTab("custom")}
                  className={`py-2 px-1 border-b-2 font-medium text-sm md:text-base transition-colors ${
                    activeTab === "custom"
                      ? "border-indigo-500 text-indigo-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  Custom Content Quizzes
                  {customContents.length > 0 && (
                    <span className="ml-2 bg-indigo-100 text-indigo-600 py-0.5 px-2 rounded-full text-xs">
                      {customContents.length}
                    </span>
                  )}
                </button>
              </nav>
            </div>

            {/* Content based on active tab */}
            {activeTab === "topics" && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                    Learning Path
                  </h3>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Network className="w-4 h-4" />
                    <span className="hidden md:inline">
                      Prerequisite-based progression
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  {filteredTopics.map((topic) => {
                    const status = getTopicStatus(topic);
                    const hasQuizHistory = quizHistory.some(
                      (quiz) => quiz.topicId === topic.id && quiz.isCompleted
                    );
                    return (
                      <TopicCard
                        key={topic.id}
                        topic={topic}
                        status={status}
                        onStartQuiz={startQuizForTopic}
                        onReview={showTopicReview}
                        onRetake={retakeQuiz}
                        hasQuizHistory={hasQuizHistory}
                        topics={topics}
                      />
                    );
                  })}
                </div>
              </div>
            )}

            {activeTab === "custom" && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                    Custom Content Quizzes
                  </h3>
                  <button
                    onClick={() => setShowUploadModal(true)}
                    className="flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white px-3 md:px-4 py-2 rounded-lg transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                    <span className="text-sm md:text-base">Add Content</span>
                  </button>
                </div>

                {customContents.length === 0 ? (
                  <div className="text-center py-8 md:py-12 bg-gray-50 rounded-xl">
                    <Upload className="w-12 h-12 md:w-16 md:h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-base md:text-lg font-medium text-gray-900 mb-2">
                      No custom content yet
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm md:text-base px-4">
                      Upload YouTube videos, PDFs, or images to generate
                      AI-powered quizzes
                    </p>
                    <button
                      onClick={() => setShowUploadModal(true)}
                      className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-medium transition-colors text-sm md:text-base"
                    >
                      Upload Your First Content
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 gap-4">
                    {customContents.map((content) => (
                      <div
                        key={content.id}
                        className="bg-white p-4 md:p-6 rounded-xl border-2 border-gray-200 hover:border-indigo-200 transition-colors"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            {getContentIcon(content.type)}
                            <div>
                              <h4 className="font-semibold text-gray-900 truncate text-sm md:text-base">
                                {content.title}
                              </h4>
                              <p className="text-xs md:text-sm text-gray-600">
                                {content.type === "youtube"
                                  ? "YouTube Video"
                                  : content.type.toUpperCase()}
                              </p>
                            </div>
                          </div>
                          <button
                            onClick={() => removeCustomContent(content.id)}
                            className="text-gray-400 hover:text-red-500 transition-colors"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>

                        {content.url && (
                          <div className="mb-4">
                            <a
                              href={content.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:text-blue-800 text-sm flex items-center space-x-1"
                            >
                              <ExternalLink className="w-3 h-3" />
                              <span className="truncate">
                                View original content
                              </span>
                            </a>
                          </div>
                        )}

                        <div className="mb-4">
                          <div
                            className={`inline-flex items-center px-2 py-1 rounded text-xs ${
                              content.status === "ready"
                                ? "bg-green-100 text-green-800"
                                : content.status === "processing"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-red-100 text-red-800"
                            }`}
                          >
                            {content.status === "processing" && (
                              <Loader className="w-3 h-3 mr-1 animate-spin" />
                            )}
                            {content.status === "ready" && (
                              <CheckCircle className="w-3 h-3 mr-1" />
                            )}
                            {content.status === "failed" && (
                              <AlertCircle className="w-3 h-3 mr-1" />
                            )}
                            {content.status === "processing"
                              ? "AI Analyzing..."
                              : content.status === "ready"
                              ? "Quiz Ready"
                              : "Processing Failed"}
                          </div>
                        </div>

                        <div className="text-xs text-gray-500 mb-4">
                          Uploaded:{" "}
                          {new Date(content.uploadDate).toLocaleDateString()}
                        </div>

                        {content.status === "ready" &&
                          content.quizGenerated && (
                            <button
                              onClick={() => startCustomQuiz(content.id)}
                              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg text-sm font-medium transition-colors"
                            >
                              Take AI Generated Quiz
                            </button>
                          )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="hidden lg:block space-y-6">
            {/* Processing Status */}
            {isProcessing && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                <div className="flex items-center space-x-3">
                  <Loader className="w-5 h-5 text-yellow-600 animate-spin" />
                  <div>
                    <h4 className="font-medium text-yellow-800">
                      Processing Content
                    </h4>
                    <p className="text-sm text-yellow-700">
                      AI is analyzing your content to generate a quiz...
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* User Stats */}
            <UserStats
              customContents={customContents}
              userProfile={userProfile}
              topics={topics}
            />

            {/* User Profile Card */}
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900 flex items-center">
                  <User className="w-5 h-5 mr-2 text-indigo-600" />
                  Recent Activity
                </h3>
                <button className="text-gray-400 hover:text-gray-600">
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
              <div className="space-y-3">
                {topics
                  .filter((t) => t.lastAttempt)
                  .sort(
                    (a, b) =>
                      new Date(b.lastAttempt!).getTime() -
                      new Date(a.lastAttempt!).getTime()
                  )
                  .slice(0, 5)
                  .map((topic) => (
                    <div
                      key={topic.id}
                      className="flex items-center justify-between text-sm"
                    >
                      <div className="flex items-center space-x-2">
                        {topic.status === "mastered" ? (
                          <CheckCircle className="w-4 h-4 text-green-500" />
                        ) : (
                          <Clock className="w-4 h-4 text-yellow-500" />
                        )}
                        <span className="text-gray-700">{topic.name}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-500">
                          {topic.lastAttempt instanceof Date
                            ? topic.lastAttempt.toLocaleDateString()
                            : "N/A"}
                        </div>
                        <div className="text-xs font-medium text-gray-600">
                          {((topic.bestScore || topic.score || 0) /
                            (topic.totalQuestions || 1)) *
                            100}
                          % best
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Upload Modal */}
      <Dialog open={showUploadModal} onOpenChange={setShowUploadModal}>
        <DialogContent className="max-w-md w-full max-h-[90vh] overflow-y-auto p-6 md:p-8">
          <DialogHeader className="mb-6">
            <DialogTitle className="text-xl md:text-2xl font-bold text-gray-900">
              Create Custom Quiz
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            {/* Content Type Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Choose Content Type
              </label>
              <div className="grid grid-cols-3 gap-3">
                <button
                  onClick={() => setUploadType("youtube")}
                  className={`p-3 md:p-4 rounded-lg border-2 transition-all ${
                    uploadType === "youtube"
                      ? "border-red-500 bg-red-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <Youtube className="w-6 h-6 md:w-8 md:h-8 text-red-500 mx-auto mb-2" />
                  <div className="text-xs md:text-sm font-medium">YouTube</div>
                </button>
                <button
                  onClick={() => setUploadType("pdf")}
                  className={`p-3 md:p-4 rounded-lg border-2 transition-all ${
                    uploadType === "pdf"
                      ? "border-red-500 bg-red-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <FileText className="w-6 h-6 md:w-8 md:h-8 text-red-500 mx-auto mb-2" />
                  <div className="text-xs md:text-sm font-medium">PDF</div>
                </button>
                <button
                  onClick={() => setUploadType("image")}
                  className={`p-3 md:p-4 rounded-lg border-2 transition-all ${
                    uploadType === "image"
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <Image className="w-6 h-6 md:w-8 md:h-8 text-blue-500 mx-auto mb-2" />
                  <div className="text-xs md:text-sm font-medium">Image</div>
                </button>
              </div>
            </div>

            {/* Content Input */}
            {uploadType === "youtube" && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  YouTube Video URL
                </label>
                <input
                  type="url"
                  value={youtubeUrl}
                  onChange={(e) => setYoutubeUrl(e.target.value)}
                  placeholder="https://www.youtube.com/watch?v=..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
                <p className="text-xs text-gray-500 mt-2">
                  Our AI will analyze the video content and generate relevant
                  DSA questions
                </p>
              </div>
            )}

            {(uploadType === "pdf" || uploadType === "image") && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload {uploadType === "pdf" ? "PDF Document" : "Image"}
                </label>
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="border-2 border-dashed border-gray-300 rounded-lg p-6 md:p-8 text-center cursor-pointer hover:border-gray-400 transition-colors"
                >
                  <Upload className="w-8 h-8 md:w-12 md:h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-sm text-gray-600 mb-2">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-xs text-gray-500">
                    {uploadType === "pdf"
                      ? "PDF files up to 10MB"
                      : "PNG, JPG, GIF up to 5MB"}
                  </p>
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept={uploadType === "pdf" ? ".pdf" : "image/*"}
                  onChange={(e) => handleFileUpload(e.target.files)}
                  className="hidden"
                />
              </div>
            )}

            {/* AI Features Info */}
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-lg">
              <div className="flex items-start space-x-3">
                <Brain className="w-6 h-6 text-indigo-600 mt-0.5" />
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">
                    AI-Powered Quiz Generation
                  </h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Analyzes content to identify key concepts</li>
                    <li>• Generates contextual DSA questions</li>
                    <li>• Creates explanations for each answer</li>
                    <li>• Adapts difficulty based on content complexity</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Action Buttons */}
            <div className="flex space-x-4 pt-2">
              <button
                onClick={() => setShowUploadModal(false)}
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-lg font-medium transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  if (uploadType === "youtube") {
                    handleYouTubeUpload();
                  } else {
                    fileInputRef.current?.click();
                  }
                }}
                disabled={uploadType === "youtube" && !youtubeUrl.trim()}
                className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-400 text-white py-3 rounded-lg font-medium transition-all disabled:cursor-not-allowed"
              >
                {uploadType === "youtube"
                  ? "Generate Quiz"
                  : "Upload & Generate"}
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Quiz Modal - Active Quiz */}
      {showQuizModal && currentQuiz && !currentQuiz.isCompleted && (
        <QuizModal
          quiz={currentQuiz}
          onAnswer={handleQuizAnswer}
          onNext={nextQuizQuestion}
          onPrevious={previousQuizQuestion}
          onClose={closeQuizModal}
          title={
            currentQuiz.topicId
              ? topics.find((t) => t.id === currentQuiz.topicId)?.name || "Quiz"
              : customContents.find((c) => c.id === currentQuiz.contentId)
                  ?.title || "Custom Quiz"
          }
        />
      )}

      {/* Quiz Results Modal */}
      {showQuizModal && currentQuiz && currentQuiz.isCompleted && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col">
          <div className="bg-white border-b border-gray-200 px-4 md:px-8 py-4">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-lg md:text-2xl font-bold text-gray-900">
                  Quiz Complete!
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                  {currentQuiz.topicId
                    ? topics.find((t) => t.id === currentQuiz.topicId)?.name
                    : customContents.find((c) => c.id === currentQuiz.contentId)
                        ?.title}{" "}
                  Assessment
                </p>
              </div>
              <button
                onClick={closeQuizModal}
                className="text-gray-400 hover:text-gray-600 transition-colors p-2"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            <div className="max-w-4xl mx-auto px-4 md:px-8 py-8">
              <QuizResults
                quiz={currentQuiz}
                title={
                  currentQuiz.topicId
                    ? topics.find((t) => t.id === currentQuiz.topicId)?.name ||
                      "Quiz"
                    : customContents.find((c) => c.id === currentQuiz.contentId)
                        ?.title || "Custom Quiz"
                }
                onReview={() => {
                  setReviewQuiz(currentQuiz);
                  setShowReviewModal(true);
                  setShowQuizModal(false);
                }}
                onRetake={() => {
                  if (currentQuiz.topicId) {
                    startQuizForTopic(currentQuiz.topicId);
                  } else if (currentQuiz.contentId) {
                    startCustomQuiz(currentQuiz.contentId);
                  }
                }}
                onClose={closeQuizModal}
                isTopicMastered={currentQuiz.topicId && currentQuiz.score >= 70}
              />
            </div>
          </div>
        </div>
      )}

      {/* Full Screen Review Modal */}
      {showReviewModal && reviewQuiz && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col">
          {/* Review Header */}
          <div className="bg-white border-b border-gray-200 px-4 md:px-8 py-4">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-lg md:text-2xl font-bold text-gray-900">
                  Review:{" "}
                  {reviewQuiz.topicId
                    ? topics.find((t) => t.id === reviewQuiz.topicId)?.name
                    : customContents.find((c) => c.id === reviewQuiz.contentId)
                        ?.title}{" "}
                  Quiz
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                  Completed on {reviewQuiz.timeCompleted?.toLocaleDateString()}{" "}
                  • Score: {reviewQuiz.score}%
                  {reviewQuiz.attempt && ` • Attempt ${reviewQuiz.attempt}`}
                </p>
              </div>
              <button
                onClick={() => setShowReviewModal(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors p-2"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Review Content */}
          <div className="flex-1 overflow-y-auto">
            <div className="max-w-4xl mx-auto px-4 md:px-8 py-8">
              {/* Quiz Summary */}
              <div className="bg-gray-50 p-6 rounded-xl mb-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Quiz Results Summary
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <span>Questions: {reviewQuiz.questions.length}</span>
                      <span>
                        Correct:{" "}
                        {
                          reviewQuiz.questions.filter(
                            (q, i) =>
                              reviewQuiz.userAnswers[i] === q.correctAnswer
                          ).length
                        }
                      </span>
                      <span>
                        Time:{" "}
                        {reviewQuiz.timeCompleted
                          ? Math.round(
                              (reviewQuiz.timeCompleted.getTime() -
                                reviewQuiz.timeStarted.getTime()) /
                                1000
                            )
                          : reviewQuiz.timeLimit - reviewQuiz.timeRemaining}
                        s
                      </span>
                    </div>
                  </div>
                  <div
                    className={`text-3xl font-bold mt-4 md:mt-0 ${
                      reviewQuiz.score >= 80
                        ? "text-green-600"
                        : reviewQuiz.score >= 60
                        ? "text-yellow-600"
                        : "text-red-600"
                    }`}
                  >
                    {reviewQuiz.score}%
                  </div>
                </div>
              </div>

              {/* Question Review */}
              <div className="space-y-8">
                {reviewQuiz.questions.map((question, questionIndex) => {
                  const userAnswer = reviewQuiz.userAnswers[questionIndex];
                  const isCorrect = userAnswer === question.correctAnswer;

                  return (
                    <div
                      key={question.id}
                      className="border border-gray-200 rounded-xl p-6 md:p-8"
                    >
                      <div className="flex items-start justify-between mb-6">
                        <h4 className="text-xl font-semibold text-gray-900 flex-1 leading-relaxed">
                          {questionIndex + 1}. {question.question}
                        </h4>
                        <div
                          className={`flex items-center space-x-2 ml-6 ${
                            isCorrect ? "text-green-600" : "text-red-600"
                          }`}
                        >
                          {isCorrect ? (
                            <CheckCircle className="w-6 h-6" />
                          ) : (
                            <AlertCircle className="w-6 h-6" />
                          )}
                          <span className="font-medium text-lg">
                            {isCorrect ? "Correct" : "Incorrect"}
                          </span>
                        </div>
                      </div>

                      <div className="space-y-3 mb-6">
                        {question.options.map((option, optionIndex) => {
                          const isUserAnswer = userAnswer === optionIndex;
                          const isCorrectAnswer =
                            question.correctAnswer === optionIndex;

                          return (
                            <div
                              key={optionIndex}
                              className={`p-4 rounded-lg border-2 ${
                                isCorrectAnswer
                                  ? "border-green-500 bg-green-50"
                                  : isUserAnswer
                                  ? "border-red-500 bg-red-50"
                                  : "border-gray-200"
                              }`}
                            >
                              <div className="flex items-center space-x-4">
                                <div
                                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                                    isCorrectAnswer
                                      ? "border-green-500 bg-green-500"
                                      : isUserAnswer
                                      ? "border-red-500 bg-red-500"
                                      : "border-gray-300"
                                  }`}
                                >
                                  {(isCorrectAnswer || isUserAnswer) && (
                                    <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                                  )}
                                </div>
                                <span className="flex-1 text-lg">{option}</span>
                                {isCorrectAnswer && (
                                  <span className="text-sm font-medium text-green-600 bg-green-100 px-3 py-1 rounded-full">
                                    Correct Answer
                                  </span>
                                )}
                                {isUserAnswer && !isCorrectAnswer && (
                                  <span className="text-sm font-medium text-red-600 bg-red-100 px-3 py-1 rounded-full">
                                    Your Answer
                                  </span>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {/* Explanation */}
                      <div className="bg-blue-50 p-6 rounded-xl">
                        <h5 className="font-medium text-blue-900 mb-3 text-lg">
                          Explanation:
                        </h5>
                        <p className="text-blue-800">{question.explanation}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Review Footer */}
          <div className="bg-white border-t border-gray-200 px-4 md:px-8 py-6">
            <div className="max-w-4xl mx-auto flex justify-center space-x-4">
              <button
                onClick={() => {
                  if (reviewQuiz.topicId) {
                    startQuizForTopic(reviewQuiz.topicId);
                    setShowReviewModal(false);
                  } else if (reviewQuiz.contentId) {
                    startCustomQuiz(reviewQuiz.contentId);
                    setShowReviewModal(false);
                  }
                }}
                className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded-xl font-medium transition-colors text-lg"
              >
                Retake Quiz
              </button>
              <button
                onClick={() => setShowReviewModal(false)}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-12 py-4 rounded-xl font-medium transition-colors text-lg"
              >
                Close Review
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Quiz Ready Notification */}
      {generatedQuizzes.length > 0 && (
        <div className="fixed bottom-4 right-4 bg-white border border-gray-200 rounded-lg shadow-lg p-4 max-w-sm z-40">
          <div className="flex items-center space-x-3">
            <div className="bg-green-100 p-2 rounded-full">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h4 className="font-medium text-gray-900">Quiz Ready!</h4>
              <p className="text-sm text-gray-600">
                {generatedQuizzes[generatedQuizzes.length - 1].questions.length}{" "}
                questions generated
              </p>
            </div>
          </div>
          <div className="mt-3 flex space-x-2">
            <button
              onClick={() => {
                const latestQuiz =
                  generatedQuizzes[generatedQuizzes.length - 1];
                if (latestQuiz.contentId) {
                  startCustomQuiz(latestQuiz.contentId);
                }
              }}
              className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-3 rounded text-sm font-medium transition-colors"
            >
              Take Quiz
            </button>
            <button
              onClick={() => setGeneratedQuizzes((prev) => prev.slice(0, -1))}
              className="text-gray-400 hover:text-gray-600 p-2"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainPage;
