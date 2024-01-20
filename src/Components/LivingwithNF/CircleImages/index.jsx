import React from "react";
import NF1 from "src/Assets/Images/understandingnf.jpg";
import NF2 from "src/Assets/Images/surveynow.jpg";
import NF3 from "src/Assets/Images/signupregistry.jpg";
import "./index.css";
function index() {
  return (
    <div>
      <div className="circle-img-container">
        <div className="circle-img ">
          <img className="circle-img1 image" src={NF1} />
          <p className="img-txt1">
            Understanding<p>NF</p>
          </p>
        </div>
        <div className="circle-img">
          <img className="circle-img2 image" src={NF2} />
          <p className="img-txt2">
            Survey Now: <p>Clinical Trials</p>
          </p>
        </div>
        <div className="circle-img">
          <img className="circle-img3 image" src={NF3} />
          <p className="img-txt3">
            Sign-Up: NF <p>Registry</p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default index;
