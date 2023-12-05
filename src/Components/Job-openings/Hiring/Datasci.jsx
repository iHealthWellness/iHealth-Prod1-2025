import React from "react";
import { BntTab } from "./ButtonTab";
import { ArrowTab } from "./ButtonTab";
import "./Hiring.css";
import plusbtn from "src/Assets/Icons/plus.png";
import minusbtn from "src/Assets/Icons/minus.png";


import { useState } from "react";

const Datasci = () => {
  const [accordion, setAccordion] = useState({
    privacy: false,
    wide: false,
  });

  const [datasciVisible, setDatasciVisible] = useState(false);

  const toggleAccordion = (content) => (e) => {
    setAccordion((prev) => ({ ...prev, [content]: !prev[content] }));
  };

  const toggleDatasci = () => {
    setDatasciVisible((prev) => !prev);
  };

  return (
    <div className="layerOne-tab">
      <div>
        <div className="flex-tab">
          <h3 className="Text-header" onClick={toggleDatasci}>DATA SCIENCE</h3>
          <BntTab
            icon={datasciVisible ? minusbtn : plusbtn}
            onClick={toggleDatasci}
          />
        </div>
        <div className="job-body">
          {datasciVisible && (
            <div className="grid">
              <h2 className="grid-title" onClick={toggleAccordion("wide")}>Web Scraping Focus Data Engineer</h2>
              <h2 className="grid-text" onClick={toggleAccordion("wide")}>Remote</h2>
              <ArrowTab
                icon={accordion.wide}
                onClick={toggleAccordion("wide")}
              />
            </div>
          )}



          <hr />

          {datasciVisible && (
            <div>{accordion.wide && (
              <div className="text-tab-flow">
                <h2 className="description-title">Description</h2>
                <p className="description-text">
                  We are an 'early stage' pre-money nonprofit/ tech startup
                  preparing for a proof-of-concept launch / seed-raise looking to
                  recruit VOLUNTEERS (unpaid) as WEB SCRAPING FOCUSED DATA
                  ENGINEER.Future Salary would be promised for employees (after
                  seed funding round).We’re searching for talented data scientists
                  who are passionate about the acquisition of data with strong
                  skills and knowledge of web scraping, web services, file
                  transfers, and everything data.You’ll be helping to improve the
                  healthcare experience for our users by making it simpler and
                  more efficient for patients to book an appointment with and
                  visit a doctor.
                </p>
                <h3 className="responsibilities-title">Responsibilities</h3>
                <ul className="responsibilities-text">
                  <li>
                    Develop web crawling (scraping) strategies for specific
                    websites and other collection strategies for third-party data
                    sources
                  </li>
                  <li>
                    Configure data extraction and transformations in an individual
                    contributor role across multiple data sources
                  </li>
                  <li>
                    Ensure accurate delivery of data format and data frequency
                    with quality deliverables per specification
                  </li>
                  <li>Research the best sources for certain types of data</li>
                  <li>Review sources for feasibility</li>
                  <li>Implement those strategies</li>
                  <li>
                    Maintain existing data collection apps, especially when the
                    sources change
                  </li>
                  <li>
                    The most important aspect of crawl dev work is detail
                    orientation! This means picking up on weird deviations in
                    format, being thorough about testing on many different pages,
                    and so on
                  </li>
                </ul>
                <h3 className="qualifications-title">Qualifications</h3>
                <ul className="qualifications-text">
                  <li>Past experience working with web scraping</li>
                  <li>
                    Comfortable working with object-oriented programming,
                    experience following programming templates
                  </li>
                  <li>Understanding of stateless programming</li>
                  <li>
                    Trainability with standard project management software (e.g.
                    Jira) as well as internally-developed monitoring tools
                  </li>
                  <li>Detail Oriented</li>
                  <li>
                    Ability to focus on smaller, short-term projects more
                    important than long term ones
                  </li>
                  <li>
                    Ability to communicate effectively with other members of the
                    team
                  </li>
                  <li>
                    Previous experience at a startup or consulting company is a
                    plus
                  </li>

                  <li>Ability to commit to a minimum of 4+ hour work weeks</li>
                  <li>
                    Ability to attend weekly standup meeting (conference call with
                    desktop/ laptop access for screen sharing)
                  </li>
                  <li>
                    HealthTech experience is a plusJoin us, you win, we both win!!
                  </li>
                </ul>

                <p className="apply-text">
                  How to Apply: To apply for any open position, please contact HR
                  at hr-team@ihealthwellness.one
                </p>
              </div>
            )} </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Datasci;
