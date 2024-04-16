import styles from "./index.module.css";
import Research4 from "src/Assets/Images/Research-4.png";
import useSlideInAnimationRight from "src/hooks/useSlideInAnimationRight";
import AccordionSection from "src/Components/UIComponents/AccordionSection/AccordionSection";

const MyComponent2 = ({ toggleAccordion, activeAccordion }) => {
  useSlideInAnimationRight(styles.slideInText, styles.active);

  return (
    <div>
      <div className={`${styles.slideInText} ${styles.sectionContainer}`}>
        <section>
          <img
            className={styles.image}
            src={Research4}
            alt="lab microscope"
            loading="lazy"
          />
        </section>
        <section>
          <AccordionSection
            title="Everolimus"
            visibleContent={{
              p1: "Research studies and clinical trials have investigated the use of Everolimus in managing NF1-related tumors, particularly plexiform neurofibromas (PNs). Everolimus an mTOR inhibitor, has emerged as a notable therapeutic option in the realm of neurofibromatosis (NF) research. Extensive clinical trials have investigated its potential in treating NF-related tumors, particularly subependymal giant cell astrocytomas (SEGAs) associated with neurofibromatosis type 1 (NF1) or tuberous sclerosis complex (TSC).",
              p2: "The efficacy of Everolimus in managing SEGAs has been significant, leading to its approval by the U.S. Food and Drug Administration (FDA) specifically for the treatment of SEGAs in individuals with TSC.",
            }}
            hiddenContent={{
              p1: "This achievement signifies the recognition of Everolimus as a viable and beneficial treatment option for this particular manifestation of NF-related tumors. The targeted inhibition of mTOR, a protein involved in regulating cell growth and proliferation, has shown promise in effectively addressing SEGAs associated with NF1 and TSC. The approval of Everolimus for SEGAs marks an important milestone in the field of NF research and presents new hope for individuals affected by these tumors.",
              p2: "As ongoing research and clinical trials continue to unfold, further insights may emerge regarding the broader applicability of Everolimus and its potential for treating other NF-related tumors.",
              p3: "Everolimus was well-tolerated by the participants in the study. Fifteen of the 22 participants in the study experienced tumor shrinkage or no tumor growth, with 10 of those remaining free of progression during follow-up. The study indicates that everolimus should be considered for therapy in this patient population. In addition, amongst those with an optic pathway glioma, the majority had stable visual acuity after treatment with everolimus.",
              link: (
                <a
                  href="https://cdmrp.health.mil/nfrp/clinical_trials/nf1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="SN-D-P-20"
                >
                  Source: https://cdmrp.health.mil/nfrp/clinical_trials/nf1
                </a>
              ),
            }}
            buttonColor="blue"
            className={{
              titleStyle: styles.titleStyle,
              visibleContentStyle: styles.visibleContentStyle,
              hiddenContentStyle: styles.hiddenContentStyle,
              accordionContainer: styles.accordionContainer,
            }}
            isExpanded={activeAccordion === "EVERO"}
            onToggle={() => toggleAccordion("EVERO")}
          />
        </section>
      </div>
    </div>
  );
};

export default MyComponent2;
