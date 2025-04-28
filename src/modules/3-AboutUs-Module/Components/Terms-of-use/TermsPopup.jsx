import Hero from "./Hero/Hero";
import "./TermsPopup.css";
import Termstopic from "./Topic-section/Termstopic";

const TermsPopup = () => {
  return (
    // This pop up is component for terms of use
    // The pop up function has to be created by anyone who wants to use this without disrupting the flow of the component
    <>
      <div className="TofU" id="terms-wrapper">
        <Hero />
        <div className="terms2">
          <Termstopic />
        </div>

        <div className="terms-button-close terms-bottom-curve">
          <button className="SN-D-T-M-B-16">Close</button>
        </div>
        <div className="terms-bottom"></div>
      </div>
    </>
  );
};

export default TermsPopup;
