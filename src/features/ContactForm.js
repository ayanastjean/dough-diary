import React from 'react';
import './ContactForm.css';
import Button from '../components/Button';

const ContactForm = () => {
  return (
    <form className="contact-form">
      <div className="form-row">
        <div className="form-group">
          <input
            type="text"
            placeholder="name"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="email"
            className="form-input"
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <textarea
            placeholder="message"
            className="form-input form-textarea"
          />
        </div>
      </div>
      <div className="form-row">
        <Button text="Submit Entry" styleClass="register-button" />
      </div>
    </form>
  );
};

export default ContactForm;
