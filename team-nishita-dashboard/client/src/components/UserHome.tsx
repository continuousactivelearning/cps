import React, { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div
      className={clsx(
        "flex h-screen font-sans transition-colors duration-300",
        darkMode
          ? "bg-gradient-to-br from-black via-[#0d0b1e] to-black text-white"
          : "bg-gradient-to-br from-white via-[#ccf5e7] to-white text-gray-800"
      )}
    >
      {/* Sidebar */}
      <aside className="w-72 p-6 flex flex-col">
        <div
          className={clsx(
            "rounded-2xl p-6 backdrop-blur-md border shadow-lg flex flex-col h-full transition-colors duration-300",
            darkMode
              ? "bg-white/10 border-purple-900"
              : "bg-white/80 border-blue-200"
          )}
        >
          <h1
            className={clsx(
              "text-4xl font-bold mb-10",
              darkMode ? "text-white" : "text-blue-700"
            )}
          >
            Dashboard
          </h1>

          {/* Nav Items inside translucent box */}
          <nav
            className={clsx(
              "flex flex-col gap-4 text-[15px] mb-auto",
              darkMode ? "text-purple-300" : "text-blue-700"
            )}
          >
            {[
              ["🏠", "Home"],
              ["📚", "Explore Courses"],
              ["🎓", "My Courses"],
              ["📈", "Progress"],
              ["🏆", "Achievements"],
              ["✨", "Recommendations"],
            ].map(([icon, label]) => (
              <motion.a
                whileHover={{ scale: 1.05, x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                href="#"
                key={label}
                className="flex items-center gap-3 hover:font-semibold cursor-pointer transition"
              >
                <span className="text-lg">{icon}</span> {label}
              </motion.a>
            ))}
          </nav>

          {/* Bottom Nav Items */}
          <div
            className={clsx(
              "pt-6 border-t space-y-4",
              darkMode ? "border-purple-800 text-purple-300" : "border-blue-300 text-blue-600"
            )}
          >
            <a className="flex items-center gap-3 hover:font-semibold" href="#">
              🛠️ Settings
            </a>
            <a className="flex items-center gap-3 hover:font-semibold" href="#">
              📕 Logout
            </a>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 overflow-y-auto">
        {/* Top Nav */}
        <div className="flex justify-between items-center mb-8">
          <div
            className={clsx(
              "space-x-6 text-sm",
              darkMode ? "text-purple-300" : "text-blue-600"
            )}
          >
            {["Home", "Dashboard", "Profile"].map((item) => (
              <a
                key={item}
                href="#"
                className="hover:font-semibold transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-4 py-1.5 rounded-full border text-sm font-medium transition-all duration-300 hover:scale-105 shadow-sm"
            style={{
              backgroundColor: darkMode ? "#4b0082" : "#bbf7d0",
              color: darkMode ? "white" : "#065f46",
            }}
          >
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>

        {/* Welcome Section */}
        <motion.section
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className={clsx("text-center mb-12 p-6 rounded-xl shadow", darkMode ? "bg-[#1e1a3a] text-purple-200" : "bg-[#ccfbf1] text-teal-800")}
        >
          <h2 className="text-3xl font-bold mb-2">
            Welcome to Your Learning Hub!
          </h2>
          <p className="max-w-2xl mx-auto text-sm mb-6">
            This is your central space to discover new content, track your progress, and embark on exciting learning adventures. Let's get started!
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-full shadow-md hover:scale-105 transition-all duration-300 text-white">
              Explore Content
            </button>
            <button className="px-6 py-2 border border-purple-400 hover:bg-purple-700 rounded-full transition-all duration-300 shadow-sm">
              View Dashboard
            </button>
          </div>
        </motion.section>

        {/* Featured Course */}
        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-10"
        >
          <h3 className={clsx("text-lg font-semibold mb-3", darkMode ? "text-purple-300" : "text-blue-600")}>Featured Course</h3>
          <div className={clsx("p-6 rounded-xl shadow-xl flex items-start gap-4 hover:shadow-2xl transition-shadow duration-300", darkMode ? "bg-[#1e1a3a]" : "bg-[#ecfeff]")}
          >
            <span className="text-4xl">📘</span>
            <div>
              <h4 className={clsx("text-xl font-bold mb-1", darkMode ? "text-white" : "text-blue-900")}>Introduction to AI</h4>
              <p className={clsx("text-sm", darkMode ? "text-purple-300" : "text-blue-600")}>Discover the fundamentals of Artificial Intelligence and its applications.</p>
              <button className="mt-3 px-4 py-1.5 bg-purple-700 hover:bg-purple-800 rounded-full text-sm font-semibold transition-all duration-200 shadow text-white">
                Learn More →
              </button>
            </div>
          </div>
        </motion.section>

        {/* Personalized for You */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className={clsx("text-md font-medium mb-2", darkMode ? "text-purple-400" : "text-blue-600")}>Personalized for You</h3>
          <div className={clsx("rounded-xl p-6 text-sm shadow-md", darkMode ? "bg-[#161325] text-purple-300 border border-purple-900" : "bg-[#f0fdfa] text-blue-700 border border-blue-200")}
          >
            {/* Placeholder content */}
            You don't have any recommendations yet. Explore some courses to get started!
          </div>
        </motion.section>
      </main>
    </div>
  );
};

export default App;
