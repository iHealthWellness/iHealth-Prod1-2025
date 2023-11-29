import React from "react";
import { BntTab } from "./ButtonTab";
import { ArrowTab } from "./ButtonTab";
import "./Hiring.css";
import plusbtn from "src/Assets/Icons/plus.png";
import minusbtn from "src/Assets/Icons/minus.png";

import { useState } from "react";

const It = () => {
  const [accordion, setAccordion] = useState({
    privacy: false,
    sight: false,
  });

  const [itVisible, setItVisible] = useState(false);

  const toggleAccordion = (content) => (e) => {
    setAccordion((prev) => ({ ...prev, [content]: !prev[content] }));
  };

  const toggleIt = () => {
    setItVisible((prev) => !prev);
  };

  return (
    <div className="layerTwo-tab">
      <div>
        <div className="flex-tab">
          <h3 className="Text-header" onClick={toggleIt}>IT INFRASTRUCTURE</h3>
          <BntTab
            icon={itVisible ? minusbtn : plusbtn}
            onClick={toggleIt}
          />
        </div>

        <div className="job-body">
          {itVisible && (
            <div className="grid">
              <h2 className="grid-title" onClick={toggleAccordion("sight")}>
                Salesforce Architect (Cloud Health Implementation Expert)
              </h2>
              <h2 className="grid-text" onClick={toggleAccordion("sight")}>Remote</h2>
              <ArrowTab
                icon={accordion.sight}
                onClick={toggleAccordion("sight")}
              />
            </div>
          )}

          <hr />

          {itVisible && (
            <div>
              {accordion.sight && (
                <div className="text-tab-flow">
                  <h2 className="description-title">Description</h2>
                  <p className="description-text">
                    We are an 'early stage' pre-money nonprofit/ tech startup
                    preparing for a proof-of-concept launch / seed-raise looking to
                    recruit VOLUNTEERS (unpaid) as SALESFORCE ARCHITECT (HEALTH
                    CLOUD IMPLEMENTATION EXPERT).You’re able to provide technical
                    solutions adhering to SFHC best practices.
                  </p>
                  <h3 className="responsibilities-title">Responsibilities</h3>
                  <ul className="responsibilities-text">
                    <li>Develop technology roadmaps to support business goals</li>
                    <li>
                      Provide technological expertise and advice to IT leadership in
                      the development of strategic information technology plans to
                      support business strategies
                    </li>
                    <li>
                      Prior experience implementing Salesforce solutions for
                      Healthcare Payers or Providers
                    </li>
                    <li>
                      Functional experience working with system integrations using
                      the API form within the Salesforce platform in addition to
                      integrations with other systems using middleware such as
                      Mulesoft
                    </li>
                    <li>
                      Health Cloud implementation, Salesforce Lightning, Salesforce
                      Configuration, Customization, Service Cloud Development ,
                      Integration with 3rd party systems and custom development
                    </li>
                    <li>
                      Assist in defining, estimating, and shaping technical
                      solutions using best practices
                    </li>
                    <li>
                      Support users & Business Analysts to troubleshoot application
                      issues and develop creative solutions to support business
                      needs
                    </li>
                    <li>
                      Lead and manage the design, configuration, and deployment
                    </li>
                    <li>
                      Monitor new Salesforce release features and functionality and
                      provide recommendations for process improvements
                    </li>
                  </ul>
                  <h3 className="qualifications-title">Qualifications</h3>

                  <ul className="qualifications-text">
                    <li>
                      Must have Experience in Salesforce Health Cloud as a
                      Salesforce Administrator*
                    </li>
                    <li>
                      Very good working functional and technical knowledge of at
                      least 6 Salesforce products e.g: Service Cloud, Health Cloud ,
                      Experience Cloud etc.
                    </li>

                    <li>
                      Experience in the US Healthcare System and Pharmaceutical
                      Patient Services
                    </li>

                    <li>
                      Experienced in writing technical documentation such as a
                      design document
                    </li>
                    <li>Well versed with Agile ways of working (Scrum)</li>
                    <li>
                      Experience in the US Healthcare System and Pharmaceutical
                      Patient Services
                    </li>
                    <li>Excellent communication skills</li>
                    <li>Familiarity with Agile frameworks is a plus</li>
                    <li>Ability to commit to a minimum of 4+ hour work weeks</li>
                    <li>
                      Ability to attend weekly standup meeting (conference call with
                      desktop/ laptop access for screen sharing)
                    </li>
                    <li>HealthTech experience is a plus</li>
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

export default It;
