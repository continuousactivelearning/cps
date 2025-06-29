"use client";

export default function HelpGuidePage() {
  return (
    <div className="min-h-screen px-4 py-10 bg-white dark:bg-gray-900 flex items-center justify-center">
      <div className="max-w-3xl w-full bg-white dark:bg-gray-800 shadow-xl rounded-xl p-8 border border-gray-200 dark:border-gray-700 text-center">
        <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          📘 User Guide: Masterly
        </h1>

        <ul className="space-y-4 text-lg text-left">
          <li className="hover:bg-blue-50 dark:hover:bg-gray-700 p-2 rounded transition-colors">
            🔐 <strong>Sign In / Sign Up:</strong> You can access our application with secured authentication.
          </li>
          <li className="hover:bg-blue-50 dark:hover:bg-gray-700 p-2 rounded transition-colors">
            🏠 <strong>Dashboard:</strong> The dashboard serves as the main interaction hub, offering personalized insights such as recommended topics, progress graphs, assessment scores, and feedback. This enables learners to visualize their learning journey and navigate content effectively.
          </li>
          <li className="hover:bg-blue-50 dark:hover:bg-gray-700 p-2 rounded transition-colors">
            📚 <strong>Courses:</strong> You can explore AI-curated courses tailored to your learning goals and skill level.
          </li>
          <li className="hover:bg-blue-50 dark:hover:bg-gray-700 p-2 rounded transition-colors">
            🧭 <strong>Learning Paths:</strong> Choose from AI-powered learning paths tailored to your skill level and goals, or customize your own roadmap.
Whether guided by AI or your preferences, stay on track with structured, progressive learning.
          </li>
          <li className="hover:bg-blue-50 dark:hover:bg-gray-700 p-2 rounded transition-colors">
            📊 <strong>Progress:</strong> Monitor your learning journey with real-time insights into course completion, quiz scores, and activity timelines. Visual dashboards help you stay motivated, identify gaps, and achieve your personalized learning goals efficiently.
          </li>
          <li className="hover:bg-blue-50 dark:hover:bg-gray-700 p-2 rounded transition-colors">
            🏆 <strong>Achievements:</strong> Celebrate your milestones with badges, certificates, and recognitions earned through course completions and performance. Achievements reflect your progress, boost motivation, and showcase your skills to peers and instructors.
          </li>
          <li className="hover:bg-blue-50 dark:hover:bg-gray-700 p-2 rounded transition-colors">
            👤 <strong>Profile:</strong> Your personalized space to manage your information, track your activity, and customize your learning experience. Easily update your details, view enrolled courses, and monitor your journey through the platform.
          </li>
          <li className="hover:bg-blue-50 dark:hover:bg-gray-700 p-2 rounded transition-colors">
            ⚙️ <strong>Settings:</strong> Customize your platform experience with preferences, notifications, and account options. Control your privacy, theme, language, and learning preferences all in one place.
          </li>
          <li className="hover:bg-blue-50 dark:hover:bg-gray-700 p-2 rounded transition-colors">
            🆘 <strong>Help:</strong> Need assistance? Explore FAQs, tutorials, and guides to navigate and use the platform efficiently. Our support resources are here to help you resolve issues and enhance your learning experience.
          </li>
          <li className="hover:bg-blue-50 dark:hover:bg-gray-700 p-2 rounded transition-colors">
            🆘 <strong>Contact Support:</strong>Facing an issue or have a query? Reach out to our dedicated support team anytime. We are here to assist you with quick, personalized solutions to keep your learning uninterrupted.
          </li>
        </ul>
      </div>
    </div>
  );
}
