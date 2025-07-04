import React from 'react';

interface AboutSectionProps {
  isDarkMode?: boolean;
}

const AboutSection: React.FC<AboutSectionProps> = ({ isDarkMode = false }) => {
  return (
    <section id="about" style={{
      padding: '6rem 0',
      backgroundColor: isDarkMode ? 'var(--bg-dark)' : 'white',
      color: isDarkMode ? 'var(--text-color-dark)' : '#1f2937'
    }}>
      <div className="about-section-content">
        <div
          className="container about-content"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '3rem',
          }}
        >
          {/* Text Section */}
          <div
            className="about-text"
            style={{
              maxWidth: '600px',
              textAlign: 'left',
              width: '100%',
              flex: 1,
            }}
          >
            <h2 style={{ fontSize: '2.25rem', fontWeight: '800', marginBottom: '1.5rem' }}>About LearnPath</h2>
            <p style={{ fontSize: '1.125rem', color: isDarkMode ? '#94a3af' : '#6b7280', marginBottom: '1.5rem', lineHeight: '1.7' }}>
              LearnPath is dedicated to revolutionizing education through personalized, AI-driven learning experiences.
              We believe that everyone deserves a unique path to mastery, tailored to their individual needs and aspirations.
              Our platform combines cutting-edge technology with expert-curated content to provide an engaging and effective learning journey.
            </p>
            <p style={{ fontSize: '1.125rem', color: isDarkMode ? '#94a3af' : '#6b7280', lineHeight: '1.7' }}>
              Join thousands of learners who are already transforming their potential into achievement with LearnPath.
              Your journey to mastery starts here.
            </p>
          </div>

          {/* Image Section */}
          <div
            className="about-image"
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '500px',
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Team collaboration"
              style={{
                width: '100%',
                height: '20rem',
                objectFit: 'cover',
                borderRadius: '1.5rem',
                boxShadow: '0 10px 30px rgba(0,0,0,0.10)',
                display: 'block',
                background: '#eee',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '-2.5rem',
                left: '1.5rem',
                background: 'white',
                borderRadius: '1rem',
                boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                padding: '0.75rem 1.5rem',
                display: 'flex',
                alignItems: 'center',
                fontWeight: 500,
                fontSize: '1rem',
              }}
            >
              <span
                style={{
                  display: 'inline-block',
                  width: '0.75rem',
                  height: '0.75rem',
                  backgroundColor: '#6366f1',
                  borderRadius: '50%',
                  marginRight: '0.5rem',
                }}
              ></span>
              Innovation at Core
            </div>
          </div>
          <style>{`
            /* Mobile First Responsive Design for About Section */

            /* Small Mobile (0-479px) */
            @media (max-width: 479px) {
              .about-section-content {
                padding: 3rem 0 !important;
              }

              .about-content {
                gap: 2rem !important;
                padding: 0 1rem !important;
              }

              .about-text {
                text-align: center !important;
                max-width: 100% !important;
              }

              .about-text h2 {
                font-size: 1.75rem !important;
                margin-bottom: 1rem !important;
                line-height: 1.2 !important;
              }

              .about-text p {
                font-size: 1rem !important;
                margin-bottom: 1rem !important;
                line-height: 1.6 !important;
              }

              .about-image {
                max-width: 100% !important;
                align-items: center !important;
              }

              .about-image img {
                height: 16rem !important;
                border-radius: 1rem !important;
              }

              .about-image > div {
                bottom: -1.5rem !important;
                left: 1rem !important;
                padding: 0.5rem 1rem !important;
                font-size: 0.875rem !important;
              }

              .about-image > div span {
                width: 0.5rem !important;
                height: 0.5rem !important;
              }
            }

            /* Large Mobile (480-767px) */
            @media (min-width: 480px) and (max-width: 767px) {
              .about-section-content {
                padding: 4rem 0 !important;
              }

              .about-content {
                gap: 2.5rem !important;
                padding: 0 1.5rem !important;
              }

              .about-text {
                text-align: center !important;
              }

              .about-text h2 {
                font-size: 2rem !important;
              }

              .about-image img {
                height: 18rem !important;
              }
            }

            /* Tablet (768-899px) */
            @media (min-width: 768px) and (max-width: 899px) {
              .about-content {
                gap: 3rem !important;
              }

              .about-text {
                text-align: center !important;
                max-width: 600px !important;
              }

              .about-text h2 {
                font-size: 2.25rem !important;
              }

              .about-image {
                max-width: 500px !important;
              }
            }

            /* Desktop (900px+) */
            @media (min-width: 900px) {
              .about-content {
                flex-direction: row !important;
                align-items: center !important;
                gap: 3rem !important;
              }
              .about-text {
                text-align: left !important;
                max-width: 600px !important;
                width: 50% !important;
              }
              .about-image {
                width: 50% !important;
                max-width: 500px !important;
              }
            }

            /* Touch optimizations */
            @media (max-width: 768px) {
              .about-image {
                transition: transform 0.2s ease;
              }

              .about-image:hover {
                transform: scale(1.02);
              }

              .about-image:active {
                transform: scale(0.98);
              }

              .about-image > div {
                transition: transform 0.2s ease;
              }

              .about-image > div:hover {
                transform: translateY(-2px);
              }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 
