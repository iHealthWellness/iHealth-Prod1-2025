import React from "react";
import { BntTab } from "./ButtonTab";
import "./Hiring.css";
import plusbtn from "src/Assets/Icons/plus.png";
import minusbtn from "src/Assets/Icons/minus.png";
import { Link } from "react-router-dom";


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

  const [operationsVisible, setOperationsVisible] = useState(false);


  const toggleAccordion = (content) => (e) => {
    setAccordion((prev) => ({ ...prev, [content]: !prev[content] }));
  };

  const toggleOperations = () => {
    setOperationsVisible((prev) => !prev);
  };

  return (
    <div className="layerTwo-tab">
      <div>
        <div className="flex-tab">
          <h3 className="Text-header" onClick={toggleOperations}>RESEARCH, INNOVATION & OPERATIONS</h3>
          <BntTab
            icon={operationsVisible ? minusbtn : plusbtn}
            onClick={toggleOperations}
          />
        </div>

        <div className="job-body">
          {operationsVisible && (
            <div className="grid">
              <Link className="grid-title link-text" to="https://app.dover.io/apply/2d71c19b-3348-4bae-bbc2-a5ea3d500bc7/589889db-07cc-4171-a31d-4cac8e767b8a/?rs=15190316">Business Development Specialist, Clinical Trials</Link>
              <h2 className="grid-text" onClick={toggleAccordion("aspect")}>Remote</h2>
            </div>
          )}

          <hr />

          <div className="job-body">
            {operationsVisible && (
              <div className="grid">
                <Link className="grid-title link-text" to="https://app.dover.io/apply/2d71c19b-3348-4bae-bbc2-a5ea3d500bc7/22206e02-d895-4af3-a569-3931987ac1f3/?rs=15190316">Clinical Integration Specialist</Link>
                <h2 className="grid-text" onClick={toggleAccordion("looking")}>Remote</h2>
              </div>
            )}

            {operationsVisible && <hr />}

          </div>
          <div className="job-body">
            {operationsVisible && (
              <div className="grid">
                <Link className="grid-title link-text" to="https://app.dover.io/apply/2d71c19b-3348-4bae-bbc2-a5ea3d500bc7/5f870321-ef28-4e29-877b-af3391ed4972/?rs=15190316">Health Cloud Infrastructure and Integration Specialist</Link>
                <h2 className="grid-text" onClick={toggleAccordion("viewing")}>Remote</h2>
              </div>
            )}

            {operationsVisible && <hr />}


          </div>
          <div className="job-body">
            {operationsVisible && (
              <div className="grid">
                <Link className="grid-title link-text" to="https://app.dover.io/apply/2d71c19b-3348-4bae-bbc2-a5ea3d500bc7/2159acb8-99fa-4bbc-8809-96be312ca9cd/?rs=15190316">Physician Integration Specialist</Link>
                <h2 className="grid-text" onClick={toggleAccordion("glimpse")}>Remote</h2>
              </div>
            )}

            {operationsVisible && <hr />}
            

          </div>
          <div className="job-body">
            {operationsVisible && (
              <div className="grid">
                <Link className="grid-title link-text" to="https://app.dover.io/apply/2d71c19b-3348-4bae-bbc2-a5ea3d500bc7/dbfc6a41-3f0f-48dd-a20e-8ed9fca4cf10/?rs=15190316">Research Analyst, Research and Development</Link>
                <h2 className="grid-text" onClick={toggleAccordion("outlook")}>Remote</h2>
              </div>
            )}

            {operationsVisible && <hr />}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Operations;
