import React from "react";
import { BntTab } from "./ButtonTab";
import { ArrowTab } from "./ButtonTab";
import "./Hiring.css";
import plusbtn from "src/Assets/Icons/plus.png";
import minusbtn from "src/Assets/Icons/minus.png";
import topArrow from "src/Assets/Icons/icon.png";
import downArrow from "src/Assets/Icons/icontwo.png";

import { useState } from "react";

const Financial = () => {
  const [accordion, setAccordion] = useState({
    privacy: false,
    unshut: false,
    look: false,
  });

  const [financialVisible, setFinancialVisible] = useState(false);

  const toggleAccordion = (content) => (e) => {
    setAccordion((prev) => ({ ...prev, [content]: !prev[content] }));
  };

  const toggleFinancial = () => {
    setFinancialVisible((prev) => !prev); 
  };

  return (
    <div className="layerTwo-tab">
      <div>
        <div className="flex-tab">
          <h3 className="Text-header" onClick={toggleFinancial}>FINANCIAL MANAGEMENT</h3>
          <BntTab
            icon={financialVisible ? minusbtn : plusbtn}
            onClick={toggleFinancial}
          />
        </div>

        <div className="job-body">
          {financialVisible && (
            <div className="grid">
              <h2 className="grid-title">Funding and Financial Specialist</h2>
              <h2 className="grid-text">Remote</h2>
              <ArrowTab
                icon={accordion.unshut ? topArrow : downArrow}
                onClick={toggleAccordion("unshut")}
              />
            </div>
          )}

          <hr />

          {accordion.unshut && (
            <div className="text-tab-flow">
              <h2 className="description-title">Description</h2>
              <p className="description-text">
                We are an 'early stage' pre-money nonprofit/ tech startup
                preparing for a proof-of-concept launch / seed-raise looking to
                recruit VOLUNTEERS (unpaid) as FUNDING AND FINANCIAL SPECIALIST
                to perform data analysis, create financial plans and identify
                funding partners and investors. Future Salary would be promised
                for employees (after seed funding round).
              </p>
              <h3 className="responsibilities-title">Responsibilities</h3>
              <ul className="responsibilities-text">
                <li>
                  Financial planning: Develop financial projections (pitch deck:
                  revenue model & funding request)
                </li>
                <li>
                  Financing (raising money): Help identify areas of possible
                  fundraising opportunities which include but not limited to
                  Private Donors, GoFundMe, Grants, etc. to be used for office
                  equipment and other recurring expenses
                </li>
                <li>
                  (Future) Investment (spending money): Investing the firm’s
                  funds in projects and securities that provide high returns in
                  relation to their risks.
                </li>
              </ul>
              <h3 className="qualifications-title">Qualifications</h3>
              <ul className="qualifications-text">
                <li>
                  3+ years of experience in a finance/strategy role at a tech
                  company and/or progressive finance experience at a top
                  management consulting firm, investment bank, private equity/VC
                  fund
                </li>
                <li>
                  Excellent critical thinking and analytical skills, with a
                  formidable attention to detail, possessing strong
                  interpersonal communication skills
                </li>
                <li>
                  Bachelor's degree in Economics, Business, Finance, Accounting
                  or related field; MBA or CPA a plus
                </li>
                <li>
                  High aptitude and enthusiasm for complex problem solving,
                  utilizing financial modeling, including advanced Excel skills
                  (Power Query, Power Pivot, and Power BI are a plus)
                </li>
                <li>Fluent English (Advanced)</li>
                <li>
                  Previous experience at a startup or consulting company is a
                  plus
                </li>
                <li>Ability to commit to a minimum of 4+ hour work weeks</li>
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
        <div className="job-body">
          {accordion.privacy && (
            <div className="grid">
              <h2 className="grid-title">Fundraiser/ Development Officer</h2>
              <h2 className="grid-text">Remote</h2>
              <ArrowTab
                icon={accordion.look ? topArrow : downArrow}
                onClick={toggleAccordion("look")}
              />
            </div>
          )}

          {accordion.privacy && <hr />}
          {accordion.look && (
            <div className="text-tab-flow">
              <h2 className="description-title">Description</h2>
              <p className="description-text">
                We are an 'early stage' pre-money nonprofit/ tech startup
                preparing for a proof-of-concept launch / seed-raise looking to
                recruit VOLUNTEERS (unpaid) as a Fundraiser/ Development Officer
                who will develop a deep understanding of the organization and
                help us secure funding from a variety of donors and
                institutions. This is an exciting role on the front lines of our
                growth!
              </p>
              <h3 className="responsibilities-title">Responsibilities</h3>
              <ul className="responsibilities-text">
                <li>
                  Create and implement fundraising strategies that align with
                  iHealth’s mission and goals including identifying potential
                  funding sources and organizing fundraising campaigns
                </li>
                <li>
                  Research grant opportunities from foundations and government
                  agencies and draft compelling grant proposals to submit for
                  funding
                </li>
                <li>
                  Network and build relationship with potential donors,
                  foundations, and partners and gather support and ensure their
                  continued contributions to the organization
                </li>
                <li>
                  Organize and execute fundraising events to help attract donors
                  and spread awareness of iHealth’s mission the causes we
                  support
                </li>
                <li>
                  Keep track of fundraising activities and analyze success and
                  refine as needed, reporting results to leadership
                </li>
              </ul>
              <h3 className="qualifications-title">Qualifications</h3>
              <ul className="qualifications-text">
                <li>
                  3+ years of experience partnering with a non-profit in a
                  fundraising or development officer role
                </li>
                <li>
                  Knowledge of and experience in executing events both in-person
                  and online, understanding how to leverage volunteers and
                  delegate tasks
                </li>
                <li>
                  Strong interpersonal skills and the ability to build
                  relationships with both individuals and corporations
                </li>
                <li>
                  Experience writing proposals , event invitations, corporate
                  newsletters, and any additional written communication as
                  needed
                </li>
                <li>
                  Excellent critical thinking and analytical skills, with a
                  passion for solving problems and creating solutions
                </li>
                <li>
                  Previous experience or knowledge of non-profit or healthcare
                  organizations
                </li>
                <li>Ability to commit to a minimum of 4+ hour work weeks</li>
                <li>
                  Ability to attend weekly standup meeting (conference call with
                  desktop/ laptop access for screen sharing)
                </li>
                <li>Fluent in English</li>
              </ul>

              <p className="note-text">
                Through your pro-bono work, you will not only continue to
                demonstrate your current skills while gaining some new ones,
                practice teamwork, make new friends and develop professional
                connections in a professional setting, but you will also have
                the opportunity to demonstrate what companies value in ways
                other than paid employment: ability to get things done and
                ability to work as a team
              </p>

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

export default Financial;
