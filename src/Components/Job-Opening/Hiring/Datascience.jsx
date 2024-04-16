import React from "react";
import { BntTab } from "./ButtonTab";
import "./Hiring.css";
import plusbtn from "src/Assets/Icons/plus.png";
import minusbtn from "src/Assets/Icons/minus.png";
import { Link } from "react-router-dom";

import { useState } from "react";

const Datascience = () => {
  const [datasciVisible, setDatasciVisible] = useState(false);
  const toggleDatasci = () => {
    setDatasciVisible((prev) => !prev);
  };

  return (
    <div className="layerOne-tab">
      <div>
        <div className="flex-tab">
          <h3 className="Text-header" onClick={toggleDatasci}>
            DATA SCIENCE
          </h3>
          <BntTab
            icon={datasciVisible ? minusbtn : plusbtn}
            onClick={toggleDatasci}
          />
        </div>
        <div className="job-body">
          {datasciVisible && (
            <div className="grid">
              <Link
                className="grid-title link-text"
                to="https://app.dover.io/apply/2d71c19b-3348-4bae-bbc2-a5ea3d500bc7/be17bf3c-1d49-4188-8f1b-93ae51e11e68/?rs=15190316"
              >
                Web Scraping Focus Data Engineer
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

export default Datascience;
