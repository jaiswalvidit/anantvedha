import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { WhatsApp, Twitter, Instagram } from '@mui/icons-material';
import { AccountContext } from './context/AccountProvider';
import logo1 from './images/startup/logo1.jpg';
import logo from './images/startup/logo.jpg';
import MailIcon from '@mui/icons-material/Mail';

export default function Footer() {
  const { mode } = useContext(AccountContext);

  const themeClass = mode ? 'dark' : 'base';

  return (
    <div className={`bg-${themeClass}-300`} style={{ backgroundColor: mode ? 'black' : 'white', color: mode ? 'white' : 'black' }}>
      <footer className={`footer p-10 bg-${themeClass}-300 text-${themeClass}-content`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-10">
          <nav className="flex justify-center md:justify-start" style={{margin:'0px auto'}}>
          <img
              src={!mode ? logo : logo1}
              alt="logo"
              className="h-40 bg-black transition-bg"
              style={{ borderRadius: '10px' }}
            />
          </nav>
          <nav className="text-center md:text-left" style={{margin:'0px auto'}}>
            <h6 className="footer-title text-xl mb-4">Company</h6>
            <Link to="/about" className="link link-hover block">About us</Link>
            <Link to="/contact" className="link link-hover block">Contact</Link>
            <Link to="mailto:info@anantvedha.com" className="link link-hover flex items-center">
              <MailIcon style={{ paddingRight: '5px' }} />
              info@anantvedha.com
            </Link>
          </nav>
          <nav className="text-center md:text-right" style={{margin:'0px auto'}}>
            <h6 className="footer-title text-xl mb-4 ">Social</h6>
            <div className="flex justify-center md:justify-end space-x-4">
              <a href="https://whatsapp.com/channel/0029Vaa5M117DAWrgQzMXs0n" target="_blank" rel="noopener noreferrer" className="social-icon bg-green-500 p-2 rounded-full">
                <WhatsApp className="text-white" />
              </a>
              <a href="https://x.com/Anantvedha0705?t=_YQFQT3TNCBt47YfqkAhMg&s=08" target="_blank" rel="noopener noreferrer" className="social-icon bg-blue-400 p-2 rounded-full">
                <Twitter className="text-white" />
              </a>
              <a href="https://www.instagram.com/anantvedha07/" target="_blank" rel="noopener noreferrer" className="social-icon bg-pink-500 p-2 rounded-full">
                <Instagram className="text-white" />
              </a>
            </div>
          </nav>
        </div>
      </footer>
      <hr className="border-b border-gray-400 w-1/2 my-4" style={{margin:'0px auto '}} />
      <div className="border-t border-gray-600 p-4 text-center text-gray-600 w-full">
        <p className="text-sm">&copy; 2024 - All rights reserved by AnantVedha private limited</p>
      </div>
    </div>
  );
}

// Tailwind CSS custom styles for dark and light modes
const styles = `
.bg-dark-300 { background-color: black; }
.text-dark-content { color: white; }
.bg-base-300 { background-color: white; }
.text-base-content { color: black; }
`;

// Inject styles into the document
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
