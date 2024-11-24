import React from "react";
import styles from "./ProgressBar.module.css";

const ProgressBar = ({ progress, totalSteps }) => {
  return (
    <div className={styles.progressDotBar}>
      {/* Generate dots based on the total number of steps */}
      {Array.from({ length: totalSteps }, (_, index) => (
        <div
          key={index}
          className={`${styles.dot} ${index < progress ? styles.active : ""}`}
        />
      ))}
    </div>
  );
};

export default ProgressBar;
