import React from "react";
import { BntTab } from "./ButtonTab";
import "./Hiring.css";
import plusbtn from "src/Assets/Icons/plus.png";
import minusbtn from "src/Assets/Icons/minus.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const Project = () => {
  const [accordion, setAccordion] = useState({
    privacy: false,
    landscape: false,
    appearance: false,
  });

  const [projectVisible, setProjectVisible] = useState(false);

  const toggleAccordion = (content) => (e) => {
    setAccordion((prev) => ({ ...prev, [content]: !prev[content] }));
  };

  const toggleProject = () => {
    setProjectVisible((prev) => !prev);
  };

  return (
    <div className="layerTwo-tab">
      <div>
        <div className="flex-tab">
          <h3 className="Text-header" onClick={toggleProject}>
            PROJECT MANAGEMENT
          </h3>
          <BntTab
            icon={projectVisible ? minusbtn : plusbtn}
            onClick={toggleProject}
          />
        </div>
        <div className="job-body">
          {projectVisible && (
            <div className="grid">
              <Link className="grid-title link-text" to="https://app.dover.io/apply/2d71c19b-3348-4bae-bbc2-a5ea3d500bc7/6986802d-d30e-44da-8736-e78fbf8c516a/?rs=15190316">Parliamentary Procedure Specialist</Link>
              <h2 className="grid-text" onClick={toggleAccordion("appearance")}>Remote</h2>
            </div>
          )}

          <hr />
        </div>

        <div className="job-body">
          {projectVisible && (
            <div className="grid">
              <Link className="grid-title link-text" to="https://app.dover.io/apply/2d71c19b-3348-4bae-bbc2-a5ea3d500bc7/6f62d88d-203b-4752-9625-f0fdbf00b3b6/?rs=15190316">Project/ Agile Delivery Associate</Link>
              <h2 className="grid-text" onClick={toggleAccordion("landscape")}>Remote</h2>
            </div>
          )}

          {projectVisible && <hr />}

        </div>
      </div>
    </div>
  );
};

export default Project;
