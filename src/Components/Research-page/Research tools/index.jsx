import React, { useEffect } from "react";
import "./index.css";
import Research2 from "src/Assets/Images/Research-2.png";
import AOS from "aos";
import "aos/dist/aos.css";

const section2 = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      mirror: false,
    });
  }, []);

  return (
    <section id="tools">
      <div>
        <div className="tools">
          <h1 className="tool">
            Neurofibromatosis Research Tools and Resources: Empowering Patients
            and
            <br />
            Professionals
          </h1>
          <p data-aos="slide-left">
            Neurofibromatosis (NF) is a complex genetic disorder that requires
            ongoing research and collaboration among patients, healthcare
            professionals, and researchers. To facilitate access to valuable
            information and support, numerous research tools and resources have
            been developed. In this article, we will explore a variety of
            resources available to empower patients and professionals involved
            in neurofibromatosis research.
          </p>
        </div>
        <div className="notes">
          <img data-aos="slide-right" src={Research2} alt="" />
          <div className="note">
            <p data-aos="slide-left">
              <span>1.National Institutes of Health (NIH) </span>
              Neurofibromatosis Research: The National Institutes of Health
              (NIH) is a renowned institution at the forefront of medical
              research. Their dedicated branch, the National Institute of
              Neurological Disorders and Stroke (NINDS), offers a comprehensive
              range of resources and updates on neurofibromatosis research.
              Visit their website to access grants, clinical trials, research
              publications, and patient support information: NIH - NINDS
              Neurofibromatosis Research
            </p>

            <p data-aos="slide-left">
              <span>2.PubMed </span>Neurofibromatosis Research Articles: PubMed
              is a widely recognized database that provides access to a vast
              collection of biomedical literature. It serves as a valuable
              resource for researchers and professionals seeking the latest
              neurofibromatosis research articles, reviews, and clinical
              studies. Explore PubMed's neurofibromatosis publications here:
              PubMed - Neurofibromatosis Research
            </p>

            <p data-aos="slide-left">
              <span>3.Neurofibromatosis Network</span> The Neurofibromatosis
              Network is a non-profit organization committed to supporting
              individuals and families affected by neurofibromatosis. Their
              website offers an extensive range of resources, including research
              updates, educational materials, patient support programs, and
              community forums. Visit the Neurofibromatosis Network's website
              for more information: Neurofibromatosis Network
            </p>

            <p data-aos="slide-left">
              <span>4.ClinicalTrials.gov </span>Neurofibromatosis Clinical
              Trials: ClinicalTrials.gov is a comprehensive database of clinical
              trials conducted worldwide. It provides valuable information on
              ongoing and upcoming neurofibromatosis-related trials. Access the
              latest clinical trials and research opportunities here:
              ClinicalTrials.gov - Neurofibromatosis
            </p>
          </div>
        </div>
        <div className="reminder">
          <h2>Do you know?</h2>
          <p>
            These resources can serve as valuable tools for researchers and
            individuals interested in NF research. It's important to explore
            specific databases, funding opportunities, and networks relevant to
            your research interests or goals. Additionally, staying up-to-date
            with the latest research publications and attending conferences or
            scientific meetings can further enhance knowledge and collaboration
            in the field of NF research.
          </p>
        </div>
      </div>
    </section>
  );
};

export default section2;
