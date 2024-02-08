import React from "react";
import "./index.css";
import { HashLink as Link } from "react-router-hash-link";
import CircleImages from "../CircleImages/index";
function index({ openExternalLink, underConstruction }) {
  return (
    <div className="heading-container">
      <h1 className="SN-D-H1-48">Living with Neurofibromatosis (NF)</h1>
      <p className="nf-paragraph SN-D-P-20">
        A comprehensive web resource dedicated to providing support,
        information, and resources for individuals and families affected by
        neurofibromatosis (NF). It serves as a hub for those navigating the
        challenges associated with NF, offering a wealth of valuable content.
      </p>
      {/* <div className="nf-btn-container">
        <Link to="#understand-nf">
          <button className="nf-btn SN-D-T-M-B-16">Understanding NF</button>
        </Link>
        <button onClick={underConstruction} className="nf-btn SN-D-T-M-B-16">
          Survey Now
        </button>
        <button onClick={openExternalLink} className="nf-btn SN-D-T-M-B-16">
          Sign-Up for Registry
        </button>
      </div> */}
      <CircleImages openExternalLink={openExternalLink} />
    </div>
  );
}

export default index;
