import Hero from "../Hero";
import MyComponent from "../MyComponent";
import MyComponent2 from "../MyComponent2";
import MyComponent3 from "../MyComponent3";
import Tools from "../Research tools";
import Therapies from "../Therapies";
import Moreinfo from "../More-info";
import Segas from "../Segas";
import Participate from "../Participate";
import Consideration from "../Consideration";
import styles from "./ResearchPageDesktop.module.css";
import { useState } from "react";

const ResearchPageDesktop = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (accordionID) => {
    setActiveAccordion(activeAccordion === accordionID ? null : accordionID);
  };

  return (
    <div className={styles.researchPage}>
      <Hero />
      <Tools />
      <MyComponent
        toggleAccordion={toggleAccordion}
        activeAccordion={activeAccordion}
      />
      <Therapies />
      <Moreinfo />
      <MyComponent2
        toggleAccordion={toggleAccordion}
        activeAccordion={activeAccordion}
      />
      <Segas />
      <Participate />
      <MyComponent3
        toggleAccordion={toggleAccordion}
        activeAccordion={activeAccordion}
      />
      <Consideration
        toggleAccordion={toggleAccordion}
        activeAccordion={activeAccordion}
      />
    </div>
  );
};

export default ResearchPageDesktop;
