import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material';
import React, { useState } from 'react';

const faqs = [
  {
    question: "What is DSA Learn Portal?",
    answer: "DSA Learn Portal is an interactive platform to help you master Data Structures and Algorithms with AI-powered assistance and curated resources."
  },
  {
    question: "Is the platform free to use?",
    answer: "Yes! You can use the core features of DSA Learn Portal for free."
  },
  {
    question: "How do I ask a question?",
    answer: "Simply type your DSA question in the chat or question box and our AI will assist you with explanations and resources."
  },
  {
    question: "Can I track my learning progress?",
    answer: "Yes, you can create an account to save your progress and revisit previous chats."
  }
];

const FAQSection: React.FC = () => {
  const [expanded, setExpanded] = useState<number | false>(false);

  const handleChange = (panel: number) => (
    event: React.SyntheticEvent,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box
      sx={{
        py: 6,
        px: { xs: 1, sm: 4 },
        maxWidth: 650,
        mx: 'auto',
        borderRadius: 4,
        background: 'linear-gradient(135deg, #e0e7ff 0%, #f0fdfa 100%)',
        boxShadow: 6,
        mt: 6,
      }}
    >
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          fontWeight: 700,
          letterSpacing: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 1,
        }}
      >
        <span role="img" aria-label="faq">💡</span> Frequently Asked Questions
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        sx={{ mb: 4 }}
      >
        Find answers to common questions below!
      </Typography>
      {faqs.map((faq, idx) => (
        <Accordion
          key={idx}
          expanded={expanded === idx}
          onChange={handleChange(idx)}
          sx={{
            mb: 2,
            borderRadius: 2,
            boxShadow: expanded === idx ? 4 : 1,
            background: expanded === idx
              ? 'linear-gradient(90deg, #a7f3d0 0%, #f0fdfa 100%)'
              : 'rgba(255,255,255,0.85)',
            transition: 'box-shadow 0.3s, background 0.3s',
            '&:hover': {
              boxShadow: 6,
              background: 'linear-gradient(90deg, #dbeafe 0%, #f0fdfa 100%)',
            },
            '&:before': { display: 'none' },
          }}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon
                sx={{
                  color: expanded === idx ? '#059669' : 'inherit',
                  transform: expanded === idx ? 'rotate(180deg)' : 'none',
                  transition: 'transform 0.3s',
                }}
              />
            }
            aria-controls={`faq-content-${idx}`}
            id={`faq-header-${idx}`}
            sx={{
              fontWeight: expanded === idx ? 700 : 500,
              color: expanded === idx ? '#059669' : 'inherit',
              transition: 'color 0.3s',
            }}
          >
            <Typography variant="subtitle1" sx={{ fontWeight: 'inherit' }}>
              {faq.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" color="text.secondary">
              {faq.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default FAQSection;