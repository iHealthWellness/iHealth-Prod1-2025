import styles from "./MakeDifference.module.css";
import AccordionSection from "src/Components/UIComponents/AccordionSection/AccordionSection";

function MakeDifference({ toggleAccordion, activeAccordion }) {
  return (
    <article className={styles.mainSection}>
      <section>
        <AccordionSection
          title="Make a Difference Today"
          visibleContent={{
            p1: "Your participation in NF research is invaluable. By contributing your time, knowledge, and experiences, you actively contribute to advancing the understanding and treatment of NF.",
          }}
          hiddenContent={{
            p1: "Together, we can make a difference in the lives of individuals affected by this complex condition.",
            p2: "Take the first step today and explore the research opportunities available to you. Your involvement matters, and by participating, you play an integral role in shaping a brighter future for those living with NF.",
          }}
          buttonColor="blue"
          className={{
            titleStyle: styles.titleStyle,
            visibleContentStyle: styles.visibleContentStyle,
            hiddenContentStyle: styles.hiddenContentStyle,
          }}
          isExpanded={activeAccordion === "mobTODAY"}
          onToggle={() => toggleAccordion("mobTODAY")}
        />
      </section>
    </article>
  );
}

export default MakeDifference;
