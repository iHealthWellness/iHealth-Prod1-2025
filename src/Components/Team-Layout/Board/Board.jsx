import Image from "src/Assets/Images/sasika.png";
import Image1 from "src/Assets/Images/Jeff.png";
import Image2 from "src/Assets/Images/Mathias.png";
import Image3 from "src/Assets/Images/Joseph.png";

import "./Board.css";
const Board = () => {

    return (
        <div className="board-text-tab">
            <div className="page-holder">
                <div className="teamboard-tab">

                    <h2 className="team-directors-header">  Board of Directors</h2>


                    <h3 className="team-directors-tab">Our Board of Directors governs the Foundation's mission, policies, bylaws, budget, and fundraising initiatives,
                        aligning with legal requirements and the purposes outlined in the Certificate of Incorporation and the Bylaws.</h3>
                </div>

                <div className="board-image">
                    <div className="board-directors-tab">
                        <img src={Image} alt="" />
                        <img src={Image1} alt="" />
                    </div>
                    <div className="board-directors-tab">
                        <img src={Image2} alt="" />
                        <img src={Image3} alt="" />
                    </div>

                </div>
                <div>
                    <h2 className="team-directors-header">Advisory Council</h2>
                    <h3 className="team-directors-tab"> The Advisory Committee for our health and wellness startup serves as a group
                        of experienced advisors who provide valuable insights, guidance, and expertise.
                        They contribute to strategic decision-making, offer industry-specific knowledge,
                        and provide recommendations on various aspects of our business, helping us drive
                        innovation and ensure the effectiveness of our programs and services.</h3>
                </div>


            </div>
        </div >

    )
}
export default Board;