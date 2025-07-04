import React, { useEffect } from 'react';

const AnimatedBackground: React.FC = () => {
  useEffect(() => {
    const initParticles = () => {
      const particlesContainer = document.querySelector('.particles');
      if (particlesContainer) {
        const numParticles = 50;
        for (let i = 0; i < numParticles; i++) {
          const particle = document.createElement('div');
          particle.classList.add('particle');
          particle.style.left = `${Math.random() * 100}%`;
          particle.style.top = `${Math.random() * 100}%`;
          particle.style.animationDelay = `${Math.random() * 15}s`;
          particle.style.transform = `scale(${0.5 + Math.random()})`;
          particlesContainer.appendChild(particle);
        }
      }
    };

    initParticles();
  }, []);

  return (
    <>
      <div className="animated-bg">
        <div className="floating-shape" style={{top: '10%', left: '15%', width: '80px', height: '80px'}}></div>
        <div className="floating-shape" style={{top: '30%', left: '80%', width: '120px', height: '120px', borderRadius: '20%'}}></div>
        <div className="floating-shape" style={{top: '70%', left: '30%', width: '100px', height: '100px', borderRadius: '60%'}}></div>
        <div className="floating-shape" style={{top: '50%', left: '5%', width: '60px', height: '60px'}}></div>
        <div className="floating-shape" style={{top: '85%', left: '90%', width: '90px', height: '90px', borderRadius: '70%'}}></div>
      </div>
      <div className="particles"></div>
    </>
  );
};

export default AnimatedBackground; 