import React from "react";
import { BntTab } from "./ButtonTab";
import { ArrowTab } from "./ButtonTab";
import "./Hiring.css";
import plusbtn from "src/Assets/Icons/plus.png";
import minusbtn from "src/Assets/Icons/minus.png";
import topArrow from "src/Assets/Icons/iconone.png";
import downArrow from "src/Assets/Icons/icontwo.png";

import { useState } from "react";
const Design = () => {
  const [accordion, setAccordion] = useState({
    privacy: false,
    open: false,
    hide: false,
  });

  const [designVisible, setDesignVisible] = useState(false);

  const toggleAccordion = (content) => (e) => {
    setAccordion((prev) => ({ ...prev, [content]: !prev[content] }));
  };

  const toggleDesign = () => {
    setDesignVisible((prev) => !prev); 
  };

  return (
    <div className="layerOne-tab">
      <div>
        <div className="flex-tab">
          <h3 className="Text-header" onClick={toggleDesign}>DESIGN</h3>
          <BntTab
            icon={designVisible ? minusbtn : plusbtn}
            onClick={toggleDesign}
          />
        </div>

        <div className="job-body">
          {designVisible && (
            <div className="grid">
              <h2 className="grid-title">UX Researcher</h2>
              <h2 className="grid-text">Remote</h2>
              <ArrowTab
                icon={accordion.open ? topArrow : downArrow}
                onClick={toggleAccordion("open")}
              />
            </div>
          )}

          <hr />
          {accordion.open && (
            <div className="text-tab-flow">
              <h2 className="description-title">Description</h2>
              <p className="description-text">
                We are an 'early stage' pre-money nonprofit/ tech startup
                preparing for a proof-of-concept launch / seed-raise looking to
                recruit VOLUNTEERS as UX RESEARCHER - MEDICAL/ WELLNESS PROVIDER
                LOOKUP.
              </p>
              <p className="description-text">
                As a UX Researcher, you will be responsible for conducting user
                research, analyzing data, and delivering insights that inform
                the design and development of our product.
              </p>
              <h3 className="responsibilities-title">Responsibilities</h3>
              <ul className="responsibilities-text">
                <li>
                  Conduct qualitative and quantitative user research to
                  understand user needs, goals, and pain points in using our
                  Provider Lookup platform.
                </li>
                <li>
                  Design and conduct user testing sessions, focus groups, and
                  surveys to gather insights from users.
                </li>
                <li>
                  Analyze research data and provide actionable insights that
                  inform product decisions and design improvements.
                </li>
                <li>
                  Collaborate with UX Designers and Product Manager to translate
                  user research insights into design recommendations and product
                  improvements.
                </li>
                <li>
                  Work with the Development team to ensure the implementation of
                  design recommendations and usability improvements.
                </li>{" "}
                <li>
                  Stay up-to-date with industry trends and best practices in UX
                  research and design.
                </li>
              </ul>
              <h3 className="qualifications-title">Qualifications</h3>
              <ul className="qualifications-text">
                <li>
                  3+ years of experience in UX research, conducting user
                  research, usability testing, and data analysis.
                </li>
                <li>
                  Experience with a variety of research methods, including
                  usability testing, surveys, focus groups, and user interviews.
                </li>
                <li>
                  Strong analytical and problem-solving skills with the ability
                  to turn research findings into actionable insights.
                </li>
                <li>
                  Excellent written and verbal communication skills with the
                  ability to communicate research findings to cross-functional
                  teams.
                </li>
                <li>
                  Proficiency in research tools such as Qualtrics,
                  UserTesting.com, or equivalent.
                </li>
                <li>
                  Experience working in an Agile development environment is a
                  plus.
                </li>
                <li>
                  Team players with a desire to learn, iterate and move quickly
                  • Ability to commit to a minimum of 4+ hour work weeks
                </li>
                <li>
                  Ability to attend weekly standup meeting (conference call with
                  desktop/ laptop access for screen sharing)
                </li>

                <li>HealthTech experience</li>
                <li>
                  Bachelor's or Master's degree in Human-Computer Interaction,
                  Psychology, Cognitive Science, or a related field is a plus
                </li>
              </ul>

              <p className="note-text">Join us, you win, we both win!!</p>

              <p className="apply-text">
                How to Apply: To apply for any open position, please contact HR
                at hr-team@ihealthwellness.one
              </p>
            </div>
          )}
        </div>
        <div className="job-body">
          {designVisible && (
            <div className="grid">
              <h2 className="grid-title">UX/UI Designer</h2>
              <h2 className="grid-text">Remote</h2>
              <ArrowTab
                icon={accordion.hide ? topArrow : downArrow}
                onClick={toggleAccordion("hide")}
              />
            </div>
          )}

          {designVisible && <hr />}
          {accordion.hide && (
            <div className="text-tab-flow">
              <h2 className="description-title">Description</h2>
              <p className="description-text">
                We are an 'early stage' pre-money nonprofit/ tech startup
                preparing for a proof-of-concept launch / seed-raise looking to
                recruit VOLUNTEERS (unpaid) as UX/UI DESIGNERS.{" "}
              </p>
              <p className="description-text">
                Future Salary would be promised for employees (after seed
                funding round).
              </p>
              <p className="description-text">
                As a UX/UI DESIGNER you will be involved in all aspects of
                product design and development, from research and ideation,
                through detailed design and testing, to implementation and
                learning. You will be responsible for leading the design in a
                product area (web, ios, android). You’ll help drive the roadmap,
                presenting and evaluating options, and crafting the approach.
                Within the team, you will be expected to mentor more junior team
                members.
              </p>
              <p className="description-text">
                You’ll be helping to improve the healthcare experience for our
                users by making it simpler and more efficient for patients to
                book an appointment with and visit a doctor.
              </p>
              <h3 className="responsibilities-title">Responsibilities</h3>
              <ul className="responsibilities-text">
                <li>
                  Generate creative assets for digital marketing campaigns
                </li>
                <li>Design UI/UX for new features across web and mobile</li>
                <li>Help shape our brand through both product and marketing</li>
              </ul>
              <h3 className="qualifications-title">Qualifications</h3>
              <ul className="qualifications-text">
                <li>3+ years of Product Design experience</li>
                <li>
                  BA/BS degree in Design (e.g., interaction, graphic, visual
                  communications, product, industrial) or a related field of
                  equivalent practical experience
                </li>
                <li>Experience designing digital marketing content</li>
                <li>
                  Experience designing UI/UX for mobile and web applications
                </li>
                <li>
                  Knowledge of wireframe tools (e.g. Figma and Adobe Creative
                  Cloud)
                </li>
                <li>
                  Team players with a desire to learn, iterate and move quickly
                </li>
                <li>
                  Familiarity with Agile frameworks is a plus • Ability to
                  commit to a minimum of 4+ hour work weeks
                </li>
                <li>
                  Ability to attend weekly standup meeting (conference call with
                  desktop/ laptop access for screen sharing)
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

export default Design;
