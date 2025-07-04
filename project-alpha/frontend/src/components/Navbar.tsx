import React, { useState, useEffect } from 'react';

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
  onStartLearning: () => void;
  onAuthClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleTheme, onStartLearning, onAuthClick }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolling, setIsScrolling] = useState(false);
  const [userClicked, setUserClicked] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      // Don't update active section if user just clicked a nav item or is still scrolling
      if (isScrolling || userClicked) return;

      // Clear existing timeout
      if (scrollTimeout) clearTimeout(scrollTimeout);

      // Debounce scroll detection
      scrollTimeout = setTimeout(() => {
        const sections = ['home', 'features', 'about', 'testimonials', 'faq', 'try'];
        const scrollPosition = window.scrollY + 100; // Offset for better detection

        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const { offsetTop, offsetHeight } = element;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              if (activeSection !== section) {
                console.log(`Active section changed to: ${section} (via scroll)`);
                setActiveSection(section);
              }
              break;
            }
          }
        }
      }, 50); // 50ms debounce
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [activeSection, isScrolling, userClicked]);

  const handleNavClick = (sectionId: string) => {
    console.log(`Nav clicked: ${sectionId}`);
    setActiveSection(sectionId);
    setIsScrolling(true);
    setUserClicked(true);
    setIsMobileMenuOpen(false); // Close mobile menu on navigation

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });

      // Reset flags after animation completes
      setTimeout(() => {
        setIsScrolling(false);
        console.log(`Scrolling flag reset, active section: ${sectionId}`);
      }, 1000); // Smooth scroll typically takes ~800ms

      // Reset user clicked flag after a longer delay to ensure active state persists
      setTimeout(() => {
        setUserClicked(false);
        console.log(`User clicked flag reset`);
      }, 2000);
    }
  };

  const handleAuthClick = () => {
    setIsMobileMenuOpen(false); // Close mobile menu
    if (onAuthClick) onAuthClick();
  };

  const handleStartLearning = () => {
    setIsMobileMenuOpen(false); // Close mobile menu
    onStartLearning();
  };

  return (
    <nav className="navbar">
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
        <div style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#4f46e5' }}>
          LearnPath
        </div>
        {/* Hamburger for mobile */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(v => !v)}
          aria-label="Toggle menu"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: '1.5rem',
            padding: '0.5rem',
            borderRadius: '0.375rem',
            transition: 'all 0.2s ease',
            color: isDarkMode ? '#e2e8f0' : '#1f2937',
            minWidth: '44px',
            minHeight: '44px',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = isDarkMode ? '#374151' : '#f3f4f6';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
          }}
        >
          <span style={{
            display: 'block',
            transition: 'transform 0.2s ease',
            transform: isMobileMenuOpen ? 'rotate(90deg)' : 'rotate(0deg)'
          }}>
            {isMobileMenuOpen ? '✕' : '☰'}
          </span>
        </button>
        {/* Mobile overlay */}
        {isMobileMenuOpen && (
          <div
            className="mobile-nav-overlay active"
            onClick={() => setIsMobileMenuOpen(false)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.5)',
              zIndex: 999,
              opacity: 1,
              visibility: 'visible'
            }}
          />
        )}

        <div
          className={`nav-links-wrapper${isMobileMenuOpen ? ' open' : ''}`}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem',
            marginTop: '0.5rem',
            zIndex: 1001
          }}
        >
          <a 
            href="#home" 
            className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
          >
            Home
          </a>
          <a 
            href="#features" 
            className={`nav-link ${activeSection === 'features' ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); handleNavClick('features'); }}
          >
            Features
          </a>
          <a 
            href="#about" 
            className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}
          >
            About
          </a>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button
              onClick={handleAuthClick}
              style={{ 
                background: 'none', 
                border: 'none', 
                cursor: 'pointer',
                color: '#4f46e5',
                fontSize: '1rem',
                fontWeight: '500',
                textDecoration: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '0.375rem',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#e0e7ff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              Login/Register
            </button>
            <a 
              href="#try" 
              className={`nav-link ${activeSection === 'try' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); handleStartLearning(); }}
            >
              Try LearnPath Now
            </a>
            <button onClick={toggleTheme} style={{ background: 'none', border: 'none', cursor: 'pointer', marginLeft: '1rem' }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ width: '1.75rem', height: '1.75rem', color: '#1f2937' }}>
                {isDarkMode ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 