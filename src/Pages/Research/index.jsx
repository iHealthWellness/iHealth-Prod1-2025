import React from "react";

import Hero from "src/Components/Research-page/section1";
import Community from "src/Components/Research-page/section2";
import Benefit from "src/Components/Research-page/section3";
import HowItWorks from "src/Components/Research-page/section4";
import Information from "src/Components/Research-page/section5";
import Partner from "src/Components/Research-page/section6";
import Info from "src/Components/Research-page/section7";
import Difference from "src/Components/Research-page/section8";
import ToTopBtn from "src/Components/Research-page/TotopBtn";

const index = () => {
  return (
    <div className="research-page">
    <Hero/>
    <Community/>
    <Benefit/>
    <HowItWorks/>
    <Information/>
    <Partner/>
    <Info/>
    <Difference/>
    <ToTopBtn/>
  </div>
)};

export default index;
