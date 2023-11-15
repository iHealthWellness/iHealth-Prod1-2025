import React, { useState, useEffect, useRef } from "react";
import "./MyComponent3.css";
import Research2 from "src/Assets/Images/Research-2.png";
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





const MyComponent3 = () => {
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
    </div>
  );
};

export default MyComponent3;
