import { HashLink } from "react-router-hash-link";
import teamwork from "/src/Assets/Images/business-meeting4.png";
import styles from "./Team.module.css";

const Team = () => {
  return (
    <section id="Team" className={styles.mainContainer}>
      <HashLink to="/Our-Team/#">
        <img className="team-work" src={teamwork} alt="team work" />
      </HashLink>
    </section>
  );
};
export default Team;
