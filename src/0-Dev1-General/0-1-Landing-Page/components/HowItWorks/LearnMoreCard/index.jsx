import React from "react";
import "./index.css";
import step5Image from "src/Assets/Images/Learn-more.jpg";

const underConstruction = () => {
  document.querySelector("#UnderConst-wrapper").style.display = "flex";
};

const LearnMoreCard = ({ isVisible }) => {
  return (
    <div
      className={`lmc-container make-invisible ${
        isVisible ? "lmc-visible" : ""
      }`}
    >
      <a onClick={underConstruction} className="lmc-button">
        <img src={step5Image} alt="an image" />
      </a>
    </div>
  );
};

export default LearnMoreCard;
