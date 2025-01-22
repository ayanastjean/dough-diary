import React from 'react';
import './Navbar.css'; 
import logo from './logo.png'; 

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
  <li><a href="/contact">Dear Diary</a></li>
  <li><a href="/register" className="register-now">Register Now</a></li>
</ul>

    </nav>
  );
};

export default Navbar;
