import React from "react";
import { BntTab } from "./ButtonTab";
import { ArrowTab } from "./ButtonTab";
import "./Hiring.css";
import plusbtn from "src/Assets/Icons/plus.png";
import minusbtn from "src/Assets/Icons/minus.png";
// import topArrow from "src/Assets/Icons/iconone.png";
// import downArrow from "src/Assets/Icons/icontwo.png";

import { useState } from "react";

const Quality = () => {
  const [accordion, setAccordion] = useState({
    privacy: false,
    spectacle: false,
  });

  const [qualityVisible, setQualityVisible] = useState(false);

  const toggleAccordion = (content) => (e) => {
    setAccordion((prev) => ({ ...prev, [content]: !prev[content] }));
  };

  const toggleQuality = () => {
    setQualityVisible((prev) => !prev); 
  };

  return (
    <div className="layerTwo-tab">
      <div>
        <div className="flex-tab">
          <h3 className="Text-header" onClick={toggleQuality}>QUALITY ASSURANCE</h3>
          <BntTab
            icon={qualityVisible ? minusbtn : plusbtn}
            onClick={toggleQuality}
          />
        </div>

        <div className="job-body">
          {qualityVisible && (
            <div className="grid">
              <h2 className="grid-title">BA/QA Engineer/ Associate</h2>
              <h2 className="grid-text">Remote</h2>
              <ArrowTab
                icon={accordion.spectacle }
                onClick={toggleAccordion("spectacle")}
              />
            </div>
          )}

          <hr />
          {accordion.spectacle && (
            <div className="text-tab-flow">
              <h2 className="description-title">Description</h2>
              <p className="description-text">
                We are an 'early stage' pre-money nonprofit/ tech startup
                preparing for a proof-of-concept launch / seed-raise looking to
                recruit VOLUNTEERS as BA/ QA ENGINEERS.
              </p>
              <p className="description-text">
                You’ll be helping to improve the healthcare experience for our
                users by making it simpler and more efficient for patients to
                book an appointment with and visit a doctor.
              </p>
              <h3 className="responsibilities-title">Responsibilities</h3>
              <ul className="responsibilities-text">
                <li>
                  Evaluate, analyze, author and communicate systems requirements
                  on a continuing basis, and maintain systems processes
                </li>
                <li>
                  Review requirements, specifications and technical design
                  documents to provide timely and meaningful feedback
                </li>
                <li>
                  Conduct daily systems analytics to maximize effectiveness and
                  troubleshoot problems
                </li>
                <li>
                  Create detailed, comprehensive and well-structured test plans
                  and test cases • Estimate, prioritize, plan and coordinate
                  testing activities
                </li>
                <li>
                  Design, develop and execute automation scripts using open
                  source tools
                </li>
                <li>Identify, record, document thoroughly and track bugs</li>
                <li>
                  Perform thorough regression testing when bugs are resolved
                </li>
                <li>
                  Develop and apply testing processes for new and existing
                  products to meet client needs
                </li>
                <li>
                  Liaise with internal teams (e.g. developers and product
                  managers) to identify system requirements
                </li>
                <li>Monitor debugging process results</li>
                <li>
                  Investigate the causes of non-conforming software and train
                  users to implement solutions Track quality assurance metrics,
                  like defect densities and open defect counts
                </li>
                <li>
                  Stay up-to-date with new testing tools and test strategies
                </li>
              </ul>
              <h3 className="qualifications-title">Qualifications</h3>
              <ul className="qualifications-text">
                <li>Proven work experience in software development</li>
                <li>
                  Proven work experience in software requirments and quality
                  assurance
                </li>
                <li>
                  Experience in generating process documentation and reports
                </li>
                <li>
                  Strong knowledge of software BA/QA methodologies, tools and
                  processes
                </li>
                <li>
                  Experience in writing clear, concise and comprehensive
                  specifications, test plans and test cases
                </li>
                <li>
                  Hands-on experience with both white box and black box testing
                </li>
                <li>Hands-on experience with automated testing tools</li>
                <li>Solid knowledge of SQL and scripting</li>
                <li>
                  Experience working in an Agile/Scrum development process
                </li>
                <li>
                  Team players with a desire to learn, iterate and move quickly
                </li>
                <li>Familiarity with Agile frameworks is a plus</li>
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

              <p className="note-text">Join us, you win, we both win!!</p>

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

export default Quality;
