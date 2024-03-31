import React, { useState, useRef, useEffect } from "react";

import HowItWorksCard from "./HowItWorksCard";

import HowItWorksSteps from "src/Constants/HomePage/HowItWorks.js";
import LearnMoreCard from "./LearnMoreCard";

import "./index.css";

const HowItWorks = () => {
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
    <section className="how-it-works-container">
      <h2 className="how-it-works-heading">Getting started is easy</h2>
      <div className="how-it-works-cards" ref={divRef}>
        {HowItWorksSteps.map((step, idx) => (
          <HowItWorksCard
            icon={<img src={step.image} alt="" width="32px" height="32px" />}
            title={step.title}
            content={step.content}
            idx={idx + 1}
            key={step.title}
            isVisible={isVisible}
          />
        ))}
        <LearnMoreCard isVisible={isVisible} />
      </div>
    </section>
  );
};

export default HowItWorks;

{
  /* <div className="how-it-works-learn-more-box">
<div className="how-it-works-button even">
  <a
    className="how-it-works-learn-more how-it-works-button-label"
    href="#"
  >
    Learn More &gt;
  </a>
</div>
</div> */
}
