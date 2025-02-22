//Import Libraries/Packages
import React from "react";

//Import Components
import Hero360 from "src/0-Dev1-General/0-1-Landing-Page/components/Hero/Hero360";
import Forecast from "src/0-Dev1-General/0-1-Landing-Page/components/Forecast/index";
import Programs from "src/0-Dev1-General/0-1-Landing-Page/components/Programs/index";
import JoinCommunity from "src/0-Dev1-General/0-1-Landing-Page/components/JoinCommunity/index";

const Learnmore = () => {
  return (
    <div>
      <Hero360 />
      <Forecast/>
      <Programs/>
      <JoinCommunity/>
    </div>
  );
};

export default Learnmore;
