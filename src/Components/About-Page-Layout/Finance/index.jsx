import { useState, useRef, useEffect } from "react";

import financialTransparency from "src/Assets/Images/finance.png";
import img5 from "src/Assets/Images/bar.png";
// import img6 from "src/Assets/Icons/Vector1.png";
// import img7 from "src/Assets/Icons/Vector2.png";
// import img8 from "src/Assets/Icons/Vector3.png";
// import img9 from "src/Assets/Icons/Vector4.png";
// import img10 from "src/Assets/Icons/Vector5.png";
// import img11 from "src/Assets/Icons/Vector6.png";
// import img12 from "src/Assets/Icons/Vector7.png";
// import img13 from "src/Assets/Icons/Vector8.png";
// import img14 from "src/Assets/Icons/Vector9.png";
import img17 from "src/Assets/Images/pie-chart2.png";
import img18 from "src/Assets/Images/pie-chart3.png";
import styles from "./index.module.css";

const Finance = () => {
  return (
    <section id="Finance" className={styles.financeContainer}>
      <header>
        <div>
          <img src={financialTransparency} alt="financial image" />
          <h3>Financial Transparency</h3>
        </div>
        <aside>
          <h2>Revenue Generation</h2>
          <p className="SN-D-P-20">
            Our revenue is generated through the following business activities.
          </p>
        </aside>
      </header>
    </section>
  );
};
export default Finance;
