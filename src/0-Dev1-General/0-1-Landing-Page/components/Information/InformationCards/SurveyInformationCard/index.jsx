import Trials from "src/Constants/SurveyForm/Trials";
import styles from "./index.module.css";

function SurveyInformationCard() {
  const handleNavigate = (e, path) => {
    e.preventDefault();

    // If path is not defined, display UnderConstruction page
    if (!path) {
      document.querySelector("#UnderConst-wrapper").style.display = "flex";
      return;
    }
    console.log(path);
  };

  const renderTrial = (trial, index) => {
    const {
      header: { part1, part2 },
      text,
      images,
      path,
      buttonText,
      buttonIcon,
    } = trial;

    return (
      <div key={index} className={styles.cardContainer}>
        <h2 className={styles.cardHeader}>
          <span className={`${styles.dH1_32} ${styles.part1} ${styles.surveyToday} SN-D-Home-H1-40`}>{part1}</span>
          <span  className={` ${styles.part2} ${styles.dH3_24} SN-D-Home-H3-24`}>{part2}</span>
        </h2>
        <div className={styles.contentSection}>
          <div className={styles.imagesContainer}>
            {images.map((img, imgIndex) => (
              <img
                key={imgIndex}
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className={styles.centeredImage}
              />
            ))}
          </div>
          <p className={`${styles.dP_20} SN-D-Home-P-22`}>{text}</p>
          <div className={styles.btnContainer}>
            <button
              className={`${styles.dTM_P_B_16} SN-D-T-M-Home-B-16`}
              onClick={(e) => handleNavigate(e, path)}
            >
              {buttonText}
              {buttonIcon && (
                <img src={buttonIcon} alt="" className={styles.buttonImg} />
              )}
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.outerCardContainer}>
      {Trials.map((trial, index) => renderTrial(trial, index))}
    </div>
  );
}

export default SurveyInformationCard;
