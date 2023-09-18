import React from "react";
import { BntTab } from "./ButtonTab";
import { ArrowTab } from "./ButtonTab";
import "./Hiring.css";
import plusbtn from "src/Assets/Icons/plus.png";
import minusbtn from "src/Assets/Icons/minus.png";
import topArrow from "src/Assets/Icons/Icon.png";
import downArrow from "src/Assets/Icons/Icon2.png";

import { useState } from "react";

const Product = () => {
  const [accordion, setAccordion] = useState({
    privacy: false,
    design: false,
  });

  const toggleAccordion = (content) => (e) => {
    setAccordion((prev) => ({ ...prev, [content]: !prev[content] }));
  };

  return (
    <div className="layerOne-tab">
      <div>
        <div className="flex-tab">
          <h3 className="Text-header">PRODUCT MANAGEMENT</h3>
          <BntTab
            icon={accordion.privacy ? minusbtn : plusbtn}
            onClick={toggleAccordion("privacy")}
          />
        </div>

        <div className="job-body">
          {accordion.privacy && (
            <div className="grid">
              <h2 className="grid-title">Pro Bono Generalist</h2>
              <h2 className="grid-text">Remote</h2>
              <ArrowTab
                icon={accordion.design ? topArrow : downArrow}
                onClick={toggleAccordion("design")}
              />
            </div>
          )}

          <hr />
          {accordion.design && (
            <div className="text-tab-flow">
              <h2 className="description-title">Description</h2>
              <p className="description-text">
                We are an 'early stage' pre-money nonprofit/ tech startup
                preparing for a proof-of-concept launch / seed-raise seeking a
                PRO BONO GENERALIST to assist in all aspects of the management
                and administration of Non-profit formation, regulation and
                compliance.
              </p>
              <h3 className="responsibilities-title">Responsibilities</h3>
              <ul className="responsibilities-text">
                <li>
                  This position will support the Pro Bono team with day to day
                  operations and administrative projects
                </li>
                <li>
                  Track, update, and record the status of pro bono matters in
                  the Firm's data repository
                </li>
                <li>
                  Assist in planning, implementing and monitoring the company's
                  Social Media strategy in order to increase brand awareness and
                  hosting events and training programs
                </li>
                <li>
                  Assist in developing marketing content for Firm's website and
                  blog
                </li>
                <li>
                  Work with Information Technology team to update and enhance
                  the training materials and opportunity listings
                </li>
                <li>Work with Finance team to respond to audits and surveys</li>
                <li>Perform research and/or other special projects</li>
                <li>
                  Ability to carry out certain tasks with minimal supervision
                  after instruction has been provided
                </li>
                <li>Ability to be proactive and a self-starter</li>
              </ul>
              <h3 className="qualifications-title">Qualifications</h3>
              <ul className="qualifications-text">
                <li>Demonstrated commitment to public service</li>
                <li>Excellent verbal and written communication skills</li>
                <li>Excellent analytic and organizational skills</li>
                <li>
                  Proficiency in Google Suite • Ability to commit to a minimum
                  of 4+ hour work weeks
                </li>
                <li>
                  Ability to attend weekly standup meeting (conference call with
                  desktop/ laptop access for screen sharing)
                </li>
                <li>Preferred skills and qualifications</li>
                <li>
                  Team players with a desire to learn, iterate and move quickly
                </li>
                <li>Familiarity with Agile ways of working (Scrum)</li>

                <li>HealthTech experience is a plus</li>
                <li>
                  Previous experience at a startup or consulting company is a
                  plus
                </li>
              </ul>

              <p className="note-text">
                Through your pro-bono work, you will not only continue to
                demonstrate your current skills while gaining some new ones,
                practice teamwork, make new friends and develop professional
                connections in a professional setting, but you will also have
                the opportunity to demonstrate what companies value in ways
                other than paid employment: ability to get things done and
                ability to work as a team.
              </p>
              <p className="note-text">
                Future Salary would be promised for employees (after seed
                funding round).
              </p>

              <p className="apply-text">
                How to Apply: To apply for any open position, please contact HR
                at onehealthconnectapp@gmail.com
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
