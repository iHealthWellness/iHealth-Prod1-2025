import React from "react";
// import CircleImages from "src/Components/LivingwithNF/CircleImages/index";
import NFHeading from "src/modules/1-Home-Module/components/LivingwithNF/Heading/index";
import UnderstandingNF from "src/modules/1-Home-Module/components/LivingwithNF/UnderstandingNF/index";
import TabComponent from "src/modules/1-Home-Module/components/LivingwithNF/UnderstandingNF/Tabcomponent/index";
import CausesAspects from "src/modules/1-Home-Module/components/LivingwithNF/Causes-Aspects/index";
import SurveyNow from "src/modules/1-Home-Module/components/LivingwithNF/Survey-Now/index";
import SignupRegistry from "src/modules/1-Home-Module/components/LivingwithNF/Signup-Registry/index";
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
        {/* <CircleImages openExternalLink={openExternalLink} /> */}
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
