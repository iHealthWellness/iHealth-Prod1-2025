import { useState } from "react";

import SurveyInformationCard from "../../Components/Home-Page/Layout/Information/InformationCards/SurveyInformationCard/index.jsx";
import SurveyForm from "../../Components/SurveyForm/SurveyForm.jsx";
import surveyVideo from "src/Assets/Images/survey-video.mp4";
import "./index.css";

const index = () => {
  const [openModal, setOpenModal] = useState(false);

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <div className="survey-main-container">
      <section className="hero">
        <header className="img-section">
          <div className="hero-content">
            <video autoPlay muted loop playsInline className="second-img">
              <source src={surveyVideo} type="video/mp4" />
            </video>
            <h2 className="SN-D-H3-36 visib prt-1">
              Advance Understanding and Help Others
              <p className="SN-D-H1-48 after-break">
                Survey Today, Thrive Tomorrow!
              </p>
            </h2>
            <h2 className="SN-D-H2-36 invis prt-1">
              Find Your Match:
              <p className="SN-D-H1-48 after-break">Change the Future</p>
            </h2>
          </div>
        </header>
      </section>
      <main>
        <h2 className="SN-D-H2-36 prt-1">
          Join a Clinical Trial to Benefit Yourself and Your Community
        </h2>
        <p className="SN-D-H3-24 prt-2">
          Completing the survey is just the beginning; the real empowerment lies
          in participating in active clinical trials. By doing so, you become an
          integral part of the collective effort to shape innovative healthcare
          solutions. Your active involvement is the key to a healthier tomorrow
          for both yourself and the broader community.
        </p>
        <button className="main-btn" onClick={() => setOpenModal(true)}>
          Start Survey
        </button>
        <SurveyForm open={openModal} toggleModal={toggleModal} />
      </main>
      <SurveyInformationCard />
    </div>
  );
};

export default index;
