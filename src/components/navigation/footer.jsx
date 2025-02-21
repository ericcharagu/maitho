import React from "react";
import { Typography } from "@mui/material";

const Footer = () => {
  return (
    <div
      className="container"
      style={{
        textAlign: "center",
       
        backgroundColor: "#f5f5f5",
        borderTop: "1px solid #e0e0e0",
        
      }}
    >
      <Typography
        variant="body2"
        style={{
          color: "#666",
          fontSize: "14px",
        }}
      >
        This website was created by <a href="https://echara.vercel.app/">Echara</a> @2025
      </Typography>
    </div>
  );
};

export default Footer;