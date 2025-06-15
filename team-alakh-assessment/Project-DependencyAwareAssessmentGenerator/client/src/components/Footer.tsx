// src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-10 text-center text-sm text-gray-500">
      <p>© {new Date().getFullYear()} Quiz App by Anand</p>
    </footer>
  );
};

export default Footer;
