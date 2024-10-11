import "./index.css";
import React from "react";

function index({ openExternalLink }) {
  return (
    <div
      id="signup-reg"
      className="animated-text signup-container nf-registery-signup"
    >
      <div className="enroll-content1">
        <h1 className="signup-heading D-H1-32">
          NF Registry: <span className="light-blue-font D-H3-24">Sign-Up</span>
        </h1>

        <button className="nf-btn D-P-20" onClick={openExternalLink}>
          Sign-Up for Registry
        </button>
      </div>
      <div className="enroll-content2 D-P-20">
        <p>
          The NF Registry is a comprehensive database that includes individuals
          meeting the diagnostic criteria for any of the three NF conditions.
        </p>
        <p>
          By participating, patients and their families contribute crucial data
          for ongoing research and gain access to the latest treatment studies.
          It's a secure, user-friendly platform, and joining is as simple as
          visiting www.nfregistry.org.
        </p>
        <p>
          With over 7,000 registrants from 71 countries, the registry serves as
          a vital resource for researchers and healthcare professionals,
          fostering global collaboration in the study and understanding of
          Neurofibromatosis. Participants' confidentiality and privacy are of
          utmost priority, ensuring a secure environment for valuable data
          collection and analysis.
        </p>
        <p>Publisher: Children's Tumor Foundation (CTF)</p>
      </div>
    </div>
  );
}

export default index;
