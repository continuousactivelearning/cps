import React from 'react';
import { Brain, Shield, Lock, Eye, Server, Users, FileText, ArrowLeft } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
  const sections = [
    {
      icon: Shield,
      title: "Information We Collect",
      content: [
        {
          subtitle: "Personal Information",
          text: "We collect information that you provide directly to us, including your name, email address, and any other information you choose to provide when creating an account or using our services."
        },
        {
          subtitle: "Usage Information",
          text: "We automatically collect information about your use of our platform, including the problems you solve, your learning progress, and interaction with our AI system."
        },
        {
          subtitle: "Device Information",
          text: "We collect information about the device you use to access our platform, including hardware model, operating system, and browser type."
        }
      ]
    },
    {
      icon: Lock,
      title: "How We Use Your Information",
      content: [
        {
          subtitle: "Providing Services",
          text: "We use your information to provide, maintain, and improve our AI-powered learning platform, including personalizing your learning experience and tracking your progress."
        },
        {
          subtitle: "Communication",
          text: "We use your email address to send you important updates about our service, respond to your inquiries, and provide support."
        },
        {
          subtitle: "Improving Our Platform",
          text: "We analyze usage patterns to improve our AI algorithms, enhance user experience, and develop new features."
        }
      ]
    },
    {
      icon: Eye,
      title: "Information Sharing",
      content: [
        {
          subtitle: "Service Providers",
          text: "We may share your information with third-party service providers who help us operate our platform, such as cloud hosting services and analytics providers."
        },
        {
          subtitle: "Legal Requirements",
          text: "We may disclose your information if required by law or in response to valid legal process."
        },
        {
          subtitle: "Business Transfers",
          text: "If we are involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction."
        }
      ]
    },
    {
      icon: Server,
      title: "Data Security",
      content: [
        {
          subtitle: "Security Measures",
          text: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction."
        },
        {
          subtitle: "Data Storage",
          text: "Your data is stored on secure servers with industry-standard encryption and access controls."
        },
        {
          subtitle: "Your Role",
          text: "You are responsible for maintaining the security of your account credentials and should not share them with others."
        }
      ]
    },
    {
      icon: Users,
      title: "Your Rights",
      content: [
        {
          subtitle: "Access and Update",
          text: "You can access and update your personal information through your account settings at any time."
        },
        {
          subtitle: "Data Deletion",
          text: "You can request deletion of your account and associated data by contacting our support team."
        },
        {
          subtitle: "Opt-Out",
          text: "You can opt out of non-essential communications by updating your notification preferences."
        }
      ]
    },
    {
      icon: FileText,
      title: "Changes to This Policy",
      content: [
        {
          subtitle: "Updates",
          text: "We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the effective date."
        },
        {
          subtitle: "Continued Use",
          text: "Your continued use of our platform after any changes to this policy constitutes your acceptance of the updated policy."
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
              <h1 className="text-2xl font-bold text-gray-900">Privacy Policy</h1>
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
              At DSA AI Tutor, we take your privacy seriously. This Privacy Policy explains how we collect, 
              use, disclose, and safeguard your information when you use our AI-powered learning platform. 
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, 
              please do not access the platform.
            </p>
          </div>
        </div>

        {/* Policy Sections */}
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
            <h2 className="text-2xl font-bold mb-4">Questions About Our Privacy Policy?</h2>
            <p className="text-blue-100 mb-6">
              If you have any questions about this Privacy Policy or our data practices, 
              please contact our privacy team.
            </p>
            <div className="space-y-2 text-white">
              <p className="font-medium">Contact Privacy Team</p>
              <p>Email: privacy@dsaaitutor.com</p>
              <p>Phone: +91 9876543217</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy; 