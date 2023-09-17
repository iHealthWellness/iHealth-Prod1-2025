import React from "react";
import { BntTab } from "./ButtonTab";
import { ArrowTab } from "./ButtonTab";
import "./Hiring.css";
import plusbtn from "src/Assets/Icons/plus.png";
import minusbtn from "src/Assets/Icons/minus.png";
import topArrow from "src/Assets/Icons/Icon.png";
import downArrow from "src/Assets/Icons/Icon2.png";

import { useState } from "react";

const Operations = () => {
  const [accordion, setAccordion] = useState({
    privacy: false,
    aspect: false,
    looking: false,
    viewing: false,
    glimpse: false,
    outlook: false,
  });

  const toggleAccordion = (content) => (e) => {
    setAccordion((prev) => ({ ...prev, [content]: !prev[content] }));
  };

  return (
    <div className="layerTwo-tab">
      <div>
        <div className="flex-tab">
          <h3 className="Text-header">RESEARCH, INNOVATION & OPERATIONS</h3>
          <BntTab
            icon={accordion.privacy ? minusbtn : plusbtn}
            onClick={toggleAccordion("privacy")}
          />
        </div>

        <div className="job-body">
        {accordion.privacy && (
          <div className="grid">
            <h2 className="grid-title">
              Business Development Specialist, Clinical Trials
            </h2>
            <h2 className="grid-text">Remote</h2>
            <ArrowTab
              icon={accordion.aspect ?  topArrow : downArrow}
              onClick={toggleAccordion("aspect")}
            />
          </div>
        )}

        <hr />
        {accordion.aspect && (
        <div className="text-tab-flow">
          <h2 className="description-title">Description</h2>
          <ul className="description-text">
          <li>
            Research and build relationships with companies specializing in
            treatments for complex diseases
          </li>
          <li>
            Track trials that may be relevant to our community, providing
            information such as research overview, times and lengths on trials,
            etc.
          </li>
          <li>
            Communicates with internal teams to understand patient population
            and needs
          </li>
          <li>
            Work closely with trial leaders to understand needs and requirements
            for partnership and evaluate ROI for the business
          </li>
          <li>
            Facilitate introductions between clinical teams and interested
            participants and help to pre-qualify/ complete entrance
            documentation as needed
          </li>
          <li>
            Create communications cadence and partner with internal teams to
            keep platform up-to-date on activities
          </li>
          </ul>

          <h3 className="qualifications-title">Qualifications</h3>
          <ul className="qualifications-text">
            <li>
              3-5 demonstrated experience in health care management or
              development, international medicine or medical sales experience,
              business development, strategic planning, or related areas
            </li>
            <li>
              Bachelor's degree in Health Care Administration or related field,
              or the equivalent combination of education and/or experience
            </li>
            <li>
              Demonstrated maturity, judgment, and ability to handle
              confidential information with discretion and professionalism
            </li>
            <li>
              Excellent interpersonal and communication skills, with the ability
              to write clearly and concisely and proof read for others
            </li>
            <li>
              Must be highly organized and self-motivating; maintaining high
              integrity and high confidence
            </li>
            <li>Previous experience at a startup is a plus</li>
            <li>Ability to commit to a minimum of 4+ hour work weeks</li>
            <li>
              Ability to attend weekly standup meeting (conference call with
              desktop/ laptop access for screen sharing)
            </li>
            <li>HealthTech experience is a plus</li>
            <li>Fluent in English </li>
          </ul>

          <p className="note-text">Join us, you win, we both win!!</p>

          <p className="apply-text">
            How to Apply: To apply for any open position, please contact HR at
            onehealthconnectapp@gmail.com
          </p>
        </div>
        )}

        {accordion.privacy && (
          <div className="grid">
            <h2 className="grid-title">Clinical Integration Specialist</h2>
            <h2 className="grid-text">Remote</h2>
            <ArrowTab
              icon={accordion.looking ? topArrow : downArrow}
              onClick={toggleAccordion("looking")}
            />
          </div>
        )}

        {/*<hr />*/}
        {accordion.looking && (
        <div className="text-tab-flow">
          <h2 className="description-title">Description</h2>
          <p className="description-text">
            We are an 'early stage' pre-money nonprofit/ tech startup preparing
            for a proof-of-concept launch / seed-raise looking to recruit
            VOLUNTEERS (unpaid) as a Clinical Integration Specialist
            collaborating with healthcare providers to integrate the solution
            into workflows.
          </p>

          <h3 className="responsibilities-title">Responsibilities</h3>
          <ul className="responsibilities-text">
            <li>
              Assist in the development of design specifications in support of
              new or modified clinical applications, regulatory requirements,
              and best practices
            </li>
            <li>
              Document current processes to establish a baseline for
              developmental improvements of future workflows
            </li>
            <li>
              Analyzes, recommends and assists with implementing new and
              improved processes and workflows
            </li>
            <li>
              Acts as a liaison and represents the system users/customers in all
              project initiatives
            </li>
            <li>Performs post-implementation monitoring of adoption and use</li>
          </ul>
          <h3 className="qualifications-title">Required Experience</h3>
          <ul className="qualifications-text">
            <li>
              3+ years direct clinical experience, healthcare informatics or
              healthcare operations experience preferred
            </li>
            <li>
              A strong customer service focus with the ability to develop
              effective working relationships, required
            </li>
            <li>
              Current knowledge of clinical practices and related information
              systems and computer applications
            </li>
            <li>
              Maintains current knowledge of trends and advances in clinical
              practice and healthcare informatics, as well as new developments
              and innovations in hardware and software technology
            </li>
            <li>
              Strong verbal and written communication, interpersonal and
              organizational skills
            </li>
            <li>
              Excellent critical thinking and analytical skills, with a passion
              for solving problems and creating solutions
            </li>
            <li>
              Bachelor's degree in Information Systems, Healthcare Management,
              or related field
            </li>
            <li>
              Previous experience at a startup, consulting, or HealthTech
              company is a plus
            </li>
            <li>Ability to commit to a minimum of 4+ hour work weeks</li>
            <li>
              Ability to attend weekly standup meeting (conference call with
              desktop/ laptop access for screen sharing)
            </li>
            <li>Fluent in English</li>
          </ul>

          <p className="note-title">NOTE</p>
          <p className="note-text">
            Please note that candidates actively seeking CPT/Internships are
            ineligible for this particular volunteer position.
            <br /> Through your pro-bono work, you will not only continue to
            demonstrate your current skills while gaining some new ones,
            practice teamwork, make new friends and develop professional
            connections in a professional setting, but you will also have the
            opportunity to demonstrate what companies value in ways other than
            paid employment: ability to get things done and ability to work as a
            team.
          </p>

          <p className="apply-text">
            How to Apply: To apply for any open position, please contact HR at
            onehealthconnectapp@gmail.com
          </p>
        </div>
        )}

        {accordion.privacy && (
          <div className="grid">
            <h2 className="grid-title">
              Health Cloud Infrastructure and Integration Specialist{" "}
            </h2>
            <h2 className="grid-text">Remote</h2>
            <ArrowTab
              icon={accordion.viewing ? topArrow : downArrow}
              onClick={toggleAccordion("viewing")}
            />
          </div>
        )}

        {/* <hr /> */}
        {accordion.viewing && (
        <div className="text-tab-flow">
          <h2 className="description-title">Description</h2>
          <p className="description-text">
            We are an 'early stage' pre-money nonprofit/ tech startup preparing
            for a proof-of-concept launch / seed-raise looking to recruit
            VOLUNTEERS (unpaid) as a Health Cloud Infrastructure and Integration
            Specialist to designing, analyzing, and integrating the platform for
            medical products.
          </p>

          <h3 className="responsibilities-title">Responsibilities</h3>
          <ul className="responsibilities-text">
            <li>
              Take lead on designing, analyzing, and integrating the platform
              for medical products
            </li>
            <li>
              Provide ongoing support and maintain the strategic roadmap for a
              portfolio of forthcoming products and offerings
            </li>
          </ul>
          <h3 className="qualifications-title">Required Experience</h3>
          <ul className="qualifications-text">
            <li>5+ years of professional experience</li>
            <li>
              Experience with software acquisition evaluation while considering
              functional benefits, technical performance, risks, and schedule
              concerns
            </li>
            <li>Some application and infrastructure testing experience</li>
            <li>
              Excellent critical thinking and analytical skills, with a
              formidable attention to detail, possessing strong interpersonal
              communication skills
            </li>
            <li>Ability to manage across geographically diverse teams</li>
            <li>
              Must be highly organized and self-motivating; maintaining high
              integrity and high confidence
            </li>
            <li>
              Bachelor's degree in Mathematics, Computer Science or related
              field
            </li>
            <li>
              Previous experience at a startup, HealthTech or consulting company
              is a plus
            </li>
            <li>Ability to commit to a minimum of 4+ hour work weeks</li>
            <li>
              Ability to attend weekly standup meeting (conference call with
              desktop/ laptop access for screen sharing)
            </li>
            <li>Fluent in English</li>
          </ul>
          <p className="note-text">
            NOTE: Please note that candidates actively seeking CPT/Internships
            are ineligible for this particular volunteer position.
          </p>
          <p className="note-text">
            Through your pro-bono work, you will not only continue to
            demonstrate your current skills while gaining some new ones,
            practice teamwork, make new friends and develop professional
            connections in a professional setting, but you will also have the
            opportunity to demonstrate what companies value in ways other than
            paid employment: ability to get things done and ability to work as a
            team.
          </p>
          <p className="note-text">Join us, you win, we both win!!</p>

          <p className="apply-text">
            How to Apply: To apply for any open position, please contact HR at
            onehealthconnectapp@gmail.com
          </p>
        </div>
        )}

        {accordion.privacy && (
          <div className="grid">
            <h2 className="grid-title">Physician Integration Specialist </h2>
            <h2 className="grid-text">Remote</h2>
            <ArrowTab
              icon={accordion.glimpse ? topArrow : downArrow}
              onClick={toggleAccordion("glimpse")}
            />
          </div>
        )}

        {/* <hr /> */}
        {accordion.glimpse && (
        <div className="text-tab-flow">
          <h2 className="description-title">Description</h2>
          <p className="description-text">
            We are an 'early stage' pre-money nonprofit/ tech startup preparing
            for a proof-of-concept launch / seed-raise looking to recruit
            VOLUNTEERS (unpaid) as a Physician Integration Specialist to
            designing, analyzing, and integrating the platform for medical
            products.
          </p>
          <h3 className="responsibilities-title">Responsibilities</h3>
          <ul className="responsibilities-text">
            <li>
              Acts as primary contact for practices using the platform and works
              collaboratively with our team to facilitate communication and
              issue resolution
            </li>
            <li>
              Participates in the development, implementation and maintenance of
              a physician on-boarding program to ensure physicians are able to
              work efficiently and knowledgeably within our platform
            </li>
            <li>
              Participates in the planning, implementation and coordination of
              physician relations activities and identifies growth opportunities
              for systems
            </li>
            <li>
              Builds strong and mutually beneficial relationships amongst the
              our physician network
            </li>
          </ul>
          <h3 className="qualifications-title">Required Experience</h3>
          <ul className="qualifications-text">
            <li>
              3+ years of experience in Healthcare, partnering with Physicians
            </li>
            <li>Prior experience with project management</li>
            <li>
              Strong verbal and written communication, interpersonal and
              organizational skills
            </li>
            <li>Exceptional customer service and follow through</li>
            <li>Knowledge of medical terminology</li>
            <li>
              Excellent critical thinking and analytical skills, with a passion
              for solving problems and creating solutions
            </li>
            <li>
              Must be highly organized and self-motivating; maintaining high
              integrity and high confidence
            </li>
            <li>
              Bachelor's degree in Health Care, Health Administration or related
              field
            </li>
            <li>
              Previous experience at a startup,consulting, or HealthTech company
              is a plus
            </li>
            <li>Ability to commit to a minimum of 4+ hour work weeks</li>
            <li>
              Ability to attend weekly standup meeting (conference call with
              desktop/ laptop access for screen sharing)
            </li>
            <li>Fluent in English</li>
          </ul>

          <p className="note-text">
            NOTE: Please note that candidates actively seeking CPT/Internships
            are ineligible for this particular volunteer position.
          </p>
          <p className="note-text">
            Through your pro-bono work, you will not only continue to
            demonstrate your current skills while gaining some new ones,
            practice teamwork, make new friends and develop professional
            connections in a professional setting, but you will also have the
            opportunity to demonstrate what companies value in ways other than
            paid employment: ability to get things done and ability to work as a
            team.
          </p>
          <p className="note-text">Join us, you win, we both win!!</p>
          <p className="apply-text">
            How to Apply: To apply for any open position, please contact HR at
            onehealthconnectapp@gmail.com
          </p>
        </div>
        )}

        {accordion.privacy && (
          <div className="grid">
            <h2 className="grid-title">
              Research Analyst, Research and Development
            </h2>
            <h2 className="grid-text">Remote</h2>
            <ArrowTab
              icon={accordion.outlook ? topArrow : downArrow}
              onClick={toggleAccordion("outlook")}
            />
          </div>
        )}

        {/* <hr /> */}
        {accordion.outlook && (
        <div className="text-tab-flow">
          <h2 className="description-title">Description</h2>
          <p className="description-text">
            We are an 'early stage' pre-money nonprofit/ tech startup preparing
            for a proof-of-concept launch / seed-raise looking to recruit
            VOLUNTEERS (unpaid) as RESEARCH ANALYSTS.
          </p>
          <p className="description-text">
            As the RESEARCH ANALYST volunteer you will contribute to identifying
            market fit and competitive landscape.
          </p>
          <p className="description-text">
            Future Salary would be promised for employees (after seed funding
            round).
          </p>
          <h3 className="responsibilities-title">Responsibilities</h3>
          <ul className="responsibilities-text">
            <li>
              Research, analyze, and write market reports to include analysis of
              global and U.S. markets
            </li>
            <li>
              Develop market fit & competitive landscape (pitch deck slide:
              Target market and opportunity)
            </li>
            <li>
              Support the research and analysis for various research and
              development projects including market analysis, competitor
              insights, initial return on investment and other meaningful
              reports
            </li>
            <li>
              Act as company liaison for overall research efforts and develop
              research tools such as calendars and workflows to increase
              productivity and effectiveness
            </li>
          </ul>
          <h3 className="qualifications-title">Qualifications</h3>
          <ul className="qualifications-text">
            <li>3+ years of full-time software engineering experience</li>
            <li>
              Experience with product launches or integrated marketing campaigns
            </li>
            <li>Excellent writing, communication and public speaking skills</li>
            <li>
              Working knowledge of market research, surveys, and data analytics
            </li>
            <li>Experience in planning and leading initiatives</li>
            <li>Ability to commit to a minimum of 4+ hour work weeks</li>
            <li>
              Ability to attend weekly standup meeting (conference call with
              desktop/ laptop access for screen sharing)
            </li>
          </ul>
          <h3 className="qualifications-title">
            Preferred skills and qualifications
          </h3>
          <ul className="qualifications-text">
            <li>
              Bachelor’s degree (or equivalent) in marketing, communications, or
              related field
            </li>
            <li>Proficiency with HTML and Adobe Acrobat</li>
            <li>
              Team players with a desire to learn, iterate and move quickly
            </li>
            <li>Familiarity with Agile ways of working (Scrum)</li>
            <li>HealthTech experience is a plus</li>
            <li>
              Previous experience at a startup or consulting company is a plus
            </li>
          </ul>

          <p className="apply-text">Join us, you win, we both win!!"</p>

          <p className="apply-text">
            How to Apply: To apply for any open position, please contact HR at
            onehealthconnectapp@gmail.com
          </p>
        </div>
        )}
      </div>
      </div>
    </div>
  );
};

export default Operations;
