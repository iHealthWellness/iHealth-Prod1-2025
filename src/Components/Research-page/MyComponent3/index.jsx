













import React, { useState, useEffect, useRef } from "react";
import "./MyComponent3.css";
import Close from "src/Assets/Icons/minus.png";
import Open from "src/Assets/Icons/plus.png";
import Research6 from "src/Assets/Images/Research-6.png";

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



const MyComponent3 = () => {
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
        <img src={Research6} alt="Display" />
        </div>
        <div className="textSections active">
        <Section
            title="1.Stay Informed"
            summary="Keep yourself updated on the latest NF research by following reputable NF organizations, medical journals, and research institutions."
            content="They often share information about ongoing studies and clinical trials.            "
          />
          <Section
            title="2.Explore Research Opportunities"
            summary="Investigate local hospitals, universities, and research centers with expertise in NF."
            content="These institutions often conduct research studies and may be actively seeking participants. Reach out to them and inquire about ongoing studies or upcoming opportunities."
          />
          <Section
            title="3.Join Registries and Patient Databases"
            summary="Consider joining NF registries or patient databases."
            content="These resources collect valuable information from individuals with NF, enabling researchers to identify potential participants for specific studies or trials."
          />
          <Section
            title="4.Consult with Healthcare Providersv"
            summary="Discuss your interest in participating in NF research with your healthcare provider or NF specialist."
            content="They can guide you, provide recommendations, and help connect you with relevant research opportunities."
          />
        </div>
      </div>
      {/* <section
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
      </section> */}
    </div>
  );
};

export default MyComponent3;