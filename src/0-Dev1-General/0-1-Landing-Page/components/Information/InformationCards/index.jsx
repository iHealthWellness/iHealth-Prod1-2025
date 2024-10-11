import Teams from "src/Constants/HomePage/Teams.js";
import InformationCard from "./informationCard";
import "./index.css";

const InformationCards = () => {
  return (
    <div className="information-card-container">
      {Teams.map((team) => (
        <InformationCard team={team} key={team.heading} />
      ))}
    </div>
  );
};

export default InformationCards;
