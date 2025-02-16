import React from "react";
import styles from "./index.module.css";
import logo from "/src/Assets/Brand/logo-cut-light.png";
import logoText from "/src/Assets/Brand/logo-text.png";

const Preloader = () => {
  return (
    <div className={styles.preloader}>
   
    <div className={styles.preloaderNav}>

    <div className={styles.preloaderNavInnerLeft}>
    <img src={logo} alt="Loading logo" className={styles.imageText} />
    <div>
      <b>IHealth And Wellness Foundation Inc</b>
      <p>A 501(c)(3) Nonprofit: Offers Simple, Tax-Advantaged Giving Options</p>
    </div>
    </div>

    <div className={styles.preloaderNavInnerRight}>
      <p>ihealthandwellness.org</p>
      <div className={styles.roundCircles}></div>
      <div className={styles.roundCircles}></div>
      <div className={styles.roundCircles}></div>
      <div className={styles.roundCircles}></div>
      <div className={styles.roundCircles}></div>
    </div>
    </div>

      <div className={styles.container}>
        <img
          src={logo}
          alt="Loading logo"
          className={styles.image}
        />
        <p>Unifying Care So All Can Live Well</p>
      </div>
    </div>
  );
};

export default Preloader;

