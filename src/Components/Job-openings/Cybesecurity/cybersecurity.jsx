import React from "react";
import Minusicon from "src/Assets/Icons/minus-icon.svg";
import T_icon from "src/Assets/Icons/T-icon.svg";

const cybersecurity = () => {
  return (
    <section className="cybesecurity-container">
      <div className="container2">
        <div className="title-h1">
          <h1 className="title">CYBERSECURITY AND DATA PRIVACY</h1>
          <span className="minus-icon">
            <img className="remove-icon" src={Minusicon} alt="" />
          </span>
        </div>
        <div className="the-job">
          <div className="job">
            <h2 className="subtitle">Data Privacy and Security Specialist</h2>

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
              recruit VOLUNTEERS (unpaid) as COPYWRITERS. Future Salary would be
              promised for employees (after seed funding round).
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
            <h1 className="qualifications-title">Required Experience</h1>

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
            <span className="note-title">NOTE</span>
            <p className="note-text">
              Please note that candidates actively seeking CPT/Internships are
              ineligible for this particular volunteer position. Through your
              pro-bono work, you will not only continue to demonstrate your
              current skills while gaining some new ones, practice teamwork,
              make new friends and develop professional connections in a
              professional setting, but you will also have the opportunity to
              demonstrate what companies value in ways other than paid
              employment: ability to get things done and ability to work as a
              team.
            </p>

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

export default cybersecurity;
