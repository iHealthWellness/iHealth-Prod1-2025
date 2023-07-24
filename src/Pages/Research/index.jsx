import React from "react";

import SectionA from "src/Components/Research page/section1";
import SectionB from "src/Components/Research page/section2";
import SectionC from "src/Components/Research page/section3";
import SectionD from "src/Components/Research page/section4";
import SectionE from "src/Components/Research page/section5";
import SectionF from "src/Components/Research page/section6";
import SectionG from "src/Components/Research page/section7";
import SectionH from "src/Components/Research page/section8";
import ToTopBtn from "src/Components/Home-Page/Layout/ToTopBtn";

import "./index.css"

const Researchpage = () => {
  return (
  <div className="research-page">
    <SectionA/>
    <SectionB/>
    <SectionC/>
    <SectionD/>
    <SectionE/>
    <SectionF/>
    <SectionG/>
    <SectionH/>
    <ToTopBtn/>
  </div>
)};

export default Researchpage;
