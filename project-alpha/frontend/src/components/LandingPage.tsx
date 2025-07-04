import React, { useState, useEffect } from 'react';
import GlobalStyles from './GlobalStyles';
import AnimatedBackground from './AnimatedBackground';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import AboutSection from './AboutSection';
import TestimonialsSection from './TestimonialsSection';
import FAQSection from './FAQSection';
import CallToActionSection from './CallToActionSection';
import Footer from './Footer';

interface LandingPageProps {
  onStartLearning: () => void;
  onAuthClick?: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onStartLearning, onAuthClick }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  };

  useEffect(() => {
    // Initialize theme
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    // Animation on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.fade-in-up, .animate-fade-in');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <GlobalStyles />
      <AnimatedBackground />
      <div style={{ position: 'relative', zIndex: 10 }}>
        <Navbar 
          isDarkMode={isDarkMode} 
          toggleTheme={toggleTheme} 
          onStartLearning={onStartLearning} 
          onAuthClick={onAuthClick}
        />
        <HeroSection onStartLearning={onStartLearning} isDarkMode={isDarkMode} />
        <FeaturesSection isDarkMode={isDarkMode} />
        <AboutSection isDarkMode={isDarkMode} />
        <TestimonialsSection isDarkMode={isDarkMode} />
        <FAQSection isDarkMode={isDarkMode} />
        <CallToActionSection onStartLearning={onStartLearning} isDarkMode={isDarkMode} />
        <Footer isDarkMode={isDarkMode} />
      </div>
    </>
  );
};

export default LandingPage; 