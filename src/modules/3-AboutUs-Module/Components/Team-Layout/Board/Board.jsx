import { useState, useRef, useEffect } from "react";

import Image from "../../../Assets/Images/Sasikaa.png";
import Image1 from "../../../Assets/Images/Jeff.png";
import Image2 from "../../../Assets/Images/Mathias.png";
import Image3 from "../../../Assets/Images/Joseph.png";
import Image4 from "../../../Assets/Images/Elizabeth.png";
import Image5 from "../../../Assets/Images/Marilyn.png";
import Image8 from "../../../Assets/Images/Chris.png";
import Image8b from "../../../Assets/Images/olivia.png";
import Image9 from "../../../Assets/Images/hilda.png";
import Image10 from "../../../Assets/Images/mark.png";
import Image11 from "../../../Assets/Images/Michelle.png";
import Image12 from "../../../Assets/Images/Nathalie.png";
import Image13 from "../../../Assets/Images/Rebacca.png";
import Image14 from "../../../Assets/Images/Ola.png";
import Image15 from "../../../Assets/Images/sean.png";
import Image6 from "../../../Assets/Images/Card.png";
import Image7 from "../../../Assets/Icons/plus.png";

import teamData from "../../../Components/Team-Layout/DataPage/TeamData.jsx";

import closeButton from "../../../Assets/Images/close-button.png";
import closeButton2 from "../../../Assets/Images/close-button-2.png";

