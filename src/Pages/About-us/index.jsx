import React from "react";
import "./index.css";
import Hero from "src/Components/About-Page-Layout/Hero";
import Statement from "src/Components/About-Page-Layout/Statement";
import Finance from "src/Components/About-Page-Layout/Finance";
import Terms from "src/Components/About-Page-Layout/Terms";
import Team from "src/Components/About-Page-Layout/Team/Team";
import TotopBtn from "src/Components/About-Page-Layout/TotopBtn";







const index = () => {
  return (
    <>

      <Hero />
      <Statement />
      <Team />
      <Finance />
      <Terms />
      <TotopBtn />



    </>

  )

};

export default index;
