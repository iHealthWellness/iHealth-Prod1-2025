import AccordionSection from "src/Components/UIComponents/AccordionSection/AccordionSection";
import styles from "./ResearchIntroduction.module.css";
import Research1 from "src/Assets/Images/Research-1.png";

function ResearchIntroduction() {
  return (
    <section className={styles.mainSection}>
      <header>
        <img
          className={styles.researchImage}
          src={Research1}
          alt="lab students"
        />
      </header>
      <section className={styles.accordionSection}>
        <AccordionSection
          title="Introduction"
          className={{
            titleStyle: styles.titleStyle,
            visibleContentStyle: styles.visibleContentStyle,
            hiddenContentStyle: styles.hiddenContentStyle,
          }}
          visibleContent={{
            p1: "Welcome to the Neurofibromatosis Research Homepage, dedicated to shedding light on the complexities of Neurofibromatosis (NF) and driving advancements in research.",
          }}
          hiddenContent={{
            p1: "On this platform, we aim to provide a comprehensive resource for individuals and families impacted by NF, as well as researchers, healthcare professionals, and advocates. Our mission is to foster collaboration, raise awareness, and accelerate the development of effective treatments and ultimately a cure for NF.",
            p2: "Through informative articles, news updates, and access to cutting-edge research findings, we strive to empower the NF community with knowledge and support. Together, we can make a difference in the lives of those living with NF by driving breakthroughs and improving patient outcomes.",
            p3: "Join us in our journey to unravel the mysteries of Neurofibromatosis and work towards a brighter future for individuals and families affected by this challenging condition. Together, we can pave the way for new discoveries, improved treatments, and increased quality of life for NF patients worldwide.",
          }}
          buttonColor="blue"
        />
      </section>
    </section>
  );
}

export default ResearchIntroduction;
