import Teams from "src/Constants/HomePage/Teams.js";
import InformationCard from "./informationCard";
import styles from "./index.module.css";

const InformationCards = () => {
  return (
    <div className={styles.informationCardContainer}>
      {Teams.map((team) => (
        <InformationCard team={team} key={team.heading} />
      ))}
    </div>
  );
};

export default InformationCards;
