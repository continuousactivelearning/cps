import React, { useEffect, useState } from 'react';
import { BookOpen,CheckCircle,Play,Settings, X, Menu } from 'lucide-react';
import { features, steps } from './data/homePageData';
import {User} from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../components/ui/sheet"
import AuthWrapper from '../auth/AuthWrapper';
import { getDetails } from '../services/detailService';
import { Navigate, useNavigate } from 'react-router-dom';
import useSWR from 'swr';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, color }) => (
  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
    <div className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center mb-4`}>
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

interface StepProps {
  number: string;
  title: string;
  description: string;
}

const Step: React.FC<StepProps> = ({ number, title, description }) => (
  <div className="flex items-start space-x-4">
    <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
      {number}
    </div>
    <div>
      <h4 className="font-semibold text-gray-800 mb-1">{title}</h4>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  </div>
);

const HomePage: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState('concept');
  const [isOpen, setIsOpen] = useState(false);
   const [name, setName] = useState('');
  useEffect(()=>{
    const item = localStorage.getItem('id');
    if (!item) {
      setIsOpen(true); 
    } else {
      
      getDetails().then((details) => {
        setName(details.name);
      }).catch(err => {
        console.error('Failed to fetch details:', err);
      });
    }
  },[]);
  const navigate= useNavigate();


  return (
    <div className="min-h-screen w-full  bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Navigation */}
      < nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-16">
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-2 rounded-lg">
          <BookOpen className="w-6 h-6 text-white" />
        </div>
        <span className="text-xl font-bold text-gray-900">AssessmentAI</span>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-6">
        <a href="/" className="text-gray-600 hover:text-blue-600 transition-colors">Home</a>
        <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
        <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition-colors w-24">How It Works</a>
        <a href="#demo" className="text-gray-600 hover:text-blue-600 transition-colors">Demo</a>
        <div className=" p-3 mt-auto ">
                  {isOpen && <AuthWrapper isOpen={isOpen} setIsOpen={setIsOpen}/>}
                  {name && 
                  <button className='flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all hover:cursor-pointer' onClick={()=>{navigate('/home')}}>
          <User className="w-4 h-4 m-1.5" />
          {name}
        </button>}
                {/* <AuthComponent isOpen={isOpen} setIsOpen={setIsOpen} /> */}
                </div>
      </div>

      {/* Mobile menu button with Sheet */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <button
              className="text-gray-600 hover:text-blue-600 transition-colors p-2"
              aria-label="Toggle mobile menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80">
            <SheetHeader>
              <SheetTitle className="flex items-center space-x-3">
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-2 rounded-lg">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold text-gray-900">AssessmentAI</span>
              </SheetTitle>
            </SheetHeader>
            
            {/* Sheet Navigation */}
            <div className="flex-1 px-0 py-6">
              <nav className="space-y-2">
                <a 
                  href="/" 
                  className="flex items-center px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors group"
                >
                  <span className="font-medium">Home</span>
                </a>
                <a 
                  href="#features" 
                  className="flex items-center px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors group"
                >
                  <span className="font-medium">Features</span>
                </a>
                <a 
                  href="#how-it-works" 
                  className="flex items-center px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors group"
                >
                  <span className="font-medium">How It Works</span>
                </a>
                <a 
                  href="#demo" 
                  className="flex items-center px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors group"
                >
                  <span className="font-medium">Demo</span>
                </a>
                <div className=" p-3 mt-auto ">
                  {isOpen && <AuthWrapper isOpen={isOpen} setIsOpen={setIsOpen}/>}
                  {name && 
                  <button className='flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all hover:cursor-pointer' onClick={()=>{navigate('/home')}}>
          <User className="w-4 h-4 m-1.5" />
          {name}
        </button>}
                {/* <AuthComponent isOpen={isOpen} setIsOpen={setIsOpen} /> */}
                </div>
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  </div>
</nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Dependency-Aware
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Assessment </span>
              Generator
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ensure student readiness with intelligent formative assessments that map prerequisite concepts 
              and identify knowledge gaps before progression to new learning objectives.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2">
              <Play className="w-5 h-5" />
              <span>Start Creating Assessments</span>
            </button>
            <button className="bg-white text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-colors border border-gray-200 flex items-center justify-center space-x-2">
              <BookOpen className="w-5 h-5" />
              <span>View Documentation</span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200">
              <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-gray-600">Improved Readiness Detection</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200">
              <div className="text-3xl font-bold text-purple-600 mb-2">40%</div>
              <div className="text-gray-600">Faster Assessment Creation</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200">
              <div className="text-3xl font-bold text-green-600 mb-2">100+</div>
              <div className="text-gray-600">Subject Areas Supported</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Advanced AI-powered tools to create meaningful assessments that truly prepare students for success.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our four-step process ensures comprehensive prerequisite assessment and student readiness.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {steps.map((step, index) => (
                <Step key={index} {...step} />
              ))}
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-gray-200">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-gray-800 mb-4">Sample Assessment Preview</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-gray-600">Arrays and Strings</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-gray-600">Linked Lists (Singly, Doubly, Circular)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 rounded-full border-2 border-orange-400 flex items-center justify-center">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    </div>
                    <span className="text-sm text-gray-600">Stacks and Queues</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 rounded-full border-2 border-red-400"></div>
                    <span className="text-sm text-gray-600">Trees (Binary Trees, BST, AVL, Segment Trees)</span>
                  </div>
                </div>
                <div className="mt-4 text-xs text-gray-500">
                  Readiness Score: 75% - Review Recursion and Backtracking before proceeding
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Demo */}
      <section id="demo" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Try It Yourself</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience how dependency mapping works for different learning objectives.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
            <div className="flex flex-wrap gap-4 mb-6">
              <button 
                onClick={() => setActiveDemo('concept')}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeDemo === 'concept' 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Concept Mapping
              </button>
              <button 
                onClick={() => setActiveDemo('assessment')}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeDemo === 'assessment' 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Assessment Preview
              </button>
              <button 
                onClick={() => setActiveDemo('results')}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeDemo === 'results' 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Results Analysis
              </button>
            </div>
            
            <div className="min-h-[300px] bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-white animate-spin" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Interactive Demo</h3>
                <p className="text-gray-600">
                  {activeDemo === 'concept' && "Visualize how prerequisite concepts are mapped and connected"}
                  {activeDemo === 'assessment' && "See sample questions generated for different skill levels"}
                  {activeDemo === 'results' && "Explore detailed analytics and progression recommendations"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-2 rounded-lg">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold text-white">AssessmentAI</span>
              </div>
              <p className="text-gray-400">
                Intelligent assessment generation for better learning outcomes.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tutorials</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            © 2025 AssessmentAI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;