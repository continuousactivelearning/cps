import { Box } from '@mui/material';
import Footer from '../components/Footer';
import CTASection from '../landingp/CTASection';
import Features from '../landingp/Features';
import HeroSection from '../landingp/HeroSection';
import Navbar from '../landingp/Navbar';

const LandingPage = () => {
  return (
    <Box>
      <Navbar />
      <HeroSection />
      <Features />
      <CTASection />
      <Footer />
    </Box>
  );
};

export default LandingPage;