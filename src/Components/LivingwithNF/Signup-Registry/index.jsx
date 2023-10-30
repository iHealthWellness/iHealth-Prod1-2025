import "./index.css";
import React from "react";

function index() {
  const externalLink = "https://www.nfregistry.org";
  const openExternalLink = () => {
    window.open(externalLink, "_blank");
  };
  return (
    <div id="signup-reg" className="signup-container">
      <div className="enroll-content1">
        <h1 className="signup-heading">Sign-Up: NF Registry</h1>
        <p>
          The NF Registry is a comprehensive database that includes <br />
          individuals meeting the diagnostic criteria for any of the <br />{" "}
          three NF conditions.
        </p>
        <button className="nf-btn" onClick={openExternalLink}>
          Enroll
        </button>
      </div>
      <div className="enroll-content2">
        <p>
          By participating, patients and their families contribute crucial data
          for ongoing research and gain access to the latest treatment studies.
          It's a secure, user-friendly platform, and joining is as simple as
          visiting www.nfregistry.org.
          <br />
          <br />
        </p>
        <p>
          With over 7,000 registrants from 71 countries, the registry serves as
          a vital resource for researchers and healthcare professionals,
          fostering global collaboration in the study and understanding of
          Neurofibromatosis. Participants' confidentiality and privacy are of
          utmost priority, ensuring a secure environment for valuable data
          collection and analysis.
        </p>
        <br />
        <p>
          <span style={{ fontWeight: "600" }}>Publisher: </span>Children’s Tumor
          Foundation (CTF)
        </p>
      </div>
    </div>
  );
}

export default index;
