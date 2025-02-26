// App.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import "./landingPage.css";
import ZoneDensityCard from "../cards/zoneDensity";
import VisitorTraffic from "../cards/visitorTraffic";
import Conversions from "../cards/conversions";
import AboutUsCard from "../cards/about";
import HeroTop from "/hero_top.png"
import HeroBottom from "/hero_btm.png"
import Grid from '@mui/material/Grid2';
import MaithoLogo from "/logo_test.png";
import { 
  Container, 
  Typography, 
  Button, 
  Box, 
  useMediaQuery, 
  Paper
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import GetStarted from "../forms/getStarted";

const LandingPage = () => {
  
const HeroSection = styled(Box)(({ theme }) => ({
  minHeight: '90vh',
  display: 'flex',
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: '#f8f9fa',
}));

const ContentContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
}));

const LeftContent = styled(Box)(({ theme }) => ({
  width: '50%',
  padding: theme.spacing(4, 6),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    width: '100%',
    padding: theme.spacing(4, 2),
    alignItems: 'center',
    textAlign: 'center',
  },
}));

const RightContent = styled(Box)(({ theme }) => ({
  width: '50%',
  height:'auto',
  display: 'flex',
  flexDirection:'column', 
  alignItems:'center',
  [theme.breakpoints.down('md')]: {
    width: '100%',
    flexDirection: 'column',
  },
}));

const ImageColumn = styled(Box)(({ theme }) => ({
  maxWidth: '80%',
  padding: theme.spacing(1),
 
  display: 'flex',
  flexDirection:'column',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    width: '100%',
    padding: theme.spacing(2, 4),
  },
}));

const HeroTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "'Montserrat', sans-serif",
  fontWeight: 700,
  fontSize: '3.5rem',
  marginBottom: theme.spacing(2),
  color: '#1a237e',
  [theme.breakpoints.down('sm')]: {
    fontSize: '2.5rem',
  },
}));

const HeroSubtitle = styled(Typography)(({ theme }) => ({
  fontFamily: "'Poppins', sans-serif",
  fontSize: '1.2rem',
  marginBottom: theme.spacing(4),
  maxWidth: '500px',
  lineHeight: 1.6,
  color: '#424242',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
  },
}));

const CTAButton = styled(Button)(({ theme }) => ({
  fontFamily: "'Poppins', sans-serif",
  backgroundColor: '#3f51b5',
  color: 'white',
  padding: theme.spacing(1.5, 4),
  borderRadius: '30px',
  textTransform: 'none',
  fontSize: '1rem',
  fontWeight: 500,
  boxShadow: '0 4px 14px 0 rgba(63, 81, 181, 0.4)',
  '&:hover': {
    backgroundColor: '#303f9f',
    boxShadow: '0 6px 20px rgba(63, 81, 181, 0.6)',
  },
}));

const StyledImage = styled(motion.img)(({ theme }) => ({
  maxWidth: '100%',
  height: '100%',
  borderRadius: '8px',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
}));
  const [isGetStartedOpen, setIsGetStartedOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  
  };

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <HeroSection id="home" component="header" className="hero split-hero">
      <ContentContainer>
        {/* Left section - Text and button */}
        <LeftContent className="hero-content-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{textAlign:'center'}}
          >
<HeroTitle 
  variant="h1" 
  sx={{
    display: "flex",
    alignItems: "center",
    gap: "12px", justifyContent: "center"
  }}
>
  <img 
    src={MaithoLogo} 
    alt="Maitho Logo" 
    style={{
      maxHeight: '80px',
      verticalAlign: 'middle'
    }} 
  />
  Maitho
</HeroTitle>            <HeroSubtitle variant="subtitle1">
              Revolutionizing Retail Analytics with AI-Powered Human Traffic Pattern Analysis
            </HeroSubtitle>
            <CTAButton
              className="cta-button"
              onClick={() => handleScroll('start')}
              variant="contained"
              size="large"
            >
              Get Started
            </CTAButton>
          </motion.div>
        </LeftContent>

        {/* Right section - Two images split in the middle */}
        <RightContent className="hero-content-right hide-on-mobile">
          <ImageColumn>
            <StyledImage
              src={HeroTop}
              alt="AI Analytics Dashboard"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            />
          </ImageColumn>
          <ImageColumn>
            <StyledImage
              src={HeroBottom}
              alt="Retail Analytics Visualization"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </ImageColumn>
        </RightContent>
      </ContentContainer>
    </HeroSection>
       {/* About us Section */}
       <motion.section id="about" className="about">
       <AboutUsCard />
       </motion.section>
       
      {/* Features Section */}
      <motion.section id="features" className="features">
        <h2>Real-Time Analytics Dashboard</h2>
        <div className="features-grid">
          <ZoneDensityCard />
          <VisitorTraffic />
          <Conversions />
          
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section  id="benefits" className="benefits">
        <h2>Key Benefits</h2>
        <div className="benefits-grid">
          <motion.div
            className="benefit-column"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3>Efficiency</h3>
            <ul>
              <li>Real-time processing of traffic patterns</li>
              <li>Automated data collection and analysis</li>
              <li>Immediate actionable insights</li>
            </ul>
          </motion.div>

          <motion.div
            className="benefit-column"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3>Scalability</h3>
            <ul>
              <li>Cloud-based infrastructure</li>
              <li>Flexible deployment options</li>
              <li>Multi-location support</li>
            </ul>
          </motion.div>
        </div>
      </motion.section>

      {/* Call to Action */}
    
        <Paper elevation={8}>
      <motion.section id="start"className="cta-section">
        <div className="cta-div">
        <h2>Ready to Transform Your Space?</h2>
        <p>
 
        Transform your retail business with AI-powered analytics. Complete the form below to begin your journey towards smarter, data-driven decision making.
        </p>    </div>
      </motion.section>
  </Paper>
        <GetStarted/>
     

      {/* Footer */}
      
    </div>
  );
};

export default LandingPage;
