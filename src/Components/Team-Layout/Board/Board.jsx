import { useState, useRef, useEffect } from "react";

import Image from "src/Assets/Images/Sasikaa.png";
import Image1 from "src/Assets/Images/Jeff.png";
import Image2 from "src/Assets/Images/Mathias.png";
import Image3 from "src/Assets/Images/Joseph.png";
import Image4 from "src/Assets/Images/Elizabeth.png";
import Image5 from "src/Assets/Images/Marilyn.png";
import Image6 from "src/Assets/Images/Card.png";
import Image7 from "src/Assets/Icons/plus.png";
import teamData from "src/Components/Team-Layout/DataPage/TeamData.jsx";

import closeButton from "src/Assets/Images/close-button.png";

import linkedIn from "src/Assets/Icons/linkedin.svg";


import plusLogo from "src/Assets/Icons/ic_round-plus.svg";
import roundedFrame from "src/Assets/Icons/rounded-frame.svg"


import "./Board.css";
import { Padding } from "@mui/icons-material";
const Board = () => {

    const divRef = useRef(null);
    const divTwoRef = useRef(null);
    const divThreeRef = useRef(null);
    const divFourRef = useRef(null);
    const divFiveRef = useRef(null);
    const divSixRef = useRef(null);

    const [isVisible, setIsVisible] = useState({
        divRef: false,
        divTwoRef: false,
        divThreeRef: false,
        divFourRef: false,
        divFiveRef: false,
        divSixRef: false,

    });


    useEffect(() => {
        const handleScroll = () => {


            applyVisibleEffect(divRef, "divRef");
            applyVisibleEffect(divTwoRef, "divTwoRef");
            applyVisibleEffect(divThreeRef, "divThreeRef");
            applyVisibleEffect(divFourRef, "divFourRef");
            applyVisibleEffect(divFiveRef, "divFiveRef");
            applyVisibleEffect(divSixRef, "divSixRef");
        }
        const applyVisibleEffect = (div, key) => {
            if (div.current) {
                const rect = div.current.getBoundingClientRect();
                const windowHeight =
                    window.innerHeight || document.documentElement.clientHeight;

                if (rect.top <= windowHeight && rect.bottom >= 0) {
                    setIsVisible((prevState) => ({

                        ...prevState,
                        [key]: true
                    }));

                } else {
                    setIsVisible((prevState) => ({

                        ...prevState,
                        [key]: false
                    }));
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);





    const [selectedCard, setSelectedCard] = useState(null);

    const handleCardClick = () => {
        console.log("cicked card: " + teamData.executive[1]);
        setSelectedCard(teamData.executive[0]);
    };

    const handleCardClick1 = () => {
        console.log("cicked card: " + teamData.executive[1]);
        setSelectedCard(teamData.executive[1]);
    };
    const handleCardClick2 = () => {
        console.log("cicked card: " + teamData.executive[1]);
        setSelectedCard(teamData.executive[2]);
    };
    const handleCardClick3 = () => {
        console.log("cicked card: " + teamData.executive[1]);
        setSelectedCard(teamData.executive[3]);
    };
    const handleCardClick4 = () => {
        console.log("cicked card: " + teamData.executive[1]);
        setSelectedCard(teamData.executive[4]);
    };
    const handleCardClick5 = () => {
        console.log("cicked card: " + teamData.executive[1]);
        setSelectedCard(teamData.executive[5]);
    };
    const handleCardClick6 = () => {
        console.log("cicked card: " + teamData.executive[1]);
        setSelectedCard(teamData.executive[6]);
    };


    const handlePopupClose = () => {

        console.log("clicked close");
        setSelectedCard(null);
    };

    const handleDivClick = (e) => {
        e.stopPropagation();
        window.open(selectedCard.link);
    };



    return (

        <div className="board-text-tab">
            {selectedCard && (
                <div className="popup-overlay" onClick={handlePopupClose}>
                    <div className="popup-content">
                        <img onClick={handlePopupClose} src={closeButton} className="close-btn" />
                        <div className="popup-text">
                            <img src={selectedCard.image} className="popup-img" />
                            <h1 className="popup-name">{selectedCard.name}</h1>
                            <div className="popup-linkedin" onClick={handleDivClick}>
                                {/* <img src={linkedIn} className="popup-linkedin-icon" /><h2 className="popup-linkedin-text">LinkedIn</h2> */}
                            </div>
                            <hr className="grey-line"></hr>
                            {selectedCard.extendedBio.split("--").map((bioChunk) => (
                                <div key={bioChunk} >
                                    <a>{bioChunk}</a>
                                    <br /><br />
                                </div>
                            ))}


                        </div>
                        <img src={roundedFrame} className="rounded-frame" />
                    </div>
                </div>
            )}
            <div id="Board" className="page-holder">

                {/* <div className={`teamboard-tab ${isVisible.divRef ? "slide-in" : ""}`}
                    ref={divRef}> */}

                    <h2 className="team-directors-header">  Board of Directors</h2>


                    <h3 className="team-directors-tab">Our Board of Directors governs the Foundation's mission, policies, bylaws, budget, and fundraising initiatives,
                        aligning with legal requirements and the purposes outlined in the Certificate of Incorporation and the Bylaws.</h3>
                </div>


                <div className={`board-directors-tab  ${isVisible.divTwoRef ? "slide-in" : ""}`}
                    ref={divTwoRef}>

                    <div className="board-image" onClick={handleCardClick}>

                        <img src={Image} alt="" />

                        <div className="Name-tab">
                            <p>Sasika Nanayakkara, PMP</p>
                        </div>

                        <button className="btn-board-tab"><img src={Image7} /></button>

                        <button className="btn-board-tab"><img src={Image7} /></button>

                    </div>


                    <div className="board-image" onClick={handleCardClick1}>
                        <img src={Image1} alt="" />

                        <div className="Name-tab">
                            <p>Jeff Jacques, MD</p>
                        </div>
                        <button className="btn-board-tab"><img src={Image7} /></button>
                    </div>


                </div>


                <div className={`board-directors-tab2  ${isVisible.divThreeRef ? "slide-in" : ""}`}
                    ref={divThreeRef}>

                    <div className="board-image" onClick={handleCardClick2}>

                        <img src={Image3} alt="" />

                        <div className="Name-tab">
                            <p>Joseph Karcich</p>
                        </div>
                        <button className="btn-board-tab"><img src={Image7} /></button>
                    </div>

                    <div className="board-image" onClick={handleCardClick3}>
                        <img src={Image2} alt="" />

                        <div className="Name-tab">
                            <p>Matías Berisso</p>
                        </div>
                        <button className="btn-board-tab"><img src={Image7} /></button>
                    </div>



                </div>

                <div id="Advisory" className={`teamboard-tab2 ${isVisible.divFourRef ? "slide-in" : ""}`}
                    ref={divFourRef}>
                        <div className="team-der">
                    <h2 className="team-directors-header">Advisory Council</h2>
                    <h3 className="team-directors-tab"> The Advisory Committee for our health and wellness startup serves as a group
                        of experienced advisors who provide valuable insights, guidance, and expertise.
                        They contribute to strategic decision-making, offer industry-specific knowledge,
                        and provide recommendations on various aspects of our business, helping us drive
                        innovation and ensure the effectiveness of our programs and services.</h3>
                        </div>
                </div>


                <div className={`board-directors-tab3 ${isVisible.divFiveRef ? "slide-in" : ""}`}
                    ref={divFiveRef}>


                    <div className="board-image" onClick={handleCardClick4}>

                        <img src={Image5} alt="" />

                        <div className="Name-tab">
                            <p>Marilyn Crawford</p>
                        </div>
                        <button className="btn-board-tab"><img src={Image7} /></button>
                    </div>

                    <div className="board-image" onClick={handleCardClick6}>
                        <img src={Image4} alt="" />

                        <div className="Name-tab">
                            <p>Marcella Sarti Souza, MD</p>
                        </div>
                        <button className="btn-board-tab"><img src={Image7} /></button>
                    </div>



                </div>

                <div className={`board-directors-tab1 ${isVisible.divSixRef ? "slide-in" : ""}`}
                    ref={divSixRef}>
                    <div className="board-image" onClick={handleCardClick5}>
                        <img className="img-holder" src={Image6} alt="" />

                        <div className="Name-tab">
                            <p>Alex Lizzappi</p>
                        </div>
                        <button  className="btn-board-tab"><img src={Image7} /></button>
                    </div>
                </div>

            </div>
        // </div >

    )
}
export default Board;

