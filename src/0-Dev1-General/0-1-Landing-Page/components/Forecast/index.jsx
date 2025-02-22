import styles from "./index.module.css"; 
import forecastImage from "src/Assets/Images/forecastImg.png";

const Forecast = () => {
  

  return (
    <div className={styles.foreCastContainer}>
      <div className={styles.sectionDescription}>
        <h4 className="SN-D-H2-32">iHealth and Wellness Foundation: <span>2025 Outlook and Forecasts</span></h4>
        <p className={`${styles.descDate} SN-T-H3-24`}>January 3, 2025</p>
        <p className={`${styles.subheading} SN-D-T-M-P-20`}>As we look ahead to 2025, iHealth and Wellness Foundation is poised to expand its impact and drive innovation in healthcare. Here's a glimpse into what lies ahead:</p>
      </div>
      <div className={styles.sectionImage}>
        <img
        className={styles.forecastImage}
        src={forecastImage}
        />
      </div>
    </div>
  );
};

export default Forecast;
