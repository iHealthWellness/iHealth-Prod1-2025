import React from "react";
import "./Hiring.css";
import Copywriter from "./Copywriter";
import Cybersecurity from "./Cybersecurity";
import It from "./IT";
import Legal from "./Legal";
import Datascience from "./Datascience";
import Marketing from "./Marketing";
import Design from "./Design";
import Product from "./Product";
import Development from "./Development";
import Project from "./Project";
import Financial from "./Financial";
import Quality from "./Quality";
import Hr from "./Hr";
import Operations from "./Operations";

const Hiring = () => {
  return (
    <section className="openings-tab" id="job-openings">
      <div className="container career-tab">
        <div className="flex layer-tab">
          <div className=" layer-tab-one">
          <Copywriter />
            <Cybersecurity />
            <Datascience />
            <Design />
            <Development />
            <Financial />
            <Hr />
          </div>
          <div className="layer-tab-two">
            <It />
            <Legal />
            <Marketing />
            <Product />
            <Project />
            <Quality />
            <Operations />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hiring;
