import React from "react";
import { BntTab } from "./ButtonTab";
import "./Hiring.css";
import plusbtn from "src/Assets/Icons/plus.png";
import minusbtn from "src/Assets/Icons/minus.png";
import { Link } from "react-router-dom";

import { useState } from "react";

const Cybersecurity = () => {
  const [cybersecurityVisible, setCybersecurityVisible] = useState(false);

  const toggleCybesecurity = () => {
    setCybersecurityVisible((prev) => !prev);
  };

  return (
    <div className="layerTwo-tab">
      <div>
        <div className="flex-tab">
          <h3 className="Text-header" onClick={toggleCybesecurity}>
            CYBERSECURITY AND DATA PRIVACY
          </h3>
          <BntTab
            icon={cybersecurityVisible ? minusbtn : plusbtn}
            onClick={toggleCybesecurity}
          />
        </div>
        <div className="job-body">
          {cybersecurityVisible && (
            <div className="grid">
              <Link
                className="grid-title link-text"
                to="https://app.dover.io/apply/2d71c19b-3348-4bae-bbc2-a5ea3d500bc7/e4f4eb1d-21f0-443b-a6b0-c9654f1d95e5/?rs=15190316"
              >
                Data Privacy and Security Specialist
              </Link>
              <h2 className="grid-text">Remote</h2>
            </div>
          )}

          <hr />
        </div>
      </div>
    </div>
  );
};

export default Cybersecurity;
