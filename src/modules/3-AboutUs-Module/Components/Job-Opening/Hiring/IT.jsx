import React from "react";
import { BntTab } from "./ButtonTab";
import "./Hiring.css";
import plusbtn from "src/Assets/Icons/plus-circle.png";
import minusbtn from "src/Assets/Icons/minus-circle.png";
import { Link } from "react-router-dom";

import { useState } from "react";

const It = () => {
  const [itVisible, setItVisible] = useState(false);
  const toggleIt = () => {
    setItVisible((prev) => !prev);
  };

  return (
    <div className="layerTwo-tab">
      <div>
        <div className="flex-tab">
          <h3 className="Text-header SN-D-H3-24" onClick={toggleIt}>
            IT INFRASTRUCTURE
          </h3>
          <BntTab icon={itVisible ? minusbtn : plusbtn} onClick={toggleIt} />
        </div>

        <div className="job-body">
          {itVisible && (
            <div className="grid">
              <Link
                className="grid-title link-text SN-D-T-M-P-16"
                to="https://app.dover.io/apply/2d71c19b-3348-4bae-bbc2-a5ea3d500bc7/ba904f04-004c-4d66-b9a3-5dddfb993e5a/?rs=15190316"
              >
                Salesforce Architect (Cloud Health Implementation Expert)
              </Link>
              <h2 className="grid-text SN-D-T-M-P-16">Remote</h2>
            </div>
          )}

          <hr />
        </div>
      </div>
    </div>
  );
};

export default It;
