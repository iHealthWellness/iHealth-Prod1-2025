import React from "react";
import { BntTab } from "./ButtonTab";
import "./Hiring.css";
import plusbtn from "src/Assets/Icons/plus-circle.png";
import minusbtn from "src/Assets/Icons/minus-circle.png";
import { Link } from "react-router-dom";

import { useState } from "react";

const Development = () => {
  const [developmentVisible, setDevelopmentVisible] = useState(false);

  const toggleDevelopment = () => {
    setDevelopmentVisible((prev) => !prev);
  };

  return (
    <div className="layerTwo-tab">
      <div>
        <div className="flex-tab">
          <h3 className="Text-header SN-D-H3-24" onClick={toggleDevelopment}>
            DEVELOPMENT
          </h3>
          <BntTab
            icon={developmentVisible ? minusbtn : plusbtn}
            onClick={toggleDevelopment}
          />
        </div>

        <div className="job-body">
          {developmentVisible && (
            <div className="grid">
              <Link
                className="grid-title link-text SN-D-T-M-P-16"
                to="https://app.dover.io/apply/2d71c19b-3348-4bae-bbc2-a5ea3d500bc7/6cbda871-fb60-401b-a248-29b924886d0a/?rs=15190316"
              >
                EPIC Interface / Integration Specialist
              </Link>
              <h2 className="grid-text SN-D-T-M-P-16">Remote</h2>
            </div>
          )}

          <hr />
        </div>
        <div className="job-body">
          {developmentVisible && (
            <div className="grid">
              <Link
                className="grid-title link-text SN-D-T-M-P-16"
                to="https://app.dover.io/apply/2d71c19b-3348-4bae-bbc2-a5ea3d500bc7/6e14d27b-0094-4d28-9222-81a90652a70e/?rs=15190316"
              >
                Principal Back-End Engineer
              </Link>
              <h2 className="grid-text SN-D-T-M-P-16">Remote</h2>
            </div>
          )}

          {developmentVisible && <hr />}
        </div>
        <div className="job-body">
          {developmentVisible && (
            <div className="grid">
              <Link
                className="grid-title link-text SN-D-T-M-P-16"
                to="https://app.dover.io/apply/2d71c19b-3348-4bae-bbc2-a5ea3d500bc7/9853f94f-43ec-4c9f-a2e6-4dd108cc9738/?rs=15190316"
              >
                Principal Front-End Engineer
              </Link>
              <h2 className="grid-text SN-D-T-M-P-16">Remote</h2>
            </div>
          )}

          {developmentVisible && <hr />}
        </div>
        <div className="job-body">
          {developmentVisible && (
            <div className="grid">
              <Link
                className="grid-title link-text SN-D-T-M-P-16"
                to="https://app.dover.io/apply/2d71c19b-3348-4bae-bbc2-a5ea3d500bc7/c2c8b7ad-2f62-40d3-87c4-b6e10667ccc6/?rs=15190316"
              >
                Principal Full-Stack Engineer
              </Link>
              <h2 className="grid-text SN-D-T-M-P-16">Remote</h2>
            </div>
          )}

          {developmentVisible && <hr />}
        </div>
        <div className="job-body">
          {developmentVisible && (
            <div className="grid">
              <Link
                className="grid-title link-text SN-D-T-M-P-16"
                to="https://app.dover.io/apply/2d71c19b-3348-4bae-bbc2-a5ea3d500bc7/6a99fdf3-9748-40b5-960d-490b62133c9c/?rs=15190316"
              >
                Senior Platform Developer
              </Link>
              <h2 className="grid-text SN-D-T-M-P-16">Remote</h2>
            </div>
          )}

          {developmentVisible && <hr />}
        </div>
        <div className="job-body">
          {developmentVisible && (
            <div className="grid">
              <Link
                className="grid-title link-text SN-D-T-M-P-16"
                to="https://app.dover.io/apply/2d71c19b-3348-4bae-bbc2-a5ea3d500bc7/56e84003-80ce-41fd-8f73-9c8f98e534e7/?rs=15190316"
              >
                Senior Software Engineer
              </Link>
              <h2 className="grid-text SN-D-T-M-P-16">Remote</h2>
            </div>
          )}

          {developmentVisible && <hr />}
        </div>
      </div>
    </div>
  );
};

export default Development;
