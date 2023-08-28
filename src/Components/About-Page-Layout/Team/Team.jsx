import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import team from "/src/Assets/Images/team-image.svg";
import teamwork from "/src/Assets/Images/teamwork.png";
import "./Team.css";

const Team = () => {
  return (
    <div id="Team" className="team-tab-page">
      <div className="container">
        <img className="team-work" src={teamwork} />
        <div className="Team-link-tab">
        <HashLink to="/Our-Team" className="team-link">
          <img className="team-image-tab" src={team} alt="" />
        </HashLink>
        </div>
       
      </div>


    </div>
  );
};
export default Team;
