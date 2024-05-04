import AboutUs from "src/Assets/Images/business-meeting3.png";
import styles from "./index.module.css";

const Hero = () => {
  return (
    <header id="Hero" className={styles.heroImage}>
      <img src={AboutUs} alt="meeting" />
    </header>
  );
};

export default Hero;
