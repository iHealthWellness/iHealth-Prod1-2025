import Hero from "src/Components/Research-page/Hero";
import MyComponent from "src/Components/Research-page/MyComponent";
import MyComponent2 from "src/Components/Research-page/MyComponent2";
import MyComponent3 from "src/Components/Research-page/MyComponent3";
import Tools from "src/Components/Research-page/Research tools";
import Therapies from "src/Components/Research-page/Therapies";
import Moreinfo from "src/Components/Research-page/More-info";
import Segas from "src/Components/Research-page/Segas";
import Participate from "src/Components/Research-page/Participate";
import Consideration from "src/Components/Research-page/Consideration";
import styles from "./ResearchPageDesktop.module.css";

const ResearchPageDesktop = () => {
  return (
    <div className={styles.researchPage}>
      <Hero />
      <Tools />
      <MyComponent />
      <Therapies />
      <Moreinfo />
      <MyComponent2 />
      <Segas />
      <Participate />
      <MyComponent3 />
      <Consideration />
    </div>
  );
};

export default ResearchPageDesktop;
