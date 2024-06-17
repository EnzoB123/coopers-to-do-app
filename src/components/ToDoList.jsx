import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    const fetchTodos = async () => {
      const token = localStorage.getItem('token');
      const res = await axios.get('http://localhost:5000/todos', {
        headers: { 'x-auth-token': token },
      });
      setTodos(res.data);
    };

    fetchTodos();
  }, []);

  const addTodo = async () => {
    const token = localStorage.getItem('token');
    const res = await axios.post('http://localhost:5000/todos', { text: newTodo }, {
      headers: { 'x-auth-token': token },
    });
    setTodos([...todos, res.data]);
    setNewTodo('');
  };

  const deleteTodo = async (id) => {
    const token = localStorage.getItem('token');
    await axios.delete(`http://localhost:5000/todos/${id}`, {
      headers: { 'x-auth-token': token },
    });
    setTodos(todos.filter(todo => todo._id !== id));
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map(todo => (
          <li key={todo._id}>
            {todo.text}
            <button onClick={() => deleteTodo(todo._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
