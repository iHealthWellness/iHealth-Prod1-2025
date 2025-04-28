import BenefitCard from "./BenefitCard";

import Benefits from "src/Constants/HomePage/Benefits.js";

import styles from "./index.module.css";

const Benefit = () => {
  return (
    <section className={styles["benefit-container"]}>
      <h2 className={`${styles["benefit-heading"]} SN-D-Home-H2-32`}>
        Patient and Provider Benefits
      </h2>
      <div className={styles["benefit-container-inner"]}>
        {Benefits.map((benefit) => (
          <BenefitCard key={benefit.title} benefit={benefit} />
        ))}
      </div>
    </section>
  );
};

export default Benefit;
