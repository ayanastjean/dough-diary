import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import bakingImage from '../assets/Logo1.png';
import starterImage from '../assets/StarterKit.png';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page">

      {/* CTA Section */}
      <div className="section-block white-section reverse">
        <div className="section-image">
          <img src={bakingImage} alt="Baking Made Fun" />
        </div>
        <div className="section-text">
          <h2 className="section-header">Dear Diary, Today I Baked. . .</h2>
          <p className="section-paragraph">
            Well, the options are endless! Every baker starts somewhere.
            The Dough Diary is here to help you rise! Claim your free
            baking starter kit and discover beginner-friendly recipes,
            tips, and inspiration for making amazing bread from scratch.
          </p>
          <button className="register-button" onClick={() => navigate('/register')}>
            Register Now
          </button>
        </div>
      </div>

      {/* Welcome Kit Section */}
      <div className="section-block">
        <div className="section-image">
          <img src={starterImage} alt="Starter Kit" />
        </div>
        <div className="section-text">
          <h2 className="claim-header">Claim Your Baking Starter Kit</h2>
          <h2 className="section-header">Includes:</h2>
          <ul className="kit-list">
            <li>1 x Mixing Bowl</li>
            <li>1 x Bread Whisk</li>
            <li>1 x Set of Measuring Cups</li>
          </ul>
          <button className="register-button" onClick={() => navigate('/register')}>
            Claim Yours
          </button>
        </div>
      </div>

    </div>
  );
};

export default HomePage;

