import React from "react";
import { BntTab } from "./ButtonTab";
import "./Hiring.css";
import plusbtn from "src/Assets/Icons/plus.png";
import minusbtn from "src/Assets/Icons/minus.png";
import { Link } from "react-router-dom";

import { useState } from "react";
const Design = () => {
  const [designVisible, setDesignVisible] = useState(false);

  const toggleDesign = () => {
    setDesignVisible((prev) => !prev);
  };

  return (
    <div className="layerOne-tab">
      <div>
        <div className="flex-tab">
          <h3 className="Text-header" onClick={toggleDesign}>
            DESIGN
          </h3>
          <BntTab
            icon={designVisible ? minusbtn : plusbtn}
            onClick={toggleDesign}
          />
        </div>

        <div className="job-body">
          {designVisible && (
            <div className="grid">
              <Link
                className="grid-title link-text"
                to="https://app.dover.io/apply/2d71c19b-3348-4bae-bbc2-a5ea3d500bc7/2d41006d-e9d3-4df5-8c03-e45b7e2cc703/?rs=15190316"
              >
                UX Researcher
              </Link>
              <h2 className="grid-text">Remote</h2>
            </div>
          )}

          <hr />
        </div>
        <div className="job-body">
          {designVisible && (
            <div className="grid">
              <Link
                className="grid-title link-text"
                to="https://app.dover.io/apply/2d71c19b-3348-4bae-bbc2-a5ea3d500bc7/34411dfd-56a2-4f48-b68d-4a3120346bf3/?rs=15190316"
              >
                UX/UI Designer
              </Link>
              <h2 className="grid-text">Remote</h2>
            </div>
          )}
          {designVisible && <hr />}
        </div>
      </div>
    </div>
  );
};

export default Design;
