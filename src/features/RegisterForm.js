import React, { useState } from 'react';
import './RegisterForm.css';
import Button from '../components/Button';

const RegisterForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="register-form-container">
      {!submitted ? (
        <form className="register-form" onSubmit={handleSubmit}>
          <h2 className="form-header">Register Now</h2>
          <div className="form-row">
            <input type="text" placeholder="First Name" className="form-input" required />
            <input type="text" placeholder="Last Name" className="form-input" required />
          </div>
          <div className="form-row">
            <input type="email" placeholder="Email" className="form-input" required />
            <input type="text" placeholder="Shipping Address" className="form-input" required />
          </div>
          <Button text="Submit Entry" styleClass="register-button" type="submit" />
        </form>
      ) : (
        <div className="confirmation-container">
          <h2 className="confirmation-header">You have subscribed.</h2>
          <p className="confirmation-text">Be on the lookout for our Welcome Email.</p>
        </div>
      )}
    </div>
  );
};

export default RegisterForm;
