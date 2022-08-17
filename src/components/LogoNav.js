import React from 'react';
import '../styles/Logo.css';
import '../App.css';

const Logo = () => {
  return (
    <div className="logo-nav container my-3">
      <svg viewBox="0 0 100 100">
        <g>
          <g className="ring" transform="rotate(-60, 50, 50)">
            <ellipse className="color" cx="50" cy="50" rx="20" ry="50" />
            <ellipse cx="50" cy="50" rx="20" ry="50" />
            <ellipse cx="50" cy="50" rx="20" ry="50" />
          </g>
          <g className="ring" transform="rotate(60, 50, 50)">
            <ellipse cx="50" cy="50" rx="20" ry="50" />
            <ellipse cx="50" cy="50" rx="20" ry="50" />
            <ellipse cx="50" cy="50" rx="20" ry="50" />
          </g>
          <g className="ring" transform="rotate(180, 50, 50)">
            <ellipse cx="50" cy="50" rx="20" ry="50" />
            <ellipse cx="50" cy="50" rx="20" ry="50" />
            <ellipse cx="50" cy="50" rx="20" ry="50" />
          </g>
        </g>
      </svg>
      <span className="text-nav text-light mx-2">JG DEV</span>
    </div>
  );
};

export default Logo;
