import styles from "./index.module.css";
import Research6 from "src/Assets/Images/Research-6.png";
import useSlideInAnimationRight from "src/hooks/useSlideInAnimationRight";
import AccordionSection from "src/Components/UIComponents/AccordionSection/AccordionSection";

const MyComponent3 = () => {
  useSlideInAnimationRight(styles.slideInText, styles.active);

  return (
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
          hiddenContent={{
            p1: "Keep yourself updated on the latest NF research by following reputable NF organizations, medical journals, and research institutions. They often share information about ongoing studies and clinical trials.",
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
          title="2. Explore Research Opportunities"
          // visibleContent={{
          //   p1: "Investigate local hospitals, universities, and research centers with expertise in NF.",
          // }}
          hiddenContent={{
            p1: "Investigate local hospitals, universities, and research centers with expertise in NF. These institutions often conduct research studies and may be actively seeking participants. Reach out to them and inquire about ongoing studies or upcoming opportunities.",
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
          title="3. Join Registries and Patient Databases"
          // visibleContent={{
          //   p1: "Consider joining NF registries or patient databases.",
          // }}
          hiddenContent={{
            p1: "Consider joining NF registries or patient databases. These resources collect valuable information from individuals with NF, enabling researchers to identify potential participants for specific studies or trials.",
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
          title="4. Consult with Healthcare Providers"
          hiddenContent={{
            p1: "Discuss your interest in participating in NF research with your healthcare provider or NF specialist. They can guide you, provide recommendations, and help connect you with relevant research opportunities.",
          }}
          buttonColor="blue"
          className={{
            titleStyle: styles.titleStyle,
            visibleContentStyle: styles.visibleContentStyle,
            hiddenContentStyle: styles.hiddenContentStyle,
            customAccordionContainer: styles.customAccordionContainer,
          }}
        />
      </aside>
    </article>
  );
};

export default MyComponent3;
