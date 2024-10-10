import React from "react";
import { BntTab } from "./ButtonTab";
import "./Hiring.css";
import plusbtn from "src/Assets/Icons/plus-circle.png";
import minusbtn from "src/Assets/Icons/minus-circle.png";
import { Link } from "react-router-dom";

import { useState } from "react";

const Hr = () => {
  const [hrVisible, setHrVisible] = useState(false);

  const toggleHr = () => {
    setHrVisible((prev) => !prev);
  };

  return (
    <div className="layerTwo-tab">
      <div>
        <div className="flex-tab">
          <h3 className="Text-header" onClick={toggleHr}>
            HUMAN RESOURCES
          </h3>
          <BntTab icon={hrVisible ? minusbtn : plusbtn} onClick={toggleHr} />
        </div>

        <div className="job-body">
          {hrVisible && (
            <div className="grid">
              <Link
                className="grid-title link-text"
                to="https://app.dover.io/apply/2d71c19b-3348-4bae-bbc2-a5ea3d500bc7/12db37ec-9215-476d-9e42-37bfd863378d/?rs=15190316"
              >
                Human Resource Specialist/ Generalist
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

export default Hr;
