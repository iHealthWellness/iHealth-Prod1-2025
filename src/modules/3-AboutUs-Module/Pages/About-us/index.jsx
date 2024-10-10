import Hero from "../../Components/About-Page-Layout/Hero";
import Statement from "../../Components/About-Page-Layout/Statement";
import Finance from "../../Components/About-Page-Layout/Finance";
import Terms from "../../Components/About-Page-Layout/Terms";
import Team from "../../Components/About-Page-Layout/Team/Team";
import styles from "./index.module.css";

const index = () => {
  return (
    <main className={styles.aboutUs}>
      <Hero />
      <Statement />
      <Team />
      <Finance />
      <Terms />
    </main>
  );
};

export default index;
