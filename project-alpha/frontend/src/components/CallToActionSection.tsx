import React from 'react';

interface CallToActionSectionProps {
  onStartLearning: () => void;
  isDarkMode?: boolean;
}

const CallToActionSection: React.FC<CallToActionSectionProps> = ({ onStartLearning, isDarkMode = false }) => {
  return (
    <section id="try" style={{
      padding: '6rem 0',
      backgroundColor: isDarkMode ? 'var(--bg-dark)' : 'white',
      color: isDarkMode ? 'var(--text-color-dark)' : '#1f2937',
      textAlign: 'center'
    }}>
      <div className="container">
        <div className="cta-section-content">
          <h2 className="cta-title" style={{ fontSize: '2.25rem', fontWeight: '800', marginBottom: '1.5rem' }}>Ready to Start Your Learning Journey?</h2>
          <p className="cta-description" style={{ fontSize: '1.25rem', color: isDarkMode ? '#94a3af' : '#6b7280', marginBottom: '2.5rem' }}>
            Sign up for free and experience the future of personalized education.
          </p>
          <button className="btn-primary cta-button mobile-btn" style={{ color: 'white', padding: '1.25rem 2.5rem', borderRadius: '9999px', fontSize: '1.25rem', fontWeight: '500' }} onClick={onStartLearning}>
            Get Started for Free
          </button>
        </div>
      </div>

      <style>{`
        /* Call to Action Section Mobile Responsive Styles */
        @media (max-width: 479px) {
          .cta-section-content {
            padding: 0 1rem;
          }

          .cta-title {
            font-size: 1.75rem !important;
            line-height: 1.2 !important;
            margin-bottom: 1rem !important;
          }

          .cta-description {
            font-size: 1rem !important;
            line-height: 1.6 !important;
            margin-bottom: 2rem !important;
            padding: 0 0.5rem;
          }

          .cta-button {
            width: 100% !important;
            max-width: 280px !important;
            padding: 1rem 2rem !important;
            font-size: 1.1rem !important;
            border-radius: 0.75rem !important;
            margin: 0 auto !important;
            display: block !important;
          }
        }

        @media (min-width: 480px) and (max-width: 767px) {
          .cta-section-content {
            padding: 0 1.5rem;
          }

          .cta-title {
            font-size: 2rem !important;
            margin-bottom: 1.25rem !important;
          }

          .cta-description {
            font-size: 1.125rem !important;
            margin-bottom: 2.25rem !important;
          }

          .cta-button {
            padding: 1.125rem 2.25rem !important;
            font-size: 1.125rem !important;
          }
        }

        @media (min-width: 768px) and (max-width: 1023px) {
          .cta-title {
            font-size: 2.125rem !important;
          }

          .cta-description {
            font-size: 1.1875rem !important;
          }
        }

        /* Touch optimizations */
        @media (max-width: 768px) {
          .cta-button {
            touch-action: manipulation;
            -webkit-tap-highlight-color: transparent;
            transition: all 0.2s ease;
            min-height: 44px;
            min-width: 44px;
          }

          .cta-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(99, 102, 241, 0.3);
          }

          .cta-button:active {
            transform: translateY(0);
            box-shadow: 0 4px 15px rgba(99, 102, 241, 0.2);
          }

          .cta-button:focus {
            outline: 2px solid #6366f1;
            outline-offset: 2px;
          }
        }

        /* Improved text readability on mobile */
        @media (max-width: 768px) {
          .cta-title {
            word-wrap: break-word;
            hyphens: auto;
          }

          .cta-description {
            word-wrap: break-word;
            hyphens: auto;
          }
        }

        /* Animation for mobile */
        @media (max-width: 768px) {
          .cta-section-content {
            animation: fadeInUp 0.6s ease-out;
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        }
      `}</style>
    </section>
  );
};

export default CallToActionSection;
