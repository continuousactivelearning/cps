import { Box } from '@mui/material';
import Navbar from '../landingp/Navbar';
import HeroSection from '../landingp/HeroSection';
import Features from '../landingp/Features';
import CTASection from '../landingp/CTASection';
import Footer from '../components/Footer';

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
