import styles from "./index.module.css";
import Research6 from "src/Assets/Images/Research-6.png";
import useSlideInAnimationRight from "src/hooks/useSlideInAnimationRight";
import AccordionSection from "src/Components/UIComponents/AccordionSection/AccordionSection";

const MyComponent3 = ({ toggleAccordion, activeAccordion }) => {
  useSlideInAnimationRight(styles.slideInText, styles.active);

  return (
    <>
      <div className={styles.researchTitle}>
        <h1 className="D-H3-24">
          Stay Informed:{" "}
          <span className="D-H1-32">
            Latest NF Research Updates and Insights
          </span>
        </h1>
        <article className={`${styles.slideInText} ${styles.sectionContainer}`}>
          <aside>
            <img
              className={styles.image}
              src={Research6}
              alt="researchers"
              loading="lazy"
            />
          </aside>
          <aside className={styles.contentSection}>
            <AccordionSection
              title="1. Stay Informed"
              visibleContent={{
                p1: "Keep yourself updated on the latest NF research by following reputable NF organizations, medical journals, and research institutions.",
              }}
              hiddenContent={{
                p1: " They often share information about ongoing studies and clinical trials.",
              }}
              buttonColor="blue"
              className={{
                titleStyle: styles.titleStyle,
                visibleContentStyle: styles.visibleContentStyle,
                hiddenContentStyle: styles.hiddenContentStyle,
                customAccordionContainer: styles.customAccordionContainer,
              }}
              isExpanded={activeAccordion === "INFORMED"}
              onToggle={() => toggleAccordion("INFORMED")}
            />
            <AccordionSection
              title="2. Explore Research Opportunities"
              visibleContent={{
                p1: "Investigate local hospitals, universities, and research centers with expertise in NF.",
              }}
              hiddenContent={{
                p1: "These institutions often conduct research studies and may be actively seeking participants. Reach out to them and inquire about ongoing studies or upcoming opportunities.",
              }}
              buttonColor="blue"
              className={{
                titleStyle: styles.titleStyle,
                visibleContentStyle: styles.visibleContentStyle,
                hiddenContentStyle: styles.hiddenContentStyle,
                customAccordionContainer: styles.customAccordionContainer,
              }}
              isExpanded={activeAccordion === "EXPLORE"}
              onToggle={() => toggleAccordion("EXPLORE")}
            />
            <AccordionSection
              title="3. Join Registries and Patient Databases"
              visibleContent={{
                p1: "Consider joining NF registries or patient databases.",
              }}
              hiddenContent={{
                p1: "These resources collect valuable information from individuals with NF, enabling researchers to identify potential participants for specific studies or trials.",
              }}
              buttonColor="blue"
              className={{
                titleStyle: styles.titleStyle,
                visibleContentStyle: styles.visibleContentStyle,
                hiddenContentStyle: styles.hiddenContentStyle,
                customAccordionContainer: styles.customAccordionContainer,
              }}
              isExpanded={activeAccordion === "JOIN"}
              onToggle={() => toggleAccordion("JOIN")}
            />
            <AccordionSection
              title="4. Consult with Healthcare Providers"
              visibleContent={{
                p1: "Discuss your interest in participating in NF research with your healthcare provider or NF specialist.",
              }}
              hiddenContent={{
                p1: "They can guide you, provide recommendations, and help connect you with relevant research opportunities.",
              }}
              buttonColor="blue"
              className={{
                titleStyle: styles.titleStyle,
                visibleContentStyle: styles.visibleContentStyle,
                hiddenContentStyle: styles.hiddenContentStyle,
                customAccordionContainer: styles.customAccordionContainer,
              }}
              isExpanded={activeAccordion === "CONSULT"}
              onToggle={() => toggleAccordion("CONSULT")}
            />
          </aside>
        </article>
      </div>
    </>
  );
};

export default MyComponent3;
