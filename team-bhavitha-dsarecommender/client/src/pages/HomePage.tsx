import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { motion } from 'framer-motion';

const HomePage = () => {
  const navigate = useNavigate();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  const handleQuizNavigation = () => {
    navigate(isAuthenticated ? '/quiz-select' : '/login');
  };

  const handleExploreNavigation = () => {
    // Assuming there will be an /explore route in the future
    navigate('/explore');
  };

  const handleRecommendationNavigation = () => {
    navigate(isAuthenticated ? '/dashboard' : '/login'); // Direct to dashboard where path recommendation is
  };

  return (
    <div className="container py-4 bg-dark text-white rounded shadow-lg">
      <h2 className="text-center mb-4 text-purple">Welcome to LearnFlow!</h2>
      <p className="text-center text-white mb-5">
        Your personalized learning journey starts here.
      </p>

      {/* Get Started Section */}
      <hr className="my-5 border-secondary border-dashed" />
      <div className="dashboard-section mb-5">
        <h3 className="text-center mb-4 text-info">Start Your Learning Journey</h3>
        <div className="row justify-content-center g-4">
          <div className="col-md-6 col-lg-5">
            <div className="card text-center bg-secondary-subtle text-dark border-secondary h-100 shadow">
              <div className="card-body p-4">
                <h4 className="card-title text-primary mb-3">New to LearnFlow?</h4>
                <p className="card-text text-dark mb-4">
                  Create your free account and embark on a personalized learning adventure tailored just for you.
                </p>
                <button onClick={() => navigate('/register')} className="btn btn-success btn-lg">
                  Register Now
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-5">
            <div className="card text-center bg-secondary-subtle text-dark border-secondary h-100 shadow">
              <div className="card-body p-4">
                <h4 className="card-title text-primary mb-3">Already a Member?</h4>
                <p className="card-text text-dark mb-4">
                  Welcome back! Log in to pick up where you left off and continue mastering new concepts.
                </p>
                <button onClick={() => navigate('/login')} className="btn btn-primary btn-lg">
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <hr className="my-5 border-secondary border-dashed" />
      <div className="dashboard-section mb-5">
        <h3 className="text-center mb-4 text-info">Unlock Your Potential with LearnFlow</h3>
        <ul className="list-group list-group-flush mx-auto" style={{ maxWidth: '800px' }}>
          <li className="list-group-item bg-dark-subtle text-black border-secondary py-3 text-center"> {/* Added text-white here for the entire list item */}
            <strong className="text-primary">Personalized Paths:</strong> Discover the shortest learning path from your current knowledge to your target concept.
          </li>
          <li className="list-group-item bg-dark-subtle text-black border-secondary py-3 text-center"> {/* Added text-white here */}
            <strong className="text-primary">Adaptive Quizzes:</strong> Test your understanding and adapt your progress path based on quiz performance.
          </li>
          <li className="list-group-item bg-dark-subtle text-black border-secondary py-3 text-center"> {/* Added text-white here */}
            <strong className="text-primary">Progress Tracking:</strong> Visualize your journey through quizzes, weights, and time recommendations.
          </li>
          <li className="list-group-item bg-dark-subtle text-black border-secondary py-3 text-center"> {/* Added text-white here */}
            <strong className="text-primary">Knowledge Graph:</strong> Build deep conceptual understanding through connected topic paths.
          </li>
        </ul>
      </div>

      {/* Action Buttons */}
      <hr className="my-5 border-secondary border-dashed" />
      <div className="dashboard-section text-center">
        <h3 className="mb-4 text-info">Ready to Start?</h3>
        <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleQuizNavigation}
            className="btn btn-warning btn-lg px-5 py-3 w-100 w-sm-auto"
          >
            Take a Quiz
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleExploreNavigation}
            className="btn btn-info btn-lg px-5 py-3 w-100 w-sm-auto"
          >
            Explore Topics
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleRecommendationNavigation}
            className="btn btn-primary btn-lg px-5 py-3 w-100 w-sm-auto"
          >
            Get Recommendation
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;