// src/components/HomePage.js
import React from 'react';
import Header from './Header';
import Hero from './Hero';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      <Hero />
      {/* Add other sections/components here */}
    </div>
  );
};

export default HomePage;
