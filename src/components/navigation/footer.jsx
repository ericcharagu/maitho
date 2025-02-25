import React from "react";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import "../pages/landingPage.css";
const Footer = () => {

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
    
    <footer>
    <div className="footer-content">
      <div className="footer-column">
        <h3>Maitho</h3>
        <p>Intelligent Traffic Analysis Solutions</p>
      </div>
      <motion.div id="contact" className="footer-column">
        <h4>Contact Us</h4>
        <ul>
          <li>+254 736 391 323</li>
          <li>charagu@stratadesigns.co.ke</li>
          <li>Nairobi</li>
          <li>Kenya</li>
        </ul>
      </motion.div>
      <div className="footer-column">
        <h4>Company</h4>
        <ul>
          <li onClick={()=>handleScroll('about')}>About Us</li>
          <li onClick={()=>handleScroll('features')}>Features</li>
          <li onClick={()=>handleScroll('start')}>Get Started</li>
          <li onClick={()=>handleScroll('contact')}>Contact</li>

        </ul>
      </div>
      
    </div>
  </footer> 
  );
};

export default Footer;