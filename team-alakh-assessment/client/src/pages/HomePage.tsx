// developed by :@AlakhMathur
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
  type Variants,
  type RepeatType,
} from "framer-motion";
import {
  BookOpen,
  Users,
  Trophy,
  ArrowRight,
  BarChart3,
  PlayCircle,
  Globe,
  LogIn,
  GitBranch,
  Menu,
  X,
} from "lucide-react";
import ThemeToggle from "../components/ThemeToggle";
import WaterRippleBackground from "../components/WaterRippleBackground";
import { APIURL } from "../services/api";
const features = [
  {
    icon: GitBranch,
    title: "Dependency-Based Learning",
    description:
      "Master topics in the optimal order with our intelligent prerequisite engine.",
  },
  {
    icon: BookOpen,
    title: "Learn Smarter",
    description:
      "Build knowledge systematically, ensuring strong foundations before advanced concepts.",
  },
  {
    icon: Trophy,
    title: "Quiz Your Progress",
    description:
      "Prove your understanding with targeted quizzes and earn achievements.",
  },
  {
    icon: BarChart3,
    title: "Track Mastery",
    description:
      "Visualize your learning journey and celebrate every milestone.",
  },
];

// Animated Counter Component
const AnimatedCounter: React.FC<{ value: number; duration?: number }> = ({
  value,
  duration = 2,
}) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min(
        (currentTime - startTime) / (duration * 1000),
        1
      );

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(easeOutQuart * value);

      setDisplayValue(currentValue);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [value, duration]);

  return <span>{displayValue.toLocaleString()}</span>;
};

