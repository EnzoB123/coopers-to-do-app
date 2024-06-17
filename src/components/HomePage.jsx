// src/components/HomePage.jsx
import React from 'react';
import Header from './Header.jsx';
import Hero from './Hero.jsx';
import ToDoTitle from './ToDoTitle.jsx';
import ToDoListSection  from './ToDoListSection.jsx';
import GoodThings from './GoodThings.jsx';
import Form from './Form.jsx';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="background-container">
        <Header />
        <Hero />
        <ToDoTitle />
      </div>
      <ToDoListSection /> 
      <GoodThings />
      <Form />
    </div>
  );
};

export default HomePage;
