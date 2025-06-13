import React from 'react';
import { Brain, Scale, AlertTriangle, BookOpen, Shield, Users, FileText, ArrowLeft } from 'lucide-react';

interface TermsOfServiceProps {
  onBack: () => void;
}

const TermsOfService: React.FC<TermsOfServiceProps> = ({ onBack }) => {
  const sections = [
    {
      icon: BookOpen,
      title: "Acceptance of Terms",
      content: [
        {
          subtitle: "Agreement to Terms",
          text: "By accessing or using DSA AI Tutor, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this platform."
        },
        {
          subtitle: "Changes to Terms",
          text: "We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the new Terms of Service on this page and updating the effective date."
        }
      ]
    },
    {
      icon: Users,
      title: "User Accounts",
      content: [
        {
          subtitle: "Account Creation",
          text: "To use certain features of our platform, you must create an account. You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate and complete."
        },
        {
          subtitle: "Account Security",
          text: "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account."
        },
        {
          subtitle: "Account Termination",
          text: "We reserve the right to suspend or terminate your account at any time for any reason, including violation of these Terms of Service."
        }
      ]
    },
    {
      icon: Scale,
      title: "User Conduct",
      content: [
        {
          subtitle: "Acceptable Use",
          text: "You agree to use our platform only for lawful purposes and in accordance with these Terms of Service. You shall not use our platform to engage in any activity that violates any applicable law or regulation."
        },
        {
          subtitle: "Prohibited Activities",
          text: "You shall not: (a) attempt to gain unauthorized access to any portion of the platform; (b) interfere with or disrupt the platform or servers; (c) use the platform to harass, abuse, or harm others; (d) submit false or misleading information."
        }
      ]
    },
    {
      icon: Shield,
      title: "Intellectual Property",
      content: [
        {
          subtitle: "Platform Content",
          text: "All content, features, and functionality of our platform, including but not limited to text, graphics, logos, and software, are owned by DSA AI Tutor and are protected by intellectual property laws."
        },
        {
          subtitle: "User Content",
          text: "By submitting content to our platform, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, and distribute such content in connection with providing and improving our services."
        }
      ]
    },
    {
      icon: AlertTriangle,
      title: "Disclaimer of Warranties",
      content: [
        {
          subtitle: "Service Availability",
          text: "We strive to provide uninterrupted access to our platform, but we do not guarantee that our service will be available at all times. We may need to perform maintenance or updates that could temporarily interrupt service."
        },
        {
          subtitle: "Accuracy of Information",
          text: "While we strive to provide accurate and up-to-date information, we do not warrant that the content on our platform is accurate, complete, or current."
        }
      ]
    },
    {
      icon: FileText,
      title: "Limitation of Liability",
      content: [
        {
          subtitle: "Direct Damages",
          text: "To the maximum extent permitted by law, DSA AI Tutor shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the platform."
        },
        {
          subtitle: "Indirect Damages",
          text: "We shall not be liable for any damages arising from the use of our AI recommendations, learning paths, or any other content provided through our platform."
        }
      ]
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
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">Terms of Service</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <div className="prose prose-blue max-w-none">
            <p className="text-gray-600 mb-4">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            <p className="text-gray-600">
              Welcome to DSA AI Tutor. These Terms of Service govern your use of our AI-powered learning platform. 
              By accessing or using our platform, you agree to be bound by these terms. Please read them carefully 
              before using our services.
            </p>
          </div>
        </div>

        {/* Terms Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <section.icon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
              </div>
              <div className="space-y-6">
                {section.content.map((item, idx) => (
                  <div key={idx}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.subtitle}</h3>
                    <p className="text-gray-600">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Questions About Our Terms?</h2>
            <p className="text-blue-100 mb-6">
              If you have any questions about these Terms of Service, please contact our legal team.
            </p>
            <div className="space-y-2 text-white">
              <p className="font-medium">Contact Legal Team</p>
              <p>Email: legal@dsaaitutor.com</p>
              <p>Phone: +91 9876543218</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TermsOfService; 