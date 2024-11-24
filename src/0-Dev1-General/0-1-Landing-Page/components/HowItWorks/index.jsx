import React, { useState, useRef, useEffect } from "react";

import HowItWorksCard from "./HowItWorksCard";

import HowItWorksSteps from "src/Constants/HomePage/HowItWorks.js";
import LearnMoreCard from "./LearnMoreCard";

import styles from "./index.module.css";

const HowItWorks = () => {
  const [isVisible, setIsVisible] = useState(false);
  const divRef = useRef(null);

  useEffect(() => {
    function handleScroll() {
      const div = divRef.current;
      if (div) {
        const rect = div.getBoundingClientRect();
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;

        if (rect.top <= windowHeight && rect.bottom >= 0) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section className={styles.howItWorksContainer}>
      <h2 className={`${styles.howItWorksHeading} SN-D-Home-H2-32`}>
        Getting Started is Easy
      </h2>
      <div className={styles.howItWorksCards} ref={divRef}>
        {HowItWorksSteps.map((step, idx) => (
          <HowItWorksCard
            icon={<img src={step.image} alt="" width="32px" height="32px" />}
            title={step.title}
            content={step.content}
            idx={idx + 1}
            key={step.title}
            isVisible={isVisible}
          />
        ))}
        <LearnMoreCard className={styles.deskCard} isVisible={isVisible} />
      </div>
    </section>
  );
};

export default HowItWorks;

{
  /* <div className={styles["how-it-works-learn-more-box"]}>
<div className={styles["how-it-works-button even"]}>
  <a
    className={styles["how-it-works-learn-more how-it-works-button-label"
    href="#"
  >
    Learn More &gt;
  </a>
</div>
</div> */
}
