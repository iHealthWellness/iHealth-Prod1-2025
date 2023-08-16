<<<<<<< HEAD
<<<<<<< HEAD
import React, {useEffect} from "react";
=======
import React from "react";
>>>>>>> e05d4fd (update on research)
=======
import React, {useEffect} from "react";
>>>>>>> 16586ad (update)
import "./index.css";
import Research3 from "src/Assets/Images/Research-3.png";

const section3 = () => {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 16586ad (update)
  useEffect(() => {
    const textElements = document.querySelectorAll('.slide-in-text');

    const handleScroll = () => {
      textElements.forEach((textElement) => {
        const slideInAt = (window.scrollY + window.innerHeight) - textElement.clientHeight / 2;
        const elementBottom = textElement.offsetTop + textElement.clientHeight;
        const isHalfShown = slideInAt > textElement.offsetTop;
        const isNotScrolledPast = window.scrollY < elementBottom;

        if (isHalfShown && isNotScrolledPast) {
          textElement.classList.add('active');
        } else {
          textElement.classList.remove('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="clinic" id="clinical">
      <div className="slide-in-text">
<<<<<<< HEAD
=======
  return (
    <div className="clinic" id="clinical">
>>>>>>> e05d4fd (update on research)
=======
>>>>>>> 16586ad (update)
      <div className="clinical-therapies">
        <h1 className="clinic1">Clinical Drug Therapies</h1>
        <p className="clinic2">
          Neurofibromatosis (NF) and its related symptoms are often managed
          using various clinical drug therapies.
          <br />
          The following examples highlight some of the treatment options
          available:
        </p>
      </div>

      <div className="type-1">
        <div className="Selumetinib">
          <span className="selumetinib-span">
            Selumetinib for Children With Neurofibromatosis Type 1
          </span>
          <p className="selumetinib-p">
            Selumetinib is a highly promising drug utilized in the treatment of
            NF1-related plexiform neurofibromas, both in children and adults. By
            inhibiting the activity of the MEK protein, which plays a crucial
            role in the development of neurofibromas, Selumetinib has
            demonstrated remarkable efficacy. Numerous clinical trials have been
            conducted to study its effects, and the results have been incredibly
            encouraging. Patients undergoing treatment with Selumetinib have
            witnessed significant tumor shrinkage and noticeable improvements in
            their associated symptoms. This breakthrough holds great potential
            for enhancing the quality of life for individuals affected by NF1.
          </p>
        </div>
        <div>
          <img className="selumitinib-img" src={Research3} alt="" />
        </div>
      </div>
<<<<<<< HEAD
      </div>
=======
>>>>>>> e05d4fd (update on research)
      <div className="trametinib">
        <span className="trametinib-span">
          Trametinib: Promising Results in Adults and Children{" "}
        </span>
        <p className="trametinib-p">
          A potent MEK inhibitor, has emerged as a promising candidate for the
          treatment of NF1-related plexiform neurofibromas. Numerous clinical
          trials have investigated its effectiveness in managing these tumors,
          and encouraging outcomes have been observed. As a MEK inhibitor,
          Trametinib acts by targeting and inhibiting the activity of the MEK
          protein, a key player in the development of neurofibromas. By blocking
          this signaling pathway, Trametinib effectively disrupts the aberrant
          cellular processes that drive tumor growth. The clinical trials
          assessing Trametinib have revealed promising results, demonstrating
          its potential to reduce tumor size and improve associated symptoms.
          These findings have ignited optimism within the neurofibromatosis
          research community, as Trametinib holds the potential to address an
          unmet medical need in the management of NF1-related plexiform
          neurofibromas. However, it's important to note that further research
          is still ongoing to fully understand the long-term efficacy and safety
          profile of Trametinib for this specific indication. As clinical trials
          progress, the medical community eagerly awaits more comprehensive data
          to inform its use and potential incorporation into standard treatment
          approaches. Ultimately, the investigation of Trametinib as a
          therapeutic option for NF1-related plexiform neurofibromas represents
          a significant step forward in advancing treatment strategies for
          individuals affected by this challenging condition.
        </p>
      </div>
      </div>
    </div>
  );
};

export default section3;
