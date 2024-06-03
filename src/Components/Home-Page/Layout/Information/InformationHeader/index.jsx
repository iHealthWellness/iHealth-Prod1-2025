//Import Styles
import "./index.css";

//import local assets/files
import NF1 from "src/Assets/Images/NF1.png";
import NfJourney from "src/Assets/Images/nfjourney-banner.png";

const InformationHeader = () => {
  return (
    <div className="information-header">
      <div className="information-header-heading-card ">
        <img src={NfJourney} alt="nf journey banner" className="nf-journey" />
      </div>
      <img
        className="information-header-img"
        src={NF1}
        loading="lazy"
        alt="human head with visible nerves"
      />
    </div>
  );
};

export default InformationHeader;
