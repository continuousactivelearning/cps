import React from 'react';

interface HeroSectionProps {
  onStartLearning: () => void;
  isDarkMode?: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onStartLearning, isDarkMode = false }) => {
  return (
    <section id="home" className="hero-section">
      <div
        className="container hero-content"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '2.5rem',
        }}
      >
        <div
          style={{
            textAlign: 'center',
            width: '100%',
            maxWidth: '600px',
            marginBottom: '2rem',
          }}
          className="hero-text"
        >
          <h1
            className="fade-in-up hero-title"
            style={{
              fontSize: '3rem',
              fontWeight: 800,
              lineHeight: '1.2',
              marginBottom: '1.5rem',
              color: isDarkMode ? 'var(--text-color-dark)' : 'white',
              textAlign: 'left',
            }}
          >
            Your Journey to Mastery with{' '}
            <span style={{ color: '#2dd4bf' }}>AI-Powered</span> Learning
          </h1>
          <p
            className="hero-description"
            style={{
              fontSize: '1.25rem',
              marginBottom: '2rem',
              color: isDarkMode ? '#94a3af' : '#e5e7eb',
              textAlign: 'left',
            }}
          >
            Discover a tailored learning experience designed to unlock your full potential with AI-powered personalization.
          </p>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <button
              className="btn-primary"
              style={{
                color: 'white',
                padding: '1rem 2rem',
                borderRadius: '9999px',
                fontSize: '1.125rem',
                fontWeight: 500,
              }}
              onClick={onStartLearning}
            >
              Get Started
            </button>
          </div>
        </div>
        <div style={{ position: 'relative', width: '100%', maxWidth: '500px' }} className="hero-image">
          <div className="image-container">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Students collaborating"
              style={{ width: '100%', height: '24rem', objectFit: 'cover', borderRadius: '0.75rem' }}
            />
          </div>
          <div
            style={{
              position: 'absolute',
              bottom: '-1.5rem',
              right: '-1.5rem',
              backgroundColor: 'white',
              padding: '1rem',
              borderRadius: '0.75rem',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div
                style={{
                  width: '0.75rem',
                  height: '0.75rem',
                  backgroundColor: '#10b981',
                  borderRadius: '50%',
                  animation: 'pulse 2s infinite',
                }}
              ></div>
              <span style={{
                fontSize: '0.875rem',
                fontWeight: 500,
                color: isDarkMode ? '#e2e8f0' : '#1f2937'
              }}>
                50,000+ Active Learners
              </span>
            </div>
          </div>
        </div>
        <style>{`
          /* Mobile First Responsive Design */

          /* Small Mobile (0-479px) */
          @media (max-width: 479px) {
            .hero-content {
              padding: 1rem !important;
              gap: 1.5rem !important;
            }
            .hero-title {
              font-size: 1.75rem !important;
              line-height: 1.2 !important;
              text-align: center !important;
              margin-bottom: 1rem !important;
            }
            .hero-description {
              font-size: 1rem !important;
              text-align: center !important;
              margin-bottom: 1.5rem !important;
            }
            .hero-text {
              text-align: center !important;
              margin-bottom: 1.5rem !important;
            }
            .hero-text > div {
              flex-direction: column !important;
              gap: 0.75rem !important;
            }
            .hero-text button {
              width: 100% !important;
              padding: 1rem !important;
              font-size: 1.1rem !important;
            }
            .hero-image {
              width: 100% !important;
              max-width: 100% !important;
            }
            .hero-image img {
              height: 16rem !important;
            }
            .hero-image > div:last-child {
              bottom: -1rem !important;
              right: -1rem !important;
              padding: 0.75rem !important;
            }
            .hero-image > div:last-child span {
              font-size: 0.75rem !important;
            }
          }

          /* Large Mobile (480-767px) */
          @media (min-width: 480px) and (max-width: 767px) {
            .hero-content {
              padding: 1.5rem !important;
              gap: 2rem !important;
            }
            .hero-title {
              font-size: 2.25rem !important;
              text-align: center !important;
            }
            .hero-description {
              font-size: 1.125rem !important;
              text-align: center !important;
            }
            .hero-text {
              text-align: center !important;
            }
            .hero-text > div {
              justify-content: center !important;
            }
            .hero-text button {
              padding: 1rem 2rem !important;
            }
            .hero-image img {
              height: 20rem !important;
            }
          }

          /* Tablet (768-899px) */
          @media (min-width: 768px) and (max-width: 899px) {
            .hero-content {
              gap: 2.5rem !important;
            }
            .hero-title {
              font-size: 2.5rem !important;
              text-align: center !important;
            }
            .hero-description {
              text-align: center !important;
            }
            .hero-text {
              text-align: center !important;
            }
            .hero-text > div {
              justify-content: center !important;
            }
          }

          /* Desktop (900px+) */
          @media (min-width: 900px) {
            .hero-content {
              flex-direction: row !important;
              align-items: center !important;
              justify-content: space-between !important;
              gap: 3rem !important;
            }
            .hero-text {
              text-align: left !important;
              max-width: 600px !important;
              width: 50% !important;
              margin-bottom: 0 !important;
            }
            .hero-title {
              text-align: left !important;
            }
            .hero-description {
              text-align: left !important;
            }
            .hero-text > div {
              justify-content: flex-start !important;
            }
            .hero-image {
              width: 50% !important;
              max-width: 500px !important;
            }
          }

          /* Dark mode text colors */
          .dark .hero-title {
            color: var(--text-color-dark) !important;
          }
          .dark .hero-description {
            color: #94a3af !important;
          }
          .dark .hero-section .image-container + div {
            background-color: var(--card-bg-dark) !important;
          }
          .dark .hero-section .image-container + div span {
            color: #e2e8f0 !important;
          }

          /* Touch optimizations */
          @media (max-width: 768px) {
            .hero-text button {
              touch-action: manipulation;
              -webkit-tap-highlight-color: transparent;
            }
            .hero-text button:active {
              transform: scale(0.98);
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default HeroSection; 