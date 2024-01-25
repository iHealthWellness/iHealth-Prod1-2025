import React from "react";
import CircleImages from "src/Components/LivingwithNF/CircleImages/index";
import NFHeading from "src/Components/LivingwithNF/Heading/index";
import UnderstandingNF from "src/Components/LivingwithNF/UnderstandingNF/index";
import TabComponent from "src/Components/LivingwithNF/UnderstandingNF/Tabcomponent/index";
import CausesAspects from "src/Components/LivingwithNF/Causes-Aspects/index";
import SurveyNow from "src/Components/LivingwithNF/Survey-Now/index";
import SignupRegistry from "src/Components/LivingwithNF/Signup-Registry/index";
import "./index.css";
function index() {
  const openExternalLink = () => {
    const externalLink = "https://www.nfregistry.org";
    window.open(externalLink, "_blank");
  };

  const underConstruction = () => {
    document.querySelector("#UnderConst-wrapper").style.display = "flex";
  };

  return (
    <div>
      <div className="understanding-nf-container">
        <NFHeading
          openExternalLink={openExternalLink}
          underConstruction={underConstruction}
        />
        <CircleImages openExternalLink={openExternalLink} />
        <UnderstandingNF />
        <TabComponent />
        <CausesAspects />
        <SurveyNow underConstruction={underConstruction} />
        <SignupRegistry openExternalLink={openExternalLink} />
      </div>
    </div>
  );
}

export default index;
