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
          <div style={{ maxWidth: '48rem', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
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
    </section>
  );
};

export default FAQSection; 