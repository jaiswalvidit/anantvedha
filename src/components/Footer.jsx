import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { WhatsApp, Twitter, Instagram, Phone } from '@mui/icons-material';
import { AccountContext } from './context/AccountProvider';
import logo1 from './images/startup/logo1.jpg'
import logo from './images/startup/logo.jpg'
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
export default function Footer() {
  const { mode, setMode } = useContext(AccountContext);
  
  const isSmallScreen = window.innerWidth < 768;

console.log(mode);
  // Function to toggle between dark and light mode
 

  // Set a default value for mode in case context is not initialized yet
  const themeClass = mode ? 'dark' : 'base';
  console.log(themeClass);

  return (
    <div className={`bg-${themeClass}-300`} style={{ backgroundColor: mode ? 'black' : 'white', color: mode ? 'white' : 'black' }}>

    <footer className={`footer p-10 pb-5 bg-${themeClass}-300 text-${themeClass}-content`}>
        <nav style={{margin:isSmallScreen?'0px auto':''}}>
        <img
  src={!mode ? logo : logo1}
  alt="logo"
  style={{ height: '40vh', backgroundColor: 'black' }}
/>

         
        </nav>
        <nav style={{margin:isSmallScreen?'0px auto':''}}>
          <h6 className="footer-title text-xl">Company</h6>
          <Link to="/about" className="link link-hover">About us</Link>
          <Link to="/contact" className="link link-hover">Contact</Link>
          <Link to="mailto:info@anantvedha.com" className="link link-hover" ><MailIcon style={{paddingRight: '5px '}}/>
          info@anantvedha.com</Link>
          <Link to="/contact" className="link link-hover"><CallIcon style={{paddingRight: '5px '}}/>6396643912</Link>
         
        </nav>
        <nav style={{margin:isSmallScreen?'0px auto':''}}>
          <div >
            <h6 className="footer-title text-center text-xl" >Social</h6>
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
      <p className="text-sm">&copy; 2024 - All rights reserved by AnantVedha private limited</p>

      </div>
    </div>
  );
}
