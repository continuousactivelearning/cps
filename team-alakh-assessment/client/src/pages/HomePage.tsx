// developed by :@AlakhMathur
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BookOpen, Users, Trophy, ArrowRight } from "lucide-react";
import api from "../services/api";
import ThemeToggle from "../components/ThemeToggle";

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    const fetchEmail = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      try {
        const res = await api.get("/api/user/passed", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setUserEmail(res.data.email || null);
      } catch (err) {
        console.error("Could not fetch user email", err);
      }
    };

    fetchEmail();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-16">
          <div className="flex items-center space-x-3">
            <div className="bg-red-600 p-2 rounded-xl">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">PreAssess</h1>
          </div>
          <div className="flex gap-2 items-center">
            <ThemeToggle />
            {userEmail && (
              <div className="bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-sm border dark:border-gray-600">
                <span className="text-black dark:text-white font-medium">
                  ● {userEmail}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Master Any Topic with
            <span className="bg-gradient-to-r from-green-600 to-red-600 bg-clip-text text-transparent">
              {" "}
              Smart Prerequisites
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Our intelligent learning platform ensures you have the right
            foundation before tackling advanced topics. Learn systematically,
            progress confidently.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/register")}
              className="group bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
            >
              <Users className="h-5 w-5" />
              <span>Start Your Journey</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => navigate("/login")}
              className="bg-white dark:bg-gray-900 dark:text-red-500 dark:border-red-500 hover:bg-gray-50 dark:hover:bg-gray-800 text-red-600 border-2 border-red-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Continue Learning
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
            <div className="bg-yellow-100 dark:bg-yellow-300 p-3 rounded-xl w-fit mb-4">
              <BookOpen className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Prerequisite Learning
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Our system automatically identifies what you need to learn first,
              ensuring you build knowledge step by step.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
            <div className="bg-green-100 dark:bg-green-300 p-3 rounded-xl w-fit mb-4">
              <Trophy className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Quiz-Based Progress
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Prove your understanding with targeted quizzes before moving to
              advanced topics.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
            <div className="bg-purple-100 dark:bg-purple-300 p-3 rounded-xl w-fit mb-4">
              <Users className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Personalized Path
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Every learner gets a customized learning path based on their
              current knowledge and goals.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-orange-600 to-yellow-600 dark:from-orange-700 dark:to-yellow-600 rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Learning?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Join thousands of learners who've mastered complex topics
            systematically.
          </p>
          <button
            onClick={() => navigate("/register")}
            className="bg-white dark:bg-gray-900 dark:text-yellow-400 hover:bg-gray-100 dark:hover:bg-gray-800 text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
