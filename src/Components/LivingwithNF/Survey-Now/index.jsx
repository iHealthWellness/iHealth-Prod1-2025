import "./index.css";
import survey from "src/Assets/Images/surveyclinicaltrials.jpg";
import React from "react";

function index() {
  return (
    <div id="take-survey" className="survey-container">
      <div className="survey-content">
        <h1 className="SN-D-H2-36 ">Survey Now: Clinical Trials</h1>
        <p className="SN-D-P-20">
          Join us in shaping the future of medicine—take the survey and find
          your match in the world of clinical trials!
        </p>
        {/* navigate to "/nf-registry" */}
        <button
          className="nf-btn SN-D-T-M-B-16"
          onClick={() => console.log("/nf-registry")}
        >
          Take the survey!
        </button>
      </div>

      <img className="survey-img" src={survey} />
    </div>
  );
}

export default index;
