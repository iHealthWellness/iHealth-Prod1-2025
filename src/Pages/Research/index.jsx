import React from "react";

import Hero from "src/Components/Research-page/Hero";
import Tools from "src/Components/Research-page/Research tools";
import Therapies from "src/Components/Research-page/Therapies";
import Moreinfo from "src/Components/Research-page/More-info";
import Segas from "src/Components/Research-page/Segas";
import Participate from "src/Components/Research-page/Participate";
import Involvement from "src/Components/Research-page/Involvement";
import Consideration from "src/Components/Research-page/Consideration";
import TotopBtn from "src/Components/Research-page/TotopBtn";
import"./index.css"

const index = () => {
  return (
    <div className="research-page">
      <Hero />
      <Tools />
      <Therapies />
      <Moreinfo />
      <Segas />
      <Participate />
      <Involvement />
      <Consideration />
      <TotopBtn />
    </div>
  );
};

export default index;
