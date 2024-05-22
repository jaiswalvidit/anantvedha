import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Contactus from './components/Contactus';
import About from './components/About';
import NewHeader from './components/NewHeader';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Team from './components/Team';
import Footer from './components/Footer';
import Rotate from './components/Rotate';
import AccountProvider from './components/context/AccountProvider';

function App() {
  return (
    <AccountProvider>
      <Router>
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <NewHeader />
          <div style={{ flex: 1, overflow: 'auto' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contactus />} />
              <Route path="/team" element={<Team />} />
            </Routes>
          </div>
          <Rotate style={{ position: 'absolute', margin: '50vh 5px' }} />
          <Footer />
        </div>
      </Router>
    </AccountProvider>
  );
}

export default App;
