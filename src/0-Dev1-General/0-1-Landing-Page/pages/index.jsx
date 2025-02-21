//Import Libraries/Packages
import React from "react";

//Import Components
import Hero from "src/0-Dev1-General/0-1-Landing-Page/components/Hero/Hero";
import Provider from "src/0-Dev1-General/0-1-Landing-Page/components/Provider/index";
import Community from "src/0-Dev1-General/0-1-Landing-Page/components/Community/index";
import Team from "src/0-Dev1-General/0-1-Landing-Page/components/Team/index";
import Services from "src/0-Dev1-General/0-1-Landing-Page/components/Services/index";
import HowItWorks from "src/0-Dev1-General/0-1-Landing-Page/components/HowItWorks/index";
import Benefit from "src/0-Dev1-General/0-1-Landing-Page/components/Benefit/index";
import PartnerWithUs from "src/0-Dev1-General/0-1-Landing-Page/components/Partner/index";
import Information from "src/0-Dev1-General/0-1-Landing-Page/components/Information/index";
// import UnderConstruction from "src/Components/Under-Construction/UnderConstruction";
import ToTopBtn from "src/0-Dev1-General/0-1-Landing-Page/components/ToTopBtn/index";

import "./index.css";
import EventCards from "../components/EventCards";
import HomepageEmbeddedVideo from "../components/HomepageEmbedVideo";
import Joincommunity from "../components/JoinCommunity";
import WaitlistSection from "../components/WaitList";

const index = () => {
  return (
    <div className="home-page">
     <div className="home-page-container-top-gradient">
      <Hero />
      <Provider />
      </div>
      <EventCards/>
      <Community />
      <Team />
      <Services />
      <HomepageEmbeddedVideo />
      <HowItWorks />
      <Benefit />
      <PartnerWithUs />
      <Information />
      {/* <WaitlistSection/> */}
      <Joincommunity/>
      <ToTopBtn />
    </div>
  );
};

export default index;
