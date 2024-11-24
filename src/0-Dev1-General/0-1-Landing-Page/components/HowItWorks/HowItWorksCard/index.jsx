import styles from "./index.module.css";

const HowItWorksCard = ({ icon, title, content, idx, isVisible }) => {
  const buttonStyles = (index) => {
    return index % 2 === 0 ? styles.even : styles.odd;
  };

  const renderCardContent = () => (
    <div
      className={`${styles.howItWorksCard} ${
        isVisible ? styles.visible : ""
      } ${buttonStyles(idx)}`}
      key={title}
    >
      <div className={styles.howItWorksContentBlock}>
        <h4 className={styles.howItWorksNumber}>{idx}</h4>
        <div className={styles.howItWorksIcon}>{icon}</div>
        <div className={`${styles.howItWorksButton} ${buttonStyles(idx)}`}>
          {title === "Learn More" ? (
            <h2 className={`${styles.howItWorksButtonLabel} SN-D-Home-H3-24`}>
              <a href="#">{title}</a>
            </h2>
          ) : (
            <h2 className={`${styles.howItWorksButtonLabel} SN-D-Home-H3-24`}>
              {title}
            </h2>
          )}
        </div>
        <p className={`${styles.howItWorksContent} SN-D-P-20`}>{content}</p>
      </div>
    </div>
  );

  return renderCardContent();
};

export default HowItWorksCard;
