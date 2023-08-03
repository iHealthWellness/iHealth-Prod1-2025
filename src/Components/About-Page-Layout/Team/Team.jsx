import { Link } from "react-router-dom"
import team from "/src/Assets/Images/team-image.svg"
import "./Team.css"

const Team = () => {

    return (
        <div className="team-tab-page">
            <Link className="team-link">
                <img className="team-image-tab" src={team} alt="" />
            </Link>
        </div>

    )
}
export default Team;