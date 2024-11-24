import styles from "./Hero.module.css";

// Import local assets/files/components
import HeroMobile from "src/Assets/Images/hero-5x.png";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import PersonSearchOutlinedIcon from "@mui/icons-material/PersonSearchOutlined";
import { useEffect, useState } from "react";
import Popup from "../popup";
import FundraiserBanner from "./SubComponents/FundraiserBanner/FundraiserBanner";

const Hero = () => {
  const text =
    "We're a community-based 501c3 organization offering health-related programs free to patients!";
  const letterElements = text.split("").map((letter, index) => (
    <span key={index} className={styles.letter}>
      {letter}
    </span>
  ));

  const [opened, setOpened] = useState(false);

  useEffect(() => {
    setOpened(true);
  }, []);

  useEffect(() => {
    const checkOverlap = () => {
      const letters = document.querySelectorAll(`.${styles.letter}`);
      letters.forEach((letter) => {
        const letterRect = letter.getBoundingClientRect();
        const leftDiv = document
          .querySelector(`.${styles.blueBanner}:first-child`)
          .getBoundingClientRect();
        const rightDiv = document
          .querySelector(`.${styles.blueBanner}:last-child`)
          .getBoundingClientRect();

        if (
          (letterRect.right >= leftDiv.left &&
            letterRect.left <= leftDiv.right) ||
          (letterRect.right >= rightDiv.left &&
            letterRect.left <= rightDiv.right)
        ) {
          letter.style.color = "black";
        } else {
          letter.style.color = "white";
        }
      });
    };

    const interval = setInterval(checkOverlap, 5);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.heroContainer}>
      <Popup isOpen={opened} onClose={() => setOpened(false)} />
      <div className={styles.firstBanner}>
        <p>
          You are our hero, and we would love to hear your NF story,{" "}
          <a href="https://forms.gle/QAiHQcgtvqfjFtYe6">Submit your story.</a>
        </p>
      </div>
      <aside className={styles.secondBanner}>
        <div className={styles.blueBanner}></div>
        <p>{letterElements}</p>
        <div className={styles.blueBanner}></div>
      </aside>
      <section className={styles.heroSurveyBanner}>
        <FundraiserBanner />
      </section>

      <div className={styles.heroContainerInner}>
        <div className={styles.heroHeadingContainer}>
          <h3 className={`${styles.heroHeadingH3} SN-D-Home-H3-24`}>
            <HandshakeOutlinedIcon />
            Committed to success
          </h3>
          <h1 className={`${styles.heroHeadingH1} SN-D-Home-H1-48`}>
            Live better. Be well.
          </h1>
          <h2 className={`${styles.heroHeadingH2} SN-D-Home-H2-32`}>
            For Patients with Complex Diseases
          </h2>
          <h4 className={`${styles.heroHeadingH4} SN-D-P-20`}>
            Simplifying the Care of Complex Diseases for All
          </h4>
        </div>
        <div className={styles.heroImageContainer}>
          <img
            className={styles.heroImg}
            src={HeroMobile}
            alt="Doctor with patients image for Hero section"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;