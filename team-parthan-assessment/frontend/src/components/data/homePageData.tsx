//  import { Brain,Target, Zap,BarChart3} from 'lucide-react';
 
// export const features = [
//     {
//       icon: <Brain className="w-6 h-6 text-white" />,
//       title: "Smart Dependency Mapping",
//       description: "Automatically identifies prerequisite concepts and skills needed before tackling new learning objectives.",
//       color: "bg-gradient-to-br from-purple-500 to-indigo-600"
//     },
//     {
//       icon: <Target className="w-6 h-6 text-white" />,
//       title: "Adaptive Assessment Generation",
//       description: "Creates personalized formative assessments that target specific knowledge gaps and readiness levels.",
//       color: "bg-gradient-to-br from-blue-500 to-cyan-600"
//     },
//     {
//       icon: <BarChart3 className="w-6 h-6 text-white" />,
//       title: "Real-time Progress Tracking",
//       description: "Monitor student readiness and automatically adjust assessment difficulty based on performance.",
//       color: "bg-gradient-to-br from-green-500 to-emerald-600"
//     },
//     {
//       icon: <Zap className="w-6 h-6 text-white" />,
//       title: "Instant Feedback Loop",
//       description: "Provides immediate insights to both educators and learners about prerequisite mastery.",
//       color: "bg-gradient-to-br from-orange-500 to-red-600"
//     }
//   ];

// export const steps = [
//     {
//       number: "1",
//       title: "Define Learning Objective",
//       description: "Input your target learning goal and the system analyzes required prerequisites."
//     },
//     {
//       number: "2",
//       title: "Map Dependencies",
//       description: "AI identifies and maps all prerequisite concepts and skills needed for success."
//     },
//     {
//       number: "3",
//       title: "Generate Assessment",
//       description: "System creates targeted questions to evaluate readiness for each prerequisite."
//     },
//     {
//       number: "4",
//       title: "Analyze Results",
//       description: "Get detailed insights on student readiness and recommended next steps."
//     }
//   ];


import { Brain, ClipboardCheck, Upload, Users } from 'lucide-react';

export const features = [
  {
    icon: <Brain className="w-6 h-6 text-white" />,
    title: "Concept Graph Mastery",
    description: "Visualizes topic dependencies and unlocks new concepts only after mastering all prerequisites.",
    color: "bg-gradient-to-br from-purple-500 to-indigo-600"
  },
  {
    icon: <Upload className="w-6 h-6 text-white" />,
    title: "Custom Quiz from Content",
    description: "Generate quizzes by uploading YouTube links, PDFs, or images using AI-powered extraction.",
    color: "bg-gradient-to-br from-blue-500 to-cyan-600"
  },
  {
    icon: <ClipboardCheck className="w-6 h-6 text-white" />,
    title: "Standard Learning Path",
    description: "Follow a guided sequence of DSA topics and monitor your readiness through topic-specific quizzes.",
    color: "bg-gradient-to-br from-green-500 to-emerald-600"
  },
  {
    icon: <Users className="w-6 h-6 text-white" />,
    title: "Instructor-Student Support",
    description: "Instructors manage enrolled students, respond to quiz concerns, and update scores or mastery.",
    color: "bg-gradient-to-br from-orange-500 to-red-600"
  }
];

export const steps = [
  {
    number: "1",
    title: "Login and Select Role",
    description: "Sign up as a student or instructor. Students can enroll under instructors using a unique code."
  },
  {
    number: "2",
    title: "Choose Assessment Type",
    description: "Follow the standard learning path or upload external content for custom AI-powered quizzes."
  },
  {
    number: "3",
    title: "Take Quizzes and Track Mastery",
    description: "Attempt topic-wise quizzes and view your mastery, progress, and improvement areas in real time."
  },
  {
    number: "4",
    title: "Review, Raise Concerns, Improve",
    description: "Download results as PDFs, submit quiz concerns to instructors, and keep leveling up."
  }
];
