import React,{ useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react" //Spped insights from vercel
import PageLayout from "./components/layout/PageLayout"; // Import the layout
import LandingPage from './components/pages/landingPage';
import './App.css';

function App() {
  return (
    <Router>
      <PageLayout>
      <SpeedInsights/>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
        
        </Routes>
      </PageLayout>
    </Router>
  );
}

export default App;

