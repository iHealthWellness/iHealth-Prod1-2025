import AccordionSection from "src/Components/UIComponents/AccordionSection/AccordionSection";
import Research3 from "src/Assets/Images/Research-3.png";

import styles from "./DoYouKnow.module.css";

function DoYouKnow() {
  return (
    <article className={styles.mainSection}>
      <section>
        <AccordionSection
          title="Do you know?"
          visibleContent={{
            p1: "These resources can serve as valuable tools for researchers and individuals interested in NF research.",
          }}
          hiddenContent={{
            p1: "It's important to explore specific databases, funding opportunities, and networks relevant to your research interests or goals. Additionally, staying up-to-date with the latest research publications and attending conferences or scientific meetings can further enhance knowledge and collaboration in the field of NF research.",
          }}
          buttonColor="blue"
          className={{
            titleStyle: styles.titleStyle,
            visibleContentStyle: styles.visibleContentStyle,
            hiddenContentStyle: styles.hiddenContentStyle,
          }}
        />
      </section>
      <img src={Research3} alt="lab student working on the microscope" />
    </article>
  );
}

export default DoYouKnow;
