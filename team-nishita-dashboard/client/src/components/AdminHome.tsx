import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  const getAnimationProps = (delay = 0) => ({
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: {
      delay,
      duration: 0.6,
      type: "spring",
    },
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={darkMode ? "dark" : "light"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        className={clsx(
          "flex h-screen font-sans transition-colors duration-500",
          darkMode
            ? "bg-gradient-to-br from-black via-[#0d0b1e] to-black text-white"
            : "bg-gradient-to-br from-white via-[#ccfdef] to-white text-gray-800"
        )}
      >
        {/* Sidebar */}
        <aside className="w-72 p-6 flex flex-col">
          <motion.div
            {...getAnimationProps(0)}
            className={clsx(
              "rounded-2xl p-6 backdrop-blur-lg border shadow-xl flex flex-col h-full transition-all duration-500",
              darkMode
                ? "bg-white/10 border-purple-900"
                : "bg-white/80 border-teal-200"
            )}
          >
            <motion.h1
              {...getAnimationProps(0.1)}
              className={clsx(
                "text-4xl font-bold mb-10",
                darkMode ? "text-white" : "text-teal-700"
              )}
            >
              Admin Panel
            </motion.h1>

            <nav
              className={clsx(
                "flex flex-col gap-4 text-[15px] mb-auto",
                darkMode ? "text-purple-300" : "text-teal-700"
              )}
            >
              {[
                ["🏠", "Dashboard"],
                ["👥", "User Management"],
                ["📊", "Analytics"],
                ["⚙", "System Settings"],
                ["📨", "Messages"],
                ["🧾", "Reports"],
              ].map(([icon, label], i) => (
                <motion.a
                  key={label}
                  href="#"
                  {...getAnimationProps(i * 0.1)}
                  className="flex items-center gap-3 hover:text-white hover:font-semibold cursor-pointer transition-all"
                >
                  <span className="text-lg">{icon}</span> {label}
                </motion.a>
              ))}
            </nav>

            <div
              className={clsx(
                "pt-6 border-t space-y-4",
                darkMode ? "border-purple-800 text-purple-300" : "border-teal-300 text-teal-700"
              )}
            >
              <a className="flex items-center gap-3 hover:font-semibold" href="#">
                🛠 Settings
              </a>
              <a className="flex items-center gap-3 hover:font-semibold" href="#">
                📕 Logout
              </a>
            </div>
          </motion.div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-10 overflow-y-auto">
          <motion.div
            {...getAnimationProps(0.2)}
            className="flex justify-between items-center mb-10"
          >
            <h2
              className={clsx(
                "text-2xl font-bold",
                darkMode ? "text-white" : "text-teal-800"
              )}
            >
              Welcome, Admin
            </h2>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="px-4 py-2 rounded-full border text-sm font-medium transition-all duration-300 hover:scale-105 shadow-sm"
              style={{
                backgroundColor: darkMode ? "#4b0082" : "#bafce1",
                color: darkMode ? "white" : "#065f46",
              }}
            >
              {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
            </button>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              ["👥", "Users", "1,240"],
              ["📊", "Active Sessions", "342"],
              ["🧾", "Reports Generated", "87"],
            ].map(([icon, label, value], i) => (
              <motion.div
                key={label}
                {...getAnimationProps(i * 0.15)}
                className={clsx(
                  "p-6 rounded-xl flex items-center gap-4 transform transition-shadow hover:shadow-2xl",
                  darkMode ? "bg-[#1e1a3a] text-purple-200" : "bg-[#e0fdf4] text-teal-900"
                )}
              >
                <span className="text-4xl">{icon}</span>
                <div>
                  <div className="text-sm uppercase font-semibold">{label}</div>
                  <div className="text-xl font-bold">{value}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.section {...getAnimationProps(0.5)}>
            <h3
              className={clsx(
                "text-md font-medium mb-2",
                darkMode ? "text-purple-400" : "text-teal-700"
              )}
            >
              Recent Activity
            </h3>
            <div
              className={clsx(
                "rounded-xl p-6 text-sm shadow-md",
                darkMode
                  ? "bg-[#161325] text-purple-300 border border-purple-900"
                  : "bg-[#f0fdfa] text-teal-800 border border-teal-200"
              )}
            >
              <ul className="list-disc pl-5 space-y-2">
                <li>New user "jdoe" registered.</li>
                <li>System backup completed successfully.</li>
                <li>3 new messages received.</li>
              </ul>
            </div>
          </motion.section>
        </main>
      </motion.div>
    </AnimatePresence>
  );
};

export default App;