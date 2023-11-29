import React, { useState, useEffect, useRef } from "react";
import "./MyComponent.css";
import Research2 from "src/Assets/Images/Research-2.png";
import Close from "src/Assets/Icons/minus.png";
import Open from "src/Assets/Icons/plus.png";

const Section = ({ title, content, summary }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`section ${expanded ? "expanded" : ""}`}>
      <div className="titleContainer">
        <h2>{title}</h2>
      </div>

      <p className="summary">
        {summary}
        {!expanded && (
          <div
            className="button"
            onClick={toggleExpanded}
            role="button"
            tabIndex={0}
          >
            <img
              src={Open}
              alt="Read More"
            />
          </div>
        )}
      </p>

      <div className="fullContent">
        {expanded && (
          <>
            <p>{content}</p>
            <div
              className="button"
              onClick={toggleExpanded}
              role="button"
              tabIndex={0}
            >
              <img
                src={Close}
                alt="Read Less"
              />
            </div>
          </>
        )}
      </div>

      
    </div>
  );
};



const MyComponent = () => {
  const sectionRefs = useRef([]);

  const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  const handleScroll = () => {
    sectionRefs.current.forEach((ref) => {
      if (ref) {
        const slideInAt =
          window.scrollY +
          window.innerHeight -
          ref.offsetHeight / 2;
        const elementBottom = ref.offsetTop + ref.offsetHeight;
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

  useEffect(() => {
    const debouncedHandleScroll = debounce(handleScroll, 50);

    window.addEventListener("scroll", debouncedHandleScroll);

    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
    };
  }, []);

  return (
    <div>
      <div className="container slide-in" ref={(el) => (sectionRefs.current[0] = el)}>
        <div className="photo">
          <img src={Research2} alt="Display" />
        </div>
        <div className="textSections active">
          <Section
            title="1.National Institutes of Health (NIH)"
            summary="Neurofibromatosis Research: The National Institutes of Health (NIH) is a renowned institution at the forefront of medical research."
            content="Their dedicated branch, the National Institute of Neurological Disorders and Stroke (NINDS), offers a comprehensive range of resources and updates on neurofibromatosis research. Visit their website to access grants, clinical trials, research publications, and patient support information: NIH - NINDS Neurofibromatosis Research"
          />
          <Section
            title="2.PubMed"
            summary="Neurofibromatosis Research Articles: PubMed is a widely recognized database that provides access to a vast collection of biomedical literature."
            content="It serves as a valuable resource for researchers and professionals seeking the latest neurofibromatosis research articles, reviews, and clinical studies. Explore PubMed's neurofibromatosis publications here: PubMed - Neurofibromatosis Research"
          />
          <Section
            title="3.Neurofibromatosis Network"
            summary="The Neurofibromatosis Network is a non-profit organization committed to supporting individuals and families affected by neurofibromatosis."
            content="Their website offers an extensive range of resources, including research updates, educational materials, patient support programs, and community forums. Visit the Neurofibromatosis Network's website for more information: Neurofibromatosis Network"
          />
          <Section
            title="4.ClinicalTrials.gov"
            summary="Neurofibromatosis Research Articles: PubMed is a widely recognized database that provides access to a vast collection of biomedical literature."
            content="It serves as a valuable resource for researchers and professionals seeking the latest neurofibromatosis research articles, reviews, and clinical studies. Explore PubMed's neurofibromatosis publications here: PubMed - Neurofibromatosis Research"
          />
        </div>
      </div>
      <section
        id="tools"
        className="research-tools"
        ref={(el) => (sectionRefs.current[1] = el)}
      >
        <div className="reminder">
          <h2 className="reminder1">Do you know?</h2>
          <p className="reminder2">
            These resources can serve as valuable tools for researchers and
            individuals interested in NF research. It's important to explore
            specific databases, funding opportunities, and networks relevant to
            your research interests or goals. Additionally, staying up-to-date
            with the latest research publications and attending conferences or
            scientific meetings can further enhance knowledge and collaboration
            in the field of NF research.
          </p>
        </div>
      </section>
    </div>
  );
};

export default MyComponent;