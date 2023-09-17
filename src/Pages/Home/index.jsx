//Import Libraries/Packages
import React from "react";

//Import Components
import Hero from "src/Components/Home-Page/Layout/Hero/Hero";
import Provider from "src/Components/Home-Page/Layout/Provider";
import Community from "src/Components/Home-Page/Layout/Community";
import Team from "src/Components/Home-Page/Layout/Team";
import Services from "src/Components/Home-Page/Layout/Services";
import HowItWorks from "../../Components/Home-Page/Layout/HowItWorks";
import Benefit from "src/Components/Home-Page/Layout/Benefit";
import PartnerWithUs from "../../Components/Home-Page/Layout/Partner";
import Information from "src/Components/Home-Page/Layout/Information";
import UnderConstruction from "src/Components/Under-Construction/UnderConstruction";
import ToTopBtn from "src/Components/Home-Page/Layout/ToTopBtn";

import "./index.css";

const index = () => {
  return (
    <div className="home-page">
      <Hero />
      <Provider />
      <Community />
      <Team />
      <Services />
      <HowItWorks />
      <Benefit />
      <PartnerWithUs />
      <Information />
      <ToTopBtn />
    </div>
  );
};

export default index;
