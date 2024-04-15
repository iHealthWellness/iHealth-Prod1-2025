import styles from "./HeroMobile.module.css";

function HeroMobile() {
  return (
    <section className={styles.mainSection}>
      <header>
        <h2 className="SN-M-H3-20">
          Unraveling the Mysteries of{" "}
          <span className={styles.afterBreak}>Neurofibromatosis:</span>
        </h2>
        <h1 className="SN-M-H1-30">Advancing Research for a brighter Future</h1>
      </header>
    </section>
  );
}

export default HeroMobile;
