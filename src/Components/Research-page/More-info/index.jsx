import styles from "./index.module.css";
import useSlideInAnimationRight from "src/hooks/useSlideInAnimationRight";

const section4 = () => {
  useSlideInAnimationRight(styles.slideInText, styles.active);

  return (
    <div className={`${styles.slideInText} ${styles.mainSection}`}>
      <header className="D-H1-32">
        Here is more information about MEK protein
      </header>
      <section className="D-T-M-P-16">
        <p>
          The MEK protein, also known as Mitogen-Activated Protein Kinase
          Kinase, is a key component of the mitogen-activated protein kinase
          (MAPK) signaling pathway. This pathway is responsible for transmitting
          signals from the cell surface to the nucleus, regulating various
          cellular processes such as cell growth, differentiation, and survival.
        </p>
        <p>
          MEK acts as an intermediate signaling molecule in the MAPK pathway.
          When an extracellular signal, such as a growth factor, binds to a
          receptor on the cell surface, it triggers a cascade of molecular
          events, leading to the activation of MEK. Activated MEK then
          phosphorylates and activates downstream kinases, known as ERK
          (Extracellular signal-Regulated Kinases). ERKs subsequently enter the
          nucleus and initiate gene expression, resulting in the regulation of
          various cellular functions.
        </p>
        <p>
          In the context of neurofibromatosis, the MEK protein plays a
          significant role in the development of neurofibromas, which are benign
          tumors that can arise in individuals with neurofibromatosis type 1
          (NF1). Inhibiting the activity of MEK using drugs like Selumetinib has
          shown promise in reducing tumor growth and improving symptoms
          associated with NF1-related plexiform neurofibromas.
        </p>
      </section>
    </div>
  );
};

export default section4;
