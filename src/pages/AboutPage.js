import React from 'react';
import './AboutPage.css';
import SectionBlock from '../components/SectionBlock';

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Our Story */}
      <SectionBlock bgColor="#594A47">
        <div>
          <h1>About Us</h1>
          <p>
            The Dough Diary was created in 2024 in sunny Orlando, born out of a lifelong passion for baking and the joy of sharing knowledge. 
            It’s a space designed to provide tips, tricks, and lessons learned along the baking journey. 
            Whether kneading dough for the first time or perfecting a sourdough loaf, bakers of all levels can come together, share experiences, and grow their love for baking.
          </p>
        </div>
      </SectionBlock>

      {/* What We Offer */}
      <SectionBlock bgColor="white">
        <div>
          <h2>What We Offer</h2>
          <p>
            From beginner tutorials to advanced baking techniques, we aim to make baking accessible, fun, and rewarding for everyone. 
            Our community shares recipes, tips, and ideas to inspire your next baking adventure.
          </p>
        </div>
      </SectionBlock>
    </div>
  );
};

export default AboutPage;
