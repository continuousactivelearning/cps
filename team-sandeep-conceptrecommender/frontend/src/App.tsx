import React, { useState, useEffect } from 'react';
import { Dashboard } from './components/Dashboard';
import Contact from './pages/Contact';
import HelpCenter from './pages/HelpCenter';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import { User, SECURITY_QUESTIONS } from './types';
import { login, register } from './services/api';
import { Code, Globe, Rocket, X, Menu, Sparkles, ArrowRight, Lightbulb, CheckCircle, Mail, Phone, MapPin, Eye, EyeOff, TrendingUp, Award, BarChart } from 'lucide-react';

type Page = 'home' | 'login' | 'signup' | 'dashboard' | 'forgot-password' | 'reset-password' | 'exam' | 'tutorial' | 'help-center' | 'contact' | 'privacy-policy' | 'terms-of-service';

export const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState<string>('');
  const [resetStatus, setResetStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [resetMessage, setResetMessage] = useState<string>('');
  const [password, setPassword] = useState('');
  const [passwordStrength, setPasswordStrength] = useState<{
    score: number;
    feedback: string[];
    requirements: {
      hasMinLength: boolean;
      hasUpperCase: boolean;
      hasLowerCase: boolean;
      hasNumber: boolean;
      hasSpecialChar: boolean;
    };
  }>({
    score: 0,
    feedback: [],
    requirements: {
      hasMinLength: false,
      hasUpperCase: false,
      hasLowerCase: false,
      hasNumber: false,
      hasSpecialChar: false
    }
  });
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [signupSecurityQuestion, setSignupSecurityQuestion] = useState(SECURITY_QUESTIONS[0]);
  const [signupSecurityAnswer, setSignupSecurityAnswer] = useState('');
  const [forgotStep, setForgotStep] = useState<'email' | 'question' | 'reset'>('email');
  const [forgotEmail, setForgotEmail] = useState('');
  const [forgotSecurityQuestion, setForgotSecurityQuestion] = useState('');
  const [forgotSecurityAnswer, setForgotSecurityAnswer] = useState('');
  const [showResetPassword, setShowResetPassword] = useState(false);
  const [showResetConfirmPassword, setShowResetConfirmPassword] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          const response = await fetch('https://dsa-lpr.onrender.com/api/users/verify', {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
          
          if (response.ok) {
            const data = await response.json();
            setUser({
              id: data.user._id,
              name: data.user.name,
              email: data.user.email,
              role: data.user.role,
              profileImage: data.user.profileImage,
              progress: data.user.progress || [],
              createdAt: data.user.createdAt,
              updatedAt: data.user.updatedAt,
              securityQuestion: data.user.securityQuestion || '',
              securityAnswer: data.user.securityAnswer || ''
            });
            setIsAuthenticated(true);
            setCurrentPage('dashboard');
          } else {
            localStorage.removeItem('token');
            setUser(null);
            setIsAuthenticated(false);
            setCurrentPage('home');
          }
        }
      } catch {
        localStorage.removeItem('token');
        setUser(null);
        setIsAuthenticated(false);
        setCurrentPage('home');
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  const handlePageChange = (page: Page) => {
    setCurrentPage(page);
    if (page === 'login' || page === 'home') {
      setResetStatus('idle');
      setResetMessage('');
      setResetEmail('');
    }
    if (page === 'reset-password') {
      setResetStatus('idle');
      setResetMessage('');
    }
    // Reset password states when navigating away from signup
    if (page !== 'signup') {
      setPassword('');
      setPasswordStrength({
        score: 0,
        feedback: [],
        requirements: {
          hasMinLength: false,
          hasUpperCase: false,
          hasLowerCase: false,
          hasNumber: false,
          hasSpecialChar: false
        }
      });
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const password = (form.elements.namedItem('password') as HTMLInputElement).value;
    
    try {
      const data = await login(email, password);
      
      const userData: User = {
        id: data.user.id,
        name: data.user.name,
        email: data.user.email,
        role: data.user.role,
        profileImage: data.user.profileImage,
        progress: [],
        createdAt: data.user.createdAt,
        updatedAt: data.user.updatedAt,
        securityQuestion: data.user.securityQuestion || '',
        securityAnswer: data.user.securityAnswer || ''
      };
      
      setUser(userData);
      localStorage.setItem('token', data.token);
      setIsAuthenticated(true);
      setCurrentPage('dashboard');
    } catch {
      alert('Login failed. Please check your credentials.');
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const firstName = (form.elements.namedItem('first-name') as HTMLInputElement).value;
    const lastName = (form.elements.namedItem('last-name') as HTMLInputElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const password = (form.elements.namedItem('password') as HTMLInputElement).value;
    const securityQuestion = signupSecurityQuestion;
    const securityAnswer = signupSecurityAnswer;
    try {
      const data = await register({ name: `${firstName} ${lastName}`, email, password, securityQuestion, securityAnswer });
      setUser({
        ...data.user,
        securityQuestion: data.user.securityQuestion || '',
        securityAnswer: data.user.securityAnswer || ''
      });
      localStorage.setItem('token', data.token);
      setCurrentPage('login');
    } catch {
      alert('Signup failed. Please try again.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    setIsAuthenticated(false);
    setCurrentPage('home');
  };

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setResetStatus('loading');
    if (forgotStep === 'email') {
      // Step 1: Get security question
      try {
        const res = await fetch('https://dsa-lpr.onrender.com/api/users/forgot-password', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: forgotEmail })
        });
        const data = await res.json();
        if (res.ok) {
          setForgotSecurityQuestion(data.securityQuestion);
          setForgotStep('question');
        setResetStatus('idle');
        } else {
          setResetStatus('error');
          setResetMessage(data.error || 'User not found');
        }
    } catch {
      setResetStatus('error');
        setResetMessage('Failed to fetch security question.');
      }
    } else if (forgotStep === 'question') {
      // Step 2: Verify answer
      try {
        const res = await fetch('https://dsa-lpr.onrender.com/api/users/verify-security-answer', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: forgotEmail, securityAnswer: forgotSecurityAnswer })
        });
        const data = await res.json();
        if (res.ok && data.success) {
          setForgotStep('reset');
          setResetStatus('idle');
        } else {
          setResetStatus('error');
          setResetMessage(data.error || 'Incorrect answer');
        }
      } catch {
        setResetStatus('error');
        setResetMessage('Failed to verify answer.');
      }
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
      setTimeout(() => setResetStatus('idle'), 1500);
      return;
    }
    try {
      const res = await fetch('https://dsa-lpr.onrender.com/api/users/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: forgotEmail, newPassword })
      });
      const data = await res.json();
      if (res.ok && data.success) {
      setResetStatus('success');
        setResetMessage('Password reset successful! Redirecting to login...');
      setTimeout(() => {
          setCurrentPage('login');
          setForgotStep('email');
          setForgotEmail('');
          setForgotSecurityQuestion('');
          setForgotSecurityAnswer('');
          setResetStatus('idle');
          setResetMessage('');
      }, 2000);
      } else {
        setResetStatus('error');
        setResetMessage(data.error || 'Failed to reset password.');
        setTimeout(() => setResetStatus('idle'), 1500);
      }
    } catch {
      setResetStatus('error');
      setResetMessage('Failed to reset password.');
      setTimeout(() => setResetStatus('idle'), 1500);
    }
  };

  const validatePassword = (pass: string) => {
    const requirements = {
      hasMinLength: pass.length >= 8,
      hasUpperCase: /[A-Z]/.test(pass),
      hasLowerCase: /[a-z]/.test(pass),
      hasNumber: /[0-9]/.test(pass),
      hasSpecialChar: /[!@#$%^&*(),.?":{}|<>_]/.test(pass)
    };

    const feedback = [];
    if (!requirements.hasMinLength) feedback.push('At least 8 characters');
    if (!requirements.hasUpperCase) feedback.push('At least one uppercase letter');
    if (!requirements.hasLowerCase) feedback.push('At least one lowercase letter');
    if (!requirements.hasNumber) feedback.push('At least one number');
    if (!requirements.hasSpecialChar) feedback.push('At least one special character (!@#$%^&*(),.?":{}|<>_)');

    // Calculate strength score (0-4)
    const score = Object.values(requirements).filter(Boolean).length;

    setPasswordStrength({
      score,
      feedback,
      requirements
    });

    return score === 5; // Password is valid only if all requirements are met
  };

  const features = [
    {
      icon: Code,
      title: "Comprehensive Topic Coverage",
      description: "Explore a wide range of DSA topics, from basic arrays to advanced graph algorithms, all in one place."
    },
    {
      icon: CheckCircle,
      title: "Topic-wise Quizzes",
      description: "Test your understanding with targeted quizzes for each topic to solidify your knowledge and identify weak spots."
    },
    {
      icon: TrendingUp,
      title: "Personalized Progress Tracking",
      description: "Monitor your scores, completed topics, and overall progress with our detailed analytics and visualizations."
    },
    {
      icon: Lightbulb,
      title: "Interactive Learning",
      description: "Engage with tutorials and practical examples to build a strong foundation in every concept."
    }
  ];

  const howItWorks = [
    {
      step: "01",
      title: "Create Your Free Account",
      description: "Sign up in seconds to get started. It's completely free, with no hidden costs."
    },
    {
      step: "02",
      title: "Select Your Topics",
      description: "Choose the topics you already know or want to learn. Start with the basics or jump into advanced subjects."
    },
    {
      step: "03",
      title: "Take Quizzes & Learn",
      description: "Take quizzes to assess your knowledge. If you pass, the topic is marked as completed. If not, use our tutorials to learn."
    },
    {
      step: "04",
      title: "Track Your Mastery",
      description: "Watch your progress grow with detailed reports, charts, and score tracking on your personal dashboard."
    }
  ];

  const benefits = [
    {
      icon: Award,
      title: "Always Free",
      description: "Full access to all our learning materials and features at no cost. Ever."
    },
    {
      icon: Rocket,
      title: "Interview Ready",
      description: "Focus on the core concepts and problem-solving skills required to ace technical interviews at top companies."
    },
    {
      icon: BarChart,
      title: "Structured Learning",
      description: "Follow a clear, structured path through DSA topics, building your knowledge logically from the ground up."
    },
    {
      icon: Globe,
      title: "Learn Anywhere",
      description: "Our platform is fully responsive, allowing you to learn and practice on any device, anytime."
    }
  ];

  const renderHomePage = () => (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">DSA Tutor</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
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
              <a href="#features" className="block text-gray-600 hover:text-blue-600">Features</a>
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

      {/* App Description */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-blue-50 via-purple-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text on the left */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Welcome to DSA Tutor</h1>
              <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto lg:mx-0">
                This is a Data Structures and Algorithms (DSA) learning and practice platform with personalized progress tracking, topic-wise quizzes, and analytics. Practice, track your progress, and master DSA for interviews and academics.
                </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button 
                  onClick={() => setCurrentPage('signup')}
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <Code className="w-5 h-5" />
                  <span>Start Learning</span>
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
                  </div>
            {/* Image on the right */}
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Programming and coding"
                  className="rounded-2xl shadow-2xl mx-auto"
                />
              </div>
              <div className="absolute -top-8 -left-8 w-72 h-72 bg-blue-300 rounded-full -z-10 opacity-20 blur-3xl"></div>
              <div className="absolute -bottom-8 -right-8 w-72 h-72 bg-purple-300 rounded-full -z-10 opacity-20 blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">20+</div>
              <div className="text-gray-600">Data Structures</div>
              </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">10+</div>
              <div className="text-gray-600">Algorithmic Methods</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">30+</div>
              <div className="text-gray-600">Algorithms</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">62</div>
              <div className="text-gray-600">Topics</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Powerful Learning Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform is packed with features to help you master DSA effectively and track your progress.
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
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Getting started is simple and straightforward. Follow these steps to begin your learning journey.
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
                alt="Coding and algorithms"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose DSA Tutor?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform is designed to provide the best learning experience for aspiring developers and students.
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
            Ready to Master DSA?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Start your learning journey today and build the skills needed for a successful career in tech. It's completely free!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setCurrentPage('signup')}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <Code className="w-5 h-5" />
              <span>Start Learning for Free</span>
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
            <p className="text-lg font-medium">✨ Always Free • No Hidden Costs</p>
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
                  <Code className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">DSA Tutor</span>
              </div>
              <p className="text-gray-400 max-w-md mb-6">
                A modern platform for learning and practicing Data Structures and Algorithms. Personalized progress tracking, topic-wise quizzes, and analytics to help you master DSA for interviews and academics.
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
            <p>&copy; 2025 DSA Tutor. All rights reserved. • Always Free • Learn and Practice DSA</p>
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
              <Code className="w-7 h-7 text-white" />
            </div>
          </div>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">Welcome back</h2>
          <p className="mt-2 text-sm text-gray-600">
            Don't have an account?{' '}
            <button 
              onClick={() => setCurrentPage('signup')}
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Start for free here
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
                <Code className="w-5 h-5 mr-2" />
                Access Your Dashboard
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

  const renderSignupPage = () => {
    // Store the current page in sessionStorage when navigating to terms or privacy
    const handleTermsClick = () => {
      sessionStorage.setItem('previousPage', 'signup');
      setCurrentPage('terms-of-service');
    };

    const handlePrivacyClick = () => {
      sessionStorage.setItem('previousPage', 'signup');
      setCurrentPage('privacy-policy');
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-orange-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <div className="flex justify-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Code className="w-7 h-7 text-white" />
              </div>
            </div>
            <h2 className="mt-6 text-3xl font-bold text-gray-900">Start Your Learning Journey</h2>
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
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      validatePassword(e.target.value);
                    }}
                    className={`appearance-none relative block w-full px-3 py-3 pr-10 border ${
                      password ? (
                        passwordStrength.score === 5 ? 'border-green-500' :
                        passwordStrength.score >= 3 ? 'border-yellow-500' :
                        'border-red-500'
                      ) : 'border-gray-300'
                    } placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
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
                
                {password && (
                  <div className="mt-2">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className={`h-full transition-all duration-300 ${
                            passwordStrength.score === 5 ? 'bg-green-500' :
                            passwordStrength.score >= 3 ? 'bg-yellow-500' :
                            'bg-red-500'
                          }`}
                          style={{ width: `${(passwordStrength.score / 5) * 100}%` }}
                        />
                      </div>
                      <span className={`text-sm font-medium ${
                        passwordStrength.score === 5 ? 'text-green-600' :
                        passwordStrength.score >= 3 ? 'text-yellow-600' :
                        'text-red-600'
                      }`}>
                        {passwordStrength.score === 5 ? 'Strong' :
                         passwordStrength.score >= 3 ? 'Medium' :
                         'Weak'}
                      </span>
                    </div>
                    
                    <div className="space-y-1">
                      <p className="text-sm text-gray-600 mb-2">Password must contain:</p>
                      <ul className="text-sm space-y-1">
                        <li className={`flex items-center ${passwordStrength.requirements.hasMinLength ? 'text-green-600' : 'text-gray-500'}`}>
                          <CheckCircle className={`w-4 h-4 mr-2 ${passwordStrength.requirements.hasMinLength ? 'text-green-500' : 'text-gray-400'}`} />
                          At least 8 characters
                        </li>
                        <li className={`flex items-center ${passwordStrength.requirements.hasUpperCase ? 'text-green-600' : 'text-gray-500'}`}>
                          <CheckCircle className={`w-4 h-4 mr-2 ${passwordStrength.requirements.hasUpperCase ? 'text-green-500' : 'text-gray-400'}`} />
                          At least one uppercase letter
                        </li>
                        <li className={`flex items-center ${passwordStrength.requirements.hasLowerCase ? 'text-green-600' : 'text-gray-500'}`}>
                          <CheckCircle className={`w-4 h-4 mr-2 ${passwordStrength.requirements.hasLowerCase ? 'text-green-500' : 'text-gray-400'}`} />
                          At least one lowercase letter
                        </li>
                        <li className={`flex items-center ${passwordStrength.requirements.hasNumber ? 'text-green-600' : 'text-gray-500'}`}>
                          <CheckCircle className={`w-4 h-4 mr-2 ${passwordStrength.requirements.hasNumber ? 'text-green-500' : 'text-gray-400'}`} />
                          At least one number
                        </li>
                        <li className={`flex items-center ${passwordStrength.requirements.hasSpecialChar ? 'text-green-600' : 'text-gray-500'}`}>
                          <CheckCircle className={`w-4 h-4 mr-2 ${passwordStrength.requirements.hasSpecialChar ? 'text-green-500' : 'text-gray-400'}`} />
                          At least one special character
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
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
                    className={`appearance-none relative block w-full px-3 py-3 pr-10 border ${
                      password && password !== '' ? (
                        password === (document.getElementById('confirm-password') as HTMLInputElement)?.value ? 'border-green-500' : 'border-red-500'
                      ) : 'border-gray-300'
                    } placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
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
                      <Eye className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>

              <div>
                <label htmlFor="security-question" className="block text-sm font-medium text-gray-700">
                  Security Question
                </label>
                <select
                  id="security-question"
                  name="security-question"
                  value={signupSecurityQuestion}
                  onChange={e => setSignupSecurityQuestion(e.target.value)}
                  required
                  className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  {SECURITY_QUESTIONS.map(q => (
                    <option key={q} value={q}>{q}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="security-answer" className="block text-sm font-medium text-gray-700">
                  Security Answer
                </label>
                <input
                  id="security-answer"
                  name="security-answer"
                  type="text"
                  value={signupSecurityAnswer}
                  onChange={e => setSignupSecurityAnswer(e.target.value)}
                  required
                  className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your answer"
                />
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
                  <button 
                    type="button"
                    onClick={handleTermsClick}
                    className="text-blue-600 hover:text-blue-500 font-medium"
                  >
                    Terms of Service
                  </button>
                  {' '}and{' '}
                  <button 
                    type="button"
                    onClick={handlePrivacyClick}
                    className="text-blue-600 hover:text-blue-500 font-medium"
                  >
                    Privacy Policy
                  </button>
                </label>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                >
                  <Code className="w-5 h-5 mr-2" />
                  Start Learning Journey
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
  };

  const renderForgotPasswordPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-orange-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="flex justify-center">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Code className="w-7 h-7 text-white" />
            </div>
          </div>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">Reset Your Password</h2>
          <p className="mt-2 text-sm text-gray-600">
            {forgotStep === 'email' && "Enter your email address and we'll send you instructions to reset your password."}
            {forgotStep === 'question' && "Answer your security question to continue."}
            {forgotStep === 'reset' && "Enter your new password below."}
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
            <>
              {forgotStep === 'email' && (
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
                      value={forgotEmail}
                      onChange={(e) => setForgotEmail(e.target.value)}
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
              {forgotStep === 'question' && (
                <form className="space-y-6" onSubmit={handleForgotPassword}>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Security Question</label>
                    <div className="mt-1 mb-2 p-2 bg-gray-100 rounded text-gray-800">{forgotSecurityQuestion}</div>
        </div>
                  <div>
                    <label htmlFor="security-answer" className="block text-sm font-medium text-gray-700">Your Answer</label>
                    <input
                      id="security-answer"
                      name="security-answer"
                      type="text"
                      value={forgotSecurityAnswer}
                      onChange={e => setForgotSecurityAnswer(e.target.value)}
                      required
                      className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter your answer"
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
                        'Submit Answer'
                      )}
                    </button>
                  </div>
                </form>
              )}
              {forgotStep === 'reset' && (
                <form className="space-y-6" onSubmit={handleResetPassword}>
                  <div>
                    <label htmlFor="new-password" className="block text-sm font-medium text-gray-700">New Password</label>
                    <div className="mt-1 relative">
                      <input
                        id="new-password"
                        name="new-password"
                        type={showResetPassword ? 'text' : 'password'}
                        autoComplete="new-password"
                        required
                        minLength={8}
                        className="appearance-none relative block w-full px-3 py-3 pr-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter new password (min. 8 characters)"
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                        onClick={() => setShowResetPassword(!showResetPassword)}
                      >
                        {showResetPassword ? (
                          <EyeOff className="h-5 w-5 text-gray-400" />
                        ) : (
                          <Eye className="h-5 w-5 text-gray-400" />
                        )}
                      </button>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="confirm-new-password" className="block text-sm font-medium text-gray-700">Confirm New Password</label>
                    <div className="mt-1 relative">
                      <input
                        id="confirm-new-password"
                        name="confirm-new-password"
                        type={showResetConfirmPassword ? 'text' : 'password'}
                        autoComplete="new-password"
                        required
                        minLength={8}
                        className="appearance-none relative block w-full px-3 py-3 pr-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Confirm new password"
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                        onClick={() => setShowResetConfirmPassword(!showResetConfirmPassword)}
                      >
                        {showResetConfirmPassword ? (
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
                          Sending...
                        </span>
                      ) : (
                        'Reset Password'
                      )}
                    </button>
                  </div>
                </form>
              )}
            </>
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
              <Code className="w-7 h-7 text-white" />
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

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {currentPage === 'dashboard' && isAuthenticated && user ? (
        <Dashboard
          user={user}
          onLogout={handleLogout}
        />
      ) : (
        <>
          {currentPage === 'home' && renderHomePage()}
          {currentPage === 'login' && renderLoginPage()}
          {currentPage === 'signup' && renderSignupPage()}
          {currentPage === 'forgot-password' && renderForgotPasswordPage()}
          {currentPage === 'reset-password' && renderResetPasswordPage()}
          {currentPage === 'help-center' && <HelpCenter onBack={() => setCurrentPage('home')} />}
          {currentPage === 'contact' && <Contact onBack={() => setCurrentPage('home')} />}
          {currentPage === 'privacy-policy' && <PrivacyPolicy onBack={() => setCurrentPage('home')} />}
          {currentPage === 'terms-of-service' && <TermsOfService onBack={() => setCurrentPage('home')} />}
        </>
      )}
    </div>
  );
};

export default App;
