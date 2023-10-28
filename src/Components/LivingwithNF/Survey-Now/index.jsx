import "./index.css";
import survey from "src/Assets/Images/surveyclinicaltrials.jpg"
import React from 'react'

function index() {
  return (
    <div className="survey-container">
      <div className="survey-content">
         <h1 className="survey-heading">Survey Now: Clinical Trials</h1>
         <p>Join us in shaping the future of medicine-take the survey <br />and find your match in the world of clinical trials!</p>
         <button className="nf-btn">Take the survey!</button>
      </div>
     
       <img className="survey-img" src={survey} />
    </div>
  )
}

export default index
