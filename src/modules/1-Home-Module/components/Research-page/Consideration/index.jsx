import styles from "./index.module.css";
import Research7 from "src/Assets/Images/Research-7.png";
import useSlideInAnimationRight from "src/hooks/useSlideInAnimationRight";
import AccordionSection from "src/Components/UIComponents/AccordionSection/AccordionSection";

const Consideration = ({ toggleAccordion, activeAccordion }) => {
  useSlideInAnimationRight(styles.slideInText, styles.active);

  return (
    <article
      id="participate"
      className={`${styles.slideInText} ${styles.mainSection}`}
    >
      <section>
        <header className="D-P-20">
          <h3 className="D-H3-24">Important Considerations:</h3>
          <p>
            Before participating in any research study, it's essential to
            consider the following:
          </p>
        </header>
        <section className={styles.contentSection}>
          <AccordionSection
            title="1. Informed Consent"
            visibleContent={{
              p1: "Understand the purpose, procedures, potential risks, and benefits of the study.",
            }}
            hiddenContent={{
              p1: "Make sure you receive and review the informed consent document before agreeing to participate. If you have any questions, don't hesitate to ask the research team.",
            }}
            buttonColor="blue"
            className={{
              titleStyle: styles.titleStyle,
              hiddenContentStyle: styles.hiddenContentStyle,
              customAccordionContainer: styles.customAccordionContainer,
              visibleContentStyle: styles.visibleContentStyle,
            }}
            isExpanded={activeAccordion === "ICF"}
            onToggle={() => toggleAccordion("ICF")}
          />
          <AccordionSection
            title="2. Confidentiality and Privacy"
            visibleContent={{
              p1: "Ensure that your personal information remains confidential and protected in accordance with research ethics and regulations.",
            }}
            hiddenContent={{
              p1: "Research studies have strict protocols to safeguard participants' privacy.",
            }}
            buttonColor="blue"
            className={{
              titleStyle: styles.titleStyle,
              hiddenContentStyle: styles.hiddenContentStyle,
              customAccordionContainer: styles.customAccordionContainer,
              visibleContentStyle: styles.visibleContentStyle,
            }}
            isExpanded={activeAccordion === "PRIVACY"}
            onToggle={() => toggleAccordion("PRIVACY")}
          />
          <AccordionSection
            title="3. Time Commitment"
            visibleContent={{
              p1: "Evaluate the time commitment required for participation, including visits, tests, and follow-ups.",
            }}
            hiddenContent={{
              p1: "Determine if the study's timeline aligns with your availability and schedule.",
            }}
            buttonColor="blue"
            className={{
              titleStyle: styles.titleStyle,
              hiddenContentStyle: styles.hiddenContentStyle,
              customAccordionContainer: styles.customAccordionContainer,
              visibleContentStyle: styles.visibleContentStyle,
            }}
            isExpanded={activeAccordion === "TIME"}
            onToggle={() => toggleAccordion("TIME")}
          />
          <AccordionSection
            title="4. Travel and Expenses"
            visibleContent={{
              p1: "Consider any associated travel or financial implications.",
            }}
            hiddenContent={{
              p1: "Inquire about reimbursements or compensation available for your participation. Some studies may cover certain expenses related to your involvement.",
            }}
            buttonColor="blue"
            className={{
              titleStyle: styles.titleStyle,
              hiddenContentStyle: styles.hiddenContentStyle,
              customAccordionContainer: styles.customAccordionContainer,
              visibleContentStyle: styles.visibleContentStyle,
            }}
            isExpanded={activeAccordion === "TRAVEL"}
            onToggle={() => toggleAccordion("TRAVEL")}
          />
        </section>
      </section>
      <aside>
        <img
          src={Research7}
          alt="doctor and patient interaction"
          loading="lazy"
        />
      </aside>
      <summary className={styles.bluePattern}>
        <header className="D-H3-24">Make a Difference Today</header>
        <p className="D-P-20">
          Your participation in NF research is invaluable. By contributing your
          time, knowledge, and experiences, you actively contribute to advancing
          the understanding and treatment of NF. Together, we can make a
          difference in the lives of individuals affected by this complex
          condition.
        </p>
        <p className="D-P-20">
          Take the first step today and explore the research opportunities
          available to you. Your involvement matters, and by participating, you
          play an integral role in shaping a brighter future for those living
          with NF.
        </p>
      </summary>
    </article>
  );
};

export default Consideration;
