import React from 'react';
import { Brain, Search, BookOpen, MessageSquare, Video, Code, ArrowRight, ArrowLeft } from 'lucide-react';

interface HelpCenterProps {
  onBack: () => void;
}

const HelpCenter: React.FC<HelpCenterProps> = ({ onBack }) => {
  const faqs = [
    {
      question: "How does the AI learning system work?",
      answer: "Our AI system analyzes your coding skills and learning patterns to create a personalized DSA learning path. It adapts to your pace, identifies your strengths and weaknesses, and recommends problems that will help you improve most effectively."
    },
    {
      question: "Is DSA AI Tutor really free?",
      answer: "Yes! DSA AI Tutor is completely free forever. We believe in making quality DSA education accessible to everyone. There are no hidden costs, premium features, or credit card requirements."
    },
    {
      question: "What programming languages are supported?",
      answer: "Currently, we support Python, Java, C++, and JavaScript. Our AI system can provide language-specific recommendations and solutions in these languages."
    },
    {
      question: "How do I track my progress?",
      answer: "Your progress is automatically tracked through our AI system. You can view your learning statistics, completed problems, and skill development in the Progress section of your dashboard."
    }
  ];

  const helpCategories = [
    {
      icon: BookOpen,
      title: "Getting Started",
      description: "Learn how to set up your account and begin your AI-powered learning journey",
      link: "/help/getting-started"
    },
    {
      icon: Code,
      title: "Problem Solving",
      description: "Master DSA problems with our interactive coding environment and AI hints",
      link: "/help/problem-solving"
    },
    {
      icon: MessageSquare,
      title: "Community Support",
      description: "Connect with other learners and get help from our community",
      link: "/help/community"
    },
    {
      icon: Video,
      title: "Video Tutorials",
      description: "Watch step-by-step tutorials for common DSA concepts and problems",
      link: "/help/tutorials"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button 
                onClick={onBack}
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                aria-label="Go back"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                <span>Back</span>
              </button>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-2xl font-bold text-gray-900">Help Center</h1>
              </div>
            </div>
            <div className="relative w-96">
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input 
                type="text" 
                placeholder="Search help articles..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {helpCategories.map((category, index) => (
            <a 
              key={index}
              href={category.link}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <category.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.title}</h3>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <div className="flex items-center text-blue-600">
                <span className="text-sm font-medium">Learn more</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </a>
          ))}
        </div>

        {/* FAQs */}
        <div className="bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Support */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Still Need Help?</h2>
            <p className="text-blue-100 mb-6">
              Our support team is here to help you with any questions or issues you might have.
            </p>
            <a 
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-blue-600 bg-white hover:bg-blue-50 transition-colors duration-200"
            >
              Contact Support
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HelpCenter; 