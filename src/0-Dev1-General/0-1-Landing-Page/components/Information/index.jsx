import InformationHeader from "./InformationHeader";
import InformationTabs from "./InformationTabs";

import styles from "./index.module.css";
import InformationCards from "./InformationCards";

const Information = () => {
  return (
    <section id="Information" className={styles.informationContainer}>
      <InformationHeader />
      <InformationTabs />
      <InformationCards />
    </section>
  );
};

export default Information;
