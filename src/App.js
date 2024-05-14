import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
// import Card from './components/Card';
// import Navbar from './components/Navbar';
import Home from './components/Home'; // Import the Home component
import Contactus from './components/Contactus';
import About from './components/About';
import NewHeader from './components/NewHeader';
// index.js or App.js
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Team from './components/Team';
import AccountProvider from './components/context/AccountProvider';
import FirstScreen from './components/FirstScreen';


function App() {
  return (
    <>
    <AccountProvider><Router>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <NewHeader  />
        {/* <FirstScreen/> */}
        
        <div style={{ flex: 1, overflow: 'auto' }}>
          <Routes>
            
          <Route path="/" element={<Home />} /> 
          <Route path="/about" element={<About/>} /> 
          <Route path="/contact" element={<Contactus />} /> 
          <Route path="/team" element={<Team />} /> 

          </Routes>
        </div>
        
        
      </div>
     </Router></AccountProvider>
      
    </>  
  );
}

export default App;
