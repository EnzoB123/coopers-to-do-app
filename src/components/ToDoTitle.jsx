// src/components/ToDoTitle.jsx
import React from 'react';
import './ToDoTitle.css';

const ToDoTitle = () => {
  return (
    <section className="todo-title-section">
      <h2 className="todo-title">To-do List</h2>
      <p className="todo-subtitle">Drag and drop to set your main priorities, check when done and create what’s new.</p>
    </section>
  );
};

export default ToDoTitle;
