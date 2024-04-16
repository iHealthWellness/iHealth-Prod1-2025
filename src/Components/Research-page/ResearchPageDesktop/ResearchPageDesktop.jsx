import Hero from "src/Components/Research-page/Hero";
import MyComponent from "src/Components/Research-page/MyComponent";
import MyComponent2 from "src/Components/Research-page/MyComponent2";
import MyComponent3 from "src/Components/Research-page/MyComponent3";
import Tools from "src/Components/Research-page/Research tools";
import Therapies from "src/Components/Research-page/Therapies";
import Moreinfo from "src/Components/Research-page/More-info";
import Segas from "src/Components/Research-page/Segas";
import Participate from "src/Components/Research-page/Participate";
import Consideration from "src/Components/Research-page/Consideration";
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
