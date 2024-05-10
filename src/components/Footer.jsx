import React from 'react';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
  return (
    <footer className="footer" style={{ backgroundColor: "#f4f4f4", padding: "20px 0" }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <h4 style={{ fontFamily: "Arial", fontSize: "18px", marginBottom: "10px" }}>Quick Links</h4>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li><Link to="/" style={{ color: "#333", textDecoration: "none", fontSize: "16px" }}>Home</Link></li>
              <li><Link to="/courses" style={{ color: "#333", textDecoration: "none", fontSize: "16px" }}>Courses</Link></li>
              <li><Link to="/about" style={{ color: "#333", textDecoration: "none", fontSize: "16px" }}>About Us</Link></li>
              <li><Link to="/contact" style={{ color: "#333", textDecoration: "none", fontSize: "16px" }}>Contact Us</Link></li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6">
            <h4 style={{ fontFamily: "Arial", fontSize: "18px", marginBottom: "10px" }}>Contact Information</h4>
            <p style={{ color: "#333", marginBottom: "5px", fontSize: "16px" }}>Anantvedha EdTech</p>
            <p style={{ color: "#333", marginBottom: "5px", fontSize: "16px" }}>123 Education Street, City</p>
            <p style={{ color: "#333", marginBottom: "5px", fontSize: "16px" }}>Email: info@anantvedha.com</p>
            <p style={{ color: "#333", marginBottom: "5px", fontSize: "16px" }}>Phone: +1 (123) 456-7890</p>
          </div>
          <div className="col-lg-4 col-md-12">
            <h4 style={{ fontFamily: "Arial", fontSize: "18px", marginBottom: "10px" }}>Follow Us</h4>
            <ul className="social-icons" style={{ listStyle: "none", padding: 0 }}>
              <li style={{ display: "inline-block", marginRight: "10px" }}><Link to="#" style={{ color: "#333", textDecoration: "none", fontSize: "24px" }}><FacebookIcon /></Link></li>
              <li style={{ display: "inline-block", marginRight: "10px" }}><Link to="#" style={{ color: "#333", textDecoration: "none", fontSize: "24px" }}><TwitterIcon /></Link></li>
              <li style={{ display: "inline-block", marginRight: "10px" }}><Link to="#" style={{ color: "#333", textDecoration: "none", fontSize: "24px" }}><LinkedInIcon /></Link></li>
              <li style={{ display: "inline-block", marginRight: "10px" }}><Link to="#" style={{ color: "#333", textDecoration: "none", fontSize: "24px" }}><InstagramIcon /></Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom" style={{ backgroundColor: "#333", padding: "10px 0" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <p style={{ color: "#fff", fontSize: "14px", margin: 0 }}>&copy; 2024 Anantvedha EdTech. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
