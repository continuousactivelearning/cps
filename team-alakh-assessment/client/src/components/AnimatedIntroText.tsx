import React, { useEffect, useState } from 'react';

const introText = "Discover what you can learn next with our intelligent prerequisite system. We'll guide you through the optimal learning path based on your current knowledge.";

const AnimatedIntroText: React.FC = () => {
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    let i = 0;
    let timeout: NodeJS.Timeout;
    function type() {
      setDisplayed(introText.slice(0, i));
      if (i < introText.length) {
        i++;
        timeout = setTimeout(type, 18 + Math.random() * 40);
      }
    }
    type();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="w-full flex justify-center mt-10 mb-8 select-none">
      <h2
        className="
          text-center
          text-lg
          md:text-3xl
          lg:text-4xl
          font-sans
          font-semibold
          tracking-wide
          px-4
          text-white dark:text-gray-200
        "
        style={{
          textShadow: '0 2px 16px rgba(0,0,0,0.28), 0 1px 2px rgba(0,0,0,0.18)',
        }}
      >
        {displayed}
        <span className="inline-block w-2 h-6 align-middle animate-pulse bg-white dark:bg-gray-200 rounded-sm ml-1" />
      </h2>
    </div>
  );
};

export default AnimatedIntroText; 