import React from 'react';

interface FAQSectionProps {
  isDarkMode?: boolean;
}

const FAQSection: React.FC<FAQSectionProps> = ({ isDarkMode = false }) => {
  const toggleFaq = (id: string) => {
    const answer = document.getElementById(id + '-answer');
    const toggle = document.getElementById(id + '-toggle');
    if (answer && toggle) {
      answer.classList.toggle('open');
      toggle.classList.toggle('open');
    }
  };

  return (
    <section id="faq" style={{
      padding: '6rem 0',
      backgroundColor: isDarkMode ? 'var(--bg-dark)' : 'white',
      color: isDarkMode ? 'var(--text-color-dark)' : '#1f2937'
    }}>
      <div className="container">
        <h2 style={{ fontSize: '2.25rem', fontWeight: '800', textAlign: 'center', marginBottom: '4rem' }}>Frequently Asked Questions</h2>
        <div className="faq-section-content">
          <div className="faq-container" style={{ maxWidth: '48rem', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="faq-item" style={{ padding: '1.5rem', cursor: 'pointer' }} onClick={() => toggleFaq('faq1')}>
              <div className="faq-toggle" id="faq1-toggle" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600' }}>How does LearnPath personalize my learning?</h3>
                <span style={{ color: '#6366f1', fontSize: '1.5rem' }}></span>
              </div>
              <div className="faq-answer" style={{ marginTop: '1rem', color: isDarkMode ? '#94a3af' : '#6b7280' }} id="faq1-answer">
                <p>Our AI assesses your initial knowledge, learning style, and goals through a series of questions and adaptive tests. It then continuously adjusts your path based on your progress and performance.</p>
              </div>
            </div>
            
            <div className="faq-item" style={{ padding: '1.5rem', cursor: 'pointer' }} onClick={() => toggleFaq('faq2')}>
              <div className="faq-toggle" id="faq2-toggle" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600' }}>What subjects and topics are available?</h3>
                <span style={{ color: '#6366f1', fontSize: '1.5rem' }}></span>
              </div>
              <div className="faq-answer" style={{ marginTop: '1rem', color: isDarkMode ? '#94a3af' : '#6b7280' }} id="faq2-answer">
                <p>We offer a wide range of subjects including programming, data science, business, design, and more. Our library is constantly expanding with new topics and updated content.</p>
              </div>
            </div>

            <div className="faq-item" style={{ padding: '1.5rem', cursor: 'pointer' }} onClick={() => toggleFaq('faq3')}>
              <div className="faq-toggle" id="faq3-toggle" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600' }}>Can I learn at my own pace?</h3>
                <span style={{ color: '#6366f1', fontSize: '1.5rem' }}></span>
              </div>
              <div className="faq-answer" style={{ marginTop: '1rem', color: isDarkMode ? '#94a3af' : '#6b7280' }} id="faq3-answer">
                <p>Absolutely! LearnPath is designed for flexible learning. You can pause, resume, and review content at any time. Your progress is saved automatically.</p>
              </div>
            </div>

            <div className="faq-item" style={{ padding: '1.5rem', cursor: 'pointer' }} onClick={() => toggleFaq('faq4')}>
              <div className="faq-toggle" id="faq4-toggle" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600' }}>Is there a mobile app available?</h3>
                <span style={{ color: '#6366f1', fontSize: '1.5rem' }}></span>
              </div>
              <div className="faq-answer" style={{ marginTop: '1rem', color: isDarkMode ? '#94a3af' : '#6b7280' }} id="faq4-answer">
                <p>Yes! Our platform is fully responsive and works seamlessly on all devices. You can access your learning path from your phone, tablet, or computer.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* FAQ Section Mobile Responsive Styles */
        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease, opacity 0.3s ease;
          opacity: 0;
        }

        .faq-answer.open {
          max-height: 200px;
          opacity: 1;
        }

        .faq-toggle span::after {
          content: '+';
          transition: transform 0.3s ease;
        }

        .faq-toggle.open span::after {
          content: '−';
          transform: rotate(180deg);
        }

        @media (max-width: 479px) {
          .faq-section-content {
            padding: 0 0.5rem;
          }

          .faq-container {
            gap: 1rem !important;
            max-width: 100% !important;
            margin: 0 !important;
          }

          .faq-item {
            padding: 1rem !important;
            border-radius: 0.75rem;
            background: rgba(99, 102, 241, 0.05);
            border: 1px solid rgba(99, 102, 241, 0.1);
          }

          .faq-toggle h3 {
            font-size: 1rem !important;
            line-height: 1.4 !important;
            margin-right: 1rem;
          }

          .faq-toggle span {
            font-size: 1.25rem !important;
            min-width: 1.5rem;
            text-align: center;
          }

          .faq-answer {
            margin-top: 0.75rem !important;
          }

          .faq-answer p {
            font-size: 0.9rem !important;
            line-height: 1.5 !important;
          }
        }

        @media (min-width: 480px) and (max-width: 767px) {
          .faq-section-content {
            padding: 0 1rem;
          }

          .faq-container {
            gap: 1.25rem !important;
          }

          .faq-item {
            padding: 1.25rem !important;
            border-radius: 1rem;
            background: rgba(99, 102, 241, 0.03);
            border: 1px solid rgba(99, 102, 241, 0.08);
          }

          .faq-toggle h3 {
            font-size: 1.125rem !important;
          }

          .faq-answer p {
            font-size: 1rem !important;
          }
        }

        @media (min-width: 768px) and (max-width: 1023px) {
          .faq-container {
            max-width: 42rem !important;
          }

          .faq-item {
            border-radius: 1rem;
            background: rgba(99, 102, 241, 0.02);
            border: 1px solid rgba(99, 102, 241, 0.05);
          }
        }

        /* Touch optimizations */
        @media (max-width: 768px) {
          .faq-item {
            touch-action: manipulation;
            -webkit-tap-highlight-color: transparent;
            transition: all 0.2s ease;
          }

          .faq-item:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            background: rgba(99, 102, 241, 0.08) !important;
          }

          .faq-item:active {
            transform: translateY(0);
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
          }

          .faq-toggle {
            align-items: flex-start !important;
          }

          .faq-toggle span {
            margin-top: 0.125rem;
            font-weight: bold;
            color: #6366f1 !important;
          }
        }

        /* Improved accessibility */
        @media (max-width: 768px) {
          .faq-item:focus {
            outline: 2px solid #6366f1;
            outline-offset: 2px;
          }

          .faq-toggle h3 {
            word-wrap: break-word;
            hyphens: auto;
          }
        }
      `}</style>
    </section>
  );
};

export default FAQSection;