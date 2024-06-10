// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/Logo.png'; // Adjust the path as needed
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Coopers Logo" className="logo" />
      <nav>
        <ul>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
          <li><Link to="/todos">To-Do List</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
