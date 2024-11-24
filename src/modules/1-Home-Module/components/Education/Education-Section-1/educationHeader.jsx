import React from "react";
import "./educationHeader.css";
import educationGroup2 from "../../../assets/educationGroup2.png";

function EducationHeaderModule() {
  return (
    <section className="education-container">
      <div className="education-container-inner">
        <div className="education-heading-container">
          <h2 className="education-heading-one">
            Empowering Health, Enriching Lives:
          </h2>
          <h3 className="education-heading-two">
            Navigate Your Journey with Online Education
          </h3>
        </div>
        <div className="education-image-container">
          <img
            className="education-img"
            src={educationGroup2}
            alt="Group of young people smiling together for Education section"
          />
        </div>
      </div>
      <div className="education-container-second-inner">
        <div className="education-content-container">
          <div className="paragraph-container">
            <p className="paragraph-text">
              Welcome to Online Education, a dedicated space on the iHealth and
              Wellness Foundation website tailored to patients, providers, and
              caregivers navigating the complexities of diseases such as
              Neurofibromatosis, Diabetes, Alzheimer's, and Cancer. Join our
              supportive community for shared experiences, expert insights, and
              transformative knowledge to take steps towards a healthier future
              for those affected by these conditions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EducationHeaderModule;
