import React from 'react';

import './error-indicator.css';
import icon from './death-star.png';

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <img src={icon} alt="death star error icon" />
      <span className="boom">Boom!</span>
      <span>Something went wrong</span>
    </div>
  );
};

export default ErrorIndicator;
