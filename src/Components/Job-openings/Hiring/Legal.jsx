import React from "react";
import { BntTab } from "./ButtonTab";
import { ArrowTab } from "./ButtonTab";
import "./Hiring.css";
import plusbtn from "src/Assets/Icons/plus.png";
import minusbtn from "src/Assets/Icons/minus.png";
// import topArrow from "src/Assets/Icons/iconone.png";
// import downArrow from "src/Assets/Icons/icontwo.png";

import { useState } from "react";

const Legal = () => {
  const [accordion, setAccordion] = useState({
    privacy: false,
    seen: false,
    stretch: false,
  });

  const [legalVisible, setLegalVisible] = useState(false);

  const toggleAccordion = (content) => (e) => {
    setAccordion((prev) => ({ ...prev, [content]: !prev[content] }));
  };

  const toggleLegal = () => {
    setLegalVisible((prev) => !prev);
  };

  return (
    <div className="legal">
      <div className="layerOne-tab">
        <div>
          <div className="flex-tab">
            <h3 className="Text-header" onClick={toggleLegal}>LEGAL & COMPLIANCE</h3>
            <BntTab
              icon={legalVisible ? minusbtn : plusbtn}
              onClick={toggleLegal}
            />
          </div>

          <div className="job-body">
            {legalVisible && (
              <div className="grid">
                <h2 className="grid-title">Corporate Attorney</h2>
                <h2 className="grid-text">Remote</h2>
                <ArrowTab
                  icon={accordion.seen}
                  onClick={toggleAccordion("seen")}
                />
              </div>
            )}

            <hr />
            {legalVisible && (<div>
              {accordion.seen && (
                <div className="text-tab-flow">
                  <h2 className="description-title">Description</h2>
                  <p className="description-text">
                    We are an 'early stage' pre-money nonprofit/ tech startup
                    preparing for a proof-of-concept launch / seed-raise seeking a
                    PRO BONO NON-PROFIT/CORPORATE ATTORNEY to assist in all
                    aspects of the management and administration of Non-profit
                    formation, regulation and compliance.
                  </p>
                  <h3 className="responsibilities-title">Responsibilities</h3>
                  <ul className="responsibilities-text">
                    <li>
                      Advising as to the best type of entity (e.g. nonprofit
                      corporation, nonprofit LLC, regular LLC with a charitable
                      purpose, unincorporated nonprofit association)
                    </li>
                    <li>
                      Drafting the language for the formation and governing
                      documents so that the nonprofit will qualify for tax-exempt
                      status
                    </li>
                    <li>
                      Helping to choose and protect the nonprofit’s name
                      Explaining the role of the Registered Agent and recommending
                      whether to use a professional Registered Agent
                    </li>
                    <li>Filing formation documents</li>
                    <li>Drafting governing documents</li>
                    <li>Helping to obtain necessary permits and registrations</li>
                  </ul>
                  <h3 className="qualifications-title">Qualifications</h3>
                  <ul className="qualifications-text">
                    <li>
                      J.D. from an ABA-accredited law school is required; must be
                      admitted to the New York Bar • The ideal candidate will have
                      a minimum of five years of litigation experience related to
                      nonprofit in a law firm and/or legal services organization
                      (and preferably both)
                    </li>
                    <li>Non-profit formation, regulation and compliance</li>
                    <li>
                      Taxation, particularly taxation of non-profit organization
                    </li>
                    <li>
                      HealthTech experience is a plusThrough your pro-bono work,
                      you will not only continue to demonstrate your current
                      skills while gaining some new ones, practice teamwork, make
                      new friends and develop professional connections in a
                      professional setting, but you will also have the opportunity
                      to demonstrate what companies value in ways other than paid
                      employment: ability to get things done and ability to work
                      as a team.Future Salary would be promised for employees
                      (after seed funding round).Join us, you win, we both win!!
                      BECOME A VOLUNTEER
                    </li>
                  </ul>

                  <p className="apply-text">
                    How to Apply: To apply for any open position, please contact
                    HR at hr-team@ihealthwellness.one
                  </p>
                </div>
              )}
            </div>)}

          </div>
          <div className="job-body">
            {legalVisible && (
              <div className="grid">
                <h2 className="grid-title">
                  Healthcare Regulatory Compliance Specialist
                </h2>
                <h2 className="grid-text">Remote</h2>
                <ArrowTab
                  icon={accordion.stretch}
                  onClick={toggleAccordion("stretch")}
                />
              </div>
            )}

            {legalVisible && <hr />}

            {legalVisible && (<div>
              {accordion.stretch && (
                <div className="text-tab-flow">
                  <h2 className="description-title">Description</h2>
                  <p className="description-text">
                    We are an 'early stage' pre-money nonprofit/ tech startup
                    preparing for a proof-of-concept launch / seed-raise looking
                    to recruit VOLUNTEERS (unpaid) as Healthcare Regulatory
                    Compliance Specialist. Future Salary would be promised for
                    employees (after seed funding round).
                  </p>

                  <h3 className="responsibilities-title">Responsibilities</h3>
                  <ul className="responsibilities-text">
                    <li>
                      Review and monitor regulatory compliance needs across all
                      product lines to help with compliance, including but not
                      limited to data entry, maintenance of documents, audit
                      reports
                    </li>
                    <li>
                      Communicates compliance issues and findings identified
                      through audits and reviews
                    </li>
                    <li>
                      Conduct analyses of the business impacts posed by regulatory
                      requirements
                    </li>
                    <li>
                      Play an active role in conducting compliance risk
                      assessments as well as developing and supporting
                      implementation of mitigation plans regarding business
                      roadmap
                    </li>
                    <li>
                      Assist in investigations to the extent requested, including
                      conducting reviews of documentation, conducting interviews
                      and drafting reports
                    </li>
                    <li>
                      Ensures Regulatory and legal compliance of all external
                      communications
                    </li>
                  </ul>
                  <h3 className="qualifications-title">Required Experience</h3>
                  <ul className="qualifications-text">
                    <li>
                      Previous experience working in a healthcare environment,
                      preferably with direct experience in Compliance
                    </li>
                    <li>
                      In-depth knowledge of industry standards and regulations,
                      such as GDPR, CCPA, HIPAA, and PCI-DSS
                    </li>
                    <li>
                      Experience in compiling, coordinating, and analyzing
                      regulatory requirement data • Ability to manage multiple
                      tasks and deliverables in a fast-paced environment
                    </li>
                    <li>
                      Strong verbal and written communication, interpersonal and
                      organizational skills
                    </li>
                    <li>
                      Excellent critical thinking and analytical skills, with a
                      passion for solving problems and creating solutions
                    </li>
                    <li>
                      Previous experience at a startup, HealthTech or consulting
                      company is a plus
                    </li>
                    <li>Ability to commit to a minimum of 4+ hour work weeks</li>{" "}
                    <li>
                      Ability to attend weekly standup meeting (conference call
                      with desktop/ laptop access for screen sharing)
                    </li>{" "}
                    <li>Fluent in English</li>
                  </ul>
                  <p className="note-text">
                    NOTE: Please note that candidates actively seeking
                    CPT/Internships are ineligible for this particular volunteer
                    position. Through your pro-bono work, you will not only
                    continue to demonstrate your current skills while gaining some
                    new ones, practice teamwork, make new friends and develop
                    professional connections in a professional setting, but you
                    will also have the opportunity to demonstrate what companies
                    value in ways other than paid employment: ability to get
                    things done and ability to work as a team.
                  </p>

                  <p className="note-text">Join us, you win, we both win!!"</p>

                  <p className="apply-text">
                    How to Apply: To apply for any open position, please contact
                    HR at hr-team@ihealthwellness.one
                  </p>
                </div>
              )}
            </div>)}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Legal;
