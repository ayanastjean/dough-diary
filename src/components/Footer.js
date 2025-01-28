import React from 'react';
import './Footer.css';
import logo from '../assets/footer-logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/register">Register</a>
      </div>
      <div className="footer-text">designed by the kali.co</div>
      <div className="footer-logo">
        <img src={logo} alt="Footer Logo" />
      </div>
    </footer>
  );
};

export default Footer;
