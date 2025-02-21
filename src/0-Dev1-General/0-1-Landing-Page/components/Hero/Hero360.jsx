import styles from "./Hero360.module.css";
import { Link } from "react-router-dom";

// Import local assets/files/components
import HeroMobile from "src/Assets/Images/hero-51x.png";
import { useEffect, useState } from "react";


const Hero360 = () => {
  return (
    <section className={styles.heroContainer}>
      <nav className={styles.heroNav}>
        <Link to="/">Home</Link>
        <span>/</span>
        <Link className={styles.disabled} to="" aria-disabled="true">Learn More</Link>
      </nav>
      <div className={styles.heroContainerInner}>
        <div className={styles.heroHeadingContainer}>
          <h1 className={`${styles.heroHeadingH1} SN-D-Home-H1-48`}>
          Welcome to iHealth360 Hub
          </h1>
          <h4
            className={`${styles.heroHeadingH4} SN-D-P-20`}
            style={{ color: "#f0f7fd" }}
          >
            Your all-in-one destination for managing complex health conditions. Explore our personalized services designed to enhance your healthcare journey.
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

export default Hero360;