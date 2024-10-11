import BenefitCard from "./BenefitCard";

import Benefits from "src/Constants/HomePage/Benefits.js";

import "./index.css";

const Benefit = () => {
  return (
    <section className="benefit-container">
      <h2 className="benefit-heading SN-M-H2-24">
        Patient and Provider Benefits
      </h2>
      <div className="benefit-container-inner">
        {Benefits.map((benefit) => {
          return <BenefitCard key={benefit.title} benefit={benefit} />;
        })}
      </div>
    </section>
  );
};

export default Benefit;
