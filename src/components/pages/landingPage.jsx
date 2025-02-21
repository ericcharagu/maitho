// App.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, LineChart, PieChart } from 'lucide-react';
import './landingPage.css';

const LandingPage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <header className="hero">
        <div className="hero-overlay"></div>
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>mAItho</h1>
          <p>Revolutionizing Retail Analytics with AI-Powered Traffic Pattern Analysis</p>
          <button className="cta-button">Get Started</button>
        </motion.div>
      </header>

      {/* Features Section */}
      <section className="features">
        <h2>Our Technology</h2>
        <div className="features-grid">
          <motion.div {...fadeIn} className="feature-card">
            <div className="icon-wrapper">
              <BarChart className="feature-icon" />
            </div>
            <h3>OCR Technology</h3>
            <p>Advanced optical character recognition for precise visitor counting and movement tracking</p>
          </motion.div>

          <motion.div {...fadeIn} className="feature-card">
            <div className="icon-wrapper">
              <LineChart className="feature-icon" />
            </div>
            <h3>DeepSORT Analysis</h3>
            <p>Real-time tracking and pattern recognition for optimal customer flow analysis</p>
          </motion.div>

          <motion.div {...fadeIn} className="feature-card">
            <div className="icon-wrapper">
              <PieChart className="feature-icon" />
            </div>
            <h3>Data Analytics</h3>
            <p>Comprehensive insights for targeted marketing and safety optimization</p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits">
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
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2>Ready to Transform Your Space?</h2>
        <p>Get started with mAItho's intelligent traffic analysis solution today</p>
        <button className="cta-button white">Request Demo</button>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <div className="footer-column">
            <h3>mAItho</h3>
            <p>Intelligent Traffic Analysis Solutions</p>
          </div>
          <div className="footer-column">
            <h4>Products</h4>
            <ul>
              <li>Traffic Analysis</li>
              <li>Safety Planning</li>
              <li>Marketing Insights</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li>About Us</li>
              <li>Contact</li>
            
            </ul>
          </div>
          <div className="footer-column">
            <h4>Legal</h4>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>GDPR Compliance</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;