import styles from "./index.module.css"; 
import joinVideo from "src/Assets/Images/Join2.mp4";
import iHealth360Logo from "src/Assets/Images/ihealth360.png";

const Team = () => {
  return (
    <section id="Home-page-team-container" className={styles.teamContainer}>
      <div></div>
      <h2 className={`${styles.teamHeadingH2} SN-D-Home-H2-32`}>
        Join Your Community:{" "}
        <span className={`SN-D-Home-H3-24`}>Stronger Together</span>
      </h2>

      <h3 className={`${styles.teamHeadingH3} ${styles.desktop} SN-D-Home-P-22`}>
        Meet others who understand what it's like living with your condition. As
        a community member, you'll come together in a safe space to support,
        learn from, and inspire each other.
      </h3>

      <div className={styles.teamBottomBlock}>
        <div className={styles.teamVideoCard}>
          <video autoPlay muted loop playsInline className={styles.teamVideo}>
            <source src={joinVideo} type="video/mp4" />
          </video>
        </div>

        <div className={styles.teamJoinCard}>
          <p className={`${styles.teamJoinDescription} SN-D-T-M-Home-P-16`}>
            As a community member, you'll come together with others living with
            your condition to support each other, learn from each other, inspire
            each other, to feel a sense of fellowship, safety and belonging
            together.
          </p>
          <div className={styles.teamJoinCardInner}>
            <img src={iHealth360Logo} alt="ihealth360 logo" />
            <a
              className={`${styles.teamJoinBtn} SN-D-T-M-Home-B-16`}
              onClick={() => {
                document.querySelector("#UnderConst-wrapper").style.display =
                  "flex";
              }}
            >
              Find Your Community
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
