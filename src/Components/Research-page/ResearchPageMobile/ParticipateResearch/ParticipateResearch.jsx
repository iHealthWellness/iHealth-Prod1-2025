import styles from "./ParticipateResearch.module.css";
import AccordionSection from "src/Components/UIComponents/AccordionSection/AccordionSection";
import Research6 from "/src/Assets/Images/Research-6.png";
import Research7 from "/src/Assets/Images/Research-7.png";

function ParticipateResearch() {
  return (
    <article id="participate" className={styles.mainSection}>
      <header>
        <h2 className="SN-M-H2-24">
          Participate in Research for Neurofibromatosis:
          <span className={styles.afterBreak}> Make a Difference</span>
        </h2>
      </header>
      <AccordionSection
        visibleContent={{
          p1: "Neurofibromatosis (NF) is a complex genetic disorder that affects thousands of individuals worldwide.",
        }}
        hiddenContent={{
          p1: "If you or a loved one is affected by NF, you have an opportunity to actively contribute to the advancement of knowledge and the development of new treatments by participating in research studies. Your participation can make a real difference in the lives of individuals with NF, both today and in the future.eurofibromatosis (NF) is a complex genetic disorder that affects thousands of individuals worldwide.",
        }}
        buttonColor="blue"
        className={{
          visibleContentStyle: styles.visibleContentStyle,
          customHiddenContentStyle: styles.customHiddenContentStyle,
          customAccordionContainer: styles.customAccordionContainer,
        }}
      />
      <section className={styles.secondSection}>
        <AccordionSection
          title="Participating in NF research offers several benefits:"
          buttonColor="grey"
          className={{
            titleStyle: styles.titleStyle,
            hiddenContentStyle: styles.hiddenContentStyle,
            customAccordionSection: styles.customAccordionSection,
          }}
          hiddenContent={{
            p1: "1. Advancing Scientific Knowledge",
            p2: "By participating in research studies, you contribute to the growing body of scientific knowledge about NF. Researchers rely on the participation of individuals like you to gain insights into the causes, progression, and management of NF.",
            p3: "2. Improved Treatment Options",
            p4: "Your involvement in research can lead to the development of better treatment options for NF. Researchers and scientists are constantly working to identify new therapies, medications, and interventions that can enhance the quality of life for individuals with NF.",
            p5: "3. Supporting Future Generations",
            p6: "Your participation helps future generations affected by NF. The data and information gathered through research studies pave the way for improved understanding, earlier diagnosis, and more effective treatments.",
            p7: "4. Empowering the NF Community",
            p8: "Participating in research provides an opportunity to connect with others in the NF community. Through engagement with researchers, healthcare professionals, and fellow participants, you can find support, share experiences, and contribute to a network of understanding and empathy.",
          }}
        />
        <AccordionSection
          title="How to Get Involved:"
          buttonColor="grey"
          className={{
            titleStyle: styles.titleStyle,
            hiddenContentStyle: styles.hiddenContentStyle,
            customAccordionSection: styles.customAccordionSection,
          }}
          image={
            <img
              className={styles.accordionImg}
              src={Research6}
              alt="doctor and patient interaction"
            />
          }
          hiddenContent={{
            p1: "1. Stay Informed",
            p2: "Keep yourself updated on the latest NF research by following reputable NF organizations, medical journals, and research institutions. They often share information about ongoing studies and clinical trials.",
            p3: "2. Explore Research Opportunities",
            p4: "Investigate local hospitals, universities, and research centers with expertise in NF. These institutions often conduct research studies and may be actively seeking participants. Reach out to them and inquire about ongoing studies or upcoming opportunities.",
            p5: "3. Join Registries and Patient Databases",
            p6: "Consider joining NF registries or patient databases. These resources collect valuable information from individuals with NF, enabling researchers to identify potential participants for specific studies or trials.",
            p7: "4. Consult with Healthcare Providers",
            p8: "Discuss your interest in participating in NF research with your healthcare provider or NF specialist. They can guide you, provide recommendations, and help connect you with relevant research opportunities.",
          }}
        />
        <AccordionSection
          title="Important Considerations:"
          buttonColor="grey"
          className={{
            titleStyle: styles.titleStyle,
            hiddenContentStyle: styles.hiddenContentStyle,
            customAccordionSection: styles.customAccordionSection,
          }}
          image={
            <img
              className={styles.accordionImg}
              src={Research7}
              alt="doctor and patient interaction"
            />
          }
          hiddenContent={{
            p1: "Before participating in any research study, it's essential to consider the following:",
            p2: "1. Informed Consent",
            p3: "Understand the purpose, procedures, potential risks, and benefits of the study. Make sure you receive and review the informed consent document before agreeing to participate. If you have any questions, don't hesitate to ask the research team.",
            p4: "2. Confidentiality and Privacy",
            p5: "Ensure that your personal information remains confidential and protected in accordance with research ethics and regulations. Research studies have strict protocols to safeguard participants' privacy.",
            p6: "3. Time Commitment",
            p7: "Evaluate the time commitment required for participation, including visits, tests, and follow-ups. Determine if the study's timeline aligns with your availability and schedule.",
            p8: "4. Travel and Expenses",
            p9: "Consider any associated travel or financial implications. Inquire about reimbursements or compensation available for your participation. Some studies may cover certain expenses related to your involvement.",
          }}
        />
      </section>
    </article>
  );
}

export default ParticipateResearch;
