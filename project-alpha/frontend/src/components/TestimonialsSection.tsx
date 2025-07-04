import React from 'react';

interface TestimonialsSectionProps {
  isDarkMode?: boolean;
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ isDarkMode = false }) => {
  return (
    <section id="testimonials" style={{
      padding: '6rem 0',
      backgroundColor: isDarkMode ? '#2d3748' : '#f9fafb',
      color: isDarkMode ? 'var(--text-color-dark)' : '#1f2937'
    }}>
      <div className="container">
        <h2 style={{ fontSize: '2.25rem', fontWeight: '800', textAlign: 'center', marginBottom: '4rem' }}>What Our Learners Say</h2>
        <div className="testimonials-section-content">
          <div className="testimonials-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div className="testimonial-card" style={{ padding: '2rem', textAlign: 'center' }}>
              <p style={{ fontSize: '1.125rem', fontStyle: 'italic', marginBottom: '1.5rem' }}>"LearnPath transformed my understanding of complex topics. The personalized approach kept me motivated and engaged!"</p>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="John Doe" style={{ width: '4rem', height: '4rem', borderRadius: '50%', objectFit: 'cover', marginBottom: '0.75rem', border: '4px solid #6366f1' }} />
                <p style={{ fontWeight: '600', fontSize: '1.125rem' }}>John Doe</p>
                <p style={{ color: isDarkMode ? '#94a3af' : '#6b7280' }}>Software Engineer</p>
              </div>
            </div>
            
            <div className="testimonial-card" style={{ padding: '2rem', textAlign: 'center' }}>
              <p style={{ fontSize: '1.125rem', fontStyle: 'italic', marginBottom: '1.5rem' }}>"The interactive lessons and real-time progress tracking made learning enjoyable and effective. Highly recommend!"</p>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Jane Smith" style={{ width: '4rem', height: '4rem', borderRadius: '50%', objectFit: 'cover', marginBottom: '0.75rem', border: '4px solid #6366f1' }} />
                <p style={{ fontWeight: '600', fontSize: '1.125rem' }}>Jane Smith</p>
                <p style={{ color: isDarkMode ? '#94a3af' : '#6b7280' }}>Student</p>
              </div>
            </div>
            
            <div className="testimonial-card" style={{ padding: '2rem', textAlign: 'center' }}>
              <p style={{ fontSize: '1.125rem', fontStyle: 'italic', marginBottom: '1.5rem' }}>"As a busy professional, I needed a flexible learning solution. LearnPath delivered exactly what I needed!"</p>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img src="https://randomuser.me/api/portraits/men/67.jpg" alt="Mike Johnson" style={{ width: '4rem', height: '4rem', borderRadius: '50%', objectFit: 'cover', marginBottom: '0.75rem', border: '4px solid #6366f1' }} />
                <p style={{ fontWeight: '600', fontSize: '1.125rem' }}>Mike Johnson</p>
                <p style={{ color: isDarkMode ? '#94a3af' : '#6b7280' }}>Product Manager</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* Mobile Responsive Styles for Testimonials Section */
        @media (max-width: 479px) {
          .testimonials-section-content {
            padding: 0 0.5rem;
          }

          .testimonials-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }

          .testimonial-card {
            padding: 1.5rem !important;
            margin-bottom: 0;
          }

          .testimonial-card p:first-child {
            font-size: 1rem !important;
            margin-bottom: 1rem !important;
            line-height: 1.5 !important;
          }

          .testimonial-card img {
            width: 3rem !important;
            height: 3rem !important;
            margin-bottom: 0.5rem !important;
            border-width: 3px !important;
          }

          .testimonial-card p:nth-child(2) {
            font-size: 1rem !important;
            margin-bottom: 0.25rem !important;
          }

          .testimonial-card p:last-child {
            font-size: 0.875rem !important;
          }
        }

        @media (min-width: 480px) and (max-width: 767px) {
          .testimonials-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }

          .testimonial-card {
            padding: 2rem 1.5rem !important;
            max-width: 400px;
            margin: 0 auto;
          }

          .testimonial-card p:first-child {
            font-size: 1.125rem !important;
          }
        }

        @media (min-width: 768px) and (max-width: 1023px) {
          .testimonials-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 2rem !important;
          }

          .testimonials-grid .testimonial-card:last-child {
            grid-column: 1 / -1;
            max-width: 400px;
            margin: 0 auto;
          }
        }

        /* Touch optimizations */
        @media (max-width: 768px) {
          .testimonial-card {
            transition: transform 0.2s ease, box-shadow 0.2s ease;
            cursor: pointer;
          }

          .testimonial-card:hover {
            transform: translateY(-5px) scale(1.02);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          }

          .testimonial-card:active {
            transform: translateY(-2px) scale(0.99);
          }

          .testimonial-card img {
            transition: transform 0.2s ease;
          }

          .testimonial-card:hover img {
            transform: scale(1.1);
          }
        }

        /* Improved readability on mobile */
        @media (max-width: 768px) {
          .testimonial-card p:first-child {
            text-align: left !important;
            padding: 0 0.5rem;
          }

          .testimonial-card > div {
            margin-top: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;
