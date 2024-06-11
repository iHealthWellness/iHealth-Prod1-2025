import { useState } from "react";

import SurveyInformationCard from "../../Components/Home-Page/Layout/Information/InformationCards/SurveyInformationCard/index.jsx";
import SurveyForm from "../../Components/SurveyForm/SurveyForm.jsx";
import surveyVideo from "src/Assets/Images/survey-video.mp4";
import GreyCards from "src/Components/UIComponents/GreyCards/GreyCards.jsx";

//icons
import nanoTech from "src/Assets/Icons/nano-tech.svg";
import labMicroscope from "src/Assets/Icons/lab-micro.svg";
import icuIcon from "src/Assets/Icons/icu-icon.svg";
import giveGift from "src/Assets/Icons/give-gift.svg";
import megaPhone from "src/Assets/Icons/megaphone.svg";
import donateBlood from "src/Assets/Icons/donate-blood.svg";
import teamGroup from "src/Assets/Icons/team-group.svg";

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
            <video
              autoPlay
              muted
              loop
              playsInline
              className="second-img justify-self-right"
            >
              <source src={surveyVideo} type="video/mp4" />
            </video>
            <h2 className="SN-D-H3-24 visib prt-1 advance-max-width">
              Advance Understanding and Help Others
              <p className="SN-D-H3-36 after-break survey-today">
                Join a Clinical Trial to Benefit Yourself and Your Community
              </p>
            </h2>
            {/* <h2 className="SN-D-H2-36 invis prt-1"> */}
            {/* <span className='survey-now'>Survey Today</span> <p> Thrive Tomorrow!</p> */}
            {/* <p className="SN-D-H1-48 after-break">Change the Future</p> */}
            {/* </h2> */}
          </div>
        </header>
      </section>
      <main>
        <h2 className="SN-D-H2-36 prt-1 join-a-clinical-trial">
          Join a Clinical Trial to Benefit Yourself and Your Community
        </h2>
        <p className="SN-D-H3-24 prt-2 clinical-trial-hidden text-align-justify">
          Are you ready to be an advocate for change? Participate in clinical
          trials and become an integral part of the scientific breakthroughs
          shaping tomorrow's treatments. Your participation isn't just a chance
          to receive advanced medical care — it's an opportunity to shape the
          landscape of healthcare for generations to come.
        </p>
        {/* onClick={() => setOpenModal(true)} */}
        <button
          className="main-btn"
          onClick={() => {
            document.querySelector("#UnderConst-wrapper").style.display =
              "flex";
          }}
        >
          Start Survey
        </button>
        {/* <SurveyForm open={openModal} toggleModal={toggleModal} /> */}
        <h3>Why should you participate in a clinical trial?</h3>
        <GreyCards>
          <div>
            <img src={nanoTech} alt="nano tech icon" />
            <p>
              Access to <span>Cutting-Edge</span> Treatments
            </p>
          </div>
          <div>
            <img src={labMicroscope} alt="lab microscope icon" />
            <p>
              Contribution to <span>Medical Advancement</span>
            </p>
          </div>
          <div>
            <img src={icuIcon} alt="ICU icon" />
            <p>
              Close Monitoring and <span>Care</span>
            </p>
          </div>
          <div>
            <img src={giveGift} alt="a gift icon" />
            <p>
              Contribution to <span>Other Patients</span>
            </p>
          </div>
          <div>
            <img src={megaPhone} alt="megaphone" />
            <p>
              Empowerment and <span>Advocacy</span>
            </p>
          </div>
          <div>
            <img src={donateBlood} alt="donate blood icon" />
            <p>
              Support and <span>Community</span>
            </p>
          </div>
          <div>
            <img src={teamGroup} alt="team group icon" />
            <p>
              Altruism and <span>Giving Back</span>
            </p>
          </div>
        </GreyCards>
      </main>
      <SurveyInformationCard />
    </div>
  );
};

export default index;
