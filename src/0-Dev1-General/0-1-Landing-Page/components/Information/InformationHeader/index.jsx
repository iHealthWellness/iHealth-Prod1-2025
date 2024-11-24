//Import Styles
import styles from "./index.module.css";

//import local assets/files
import NF1 from "src/Assets/Images/NF1.png";
import NfJourney from "src/Assets/Images/nfjourney-banner.png";

const InformationHeader = () => {
  return (
    <div className={styles.informationHeader}>
      <div className={styles.informationHeaderHeadingCard}>
        <img src={NfJourney} alt="nf journey banner" className={styles.nfJourney} />
      </div>
      <img
        className={styles.informationHeaderImg}
        src={NF1}
        loading="lazy"
        alt="human head with visible nerves"
      />
    </div>
  );
};

export default InformationHeader;
