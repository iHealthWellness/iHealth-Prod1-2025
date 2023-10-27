import React from "react";
import "./index.css";

function index() {
  return (
    <div>
    <div className="heading-container">
      <h1>Living with Neurofibromotisis</h1>
      <p className="nf-paragraph">
        A comprehensive web resource dedicated to providing support,
        information,<br /> and resources for individuals and families affected by
        neurofibromatosis <br /> (NF). It servers as a hub for those navigating the
        challenges associated with<br /> NF, offering a wealth of valuable content.
      </p>
      <div className="nf-btn-container">
        <button className="nf-btn">Sign-Up for Registry</button>
        <button className="nf-btn">Take the survey</button>
      </div>
      
    </div><div className="horizontal-block"></div>
    </div>
  );
}

export default index;
