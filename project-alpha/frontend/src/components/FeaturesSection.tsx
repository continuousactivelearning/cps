import React from 'react';

interface FeaturesSectionProps {
  isDarkMode?: boolean;
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ isDarkMode = false }) => {
  return (
    <section id="features" style={{
      padding: '6rem 0',
      backgroundColor: isDarkMode ? 'var(--bg-dark)' : 'white',
      color: isDarkMode ? 'var(--text-color-dark)' : '#1f2937'
    }}>
      <div className="container">
        <h2 style={{ fontSize: '2.25rem', fontWeight: '800', textAlign: 'center', marginBottom: '4rem' }}>Why Choose LearnPath?</h2>
        <div className="features-section-content">
          <div className="features-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div className="card" style={{ padding: '2rem', textAlign: 'center' }}>
              <div style={{ width: '4rem', height: '4rem', backgroundColor: '#6366f1', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                <svg style={{ width: '2rem', height: '2rem', color: 'white' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>AI-Powered Personalization</h3>
              <p style={{ color: isDarkMode ? '#94a3af' : '#6b7280', lineHeight: '1.6' }}>
                Our advanced AI analyzes your learning patterns and adapts content to match your unique style and pace.
              </p>
            </div>
            
            <div className="card" style={{ padding: '2rem', textAlign: 'center' }}>
              <div style={{ width: '4rem', height: '4rem', backgroundColor: '#6366f1', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                <svg style={{ width: '2rem', height: '2rem', color: 'white' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Interactive Learning</h3>
              <p style={{ color: isDarkMode ? '#94a3af' : '#6b7280', lineHeight: '1.6' }}>
                Engage with dynamic content, real-time feedback, and interactive exercises that make learning enjoyable.
              </p>
            </div>
            
            <div className="card" style={{ padding: '2rem', textAlign: 'center' }}>
              <div style={{ width: '4rem', height: '4rem', backgroundColor: '#6366f1', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                <svg style={{ width: '2rem', height: '2rem', color: 'white' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Progress Tracking</h3>
              <p style={{ color: isDarkMode ? '#94a3af' : '#6b7280', lineHeight: '1.6' }}>
                Monitor your learning journey with detailed analytics and insights to stay motivated and focused.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* Mobile Responsive Styles for Features Section */
        @media (max-width: 479px) {
          .features-section-content {
            padding: 0 0.5rem;
          }

          .features-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }

          .features-grid .card {
            padding: 1.5rem !important;
            margin-bottom: 0;
          }

          .features-grid .card h3 {
            font-size: 1.25rem !important;
            margin-bottom: 0.75rem !important;
          }

          .features-grid .card p {
            font-size: 0.9rem !important;
            line-height: 1.5 !important;
          }

          .features-grid .card > div:first-child {
            width: 3rem !important;
            height: 3rem !important;
            margin-bottom: 1rem !important;
          }

          .features-grid .card > div:first-child svg {
            width: 1.5rem !important;
            height: 1.5rem !important;
          }
        }

        @media (min-width: 480px) and (max-width: 767px) {
          .features-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }

          .features-grid .card {
            padding: 2rem 1.5rem !important;
            max-width: 400px;
            margin: 0 auto;
          }
        }

        @media (min-width: 768px) and (max-width: 1023px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 2rem !important;
          }

          .features-grid .card:last-child {
            grid-column: 1 / -1;
            max-width: 400px;
            margin: 0 auto;
          }
        }

        /* Touch optimizations */
        @media (max-width: 768px) {
          .features-grid .card {
            transition: transform 0.2s ease, box-shadow 0.2s ease;
          }

          .features-grid .card:hover {
            transform: translateY(-5px) scale(1.01);
          }

          .features-grid .card:active {
            transform: translateY(-2px) scale(0.99);
          }
        }
      `}</style>
    </section>
  );
};

export default FeaturesSection;