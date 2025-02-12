import React from 'react';
import './SectionBlock.css';

function SectionBlock({ bgColor, children }) {
  return (
    <div className="section-block" style={{ backgroundColor: bgColor }}>
      {children}
    </div>
  );
}

export default SectionBlock;