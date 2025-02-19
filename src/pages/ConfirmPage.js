import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ConfirmPage.css';

const ConfirmPage = () => {
  const navigate = useNavigate();

  return (
    <div className="confirm-page">
      <div className="confirm-box">
        <h2>Entry Submitted!</h2>
        <p>Please check your email for confirmation.</p>
        <button className="back-button" onClick={() => navigate('/')}>
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default ConfirmPage;
