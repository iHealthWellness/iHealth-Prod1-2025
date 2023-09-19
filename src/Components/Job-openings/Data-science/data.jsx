import React from "react";
import Minusicon from "src/Assets/Icons/minus-icon.svg";
import T_icon from "src/Assets/Icons/T-icon.svg";

const data = () => {
  return (
    <section className="cybesecurity-container">
      <div className="container2">
        <div className="title-h1">
          <h1 className="title">DATA SCEINCE</h1>
          <span className="minus-icon">
            <img className="remove-icon" src={Minusicon} alt="" />
          </span>
        </div>
        <div className="the-job">
          <div className="job">
            <h2 className="subtitle">Web Scraping Focus Data Engineer</h2>

            <span className="remote">Remote</span>

            <span className="T-icon">
              <img src={T_icon} alt="" />
            </span>
          </div>

          <div className="description-container">
            <h1 className="description-title">Description</h1>

            <p className="description-text">
              We are an 'early stage' pre-money nonprofit/ tech startup
              preparing for a proof-of-concept launch / seed-raise looking to
              recruit VOLUNTEERS (unpaid) as WEB SCRAPING FOCUSED DATA
              ENGINEER. <br/>Future Salary would be promised for employees (after
              seed funding round).<br/>We’re searching for talented data scientists
              who are passionate about the acquisition of data with strong
              skills and knowledge of web scraping, web services, file
              transfers, and everything data.<br/>You’ll be helping to improve the
              healthcare experience for our users by making it simpler and more
              efficient for patients to book an appointment with and visit a
              doctor.
            </p>
          </div>

          <div className="responsibilities-container">
            <h1 className="responsibilities-title">Responsibilities</h1>

            <p className="responsibilities-text">
              • Facilitate compliance with federal and state privacy and
              security regulations, as well as general industry privacy and
              security standards related to protected health information and
              other restricted or sensitive information collected, used, and/or
              retained <br />
              • Help develop the process for investigating and acting on privacy
              and security complaints <br />
              • Assist in performing breach risk assessment, documentation, and
              mitigation <br />• Supports annual reports and
              self-certifications, such as cybersecurity, diversity, privacy,
              conflict of interest, and other compliance reporting and
              assessments
            </p>
          </div>

          <div className="qualifications-container">
            <h1 className="qualifications-title">Qualifications</h1>

            <p className="qualifications-text">
              • Previous experience working in a healthcare environment,
              preferably with direct experience in Compliance <br />
              • In-depth knowledge of industry standards and regulations, such
              as GDPR, CCPA, HIPAA, and PCI-DSS <br />
              • Experience in compiling, coordinating, and analyzing regulatory
              requirement data <br />
              • Ability to manage multiple tasks and deliverables in a
              fast-paced environment <br />
              • Strong verbal and written communication, interpersonal and
              organizational skills <br />
              • Excellent critical thinking and analytical skills, with a
              passion for solving problems and creating solutions
              <br />
              • Previous experience at a startup, HealthTech or consulting
              company is a plus <br />
              • Ability to commit to a minimum of 4+ hour work weeks <br />
              • Ability to attend weekly standup meeting (conference call with
              desktop/ laptop access for screen sharing)
              <br />• Fluent in English
            </p>
          </div>

          <div className="note-container">

            <div className="join-us">
              <p className="join-us-text">Join us, you win, we both win!!</p>
            </div>

            <div className="apply">
              <p className="apply-text">
                How to Apply: To apply for any open position, please contact HR
                at onehealthconnectapp@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default data;
