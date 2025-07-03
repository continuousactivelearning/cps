import React from 'react';
import { Code, ArrowLeft } from 'lucide-react';

interface HelpCenterProps {
  onBack: () => void;
}

const HelpCenter: React.FC<HelpCenterProps> = ({ onBack }) => {
  const faqs = [
    {
      question: "How does the DSA learning system work?",
      answer: "Our platform analyzes your coding skills and learning patterns to create a personalized DSA learning path. It adapts to your pace, identifies your strengths and weaknesses, and recommends problems that will help you improve most effectively."
    },
    {
      question: "Is DSA Tutor really free?",
      answer: "Yes! DSA Tutor is completely free forever. We believe in making quality DSA education accessible to everyone. There are no hidden costs, premium features, or credit card requirements."
    },
    {
      question: "What programming languages are supported?",
      answer: "Currently, we support Python, Java, C++, and JavaScript. You can solve problems and view solutions in these languages."
    },
    {
      question: "How do I track my progress?",
      answer: "Your progress is automatically tracked through our system. You can view your learning statistics, completed problems, and skill development in the Progress section of your dashboard."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
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
                <Code className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">Help Center</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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

        {/* Still Need Help Section (without contact link) */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Still Need Help?</h2>
            <p className="text-blue-100 mb-6">
              Our support team is here to help you with any questions or issues you might have.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HelpCenter; 