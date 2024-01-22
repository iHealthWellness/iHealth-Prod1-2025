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
  return (
    <div>
      <div className="understanding-nf-container">
        <NFHeading />
        <CircleImages />
        <UnderstandingNF />
        <TabComponent />
        <CausesAspects />
        <SurveyNow />
        <SignupRegistry />
      </div>
    </div>
  );
}

export default index;
