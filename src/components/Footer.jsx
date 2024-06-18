import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-help">Need help?</p>
        <a href="mailto:coopers@coopers.pro" className="footer-email">coopers@coopers.pro</a>
        <p className="footer-copyright">© 2021 Coopers. All rights reserved.</p>
      </div>
      <div className="footer-bar black-bar"></div>
      <div className="footer-bar green-bar"></div>
    </footer>
  );
};

export default Footer;
