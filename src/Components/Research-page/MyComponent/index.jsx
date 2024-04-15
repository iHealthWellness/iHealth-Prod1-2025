import styles from "./index.module.css";
import Research2 from "src/Assets/Images/Research-2.png";
import useSlideInAnimationRight from "src/hooks/useSlideInAnimationRight";
import AccordionSection from "src/Components/UIComponents/AccordionSection/AccordionSection";

const MyComponent = () => {
  useSlideInAnimationRight(styles.slideInText, styles.active);
  return (
    <section className={`${styles.slideInText} ${styles.sectionContainer}`}>
      <section>
        <img
          className={styles.image}
          src={Research2}
          alt="researchers"
          loading="lazy"
        />
      </section>
      <section className={styles.contentSection}>
        <AccordionSection
          title="1. National Institutes of Health (NIH)"
          visibleContent={{
            p1: "Neurofibromatosis Research: The National Institutes of Health (NIH)",
          }}
          hiddenContent={{
            p1: "is a renowned institution at the forefront of medical research. Their dedicated branch, the National Institute of Neurological Disorders and Stroke (NINDS), offers a comprehensive range of resources and updates on neurofibromatosis research. Visit their website to access grants, clinical trials, research publications, and patient support information: NIH - NINDS Neurofibromatosis Research.",
          }}
          buttonColor="blue"
          className={{
            titleStyle: styles.titleStyle,
            visibleContentStyle: styles.visibleContentStyle,
            hiddenContentStyle: styles.hiddenContentStyle,
            customAccordionContainer: styles.customAccordionContainer,
          }}
        />
        <AccordionSection
          title="2. PubMed"
          visibleContent={{
            p1: "Neurofibromatosis Research Articles: PubMed is a widely recognized database",
          }}
          hiddenContent={{
            p1: "that provides access to a vast collection of biomedical literature. It serves as a valuable resource for researchers and professionals seeking the latest neurofibromatosis research articles, reviews, and clinical studies. Explore PubMed's neurofibromatosis publications here: PubMed - Neurofibromatosis Research.",
          }}
          buttonColor="blue"
          className={{
            titleStyle: styles.titleStyle,
            visibleContentStyle: styles.visibleContentStyle,
            hiddenContentStyle: styles.hiddenContentStyle,
          }}
        />
        <AccordionSection
          title="3. Neurofibromatosis Network"
          visibleContent={{
            p1: "The Neurofibromatosis Network is a non-profit organization committed to supporting individuals and families affected by neurofibromatosis.",
          }}
          hiddenContent={{
            p1: "Their website offers an extensive range of resources, including research updates, educational materials, patient support programs, and community forums. Visit the Neurofibromatosis Network's website for more information: Neurofibromatosis Network.",
          }}
          buttonColor="blue"
          className={{
            titleStyle: styles.titleStyle,
            visibleContentStyle: styles.visibleContentStyle,
            hiddenContentStyle: styles.hiddenContentStyle,
            customAccordionContainer: styles.customAccordionContainer,
          }}
        />
        <AccordionSection
          title="4. ClinicalTrials.gov"
          visibleContent={{
            p1: "Neurofibromatosis Clinical Trials: ClinicalTrials.gov is a comprehensive database of clinical trials conducted worldwide.",
          }}
          hiddenContent={{
            p1: "It provides valuable information on ongoing and upcoming neurofibromatosis-related trials. Access the latest clinical trials and research opportunities here: ClinicalTrials.gov - Neurofibromatosis.",
          }}
          buttonColor="blue"
          className={{
            titleStyle: styles.titleStyle,
            visibleContentStyle: styles.visibleContentStyle,
            hiddenContentStyle: styles.hiddenContentStyle,
            customAccordionContainer: styles.customAccordionContainer,
          }}
        />
      </section>
      <section className={styles.bluePattern}>
        <header className="SN-D-H3-24">Do you know?</header>
        <p className="SN-D-P-20">
          These resources can serve as valuable tools for researchers and
          individuals interested in NF research. It's important to explore
          specific databases, funding opportunities, and networks relevant to
          your research interests or goals. Additionally, staying up-to-date
          with the latest research publications and attending conferences or
          scientific meetings can further enhance knowledge and collaboration in
          the field of NF research.
        </p>
      </section>
    </section>
  );
};

export default MyComponent;
