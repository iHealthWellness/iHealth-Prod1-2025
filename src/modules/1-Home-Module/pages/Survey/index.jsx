import { useState } from "react";

// Moved
// import SurveyInformationCard from "src/0-Dev1-General/0-1-Landing-Page/components/Information/InformationCards/SurveyInformationCard/index.jsx";
import SurveyInformationCard from "src/modules/1-Home-Module/components/LivingwithNF/SurveyInformationCard/index.jsx";
import SurveyForm from "src/modules/1-Home-Module/components/SurveyForm/SurveyForm.jsx";
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
            <h2 className="D-H3-24 visib prt-1 advance-max-width">
              Advance Understanding and Help Others
              <p className="D-H1-32 after-break survey-today">
                Join a Clinical Trial to Benefit Yourself and Your Community
              </p>
            </h2>
            {/* <h2 className="SN-D-H2-36 invis prt-1"> */}
            {/* <span className='survey-now'>Survey Today</span> <p className="D-P-20"> Thrive Tomorrow!</p> */}
            {/* <p className="SN-D-H1-48 after-break">Change the Future</p> */}
            {/* </h2> */}
          </div>
        </header>
      </section>
      <main>
        <h2 className="D-H1-32 prt-1 join-a-clinical-trial">
          Join a Clinical Trial to Benefit Yourself and Your Community
        </h2>
        <p className="D-P-20 prt-2 clinical-trial-hidden text-align-justify">
          Are you ready to be an advocate for change? Participate in clinical
          trials and become an integral part of the scientific breakthroughs
          shaping tomorrow's treatments. Your participation isn't just a chance
          to receive advanced medical care — it's an opportunity to shape the
          landscape of healthcare for generations to come.
        </p>
        {/* onClick={() => setOpenModal(true)} */}
        <button
          className="main-btn D-P-20"
          onClick={() => {
            document.querySelector("#UnderConst-wrapper").style.display =
              "flex";
          }}
        >
          Start Survey
        </button>
        {/* <SurveyForm open={openModal} toggleModal={toggleModal} /> */}
        <h3 className="D-H3-24">
          Why should you participate in a clinical trial?
        </h3>
        <GreyCards>
          <div>
            <img src={nanoTech} alt="nano tech icon" />
            <p className="D-P-20">
              Access to <span className="D-P-20">Cutting-Edge</span> Treatments
            </p>
          </div>
          <div>
            <img src={labMicroscope} alt="lab microscope icon" />
            <p className="D-P-20">
              Contribution to{" "}
              <span className="D-P-20">Medical Advancement</span>
            </p>
          </div>
          <div>
            <img src={icuIcon} alt="ICU icon" />
            <p className="D-P-20">
              Close Monitoring and <span className="D-P-20">Care</span>
            </p>
          </div>
          <div>
            <img src={giveGift} alt="a gift icon" />
            <p className="D-P-20">
              Contribution to <span className="D-P-20">Other Patients</span>
            </p>
          </div>
          <div>
            <img src={megaPhone} alt="megaphone" />
            <p className="D-P-20">
              Empowerment and <span className="D-P-20">Advocacy</span>
            </p>
          </div>
          <div>
            <img src={donateBlood} alt="donate blood icon" />
            <p className="D-P-20">
              Support and <span className="D-P-20">Community</span>
            </p>
          </div>
          <div>
            <img src={teamGroup} alt="team group icon" />
            <p className="D-P-20">
              Altruism and <span className="D-P-20">Giving Back</span>
            </p>
          </div>
        </GreyCards>
      </main>
      <SurveyInformationCard />
    </div>
  );
};

export default index;
