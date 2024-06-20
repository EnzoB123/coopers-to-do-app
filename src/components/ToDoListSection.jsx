import React, { useState, useEffect } from 'react';
import './ToDoListSection.css';
import axios from 'axios';
import group3 from '../assets/images/Group 3.png';
import group6 from '../assets/images/Group 6.png'; 

const ToDoListSection = ({ user, setUser }) => {
  const [todoTasks, setTodoTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    if (user) {
      setTodoTasks(user.todos);
    }
  }, [user]);

  const addTask = () => {
    if (newTask.trim() !== '') {
      const newTaskObj = { id: Date.now(), text: newTask, done: false };
      const updatedTodos = [...todoTasks, newTaskObj];
      setTodoTasks(updatedTodos);
      updateTodosInBackend(updatedTodos);
      setNewTask('');
    }
  };

  const deleteTask = (taskId) => {
    const updatedTodos = todoTasks.filter(task => task.id !== taskId);
    setTodoTasks(updatedTodos);
    updateTodosInBackend(updatedTodos);
  };

  const moveTaskToDone = (taskId) => {
    const updatedTodos = todoTasks.map(task => 
      task.id === taskId ? { ...task, done: !task.done } : task
    );
    setTodoTasks(updatedTodos);
    updateTodosInBackend(updatedTodos);
  };

  const updateTodosInBackend = async (updatedTodos) => {
    try {
      await axios.post('http://localhost:5000/api/todos', { todos: updatedTodos }, {
        headers: { 'auth-token': localStorage.getItem('token') }
      });
      setUser({ ...user, todos: updatedTodos });
    } catch (error) {
      console.error(error);
    }
  };

  const eraseAll = () => {
    setTodoTasks([]);
    updateTodosInBackend([]);
  };

  return (
    <section className="todo-list-section">
      <img src={group3} alt="Group 3" className="group-3" />
      <img src={group6} alt="Group 6" className="group-6" />
      <div className="todo-list-container">
        <div className="todo-card todo">
          <h3 className="todo-card-title">To-do</h3>
          <p className="todo-card-subtitle">Take a breath. Start doing.</p>
          <ul className="todo-items">
            {todoTasks.filter(task => !task.done).map(task => (
              <li key={task.id}>
                <span className="check" onClick={() => moveTaskToDone(task.id)}></span> {task.text} <span className="delete" onClick={() => deleteTask(task.id)}>delete</span>
              </li>
            ))}
          </ul>
          <div className="add-task">
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="New task"
            />
            <button onClick={addTask}>Add Task</button>
          </div>
          <button className="erase-button" onClick={eraseAll}>erase all</button>
        </div>
        <div className="todo-card done">
          <h3 className="todo-card-title">Done</h3>
          {todoTasks.filter(task => task.done).length > 1 && (
            <p className="todo-card-subtitle">Congratulations! <br /> <b>You have done {todoTasks.filter(task => task.done).length} tasks</b></p>
          )}
          {todoTasks.filter(task => task.done).length <= 1 && (
            <p className="todo-card-subtitle"><b>You have done {todoTasks.filter(task => task.done).length} task</b></p>
          )}
          <ul className="todo-items">
            {todoTasks.filter(task => task.done).map(task => (
              <li key={task.id}>
                <span className="check checked" onClick={() => moveTaskToDone(task.id)}></span> {task.text} <span className="delete" onClick={() => deleteTask(task.id)}>delete</span>
              </li>
            ))}
          </ul>
          <button className="erase-button" onClick={eraseAll}>erase all</button>
        </div>
      </div>
    </section>
  );
};

export default ToDoListSection;
