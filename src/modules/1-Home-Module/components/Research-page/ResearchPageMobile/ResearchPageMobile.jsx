import styles from "./ResearchPageMobile.module.css";
import HeroMobile from "./HeroMobile/HeroMobile";
import ResearchIntroduction from "./ResearchIntroduction/ResearchIntroduction";
import ResearchNavigation from "./ResearchNavigation/ResearchNavigation";
import ResearchTools from "./ResearchTools/ResearchTools";
import DoYouKnow from "./DoYouKnow/DoYouKnow";
import ClinicalDrugTherapies from "./ClinicalDrugTherapies/ClinicalDrugTherapies";
import Conclusion from "./Conclusion/Conclusion";
import ParticipateResearch from "./ParticipateResearch/ParticipateResearch";
import MakeDifference from "./MakeDifference/MakeDifference";
import { useState } from "react";

function ResearchPageMobile() {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (accordionID) => {
    const accordionElement = document.getElementById(accordionID);
  
    if (activeAccordion === accordionID) {
      // If closing the accordion, scroll to its position
      setTimeout(() => {
        accordionElement?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 0);
      setActiveAccordion(null);
    } else {
      // Open the new accordion
      setActiveAccordion(accordionID);
    }
  };
  
  
  return (
    <div className={styles.researchContainer}>
      <HeroMobile />
      <ResearchIntroduction
        toggleAccordion={toggleAccordion}
        activeAccordion={activeAccordion}
      />
      <ResearchNavigation />
      <ResearchTools
        toggleAccordion={toggleAccordion}
        activeAccordion={activeAccordion}
      />
      <DoYouKnow
        toggleAccordion={toggleAccordion}
        activeAccordion={activeAccordion}
      />
      <ClinicalDrugTherapies
        toggleAccordion={toggleAccordion}
        activeAccordion={activeAccordion}
      />
      <Conclusion
        toggleAccordion={toggleAccordion}
        activeAccordion={activeAccordion}
      />
      <ParticipateResearch
        toggleAccordion={toggleAccordion}
        activeAccordion={activeAccordion}
      />
      <MakeDifference
        toggleAccordion={toggleAccordion}
        activeAccordion={activeAccordion}
      />
    </div>
  );
}

export default ResearchPageMobile;
