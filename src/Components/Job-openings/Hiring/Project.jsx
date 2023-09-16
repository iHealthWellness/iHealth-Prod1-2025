import React from "react";
import { BntTab } from "./ButtonTab";
import { ArrowTab } from "./ButtonTab";
import "./Hiring.css";
import plusbtn from "src/Assets/Icons/plus.png";
import minusbtn from "src/Assets/Icons/minus.png";
import topArrow from "src/Assets/Icons/Icon.png";
import downArrow from "src/Assets/Icons/Icon2.png";

import { useState } from "react";

const Project = () => {
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
          <h3 className="Text-header">PROJECT MANAGEMENT</h3>
          <BntTab
            icon={accordion.privacy ? minusbtn : plusbtn}
            onClick={toggleAccordion("privacy")}
          />
        </div>

        <div className="job-body">
        {accordion.privacy && (
          <div className="grid">
            <h2 className="grid-title">Project/ Agile Delivery Associate</h2>
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
            for a proof-of-concept launch / seed-raise seeking a motivated
            self-starter for a PROJECT/ AGILE DELIVERY ASSOCIATE position
            responsible for helping with many of the duties surrounding project
            management. As the Project Specialist and/ or Atlassian
            Administrator, you’ll be a part of building a practice within the
            organization helping to design solutions that address our goals.
            Future Salary would be promised for employees (after seed funding
            round).
          </p>
          <h3 className="responsibilities-title">Responsibilities</h3>
          <ul className="responsibilities-text">
            <li>
              Assist with preparing action plans. Break down final deliverable
              into tasks and timeframes
            </li>
            <li>Implement policies and procedures</li>
            <li>Create weekly workflow</li>
            <li>Track expenses and work on budget forecast</li>
            <li>
              Monitor progress • Alert the Founder to issues as they arise
            </li>
            <li>Report on team and project performance</li>
            <li>
              Act as point of contact for the project team and facilitate
              communications
            </li>
            <li>
              Assess project risk • Calculate project metrics, such as quality,
              costs, health, etc.
            </li>
            <li>Collaborate on stakeholder presentations</li>
            <li>Foster positive relationships with stakeholders</li>
            <li>
              As we transition to Atlassian, you’ll live and breathe Atlassian:
              implementing, configuring, and customizing instances of Jira and
              Confluence
            </li>
          </ul>
          <h3 className="qualifications-title">
            Required skills and Qualifications
          </h3>
          <ul className="qualifications-text">
            <li>
              Associate or bachelor’s degree required; Master’s degree preferred
            </li>
            <li>
              Two years of related experience • Knowledge or project management,
              flowcharts, technical documentation, etc.
            </li>
            <li>Strong leadership skills</li>
            <li>
              Experience as a Business Analyst, Technical Analyst or System
              Analyst
            </li>
            <li>Team player </li>
            <li>Experience in planning and leading initiatives</li>
            <li>Ability to commit to a minimum of 4+ hour work weeks</li>
            <li>
              Ability to attend weekly standup meeting (conference call with
              desktop/ laptop access for screen sharing)
            </li>
          </ul>

          <h3 className="skills-title">Preferred skills and qualifications</h3>
          <ul className="skills-text">
            <li>
              Hands-on experience implementing, integrating, maintaining,
              configuring, and customizing instances of Jira Cloud, Jira Service
              Management (JSM), Jira Software, Jira Work Management (JWM), and
              Confluence
            </li>
            <li>
              Hands-on experience developing custom configuration and automation
              for Jira and Confluence, such as Jira workflows, schemes, custom
              fields, screens, notifications, permissions, queues etc.
            </li>
            <li>
              Experience in installing, configuring, and rolling-out key
              marketplace applications, such as Tempo, EazyBI, etc.
            </li>
            <li>Knowledge of Jira Data Center setup and configuration</li>
            <li>
              Knowledge of various working practices (Agile/Waterfall/ITSM/ESM)
              and how to apply them
            </li>
            <li>
              Team players with a desire to learn, iterate and move quickly
            </li>
            <li>Familiarity with Agile ways of working (Scrum)</li>
            <li>HealthTech experience is a plus</li>
            <li>
              Previous experience at a startup or consulting company is a plus
            </li>
          </ul>

          <p className="note-text">Location</p>
          <p className="note-text">
            Anywhere in the World Hours per week: Approximately 4 to 8+ ( can be
            adjusted as per volunteer availability) Reporting to: Founder
          </p>
          <p className="note-text">NOTE</p>
          <p className="note-text">
            Please note that candidates actively seeking CPT/Internships are
            ineligible for this particular volunteer position.Through your
            pro-bono work, you will not only continue to demonstrate your
            current skills while gaining some new ones, practice teamwork, make
            new friends and develop professional connections in a professional
            setting, but you will also have the opportunity to demonstrate what
            companies value in ways other than paid employment: ability to get
            things done and ability to work as a team.
          </p>
          <p className="apply-text">
            How to Apply: To apply for any open position, please contact HR at
            onehealthconnectapp@gmail.com
          </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Project;
