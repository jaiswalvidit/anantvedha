import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
// import Card from './components/Card';
import Navbar from './components/Navbar';
import Home from './components/Home'; // Import the Home component
import Contactus from './components/Contactus';
import About from './components/About';
// index.js or App.js
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {
  return (
    <Router>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <div style={{ flex: 1, overflow: 'auto' }}>
          <Routes>
            
          <Route path="/" element={<Home />} /> 
          <Route path="/about" element={<About/>} /> 
          <Route path="/contact" element={<Contactus />} /> 
          </Routes>
        </div>
        
      </div>
    </Router>
  );
}

export default App;
