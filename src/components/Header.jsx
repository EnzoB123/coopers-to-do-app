import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/Logo.png'; // Adjust the path as needed
import './Header.css';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';

const Header = ({ setUser }) => {
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isRegisterOpen, setRegisterOpen] = useState(false);

  const openLoginModal = () => {
    setLoginOpen(true);
  };

  const closeLoginModal = () => {
    setLoginOpen(false);
  };

  const openRegisterModal = () => {
    setLoginOpen(false);
    setRegisterOpen(true);
  };

  const closeRegisterModal = () => {
    setRegisterOpen(false);
  };

  return (
    <header className="header">
      <img src={logo} alt="Coopers Logo" className="logo" />
      <nav>
        <ul>
          <li><button onClick={openLoginModal} className="login-button">Entrar</button></li>
        </ul>
      </nav>
      <LoginModal isOpen={isLoginOpen} onClose={closeLoginModal} openRegister={openRegisterModal} setUser={setUser} />
      <RegisterModal isOpen={isRegisterOpen} onClose={closeRegisterModal} />
    </header>
  );
};

export default Header;
