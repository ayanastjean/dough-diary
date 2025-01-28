import React from 'react';
import './RegisterForm.css';
import Button from '../components/Button';

const RegisterForm = () => {
  return (
    <form className="register-form">
      <div className="form-row">
        <div className="form-group">
          <input
            type="text"
            placeholder="first name"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="last name"
            className="form-input"
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <input
            type="email"
            placeholder="email Address"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <input
            type="address"
            placeholder="shipping address"
            className="form-input"
          />
        </div>
      </div>
      <Button text="Subscribe Now" styleClass="register-button" />
    </form>
  );
};

export default RegisterForm;
