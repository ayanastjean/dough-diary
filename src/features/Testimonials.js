import React, { useState, useEffect } from 'react';
import './Testimonials.css';
import testimonial from '../assets/testimonial.png';

const testimonials = [
  {
    name: "Sarah M.",
    text: "Before The Dough Diary, I was too nervous to try baking from scratch, but now it’s my favorite hobby!",
    image: testimonial
  },
  {
    name: "James P.",
    text: "The recipes and tips have helped me gain so much confidence in the kitchen. Highly recommend!",
    image: testimonial
  },
  {
    name: "Emily R.",
    text: "Baking is now a part of my weekly routine. This community is so supportive and fun!",
    image: testimonial
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimonial-container">
      <h2 className="testimonial-header">Testimonials</h2>
      <div className="testimonial-card">
        <div className="testimonial-profile">
          <img src={testimonials[current].image} alt={testimonials[current].name} className="testimonial-image" />
          <h3 className="testimonial-name">{testimonials[current].name}</h3>
        </div>
        <p className="testimonial-text">{testimonials[current].text}</p>
      </div>
    </div>
  );
};

export default Testimonials;
