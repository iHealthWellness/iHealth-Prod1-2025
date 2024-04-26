import React from "react";
import { BntTab } from "./ButtonTab";
import "./Hiring.css";
import plusbtn from "src/Assets/Icons/plus-circle.png";
import minusbtn from "src/Assets/Icons/minus-circle.png";
import { Link } from "react-router-dom";

import { useState } from "react";

const Marketing = () => {
  const [marketVisible, setMarketVisible] = useState(false);
  const toggleMarket = () => {
    setMarketVisible((prev) => !prev);
  };

  return (
    <div className="marketing">
      <div className="layerTwo-tab">
        <div>
          <div className="flex-tab">
            <h3 className="Text-header" onClick={toggleMarket}>
              MARKETING & PUBLIC RELATION{" "}
            </h3>
            <BntTab
              icon={marketVisible ? minusbtn : plusbtn}
              onClick={toggleMarket}
            />
          </div>
          <div className="job-body">
            {marketVisible && (
              <div className="grid">
                <Link
                  className="grid-title link-text"
                  to="https://app.dover.io/apply/2d71c19b-3348-4bae-bbc2-a5ea3d500bc7/d7c640ff-badf-4212-b017-c41b2e2372f1/?rs=15190316"
                >
                  Graphic Design: Social Media Content Development
                </Link>
                <h2 className="grid-text">Remote</h2>
              </div>
            )}
            {marketVisible && <hr />}
          </div>
          <div className="job-body">
            {marketVisible && (
              <div className="grid">
                <Link
                  className="grid-title link-text"
                  to="https://app.dover.io/apply/2d71c19b-3348-4bae-bbc2-a5ea3d500bc7/65f96ca1-3e64-4171-b4c2-c5f982df66e0/?rs=15190316"
                >
                  Marketing and Outreach
                </Link>
                <h2 className="grid-text">Remote</h2>
              </div>
            )}

            <hr />
          </div>

          <div className="job-body">
            {marketVisible && (
              <div className="grid">
                <Link
                  className="grid-title link-text"
                  to="https://app.dover.io/apply/2d71c19b-3348-4bae-bbc2-a5ea3d500bc7/81ab6de5-5b21-4629-98a6-58c98ee81140/?rs=15190316"
                >
                  Marketing Specialist
                </Link>
                <h2 className="grid-text">Remote</h2>
              </div>
            )}
            {marketVisible && <hr />}
          </div>

          <div className="job-body">
            {marketVisible && (
              <div className="grid">
                <Link
                  className="grid-title link-text"
                  to="https://app.dover.io/apply/2d71c19b-3348-4bae-bbc2-a5ea3d500bc7/81ab6de5-5b21-4629-98a6-58c98ee81140/?rs=15190316"
                >
                  Marketing Strategy Consultant
                </Link>
                <h2 className="grid-text">Remote</h2>
              </div>
            )}

            {marketVisible && <hr />}
          </div>

          <div className="job-body">
            {marketVisible && (
              <div className="grid">
                <Link
                  className="grid-title link-text"
                  to="https://app.dover.io/apply/2d71c19b-3348-4bae-bbc2-a5ea3d500bc7/b6b37f2c-ee36-4b1e-9d68-cdaaa9e90de0/?rs=15190316"
                >
                  Social Media and Community Specialist
                </Link>
                <h2 className="grid-text">Remote</h2>
              </div>
            )}

            {marketVisible && <hr />}
          </div>
          <div className="job-body">
            {marketVisible && (
              <div className="grid">
                <Link
                  className="grid-title link-text"
                  to="https://app.dover.io/apply/2d71c19b-3348-4bae-bbc2-a5ea3d500bc7/eae90aa0-293c-4489-9e7c-c918cff6791d/?rs=15190316"
                >
                  TikTok Content Development
                </Link>
                <h2 className="grid-text">Remote</h2>
              </div>
            )}

            {marketVisible && <hr />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketing;
