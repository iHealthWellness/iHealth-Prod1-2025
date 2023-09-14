import React from "react";
import "./openings.css"
import Openingsimage from "src/Assets/Images/job-openings.png";


const openings = () => {
  return (
    <section className="openings-container" id="job-openings">
      <div className="openings-hero">
        <div className="openings-image container">
          <img className="openings-img" src={Openingsimage} alt="" />
        </div>

        <div className="openings-side">
          <h2 className="openings-side-h2">
            Empower Change Through Volunteer Engagement!
          </h2>
          <h1 className="openings-side-h1">
          Welcome to our Career Opportunities Page!
          </h1>
        </div>
      </div>

    <div className="openings-titles">
      <div className="openings-title">
        <h2 className="openings-title-h2">
        Volunteer From Anywhere
        </h2>

        <h1 className="openings-title-h1">
        Career Opportunities  
        </h1>

        <h3 className="openings-title-h3">
        To apply for any open position, please contact HR at <span className="openings-span">onehealthconnectapp@gmail.com</span>
        </h3>
      </div>
      </div>
    </section>
  );
};

export default openings;
