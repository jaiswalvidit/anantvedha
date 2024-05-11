import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material';

export default function Footer() {
  return (
    <div className="bg-dark py-4">
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col md={3} className="text-center text-md-start mb-3 mb-md-0">
            <h5 className="mb-4 text-white">Information</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-white text-decoration-none">Home</Link>
              </li>
              <li>
                <Link to="/courses" className="text-white text-decoration-none">Courses</Link>
              </li>
              <li>
                <Link to="/about" className="text-white text-decoration-none">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-white text-decoration-none">Contact Us</Link>
              </li>
            </ul>
          </Col>
          
          <Col md={3} className="text-center text-md-start mb-3 mb-md-0">
            <h5 className="mb-4 text-white">Clueless</h5>
            <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
          </Col>
          
          <Col md={3} className="text-center text-md-start">
            <h5 className="mb-4 text-white">Clueless</h5>
            <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
          </Col>
          
          <Col md={3} className="text-center text-md-start mb-3 mb-md-0">
            <h5 className="mb-4 text-white">Connect with Us</h5>
            <ul className="list-unstyled d-flex justify-content-center justify-content-md-start">
              <li className="me-3">
                <a href="#" className="text-white text-decoration-none">
                  <Facebook fontSize="large" />
                </a>
              </li>
              <li className="me-3">
                <a href="#" className="text-white text-decoration-none">
                  <Twitter fontSize="large" />
                </a>
              </li>
              <li className="me-3">
                <a href="#" className="text-white text-decoration-none">
                  <LinkedIn fontSize="large" />
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  <Instagram fontSize="large" />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        </Container>
        {/* Copyright and Privacy */}
        <Row className="justify-content-center">
          <Col md={12} className="text-center">
            <p className="text-white mb-0">&copy; 2024 Your Company. All rights reserved. | <Link to="/privacy" className="text-white text-decoration-none">Privacy Policy</Link></p>
          </Col>
        </Row>
      
    </div>
  );
}
