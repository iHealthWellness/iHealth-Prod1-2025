import React from "react";
import { BntTab } from "./ButtonTab";
import "./Hiring.css";
import plusbtn from "src/Assets/Icons/plus-circle.png";
import minusbtn from "src/Assets/Icons/minus-circle.png";
import { Link } from "react-router-dom";

import { useState } from "react";

const Financial = () => {
  const [financialVisible, setFinancialVisible] = useState(false);

  const toggleFinancial = () => {
    setFinancialVisible((prev) => !prev);
  };

  return (
    <div className="layerTwo-tab">
      <div>
        <div className="flex-tab">
          <h3 className="Text-header SN-D-H3-24" onClick={toggleFinancial}>
            FINANCIAL MANAGEMENT
          </h3>
          <BntTab
            icon={financialVisible ? minusbtn : plusbtn}
            onClick={toggleFinancial}
          />
        </div>

        <div className="job-body">
          {financialVisible && (
            <div className="grid">
              <Link
                className="grid-title link-text SN-D-T-M-P-16"
                to="https://app.dover.io/apply/2d71c19b-3348-4bae-bbc2-a5ea3d500bc7/78181f16-7913-4f96-8d4a-ebbbc69d0d31/?rs=15190316"
              >
                Fundraiser/ Development Officer
              </Link>
              <h2 className="grid-text SN-D-T-M-P-16">Remote</h2>
            </div>
          )}

          {financialVisible && <hr />}
        </div>
        <div className="job-body">
          {financialVisible && (
            <div className="grid">
              <Link
                className="grid-title link-text SN-D-T-M-P-16"
                to="https://app.dover.io/apply/2d71c19b-3348-4bae-bbc2-a5ea3d500bc7/e3146e81-3c5f-4f0c-99dd-29652895b6bf/?rs=15190316"
              >
                Funding and Financial Specialist
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

export default Financial;
