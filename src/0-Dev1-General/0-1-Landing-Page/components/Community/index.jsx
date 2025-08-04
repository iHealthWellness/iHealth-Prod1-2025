import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styles from "./index.module.css";

// Made this fail gracefully
// import DiseaseFeedbackModal from "src/modules/1-Home-Module/components/Diseases/DiseaseFeedbackModal";
let DiseaseFeedbackModal;
try {
  const mod = await import("src/modules/1-Home-Module/components/Diseases/DiseaseFeedbackModal");
  DiseaseFeedbackModal = mod.default;
} catch (e) {
  console.warn('1-Home-Module failed to load:', e);
}

import CancerCard from "src/Assets/Images/cancer-card.png";
import GeriatricCard from "src/Assets/Images/geriatric-card.png";
import NfCard from "src/Assets/Images/nf-card.png";

const Community = () => {
  const [openModal, setOpenModal] = useState(null);
  const location = useLocation();

  useEffect(() => {
    // Check URL path and open appropriate modal
    if (location.pathname === "/cancer-hub") {
      setOpenModal("Cancer");
    } else if (location.pathname === "/geriatric-hub") {
      setOpenModal("Geriatric");
    }
  }, [location.pathname]);

  const handleOpenModal = (modalName) => {
    setOpenModal(modalName);
  };

  const closeModal = () => {
    setOpenModal(null);
  };

  return (
    <section className={styles.communityContainer}>
      <h2 className={`${styles.communityHeading} SN-D-Home-H2-32`}>
        We give power to you, the patient
      </h2>
      <p className={`${styles.communityDescription} SN-D-Home-P-22`}>
        Find all the information and resources you need to make informed
        decisions about your health and live your best life. Choose your area of
        interest and take the next step in your wellness journey.
      </p>
      <aside>
        <a href="#Information">
          <img className={styles.nfFirstImage} src={NfCard} alt="nf card" />
        </a>
        <img
          src={CancerCard}
          alt="cancer card"
          onClick={() => handleOpenModal("Cancer")}
        />
        <img
          src={GeriatricCard}
          alt="geriatric card"
          onClick={() => handleOpenModal("Geriatric")}
        />
      </aside>
      {openModal === "Geriatric" && DiseaseFeedbackModal && <DiseaseFeedbackModal closeModal={closeModal} diseaseType="geriatric"  />}
      {openModal === "Cancer" && DiseaseFeedbackModal && <DiseaseFeedbackModal closeModal={closeModal} diseaseType="cancer"  />}
    </section>
  );
};

export default Community;
