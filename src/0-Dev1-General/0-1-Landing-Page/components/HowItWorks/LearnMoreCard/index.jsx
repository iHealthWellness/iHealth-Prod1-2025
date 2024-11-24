import React from "react";
import styles from "./index.module.css";
import step5Image from "src/Assets/Images/Learn-more.jpg";

const underConstruction = () => {
  document.querySelector("#UnderConst-wrapper").style.display = "flex";
};

const LearnMoreCard = ({ isVisible }) => {
  return (
    <div
      className={`${styles.lmcContainer} ${styles.makeInvisible} ${
        isVisible ? styles.lmcVisible : ""
      }`}
    >
      <a onClick={underConstruction} className={styles.lmcButton}>
        <img src={step5Image} alt="an image" className={styles.lmcImage} />
      </a>
    </div>
  );
};

export default LearnMoreCard;
