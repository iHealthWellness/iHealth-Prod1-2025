import styles from "./index.module.css";
import useSlideInAnimationRight from "src/hooks/useSlideInAnimationRight";

const Section2 = () => {
  useSlideInAnimationRight(styles.slideInText, styles.active);

  return (
    <section
      id="tools"
      className={`${styles.slideInText} ${styles.mainSection}`}
    >
      <header className={styles.title}>
        <h2 className="D-H2-30" id="empowering-patients">
          Empowering Patients and Professionals
        </h2>
        <h1 className="D-H1-32">
          Neurofibromatosis Research Tools and Resources
        </h1>
      </header>
      <section className="D-T-M-P-16">
        <p>
          Neurofibromatosis (NF) is a complex genetic disorder that requires
          ongoing research and collaboration among patients, healthcare
          professionals, and researchers. To facilitate access to valuable
          information and support, numerous research tools and resources have
          been developed. In this article, we will explore a variety of
          resources available to empower patients and professionals involved in
          neurofibromatosis research.
        </p>
      </section>
    </section>
  );
};

export default Section2;
