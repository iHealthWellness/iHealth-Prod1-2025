import React from 'react';
import "./index.css";
import step5Image from "src/Assets/Images/Learn-more.jpg";


const LearnMoreCard = ({ isVisible }) => {
  return (
    <div className={`lmc-container ${isVisible ? "lmc-visible" : ""}`} style={{backgroundImage: `url(${step5Image})`}}>

    </div>
  );
};


export default LearnMoreCard;
