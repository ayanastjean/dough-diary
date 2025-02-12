import React from 'react';
import './RegisterPage.css';
import SectionBlock from '../components/SectionBlock';
import RegisterForm from '../features/RegisterForm';
import Testimonials from '../features/Testimonials';
import Image1 from '../assets/calendar.png';
import Image2 from '../assets/testimonial.png';

const RegisterPage = () => {
  return (
    <div className="register-page">
      {/* Register Welcome */}
      <SectionBlock bgColor="white">
        <div className="split-container">
          <div className="split-image">
            <img src={Image1} alt="Description 1" />
          </div>
          <div className="split-text">
            <h2>Ready to whisk up some magic?</h2>
            <p>
             Subscribe to The Dough Diary for weekly tips, recipes, and inspiration. Claim your free baking starter kit and start creating sweet and savory delights today!
            </p>
          </div>
        </div>
      </SectionBlock>

      {/* Register Form */}
      <SectionBlock bgColor="#f4eae8">
        <RegisterForm />
      </SectionBlock>

      {/* Testimonials */}
      <SectionBlock bgColor="white">
        <Testimonials />
      </SectionBlock>
    </div>
  );
};

export default RegisterPage;
