import SurveyButton from "../SurveyButton/SurveyButton";
import "./SurveyDisclaimer.css";
import logo1 from "src/Assets/Images/logo1.svg";
import closeButtonX from "src/Assets/Icons/close-button-x.svg";

function SurveyDisclaimer({ handleNextPage, handleClose, disabled }) {
  return (
    <div className="disclaimer-container">
      <div className="disc-top-section">
        <img src={logo1} alt="Logo" className="logo" />
        <button onClick={handleClose}>
          <img
            className="survey-close-btn"
            src={closeButtonX}
            alt="close button"
          />
        </button>
      </div>
      <div className="disc-title-section ">
        <h1 className="SN-D-P-20">DISCLAIMER</h1>
      </div>
      <div className="main-content-section">
        <div className="disc-content-section SN-D-T-M-P-16">
          <p>
            Participating in the clinical trial facilitated by iHealth Wellness
            Foundation, Inc involves the collection of personal information,
            including but not limited to, encompassing details such as age, sex,
            pregnancy status (if applicable), ethnicity, and medical history. By
            opting to take part in this trial and providing the specified
            information, you acknowledge and consent to the potential sharing of
            collected data with iHealth Wellness partners in the future. This
            collaboration is aimed at advancing research and fostering
            improvements in healthcare. It is crucial to note that all personal
            information will be handled with the utmost confidentiality and
            anonymized before sharing, adhering strictly to relevant privacy
            laws and regulations. Participation in the trial is entirely
            voluntary, affording you the right to abstain from answering any
            questions or withdrawing from the trial without facing
            repercussions. For further details or if you have any concerns, or
            questions, or require additional information regarding data handling
            and sharing, please refer to our privacy policy.
          </p>
          <p>
            By choosing to participate in the clinical trial facilitated by
            iHealth Wellness Foundation, Inc., you explicitly acknowledge and
            provide your informed consent for the collection of personal
            information. The information gathered may encompass information
            including but not limited to details such as age, sex, pregnancy
            status (if applicable), ethnicity, and comprehensive medical
            history. Your voluntary participation in this trial signifies your
            understanding and agreement to potentially share the collected data
            with iHealth Wellness Foundation partners in the future. This
            collaborative effort is dedicated to advancing research and
            promoting enhancements in healthcare. It is imperative to emphasize
            that all personal information acquired during this trial will be
            handled with the utmost confidentiality. Furthermore, the data will
            be anonymized before being shared to ensure compliance with relevant
            privacy laws and regulations. Participation in this trial is
            entirely voluntary, affording you the explicit right to abstain from
            responding to any questions or to withdraw from the trial without
            facing any adverse consequences. Kindly note that this endeavor is
            committed to strict adherence to all applicable privacy laws and
            regulations governing the handling and sharing of personal
            information. For additional details, concerns, questions, or to
            obtain more information regarding the handling and sharing of data,
            please refer to our comprehensive privacy policy.
          </p>
        </div>
      </div>
      <div className="disc-footer">
        <SurveyButton
          type="button"
          text="Accept to start survey"
          handleAction={handleNextPage}
          className="submit-next-page"
          disabled={disabled}
        />
      </div>
    </div>
  );
}

export default SurveyDisclaimer;
