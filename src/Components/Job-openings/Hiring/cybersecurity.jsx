import React from "react";
import { BntTab } from "./ButtonTab";
import { ArrowTab } from "./ButtonTab";
import "./Hiring.css";
import plusbtn from "src/Assets/Icons/plus.png";
import minusbtn from "src/Assets/Icons/minus.png";


import { useState } from "react";

const Cybersecurity = () => {
  const [accordion, setAccordion] = useState({
    privacy: false,
    show: false,
  });

  const [cybersecurityVisible, setCybersecurityVisible] = useState(false);

  const toggleAccordion = (content) => (e) => {
    setAccordion((prev) => ({ ...prev, [content]: !prev[content] }));
  };

  const toggleCybesecurity = () => {
    setCybersecurityVisible((prev) => !prev);
  };

  return (
    <div className="layerTwo-tab">
      <div>
        <div className="flex-tab">
          <h3 className="Text-header" onClick={toggleCybesecurity}>CYBERSECURITY AND DATA PRIVACY</h3>
          <BntTab
            icon={cybersecurityVisible ? minusbtn : plusbtn}
            onClick={toggleCybesecurity}
          />
        </div>
        <div className="job-body">
          {cybersecurityVisible && (
            <div className="grid">
              <h2 className="grid-title" onClick={toggleAccordion("show")}>CyberSecurity</h2>
              <h2 className="grid-text" onClick={toggleAccordion("show")}>Remote</h2>
              <ArrowTab
                icon={accordion.show}
                onClick={toggleAccordion("show")}
              />
            </div>
          )}

          <hr />

          {cybersecurityVisible && (
            <div>
              {accordion.show && (
                <div className="text-tab-flow">
                  <h2 className="description-title">Description</h2>
                  <p className="description-text">
                    We are an 'early stage' pre-money nonprofit/ tech startup
                    preparing for a proof-of-concept launch / seed-raise looking to
                    recruit VOLUNTEERS (unpaid) as COPYWRITERS. Future Salary would
                    be promised for employees (after seed funding round).
                  </p>
                  <h3 className="responsibilities-title">Responsibilities</h3>
                  <ul className="responsibilities-text">
                    <li>
                      Interpret creative briefs to develop concepts for execution
                      with assigned brands
                    </li>
                    <li>
                      Research and understand a client’s needs and target audiences,
                      through online searches, reviews of existing research,
                      interviews with subject-matter experts, and in-person meetings
                    </li>
                    <li>
                      Write original copy and edit content for a range of marketing
                      and communications materials • Collaborate with a team of
                      account managers and creative staff, from concept development
                      to delivery of final product • Present copy concepts and final
                      deliverables to internal team — and to client representative
                      when requested — and participate occasionally in client
                      pitches
                    </li>
                    <li>
                      Revise copy based on internal and client feedback • Oversee
                      copy and content from concept to completion, maintaining
                      stewardship of brand tone, voice and standards
                    </li>
                    <li>
                      Continuously monitor and adapt messaging strategy to increase
                      open and click-through rates, customer acquisition and
                      engagement, and support Search Engine Optimization goals
                    </li>
                    <li>
                      Stay up to date on marketing trends, follow industry
                      best-practices and participate in ongoing knowledge sharing
                      with larger team{" "}
                    </li>
                    <li>
                      Take direction and work both collaboratively and autonomously
                    </li>
                  </ul>
                  <h3 className="qualifications-title">Qualifications</h3>
                  <ul className="qualifications-text">
                    <li>Native (US) grammar and writing style</li>
                    <li>
                      3-8 years of experience as a professional content
                      writer/copywriter.
                    </li>
                    <li>
                      A portfolio demonstrating strategic digital marketing
                      including social and display ads, Search Engine Marketing,
                      email marketing, website content, product promotions and blog
                      style content (please include link to portfolio)
                    </li>
                    <li>
                      Strong understanding of digital best practices and the ability
                      to execute against a broad variety of digital assets • Ability
                      to generate compelling copy for both brand and performance
                      marketing initiatives, and experience with developing copy for
                      Search Engine Optimization
                    </li>
                    <li>
                      Excellent writing, editing, research and grammatical skills
                    </li>
                    <li>
                      Ability to work independently or with a team to meet deadlines
                    </li>
                    <li>
                      Excellent organizational skills and multitasking ability
                    </li>
                  </ul>

                  <h3 className="skills-title">
                    Preferred skills and qualifications
                  </h3>
                  <ul className="skills-text">
                    <li>
                      Bachelor’s degree (or equivalent) in journalism, English,
                      communications, or related discipline
                    </li>
                    <li>
                      Proofreading experience and familiarity with standard style
                      guides
                    </li>
                    <li>Experience with content management systems</li>
                    <li>Keen eye for detail and appreciation of great design</li>
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

                  <p className="apply-text">
                    How to Apply: To apply for any open position, please contact HR
                    at hr-team@ihealthwellness.one
                  </p>
                </div>
              )}
            </div>


          )}


        </div>
      </div>
    </div>
  );
};

export default Cybersecurity;
