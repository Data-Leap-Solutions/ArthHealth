import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h4>About Us</h4>
          <p>Arth Physical Therapy provides comprehensive services to aid in your recovery. Our focus is your wellness and improvement.</p>
        </div>

        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/services/physical-therapy">Physical Therapy</a></li>
            <li><a href="/services/sports-rehabilitation">Sports Rehabilitation</a></li>
            <li><a href="/services/manual-therapy">Manual Therapy</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Contact</h4>
          <p>123 Main Street, Anytown, USA</p>
          <p>Email: info@arthphysical.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>

        <div className="footer-column">
          <h4>Follow Us</h4>
          <div className="footer-social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Arth Physical Therapy. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
