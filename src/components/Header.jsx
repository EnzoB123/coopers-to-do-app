
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/Logo.png';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Coopers Logo" className="logo" />
      <Link to="/login" className="login-button">Entrar</Link>
    </header>
  );
};

export default Header;
