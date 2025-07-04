import React, { useState } from "react";
import {
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaRocket,
  FaAward,
  FaRobot,
  FaUserFriends
} from "react-icons/fa";
import "./TeamAndFAQPage.css";

interface TeamMember {
  name: string;
  role: string;
  quote: string;
  funFact: string;
  contact?: string;
  email?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Nishita Sharma",
    role: "Team Lead- Full Stack Dev",
    quote: "Manifesting: ‘Congrats, your internship has been extended!’",
    funFact: "Code. Coffee. Repeat",
    contact: "9818431058",
    email: "nishita.d.sharma@gmail.com"
  },
  {
    name: "Devansh Srivastava",
    role: "Full Stack Dev",
    quote: "APIs are my playground.",
    funFact: "Ideality is a virtual phenomenon."
  },
  {
    name: "Sonali",
    role: "Frontend Dev",
    quote: "Tech is the art of turning coffee into software.",
    funFact: "Sketches in her free time."
  },
  {
    name: "Deepali",
    role: "Backend Dev",
    quote: "Innovation is my default setting.",
    funFact: "Loves mystery novels."
  },
  {
    name: "Tanisha",
    role: "MERN Stack Dev",
    quote: "User first, always.",
    funFact: "MERN-ifying ideas into Reality."
  },
  {
    name: "Shiv Kumar Behera",
    role: "Developer",
    quote: "Automate everything.",
    funFact: "Building projects."
  }
];

interface Objective {
  icon: React.JSX.Element;
  text: string;
}

const projectInfo = {
  title: "BluePrint",
  tagline: "Personal Learning Path Visualization Dashboard",
  objectives: [
    {
      icon: <FaRocket />,
      text: "Personalized Learning Journeys: Visualize and customize your unique path with interactive dashboards."
    },
    {
      icon: <FaAward />,
      text: "Gamified Motivation: Earn badges, level up, and track your achievements."
    },
    {
      icon: <FaUserFriends />,
      text: "Admin Power Tools: Effortlessly manage courses and materials via Cloudinary."
    },
    {
      icon: <FaRobot />,
      text: "Smart Chatbot Support: Get instant, intelligent help from our HuggingFace-powered assistant."
    }
  ] as Objective[],
  website: "https://cps-alpha.vercel.app/",
  repo: "https://github.com/continuousactivelearning/cps/tree/team-nishita-dashboard",
  deployment: [
    { label: "Frontend - Vercel" },
    { label: "Backend - Render" },
    { label: "Database - MongoDB Atlas (512 MB)" },
    { label: "Admin Storage - Cloudinary" },
    { label: "Chatbot - HuggingFace Spaces" }
  ]
};

interface FAQ {
  question: string;
  answer: string;
}

const generalFAQ: FAQ[] = [
  {
    question: "Who can use this platform?",
    answer: "BluePrint is designed for everyone—students, educators, and lifelong learners who want to personalize and visualize their learning journey. Our platform combines personalized learning paths, real-time progress visualization, gamified achievements, and AI-powered support—all in one seamless dashboard."
  },
  {
    question: "How do I track my achievements?",
    answer: "Achievements, badges, and progress are automatically tracked and displayed in your dashboard. Check the Achievements section to see your milestones!"
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely! We use MongoDB Atlas for secure storage and protect all sensitive operations."
  },
  {
    question: "Can I suggest new features?",
    answer: "We love feedback! ✉️ Drop your ideas on our GitHub or email us directly—we’re always eager to improve."
  },
  {
    question: "How do I contact support?",
    answer: "Email us at contact.blueprint@gmail.com or chat with our AI assistant anytime."
  }
];

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState(
    document.documentElement.getAttribute("data-theme") || "light"
  );
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    setTheme(newTheme);
  };
  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {theme === "dark" ? "🌞" : "🌙"}
    </button>
  );
};

const FAQAccordion: React.FC<{ faqs: FAQ[] }> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="faq-accordion">
      {faqs.map((faq, idx) => (
        <div key={idx} className={`faq-item${openIndex === idx ? " open" : ""}`}>
          <button
            className="faq-question"
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            aria-expanded={openIndex === idx}
            type="button"
          >
            {faq.question}
            <span className="faq-arrow">{openIndex === idx ? "▲" : "▼"}</span>
          </button>
          <div
            className="faq-answer"
            style={{
              maxHeight: openIndex === idx ? "200px" : "0",
              opacity: openIndex === idx ? 1 : 0
            }}
          >
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

// TeamCard without image
const TeamCard: React.FC<{ member: TeamMember }> = ({ member }) => (
  <div className="team-card">
    <h3>{member.name}</h3>
    <p className="role">{member.role}</p>
    <p className="quote">“{member.quote}”</p>
    <p className="fun-fact">💡 {member.funFact}</p>
    {member.contact && (
      <div className="contact-icons">
        <a href={`tel:${member.contact}`} title="Call">
          <FaPhone />
        </a>
        <a href={`mailto:${member.email}`} title="Email">
          <FaEnvelope />
        </a>
      </div>
    )}
  </div>
);

const TeamAndFAQPage: React.FC = () => (
  <div className="team-faq-page">
    <ThemeToggle />
    {/* Hero Section */}
    <section className="hero-section">
      <div className="hero-bg" />
      <div className="hero-content">
        <h1>
          <span className="hero-title">{projectInfo.title}</span>
          <span className="hero-tagline">{projectInfo.tagline}</span>
        </h1>
        <p className="hero-mission">
          <FaRocket /> Empowering you to own your learning journey!
        </p>
      </div>
    </section>

    {/* Team Section */}
    <section className="team-section">
      <h2>Meet the Team</h2>
      <div className="team-grid">
        {teamMembers.map((member, idx) => (
          <TeamCard member={member} key={idx} />
        ))}
      </div>
    </section>

    {/* Project Highlights */}
    <section className="project-section">
      <h2 className="centered-title">Project Highlights</h2>
      <div className="objectives-list">
        {projectInfo.objectives.map((obj, idx) => (
          <div className="objective-card" key={idx}>
            <span className="objective-icon">{obj.icon}</span>
            <span>{obj.text}</span>
          </div>
        ))}
      </div>
      {/* Main action buttons */}
      <div className="main-action-links">
        <a href={projectInfo.website} target="_blank" rel="noopener noreferrer" className="main-action-btn">
          <FaRocket /> Live Demo
        </a>
        <a href={projectInfo.repo} target="_blank" rel="noopener noreferrer" className="main-action-btn">
          <FaGithub /> GitHub
        </a>
      </div>
      {/* Project details buttons */}
      <div className="project-details-links">
        {projectInfo.deployment.map((item, idx) => (
          <a
            key={idx}
            className="deploy-btn"
            href="#"
            tabIndex={-1}
            style={{ pointerEvents: "none" }}
          >
            <strong>{item.label}</strong>
          </a>
        ))}
      </div>
    </section>

    {/* FAQ Section */}
    <section className="faq-section">
      <h2>General FAQ</h2>
      <FAQAccordion faqs={generalFAQ} />
    </section>

    {/* Footer */}
    <footer className="team-faq-footer">
      <span>
        © {new Date().getFullYear()} BluePrint Team 6 &mdash; Crafted with 💙 for learners everywhere.
      </span>
    </footer>
  </div>
);

export default TeamAndFAQPage;
