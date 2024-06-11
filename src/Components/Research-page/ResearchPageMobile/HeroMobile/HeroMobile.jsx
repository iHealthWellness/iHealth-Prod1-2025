import styles from "./HeroMobile.module.css";

function HeroMobile() {
  return (
    <section className={styles.mainSection}>
      <header>
        <h2 className="D-H3-24">
          Unraveling the Mysteries of{" "}
          <span className={styles.afterBreak}>Neurofibromatosis:</span>
        </h2>
        <h1 className="D-H1-32">Advancing Research for a brighter Future</h1>
      </header>
    </section>
  );
}

export default HeroMobile;
