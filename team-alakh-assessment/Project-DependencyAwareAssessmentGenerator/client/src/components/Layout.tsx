// src/components/Layout.tsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main style={{ minHeight: '80vh', padding: '20px' }}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
