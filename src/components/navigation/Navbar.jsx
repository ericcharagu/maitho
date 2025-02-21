import React, { useState } from "react";
import { Nav, Navbar, NavDropdown, Offcanvas } from "react-bootstrap";
import { Box } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation, Link, useNavigate } from "react-router-dom";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import "./Navbar.css";

const PageHeader = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleLogout = () => {
    // Add your logout logic here
    navigate("/");
  };

  const handleCloseOffcanvas = () => setShowOffcanvas(false);
  const handleShowOffcanvas = () => setShowOffcanvas(true);

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-white border-b px-4 py-2">
      <div className="container" id="NavbarDiv">
        {/* Logo */}
        <Navbar.Brand as={Link} to="/" className="mr-8">
          <img
            src="/mv_logo_2.png"
            alt="Company Logo"
            className="h-8"
            style={{ height: "50px" }}
          />
        </Navbar.Brand>

        {/* Toggle Button for Offcanvas */}
        <Navbar.Toggle
          aria-controls="offcanvas-navbar"
          onClick={handleShowOffcanvas}
        />

        {/* Offcanvas Menu for Mobile */}
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvas-navbar-label"
          placement="end"
          show={showOffcanvas}
          onHide={handleCloseOffcanvas}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvas-navbar-label">
Maitho            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            {/* Navigation Tabs */}
            <Nav className="me-auto">
              <Nav.Link
                as={Link}
                to="/"
                className={`relative px-3 py-2 ${
                  currentPath === "/" ? "text-blue-600" : "text-gray-600"
                }`}
                onClick={handleCloseOffcanvas}
              >
                Features
                {currentPath === "/" && (
                  <motion.div
                    layoutId="active-tab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                    initial={false}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/"
                className={`relative px-3 py-2 ${
                  currentPath === "/" ? "text-blue-600" : "text-gray-600"
                }`}
                onClick={handleCloseOffcanvas}
              >
                Contact Us
                {currentPath === "/" && (
                  <motion.div
                    layoutId="active-tab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                    initial={false}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Nav.Link>
            </Nav>

            {/* User Menu */}
            <Box className="flex items-center">
              <NavDropdown
                title={<PersonOutlineIcon />}
                id="user-nav-dropdown"
              >
                <NavDropdown.Item
                  as={Link}
                  to="/profile"
                  onClick={handleCloseOffcanvas}
                >
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/settings"
                  onClick={handleCloseOffcanvas}
                >
                  Settings
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={handleLogout}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Box>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </div>
    </Navbar>
  );
};

export default PageHeader;