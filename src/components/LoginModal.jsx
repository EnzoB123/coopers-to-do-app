import React, { useState } from 'react';
import './LoginModal.css';
import axios from 'axios';

const LoginModal = ({ isOpen, onClose, openRegister, setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/login', { email, password });
      const { token, todos } = res.data;
      localStorage.setItem('token', token);
      setUser({ email, todos });
      onClose();
    } catch (error) {
      console.error(error);
      alert('Login failed');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>close</button>
        <h2>Sign in to access your list</h2>
        <form className="login-form" onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">Sign in</button>
        </form>
        <button onClick={openRegister} className="register-button">Register</button>
      </div>
    </div>
  );
};

export default LoginModal;
