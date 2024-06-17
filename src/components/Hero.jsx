import React from 'react';
// import heroImage from '../assets/images/BG.png';
import heroPhoto from '../assets/images/hero-photo-hall.png'; // Adjust the path as needed
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <img src={heroPhoto} alt="room" className="hero-photo-hall" />
      <div className="hero-content">
        <div className="hero-text">
          <h1>Organize</h1>
          <h2>your daily jobs</h2>
          <h3>The only way to get things done</h3>
          <button className="hero-button">Go to To-do list</button>
        </div>
        
          
        
        
      </div>
    </section>
  );
};

export default Hero;
