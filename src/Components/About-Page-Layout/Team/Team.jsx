import { Link } from "react-router-dom"
import team from "/src/Assets/Images/team-image.svg"
import "./Team.css"

const Team = () => {

    return (
        <div className="team-tab-page">
            <Link to="/Our-Team" className="team-link">
                <img className="team-image-tab" src={team} alt="" />
            </Link>
        </div>

    )
}
export default Team;