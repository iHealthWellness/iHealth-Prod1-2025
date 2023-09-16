import React from "react";
import "./Hiring.css";
import Copywrite from "./copywrite";
import Cybersecurity from "./cybersecurity";
import It from "./IT";
import Legal from "./Legal";
import Datasci from "./Datasci";
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
        <div className="flex">
          <Copywrite />

          <It />

          <Cybersecurity />
          <Legal />

          <Datasci />
          <Marketing />
          <Design />

          <Product />

          <Development />

          <Project />

          <Financial />
          <Quality />
          <Hr />
          <Operations />
        </div>
      </div>
    </section>
  );
};

export default Hiring;
