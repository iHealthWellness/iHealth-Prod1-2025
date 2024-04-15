import AccordionSection from "src/Components/UIComponents/AccordionSection/AccordionSection";
import Research5 from "/src/Assets/Images/Research-5.png";
import styles from "./Conclusion.module.css";

function Conclusion() {
  return (
    <article className={styles.mainSection}>
      <section>
        <AccordionSection
          title="Conclusion"
          visibleContent={{
            p1: "It's important to note that the choice of drug therapy depends on various factors, including the specific manifestations of NF, the individual's overall health, and the treatment goals.",
          }}
          hiddenContent={{
            p1: "The use of these drug therapies is determined by healthcare providers based on individual patient needs and the latest research and clinical guidelines.",
            p2: "It's crucial to consult with a healthcare professional who specializes in NF, such as a neurologist or a geneticist, to determine the most appropriate treatment approach for your specific condition. They can provide personalized guidance and monitor your response to the chosen therapy.",
          }}
          buttonColor="blue"
          className={{
            titleStyle: styles.titleStyle,
            visibleContentStyle: styles.visibleContentStyle,
            hiddenContentStyle: styles.hiddenContentStyle,
          }}
        />
      </section>
      <img src={Research5} alt="worried patient talking to a doctor" />
    </article>
  );
}

export default Conclusion;
