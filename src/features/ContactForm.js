import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ContactForm.css';
import Button from '../components/Button';

const ContactForm = () => {
  const navigate = useNavigate();

  return (
    <form className="contact-form">
      <div className="form-row">
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email"
            className="form-input"
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <textarea
            placeholder="Message"
            className="form-input form-textarea"
          />
        </div>
      </div>
      <div className="form-row">
        <Button 
          text="Submit Entry" 
          styleClass="register-button" 
          onClick={() => navigate('/confirm')} 
        />
      </div>
    </form>
  );
};

export default ContactForm;
