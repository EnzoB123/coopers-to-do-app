// src/components/ToDoListSection.jsx
import React, { useState } from 'react';
import './ToDoListSection.css';

const ToDoListSection = () => {
  const [todoTasks, setTodoTasks] = useState([
    { id: 1, text: 'Develop the To-do list page', done: false },
    { id: 2, text: 'Create the drag-and-drop function', done: false },
    { id: 3, text: 'Add new tasks', done: false },
    { id: 4, text: 'Delete items', done: false },
    { id: 5, text: 'Erase all', done: false },
  ]);

  const [doneTasks, setDoneTasks] = useState([
    { id: 6, text: 'Get FTP credentials', done: true },
    { id: 7, text: 'Home Page Design', done: true },
    { id: 8, text: 'E-mail John about the deadline', done: true },
    { id: 9, text: 'Create a Google Drive folder', done: true },
    { id: 10, text: 'Send a gift to the client', done: true },
  ]);

  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      const newTaskObj = { id: Date.now(), text: newTask, done: false };
      setTodoTasks([...todoTasks, newTaskObj]);
      setNewTask('');
    }
  };

  const deleteTask = (taskId, isDone) => {
    if (isDone) {
      setDoneTasks(doneTasks.filter(task => task.id !== taskId));
    } else {
      setTodoTasks(todoTasks.filter(task => task.id !== taskId));
    }
  };

  const moveTaskToDone = (taskId) => {
    const task = todoTasks.find(task => task.id === taskId);
    if (task) {
      setTodoTasks(todoTasks.filter(task => task.id !== taskId));
      setDoneTasks([...doneTasks, { ...task, done: true }]);
    }
  };

  const eraseAll = (isDone) => {
    if (isDone) {
      setDoneTasks([]);
    } else {
      setTodoTasks([]);
    }
  };

  return (
    <section className="todo-list-section">
      <div className="todo-list-container">
        <div className="todo-card todo">
          <h3 className="todo-card-title">To-do</h3>
          <p className="todo-card-subtitle">Take a breath. Start doing.</p>
          <ul className="todo-items">
            {todoTasks.map(task => (
              <li key={task.id}>
                <span className="check" onClick={() => moveTaskToDone(task.id)}></span> {task.text} <span className="delete" onClick={() => deleteTask(task.id, false)}>delete</span>
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
          <button className="erase-button" onClick={() => eraseAll(false)}>erase all</button>
        </div>
        <div className="todo-card done">
          <h3 className="todo-card-title">Done</h3>
          {doneTasks.length >= 1 && (
            <p className="todo-card-subtitle">Congratulations! <br /> <b>You have done {doneTasks.length} tasks</b></p>
          )}
          {doneTasks.length < 1 && (
            <p className="todo-card-subtitle"><b>You have done {doneTasks.length} task</b></p>
          )}
          <ul className="todo-items">
            {doneTasks.map(task => (
              <li key={task.id}>
                <span className="check checked"></span> {task.text} <span className="delete" onClick={() => deleteTask(task.id, true)}>delete</span>
              </li>
            ))}
          </ul>
          <button className="erase-button" onClick={() => eraseAll(true)}>erase all</button>
        </div>
      </div>
    </section>
  );
};

export default ToDoListSection;
