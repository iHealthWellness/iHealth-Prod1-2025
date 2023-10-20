import React from 'react';
import "./index.css";

const LearnMoreCard = ({ isVisible }) => {
  return (
    <div className={`lmc-container ${isVisible ? "lmc-visible" : ""}`}>
      <div className="lmc-content-block">
        <h2 className="lmc-title">
          <a href="#">Learn More</a>
        </h2>
      </div>
    </div>
  );
};

export default LearnMoreCard;
