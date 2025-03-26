import React from 'react';
import './Button.css';

const Button = ({ text, styleClass, onClick, type = 'button' }) => {
  return (
    <button className={styleClass} onClick={onClick} type={type}>
      {text}
    </button>
  );
};

export default Button;
