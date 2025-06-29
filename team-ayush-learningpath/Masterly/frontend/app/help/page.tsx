"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useToast } from "@/hooks/use-toast"
import { HelpCircle, MessageCircle, Mail, Phone, BookOpen, Video, ExternalLink, Send, Bot } from "lucide-react"

// Type definitions
interface ChatMessage {
  id: number;
  sender: string;
  message: string;
  time: string;
}

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function HelpPage() {
  const { toast } = useToast()
  const [chatOpen, setChatOpen] = useState<boolean>(false)
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    { id: 1, sender: "support", message: "Hi! How can I help you today?", time: "Just now" },
  ])
  const [newMessage, setNewMessage] = useState<string>("")
  const [contactForm, setContactForm] = useState<ContactForm>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const faqs = [
    {
      question: "How do I track my learning progress?",
      answer:
        "You can track your progress through the Progress tab in your dashboard. It shows detailed analytics including concepts mastered, time spent, quiz scores, and skill development across different areas.",
    },
    {
      question: "Can I change my learning path?",
      answer:
        "Yes! You can modify your learning path at any time by going to the Learning Paths section. You can add new courses, remove existing ones, or completely switch to a different path based on your goals.",
    },
    {
      question: "How do mock tests work?",
      answer:
        "Mock tests simulate real interview conditions with timed questions across different difficulty levels. After completion, you'll receive detailed feedback, explanations for each question, and recommendations for improvement.",
    },
    {
      question: "What happens if I miss my daily study goal?",
      answer:
        "Missing your daily goal won't affect your overall progress. The system will adjust your recommendations and may suggest shorter sessions to help you get back on track. Consistency is more important than perfection!",
    },
    {
      question: "How are achievements calculated?",
      answer:
        "Achievements are based on various metrics like study streaks, quiz performance, course completions, and skill improvements. Each achievement has specific criteria that you can view in the Progress section.",
    },
    {
      question: "Can I download my certificates?",
      answer:
        "Yes, once you complete a course or learning path, you can download your certificate from the Achievements section. Certificates include verification codes and can be shared on professional networks.",
    },
  ]

  // Simple chatbot knowledge base
  const knowledgeBase = {
    "progress": "You can track your learning progress through the Progress tab in your dashboard. It shows detailed analytics including concepts mastered, time spent, quiz scores, and skill development across different areas.",
    "learning path": "You can modify your learning path at any time by going to the Learning Paths section. You can add new courses, remove existing ones, or completely switch to a different path based on your goals.",
    "mock test": "Quizes simulate real interview conditions with timed questions across different difficulty levels. After completion, you'll receive detailed feedback, explanations for each question, and recommendations for improvement.",
    "certificate": "Once you complete a course or learning path, you can download your certificate from the Achievements section. Certificates include verification codes and can be shared on professional networks.",
    "achievements": "Achievements are based on various metrics like study streaks, quiz performance, course completions, and skill improvements. Each achievement has specific criteria that you can view in the Progress section.",
    "daily goal": "Missing your daily goal won't affect your overall progress. The system will adjust your recommendations and may suggest shorter sessions to help you get back on track. Consistency is more important than perfection!",
    "account": "You can manage your account settings by clicking on your profile picture in the top right corner and selecting 'Account Settings'. Here you can update your personal information, change your password, and manage notifications.",
    "courses": "Browse available courses in the Courses section. You can filter by difficulty, topic, or duration. Each course includes video lessons, practice exercises, and quizzes to test your understanding.",
    "support": "Our support team is available Monday-Friday 9AM-6PM EST, Saturday 10AM-4PM EST. You can reach us via live chat, email at support@masterly.com.",
    "subscription": "You can view and manage your subscription in Account Settings > Billing. We offer monthly and yearly plans with different features. You can upgrade, downgrade, or cancel at any time.",
    "application": "Anyone interested in learning new skills — students, professionals, or hobbyists — can use this platform.We are developing a cross platform to available for all user like android, ios,",
    "reset password": "To reset your password, click 'Forgot Password' on the login page and enter your email. You'll receive a reset link within a few minutes. If you don't see it, check your spam folder.",
    "notifications": "You can customize your notification preferences in Account Settings > Notifications. Choose from email, push, or in-app notifications for study reminders, course updates, achievement unlocks, and more.",
    "offline": "Premium users can download courses for offline viewing in the mobile app. Simply tap the download icon next to any lesson. Downloaded content is available for 30 days and automatically updates when you're online.",
    "ai tutor": "Our AI tutor provides personalized explanations, answers questions about course content, and adapts to your learning style. Access it from any lesson by clicking the AI Tutor button. It's available 24/7 for Premium users.",
    "study groups": "Join study groups to learn with peers, share resources, and participate in discussions. Create your own group or join existing ones based on topics or goals. Find them in the Community section.",
    "export data": "You can export your learning data, progress reports, and certificates from Account Settings > Data Export. Choose from PDF, CSV, or JSON formats. This includes all your course history, achievements, and study statistics.",
    "quiz test": "Quiz tests are quick knowledge checks within your courses to test your understanding of specific topics. They're shorter than mock tests and focus on individual concepts. You can retake quizzes anytime to reinforce your learning.",
    "masterly": "masterly is a smart ai learning path that guide,train,test you and your knowledge. Its your learning companion",
    "take": "You can find the quizess at the end of each course or you can find at quiz section",
    "code":"You can write or practice code during quizes and also we are trying to develop a practice page for learners",
    "data":"We use encryption and follow best practices to keep your data secure.",
    "bug": "You can report bugs through the ‘Help & Feedback’ section or by emailing our support team.",
    "api":"We are planning to release developer APIs in the future.",
    "tutorial":"We provide beginner tutorials and walkthroughs to help you navigate and use the platform efficiently."
  }

  const getBotResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase()
    
    // Define keyword mappings with multiple aliases
    const keywordMappings = {
      "ai tutor": ["tutor", "ai tutor", "ai-tutor", "mentor", "teacher", "guide"],
      "progress": ["progress", "track", "tracking", "analytics", "stats"],
      "learning path": ["learning path", "path", "course path", "curriculum","customize learning path"],  
      "mock test": ["mock test", "test","quiz", "exam", "assessment"],
      "certificate": ["certificate", "cert", "certification", "diploma"],
      "achievements": ["achievements", "achievement", "badge", "badges", "reward"],
      "daily goal": ["daily goal", "goal", "target", "streak"],
      "account": ["account", "profile", "settings", "my account"],
      "courses": ["courses", "course", "lessons", "content"],
      "support": ["support", "help", "assistance", "contact"],
      "subscription": ["subscription", "plan", "billing", "payment"],
      "application": ["mobile app", "app", "android", "ios", "phone"],
      "reset password": ["reset password", "forgot password", "password reset"],
      "notifications": ["notifications", "alerts", "reminders"],
      "offline": ["offline", "download", "sync"],
      "study groups": ["study groups", "group", "community", "peers"],
      "export data": ["export data", "download data", "backup"],
      "masterly":["masterly", "this website","webapplication"],
      "code": ["code","practice","upskill"],
      "data":["data","safe","data safe"],
      "bug":["bug","bugs"],
      "api":["api","api key"],
      "tutorial":["tutorial","help-section","help"]
    }
    
    // Find matching keywords using aliases
    for (const [originalKey, aliases] of Object.entries(keywordMappings)) {
      if (aliases.some(alias => lowerQuery.includes(alias))) {
        return knowledgeBase[originalKey as keyof typeof knowledgeBase]
      }
    }

    // Check for common greeting patterns
    if (lowerQuery.includes('hello') || lowerQuery.includes('hi') || lowerQuery.includes('hey')) {
      return "Hello! I'm here to help you with any questions about Masterly. You can ask me about courses, progress tracking, certificates, or any other features."
    }

    if (lowerQuery.includes('help')) {
      return "I'd be happy to help! You can ask me about:\n• Tracking your progress\n• Managing learning paths\n• Taking mock tests\n• Downloading certificates\n• Account settings\n• And much more!"
    }

    // Default response for unrecognized queries
    return "I'm not sure about that specific question, but I can help you with information about courses, progress tracking, certificates, mock tests, and account management. Could you please rephrase your question or ask about one of these topics?"
  }

  const handleSendMessage = (): void => {
    if (newMessage.trim()) {
      const userMessage = {
        id: chatMessages.length + 1,
        sender: "user",
        message: newMessage,
        time: "Just now",
      }
      setChatMessages([...chatMessages, userMessage])

      // Get bot response
      const botResponse = getBotResponse(newMessage)
      
      setTimeout(() => {
        const supportResponse = {
          id: chatMessages.length + 2,
          sender: "support",
          message: botResponse,
          time: "Just now",
        }
        setChatMessages((prev) => [...prev, supportResponse])
      }, 1000)

      setNewMessage("")
    }
  }

  const handleContactSubmit = async (): Promise<void> => {
  if (contactForm.name && contactForm.email && contactForm.subject && contactForm.message) {
    try {
      const response = await fetch("https://formspree.io/f/xnnvllzb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: contactForm.name,
          email: contactForm.email,
          subject: contactForm.subject,
          message: contactForm.message,
        }),
      })

      if (response.ok) {
        toast({
          title: "Message Sent",
          description: "Your support request has been submitted. We'll get back to you within 24 hours.",
        })
        setContactForm({ name: "", email: "", subject: "", message: "" })
      } else {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again later.",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Network error. Please try again later.",
        variant: "destructive",
      })
    }
  } else {
    toast({
      title: "Error",
      description: "Please fill in all required fields.",
      variant: "destructive",
    })
  }
}


  const openUserGuide = (): void => {
    toast({
      title: "Opening User Guide",
      description: "The comprehensive user guide is opening in a new tab.",
    })
    window.open("/help-guide", "_blank")

  }

  const openVideoTutorials = (): void => {
    toast({
      title: "Opening Video Tutorials",
      description: "Video tutorial library is opening in a new tab.",
    })
    window.open("#", "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">Help & Support</h1>
          <p className="text-gray-600 dark:text-gray-300">
            Find answers to common questions or get in touch with our support team
          </p>
        </div>

        <div className="space-y-6">
          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card
              className="dark:bg-gray-800/80 dark:border-gray-700 hover:shadow-lg transition-shadow cursor-pointer"
  onClick={openUserGuide}

            >
              <CardContent className="p-6 text-center">
                <BookOpen className="w-8 h-8 mx-auto mb-3 text-blue-600" />
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">User Guide</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">Complete guide to using Masterly</p>
                <Button variant="outline" size="sm">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Guide
                </Button>
              </CardContent>
            </Card>

            <Card
              className="dark:bg-gray-800/80 dark:border-gray-700 hover:shadow-lg transition-shadow cursor-pointer"
              onClick={openVideoTutorials}
            >
              <CardContent className="p-6 text-center">
                <Video className="w-8 h-8 mx-auto mb-3 text-green-600" />
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Video Tutorials</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">Watch step-by-step tutorials</p>
                <Button variant="outline" size="sm">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Watch Videos
                </Button>
              </CardContent>
            </Card>

            <Card
              className="dark:bg-gray-800/80 dark:border-gray-700 hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => setChatOpen(true)}
            >
              <CardContent className="p-6 text-center">
                <MessageCircle className="w-8 h-8 mx-auto mb-3 text-purple-600" />
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Live Chat</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">Chat with our AI support assistant</p>
                <Button variant="outline" size="sm">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Start Chat
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* FAQ */}
          <Card className="dark:bg-gray-800/80 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center text-gray-900 dark:text-white">
                <HelpCircle className="w-5 h-5 mr-2" />
                Frequently Asked Questions
              </CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-300">
                Find quick answers to the most common questions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-gray-900 dark:text-white">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 dark:text-gray-300">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          {/* Contact Support */}
          <Card className="dark:bg-gray-800/80 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center text-gray-900 dark:text-white">
                <Mail className="w-5 h-5 mr-2" />
                Contact Support
              </CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-300">
                Can't find what you're looking for? Send us a message
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-900 dark:text-white">Name *</label>
                  <Input
                    placeholder="Your full name"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-900 dark:text-white">Email *</label>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-900 dark:text-white">Subject *</label>
                <Input
                  placeholder="Brief description of your issue"
                  value={contactForm.subject}
                  onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-900 dark:text-white">Message *</label>
                <Textarea
                  placeholder="Please describe your issue in detail..."
                  rows={4}
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                />
              </div>
              <Button className="w-full" onClick={handleContactSubmit}>
                <Mail className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="dark:bg-gray-800/80 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">Support Hours</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Monday - Friday</span>
                  <span className="text-gray-900 dark:text-white">9:00 AM - 6:00 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Saturday</span>
                  <span className="text-gray-900 dark:text-white">10:00 AM - 4:00 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Sunday</span>
                  <span className="text-gray-900 dark:text-white">Closed</span>
                </div>
              </CardContent>
            </Card>

            <Card className="dark:bg-gray-800/80 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">Other Ways to Reach Us</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-blue-600" />
                  <span className="text-gray-900 dark:text-white">support@masterly.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-green-600" />
                  <span className="text-gray-900 dark:text-white">+1 (555) 123-HELP</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MessageCircle className="w-4 h-4 text-purple-600" />
                  <span className="text-gray-900 dark:text-white">AI chat available 24/7</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Live Chat Dialog */}
        <Dialog open={chatOpen} onOpenChange={setChatOpen}>
          <DialogContent className="max-w-2xl h-[80vh]">
            <DialogHeader>
              <DialogTitle className="flex items-center justify-between">
                <div className="flex items-center">
                  <Bot className="w-5 h-5 mr-2 text-blue-600" />
                  AI Support Chat
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-green-600">Online</span>
                </div>
              </DialogTitle>
            </DialogHeader>

            <div className="space-y-4">
              {/* Chat Messages */}
              <div className="h-[60vh] overflow-y-auto space-y-3 p-3 border rounded-lg bg-gray-50 dark:bg-gray-900">
                {chatMessages.map((msg) => (
                  <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-xs p-3 rounded-lg ${
                        msg.sender === "user" ? "bg-blue-600 text-white" : "bg-white dark:bg-gray-800 border"
                      }`}
                    >
                      <p className="text-sm whitespace-pre-line">{msg.message}</p>
                      <p className={`text-xs mt-1 ${msg.sender === "user" ? "text-blue-100" : "text-gray-500"}`}>
                        {msg.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="flex space-x-2">
                <Input
                  placeholder="Type your message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                />
                <Button onClick={handleSendMessage}>
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}