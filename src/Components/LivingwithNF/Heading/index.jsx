import React from "react";
import "./index.css";
import { HashLink as Link } from "react-router-hash-link";
function index() {
  return (
    <div>
      <div className="heading-container">
        <h1>Living with Neurofibromotisis</h1>
        <p className="nf-paragraph">
          A comprehensive web resource dedicated to providing support,
          information,
          <br /> and resources for individuals and families affected by
          neurofibromatosis <br /> (NF). It servers as a hub for those
          navigating the challenges associated with
          <br /> NF, offering a wealth of valuable content.
        </p>
        <div className="nf-btn-container">
          <Link to="#signup-reg">
            <button className="nf-btn">Sign-Up for Registry</button>
          </Link>
          <Link to="#take-survey">
            <button className="nf-btn">Take the survey</button>
          </Link>
        </div>
      </div>
      <div className="horizontal-block"></div>
    </div>
  );
}

export default index;
