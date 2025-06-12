import React, { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { TopicLearning } from './components/TopicLearning';
import { ExamPage } from './components/ExamPage';
import { mockTopics } from './data/mockData';
import { Topic } from './types';
import { 
  BookOpen, 
  Brain, 
  TrendingUp, 
  Users, 
  Star, 
  CheckCircle, 
  ArrowRight, 
  Menu, 
  X,
  Target,
  Award,
  Clock,
  Zap,
  BarChart3,
  Heart,
  Mail,
  Phone,
  MapPin,
  Code,
  Database,
  TreePine,
  GitBranch,
  Eye,
  EyeOff,
  Cpu,
  Lightbulb,
  Sparkles,
  Shield,
  Rocket,
  Globe
} from 'lucide-react';
import HelpCenter from './pages/HelpCenter';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

type Page = 'home' | 'login' | 'signup' | 'dashboard' | 'forgot-password' | 'reset-password' | 'topic-learning' | 'exam' | 'help-center' | 'contact' | 'privacy-policy' | 'terms-of-service';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [resetToken, setResetToken] = useState<string | null>(null);
  const [resetEmail, setResetEmail] = useState<string>('');
  const [resetStatus, setResetStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [resetMessage, setResetMessage] = useState<string>('');
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Learning Path",
      description: "Our intelligent system analyzes your coding skills and creates personalized DSA learning recommendations tailored to your pace and goals."
    },
    {
      icon: Code,
      title: "Interactive Coding Environment",
      description: "Practice DSA problems with our built-in code editor supporting multiple programming languages with real-time AI feedback and hints."
    },
    {
      icon: Sparkles,
      title: "Smart Problem Recommendations",
      description: "AI curates the perfect sequence of problems based on your progress, ensuring optimal learning curve and skill development."
    },
    {
      icon: Target,
      title: "Adaptive Difficulty System",
      description: "Machine learning algorithms adjust problem difficulty in real-time based on your performance and learning patterns."
    }
  ];

  const howItWorks = [
    {
      step: "01",
      title: "Create Your Free Account",
      description: "Sign up in seconds with just your email. No credit card required, no hidden fees - completely free forever."
    },
    {
      step: "02",
      title: "AI Skill Assessment",
      description: "Take our intelligent assessment test where AI evaluates your current DSA knowledge and identifies your strengths and areas for improvement."
    },
    {
      step: "03",
      title: "Get Personalized Roadmap",
      description: "Receive an AI-generated learning path with customized topics, problems, and study schedules based on your goals and available time."
    },
    {
      step: "04",
      title: "Start Learning with AI",
      description: "Access hundreds of DSA topics, solve AI-recommended problems, and get intelligent hints and explanations as you progress."
    }
  ];

  const stats = [
    { number: "500+", label: "AI-Curated Problems" },
    { number: "50+", label: "Data Structures" },
    { number: "100+", label: "Algorithm Patterns" },
    { number: "100%", label: "Free Forever" }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Always Free",
      description: "Complete access to all features, forever. No premium plans, no hidden costs."
    },
    {
      icon: Brain,
      title: "AI-Powered",
      description: "Intelligent recommendations that adapt to your learning style and progress."
    },
    {
      icon: Rocket,
      title: "Career Ready",
      description: "Master DSA concepts that top tech companies test in their interviews."
    },
    {
      icon: Globe,
      title: "Learn Anywhere",
      description: "Access your personalized learning path from any device, anytime."
    }
  ];

  const handlePageChange = (page: Page) => {
    setCurrentPage(page);
    if (page === 'login' || page === 'home') {
      setResetStatus('idle');
      setResetMessage('');
      setResetEmail('');
      setResetToken(null);
    }
    if (page === 'reset-password') {
      setResetStatus('idle');
      setResetMessage('');
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPage('dashboard');
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setCurrentPage('home');
    setSelectedTopic(null);
  };

  const handleStartTopic = (topicId: string) => {
    const topic = mockTopics.find(t => t.id === topicId);
    if (topic) {
      setSelectedTopic(topic);
      setCurrentPage('topic-learning');
    }
  };

  const handleTakeExam = (topicId: string) => {
    const topic = mockTopics.find(t => t.id === topicId);
    if (topic) {
      setSelectedTopic(topic);
      setCurrentPage('exam');
    }
  };

  const handleExamComplete = (score: number) => {
    // Update topic with exam score
    console.log('Exam completed with score:', score);
  };

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setResetStatus('loading');
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setResetStatus('success');
      setResetMessage('Password reset instructions have been sent to your email.');
      setTimeout(() => {
        setCurrentPage('reset-password');
        setResetStatus('idle');
        setResetMessage('');
      }, 2000);
    } catch (error) {
      setResetStatus('error');
      setResetMessage('Failed to send reset instructions. Please try again.');
    }
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const newPassword = (form.elements.namedItem('new-password') as HTMLInputElement).value;
    const confirmPassword = (form.elements.namedItem('confirm-new-password') as HTMLInputElement).value;

    if (newPassword !== confirmPassword) {
      setResetStatus('error');
      setResetMessage('Passwords do not match. Please try again.');
      return;
    }

    if (newPassword.length < 8) {
      setResetStatus('error');
      setResetMessage('Password must be at least 8 characters long.');
      return;
    }

    setResetStatus('loading');
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setResetStatus('success');
      setResetMessage('Your password has been reset successfully.');
      setTimeout(() => {
        handlePageChange('login');
      }, 2000);
    } catch (error) {
      setResetStatus('error');
      setResetMessage('Failed to reset password. Please try again.');
    }
  };

  const renderHomePage = () => (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">DSA AI Tutor</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">AI Features</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition-colors">How It Works</a>
              <a href="#benefits" className="text-gray-600 hover:text-blue-600 transition-colors">Benefits</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
              <button 
                onClick={() => setCurrentPage('login')}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Login
              </button>
              <button 
                onClick={() => setCurrentPage('signup')}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started Free
              </button>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-4 py-4 space-y-3">
              <a href="#features" className="block text-gray-600 hover:text-blue-600">AI Features</a>
              <a href="#how-it-works" className="block text-gray-600 hover:text-blue-600">How It Works</a>
              <a href="#benefits" className="block text-gray-600 hover:text-blue-600">Benefits</a>
              <a href="#contact" className="block text-gray-600 hover:text-blue-600">Contact</a>
              <button 
                onClick={() => setCurrentPage('login')}
                className="block w-full text-left text-gray-600 hover:text-blue-600"
              >
                Login
              </button>
              <button 
                onClick={() => setCurrentPage('signup')}
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started Free
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-purple-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                  <Sparkles className="w-4 h-4" />
                  <span>AI-Powered Learning • 100% Free Forever</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Master
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> DSA with AI </span>
                  Recommendations
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Experience personalized Data Structures & Algorithms learning with our intelligent recommendation system. 
                  AI analyzes your progress and creates the perfect learning path just for you - completely free!
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setCurrentPage('signup')}
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <Brain className="w-5 h-5" />
                  <span>Start AI Learning</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => setCurrentPage('login')}
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <Lightbulb className="w-5 h-5" />
                  <span>Already Have Account?</span>
                </button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=40&h=40" alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
                    <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=40&h=40" alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
                    <img src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=40&h=40" alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
                  </div>
                  <span className="text-gray-600">Join 25K+ students</span>
                </div>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-gray-600 ml-2">4.9/5 AI rating</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="AI-powered programming and coding"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl -z-10 opacity-20"></div>
              <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-gradient-to-br from-orange-400 to-pink-600 rounded-2xl -z-10 opacity-20"></div>
              
              {/* AI Badge */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                <div className="flex items-center space-x-2">
                  <Cpu className="w-5 h-5 text-blue-500" />
                  <span className="text-sm font-medium">AI Powered</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              AI-Powered DSA Learning Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the future of DSA education with our intelligent recommendation system that adapts to your learning style and pace.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How to Get Started with AI Learning
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of students who are mastering DSA with our AI-powered platform. 
              Getting started is simple and completely free.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {howItWorks.map((step, index) => (
                <div key={index} className="flex space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                      {step.step}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="AI-powered coding and algorithms"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                <div className="flex items-center space-x-2">
                  <Brain className="w-5 h-5 text-blue-500" />
                  <span className="text-sm font-medium">AI Analyzing Progress</span>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm font-medium">Personalized Path Ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose DSA AI Tutor?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the most advanced AI-powered DSA learning platform designed to help you succeed in tech interviews and beyond.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Experience AI-Powered DSA Learning?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students who are mastering DSA with personalized AI recommendations. 
            Start your intelligent learning journey today - completely free!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setCurrentPage('signup')}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <Brain className="w-5 h-5" />
              <span>Start Free AI Learning</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={() => setCurrentPage('login')}
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <Lightbulb className="w-5 h-5" />
              <span>Already Have Account?</span>
            </button>
          </div>
          <div className="mt-6 text-blue-100">
            <p className="text-lg font-medium">✨ Always Free • No Hidden Costs • AI-Powered</p>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Get AI-Curated DSA Tips & Updates
          </h2>
          <p className="text-gray-400 mb-8">
            Receive weekly AI-selected coding challenges, algorithm explanations, and personalized learning tips.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
              <Sparkles className="w-4 h-4" />
              <span>Subscribe Free</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">DSA AI Tutor</span>
              </div>
              <p className="text-gray-400 max-w-md mb-6">
                The world's first AI-powered DSA education recommendation system. 
                Personalized learning paths, intelligent problem curation, and adaptive difficulty - all completely free.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-400">mernstack@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-400">+91 9876543219</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-400">IIT Ropar, India</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">AI Platform</h3>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => setCurrentPage('dashboard')} className="hover:text-white transition-colors">Smart Courses</button></li>
                <li><button onClick={() => setCurrentPage('dashboard')} className="hover:text-white transition-colors">AI Practice</button></li>
                <li><button onClick={() => setCurrentPage('dashboard')} className="hover:text-white transition-colors">Personalized Path</button></li>
                <li><button onClick={() => setCurrentPage('dashboard')} className="hover:text-white transition-colors">Progress Analytics</button></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => setCurrentPage('help-center')} className="hover:text-white transition-colors">Help Center</button></li>
                <li><button onClick={() => setCurrentPage('contact')} className="hover:text-white transition-colors">Contact Us</button></li>
                <li><button onClick={() => setCurrentPage('privacy-policy')} className="hover:text-white transition-colors">Privacy Policy</button></li>
                <li><button onClick={() => setCurrentPage('terms-of-service')} className="hover:text-white transition-colors">Terms of Service</button></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
            <p>&copy; 2025 DSA AI Tutor. All rights reserved. • Always Free • AI-Powered Learning</p>
          </div>
        </div>
      </footer>
    </div>
  );

  const renderLoginPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-orange-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="flex justify-center">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Brain className="w-7 h-7 text-white" />
            </div>
          </div>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">Welcome back to AI Learning</h2>
          <p className="mt-2 text-sm text-gray-600">
            Don't have an account?{' '}
            <button 
              onClick={() => setCurrentPage('signup')}
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Start free AI learning here
            </button>
          </p>
        </div>
        
        <div className="bg-white py-8 px-6 shadow-xl rounded-xl">
          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="mt-1 appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:z-10"
                placeholder="Enter your email"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  className="appearance-none relative block w-full px-3 py-3 pr-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:z-10"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <button 
                  type="button"
                  onClick={() => setCurrentPage('forgot-password')}
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Forgot your password?
                </button>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
              >
                <Brain className="w-5 h-5 mr-2" />
                Access DSA Topics & AI Learning
              </button>
            </div>
          </form>
        </div>
        
        <div className="text-center">
          <button 
            onClick={() => setCurrentPage('home')}
            className="text-blue-600 hover:text-blue-500 font-medium"
          >
            ← Back to home
          </button>
        </div>
      </div>
    </div>
  );

  const renderSignupPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-orange-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="flex justify-center">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Brain className="w-7 h-7 text-white" />
            </div>
          </div>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">Start Your AI Learning Journey</h2>
          <p className="mt-2 text-sm text-gray-600">
            Already have an account?{' '}
            <button 
              onClick={() => setCurrentPage('login')}
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Sign in here
            </button>
          </p>
          <div className="mt-3 inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            <span>100% Free Forever • No Credit Card Required</span>
          </div>
        </div>
        
        <div className="bg-white py-8 px-6 shadow-xl rounded-xl">
          <form className="space-y-6" onSubmit={handleSignup}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                  First name
                </label>
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  autoComplete="given-name"
                  required
                  className="mt-1 appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="First name"
                />
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                  Last name
                </label>
                <input
                  id="last-name"
                  name="last-name"
                  type="text"
                  autoComplete="family-name"
                  required
                  className="mt-1 appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Last name"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="mt-1 appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your email"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  required
                  className="appearance-none relative block w-full px-3 py-3 pr-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Create a password"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                Confirm password
              </label>
              <div className="mt-1 relative">
                <input
                  id="confirm-password"
                  name="confirm-password"
                  type={showConfirmPassword ? "text" : "password"}
                  autoComplete="new-password"
                  required
                  className="appearance-none relative block w-full px-3 py-3 pr-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Confirm your password"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Eye className="h-5 h-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="agree-terms"
                name="agree-terms"
                type="checkbox"
                required
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="agree-terms" className="ml-2 block text-sm text-gray-900">
                I agree to the{' '}
                <a href="#" className="text-blue-600 hover:text-blue-500">Terms of Service</a>
                {' '}and{' '}
                <a href="#" className="text-blue-600 hover:text-blue-500">Privacy Policy</a>
              </label>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
              >
                <Brain className="w-5 h-5 mr-2" />
                Start AI Learning Journey
              </button>
            </div>
          </form>
        </div>
        
        <div className="text-center">
          <button 
            onClick={() => setCurrentPage('home')}
            className="text-blue-600 hover:text-blue-500 font-medium"
          >
            ← Back to home
          </button>
        </div>
      </div>
    </div>
  );

  const renderForgotPasswordPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-orange-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="flex justify-center">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Brain className="w-7 h-7 text-white" />
            </div>
          </div>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">Reset Your Password</h2>
          <p className="mt-2 text-sm text-gray-600">
            Enter your email address and we'll send you instructions to reset your password.
          </p>
        </div>
        
        <div className="bg-white py-8 px-6 shadow-xl rounded-xl">
          {resetStatus === 'success' ? (
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <p className="text-sm text-gray-600">{resetMessage}</p>
              <button
                onClick={() => setCurrentPage('login')}
                className="mt-4 text-blue-600 hover:text-blue-500 font-medium"
              >
                Return to login
              </button>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleForgotPassword}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={resetEmail}
                  onChange={(e) => setResetEmail(e.target.value)}
                  className="mt-1 appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your email"
                />
              </div>

              {resetStatus === 'error' && (
                <div className="text-red-600 text-sm text-center">
                  {resetMessage}
                </div>
              )}

              <div>
                <button
                  type="submit"
                  disabled={resetStatus === 'loading'}
                  className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {resetStatus === 'loading' ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send Reset Instructions'
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
        
        <div className="text-center">
          <button 
            onClick={() => setCurrentPage('login')}
            className="text-blue-600 hover:text-blue-500 font-medium"
          >
            ← Back to login
          </button>
        </div>
      </div>
    </div>
  );

  const renderResetPasswordPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-orange-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="flex justify-center">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Brain className="w-7 h-7 text-white" />
            </div>
          </div>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">Set New Password</h2>
          <p className="mt-2 text-sm text-gray-600">
            Please enter your new password below.
          </p>
          {resetEmail && (
            <p className="mt-1 text-sm text-gray-500">
              Resetting password for: {resetEmail}
            </p>
          )}
        </div>
        
        <div className="bg-white py-8 px-6 shadow-xl rounded-xl">
          {resetStatus === 'success' ? (
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <p className="text-sm text-gray-600">{resetMessage}</p>
              <button
                onClick={() => handlePageChange('login')}
                className="mt-4 text-blue-600 hover:text-blue-500 font-medium"
              >
                Return to login
              </button>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleResetPassword}>
              <div>
                <label htmlFor="new-password" className="block text-sm font-medium text-gray-700">
                  New password
                </label>
                <div className="mt-1 relative">
                  <input
                    id="new-password"
                    name="new-password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="new-password"
                    required
                    minLength={8}
                    className="appearance-none relative block w-full px-3 py-3 pr-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter new password (min. 8 characters)"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>

              <div>
                <label htmlFor="confirm-new-password" className="block text-sm font-medium text-gray-700">
                  Confirm new password
                </label>
                <div className="mt-1 relative">
                  <input
                    id="confirm-new-password"
                    name="confirm-new-password"
                    type={showConfirmPassword ? "text" : "password"}
                    autoComplete="new-password"
                    required
                    minLength={8}
                    className="appearance-none relative block w-full px-3 py-3 pr-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Confirm new password"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>

              {resetStatus === 'error' && (
                <div className="text-red-600 text-sm text-center">
                  {resetMessage}
                </div>
              )}

              <div>
                <button
                  type="submit"
                  disabled={resetStatus === 'loading'}
                  className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {resetStatus === 'loading' ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Resetting...
                    </span>
                  ) : (
                    'Reset Password'
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {currentPage === 'home' && renderHomePage()}
      {currentPage === 'login' && renderLoginPage()}
      {currentPage === 'signup' && renderSignupPage()}
      {currentPage === 'dashboard' && (
        <Dashboard 
          onLogout={handleLogout}
          onStartTopic={handleStartTopic}
          onTakeExam={handleTakeExam}
        />
      )}
      {currentPage === 'forgot-password' && renderForgotPasswordPage()}
      {currentPage === 'reset-password' && renderResetPasswordPage()}
      {currentPage === 'topic-learning' && selectedTopic && (
        <TopicLearning 
          topic={selectedTopic}
          onBack={() => setCurrentPage('dashboard')}
          onTakeExam={() => setCurrentPage('exam')}
        />
      )}
      {currentPage === 'exam' && selectedTopic && (
        <ExamPage 
          topic={selectedTopic}
          onBack={() => setCurrentPage('dashboard')}
          onComplete={handleExamComplete}
        />
      )}
      {currentPage === 'help-center' && <HelpCenter onBack={() => setCurrentPage('home')} />}
      {currentPage === 'contact' && <Contact onBack={() => setCurrentPage('home')} />}
      {currentPage === 'privacy-policy' && <PrivacyPolicy onBack={() => setCurrentPage('home')} />}
      {currentPage === 'terms-of-service' && <TermsOfService onBack={() => setCurrentPage('home')} />}
    </>
  );
}

export default App;