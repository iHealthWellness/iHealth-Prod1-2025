import React from "react";
import NF1 from "src/Assets/Images/understandingnf.jpg";
import NF2 from "src/Assets/Images/surveynow.jpg";
import NF3 from "src/Assets/Images/signupregistry.jpg";
import { HashLink as Link } from "react-router-hash-link";
import "./index.css";
function index({ openExternalLink }) {
  return (
    <div>
      <div className="circle-img-container ">
        <div className="circle-img SN-T-H2-30">
          <Link
            style={{ color: "inherit", textDecoration: "none" }}
            to="#understand-nf"
          >
            <img className="circle-img1 image" src={NF1} />
            <p className="img-txt1">
              Understanding<p>NF</p>
            </p>
          </Link>
        </div>
        <div className="circle-img SN-T-H2-30">
          <Link
            style={{ color: "inherit", textDecoration: "none" }}
            to="#take-survey"
          >
            <img className="circle-img2  image" src={NF2} />
            <p className="img-txt2">
              Survey Now: <p>Clinical Trials</p>
            </p>
          </Link>
        </div>
        <div className="circle-img SN-T-H2-30">
          <img
            onClick={openExternalLink}
            className="circle-img3 image"
            src={NF3}
          />
          <p className="img-txt3">
            Sign-Up: NF <p>Registry</p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default index;
