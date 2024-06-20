import React, { useState, useEffect } from 'react';
import Header from './Header';
import Hero from './Hero';
import ToDoTitle from './ToDoTitle';
import ToDoListSection from './ToDoListSection';
import GoodThings from './GoodThings';
import Form from './Form';
import Footer from './Footer';
import './HomePage.css';
import axios from 'axios';

const HomePage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchTodos = async () => {
      if (user) {
        try {
          const res = await axios.get('http://localhost:5000/api/todos', {
            headers: { 'auth-token': localStorage.getItem('token') }
          });
          setUser({ ...user, todos: res.data });
        } catch (error) {
          console.error(error);
        }
      }
    };
    fetchTodos();
  }, [user]);

  return (
    <div className="home-page">
      <div className="background-container">
        <Header setUser={setUser} />
        <Hero />
      </div>
      <ToDoTitle />
      <ToDoListSection user={user} setUser={setUser} />
      <GoodThings />
      <Form />
      <Footer />
    </div>
  );
};

export default HomePage;
