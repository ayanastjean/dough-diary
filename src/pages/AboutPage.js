import React from 'react';
import './AboutPage.css';
import SectionBlock from '../components/SectionBlock';

import offerImage from '../assets/Logo1.png';
import mixingBowlImage from '../assets/The Mixing Bowl.png';

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Our Story */}
      <SectionBlock bgColor="#594A47">
        <div className="about-section">
          <h1 className="about-header">Our Story</h1>
          <p className="about-text">
            The Dough Diary was created in 2024 in sunny Orlando, born out of a lifelong passion for baking and the joy of sharing knowledge.
            It’s a space designed to provide tips, tricks, and lessons learned along the baking journey.
            Whether kneading dough for the first time or perfecting a sourdough loaf, bakers of all levels can come together, share experiences, and grow their love for baking.
          </p>
        </div>
      </SectionBlock>

      {/* What We Offer */}
      <SectionBlock bgColor="white">
        <div className="split-container">
          <div className="split-image">
            <img src={offerImage} alt="Baking Fun" />
          </div>
          <div className="split-text">
            <h2 className="section-title">What We Offer</h2>
            <p className="section-text">
              From beginner tutorials to advanced baking techniques, we aim to make baking accessible, fun, and rewarding for everyone.
              Our community shares recipes, tips, and ideas to inspire your next baking adventure. 
              
            </p>
          </div>
        </div>
      </SectionBlock>

      {/* Coming Soon */}
      <SectionBlock bgColor="#F4EAE8">
        <div className="split-container reverse">
          <div className="split-text">
            <h2 className="section-title">Coming Soon</h2>
            <p className="section-text">
              We are excited to introduce The Mixing Bowl. It will be a space where bakers can share stories, swap tips, and connect over a love for baking.
              Whether you need advice on tricky dough or want to celebrate your latest masterpiece, this will be your place to learn, grow, and get inspired.
              Stay tuned for updates. It is going to be incredible!
            </p>
          </div>
          <div className="split-image">
            <img src={mixingBowlImage} alt="The Mixing Bowl Community" />
          </div>
        </div>
      </SectionBlock>
    </div>
  );
};

export default AboutPage;
