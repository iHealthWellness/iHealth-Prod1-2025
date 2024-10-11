import "./SubmitPage.css";
import closeButtonX from "src/Assets/Icons/close-button-x.svg";
import checkIcon from "src/Assets/Icons/green-check-icon.jpg";

function SubmitPage({ handleClose }) {
  return (
    <div className="congratulatory-message">
      <button onClick={handleClose}>
        <img
          className="survey-close-btn"
          src={closeButtonX}
          alt="close button"
        />
      </button>
      <h2 className="SN-D-H2-36">Thank you</h2>
      <div className="SN-D-P-20 submission-page-main">
        <p>Thank you for completing the survey!</p>
      </div>
      <img src={checkIcon} alt="green check icon" />
    </div>
  );
}

export default SubmitPage;
