import React from "react";
import "./Hiring.css";
import { BntTab } from "./ButtonTab";
import plusbtn from "src/Assets/Icons/plus-circle.png";
import minusbtn from "src/Assets/Icons/minus-circle.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const Copywriter = () => {
  const [copywritingVisible, setCopywritingVisible] = useState(false);
  const toggleCopywriting = () => {
    setCopywritingVisible((prev) => !prev);
  };

  return (
    <div className="layerTwo-tab">
      <div>
        <div className="flex-tab">
          <h3 className="Text-header SN-D-H3-24" onClick={toggleCopywriting}>
            COPYWRITING
          </h3>
          <BntTab
            icon={copywritingVisible ? minusbtn : plusbtn}
            onClick={toggleCopywriting}
          />
        </div>
        <div className="job-body">
          {copywritingVisible && (
            <div className="grid">
              <Link
                className="grid-title link-text SN-D-T-M-P-16"
                to="https://app.dover.io/apply/2d71c19b-3348-4bae-bbc2-a5ea3d500bc7/94bee10b-1688-4b31-a4ab-fa31169f8a58/?rs=15190316"
              >
                Copywriter
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

export default Copywriter;
