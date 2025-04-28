import styles from "./Hero.module.css";
import { Link } from "react-router-dom";

// Import local assets/files/components
import HeroMobile from "src/Assets/Images/hero-51x.png";
import Diamond from "src/Assets/Images/Polygon4.png";
import { useEffect, useState } from "react";
import Popup from "../popup";
import FundraiserBanner from "./SubComponents/FundraiserBanner/FundraiserBanner";


const Hero = () => {
  const text =
    "We're a community-based 501c3 organization offering health-related programs free to patients!";
  const letterElements = text.split("").map((letter, index) => (
    <span key={index} className={styles.letter}>
      {letter}
      <img src={Diamond} alt="diamond" />
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
        <p className="SN-D-T-M-Home-P-14">
          You are our hero, and we would love to hear your NF story,{" "}
          <a href="https://forms.gle/QAiHQcgtvqfjFtYe6">Submit your story.</a>
        </p>
      </div>
      {/* <aside className={styles.secondBanner}>
        <div className={styles.blueBanner}></div>
        <p>{letterElements}</p>
        <div className={styles.blueBanner}></div>
      </aside> */}
      {/* <section className={styles.heroSurveyBanner}>
        <FundraiserBanner />
      </section> */}

      <div className={styles.heroContainerInner}>
        <div className={styles.heroHeadingContainer}>
          <h1 className={`${styles.heroHeadingH1} SN-D-Home-H1-56`}>
            Live better. Be well.
          </h1>
          <h4
            className={`${styles.heroHeadingH4} SN-D-Home-P-22`}
          >
            At iHealth and Wellness Foundation Inc, we believe that managing
            complex conditions should be simpler for everyone.
          </h4>
          <div  className={styles.heroButtonsFlex}>
          <Link to="/learnmore">
            <button className={`${styles.heroButton} SN-D-T-M-Home-B-16`}>
              Learn More
            </button>
          </Link>
          <Link  
          onClick={() => {
            document.querySelector("#UnderConst-wrapper").style.display = "flex";
          }}>
            <button className={`${styles.requestDemoButton} SN-D-T-M-Home-B-16`}>
              Request Demo
            </button>
          </Link>
          </div>
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