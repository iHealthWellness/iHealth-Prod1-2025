import "./index.css";
import Termstopic from "src/modules/3-AboutUs-Module/Components/Terms-of-use/Topic-section/Termstopic";
import Hero from "src/modules/3-AboutUs-Module/Components/Terms-of-use/Hero/Hero";
// import TermsPopup from "src/modules/3-AboutUs-Module/Components/Terms-of-use/TermsPopup";
// import EEOModal from "src/modules/3-AboutUs-Module/Components/Terms-of-use/EEOModal/Modal.jsx"

const index = () => {
  return (
    // This is terms of use page
    <>
      <Hero />
      <div className="terms-index">
        <Termstopic />
      </div>
      {/* <TermsPopup /> */}
      {/* <div className="terms-button-close terms-bottom-curve">
        <button>Close</button>
      </div>
      <div className="terms-bottom"></div> */}
    </>
  );
};

export default index;
