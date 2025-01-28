import React from 'react';
import './ContactPage.css';
import SectionBlock from '../components/SectionBlock';

import ContactForm from '../features/ContactForm';

const RegisterPage = () => {
  return (
    <div className="register-page">
      {/* Top Section Block */}
      <SectionBlock bgColor="white">
        <div className="split-container">
          <div className="split-text">
            <h2>Dear Dough Diary , I have something to share . . .</h2>
            <p>
            Have a question about baking? Need help troubleshooting your dough? Or just want to update your subscription frequency? Write to us here, and we’ll get back to you soon!
            </p>
          </div>
        </div>
      </SectionBlock>

      {/* Register Form */}
      <SectionBlock bgColor="#f4eae8">
        <ContactForm />
      </SectionBlock>
    </div>
  );
};

export default RegisterPage;
