import React from "react";
import styles from "./educationHeader.module.css";
import educationGroup2 from "../../../assets/educationGroup2.png";

function EducationHeaderModule() {
  return (
    <section className={styles.educationContainer}>
      <div className={styles.educationContainerInner}>
        <div className={styles.educationHeadingContainer}>
          <h2 className={styles.educationHeadingOne}>
            Empowering Health, Enriching Lives:
          </h2>
          <h3 className={styles.educationHeadingTwo}>
            Navigate Your Journey with Online Education
          </h3>
        </div>
        <div className={styles.educationImageContainer}>
          <img
            className={styles.educationImg}
            src={educationGroup2}
            alt="Group of young people smiling together for Education section"
          />
        </div>
      </div>
      <div className={styles.educationContainerSecondInner}>
        <div className={styles.educationContentContainer}>
          <div className={styles.paragraphContainer}>
            <p className={styles.paragraphText}>
              Welcome to Online Education, a dedicated space on the iHealth and
              Wellness Foundation website tailored to patients, providers, and
              caregivers navigating the complexities of diseases such as
              Neurofibromatosis, Diabetes, Alzheimer's, and Cancer. Join our
              supportive community for shared experiences, expert insights, and
              transformative knowledge to take steps towards a healthier future
              for those affected by these conditions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EducationHeaderModule;
