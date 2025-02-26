import React, { useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import "./Navbar.css";
import MaithoLogo from "/logo_test.png";

const PageHeader = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      closeMobileMenu();
    }
  };

  const closeMobileMenu = () => setMobileMenuOpen(false);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const navItems = [
    { id: "about", label: "About us" },
    { id: "features", label: "Features" },
    { id: "start", label: "Get Started" },
    { id: "contact", label: "Contact Us" }
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <img src={MaithoLogo} style={{height:"40px"}} onClick={()=>handleScroll('home')} alt="maitho" className="logo-image" />
        </Link>

        {/* Mobile Toggle Button */}
        <button 
          className="mobile-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
        >
          <span className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </span>
        </button>

        {/* Navigation Links */}
        <div className={`navbar-links ${mobileMenuOpen ? 'open' : ''}`}>
          <ul className="nav-items">
            {navItems.map((item) => (
              <li key={item.id} className="nav-item">
                <Link
                  to="/"
                  className={`nav-link ${currentPath === "/" ? "active" : ""}`}
                  onClick={() => handleScroll(item.id)}
                >
                  {item.label}
                  {currentPath === "/" && (
                    <motion.div
                      className="active-indicator"
                      layoutId={`indicator-${item.id}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* User Menu - Commented out for now but improved structure */}
          {/* 
          <div className="user-menu">
            <div className="dropdown">
              <button className="dropdown-toggle">
                <svg className="user-icon" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </button>
              <div className="dropdown-menu">
                <Link to="/profile" className="dropdown-item" onClick={closeMobileMenu}>
                  Profile
                </Link>
                <Link to="/settings" className="dropdown-item" onClick={closeMobileMenu}>
                  Settings
                </Link>
                <div className="dropdown-divider"></div>
                <button className="dropdown-item" onClick={() => navigate("/")}>
                  Logout
                </button>
              </div>
            </div>
          </div>
          */}
        </div>
      </div>
    </nav>
  );
};

export default PageHeader;