import React from 'react';
import { motion } from 'framer-motion';
import { Paper, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const AboutUsCard = () => {
  const CardTitle = styled(Typography)(({ theme }) => ({
    fontSize: '2rem',
    fontWeight: 700,
    background: 'linear-gradient(45deg, #2563eb 30%, #7c3aed 90%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: theme.spacing(3),
    position: 'relative',
    '&:after': {
      content: '""',
      position: 'absolute',
      bottom: '-8px',
      left: 0,
      width: '0px',
      height: '4px',
      background: 'linear-gradient(45deg, #2563eb 30%, #7c3aed 90%)',
      borderRadius: '2px'
    }
  }));

  const HighlightedText = styled('span')(({ theme }) => ({
    color: theme.palette.primary.main,
    fontWeight: 600
  }));

  const AboutText = styled(Typography)(({ theme }) => ({
    fontSize: '1.1rem',
    lineHeight: 1.8,
    color: theme.palette.grey[700],
    '& strong': {
      color: theme.palette.primary.main,
      fontWeight: 600
    }
  }));

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 max-w-7xl mx-auto">
      <motion.div
        {...fadeIn}
        initial="initial"
        animate="animate"
        className="w-full"
      >
        <Paper 
          elevation={3} 
          sx={{
            overflow: 'hidden',
            borderRadius: 3,
            backgroundColor: 'white',
            '&:hover': {
              transform: 'translateY(-4px)',
              transition: 'transform 0.3s ease-in-out',
              boxShadow: '0 8px 24px rgba(0,0,0,0.12)'
            }
          }}
        >
          <Box 
            p={6} 
            sx={{
              background: 'linear-gradient(180deg, rgba(37,99,235,0.03) 0%, rgba(255,255,255,0) 100%)'
            }}
          >
            <CardTitle>
              About Maitho
            </CardTitle>
            
            <AboutText paragraph>
              At <HighlightedText>Maitho</HighlightedText>, we harness the power of <HighlightedText>DeepSORT algorithms</HighlightedText> and <HighlightedText>advanced computer vision</HighlightedText> to revolutionize human traffic analysis in shopping malls and retail spaces. Our cutting-edge AI-driven technology provides <HighlightedText>real-time insights</HighlightedText> into customer movement patterns, enabling businesses to optimize store layouts, enhance shopper experiences, and maximize revenue.
            </AboutText>

            <AboutText paragraph>
              With a deep focus on <HighlightedText>accuracy, efficiency, and scalability</HighlightedText>, our solutions track foot traffic, dwell times, and customer flow dynamics—all while maintaining privacy and compliance standards. Whether you're a retail chain, mall operator, or commercial property manager, our <HighlightedText>data-driven insights</HighlightedText> empower you to make informed decisions that drive growth and operational excellence.
            </AboutText>

            <AboutText>
              At <HighlightedText>Maitho</HighlightedText>, we believe the future of retail is <HighlightedText>smarter, more responsive, and customer-centric</HighlightedText>—and we're here to make that a reality. Let's redefine retail intelligence together.
            </AboutText>
          </Box>
        </Paper>
      </motion.div>
    </div>
  );
};

export default AboutUsCard;