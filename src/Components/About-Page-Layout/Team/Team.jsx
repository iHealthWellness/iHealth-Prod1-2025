import { Link } from "react-router-dom"
import { HashLink } from 'react-router-hash-link';
import team from "/src/Assets/Images/team-image.svg"
import "./Team.css"

const Team = () => {

    return (
        <div className="team-tab-page">
            <HashLink to="/Our-Team" className="team-link">
                <img className="team-image-tab" src={team} alt="" />
            </HashLink>
        </div>

    )
}
export default Team;