import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Navbar.css';
import logo from '../assets/navbar-logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li><Link to="/home">Homepage</Link></li>
        <li><Link to="/about">About Us</Link></li>
      </ul>
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/contact">Dear Diary...</Link></li>
        <li><Link className="register-now" to="/register">Register Now</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
