import AccordionSection from "src/Components/UIComponents/AccordionSection/AccordionSection";
import Research4 from "/src/Assets/Images/Research-4.png";
import styles from "./ClinicalDrugTherapies.module.css";

function ClinicalDrugTherapies() {
  return (
    <article id="clinical" className={styles.mainSection}>
      <header>
        <h3 className="SN-M-H2-24">Clinical Drug Therapies</h3>
        <h2 className="SN-M-P-16">
          Neurofibromatosis (NF) and its related symptoms are often managed
          using various clinical drug therapies. The following examples
          highlight some of the treatment options available:
        </h2>
      </header>
      <section className={styles.secondSection}>
        <AccordionSection
          title="Selumetinib for Children With Neurofibromatosis Type 1"
          buttonColor="grey"
          className={{
            titleStyle: styles.titleStyle,
            hiddenContentStyle: styles.hiddenContentStyle,
            customAccordionSection: styles.customAccordionSection,
          }}
          hiddenContent={{
            paragraph1:
              "Selumetinib is a highly promising drug utilized in the treatment of NF1-related plexiform neurofibromas, both in children and adults. By inhibiting the activity of the MEK protein, which plays a crucial role in the development of neurofibromas, Selumetinib has demonstrated remarkable efficacy. Numerous clinical trials have been conducted to study its effects, and the results have been incredibly encouraging. Patients undergoing treatment with Selumetinib have witnessed significant tumor shrinkage and noticeable improvements in their associated symptoms. This breakthrough holds great potential for enhancing the quality of life for individuals affected by NF1.",
            link: (
              <a
                href="https://jamanetwork.com/journals/jama/article-abstract/2766145"
                target="_blank"
                rel="noopener noreferrer"
                className="SN-D-P-20"
              >
                Source:
                https://jamanetwork.com/journals/jama/article-abstract/2766145
              </a>
            ),
          }}
        />
        <AccordionSection
          title="Here is more information about MEK protein"
          buttonColor="grey"
          className={{
            titleStyle: styles.titleStyle,
            hiddenContentStyle: styles.hiddenContentStyle,
            customAccordionSection: styles.customAccordionSection,
          }}
          hiddenContent={{
            paragraph1:
              "The MEK protein, also known as Mitogen-Activated Protein Kinase Kinase, is a key component of the mitogen-activated protein kinase (MAPK) signaling pathway. This pathway is responsible for transmitting signals from the cell surface to the nucleus, regulating various cellular processes such as cell growth, differentiation, and survival.",
            paragraph2:
              "MEK acts as an intermediate signaling molecule in the MAPK pathway. When an extracellular signal, such as a growth factor, binds to a receptor on the cell surface, it triggers a cascade of molecular events, leading to the activation of MEK. Activated MEK then phosphorylates and activates downstream kinases, known as ERK (Extracellular signal-Regulated Kinases). ERKs subsequently enter the nucleus and initiate gene expression, resulting in the regulation of various cellular functions.",

            paragraph3:
              "In the context of neurofibromatosis, the MEK protein plays a significant role in the development of neurofibromas, which are benign tumors that can arise in individuals with neurofibromatosis type 1 (NF1). Inhibiting the activity of MEK using drugs like Selumetinib has shown promise in reducing tumor growth and improving symptoms associated with NF1-related plexiform neurofibromas.",
          }}
        />
        <AccordionSection
          title="Everolimus"
          buttonColor="grey"
          className={{
            titleStyle: styles.titleStyle,
            hiddenContentStyle: styles.hiddenContentStyle,
            customAccordionSection: styles.customAccordionSection,
          }}
          image={
            <img
              className={styles.accordionImg}
              src={Research4}
              alt="doctor looking into microscope"
            />
          }
          hiddenContent={{
            paragraph1:
              "Research studies and clinical trials have investigated the use of Everolimus in managing NF1-related tumors, particularly plexiform neurofibromas (PNs). Everolimus an mTOR inhibitor, has emerged as a notable therapeutic option in the realm of neurofibromatosis (NF) research. Extensive clinical trials have investigated its potential in treating NF-related tumors, particularly subependymal giant cell astrocytomas (SEGAs) associated with neurofibromatosis type 1 (NF1) or tuberous sclerosis complex (TSC).",
            paragraph2:
              "The efficacy of Everolimus in managing SEGAs has been significant, leading to its approval by the U.S. Food and Drug Administration (FDA) specifically for the treatment of SEGAs in individuals with TSC. This achievement signifies the recognition of Everolimus as a viable and beneficial treatment option for this particular manifestation of NF-related tumors.",
            paragraph3:
              "The targeted inhibition of mTOR, a protein involved in regulating cell growth and proliferation, has shown promise in effectively addressing SEGAs associated with NF1 and TSC. The approval of Everolimus for SEGAs marks an important milestone in the field of NF research and presents new hope for individuals affected by these tumors.",
            paragraph4:
              "As ongoing research and clinical trials continue to unfold, further insights may emerge regarding the broader applicability of Everolimus and its potential for treating other NF-related tumors.",
            paragraph5:
              "Everolimus was well-tolerated by the participants in the study. Fifteen of the 22 participants in the study experienced tumor shrinkage or no tumor growth, with 10 of those remaining free of progression during follow-up. The study indicates that everolimus should be considered for therapy in this patient population. In addition, amongst those with an optic pathway glioma, the majority had stable visual acuity after treatment with everolimus.",
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
        />
        <AccordionSection
          title="Learn more about SEGAs"
          buttonColor="grey"
          className={{
            titleStyle: styles.titleStyle,
            hiddenContentStyle: styles.hiddenContentStyle,
            customAccordionSection: styles.customAccordionSection,
          }}
          hiddenContent={{
            paragraph1:
              "Subependymal giant cell astrocytomas (SEGAs) are rare brain tumors typically found in individuals with tuberous sclerosis complex (TSC) or, less commonly, in individuals with neurofibromatosis type 1 (NF1). These tumors develop in the brain's ventricles, near the foramen of Monro.",
            paragraph2:
              "SEGAs are characterized by the presence of abnormal giant cells. They can vary in size and may lead to symptoms such as headaches, seizures, cognitive changes, and increased intracranial pressure.",
            paragraph3:
              "Diagnosis is made through imaging techniques like MRI or CT scans. Treatment options include surgical resection and targeted drug therapies. Surgery is performed when feasible, while targeted drug therapies like Everolimus, an mTOR inhibitor, are used for inoperable or recurrent tumors. Everolimus has been FDA-approved for the treatment of SEGAs in individuals with TSC.",
            paragraph4:
              "Regular monitoring and follow-up are important, as SEGAs can have variable growth patterns. Long-term management aims to prevent tumor growth, alleviate symptoms, and minimize complications.",
            paragraph5:
              "Consulting with a knowledgeable medical professional is crucial to receive a comprehensive evaluation, accurate diagnosis, and personalized management plan based on the individual's specific condition and requirements.",
          }}
        />
        <AccordionSection
          title="Peginterferon alfa-2b"
          buttonColor="grey"
          className={{
            titleStyle: styles.titleStyle,
            hiddenContentStyle: styles.hiddenContentStyle,
            customAccordionSection: styles.customAccordionSection,
          }}
          hiddenContent={{
            paragraph1:
              "A medication known for its immune-modulating properties, has been the subject of clinical trials aimed at evaluating its effectiveness in treating optic pathway gliomas associated with neurofibromatosis type 1 (NF1). Encouragingly, the results of these trials have demonstrated its potential efficacy in stabilizing tumor growth and preserving vision, representing a significant advancement in the management of this specific manifestation of NF1.",
            paragraph2:
              "By modulating the immune system, peginterferon alfa-2b exerts its therapeutic effects on optic pathway gliomas. It works by regulating the immune response within the tumor microenvironment, leading to a reduction in tumor growth and associated symptoms. The clinical trials investigating peginterferon alfa-2b have provided evidence of its positive impact on optic pathway gliomas in individuals with NF1. Notably, it has shown effectiveness in stabilizing tumor growth, preventing further deterioration of vision, and preserving visual function.",
            paragraph3:
              "These promising outcomes have generated considerable interest and optimism within the medical community, as peginterferon alfa-2b presents a potential treatment option for individuals with NF1-related optic pathway gliomas. However, further research and larger-scale studies are necessary to fully elucidate its long-term efficacy, optimal dosing, and potential side effects.",
            paragraph4:
              "Patients ≥18 months to 21 years of age with at least one inoperable PN that had the potential to cause significant morbidity were eligible.",
            link: (
              <a
                href="https://academic.oup.com/neuro-oncology/article/19/2/289/3038131"
                target="_blank"
                rel="noopener noreferrer"
                className="SN-D-P-20"
              >
                Source:
                https://academic.oup.com/neuro-oncology/article/19/2/289/3038131
              </a>
            ),
          }}
        />
      </section>
    </article>
  );
}

export default ClinicalDrugTherapies;
