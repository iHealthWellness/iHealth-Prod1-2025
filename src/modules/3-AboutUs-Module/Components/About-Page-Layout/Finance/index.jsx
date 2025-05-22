import financialTransparency from "../../../Assets/Images/finance.png";
import barChart from "../../../Assets/Images/bar.png";
import expensesChart from "../../../Assets/Images/pie-chart2.png";
import projectedRevenue from "../../../Assets/Images/pie-chart3.png";
import useSlideInAnimationRight from "../../../hooks/useSlideInAnimationRight";
import styles from "./index.module.css";

const Finance = () => {
  useSlideInAnimationRight(styles.slideInText, styles.active);

  return (
    <main id="Finance" className={styles.financeContainer}>
      <header>
        <div>
          <img src={financialTransparency} alt="financial image" />
          <h3 className="D-H2-30">Financial Transparency</h3>
        </div>
        <aside>
          <h2 className="D-H2-30">Revenue Generation</h2>
          <p className="D-P-20">
            Our revenue is generated through the following business activities.
          </p>
        </aside>
      </header>
      <section className={`${styles.chartSection} ${styles.slideInText}`}>
        <aside className="D-H3-24">
          <p>Donation</p>
          <p>Licensing Fees</p>
          <p>Research Partnerships</p>
          <p>Data Analytics</p>
          <p>Consulting Services</p>
          <p>Advertising and Sponsorship</p>
          <p>Patient Advocacy Services</p>
          <p>Subscription Fees</p>
          <p>Booking Fees</p>
        </aside>
        <div>
          <img src={barChart} alt="statistical chart" />
        </div>
      </section>
      <section className={`${styles.chartSection} ${styles.slideInText}`}>
        <summary>
          <h2>Expenses</h2>
          <img src={expensesChart} alt="expenses chart" />
        </summary>
        <summary>
          <h2>Projected Revenue Streams</h2>
          <img src={projectedRevenue} alt="projected revenue streams" />
        </summary>
      </section>
    </main>
  );
};
export default Finance;
