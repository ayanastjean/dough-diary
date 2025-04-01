import React, { useState } from 'react';
import './ContactForm.css';
import Button from '../components/Button';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const contactData = { name, email, message };

    try {
      const response = await fetch('http://localhost:5001/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contactData),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        console.error('Error submitting contact form');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="register-form-container">
    {!submitted ? (
      <form className="register-form" onSubmit={handleSubmit}>
        <h2 className="form-header">Dear Diary . . .</h2>
        <div className="form-row">
          <input
            type="text"
            placeholder="Name"
            className="form-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-row full-width">
          <textarea
            placeholder="Message"
            className="form-input form-textarea"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <Button text="Submit Entry" styleClass="register-button" type="submit" />
      </form>
    ) : (
      <div className="confirmation-container">
        <h2 className="confirmation-header">Diary entry received!</h2>
        <p className="confirmation-text">We’ll be in touch soon, baker!</p>
      </div>
    )}
  </div>  
  );
};

export default ContactForm;
