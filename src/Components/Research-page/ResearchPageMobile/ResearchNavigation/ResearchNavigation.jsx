import styles from "./ResearchNavigation.module.css";

function ResearchNavigation() {
  return (
    <nav className={styles.mainSection}>
      <header>
        <h2 className="D-H2-30">In this page</h2>
      </header>
      <div className={`D-H3-24 ${styles.navSection}`}>
        <section>
          <a href="#tools">
            Neurofibromatosis{" "}
            <span className={styles.afterBreak}>
              Research Tools and Resources
            </span>
          </a>
        </section>
        <section>
          <a href="#clinical">Clinical Drugs Therapies</a>
        </section>
        <section>
          <a href="#participate">
            Participate in Research
            <span className={styles.afterBreak}>for Neurofibromatosis</span>
          </a>
        </section>
      </div>
    </nav>
  );
}

export default ResearchNavigation;
