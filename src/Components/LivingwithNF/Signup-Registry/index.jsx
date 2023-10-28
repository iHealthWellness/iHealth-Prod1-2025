import "./index.css";
import React from 'react'

function index() {
  return (
    <div id="signup-reg" className="signup-container">
      <div className="enroll-content1">
         <h1 className="signup-heading">Sign-Up: NF Registry</h1>
         <p>The NF Registry is a comprehensive database that includes <br />individuals meeting the diagnostic criteria for any of the <br /> three NF conditions.</p>
         <button className="nf-btn">Enroll</button>
      </div>
      <div className="enroll-content2">
        <p>By participating, patients and their families contribute <br />crucial data for ongoing research and gain access to the latest treatment studies. It's a secure, user-friendly <br />platform, and joining is as simple as visiting www.nfregistry.org. <br /><br /></p>
        <p>With over 7,000 registrants from 71 countries, the <br />registry serves as a vital resource for researchers and <br />healthcare professionals, fostering global collaboration <br />in the study and understanding of Neurofibromatsis. <br />Participants' confidentiality and privacy are of utmost be   priority, ensuring a secure environment of valuable data <br />collection and analysis.</p><br />
        <p><span style={{ fontWeight: '600' }}>Publisher: </span>Childern's Tumor Foundation (CTF)</p>
      </div>
    </div>
  )
}

export default index
