import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { WhatsApp, Twitter, Instagram } from '@mui/icons-material';
import { AccountContext } from './context/AccountProvider';

export default function Footer() {
  const { mode, setMode } = useContext(AccountContext);
console.log(mode);
  // Function to toggle between dark and light mode
  const toggleTheme = () => {
    setMode(prevMode => !prevMode);
    // You can add logic here to update the theme for the entire application
  };

  // Set a default value for mode in case context is not initialized yet
  const themeClass = mode ? 'dark' : 'base';
  console.log(themeClass);

  return (
    <div className={`bg-${themeClass}-300`} style={{ backgroundColor: mode ? 'black' : 'white', color: mode ? 'white' : 'black' }}>

    <footer className={`footer p-10 bg-${themeClass}-300 text-${themeClass}-content`}>
        <nav >
          <h6 className="footer-title text-xl">Services</h6>
          <Link to="#" className="link link-hover" style={{ color: mode ? 'white' : 'black' }}>Branding</Link>
          <Link to="#" className="link link-hover">Design</Link>
          <Link to="#" className="link link-hover">Marketing</Link>
          <Link to="#" className="link link-hover">Advertisement</Link>
        </nav>
        <nav>
          <h6 className="footer-title text-xl">Company</h6>
          <Link to="#" className="link link-hover">About us</Link>
          <Link to="#" className="link link-hover">Contact</Link>
          <Link to="#" className="link link-hover">Jobs</Link>
          <Link to="#" className="link link-hover">Press kit</Link>
        </nav>
        <nav>
          <div>
            <h6 className="footer-title text-center text-xl">Social</h6>
            <div className="grid grid-cols-3 gap-4">
              <a href="https://whatsapp.com/channel/0029Vaa5M117DAWrgQzMXs0n" target="_blank" rel="noopener noreferrer" className="social-icon bg-green-500 p-2 rounded-full">
                <WhatsApp className="text-white" />
              </a>
              <a href="https://x.com/Anantvedha0705?t=_YQFQT3TNCBt47YfqkAhMg&s=08" target="_blank" rel="noopener noreferrer" className='social-icon bg-blue-400 p-2 rounded-full'>
                <Twitter className="text-white" />
              </a>
              <a href="https://www.instagram.com/anantvedha07/" target="_blank" rel="noopener noreferrer" className="social-icon bg-pink-500 p-2 rounded-full">
                <Instagram className="text-white" />
              </a>
            </div>
          </div>
        </nav>
        {/* Button to toggle theme */}
       
      </footer>
      <hr className="border-b border-gray-400" style={{ width: '50vw', margin: '0 auto' }} />
      <div className="border-t border-gray-600 p-4 text-center text-gray-600">
        <p className="text-sm">&copy; 2024 - All rights reserved by ACME Industries Ltd</p>
      </div>
    </div>
  );
}
