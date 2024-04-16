import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import icon from "src/Assets/Images/Hiring.jpg";

const Header = () => {
  return (
    <section className="openings-container" id="job-openings">
      <div className="container openings-tab">
        <img className="openings-img" src={icon} alt="" />

        {/* <div className="openings-side">
                    <h2 className="openings-side-h2">
                        Empower Change Through Volunteer Engagement!
                    </h2>
                    <h1 className="openings-side-h1">
                        Welcome to our Career Opportunities Page!
                    </h1>
                </div> */}
      </div>

      <div className="openings-titles container">
        <div className="openings-title">
          <h2 className="openings-title-h2">Volunteer From Anywhere</h2>

          <h1 className="openings-title-h1">Career Opportunities</h1>
          <h3 className="openings-title-h3">
          <Link
          className="grid-title link-text"
                to="/eeotest"
              >
                 Equal Employment Opportunity (EEO) Policy
              </Link>
          </h3>
        </div>
      </div>
    </section>
  );
};
export default Header;
