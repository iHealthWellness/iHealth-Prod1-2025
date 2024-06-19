import "./index.css";
import survey from "src/Assets/Images/surveyclinicaltrials.jpg";
import React from "react";
import { useNavigate } from "react-router-dom";

function index({ underConstruction }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/nf-survey");
    window.scrollTo(0, 0);
  };

  return (
    <div id="take-survey" className="survey-container">
      <div className="survey-content">
        <h1 className="D-H2-30">
          Survey Now: <span className="light-blue-font">Clinical Trials</span>
        </h1>
        <p className="D-P-20">
          Join us in shaping the future of medicine—take the survey and find
          your match in the world of clinical trials!
        </p>
        {/* navigate to "/nf-registry" */}
        <button className="nf-btn D-P-20" onClick={handleClick}>
          Take the survey!
        </button>
      </div>

      <img onClick={handleClick} className="survey-img" src={survey} />
    </div>
  );
}

export default index;
