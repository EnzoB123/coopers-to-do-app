import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleContact = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/contact', { email, message });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleContact}>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <label>Message:</label>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} required />
      </div>
      <button type="submit">Send</button>
    </form>
  );
};

export default Contact;
