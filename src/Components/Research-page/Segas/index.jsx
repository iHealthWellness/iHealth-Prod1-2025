
import React,{useEffect, useState, useRef} from "react";
import "./index.css";

const section5 = () => {

  const [isVisible, setIsVisible] = useState(false);
  const divRef = useRef(null);

  useEffect(() => {
    function handleScroll() {
      const div = divRef.current;
      if (div) {
        const rect = div.getBoundingClientRect();
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;

        if (rect.top <= windowHeight && rect.bottom >= 0) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


 
  return (
    <div className="Segas">
      <div className="segas">
        <h2 className="segas1">Learn more about SEGAs</h2>
        <p className="segas-p">
          Subependymal giant cell astrocytomas (SEGAs) are rare brain tumors
          typically found in individuals with tuberous sclerosis complex (TSC)
          or, less commonly, in individuals with neurofibromatosis type 1 (NF1).
          These tumors develop in the brain's ventricles, near the foramen of
          Monro.
        </p>

        <p className="segas-p">
          SEGAs are characterized by the presence of abnormal giant cells. They
          can vary in size and may lead to symptoms such as headaches, seizures,
          cognitive changes, and increased intracranial pres
        </p>
        <p className="segas-p">
          Diagnosis is made through imaging techniques like MRI or CT scans.
          Treatment options include surgical resection and targeted drug
          therapies. Surgery is performed when feasible, while targeted drug
          therapies like Everolimus, an mTOR inhibitor, are used for inoperable
          or recurrent tumors. Everolimus has been FDA-approved for the
          treatment of SEGAs in individuals with TSC.
        </p>

        <p className="segas-p">
          Regular monitoring and follow-up are important, as SEGAs can have
          variable growth patterns. Long-term management aims to prevent tumor
          growth, alleviate symptoms, and minimize complications.
        </p>

        <p className="segas-p">
          Consulting with a knowledgeable medical professional is crucial to
          receive a comprehensive evaluation, accurate diagnosis, and
          personalized management plan based on the individual's specific
          condition and requirements.
        </p>
      </div>
      {/* <div className="slide-in-text"> */}

      <div className={`peginter ${isVisible ? "slide-in5" : ""}`}
        ref={divRef}>
        <span className="peginter-span">Peginterferon alfa-2b</span>
        <p className="peginter-p">
          <br />A medication known for its immune-modulating properties, has
          been the subject of clinical trials aimed at evaluating its
          effectiveness in treating optic pathway gliomas associated with
          neurofibromatosis type 1 (NF1). Encouragingly, the results of these
          trials have demonstrated its potential efficacy in stabilizing tumor
          growth and preserving vision, representing a significant advancement
          in the management of this specific manifestation of NF1.
          <br /> By modulating the immune system, peginterferon alfa-2b exerts
          its therapeutic effects on optic pathway gliomas. It works by
          regulating the immune response within the tumor microenvironment,
          leading to a reduction in tumor growth and associated symptoms.
          <br />
          The clinical trials investigating peginterferon alfa-2b have provided
          evidence of its positive impact on optic pathway gliomas in
          individuals with NF1. Notably, it has shown effectiveness in
          stabilizing tumor growth, preventing further deterioration of vision,
          and preserving visual function.
          <br />
          These promising outcomes have generated considerable interest and
          optimism within the medical community, as peginterferon alfa-2b
          presents a potential treatment option for individuals with NF1-related
          optic pathway gliomas. However, further research and larger-scale
          studies are necessary to fully elucidate its long-term efficacy,
          optimal dosing, and potential side effects.
          <br />
          Patients ≥18 months to 21 years of age with at least one inoperable PN
          that had the potential to cause significant morbidity were eligible.
          <br />
          <i>Source:
          https://academic.oup.com/neuro-oncology/article/19/2/289/3038131</i>
        </p>
      </div>
      {/* </div> */}
      <div className="conclusion">
        <h2 className="conclusion1">Conclusion</h2>
        <p className="conclusion2">
          It's important to note that the choice of drug therapy depends on
          various factors, including the specific manifestations of NF, the
          individual's overall health, and the treatment goals. The use of these
          drug therapies is determined by healthcare providers based on
          individual patient needs and the latest research and clinical
          guidelines.
          <br />
          It's crucial to consult with a healthcare professional who specializes
          in NF, such as a neurologist or a geneticist, to determine the most
          appropriate treatment approach for your specific condition. They can
          provide personalized guidance and monitor your response to the chosen
          therapy.
        </p>
      </div>
    </div>
  );
};

export default section5;
