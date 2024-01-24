import React from "react";
import "./index.css";
import { HashLink as Link } from "react-router-hash-link";
function index({ openExternalLink }) {
  return (
    <div className="heading-container">
      <h1 className="SN-D-H1-48">Living with Neurofibromotisis (NF)</h1>
      <p className="nf-paragraph SN-D-P-20">
        A comprehensive web resource dedicated to providing support,
        information, and resources for individuals and families affected by
        neurofibromatosis (NF). It serves as a hub for those navigating the
        challenges associated with NF, offering a wealth of valuable content.
      </p>
      <div className="nf-btn-container">
        <button onClick={openExternalLink} className="nf-btn SN-D-T-M-B-16">
          Sign-Up for Registry
        </button>
        <Link to="#take-survey ">
          <button className="nf-btn SN-D-T-M-B-16">Survey Now</button>
        </Link>
        <Link to="#understand-nf">
          <button className="nf-btn SN-D-T-M-B-16">Understanding NF</button>
        </Link>
      </div>
    </div>
  );
}

export default index;
