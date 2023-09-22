import React from "react";
import { BntTab } from "./ButtonTab";
import { ArrowTab } from "./ButtonTab";
import "./Hiring.css";
import plusbtn from "src/Assets/Icons/plus.png";
import minusbtn from "src/Assets/Icons/minus.png";
// import topArrow from "src/Assets/Icons/iconone.png";
// import downArrow from "src/Assets/Icons/icontwo.png";

import { useState } from "react";

const Product = () => {
  const [accordion, setAccordion] = useState({
    privacy: false,
    design: false,
    outline: false,
  });

  const [productVisible, setProductVisible] = useState(false);

  const toggleAccordion = (content) => (e) => {
    setAccordion((prev) => ({ ...prev, [content]: !prev[content] }));
  };

  const toggleProduct = () => {
    setProductVisible((prev) => !prev);
  };

  return (
    <div className="layerOne-tab">
      <div>
        <div className="flex-tab">
          <h3 className="Text-header" onClick={toggleProduct}>
            PRODUCT MANAGEMENT
          </h3>
          <BntTab
            icon={productVisible ? minusbtn : plusbtn}
            onClick={toggleProduct}
          />
        </div>

        <div className="job-body">
          {productVisible && (
            <div className="grid">
              <h2 className="grid-title">Pro Bono Generalist</h2>
              <h2 className="grid-text">Remote</h2>
              <ArrowTab
                icon={accordion.design }
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
                at hr-team@ihealthwellness.one
              </p>
            </div>
          )}
        </div>

        <div className="job-body">
          {productVisible && (
            <div className="grid">
              <h2 className="grid-title">Product Specialist/Associate</h2>
              <h2 className="grid-text">Remote</h2>
              <ArrowTab
                icon={accordion.outline }
                onClick={toggleAccordion("outline")}
              />
            </div>
          )}
          {productVisible && <hr />}
          {accordion.outline && (
            <div className="text-tab-flow">
              <h2 className="description-title">Description</h2>
              <p className="description-text">
                We are an 'early stage' pre-money nonprofit/ tech startup
                preparing for a proof-of-concept launch / seed-raise looking to
                recruit VOLUNTEERS (unpaid) as PARLIAMENTARY PROCEDURE
                SPECIALIST. Future Salary would be promised for employees (after
                seed funding round).
              </p>

              <h3 className="responsibilities-title">Responsibilities</h3>
              <ul className="responsibilities-text">
                <li>
                  Evaluate, analyze, author and communicate systems requirements
                  on a continuing basis, and maintain systems processes
                </li>
                <li>
                  Drive the execution of all processes in the product lifecycle,
                  including product and market research, competitor analysis,
                  planning, positioning, requirements and roadmap development,
                  and product launch
                </li>
                <li>
                  Translate product strategy into detailed requirements for
                  prototyping and final development by engineering teams
                </li>
                <li>
                  Drive the product- and business-planning processes for
                  cross-functional teams
                </li>
                <li>
                  Develop, implement, and maintain production timelines across
                  multiple departments
                </li>
                <li>
                  Appraise new product ideas and strategize appropriate
                  go-to-market plans
                </li>
              </ul>
              <h3 className="qualifications-title">Qualifications</h3>
              <ul className="qualifications-text">
                <li>Proven work experience in software development</li>
                <li>Strong experience in a dynamic product management role</li>
                <li>
                  Proven success in overseeing all elements of the product
                  development lifecycle
                </li>
                <li>
                  Experience in delivering finely tuned product marketing
                  strategies
                </li>
                <li>
                  Exceptional writing and editing skills, combined with strong
                  presentation and public speaking skills
                </li>
                <li>
                  Experience working in an Agile/Scrum development process
                </li>
                <li>
                  Team players with a desire to learn, iterate and move quickly
                </li>
                <li>Ability to commit to a minimum of 4+ hour work weeks</li>
                <li>
                  Ability to attend weekly standup meeting (conference call with
                  desktop/ laptop access for screen sharing)
                </li>
                <li>
                  Experience with performance and/or security testing is a plus
                </li>
                <li>
                  BS/MS degree in Computer Science, Engineering or a related
                  subject
                </li>
                <li>HealthTech experience is a plus</li>
              </ul>
              <p className="note-text">Join us, you win, we both win!!"</p>

              <p className="apply-text">
                How to Apply: To apply for any open position, please contact HR
                at hr-team@ihealthwellness.one
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
