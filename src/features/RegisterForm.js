import React, { useState } from 'react';
import { LoadScript, Autocomplete } from '@react-google-maps/api';
import './RegisterForm.css';
import Button from '../components/Button';

const GOOGLE_MAPS_API_KEY = "AIzaSyAEEOrHUcY02Vd3qdIYVsERvW3YrnQSUwY";

const RegisterForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [autocomplete, setAutocomplete] = useState(null);

  const handlePlaceSelect = () => {
    if (autocomplete) {
      const place = autocomplete.getPlace();
      console.log("Selected Place:", place);
      if (place.formatted_address) {
        setAddress(place.formatted_address);
      }
    }
  };

  return (
    <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY} libraries={['places']}>
      <div className="register-form-container">
        {!submitted ? (
          <form className="register-form">
            <h2 className="form-header">Register Now</h2>
            <div className="form-row">
              <input
                type="text"
                placeholder="First Name"
                className="form-input"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                className="form-input"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <div className="form-row">
              <input
                type="email"
                placeholder="Email"
                className="form-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            
              <Autocomplete
                onLoad={setAutocomplete}
                onPlaceChanged={handlePlaceSelect}
              >
                <input
                  type="text"
                  placeholder="Shipping Address"
                  className="form-input"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </Autocomplete>
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
    </LoadScript>
  );
};

export default RegisterForm;

