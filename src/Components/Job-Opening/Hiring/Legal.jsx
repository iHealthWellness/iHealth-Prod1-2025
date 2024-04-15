import React from "react";
import { BntTab } from "./ButtonTab";
import "./Hiring.css";
import plusbtn from "src/Assets/Icons/plus.png";
import minusbtn from "src/Assets/Icons/minus.png";
import { Link } from "react-router-dom";

import { useState } from "react";

const Legal = () => {
  const [legalVisible, setLegalVisible] = useState(false);

  const toggleLegal = () => {
    setLegalVisible((prev) => !prev);
  };

  return (
    <div className="legal">
      <div className="layerOne-tab">
        <div>
          <div className="flex-tab">
            <h3 className="Text-header" onClick={toggleLegal}>
              LEGAL & COMPLIANCE
            </h3>
            <BntTab
              icon={legalVisible ? minusbtn : plusbtn}
              onClick={toggleLegal}
            />
          </div>

          <div className="job-body">
            {legalVisible && (
              <div className="grid">
                <Link
                  className="grid-title link-text"
                  to="https://app.dover.io/apply/2d71c19b-3348-4bae-bbc2-a5ea3d500bc7/3874eb95-22f3-4765-b95f-e96405900ad6/?rs=15190316"
                >
                  Corporate Attorney
                </Link>
                <h2 className="grid-text">Remote</h2>
              </div>
            )}

            <hr />
          </div>
          <div className="job-body">
            {legalVisible && (
              <div className="grid">
                <Link
                  className="grid-title link-text"
                  to="https://app.dover.io/apply/2d71c19b-3348-4bae-bbc2-a5ea3d500bc7/be38fc34-67a5-4ec8-b5d4-ea1cde222f01/?rs=15190316"
                >
                  Healthcare Regulatory Compliance Specialist
                </Link>
                <h2 className="grid-text">Remote</h2>
              </div>
            )}

            {legalVisible && <hr />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legal;
