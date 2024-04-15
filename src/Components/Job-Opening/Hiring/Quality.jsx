import React from "react";
import { BntTab } from "./ButtonTab";
import "./Hiring.css";
import plusbtn from "src/Assets/Icons/plus.png";
import minusbtn from "src/Assets/Icons/minus.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const Quality = () => {
  const [qualityVisible, setQualityVisible] = useState(false);

  const toggleQuality = () => {
    setQualityVisible((prev) => !prev);
  };

  return (
    <div className="layerTwo-tab">
      <div>
        <div className="flex-tab">
          <h3 className="Text-header" onClick={toggleQuality}>
            QUALITY ASSURANCE
          </h3>
          <BntTab
            icon={qualityVisible ? minusbtn : plusbtn}
            onClick={toggleQuality}
          />
        </div>

        <div className="job-body">
          {qualityVisible && (
            <div className="grid">
              <Link
                className="grid-title link-text"
                to="https://app.dover.io/apply/2d71c19b-3348-4bae-bbc2-a5ea3d500bc7/e9f689c9-db8c-4205-bd12-bcbce6642ad8/?rs=15190316"
              >
                BA/PM Engineer/Associate
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

export default Quality;
