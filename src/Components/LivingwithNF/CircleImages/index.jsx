import React from "react";
import NF1 from "src/Assets/Images/understandingnf.jpg";
import NF2 from "src/Assets/Images/surveynow.jpg";
import NF3 from "src/Assets/Images/signupregistry.jpg";
import { HashLink as Link } from "react-router-hash-link";
import "./index.css";
function index({ openExternalLink }) {
  return (
    <div className="main-circle-container">
      <Link
        style={{ color: "inherit", textDecoration: "none" }}
        to="#understand-nf"
      >
        <div className="circle-img SN-T-H2-30">
          <div className="inside-circle-container">
            <img className="image" src={NF1} />
            <p className="img-txt">
              Understanding<p>NF</p>
            </p>
          </div>
        </div>
      </Link>
      <Link
        style={{ color: "inherit", textDecoration: "none" }}
        to="#take-survey"
      >
        <div className="circle-img SN-T-H2-30">
          <div className="inside-circle-container">
            <img className="image" src={NF2} />
            <p className="img-txt">
              Survey Now: <p>Clinical Trials</p>
            </p>
          </div>
        </div>
      </Link>
      <div className="circle-img SN-T-H2-30">
        <div className="inside-circle-container">
          <img onClick={openExternalLink} className="image" src={NF3} />
          <p className="img-txt">
            Sign-Up: NF <p>Registry</p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default index;
