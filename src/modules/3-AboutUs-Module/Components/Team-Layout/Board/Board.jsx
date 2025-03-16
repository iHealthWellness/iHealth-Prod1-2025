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
    {
      name: "Alex Lizzappi",
      bio: "Bio for Alex Lizzappi",
      image: Image6,
      handleClick: () => handleCardClick(5),
    },
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

  useEffect(() => {
    const checkZoom = () => {
      const zoomLevel = window.devicePixelRatio;
      setIsZoomActive(zoomLevel > 1.5);
      console.log("Zoom level:", zoomLevel);
    };

    checkZoom();
    window.addEventListener("resize", checkZoom);

    
    return () => window.removeEventListener("resize", checkZoom);
  }, []);
  

  return (
    <div className="board-text-tab">
  {selectedCard && (
    <div className="popup-overlay">
      <div className="popup-content">
        <div className={`popup-content-inner ${isZoomActive ? "zoom-active" : ""}`}>
          <img
            onClick={handlePopupClose}
            src={closeButton2}
            className="close-btn"
          />
          <div className="popup-image-container">
            <img src={selectedCard.image} className="popup-img" />
          <h1 className="popup-name">{selectedCard.name}</h1>
          </div>
          <div className="popup-linkedin" onClick={handleDivClick}></div>
          <hr className="grey-line"></hr>
          <div className={`team-modal-bio ${isZoomActive ? "zoom-active" : ""}`}>
            {selectedCard.extendedBio.split("--").map((bioChunk) => (
              <div key={bioChunk}>
                <a>{bioChunk}</a>
                <br />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )}
  <div className="page-holder">
    <h2 id="Board" className="team-directors-header D-H1-32">
      Board of Directors
    </h2>
    <h3 className="team-directors-tab D-P-20">
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
            <p className="D-P-20">{member.name}</p>
          </div>
          <button className="btn-board-tab">
            <img src={Image7} />
          </button>
        </div>
      </div>
    ))}
  </div>

  <div id="Advisory" className="page-holder">
    <h2 className="team-directors-header D-H2-30">Advisory Council</h2>
    <h3 className="team-directors-tab D-P-20">
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
            <p className="D-P-20">{member.name}</p>
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


















// OLD CODEBASE 



// import { useState, useRef, useEffect } from "react";

// import Image from "../../../Assets/Images/Sasikaa.png";
// import Image1 from "../../../Assets/Images/Jeff.png";
// import Image2 from "../../../Assets/Images/Mathias.png";
// import Image3 from "../../../Assets/Images/Joseph.png";
// import Image4 from "../../../Assets/Images/Elizabeth.png";
// import Image5 from "../../../Assets/Images/Marilyn.png";
// import Image8 from "../../../Assets/Images/Chris.png";
// import Image8b from "../../../Assets/Images/olivia.png";
// import Image9 from "../../../Assets/Images/hilda.png";
// import Image10 from "../../../Assets/Images/mark.png";
// import Image11 from "../../../Assets/Images/Michelle.png";
// import Image12 from "../../../Assets/Images/Nathalie.png";
// import Image13 from "../../../Assets/Images/Rebacca.png";
// import Image14 from "../../../Assets/Images/Ola.png";
// import Image15 from "../../../Assets/Images/sean.png";
// import Image6 from "../../../Assets/Images/Card.png";
// import Image7 from "../../../Assets/Icons/plus.png";


// import teamData from "../../../Components/Team-Layout/DataPage/TeamData.jsx";

// import closeButton from "../../../Assets/Images/close-button.png";
// import closeButton2 from "../../../Assets/Images/close-button-2.png";

// import roundedFrame from "../../../Assets/Icons/rounded-frame.svg";

// import "./Board.css";
// import { Padding } from "@mui/icons-material";
// const Board = () => {
//   const divRef = useRef(null);
//   const divTwoRef = useRef(null);
//   const divThreeRef = useRef(null);
//   const divFourRef = useRef(null);
//   const divFiveRef = useRef(null);
//   const divSixRef = useRef(null);

//   const [isVisible, setIsVisible] = useState({
//     divRef: false,
//     divTwoRef: false,
//     divThreeRef: false,
//     divFourRef: false,
//     divFiveRef: false,
//     divSixRef: false,
//   });

//   // useEffect(() => {
//   //   const handleScroll = () => {
//   //     applyVisibleEffect(divRef, "divRef");
//   //     applyVisibleEffect(divTwoRef, "divTwoRef");
//   //     applyVisibleEffect(divThreeRef, "divThreeRef");
//   //     applyVisibleEffect(divFourRef, "divFourRef");
//   //     applyVisibleEffect(divFiveRef, "divFiveRef");
//   //     applyVisibleEffect(divSixRef, "divSixRef");
//   //   };
//   //   const applyVisibleEffect = (div, key) => {
//   //     if (div.current) {
//   //       const rect = div.current.getBoundingClientRect();
//   //       const windowHeight =
//   //         window.innerHeight || document.documentElement.clientHeight;

//   //       if (rect.top <= windowHeight && rect.bottom >= 0) {
//   //         setIsVisible((prevState) => ({
//   //           ...prevState,
//   //           [key]: true,
//   //         }));
//   //       } else {
//   //         setIsVisible((prevState) => ({
//   //           ...prevState,
//   //           [key]: false,
//   //         }));
//   //       }
//   //     }
//   //   };

//   //   window.addEventListener("scroll", handleScroll);
//   //   return () => {
//   //     window.removeEventListener("scroll", handleScroll);
//   //   };
//   // }, []);

//   const [selectedCard, setSelectedCard] = useState(null);

//   const handleCardClick = () => {
//     console.log("cicked card: " + teamData.executive[1]);
//     setSelectedCard(teamData.executive[0]);
//   };

//   const handleCardClick1 = () => {
//     console.log("cicked card: " + teamData.executive[1]);
//     setSelectedCard(teamData.executive[1]);
//   };
//   const handleCardClick2 = () => {
//     console.log("cicked card: " + teamData.executive[1]);
//     setSelectedCard(teamData.executive[2]);
//   };
//   const handleCardClick3 = () => {
//     console.log("cicked card: " + teamData.executive[1]);
//     setSelectedCard(teamData.executive[3]);
//   };
//   const handleCardClick4 = () => {
//     console.log("cicked card: " + teamData.executive[1]);
//     setSelectedCard(teamData.executive[4]);
//   };
//   const handleCardClick5 = () => {
//     console.log("cicked card: " + teamData.executive[1]);
//     setSelectedCard(teamData.executive[5]);
//   };
//   const handleCardClick6 = () => {
//     console.log("cicked card: " + teamData.executive[1]);
//     setSelectedCard(teamData.executive[6]);
//   };
//   const handleCardClick7 = () => {
//     console.log("cicked card: " + teamData.executive[8]);
//     setSelectedCard(teamData.executive[7]);
//   };
//   const handleCardClick8 = () => {
//     console.log("cicked card: " + teamData.executive[1]);
//     setSelectedCard(teamData.executive[8]);
//   };
//   const handleCardClick9 = () => {
//     console.log("cicked card: " + teamData.executive[1]);
//     setSelectedCard(teamData.executive[9]);
//   };
//   const handleCardClick10 = () => {
//     console.log("cicked card: " + teamData.executive[1]);
//     setSelectedCard(teamData.executive[10]);
//   };
//   const handleCardClick11 = () => {
//     console.log("cicked card: " + teamData.executive[1]);
//     setSelectedCard(teamData.executive[11]);
//   };
//   const handleCardClick12 = () => {
//     console.log("cicked card: " + teamData.executive[1]);
//     setSelectedCard(teamData.executive[12]);
//   };
//   const handleCardClick13 = () => {
//     console.log("cicked card: " + teamData.executive[1]);
//     setSelectedCard(teamData.executive[13]);
//   };
//   const handleCardClick14 = () => {
//     console.log("cicked card: " + teamData.executive[1]);
//     setSelectedCard(teamData.executive[14]);
//   };
//   const handleCardClick15 = () => {
//     console.log("cicked card: " + teamData.executive[1]);
//     setSelectedCard(teamData.executive[15]);
//   };

//   const handlePopupClose = () => {
//     console.log("clicked close");
//     setSelectedCard(null);
//   };

//   const handleDivClick = (e) => {
//     e.stopPropagation();
//     window.open(selectedCard.link);
//   };

//   return (
//     <div className="board-text-tab" >
//       {selectedCard && (
//         <div className="popup-overlay" onClick={handlePopupClose}>
//           <div className="popup-content">
//             <img
//               onClick={handlePopupClose}
//               src={closeButton2}
//               className="close-btn"
//             />
//             <div className="popup-text">
//               <img src={selectedCard.image} className="popup-img" />
//               <h1 className="popup-name">{selectedCard.name}</h1>
//               <div className="popup-linkedin" onClick={handleDivClick}>
//                 {/* <img src={linkedIn} className="popup-linkedin-icon" /><h2 className="popup-linkedin-text">LinkedIn</h2> */}
//               </div>
//               <hr className="grey-line"></hr>

//               {selectedCard.extendedBio.split("--").map((bioChunk) => (
//                 <div key={bioChunk}>
//                   <a>{bioChunk}</a>
//                   <br />
//                   <br />
//                 </div>
//               ))}
//             </div>
//             {/* <img src={roundedFrame} className="rounded-frame" /> */}
//             <img
//               onClick={handlePopupClose}
//               src={closeButton}
//               className="close-btn-2"
//             />
//           </div>
//         </div>
//       )}
//       <div className="page-holder">
//         {/* <div className={`teamboard-tab ${isVisible.divRef ? "slide-in" : ""}`}
//                     ref={divRef}> */}

//         <h2 id="Board" className="team-directors-header D-H1-32"> Board of Directors</h2>

//         <h3 className="team-directors-tab D-P-20">
//           Our Board of Directors governs the Foundation's mission, policies,
//           bylaws, budget, and fundraising initiatives, aligning with legal
//           requirements and the purposes outlined in the Certificate of
//           Incorporation and the Bylaws.
//         </h3>
//       </div>

//       <div
//         className={`board-directors-tab  ${
//           isVisible.divTwoRef ? "slide-in" : ""
//         }`}
//         ref={divTwoRef}
//       >
//         <div className="board-image" onClick={handleCardClick}>
//           <img src={Image} alt="" />

//           <div className="Name-tab">
//             <p className="D-P-20">
//               Sasika Nanayakkara, PMP <br />
//             </p>
//           </div>

//           <button className="btn-board-tab">
//             <img src={Image7} />
//           </button>

//           <button className="btn-board-tab">
//             <img src={Image7} />
//           </button>
//         </div>

//         <div className="board-image" onClick={handleCardClick1}>
//           <img src={Image1} alt="" />

//           <div className="Name-tab">
//             <p className="D-P-20">
//               Jeff Jacques, MD <br />
//             </p>
//           </div>
//           <button className="btn-board-tab">
//             <img src={Image7} />
//           </button>
//         </div>
//       </div>

//       <div
//         className={`board-directors-tab2  ${
//           isVisible.divThreeRef ? "slide-in" : ""
//         }`}
//         ref={divThreeRef}
//       >
//         <div className="board-image" onClick={handleCardClick2}>
//           <img src={Image3} alt="" />

//           <div className="Name-tab">
//             <p className="D-P-20">
//             Joseph F. Karcich<br />
//             </p>
//           </div>
//           <button className="btn-board-tab">
//             <img src={Image7} />
//           </button>
//         </div>

//         {/* <div className="board-image" onClick={handleCardClick3}>
//           <img src={Image2} alt="" />

//           <div className="Name-tab">
//             <p className="D-P-20">
//               Matias Berisso <br />
//               Treasurer and Secretary
//             </p>
//           </div>
//           <button className="btn-board-tab">
//             <img src={Image7} />
//           </button>
//         </div> */}
//         <div className="board-image" onClick={handleCardClick10}>
//           <img src={Image10} alt="mark" />

//           <div className="Name-tab">
//             <p className="D-P-20">
//               Mark Huntzinger <br />
//               {" "}
//             </p>
//           </div>
//           <button className="btn-board-tab">
//             <img src={Image7} />
//           </button>
//         </div>
//       </div>
//       <div
//         className={`board-directors-tab2  ${
//           isVisible.divThreeRef ? "slide-in" : ""
//         }`}
//         ref={divThreeRef}
//       >
//         <div className="board-image" onClick={handleCardClick3}>
//           <img src={Image2} alt="" />

//           <div className="Name-tab">
//             <p className="D-P-20">
//               Matias Berisso <br />
              
//             </p>
//           </div>
//           <button className="btn-board-tab">
//             <img src={Image7} />
//           </button>
//         </div>
//       </div>

//       <div id="Advisory" className="page-holder">
//         {/* <div className={`teamboard-tab ${isVisible.divRef ? "slide-in" : ""}`}
//                     ref={divRef}> */}

//         <h2 className="team-directors-header D-H2-30">Advisory Council</h2>

//         <h3 className="team-directors-tab D-P-20">
//           The Advisory Committee for our health and wellness startup serves as a
//           group of experienced advisors who provide valuable insights, guidance,
//           and expertise. They contribute to strategic decision-making, offer
//           industry-specific knowledge, and provide recommendations on various
//           aspects of our business, helping us drive innovation and ensure the
//           effectiveness of our programs and services.
//         </h3>
//       </div>

//       <div
//         className={`board-directors-tab3 ${
//           isVisible.divFiveRef ? "slide-in" : ""
//         } `}
//         ref={divFiveRef}
//       >
//         <div className="board-image" onClick={handleCardClick4}>
//           <img src={Image5} alt="" />

//           <div className="Name-tab">
//             <p className="D-P-20">Marilyn Crawford</p>
//           </div>
//           <button className="btn-board-tab">
//             <img src={Image7} />
//           </button>
//         </div>

//         <div className="board-image" onClick={handleCardClick6}>
//           <img src={Image4} alt="" />

//           <div className="Name-tab">
//             <p className="D-P-20">Marcella Sarti Souza, MD</p>
//           </div>
//           <button className="btn-board-tab">
//             <img src={Image7} />
//           </button>
//         </div>
//       </div>
//       <div
//         className={`board-directors-tab3 ${
//           isVisible.divFiveRef ? "slide-in" : ""
//         } `}
//         ref={divFiveRef}
//       >
//         <div className="board-image" onClick={handleCardClick5}>
//           <img src={Image6} alt="" />

//           <div className="Name-tab">
//             <p className="D-P-20">Alex Lizzappi</p>
//           </div>
//           <button className="btn-board-tab">
//             <img src={Image7} />
//           </button>
//         </div>

//         <div className="board-image" onClick={handleCardClick15}>
//           <img src={Image15} alt="dalia" />

//           <div className="Name-tab">
//             <p className="D-P-20">Sean T. Connolly
//             </p>
//           </div>
//           <button className="btn-board-tab">
//             <img src={Image7} />
//           </button>
//         </div>
//       </div>
//       <div
//         className={`board-directors-tab3 ${
//           isVisible.divFiveRef ? "slide-in" : ""
//         } `}
//         ref={divFiveRef}
//       >
//         <div className="board-image" onClick={handleCardClick8}>
//           <img src={Image8b} alt="mala" />

//           <div className="Name-tab">
//             <p className="D-P-20">Olivia Begasse de Dhaem, MD</p>
//           </div>
//           <button className="btn-board-tab">
//             <img src={Image7} />
//           </button>
//         </div>

//         <div className="board-image" onClick={handleCardClick13}>
//           <img src={Image13} alt="oliver" />

//           <div className="Name-tab">
//             <p className="D-P-20">Rebecca Brown, MD PhD</p>
//           </div>
//           <button className="btn-board-tab">
//             <img src={Image7} />
//           </button>
//         </div>
//       </div>

//       <div
//         className={`board-directors-tab3 ${
//           isVisible.divFiveRef ? "slide-in" : ""
//         } `}
//         ref={divFiveRef}
//       >
//         {/* <div className="board-image" onClick={handleCardClick10}>
//           <img src={Image10} alt="mark" />

//           <div className="Name-tab">
//             <p className="D-P-20">Mark Huntzinger </p>
//           </div>
//           <button className="btn-board-tab">
//             <img src={Image7} />
//           </button>
//         </div> */}

//         <div className="board-image" onClick={handleCardClick7}>
//           <img src={Image8} alt="" />

//           <div className="Name-tab">
//             {/*             <p className="D-P-20">Christophe Foulon, CISSP, GSLC, AWS Security</p> */}
//             <p className="D-P-20">Christophe Foulon, CISSP, GSLC, AWS Security
//             </p>
//           </div>
//           <button className="btn-board-tab">
//             <img src={Image7} />
//           </button>
//         </div>
//         <div className="board-image" onClick={handleCardClick14}>
//           <img src={Image14} alt="oliver" />

//           <div className="Name-tab">
//             <p className="D-P-20">Oladimeji Ibitoye</p>
//           </div>
//           <button className="btn-board-tab">
//             <img src={Image7} />
//           </button>
//         </div>
//       </div>
//       <div
//         className={`board-directors-tab3 ${
//           isVisible.divFiveRef ? "slide-in" : ""
//         } `}
//         ref={divFiveRef}
//       >
//         {/* <div className="board-image" onClick={handleCardClick10}>
//           <img src={Image10} alt="mark" />

//           <div className="Name-tab">
//             <p className="D-P-20">Mark Huntzinger </p>
//           </div>
//           <button className="btn-board-tab">
//             <img src={Image7} />
//           </button>
//         </div> */}

//         <div className="board-image" onClick={handleCardClick11}>
//           <img src={Image11} alt="oliver" />

//           <div className="Name-tab">
//             <p className="D-P-20">Michelle Waldgeir</p>
//           </div>
//           <button className="btn-board-tab">
//             <img src={Image7} />
//           </button>
//         </div>

//         <div className="board-image" onClick={handleCardClick9}>
//           <img src={Image9} alt="dalia" />

//           <div className="Name-tab">
//             <p className="D-P-20">Dalia Heci, LLM, AML/CFT
//             </p>
//           </div>
//           <button className="btn-board-tab">
//             <img src={Image7} />
//           </button>
//         </div>
        
//       </div>
//       <div
//         className={`board-directors-tab3 ${
//           isVisible.divFiveRef ? "slide-in" : ""
//         } `}
//         ref={divFiveRef}
//       >


        
//       </div>
//     </div>
//   );
// };
// export default Board;
