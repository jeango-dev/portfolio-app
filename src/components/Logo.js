import React from 'react';
import '../styles/Logo.css';
import '../App.css';

const Logo = () => {
  return (
    <div className="logo logo-animated container my-5">
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
      <h1 className="mt-3">JG</h1>
    </div>
  );
};

export default Logo;
