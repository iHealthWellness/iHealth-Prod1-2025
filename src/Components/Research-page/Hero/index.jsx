import styles from "./index.module.css";
import Research1 from "src/Assets/Images/Research-1.png";

const section1 = () => {
  return (
    <div className={styles.firstPart}>
      <header className={styles.headerSection}>
        <img
          className={styles.image}
          src={Research1}
          alt="lab students"
          loading="lazy"
        />
      </header>
      <section className={styles.heroTitle}>
        <h2 className="SN-M-H2-24">
          Unraveling the Mysteries of Neurofibromatosis
        </h2>
        <h1 className="SN-D-H2-36">Advancing Research for a Brighter Future</h1>
      </section>
      <main className={styles.Introduction}>
        <h3 className="SN-D-H2-36">Introduction</h3>
        <section className="SN-D-P-20">
          <p>
            Welcome to the Neurofibromatosis Research Homepage, dedicated to
            shedding light on the complexities of Neurofibromatosis (NF) and
            driving advancements in research. NF is a group of genetic disorders
            that cause tumors to form on nerves throughout the body, affecting
            both children and adults.
          </p>
          <p>
            On this platform, we aim to provide a comprehensive resource for
            individuals and families impacted by NF, as well as researchers,
            healthcare professionals, and advocates. Our mission is to foster
            collaboration, raise awareness, and accelerate the development of
            effective treatments and ultimately a cure for NF.
          </p>
          <p>
            Through informative articles, news updates, and access to
            cutting-edge research findings, we strive to empower the NF
            community with knowledge and support. Together, we can make a
            difference in the lives of those living with NF by driving
            breakthroughs and improving patient outcomes.
          </p>
          <p>
            Join us in our journey to unravel the mysteries of Neurofibromatosis
            and work towards a brighter future for individuals and families
            affected by this challenging condition. Together, we can pave the
            way for new discoveries, improved treatments, and increased quality
            of life for NF patients worldwide.
          </p>
        </section>
      </main>
    </div>
  );
};

export default section1;
