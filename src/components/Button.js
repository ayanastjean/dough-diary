import React from 'react';
import './Button.css';

const Button = ({ text, styleClass, onClick }) => {
  return (
    <button className={styleClass} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