// Sparkle effect for hero area
const Sparkles: React.FC = () => (
  <svg
    className="pointer-events-none absolute left-1/2 top-32 -translate-x-1/2 z-10 w-full max-w-md"
    viewBox="0 0 400 120"
    preserveAspectRatio="xMidYMid meet"
  >
    <g>
      <motion.circle
        cx="60"
        cy="40"
        r="2.5"
        fill="#60a5fa"
        animate={{ opacity: [0.7, 1, 0.7], scale: [1, 1.4, 1] }}
        transition={{ duration: 2.2, repeat: Infinity, delay: 0.2 }}
      />
      <motion.circle
        cx="200"
        cy="60"
        r="3.5"
        fill="#818cf8"
        animate={{ opacity: [1, 0.5, 1], scale: [1, 1.2, 1] }}
        transition={{ duration: 2.8, repeat: Infinity, delay: 0.7 }}
      />
      <motion.circle
        cx="340"
        cy="30"
        r="2"
        fill="#a5b4fc"
        animate={{ opacity: [0.8, 1, 0.8], scale: [1, 1.5, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 1.1 }}
      />
      <motion.circle
        cx="120"
        cy="90"
        r="2.8"
        fill="#38bdf8"
        animate={{ opacity: [1, 0.6, 1], scale: [1, 1.3, 1] }}
        transition={{ duration: 2.6, repeat: Infinity, delay: 0.5 }}
      />
      <motion.circle
        cx="280"
        cy="100"
        r="2.2"
        fill="#6366f1"
        animate={{ opacity: [0.7, 1, 0.7], scale: [1, 1.4, 1] }}
        transition={{ duration: 2.3, repeat: Infinity, delay: 1.3 }}
      />
    </g>
  </svg>
);

// Parallax background SVG (light rays/abstract)
const ParallaxBackground: React.FC<{ mouseX: number; mouseY: number }> = ({
  mouseX,
  mouseY,
}) => {
  // Parallax shift based on mouse
  const x = (mouseX - window.innerWidth / 2) / 30;
  const y = (mouseY - window.innerHeight / 2) / 30;
  return (
    <svg
      className="pointer-events-none absolute left-0 top-0 w-full h-full z-0"
      width="100%"
      height="100%"
      style={{ filter: "blur(2px)" }}
    >
      <motion.ellipse
        cx={"60%"}
        cy={"20%"}
        rx={180}
        ry={60}
        fill="#3b82f6"
        fillOpacity={0.08}
        animate={{
          x: x * 1.2,
          y: y * 1.2,
        }}
        transition={{ type: "spring", stiffness: 30, damping: 20 }}
      />
      <motion.ellipse
        cx={"30%"}
        cy={"60%"}
        rx={120}
        ry={40}
        fill="#6366f1"
        fillOpacity={0.07}
        animate={{
          x: x * -1.1,
          y: y * -1.1,
        }}
        transition={{ type: "spring", stiffness: 30, damping: 20 }}
      />
      <motion.ellipse
        cx={"80%"}
        cy={"80%"}
        rx={90}
        ry={30}
        fill="#818cf8"
        fillOpacity={0.06}
        animate={{
          x: x * 0.7,
          y: y * 0.7,
        }}
        transition={{ type: "spring", stiffness: 30, damping: 20 }}
      />
    </svg>
  );
};

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [stats, setStats] = useState({
    students: 0,
    instructors: 0,
    topics: 0,
  });
  const [introIndex, setIntroIndex] = useState(0);
  const [showSecondLine, setShowSecondLine] = useState(false);
  const [secondIndex, setSecondIndex] = useState(0);
  const introText = "Welcome to the Future of Learning";
  const secondText = "Welcome to PreAssess";
  // Parallax state
  const [mouse, setMouse] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  // FAQ state and data
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const faqData = [
    {
      question: "How does PreAssess work?",
      answer:
        "PreAssess guides you through learning topics in the right order, ensuring you master all prerequisites before moving on.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Yes! We use secure authentication and never share your data with third parties.",
    },
    {
      question: "How do I contact support?",
      answer:
        "You can raise a query from your dashboard, or contact your instructor directly.",
    },
    {
      question: "Can instructors track my progress?",
      answer:
        "Instructors can see your mastery, quiz attempts, and queries to help you succeed.",
    },
  ];

  useEffect(() => {
    const fetchEmail = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;
      try {

        const res = await fetch(`${APIURL}/api/user/passed`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        setUserEmail(data.email || null);
      } catch (err) {
        // silent
      }
    };
    fetchEmail();
    const fetchStats = async () => {
      try {

        const res = await fetch(`${APIURL}/api/instructor/public-stats`);

        const data = await res.json();
        setStats({
          students: data.studentsCount || 0,
          instructors: data.instructorsCount || 0,
          topics: data.topicsCount || 0,
        });
      } catch {
        setStats({ students: 0, instructors: 0, topics: 0 });
      }
    };
    fetchStats();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Animated typewriter for intro
  useEffect(() => {
    if (introIndex < introText.length) {
      const timeout = setTimeout(() => setIntroIndex(introIndex + 1), 38);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => setShowSecondLine(true), 400);
    }
  }, [introIndex]);

  // Animated typewriter for second line
  useEffect(() => {
    if (showSecondLine && secondIndex < secondText.length) {
      const timeout = setTimeout(() => setSecondIndex(secondIndex + 1), 38);
      return () => clearTimeout(timeout);
    }
  }, [showSecondLine, secondIndex]);

  // Floating wave animation for hero text
  const heroControls = useAnimation();
  useEffect(() => {
    heroControls.start({
      y: [0, -10, 0, 10, 0],
      rotate: [0, 1.5, 0, -1.5, 0],
      transition: { duration: 7, repeat: Infinity, ease: "easeInOut" },
    });
  }, [heroControls]);

  // Gentle pulse for main CTA button
  const ctaControls = useAnimation();
  useEffect(() => {
    ctaControls.start({
      scale: [1, 1.07, 1],
      boxShadow: [
        "0 4px 32px 0 rgba(59,130,246,0.10)",
        "0 8px 40px 0 rgba(99,102,241,0.18)",
        "0 4px 32px 0 rgba(59,130,246,0.10)",
      ],
      transition: { duration: 2.8, repeat: Infinity, ease: "easeInOut" },
    });
  }, [ctaControls]);

  // Shimmer effect for gradient text
  const shimmerGradient = {
    background: "linear-gradient(90deg, #3b82f6 20%, #6366f1 50%, #3b82f6 80%)",
    backgroundSize: "200% 100%",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    animation: "shimmer 3s linear infinite",
  };

  // Feature card and icon animation variants
  const cardVariants: Variants = {
    rest: { y: 0, boxShadow: "0 2px 12px 0 rgba(59,130,246,0.06)", scale: 1 },
    hover: {
      y: -14,
      boxShadow: "0 12px 40px 0 rgba(99,102,241,0.22)",
      scale: 1.07,
      transition: { type: "spring" as const, stiffness: 180, damping: 16 },
    },
  };
  const iconVariants: Variants = {
    rest: { y: 0, rotate: 0 },
    hover: {
      y: -8,
      rotate: [0, 8, -8, 0],
      transition: {
        duration: 0.7,
        repeat: Infinity,
        repeatType: "reverse" as RepeatType,
      },
    },
  };

  // Button animation variants
  const ctaButtonVariants: Variants = {
    rest: {
      scale: 1,
      background:
        "linear-gradient(270deg, #06b6d4 0%, #3b82f6 50%, #6366f1 100%)",
      color: "#fff",
      border: "2.5px solid #38bdf8",
      filter: "drop-shadow(0 0 8px #38bdf8)",
      transition: { duration: 0.2, type: "tween" },
    },
    hover: {
      scale: 1.12,
      y: -4,
      boxShadow: "0 0 32px #38bdf8, 0 12px 40px 0 rgba(59,130,246,0.22)",
      background: [
        "linear-gradient(270deg, #06b6d4 0%, #3b82f6 50%, #6366f1 100%)",
        "linear-gradient(90deg, #6366f1 0%, #3b82f6 50%, #06b6d4 100%)",
      ],
      border: "2.5px solid #38bdf8",
      filter: "drop-shadow(0 0 16px #38bdf8)",
      color: "#fff",
      transition: {
        duration: 0.22,
        type: "spring",
        stiffness: 220,
        damping: 18,
      },
    },
    tap: {
      scale: 0.97,
      boxShadow: "0 2px 12px 0 rgba(59,130,246,0.10)",
      transition: { duration: 0.12, type: "tween" },
    },
  };
  const secondaryButtonVariants: Variants = {
    rest: {
      scale: 1,
      background: "#fff",
      color: "#2563eb",
      border: "2.5px solid #3b82f6",
      boxShadow: "0 2px 12px 0 rgba(59,130,246,0.10)",
      filter: "drop-shadow(0 0 4px #3b82f6cc)",
      transition: { duration: 0.2, type: "tween" },
    },
    hover: {
      scale: 1.09,
      y: -2,
      background: "#e0f2fe",
      color: "#2563eb",
      border: "2.5px solid #2563eb",
      boxShadow: "0 0 24px #3b82f6, 0 8px 32px 0 rgba(59,130,246,0.18)",
      filter: "drop-shadow(0 0 8px #3b82f6cc)",
      transition: {
        duration: 0.22,
        type: "spring",
        stiffness: 180,
        damping: 16,
      },
    },
    tap: {
      scale: 0.97,
      boxShadow: "0 2px 12px 0 rgba(59,130,246,0.10)",
      transition: { duration: 0.12, type: "tween" },
    },
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <WaterRippleBackground />
      <ParallaxBackground mouseX={mouse.x} mouseY={mouse.y} />
      {/* Navigation */}
      <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2 md:py-4">
            <div className="flex items-center gap-3 relative">
              <motion.div
                className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg"
                initial={{ y: 0 }}
                animate={{ y: [0, -3, 0, 3, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <BookOpen className="w-5 h-5 text-white" />
              </motion.div>
              <span className="text-md md:text-xl font-bold text-gray-900 dark:text-white relative">
                PreAssess
                <motion.div
                  className="absolute left-0 right-0 -bottom-1 h-1 rounded-full bg-gradient-to-r from-blue-400 to-indigo-400 opacity-70"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: [0, 1, 0] }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  style={{ originX: 0 }}
                />
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="flex items-center md:gap-4">
              <ThemeToggle />
              {userEmail && (
                <div className="hidden lg:block bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-sm border dark:border-gray-600 text-black dark:text-white font-medium">
                  ● {userEmail}
                </div>
              )}
              <Link
                to="/login"
                className="flex items-center justify-center gap-1 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-4 py-2 rounded-lg transition-colors"
              >
                <LogIn size={20} color="currentColor" /> <div className="hidden md:block">Sign In</div>
              </Link>
              <Link
                to="/register"
                className="hidden md:block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-600 transition-colors"
              >
                Get Started
              </Link>
              <Link
                to="/instructor-greeting"
                className="text-sm ml-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold px-4 py-2 rounded-full shadow hover:scale-105 hover:brightness-110 transition-all duration-200"
              >
                Instructor?
              </Link>
            </div>
          </div>
        </div>  
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative overflow-x-clip">
        <Sparkles />
        <div className="text-center relative z-20">
          {/* Animated intro line */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-[23px] sm:text-4xl md:text-6xl font-extrabold mb-1 sm:mb-6 tracking-tight text-white"
            style={{
              textShadow:
                "0 0 32px #fff, 0 0 16px #60a5fa, 0 2px 8px #000, 0 1px 2px #000",
              filter: "drop-shadow(0 0 24px #fff) drop-shadow(0 0 8px #60a5fa)",
            }}
          >
            {introText.slice(0, introIndex)}
            <span className="inline-block w-2 h-6 align-middle animate-pulse bg-white/80 rounded-sm ml-1" />
          </motion.div>
          {showSecondLine && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="text-3xl sm:text-5xl md:text-7xl font-extrabold mb-1 md:mb-8 tracking-tight text-blue-600"
              style={{
                minHeight: 64,
                WebkitTextStroke: "2px black",
                textShadow: "0 0 16px #3b82f6, 0 2px 8px #000, 0 1px 2px #000",
              }}
            >
              {secondText.slice(0, secondIndex)}
              <span className="inline-block w-2 h-10 align-middle animate-pulse bg-blue-400/80 rounded-sm ml-2" />
            </motion.div>
          )}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={heroControls}
            className="text-2xl sm:text-7xl md:text-9xl font-black mb-1 md:mb-8 tracking-tight text-white"
            style={{
              letterSpacing: "-0.03em",
              textShadow:
                "0 0 48px #fff, 0 0 32px #60a5fa, 0 2px 8px #000, 0 1px 2px #000",
              filter:
                "drop-shadow(0 0 32px #fff) drop-shadow(0 0 12px #60a5fa)",
            }}
          >
            PreAssess
            <span
              className="inline-block align-middle ml-2 md:ml-4 animate-pulse"
              style={{
                fontSize: 32,
                color: "#fff",
                textShadow: "0 0 24px #fff, 0 0 32px #60a5fa",
              }}
            >
              ✦
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-white mb-6 md:mb-8 max-w-3xl mx-auto px-4"
          >
            Discover a smarter way to learn. PreAssess guides you step-by-step,
            ensuring you master every concept in the right order. Experience
            personalized, dependency-based learning and unlock your full
            potential.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center px-4"
          >
            <motion.div
              variants={ctaButtonVariants}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              className="flex"
              style={{ borderRadius: 16, overflow: "hidden" }}
            >
              <Link
                to="/register"
                className="px-2 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold flex items-center justify-around gap-3 shadow-lg"
                style={{
                  width: "100%",
                  maxWidth: 220,
                  textAlign: "center",
                  willChange:
                    "transform, box-shadow, background, border, filter",
                }}
              >
                <Users className="h-5 w-5" />
                Start Your Journey
                <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>
            <motion.div
              variants={ctaButtonVariants}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              className="flex"
              style={{ borderRadius: 16, overflow: "hidden" }}
            >
              <Link
                to="/login"
                className="px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold flex items-center justify-center gap-2 shadow-lg"
                style={{
                  width: "100%",
                  maxWidth: 220,
                  textAlign: "center",
                  willChange:
                    "transform, box-shadow, background, border, filter",
                }}
              >
                Continue Learning
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white/70 dark:bg-gray-800 py-12 md:py-16 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                <AnimatedCounter value={stats.students} duration={2.5} />+
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Active Students
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                <AnimatedCounter value={stats.instructors} duration={2.5} />+
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Expert Instructors
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                <AnimatedCounter value={stats.topics} duration={2.5} />+
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Topics Available
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section with parallax on hover */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              <span className="text-white">How PreAssess Works</span>
            </h2>
            <p className="text-lg sm:text-xl text-white max-w-2xl mx-auto px-4">
              Our dependency-based platform is designed to help you learn
              efficiently, track your progress, and achieve your goals with
              confidence.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                initial="rest"
                whileHover="hover"
                animate="rest"
                style={{
                  transform: `translateY(${
                    (mouse.y - window.innerHeight / 2) * 0.01 * (index - 1.5)
                  }px) translateX(${
                    (mouse.x - window.innerWidth / 2) * 0.01 * (index - 1.5)
                  }px)`,
                }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
              >
                <motion.div
                  variants={iconVariants}
                  className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4"
                >
                  <feature.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </motion.div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white/70 dark:bg-gradient-to-r dark:from-blue-900 dark:to-indigo-900 py-12 md:py-20 backdrop-blur-md transition-colors">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Learning?
            </h2>
            <p className="text-lg sm:text-xl text-white mb-6 md:mb-8">
              Join thousands of learners who are mastering new topics every day
              with PreAssess.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/register"
                className="bg-white text-blue-600 px-6 py-3 sm:px-8 sm:py-4 rounded-xl text-base sm:text-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Get Started
              </Link>
              <Link
                to="/login"
                className="border-2 border-white text-blue-600 dark:text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl text-base sm:text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Sign In
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose PreAssess? */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-blue-900 via-indigo-900 to-gray-900">
        <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 md:mb-10">
          Why Choose PreAssess?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto px-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 rounded-xl p-6 sm:p-8 shadow-lg text-center"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
              Dependency-Based Learning
            </h3>
            <p className="text-blue-100">
              Master topics in the right order, guided by smart prerequisites.
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 rounded-xl p-6 sm:p-8 shadow-lg text-center"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
              Instructor Analytics
            </h3>
            <p className="text-blue-100">
              Track student progress and assessment results in real time.
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 rounded-xl p-6 sm:p-8 shadow-lg text-center"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
              Modern, Animated UI
            </h3>
            <p className="text-blue-100">
              Enjoy a beautiful, responsive, and interactive experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits of Using PreAssess */}
      <section className="py-12 md:py-20 bg-white dark:bg-gray-900">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 md:mb-10 text-blue-900 dark:text-white">
          Benefits of Using PreAssess
        </h2>
        <div className="flex flex-wrap justify-center gap-6 px-4">
          <motion.div
            whileHover={{ y: -8, boxShadow: "0 8px 32px #60a5fa" }}
            className="bg-blue-50 dark:bg-blue-900/40 rounded-xl p-6 w-full sm:w-72 text-center"
          >
            <h4 className="text-lg font-semibold text-blue-700 dark:text-blue-200 mb-2">
              Personalized Pathways
            </h4>
            <p className="text-blue-800 dark:text-blue-100">
              Your learning journey, tailored to you.
            </p>
          </motion.div>
          <motion.div
            whileHover={{ y: -8, boxShadow: "0 8px 32px #60a5fa" }}
            className="bg-blue-50 dark:bg-blue-900/40 rounded-xl p-6 w-full sm:w-72 text-center"
          >
            <h4 className="text-lg font-semibold text-blue-700 dark:text-blue-200 mb-2">
              Instant Feedback
            </h4>
            <p className="text-blue-800 dark:text-blue-100">
              See your progress and results immediately.
            </p>
          </motion.div>
          <motion.div
            whileHover={{ y: -8, boxShadow: "0 8px 32px #60a5fa" }}
            className="bg-blue-50 dark:bg-blue-900/40 rounded-xl p-6 w-full sm:w-72 text-center"
          >
            <h4 className="text-lg font-semibold text-blue-700 dark:text-blue-200 mb-2">
              Instructor Support
            </h4>
            <p className="text-blue-800 dark:text-blue-100">
              Get help and guidance whenever you need it.
            </p>
          </motion.div>
          <motion.div
            whileHover={{ y: -8, boxShadow: "0 8px 32px #60a5fa" }}
            className="bg-blue-50 dark:bg-blue-900/40 rounded-xl p-6 w-full sm:w-72 text-center"
          >
            <h4 className="text-lg font-semibold text-blue-700 dark:text-blue-200 mb-2">
              Progress Tracking
            </h4>
            <p className="text-blue-800 dark:text-blue-100">
              Visualize your mastery and achievements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-indigo-900 to-blue-900 text-white">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">About Us</h2>
          <p className="text-base sm:text-lg mb-6">
            PreAssess is built by a passionate team of learners and educators.
            Our mission is to make learning smarter, more personalized, and more
            effective for everyone.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-20 bg-white dark:bg-gray-900">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 md:mb-10 text-blue-900 dark:text-white">
          Frequently Asked Questions
        </h2>
        <div className="max-w-2xl mx-auto px-4">
          {faqData.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={false}
              animate={{ height: openFaq === idx ? "auto" : 64 }}
              className="overflow-hidden mb-4 rounded-xl shadow bg-blue-50 dark:bg-blue-900/40"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full text-left px-4 sm:px-6 py-4 font-semibold text-blue-700 dark:text-blue-200"
              >
                {faq.question}
              </button>
              {openFaq === idx && (
                <div className="px-4 sm:px-6 pb-4 text-blue-800 dark:text-blue-100">
                  {faq.answer}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* UI Screenshots Section - Horizontally Scrollable with Descriptions */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-blue-900 via-indigo-900 to-gray-900">
        <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 md:mb-10">
          See PreAssess in Action
        </h2>
        <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-blue-100 snap-x snap-mandatory">
          <div className="flex gap-6 sm:gap-8 px-4 min-w-fit pb-4">
            {[
              {
                src: "/screenshots/dashboard.png",
                alt: "Instructor Dashboard",
                desc: "The Instructor Dashboard provides a comprehensive overview of student progress, quiz results, and learning analytics at a glance.",
              },
              {
                src: "/screenshots/student-detail.png",
                alt: "Student Detail Modal",
                desc: "Dive into individual student details, track their mastery, quiz attempts, and address their queries directly.",
              },
              {
                src: "/screenshots/assessment-tracking.png",
                alt: "Assessment Tracking Page",
                desc: "Monitor assessment completion and performance for every student, ensuring no one falls behind.",
              },
              {
                src: "/screenshots/query-system.png",
                alt: "Query System Panel",
                desc: "A dedicated panel for students to raise queries and for instructors to respond, fostering interactive learning.",
              },
              {
                src: "/screenshots/learning-modules.png",
                alt: "Learning Module View",
                desc: "Explore structured learning modules, each with clear prerequisites and progress indicators.",
              },
              {
                src: "/screenshots/quiz.png",
                alt: "Quiz In Progress",
                desc: "Take quizzes to assess your understanding, with instant feedback and adaptive question flow.",
              },
              {
                src: "/screenshots/quiz-result.png",
                alt: "Quiz Result",
                desc: "View detailed quiz results, including correct answers, explanations, and areas for improvement.",
              },
              {
                src: "/screenshots/quiz-evaluation.png",
                alt: "Quiz Evaluation",
                desc: "Instructors can evaluate quiz attempts, provide feedback, and unlock new learning paths.",
              },
              {
                src: "/screenshots/prerequisites.png",
                alt: "Prerequisite Display",
                desc: "Visualize topic dependencies and prerequisites, ensuring a logical and effective learning journey.",
              }
            ].map((item, idx) => (
              <motion.div
                key={item.src}
                className="flex flex-col items-center w-64 sm:w-[20%] min-w-[100vw] sm:min-w-[23.7%] snap-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="rounded-xl shadow-lg w-full h-auto mb-4 transition-transform hover:scale-105 bg-white/20 border border-blue-200 object-contain"
                />
                <p className="text-white/90 text-center text-sm sm:text-base bg-blue-900/60 rounded-lg px-4 py-4 shadow w-full">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white/60 dark:bg-gradient-to-r dark:from-blue-900 dark:to-indigo-900 text-white py-12 mt-12 md:mt-20 relative overflow-x-clip backdrop-blur-md transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3 mb-6 md:mb-8 relative">
            <motion.div
              className="w-8 h-8 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-lg flex items-center justify-center shadow-lg"
              initial={{ y: 0 }}
              animate={{ y: [0, -4, 0, 4, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <BookOpen className="w-5 h-5 text-white" />
            </motion.div>
            <span className="text-xl font-bold relative">
              PreAssess
              <motion.div
                className="absolute left-0 right-0 -bottom-1 h-1 rounded-full bg-gradient-to-r from-blue-300 to-indigo-400 opacity-80"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: [0, 1, 0] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                style={{ originX: 0 }}
              />
            </span>
          </div>
          <div className="text-center text-black/80 dark:text-white/80">
            <p>&copy; 2025 PreAssess. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
