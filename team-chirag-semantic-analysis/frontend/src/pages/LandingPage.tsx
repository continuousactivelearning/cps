import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { Box, IconButton, Modal, Tooltip } from '@mui/material';
import React from 'react';
import Footer from '../components/Footer';
import CTASection from '../landingp/CTASection';
import FAQSection from '../landingp/FAQSection';
import Features from '../landingp/Features';
import HeroSection from '../landingp/HeroSection';
import Navbar from '../landingp/Navbar';

const LandingPage = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <Box>
      <Navbar />
      <HeroSection />
      <Features />
      <CTASection />
      <Footer />

      {/* Floating FAQ Button */}
      <Tooltip title="FAQ">
        <IconButton
          color="primary"
          sx={{
            position: 'fixed',
            bottom: 32,
            right: 32,
            bgcolor: 'white',
            boxShadow: 3,
            '&:hover': { bgcolor: 'grey.100' },
            zIndex: 2000,
          }}
          onClick={() => setOpen(true)}
        >
          <HelpOutlineIcon />
        </IconButton>
      </Tooltip>

      {/* FAQ Modal */}
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="faq-modal-title"
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Box
          sx={{
            bgcolor: 'background.paper',
            borderRadius: 2,
            boxShadow: 24,
            p: 3,
            maxWidth: 600,
            width: '90vw',
            maxHeight: '90vh',
            overflowY: 'auto',
            outline: 'none',
          }}
        >
          <FAQSection />
        </Box>
      </Modal>
    </Box>
  );
};

export default LandingPage;