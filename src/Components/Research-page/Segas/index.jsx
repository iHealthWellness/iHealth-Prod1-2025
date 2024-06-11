import styles from "./index.module.css";
import useSlideInAnimationRight from "src/hooks/useSlideInAnimationRight";

const section5 = () => {
  useSlideInAnimationRight(styles.slideInText, styles.active);

  return (
    <div className={styles.segasContainer}>
      <article className={`${styles.slideInText} ${styles.sectionContainer}`}>
        <header className="D-H1-32">Learn more about SEGAs</header>
        <p className="D-T-M-P-16">
          Subependymal giant cell astrocytomas (SEGAs) are rare brain tumors
          typically found in individuals with tuberous sclerosis complex (TSC)
          or, less commonly, in individuals with neurofibromatosis type 1 (NF1).
          These tumors develop in the brain's ventricles, near the foramen of
          Monro.
        </p>
        <p className="D-T-M-P-16">
          SEGAs are characterized by the presence of abnormal giant cells. They
          can vary in size and may lead to symptoms such as headaches, seizures,
          cognitive changes, and increased intracranial pressure.
        </p>
        <p className="D-T-M-P-16">
          Diagnosis is made through imaging techniques like MRI or CT scans.
          Treatment options include surgical resection and targeted drug
          therapies. Surgery is performed when feasible, while targeted drug
          therapies like Everolimus, an mTOR inhibitor, are used for inoperable
          or recurrent tumors. Everolimus has been FDA-approved for the
          treatment of SEGAs in individuals with TSC.
        </p>
        <p className="D-T-M-P-16">
          Regular monitoring and follow-up are important, as SEGAs can have
          variable growth patterns. Long-term management aims to prevent tumor
          growth, alleviate symptoms, and minimize complications.
        </p>
        <p className="D-T-M-P-16">
          Consulting with a knowledgeable medical professional is crucial to
          receive a comprehensive evaluation, accurate diagnosis, and
          personalized management plan based on the individual's specific
          condition and requirements.
        </p>
      </article>
      <article className={`${styles.slideInText} ${styles.alfaContainer}`}>
        <header className="SN-D-H3-24">Peginterferon alfa-2b</header>
        <p className="D-T-M-P-16">
          A medication known for its immune-modulating properties, has been the
          subject of clinical trials aimed at evaluating its effectiveness in
          treating optic pathway gliomas associated with neurofibromatosis type
          1 (NF1). Encouragingly, the results of these trials have demonstrated
          its potential efficacy in stabilizing tumor growth and preserving
          vision, representing a significant advancement in the management of
          this specific manifestation of NF1.
        </p>
        <p className="D-T-M-P-16">
          By modulating the immune system, peginterferon alfa-2b exerts its
          therapeutic effects on optic pathway gliomas. It works by regulating
          the immune response within the tumor microenvironment, leading to a
          reduction in tumor growth and associated symptoms. The clinical trials
          investigating peginterferon alfa-2b have provided evidence of its
          positive impact on optic pathway gliomas in individuals with NF1.
          Notably, it has shown effectiveness in stabilizing tumor growth,
          preventing further deterioration of vision, and preserving visual
          function.
        </p>
        <p className="D-T-M-P-16">
          These promising outcomes have generated considerable interest and
          optimism within the medical community, as peginterferon alfa-2b
          presents a potential treatment option for individuals with NF1-related
          optic pathway gliomas. However, further research and larger-scale
          studies are necessary to fully elucidate its long-term efficacy,
          optimal dosing, and potential side effects.
        </p>
        <p className="D-T-M-P-16">
          Patients ≥18 months to 21 years of age with at least one inoperable PN
          that had the potential to cause significant morbidity were eligible.
        </p>
        <a
          href="https://academic.oup.com/neuro-oncology/article/19/2/289/3038131"
          target="_blank"
          rel="noopener noreferrer"
          className="D-T-M-P-16"
        >
          Source:
          https://academic.oup.com/neuro-oncology/article/19/2/289/3038131
        </a>
      </article>
      <article
        className={`${styles.slideInText} ${styles.conclusionContainer}`}
      >
        <header className="SN-D-H3-24">Conclusion</header>
        <p className="D-T-M-P-16">
          It's important to note that the choice of drug therapy depends on
          various factors, including the specific manifestations of NF, the
          individual's overall health, and the treatment goals. The use of these
          drug therapies is determined by healthcare providers based on
          individual patient needs and the latest research and clinical
          guidelines.
        </p>
        <p className="D-T-M-P-16">
          It's crucial to consult with a healthcare professional who specializes
          in NF, such as a neurologist or a geneticist, to determine the most
          appropriate treatment approach for your specific condition. They can
          provide personalized guidance and monitor your response to the chosen
          therapy.
        </p>
      </article>
    </div>
  );
};

export default section5;
