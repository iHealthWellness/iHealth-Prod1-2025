import styles from "./index.module.css";

const SealsCard = ({ hideOnMobile }) => {
  return (
    <div className={`${styles.seals} ${hideOnMobile ? styles.hiddenOnMobile : styles.hiddenOnDesktop}`}>
      <a href="https://app.candid.org/profile/15323156/ihealth-and-wellness-foundation-inc-93-1567099" target="_blank">
        <img src="https://widgets.guidestar.org/prod/v1/pdp/transparency-seal/15323156/svg" /> 
      </a>
    </div>
  );
};

export default SealsCard;
