import React, { useState, useEffect } from 'react';
import styles from './LandingPage.module.css';
import { FaBolt, FaChartLine, FaUserFriends, FaBookOpen, FaCalendarAlt, FaLightbulb, FaCheckCircle, FaQuestionCircle, FaMoon, FaSun } from 'react-icons/fa';

const features = [
  { icon: <FaBolt />, title: 'AI-Powered Paths', desc: 'Personalized learning journeys tailored to you.' },
  { icon: <FaBookOpen />, title: 'Comprehensive Content', desc: 'Curated resources for every topic.' },
  { icon: <FaChartLine />, title: 'Progress Tracking', desc: 'Visualize your growth and achievements.' },
  { icon: <FaUserFriends />, title: 'Community Support', desc: 'Learn and grow with peers.' },
  { icon: <FaCalendarAlt />, title: 'Flexible Scheduling', desc: 'Learn at your own pace, anytime.' },
  { icon: <FaLightbulb />, title: 'Expert Insights', desc: 'Guidance from industry leaders.' },
];

const testimonials = [
  { name: 'Aarav Sharma', role: 'Student', quote: 'LearnPath made my journey so much easier and fun!', avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
  { name: 'Priya Patel', role: 'Student', quote: 'The personalized paths are a game changer.', avatar: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { name: 'Rahul Verma', role: 'Student', quote: 'I love the quizzes and progress tracking!', avatar: 'https://randomuser.me/api/portraits/men/65.jpg' },
];

const faqs = [
  { q: 'How does LearnPath personalize my journey?', a: 'We use AI to analyze your strengths and recommend the best path for you.' },
  { q: 'Is my data secure?', a: 'Absolutely! We use industry-standard security to protect your information.' },
  { q: 'Can I access LearnPath on mobile?', a: 'Yes, our platform is fully responsive and works on any device.' },
];

const LandingPage: React.FC = () => {
  const [dark, setDark] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState('home');

  React.useEffect(() => {
    document.body.className = dark ? 'dark' : '';
  }, [dark]);

  // Track scroll position for active section highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'features', 'about', 'testimonials', 'faq'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.landingWrapper}>
      {/* Animated Background */}
      <div className={styles.animatedBg}>
        <div className={styles.floatingShape} style={{ top: '10%', left: '5%', width: 120, height: 120 }} />
        <div className={styles.floatingShape} style={{ top: '60%', left: '80%', width: 180, height: 180 }} />
        <div className={styles.floatingShape} style={{ top: '30%', left: '60%', width: 90, height: 90 }} />
        <div className={styles.floatingShape} style={{ top: '80%', left: '20%', width: 140, height: 140 }} />
        <div className={styles.floatingShape} style={{ top: '50%', left: '40%', width: 100, height: 100 }} />
      </div>
      {/* Navbar */}
      <header className={styles.header}>
        <div className={styles.logo}>LearnPath</div>
        <nav className={styles.navbar}>
          <ul>
            <li>
              <a 
                href="#" 
                className={`${styles.navLink} ${activeSection === 'home' ? styles.active : ''}`}
                onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#features" 
                className={`${styles.navLink} ${activeSection === 'features' ? styles.active : ''}`}
                onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}
              >
                Features
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                className={`${styles.navLink} ${activeSection === 'about' ? styles.active : ''}`}
                onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
              >
                About
              </a>
            </li>
            <li><a href="#signin" className={styles.navLink}>Sign In</a></li>
            <li><a href="#try" className={styles.navLinkTry}>Try</a></li>
            <li>
              <button className={styles.darkModeBtn} onClick={() => setDark(d => !d)} aria-label="Toggle dark mode">
                {dark ? <FaSun /> : <FaMoon />}
              </button>
            </li>
          </ul>
        </nav>
      </header>
      {/* Hero Section */}
      <section id="home" className={styles.heroSection}>
        <div className={styles.heroLeft}>
          <h1 className={styles.heroTitle}>
            Your Journey to Mastery with <span className={styles.gradientText}>AI-Powered</span> Learning
          </h1>
          <p className={styles.heroSubtitle}>
            Discover a tailored learning experience designed to unlock your full potential with AI-powered personalization.
          </p>
          <button className={styles.ctaBtn}>Get Started</button>
        </div>
        <div className={styles.heroRight}>
          <div className={styles.heroImgContainer}>
            <img className={styles.heroImg} src="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&q=80" alt="Learning" />
            <div className={styles.heroImgBadge}>
              <span className={styles.heroImgBadgeDot}></span>
              50,000+ Active Learners
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className={styles.featuresSection} id="features">
        <h2 className={styles.sectionTitle}>Features</h2>
        <div className={styles.featuresGrid}>
          {features.map((f, i) => (
            <div className={styles.featureCard} key={i}>
              <div className={styles.featureIcon}>{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
      {/* About Section */}
      <section className={styles.aboutSection} id="about">
        <div className={styles.aboutLeft}>
          <h2>About LearnPath</h2>
          <p>
            LearnPath is dedicated to empowering students by providing personalized learning experiences. Our platform leverages advanced technology to help you master any subject with ease. Whether you're a beginner or an advanced learner, we guide you through a journey tailored to your needs, ensuring you achieve your academic goals.
          </p>
        </div>
        <div className={styles.aboutRight}>
          <div className={styles.aboutImgContainer}>
            <img className={styles.aboutImg} src="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&q=80" alt="About" />
            <div className={styles.aboutImgBadge}>Innovation at Core</div>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className={styles.testimonialsSection} id="testimonials">
        <h2 className={styles.sectionTitle}>What Our Learners Say</h2>
        <div className={styles.testimonialsGrid}>
          {testimonials.map((t, i) => (
            <div className={styles.testimonialCard} key={i}>
              <img src={t.avatar} alt={t.name} className={styles.testimonialAvatar} />
              <div className={styles.testimonialName}>{t.name}</div>
              <div className={styles.testimonialRole}>{t.role}</div>
              <p className={styles.testimonialQuote}>&ldquo;{t.quote}&rdquo;</p>
            </div>
          ))}
        </div>
      </section>
      {/* FAQ Section */}
      <section className={styles.faqSection} id="faq">
        <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
        <div className={styles.faqList}>
          {faqs.map((faq, i) => (
            <div className={styles.faqItem} key={i}>
              <button className={styles.faqQuestion} onClick={() => setOpenFAQ(openFAQ === i ? null : i)}>
                <FaQuestionCircle className={styles.faqIcon} /> {faq.q}
                <span className={styles.faqToggle}>{openFAQ === i ? '-' : '+'}</span>
              </button>
              {openFAQ === i && <div className={styles.faqAnswer}>{faq.a}</div>}
            </div>
          ))}
        </div>
      </section>
      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.logo}>LearnPath</div>
          <div className={styles.footerLinks}>
            <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a>
            <a href="#features" onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}>Features</a>
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a>
            <a href="#faq" onClick={(e) => { e.preventDefault(); scrollToSection('faq'); }}>FAQ</a>
            <a href="#signin">Sign In</a>
          </div>
          <div className={styles.footerCopy}>
            &copy; {new Date().getFullYear()} LearnPath. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage; 
