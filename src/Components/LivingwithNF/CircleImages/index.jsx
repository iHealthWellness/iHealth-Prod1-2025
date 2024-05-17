import React from "react";
import NF1 from "src/Assets/Images/understandingnf.jpg";
import NF2 from "src/Assets/Images/surveynow.jpg";
import NF3 from "src/Assets/Images/signupregistry.jpg";
import { HashLink as Link } from "react-router-hash-link";
import "./index.css";
import { useNavigate } from "react-router-dom";
function index({ openExternalLink }) {
  const navigate = useNavigate();

  const handleClick = (e) => {
    navigate("/nf-survey");
    window.scrollTo(0, 0);
  };
  return (
    <div className="main-circle-container">
      <Link
        style={{ color: "inherit", textDecoration: "none" }}
        to="#understand-nf"
      >
        <div className="circle-img SN-T-H3-24">
          <div className="inside-circle-container">
            <img className="image" src={NF1} />
            <p className="img-txt undestanding-nf">
              Understanding NF <p className='clinical-trials'>&nbsp;</p>
            </p>
          </div>
        </div>
      </Link>
        <div className="circle-img SN-T-H3-24">
          <div className="inside-circle-container">
            <img className="image" src={NF2} onClick={(e)=>handleClick(e)}/>
            <p className="img-txt" id='left-margin-fix'>
              Survey Now <p className='clinical-trials' onClick={(e)=>handleClick(e)}>Clinical Trials</p>
            </p>
          </div>
        </div>
      <div className="circle-img SN-T-H3-24">
        <div onClick={openExternalLink} className="inside-circle-container">
          <img className="image" src={NF3} />
          <p className="img-txt" id='left-margin-fix'>
          NF Registry<p className='clinical-trials'>Sign-Up</p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default index;
