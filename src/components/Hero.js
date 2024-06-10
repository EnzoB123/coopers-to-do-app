// src/components/Hero.js
import React from 'react';
import heroImage from '../assets/images/BG.png'; // Adjust the path as needed
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Organize <br /> your daily jobs</h1>
          <p>The only way to get things done</p>
          <button className="hero-button">Go to To-do list</button>
        </div>
        <div className="hero-image-container">
          <img src={heroImage} alt="Hero Background" className="hero-image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