import roundedFrame from "../../../Assets/Icons/rounded-frame.svg";

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

  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (index) => {
    setSelectedCard(teamData.executive[index]);
  };

  const handlePopupClose = (e) => {
    e.stopPropagation();
    setSelectedCard(null);
  };

  const handleDivClick = (e) => {
    e.stopPropagation();
    window.open(selectedCard.link);
  };

  const boardMembers = [
    {
      name: "Sasika Nanayakkara, PMP",
      image: Image,
      bio: "Bio for Sasika Nanayakkara",
      handleClick: () => handleCardClick(0),
    },
    {
      name: "Jeff Jacques, MD",
      image: Image1,
      bio: "Bio for Jeff Jacques",
      handleClick: () => handleCardClick(1),
    },
    {
      name: "Joseph F. Karcich",
      image: Image3,
      bio: "Bio for Joseph F. Karcich",
      handleClick: () => handleCardClick(2),
    },
    // {
    //   name: "Mark Huntzinger",
    //   image: Image10,
    //   bio: "Bio for Mark Huntzinger",
    //   handleClick: () => handleCardClick(10),
    // },
    {
      name: "Matias Berisso",
      image: Image2,
      bio: "Bio for Matias Berisso",
      handleClick: () => handleCardClick(3),
    },
  ];

  const advisoryCouncilMembers = [
    {
      name: "Marilyn Crawford",
      bio: "Bio for Marilyn Crawford",
      image: Image5,
      handleClick: () => handleCardClick(4),
    },
    {
      name: "Marcella Sarti Souza, MD",
      bio: "Bio for Marcella Sarti Souza, MD",
      image: Image4,
      handleClick: () => handleCardClick(6),
    },
    // {
    //   name: "Alex Lizzappi",
    //   bio: "Bio for Alex Lizzappi",
    //   image: Image6,
    //   handleClick: () => handleCardClick(5),
    // },
    {
      name: "Sean T. Connolly",
      bio: "Bio for Sean T. Connolly",
      image: Image15,
      handleClick: () => handleCardClick(14),
    },
    {
      name: "Olivia Begasse de Dhaem, MD",
      bio: "Bio for Olivia Begasse de Dhaem, MD",
      image: Image8b,
      handleClick: () => handleCardClick(8),
    },
    {
      name: "Rebecca Brown, MD PhD",
      bio: "Bio for Rebecca Brown, MD PhD",
      image: Image13,
      handleClick: () => handleCardClick(12),
    },
    {
      name: "Christophe Foulon, CISSP, GSLC, AWS Security",
      bio: "Bio for Christophe Foulon, CISSP, GSLC, AWS Security",
      image: Image8,
      handleClick: () => handleCardClick(7),
    },
    {
      name: "Oladimeji Ibitoye",
      bio: "Bio for Oladimeji Ibitoye",
      image: Image14,
      handleClick: () => handleCardClick(13),
    },
    {
      name: "Michelle Waldgeir",
      bio: "Bio for Michelle Waldgeir",
      image: Image11,
      handleClick: () => handleCardClick(10),
    },
    {
      name: "Dalia Heci, LLM, AML/CFT",
      bio: "Bio for Dalia Heci, LLM, AML/CFT",
      image: Image9,
      handleClick: () => handleCardClick(9),
    },
  ];

  const [isZoomActive, setIsZoomActive] = useState(false);
  const [isZoomModalHeightActive, setIsZoomModalHeightActive] = useState(false);

  useEffect(() => {
    const checkZoom = () => {
      const zoomLevel = window.devicePixelRatio;
      setIsZoomActive(zoomLevel > 1.2);
      console.log("Zoom level:", zoomLevel);
    };

    checkZoom();
    window.addEventListener("resize", checkZoom);

    
    return () => window.removeEventListener("resize", checkZoom);
  }, []);

  useEffect(() => {
    const checkZoomHeight = () => {
      const zoomHeightLevel = window.devicePixelRatio;
      const windowHeight = window.innerHeight;
      // Adjust the condition to account for smaller screens and high zoom levels
      setIsZoomModalHeightActive(zoomHeightLevel > 1.0 || windowHeight < 800);
      console.log("Zoom height level:", zoomHeightLevel, "Window height:", windowHeight);
    };

    checkZoomHeight();
    window.addEventListener("resize", checkZoomHeight);

    
    return () => window.removeEventListener("resize", checkZoomHeight);
  }, []);
  

  return (
  <div className="board-text-tab">
  {selectedCard && (
    <div className="popup-overlay">
      <div className={`popup-content ${isZoomModalHeightActive ? "zoom-height-active" : ""}`}>
        <div className={`popup-content-inner ${isZoomActive || isZoomModalHeightActive ? "zoom-active" : ""}`}>
          <img
            onClick={handlePopupClose}
            src={closeButton2}
            className="close-btn"
          />
          <div className="popup-image-container">
            <img src={selectedCard.image} className="popup-img" />
            <h1 className="popup-name SN-D-H1-40">{selectedCard.name}</h1>
          </div>
          <div className="popup-linkedin" onClick={handleDivClick}></div>
          <hr className="grey-line"></hr>
          <div className={`team-modal-bio ${isZoomModalHeightActive ? "zoom-height-active" : ""} ${isZoomActive ? "zoom-active" : ""}`}>
            {selectedCard.extendedBio.split("--").map((bioChunk, index) => (
              <div key={index}>
                <a className="SN-D-T-M-P-16">{bioChunk}</a>
                <br />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )}
  <div className="page-holder">
    <h2 id="Board" className="team-directors-header SN-D-H1-40">
      Board of Directors
    </h2>
    <h3 className="team-directors-tab SN-D-P-22">
      Our Board of Directors governs the Foundation's mission, policies,
      bylaws, budget, and fundraising initiatives, aligning with legal
      requirements and the purposes outlined in the Certificate of
      Incorporation and the Bylaws.
    </h3>
  </div>

  <div className="board-container">
    {boardMembers.map((member, index) => (
      <div
        key={index}
        className={`board-directors-tab ${
          isVisible[`div${index + 1}Ref`] ? "slide-in" : ""
        }`}
        ref={divTwoRef}
      >
        <div className="board-image" onClick={member.handleClick}>
          <img src={member.image} alt={member.name} />
          <div className="Name-tab">
            <p className="SN-D-P-22">{member.name}</p>
          </div>
          <button className="btn-board-tab">
            <img src={Image7} />
          </button>
        </div>
      </div>
    ))}
  </div>

  <div id="Advisory" className="page-holder">
    <h2 className="team-directors-header SN-D-H2-32">Advisory Council</h2>
    <h3 className="team-directors-tab SN-D-P-22">
      The Advisory Committee for our health and wellness startup serves as a
      group of experienced advisors who provide valuable insights, guidance,
      and expertise. They contribute to strategic decision-making, offer
      industry-specific knowledge, and provide recommendations on various
      aspects of our business, helping us drive innovation and ensure the
      effectiveness of our programs and services.
    </h3>
  </div>

  <div className="advisory-council-container">
    {advisoryCouncilMembers.map((member, index) => (
      <div
        key={index}
        className={`board-directors-tab ${
          isVisible[`div${index + 1}Ref`] ? "slide-in" : ""
        }`}
        ref={divTwoRef}
      >
        <div className="board-image" onClick={member.handleClick}>
          <img src={member.image} alt={member.name} />
          <div className="Name-tab">
            <p className="SN-D-P-22">{member.name}</p>
          </div>
          <button className="btn-board-tab">
            <img src={Image7} />
          </button>
        </div>
      </div>
    ))}
  </div>
</div>
  );
};

export default Board;
