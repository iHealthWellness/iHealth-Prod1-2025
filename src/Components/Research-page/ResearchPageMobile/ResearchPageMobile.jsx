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

function ResearchPageMobile() {
  return (
    <div className={styles.researchContainer}>
      <HeroMobile />
      <ResearchIntroduction />
      <ResearchNavigation />
      <ResearchTools />
      <DoYouKnow />
      <ClinicalDrugTherapies />
      <Conclusion />
      <ParticipateResearch />
      <MakeDifference />
    </div>
  );
}

export default ResearchPageMobile;
