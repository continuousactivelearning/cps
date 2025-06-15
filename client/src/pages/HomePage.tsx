import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
//import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const HomePage = () => {
  const navigate = useNavigate();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  const handleQuizNavigation = () => {
    navigate(isAuthenticated ? '/quiz-select' : '/login');
  };

  const handleExploreNavigation = () => {
    navigate('/explore');
  };

  const handleRecommendationNavigation = () => {
    navigate(isAuthenticated ? '/recommend' : '/login');
  };

  return (
    <div className="dashboard-container">
      <h2>Welcome to LearnFlow!</h2>
      <p style={{ fontSize: '1.1em', color: '#b0b0b0', marginBottom: '2.5rem' }}>
        Your personalized learning journey starts here.
      </p>

      {/* Get Started Section */}
      <div className="dashboard-section">
        <h3>Start Your Learning Journey</h3>
        <div className="card-grid">
          <div className="card-base">
            <h4>New to LearnFlow?</h4>
            <p style={{ fontSize: '0.95em', color: '#b0b0b0', marginBottom: '1.5rem' }}>
              Create your free account and embark on a personalized learning adventure tailored just for you.
            </p>
            <button onClick={() => navigate('/register')} className="btn btn-secondary">
              Register Now
            </button>
          </div>
          <div className="card-base">
            <h4>Already a Member?</h4>
            <p style={{ fontSize: '0.95em', color: '#b0b0b0', marginBottom: '1.5rem' }}>
              Welcome back! Log in to pick up where you left off and continue mastering new concepts.
            </p>
            <button onClick={() => navigate('/login')} className="btn">
              Login
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="dashboard-section">
        <h3>Unlock Your Potential with LearnFlow</h3>
        <ul className="mastery-list" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <li>
            <strong style={{ color: '#a8c8e9' }}>Personalized Paths:</strong> Discover the shortest learning path from your current knowledge to your target concept.
          </li>
          <li>
            <strong style={{ color: '#a8c8e9' }}>Adaptive Quizzes:</strong> Test your understanding and adapt your progress path based on quiz performance.
          </li>
          <li>
            <strong style={{ color: '#a8c8e9' }}>Progress Tracking:</strong> Visualize your journey through quizzes, weights, and time recommendations.
          </li>
          <li>
            <strong style={{ color: '#a8c8e9' }}>Knowledge Graph:</strong> Build deep conceptual understanding through connected topic paths.
          </li>
        </ul>
      </div>

      {/* Action Buttons */}
      <div className="dashboard-section">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Ready to Start?</h3>
        <div className="actions-group flex flex-col sm:flex-row justify-center items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleQuizNavigation}
            className="btn btn-warning hover:bg-yellow-600 transition-colors duration-200 w-full sm:w-auto px-8 py-3"
          >
            Take a Quiz
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleExploreNavigation}
            className="btn btn-info hover:bg-blue-600 transition-colors duration-200 w-full sm:w-auto px-8 py-3"
          >
            Explore Topics
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleRecommendationNavigation}
            className="btn btn-primary hover:bg-purple-700 transition-colors duration-200 w-full sm:w-auto px-8 py-3"
          >
            Get Recommendation
          </motion.button>
        </div>
      </div>

      {/* Footer */}
    </div>
  );
};

export default HomePage;
