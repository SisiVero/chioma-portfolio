import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
import Home from './Home';
import Introduction from './Introduction';
import Projects from './Projects';
import WhatIDo from './WhatIDo';
import About from './About';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/introduction" element={<Introduction />} />
          <Route path="services" element={<WhatIDo />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
