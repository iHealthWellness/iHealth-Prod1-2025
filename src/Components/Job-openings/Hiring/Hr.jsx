import React from "react";
import { BntTab } from "./ButtonTab";
import { ArrowTab } from "./ButtonTab";
import "./Hiring.css";
import plusbtn from "src/Assets/Icons/plus.png";
import minusbtn from "src/Assets/Icons/minus.png";
import topArrow from "src/Assets/Icons/Icon.png";
import downArrow from "src/Assets/Icons/Icon2.png";

import { useState } from "react";

const Hr = () => {
  const [accordion, setAccordion] = useState({
    privacy: false,
  });

  const toggleAccordion = (content) => (e) => {
    setAccordion((prev) => ({ ...prev, [content]: !prev[content] }));
  };

  return (
    <div className="layerTwo-tab">
      <div>
        <div className="flex-tab">
          <h3 className="Text-header">HUMAN RESOURCES</h3>
          <BntTab
            icon={accordion.privacy ? minusbtn : plusbtn}
            onClick={toggleAccordion("privacy")}
          />
        </div>
        {accordion.privacy && (
          <div className="grid">
            <h2 className="grid-text">Human Resource Specialist/ Generalist</h2>
            <h2 className="grid-text">Remote</h2>
            <ArrowTab
              icon={setAccordion.privacy ? topArrow : downArrow}
              onClick={toggleAccordion("privacy")}
            />
          </div>
        )}

        <hr />
        <div className="text-tab-flow">
          <h2 className="description-title">Description</h2>
          <p className="description-text">
            We are an 'early stage' pre-money nonprofit/ tech startup preparing
            for a proof-of-concept launch / seed-raise looking to recruit
            VOLUNTEERS (unpaid) as HUMAN RESOURCES SPECIALIST/ GENERALIST.
          </p>
          <p className="description-text">
            The ideal candidate is extremely driven, positive and a
            self-starter!
          </p>
          <p className="description-text">
            Future Salary would be promised for employees (after seed funding
            round).
          </p>
          <h3 className="responsibilities-title">Responsibilities</h3>
          <ul className="responsibilities-text">
            <li>
              You’ll be helping to improve the healthcare experience for our
              users by making it simpler and more efficient for patients to book
              an appointment with and visit a doctor.
            </li>
            <li>
              Support the company's mission, vision and values in daily
              activities and the creation of strategic goals
            </li>
            <li>
              Support the recruiting efforts of various department needs
              (sourcing, screening, interviewing, onboarding)
            </li>
            <li>
              Use your high attention to detail to ensure new hire documents are
              complete and available for audit when necessary
            </li>
            <li>
              Coordinate office activities and operations to secure efficiency
              and compliance to company policies
            </li>
            <li>
              Create and distribute guidelines and FAQ documents about company
              policies • Publish and remove job ads
            </li>
            <li>Schedule job interviews and contact candidates as needed</li>
            <li>
              Create and update records and databases with personnel, financial
              and other data
            </li>
            <li>
              Submit timely reports and prepare presentations/proposals as
              assigned
            </li>
          </ul>
          <h3 className="qualifications-title">Qualifications</h3>
          <ul className="qualifications-text">
            <li>Bachelor's degree preferred</li>
            <li>
              3-5 years of human resources generalist experience preferred
            </li>
            <li>Advanced knowledge of scheduling systems and programs</li>
            <li>Advanced understanding of the G-Suite</li>
            <li>Strong organizational skills and high accuracy level</li>
            <li>Ability to use discretion and maintain confidentiality</li>
            <li>Fluent English (Advanced)</li>
            <li>Basic Digital Marketing a plus</li>
            <li>Copywriting a plus</li>
            <li>
              Previous experience at a startup or consulting company is a plus
            </li>
            <li>Ability to commit to a minimum of 4+ hour work weeks</li>
            <li>
              Ability to attend weekly standup meeting (conference call with
              desktop/ laptop access for screen sharing)
            </li>
            <li>HealthTech experience is a plus</li>
            <li>
              Through your pro-bono work, you will not only continue to
              demonstrate your current skills while gaining some new ones,
              practice teamwork, make new friends and develop professional
              connections in a professional setting, but you will also have the
              opportunity to demonstrate what companies value in ways other than
              paid employment: ability to get things done and ability to work as
              a team. 
            </li>
          </ul>

          <p className="note-text">
            Through your pro-bono work, you will not only continue to
            demonstrate your current skills while gaining some new ones,
            practice teamwork, make new friends and develop professional
            connections in a professional setting, but you will also have the
            opportunity to demonstrate what companies value in ways other than
            paid employment: ability to get things done and ability to work as a
            team.
          </p>
          <p className="note-text">
          Join us, you win, we both win!!
          </p>

          <p className="apply-text">
            How to Apply: To apply for any open position, please contact HR at
            onehealthconnectapp@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hr;
