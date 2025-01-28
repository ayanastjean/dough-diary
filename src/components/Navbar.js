import React from 'react';
import './Navbar.css';
import logo from '../assets/navbar-logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li><a href="/home">Homepage</a></li>
        <li><a href="/about">About Us</a></li>
      </ul>
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="navbar-links">
        <li><a href="/contact">Dear Diary...</a></li>
        <li><a className="register-now" href="/register">Register Now</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
