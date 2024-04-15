import styles from "./index.module.css";
import Research7 from "src/Assets/Images/Research-7.png";
import useSlideInAnimationRight from "src/hooks/useSlideInAnimationRight";
import AccordionSection from "src/Components/UIComponents/AccordionSection/AccordionSection";

const Consideration = () => {
  useSlideInAnimationRight(styles.slideInText, styles.active);

  return (
    <article
      id="participate"
      className={`${styles.slideInText} ${styles.mainSection}`}
    >
      <section>
        <header className="SN-D-P-20">
          <h3>Important Considerations:</h3>
          <p>
            Before participating in any research study, it's essential to
            consider the following:
          </p>
        </header>
        <section className={styles.contentSection}>
          <AccordionSection
            title="1. Informed Consent"
            hiddenContent={{
              p1: "Understand the purpose, procedures, potential risks, and benefits of the study. Make sure you receive and review the informed consent document before agreeing to participate. If you have any questions, don't hesitate to ask the research team.",
            }}
            buttonColor="blue"
            className={{
              titleStyle: styles.titleStyle,
              hiddenContentStyle: styles.hiddenContentStyle,
              customAccordionContainer: styles.customAccordionContainer,
            }}
          />
          <AccordionSection
            title="2. Confidentiality and Privacy"
            hiddenContent={{
              p1: "Ensure that your personal information remains confidential and protected in accordance with research ethics and regulations. Research studies have strict protocols to safeguard participants' privacy.",
            }}
            buttonColor="blue"
            className={{
              titleStyle: styles.titleStyle,
              hiddenContentStyle: styles.hiddenContentStyle,
              customAccordionContainer: styles.customAccordionContainer,
            }}
          />
          <AccordionSection
            title="3. Time Commitment"
            hiddenContent={{
              p1: "Evaluate the time commitment required for participation, including visits, tests, and follow-ups. Determine if the study's timeline aligns with your availability and schedule.",
            }}
            buttonColor="blue"
            className={{
              titleStyle: styles.titleStyle,
              hiddenContentStyle: styles.hiddenContentStyle,
              customAccordionContainer: styles.customAccordionContainer,
            }}
          />
          <AccordionSection
            title="4. Travel and Expenses"
            hiddenContent={{
              p1: "Consider any associated travel or financial implications. Inquire about reimbursements or compensation available for your participation. Some studies may cover certain expenses related to your involvement.",
            }}
            buttonColor="blue"
            className={{
              titleStyle: styles.titleStyle,
              hiddenContentStyle: styles.hiddenContentStyle,
              customAccordionContainer: styles.customAccordionContainer,
            }}
          />
        </section>
      </section>
      <aside className="SN-D-P-20">
        <img
          src={Research7}
          alt="doctor and patient interaction"
          loading="lazy"
        />
      </aside>
      <summary className={styles.bluePattern}>
        <header className="SN-D-H3-24">Make a Difference Today</header>
        <p className="SN-D-P-20">
          Your participation in NF research is invaluable. By contributing your
          time, knowledge, and experiences, you actively contribute to advancing
          the understanding and treatment of NF. Together, we can make a
          difference in the lives of individuals affected by this complex
          condition.
        </p>
        <p className="SN-D-P-20">
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
