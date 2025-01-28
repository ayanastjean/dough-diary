import React from 'react';
import './RegisterPage.css';
import SectionBlock from '../components/SectionBlock';
import RegisterForm from '../features/RegisterForm';
import Image1 from '../assets/calendar.png';
import Image2 from '../assets/testimonial.png';

const RegisterPage = () => {
  return (
    <div className="register-page">
      {/* Top Section Block */}
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

      {/* Bottom Section Block */}
      <SectionBlock bgColor="white">
        <div className="split-container reverse">
          <div className="split-text">
            <h2>Testimonials</h2>
            <p>
            “ Before The Dough Diary, I was too nervous to try baking from scratch, but now it’s my favorite hobby. The tips and recipes have given me so much confidence in the kitchen! “
            </p>
          </div>
          <div className="split-image">
            <img src={Image2} alt="figure" />
          </div>
        </div>
      </SectionBlock>
    </div>
  );
};

export default RegisterPage;
