//Import Libraries/Packages

//Import Styles
import "./index.css";

//import local assets/files
import NF1 from "src/Assets/Images/NF1.png";

const InformationHeader = () => {
  return (
    <div className="information-header">
      <div className="information-header-heading-card">
        <div className="information-header-heading-card-inner">
          <h2 className="information-header-heading">Welcome to your</h2>
          <h2 className="information-header-heading">NF</h2>
          <h2 className="information-header-heading">iHealth & Wellness Hub</h2>
        </div>
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
