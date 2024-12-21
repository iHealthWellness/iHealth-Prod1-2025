import React from "react";
import styles from "./index.module.css"; 
import logo from "/src/Assets/Brand/iHealthLogoCentered.png";

const Preloader = () => {
  return (
    <div className={styles.preloader}>
      <img
        src={logo}
        alt="Loading logo"
        className={styles.image}
      />
    </div>
  );
};

export default Preloader;
