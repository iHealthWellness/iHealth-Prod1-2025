import React, { useEffect, useState } from "react";
import "./index.css";
import Research2 from "src/Assets/Images/Research-2.png";

const Section2 = () => {
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    const textElements = document.querySelectorAll(".slide-in-text2");
    const handleScroll = () => {
      textElements.forEach((textElement) => {
        const slideInAt = window.scrollY + window.innerHeight - textElement.getBoundingClientRect().top;
        const elementBottom = textElement.offsetTop + textElement.clientHeight;
        const isHalfShown = slideInAt > textElement.offsetTop;
        const isNotScrolledPast = window.scrollY < elementBottom;

        if (isHalfShown && isNotScrolledPast) {
          textElement.classList.add("active");
        } else {
          textElement.classList.remove("active");
        }
      });
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleExpansion = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const isNoteExpanded = (id) => {
    return expandedId === id;
  };


  return (
    <section id="tools" className="research-tools">
      <div className="slide-in-text2">
        <div className="tools">
          <h1 className="tool">
            Empowering Patients and Professionals
            <br />
            <span className="after-break">Neurofibromatosis Research Tools and Resources</span>
          </h1>
          <p className="tool-p">
            Neurofibromatosis (NF) is a complex genetic disorder that requires ongoing research and
            collaboration among patients, healthcare professionals, and researchers. To facilitate
            access to valuable information and support, numerous research tools and resources have
            been developed. In this article, we will explore a variety of resources available to
            empower patients and professionals involved in neurofibromatosis research.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section2;
