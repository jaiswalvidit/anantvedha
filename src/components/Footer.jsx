import React from 'react';
import { Link } from 'react-router-dom';
import { WhatsApp, Twitter, Instagram } from '@mui/icons-material';

export default function Footer() {
  return (
    <div className='bg-base-300'>
      <footer className="footer p-10 bg-base-300 text-base-content">
        <nav>
          <h6 className="footer-title">Services</h6>
          <Link to="#" className="link link-hover">Branding</Link>
          <Link to="#" className="link link-hover">Design</Link>
          <Link to="#" className="link link-hover">Marketing</Link>
          <Link to="#" className="link link-hover">Advertisement</Link>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <Link to="#" className="link link-hover">About us</Link>
          <Link to="#" className="link link-hover">Contact</Link>
          <Link to="#" className="link link-hover">Jobs</Link>
          <Link to="#" className="link link-hover">Press kit</Link>
        </nav>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <WhatsApp />
            <Twitter />
            <Instagram />
          </div>
        </nav>
      </footer>
      <hr className="border-b border-gray-400" style={{ width: '50vw', margin: '0 auto' }} />

      <div className="border-t border-gray-600 p-4 text-center text-gray-600">
        <p className="text-sm">&copy; 2024 - All rights reserved by ACME Industries Ltd</p>
      </div>
    </div>
  );
}
