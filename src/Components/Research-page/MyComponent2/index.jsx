import React, { useState, useEffect, useRef } from "react";
import "./MyComponent2.css";
import Research2 from "src/Assets/Images/Research-2.png";
import Close from "src/Assets/Icons/minus.png";
import Open from "src/Assets/Icons/plus.png";
import Research4 from "src/Assets/Images/Research-4.png";

const Section = ({ title, content, summary }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`section ${expanded ? "expanded" : ""}`}>
      <div className="titleContainer">
        <h2>{title}</h2>
        <div
          className="button"
          onClick={toggleExpanded}
          role="button"
          tabIndex={0}
        >
          <img
            src={expanded ? Close : Open}
            alt={expanded ? "Read Less" : "Read More"}
          />
        </div>
      </div>
      <p className="summary">{summary}</p>
      {expanded && <p className="fullContent">{content}</p>}

    </div>
  );
};





const MyComponent2 = () => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) {
          const slideInAt =
            window.scrollY +
            window.innerHeight -
            ref.getBoundingClientRect().top;
          const elementBottom = ref.offsetTop + ref.clientHeight;
          const isHalfShown = slideInAt > ref.offsetTop;
          const isNotScrolledPast = window.scrollY < elementBottom;

          if (isHalfShown && isNotScrolledPast) {
            ref.classList.add("active");
          } else {
            ref.classList.remove("active");
          }
        }
      });
    };

    handleScroll(); // Call it once to check on load
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="container" ref={(el) => (sectionRefs.current[0] = el)}>
      <div className="photo">
          <img src={Research4} alt="Display" />
        </div>
        <div className="textSections active">
          <Section
            title="Everolimus"
            summary="            Research studies and clinical trials have investigated the use of
            Everolimus in managing NF1-related tumors, particularly plexiform
            neurofibromas (PNs). Everolimus an mTOR inhibitor, has emerged as a
            notable therapeutic option in the realm of neurofibromatosis (NF)
            research. Extensive clinical trials have investigated its potential
            in treating NF-related tumors, particularly subependymal giant cell
            astrocytomas (SEGAs) associated with neurofibromatosis type 1 (NF1)
            or tuberous sclerosis complex.           The efficacy of Everolimus in managing SEGAs has been significant,
            leading to its approval by the U.S. Food and Drug Administration
            (FDA) specifically for the treatment of SEGAs in individuals with
            TSC. This achievement signifies the recognition of Everolimus as a
            viable and beneficial treatment option for this particular
            manifestation of NF-related tum. "
            content="             The targeted inhibition of mTOR, a protein involved in regulating
            cell growth and proliferation, has shown promise in effectively
            addressing SEGAs associated with NF1 and TSC. The approval of
            Everolimus for SEGAs marks an important milestone in the field of NF
            research and presents new hope for individuals affected by these tum.             As ongoing research and clinical trials continue to unfold, further
            insights may emerge regarding the broader applicability of
            Everolimus and its potential for treating other NF-related tum.             Everolimus was well-tolerated by the participants in the study.
            Fifteen of the 22 participants in the study experienced tumor
            shrinkage or no tumor growth, with 10 of those remaining free of
            progression during follow-up. The study indicates that everolimus
            should be considered for therapy in this patient population. In
            addition, amongst those with an optic pathway glioma, the majority
            had stable visual acuity after treatment with everolimus."
          />
        </div>

      </div>
    </div>
  );
};

export default MyComponent2;
