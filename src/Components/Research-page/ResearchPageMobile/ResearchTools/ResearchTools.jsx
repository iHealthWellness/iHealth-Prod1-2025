import AccordionSection from "src/Components/UIComponents/AccordionSection/AccordionSection";
import Research2 from "/src/Assets/Images/Research-2.png";
import styles from "./ResearchTools.module.css";

function ResearchTools({ toggleAccordion, activeAccordion }) {
  return (
    <article id="tools" className={styles.mainSection}>
      <header className="D-H2-30">
        <h2>Empowering Patients and Professionals:</h2>
        <h2 style={{ color: "#0d99ff" }}>
          Neurofibromatosis Research Tools and Resources
        </h2>
      </header>
      <AccordionSection
        visibleContent={{
          p1: "Neurofibromatosis (NF) is a complex genetic disorder that requires ongoing research and collaboration among patients, healthcare professionals, and researchers.",
        }}
        hiddenContent={{
          p1: "To facilitate access to valuable information and support, numerous research tools and resources have been developed. In this article, we will explore a variety of resources available to empower patients and professionals involved in neurofibromatosis research.",
        }}
        buttonColor="blue"
        className={{
          visibleContentStyle: styles.visibleContentStyle,
          customHiddenContentStyle: styles.customHiddenContentStyle,
          customAccordionContainer: styles.customAccordionContainer,
        }}
        isExpanded={activeAccordion === "mobNF"}
        onToggle={() => toggleAccordion("mobNF")}
      />
      <section className={styles.secondSection}>
        <AccordionSection
          title="National Institutes of Health (NIH)"
          buttonColor="grey"
          className={{
            titleStyle: styles.titleStyle,
            hiddenContentStyle: styles.hiddenContentStyle,
            customAccordionSection: styles.customAccordionSection,
          }}
          image={
            <img
              className={styles.accordionImg}
              src={Research2}
              alt="researchers team"
            />
          }
          hiddenContent={{
            p1: "Neurofibromatosis Research: The National Institutes of Health (NIH) is a renowned institution at the forefront of medical research. Their dedicated branch, the National Institute of Neurological Disorders and Stroke (NINDS), offers a comprehensive range of resources and updates on neurofibromatosis research. Visit their website to access grants, clinical trials, research publications, and patient support information: NIH - NINDS Neurofibromatosis Research",
          }}
          isExpanded={activeAccordion === "mobNIH"}
          onToggle={() => toggleAccordion("mobNIH")}
        />
        <AccordionSection
          title="PubMed"
          buttonColor="grey"
          className={{
            titleStyle: styles.titleStyle,
            hiddenContentStyle: styles.hiddenContentStyle,
            customAccordionSection: styles.customAccordionSection,
          }}
          hiddenContent={{
            p1: "Neurofibromatosis Research Articles: PubMed is a widely recognized database that provides access to a vast collection of biomedical literature. It serves as a valuable resource for researchers and professionals seeking the latest neurofibromatosis research articles, reviews, and clinical studies. Explore PubMed's neurofibromatosis publications here: PubMed - Neurofibromatosis Research",
          }}
          isExpanded={activeAccordion === "mobPUB"}
          onToggle={() => toggleAccordion("mobPUB")}
        />
        <AccordionSection
          title="Neurofibromatosis Network"
          buttonColor="grey"
          className={{
            titleStyle: styles.titleStyle,
            hiddenContentStyle: styles.hiddenContentStyle,
            customAccordionSection: styles.customAccordionSection,
          }}
          hiddenContent={{
            p1: "The Neurofibromatosis Network is a non-profit organization committed to supporting individuals and families affected by neurofibromatosis. Their website offers an extensive range of resources, including research updates, educational materials, patient support programs, and community forums. Visit the Neurofibromatosis Network's website for more information: Neurofibromatosis Network",
          }}
          isExpanded={activeAccordion === "mobNN"}
          onToggle={() => toggleAccordion("mobNN")}
        />
        <AccordionSection
          title="ClinicalTrails.gov"
          buttonColor="grey"
          className={{
            titleStyle: styles.titleStyle,
            hiddenContentStyle: styles.hiddenContentStyle,
            customAccordionSection: styles.customAccordionSection,
          }}
          hiddenContent={{
            p1: "Neurofibromatosis Clinical Trials: ClinicalTrials.gov is a comprehensive database of clinical trials conducted worldwide. It provides valuable information on ongoing and upcoming neurofibromatosis-related trials. Access the latest clinical trials and research opportunities here: ClinicalTrials.gov - Neurofibromatosis",
          }}
          isExpanded={activeAccordion === "mobGOV"}
          onToggle={() => toggleAccordion("mobGOV")}
        />
      </section>
    </article>
  );
}

export default ResearchTools;
