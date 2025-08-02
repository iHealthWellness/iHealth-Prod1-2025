//  Seprate left and right Event wih only button and image , cover SLide  

import React, { useState, useRef, useEffect } from "react"
import styles from "./index.module.css"
import techEditionImg from "../../../../../src/Assets/Images/Tech-May.png";
import monthlyImg from "../../../../../src/Assets/Images/Monthly- iHealth-Newsletter-Banner-LinkedIn (3.3 x 3 in).jpg";
import factsAboutNfImg from "../../../../../src/Assets/Images/facts-about-nf-post3.jpg";
// import expertAnswersImg from "../../../../../src/Assets/Images/Expert Answers - Community Voices - Cover (3.3 x 3 in).jpg";
import communityVoicesImg from "../../../../../src/Assets/Images/Community Voices - Cover (3.3 x 3 in).jpg";
import ihealth360hubbasedhealthcare from "../../../../../src/Assets/Images/2web- ihealth Hub-Based Healthcare Model (3.3 x 3 in).png";
import techEditionVolTwo from "../../../../../src/Assets/files/Tech Edition - May 2025 Newsletter Vol2.pdf";
import ihealth360hubbasedhealthcarefile from "../../../../../src/Assets/files/iHealth-Hub-Based-Healthcare-Model.pdf";
import juneNewsletter from "../../../../../src/Assets/files/June 2025 Newsletter.pdf";
import ihealthNavigatingYourChild from "../../../../../src/Assets/Images/web-image SN-Pediatric NF (3.3 x 3 in).jpg";
import expertAnswersCover from "../../../../../src/Assets/Images/Playlist-Expert-Answers (3.3 x 3 in)-new.png";
// import juneNewsletterImage from "../../../../../src/Assets/Images/june-newsletter.PNG";
// import juneNewsletterFile from "../../../../../src/Assets/files/june-newsletter-file.pdf";
import julyNewsletterCover from "../../../../../src/Assets/Images/Web-July Newsletter-Cover.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CalendarMonth, PictureAsPdf, PlayCircle, People, Book, Link as LinkIcon, ChevronRight } from "@mui/icons-material";

const ExitConfirmationModal = ({ isOpen, onClose, onConfirm, link }) => {
  if (!isOpen) return null

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.confirmationModal}>
        <p className="SN-D-T-M-P-16">You are about to leave the website. Do you want to continue?</p>
        <div className={styles.modalButtons}>
          <button className={`${styles.confirmButton} SN-D-T-M-B-16`} onClick={() => onConfirm(link)}>
            Continue
          </button>
          <button className={`${styles.cancelButton} SN-D-T-M-B-16`} onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

const events = [
  {
    title: "iHealth Expert Answers – Neurofibromatosis (NF)",
    icon: <Book className={styles.eventIcon} />,
    mainImage: expertAnswersCover,
    link: "https://www.youtube.com/playlist?list=PLWRClAjMOjXg3tNk2uqqPvYJJMfE7_1nu",
    btnText: "Watch Playlist",
    lastUpdated: "June 2025",
    description: "Expert answers on Neurofibromatosis (NF).",
  },

  {
    title: "Monthly Newsletter: July",
    icon: <CalendarMonth className={styles.eventIcon} />,
    mainImage: julyNewsletterCover,
    link: "https://mailchi.mp/76e56ce76d9b/ihealthnotes-june-2025-volume-8330707?e=[UNIQID]",
    btnText: "Read Newsletter",
    lastUpdated: "July 2025",
    description: "Monthly highlights and updates in PDF format.",
  },
  // {
  //   title: "Monthly Newsletter: June",
  //   icon: <CalendarMonth className={styles.eventIcon} />,
  //   mainImage: monthlyImg,
  //   link: juneNewsletter,
  //   btnText: "View Newsletter",
  //  lastUpdated: "June 28 2025",
  //   description: "Monthly highlights and updates in PDF format.",
  // },
  {
    title: "Facts About Neurofibromatosis (NF)",
    icon: <PlayCircle className={styles.eventIcon} />, 
    mainImage: factsAboutNfImg,
    link: "https://youtube.com/playlist?list=PLWRClAjMOjXgo6m6vrypqWbwwCcVb1NEu&si=jnhIDIYhH_PB_exQ",
    btnText: "Watch Playlist",
    lastUpdated: "March 2025",
    description: "Facts and information about Neurofibromatosis (NF).",
  },
  {
    title: 'Past Event: "Navigating Your Child\'s NF Journey"',
    icon: <PlayCircle className={styles.eventIcon} />, 
    mainImage: ihealthNavigatingYourChild, 
    link: "https://youtube.com/playlist?list=PLWRClAjMOjXh3LgVrz_Yz-7aGQx1E6dEV&si=RPz25YWszl07_Dlw",
    btnText: "Watch Playlist",
    lastUpdated: "June 2025",
    description: "A video series for parents navigating their child's NF journey.",
  },
  // {
  //   title: "iHealth Notes: Monthly Highlights",
  //   icon: <CalendarMonth className={styles.eventIcon} />,
  //   mainImage: monthlyImg,
  //   link: juneNewsletter,
  //   btnText: "View Newsletter",
  // lastUpdated: "July 29 2025",
  //   description: "Monthly highlights and updates in PDF format.",
  // },
  {
    title: "iHealth Community Voices – Neurofibromatosis (NF)",
    icon: <People className={styles.eventIcon} />,
    mainImage: communityVoicesImg,
    link: "https://youtube.com/playlist?list=PLWRClAjMOjXgq_Melgg_UdfFrtIeS_Rrx&si=X_20-ngs9ZvkrjHC",
    btnText: "Watch Playlist",
    lastUpdated: "January 2025",
    description: "Community voices on Neurofibromatosis (NF).",
  },

  {
    title: "iHealth360 Hub: Financial and Clinical Benefits",
    icon: <PictureAsPdf className={styles.eventIcon} />,
    mainImage: ihealth360hubbasedhealthcare, 
    link: ihealth360hubbasedhealthcarefile,
    btnText: "View PDF",
    lastUpdated: "June 2025",
    description: "Financial and clinical benefits resources.",
  },

  {
    title: "iHealth Notes: Tech Edition",
    icon: <CalendarMonth className={styles.eventIcon} />,
    mainImage: techEditionImg,
    link: techEditionVolTwo,
    btnText: "View iHealth Notes",
    lastUpdated: "May 2025",
    description: "Tech-focused edition of iHealth Notes.",
  }, 
  
];

const EventCards = () => {
  const [mainImageIdx, setMainImageIdx] = useState(0);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalLink, setModalLink] = useState("");
  const sliderRef = useRef(null);

  const handleCoverClick = () => {
    setModalLink(events[mainImageIdx]?.link || "");
    setModalOpen(true);
  };
  
  const handleButtonClick = (link) => {
    setModalLink(link);
    setModalOpen(true);
  };
  
  const handleModalConfirm = (link) => {
    setModalOpen(false);
    if (link) window.open(link, "_blank", "noopener,noreferrer");
  };
  
  const handleModalClose = () => setModalOpen(false);

  // Ensure first card is active on component mount
  useEffect(() => {
    setMainImageIdx(0);
    setCurrentSlideIndex(0);
  }, []);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    focusOnSelect: true,
    arrows: false,
    centerMode: false,
    initialSlide: 0,
    afterChange: (currentIndex) => {
      setMainImageIdx(currentIndex);
      setCurrentSlideIndex(currentIndex);
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '25%',
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '20%',
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          centerPadding: '15%',
        },
      },
    ],
  };

  return (
    <section className={styles.fullContainer}>
      <div className={styles.sectionContainer}>
        <h2 className={`SN-D-Home-H2-32 ${styles.eventHeader} ${styles.mobileeventHeader}`}>IHealth Events and Resources</h2>
        
        <div className={styles.leftContainer}>
          <button
            style={{ border: "none", background: "none", padding: 0, cursor: "pointer" }}
            onClick={handleCoverClick}
            aria-label="Open event link confirmation"
          >
            {events[mainImageIdx]?.mainImage ? (
              <img
                src={events[mainImageIdx].mainImage}
                alt="Main Event"
                className={styles.mainImage}
              />
            ) : (
              <div className={styles.noImagePlaceholder}>
                No image available
              </div>
            )}
          </button>
        </div>
        
        <div className={styles.rightContainer}>
          <h2 className={`SN-D-Home-H2-32 ${styles.eventHeader} ${styles.desktopeventHeader}`}>iHealth Resource Center</h2>
          <Slider
            ref={sliderRef}
            {...sliderSettings}
          >
            {events.map((event, idx) => (
              <div key={idx}>
                <div className={styles.eventFiller}></div>
                <a
                  href={event.link}
                  className={styles.eventLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={e => { e.preventDefault(); handleButtonClick(event.link); }}
                >
                <div className={`${styles.eventCard} ${idx === currentSlideIndex ? styles.activeCard : ''}`}>
                  <img 
                    src={event.mainImage} 
                    alt={event.title}
                    className={styles.cardBackgroundImage}
                  />
                  <div className={styles.cardOverlay}>
                    <div className={styles.cardHoverContent}>
                      <div className={styles.cardHeader}>
                        {event.icon}
                        <h3 className={`${styles.eventTitle} SN-P`}>{event.title}</h3>
                      </div>
                      <p className={`SN-P-Small ${styles.eventDescription}`}>{event.description} <br/>  <span>Last Updated : </span>  {event.lastUpdated}</p>

                      {/* <p className={`SN-P-Small ${styles.eventDescription}`}> <span>Last Updated | </span>  {event.lastUpdated}</p> */}
                    </div>
                    {event.btnText && event.link && (
                      <div className={styles.eventLinkContainer}>
                        <a
                          href={event.link}
                          className={`${styles.eventLink} SN-P-Small`}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={e => { e.preventDefault(); handleButtonClick(event.link); }}
                        >
                          {event.btnText}
                        </a>
                        <span className={styles.arrowLeft}>
                          <ChevronRight/>
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                </a>
                <div className={styles.eventFiller}></div>
              </div>
            ))}
          </Slider>
          
          <div className={styles.customControlBar}>
            <button
              type="button"
              aria-label="Previous"
              className={styles.arrowBtn}
              onClick={() => sliderRef.current?.slickPrev()}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#07235b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
            </button>
            <ul className={styles.dotsList}>
              {events.map((_, idx) => (
                <li key={idx}>
                  <button
                    className={idx === currentSlideIndex ? styles.activeDot : styles.dot}
                    onClick={() => sliderRef.current?.slickGoTo(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                </li>
              ))}
            </ul>
            <button
              type="button"
              aria-label="Next"
              className={styles.arrowBtn}
              onClick={() => sliderRef.current?.slickNext()}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#07235b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          </div>
        </div>
        
        <ExitConfirmationModal
          isOpen={modalOpen}
          onClose={handleModalClose}
          onConfirm={handleModalConfirm}
          link={modalLink}
        />
      </div>
    </section>
  );
};

export default EventCards;














//  Seprate left and right Event , cover SLide  


// import React, { useState, useRef } from "react"
// import styles from "./index.module.css"
// import techEditionImg from "../../../../../src/Assets/Images/TechEdition- iHealth-Newsletter-Banner-LinkedIn (3.3 x 3 in).jpg";
// import monthlyImg from "../../../../../src/Assets/Images/Monthly- iHealth-Newsletter-Banner-LinkedIn (3.3 x 3 in).jpg";
// import factsAboutNfImg from "../../../../../src/Assets/Images/facts-about-nf-post3.jpg";
// import expertAnswersImg from "../../../../../src/Assets/Images/Expert Answers - Community Voices - Cover (3.3 x 3 in).jpg";
// import communityVoicesImg from "../../../../../src/Assets/Images/Community Voices - Cover (3.3 x 3 in).jpg";
// import ihealth360hubbasedhealthcare from "../../../../../src/Assets/Images/2web- ihealth Hub-Based Healthcare Model (3.3 x 3 in).png";
// import techEditionVolTwo from "../../../../../src/Assets/files/Tech Edition - May 2025 Newsletter Vol2.pdf";
// import ihealth360hubbasedhealthcarefile from "../../../../../src/Assets/files/iHealth-Hub-Based-Healthcare-Model.pdf";
// import juneNewsletter from "../../../../../src/Assets/files/June 2025 Newsletter.pdf";
// import ihealthNavigatingYourChild from "../../../../../src/Assets/Images/web-image SN-Pediatric NF (3.3 x 3 in).jpg";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { CalendarMonth, PictureAsPdf, PlayCircle, People, Book, Link as LinkIcon, ChevronRight } from "@mui/icons-material";




// const ExitConfirmationModal = ({ isOpen, onClose, onConfirm, link }) => {
//   if (!isOpen) return null

//   return (
//     <div className={styles.modalOverlay}>
//       <div className={styles.confirmationModal}>
//         <p className="SN-D-T-M-P-16">You are about to leave the website. Do you want to continue?</p>
//         <div className={styles.modalButtons}>
//           <button className={`${styles.confirmButton} SN-D-T-M-B-16`} onClick={() => onConfirm(link)}>
//             Continue
//           </button>
//           <button className={`${styles.cancelButton} SN-D-T-M-B-16`} onClick={onClose}>
//             Cancel
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }


// const events = [
  
//   {
//     title: "iHealth Notes: Monthly Highlights",
//     icon: <CalendarMonth className={styles.eventIcon} />,
//     mainImage: monthlyImg,
//     link: juneNewsletter,
//     btnText: "View PDF Folder",
//     description: "Monthly highlights and updates in PDF format.",
//   },
//   {
//     title: "iHealth Community Voices – Neurofibromatosis (NF)",
//     icon: <People className={styles.eventIcon} />,
//     mainImage: communityVoicesImg,
//     link: "https://youtube.com/playlist?list=PLWRClAjMOjXgq_Melgg_UdfFrtIeS_Rrx&si=X_20-ngs9ZvkrjHC",
//     btnText: "Watch Playlist",
//     description: "Community voices on Neurofibromatosis (NF).",
//   },
//   {
//     title: "iHealth Expert Answers – Neurofibromatosis (NF)",
//     icon: <Book className={styles.eventIcon} />,
//     mainImage: expertAnswersImg,
//     link: "https://www.youtube.com/playlist?list=PLWRClAjMOjXg3tNk2uqqPvYJJMfE7_1nu",
//     btnText: "Watch Playlist",
//     description: "Expert answers on Neurofibromatosis (NF).",
//   },
  
//   {
//     title: "iHealth360 Hub: Financial and Clinical Benefits",
//     icon: <PictureAsPdf className={styles.eventIcon} />,
//     mainImage: ihealth360hubbasedhealthcare, 
//     link: ihealth360hubbasedhealthcarefile,
//     btnText: "View PDF",
//     description: "Financial and clinical benefits resources.",
//   },
//   {
//     title: "Facts About Neurofibromatosis (NF)",
//     icon: <PlayCircle className={styles.eventIcon} />, 
//     mainImage: factsAboutNfImg,
//     link: "https://youtube.com/playlist?list=PLWRClAjMOjXgo6m6vrypqWbwwCcVb1NEu&si=jnhIDIYhH_PB_exQ",
//     btnText: "Watch Playlist",
//     description: "Facts and information about Neurofibromatosis (NF).",
//   },
//   {
//     title: "iHealth Notes: Tech Edition",
//     icon: <CalendarMonth className={styles.eventIcon} />,
//     mainImage: techEditionImg,
//     link: techEditionVolTwo,
//     btnText: "View PDF Folder",
//     description: "Tech-focused edition of iHealth Notes.",
//   }, 
//   {
//     title: 'Past Event: "Navigating Your Child\'s NF Journey"',
//     icon: <PlayCircle className={styles.eventIcon} />, 
//     mainImage: ihealthNavigatingYourChild, 
//     link: "https://youtube.com/playlist?list=PLWRClAjMOjXh3LgVrz_Yz-7aGQx1E6dEV&si=VuQB9QwD8nTqirbk",
//     btnText: "Watch Series",
//     description: "A video series for parents navigating their child's NF journey.",
//   },
// ];

// const PrevArrow = (props) => (
//   <button
//     type="button"
//     className="slick-arrow slick-prev"
//     style={{ left: -40, zIndex: 2, background: 'none', border: 'none', position: 'absolute', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}
//     onClick={props.onClick}
//     aria-label="Previous"
//   >
//     <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0095ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
//   </button>
// );

// const NextArrow = (props) => (
//   <button
//     type="button"
//     className="slick-arrow slick-next"
//     style={{ right: -40, zIndex: 2, background: 'none', border: 'none', position: 'absolute', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}
//     onClick={props.onClick}
//     aria-label="Next"
//   >
//     <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0095ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
//   </button>
// );

// const EventCards = () => {
//   const [mainImageIdx, setMainImageIdx] = useState(0);
//   const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
//   const [modalOpen, setModalOpen] = useState(false);
//   const [modalLink, setModalLink] = useState("");
//   const sliderRef = useRef(null);

//   const handleCoverClick = () => {
//     setModalLink(events[mainImageIdx]?.link || "");
//     setModalOpen(true);
//   };
//   const handleButtonClick = (link) => {
//     setModalLink(link);
//     setModalOpen(true);
//   };
//   const handleModalConfirm = (link) => {
//     setModalOpen(false);
//     if (link) window.open(link, "_blank", "noopener,noreferrer");
//   };
//   const handleModalClose = () => setModalOpen(false);

//   const sliderSettings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     focusOnSelect: true,
//     arrows: false,
//     centerMode: false,
//     afterChange: (currentIndex) => {
//       setMainImageIdx(currentIndex);
//       setCurrentSlideIndex(currentIndex);
//     },
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <section className={styles.fullContainer}>
//     <div className={styles.sectionContainer}>
//       <h2 className={`SN-D-Home-H2-32 ${styles.eventHeader} ${styles.mobileeventHeader}`}>IHealth Events and Resources</h2>
//       <div className={styles.leftContainer}>
//         <button
//           style={{ border: "none", background: "none", padding: 0, cursor: "pointer" }}
//           onClick={handleCoverClick}
//           aria-label="Open event link confirmation"
//         >
//           {events[mainImageIdx]?.mainImage ? (
//             <img
//               src={events[mainImageIdx].mainImage}
//               alt="Main Event"
//               className={styles.mainImage}
//             />
//           ) : (
//             <div className={styles.noImagePlaceholder}>
//               No image available
//             </div>
//           )}
//         </button>
//       </div>
//       <div className={styles.rightContainer}>
//       <h2 className={`SN-D-Home-H2-32 ${styles.eventHeader} ${styles.desktopeventHeader}`}>IHealth Events and Resources</h2>
//         <Slider
//           ref={sliderRef}
//           {...sliderSettings}
//         >
//           {events.map((event, idx) => (
//             <div key={idx}>
//               <div className={styles.eventFiller}></div>
//               <div className={`${styles.eventCard} ${idx === currentSlideIndex ? styles.activeCard : ''}`}>
//                 {event.icon}
//                 <h3 className={`${styles.eventTitle} SN-P`}>{event.title}</h3>
//                 {event.description && <p className={`SN-P-Small ${styles.eventDescription}`}>{event.description}</p>}
//                 {event.btnText && event.link && (
//                   <div className={styles.eventLinkContainer}>
//                   <a
//                     href={event.link}
//                     className={styles.eventLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     onClick={e => { e.preventDefault(); handleButtonClick(event.link); }}
//                   >
//                     {event.btnText}
//                   </a>
//                     <span className={styles.arrowLeft}>
//                     <ChevronRight/>
//                     </span>
                    
//                   </div>
//                 )}
//                 {/* {!event.mainImage && (git pull
//                   <div style={{marginTop: 12, color: '#b0b8c9', fontSize: 14}}>No image available</div>
//                 )} */}
//               </div>
//               <div className={styles.eventFiller}></div>
//             </div>
//           ))}
//         </Slider>
//         <div className={styles.customControlBar}>
//           <button
//             type="button"
//             aria-label="Previous"
//             className={styles.arrowBtn}
//             onClick={() => sliderRef.current?.slickPrev()}
//           >
//             <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0095ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
//           </button>
//           <ul className={styles.dotsList}>
//             {events.map((_, idx) => (
//               <li key={idx}>
//                 <button
//                   className={idx === currentSlideIndex ? styles.activeDot : styles.dot}
//                   onClick={() => sliderRef.current?.slickGoTo(idx)}
//                   aria-label={`Go to slide ${idx + 1}`}
//                 />
//               </li>
//             ))}
//           </ul>
//           <button
//             type="button"
//             aria-label="Next"
//             className={styles.arrowBtn}
//             onClick={() => sliderRef.current?.slickNext()}
//           >
//             <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0095ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
//           </button>
//         </div>
//       </div>
//       <ExitConfirmationModal
//         isOpen={modalOpen}
//         onClose={handleModalClose}
//         onConfirm={handleModalConfirm}
//         link={modalLink}
//       />
//     </div>
//     </section>
//   );
// };

// export default EventCards;

//  Seprate left and right Event , cover SLide  


















//  Event + cover SLide  

// import { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import styles from "./index.module.css";
// import techEditionImg from "../../../../../src/Assets/Images/TechEdition- iHealth-Newsletter-Banner-LinkedIn (3.3 x 3 in).jpg";
// import monthlyImg from "../../../../../src/Assets/Images/Monthly- iHealth-Newsletter-Banner-LinkedIn (3.3 x 3 in).jpg";
// import factsAboutNfImg from "../../../../../src/Assets/Images/facts-about-nf-post3.jpg";
// import expertAnswersImg from "../../../../../src/Assets/Images/Expert Answers - Community Voices - Cover (3.3 x 3 in).jpg";
// import communityVoicesImg from "../../../../../src/Assets/Images/Community Voices - Cover (3.3 x 3 in).jpg";
// import ihealth360hubbasedhealthcare from "../../../../../src/Assets/Images/2web- ihealth Hub-Based Healthcare Model (3.3 x 3 in).png";
// import ihealthNavigatingYourChild from "../../../../../src/Assets/Images/web-image SN-Pediatric NF (3.3 x 3 in).jpg";
// import { CalendarMonth, PictureAsPdf, PlayCircle, People, Book, ChevronLeft, ChevronRight } from "@mui/icons-material";

// const events = [
//   {
//     title: "iHealth Notes: Monthly Highlights",
//     icon: <CalendarMonth className={styles.eventIcon} />,
//     mainImage: monthlyImg,
//     link: "https://drive.google.com/file/d/1Q-jt7iZKBva_kKzkAnkLIVeX24EcU2gA/view?usp=sharing",
//     btnText: "View PDF Folder",
//     description: "Monthly highlights and updates in PDF format.",
//   },
//   {
//     title: "iHealth Community Voices – Neurofibromatosis (NF)",
//     icon: <People className={styles.eventIcon} />,
//     mainImage: communityVoicesImg,
//     link: "https://youtube.com/playlist?list=PLWRClAjMOjXgq_Melgg_UdfFrtIeS_Rrx&si=X_20-ngs9ZvkrjHC",
//     btnText: "Watch Playlist",
//     description: "Community voices on Neurofibromatosis (NF).",
//   },
//   {
//     title: "iHealth Expert Answers – Neurofibromatosis (NF)",
//     icon: <Book className={styles.eventIcon} />,
//     mainImage: expertAnswersImg,
//     link: "https://www.youtube.com/playlist?list=PLWRClAjMOjXg3tNk2uqqPvYJJMfE7_1nu",
//     btnText: "Watch Playlist",
//     description: "Expert answers on Neurofibromatosis (NF).",
//   },
//   {
//     title: "iHealth360 Hub: Financial and Clinical Benefits",
//     icon: <PictureAsPdf className={styles.eventIcon} />,
//     mainImage: ihealth360hubbasedhealthcare, 
//     link: "https://drive.google.com/file/d/1hI20yFX2JBvmLuQCJpfckgpvTECIYVhH/view?usp=sharing",
//     btnText: "View PDF",
//     description: "Financial and clinical benefits resources.",
//   },
//   {
//     title: "Facts About Neurofibromatosis (NF)",
//     icon: <PlayCircle className={styles.eventIcon} />, 
//     mainImage: factsAboutNfImg,
//     link: "https://youtube.com/playlist?list=PLWRClAjMOjXgo6m6vrypqWbwwCcVb1NEu&si=jnhIDIYhH_PB_exQ",
//     btnText: "Watch Playlist",
//     description: "Facts and information about Neurofibromatosis (NF).",
//   },
//   {
//     title: "iHealth Notes: Tech Edition",
//     icon: <CalendarMonth className={styles.eventIcon} />,
//     mainImage: techEditionImg,
//     link: "https://drive.google.com/drive/folders/1jQ4ZYuvKAMaKWHPQdhkLkUbTMOoDaKdT?usp=sharing",
//     btnText: "View PDF Folder",
//     description: "Tech-focused edition of iHealth Notes.",
//   }, 
//   {
//     title: 'Past Event: "Navigating Your Child\'s NF Journey"',
//     icon: <PlayCircle className={styles.eventIcon} />, 
//     mainImage: ihealthNavigatingYourChild, 
//     link: "https://youtube.com/playlist?list=PLWRClAjMOjXh3LgVrz_Yz-7aGQx1E6dEV&si=VuQB9QwD8nTqirbk",
//     btnText: "Watch Series",
//     description: "A video series for parents navigating their child's NF journey.",
//   },
// ];

// const PDFModal = ({ isOpen, onClose, pdfUrl }) => {
//   if (!isOpen) return null

//   return (
//     <div className={styles.modalOverlay}>
//       <div className={styles.modalContent}>
//         <button className={`${styles.closeButton} SN-D-T-M-P-14`} onClick={onClose}>
//           ×
//         </button>
//         <iframe src={pdfUrl} className={styles.pdfFrame} title="Newsletter PDF" allowFullScreen />
//       </div>
//     </div>
//   )
// }

// const ExitConfirmationModal = ({ isOpen, onClose, onConfirm, link }) => {
//   if (!isOpen) return null

//   return (
//     <div className={styles.modalOverlay}>
//       <div className={styles.confirmationModal}>
//         <p className="SN-D-T-M-P-16">You are about to leave the website. Do you want to continue?</p>
//         <div className={styles.modalButtons}>
//           <button className={`${styles.confirmButton} SN-D-T-M-B-16`} onClick={() => onConfirm(link)}>
//             Continue
//           </button>
//           <button className={`${styles.cancelButton} SN-D-T-M-B-16`} onClick={onClose}>
//             Cancel
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default function EventCards() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [cardsPerView, setCardsPerView] = useState(1);
//   const [touchStart, setTouchStart] = useState(0);
//   const [touchEnd, setTouchEnd] = useState(0);
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const updateCardsPerView = () => {
//       if (window.innerWidth >= 1536) {
//         setCardsPerView(3);
//       } else if (window.innerWidth >= 1024) {
//         setCardsPerView(2.5);
//       } else if (window.innerWidth >= 768) {
//         setCardsPerView(2);
//       } else {
//         setCardsPerView(1);
//       }
//     };
//     updateCardsPerView();
//     window.addEventListener("resize", updateCardsPerView);
//     return () => window.removeEventListener("resize", updateCardsPerView);
//   }, []);

//   const nextSlide = () => {
//     setActiveIndex((prev) => (prev + 1) % events.length);
//   };

//   const prevSlide = () => {
//     setActiveIndex((prev) => (prev - 1 + events.length) % events.length);
//   };

//   const goToSlide = (index) => {
//     setActiveIndex(index);
//   };

//   // Touch handlers for swipe functionality
//   const handleTouchStart = (e) => {
//     setTouchEnd(0);
//     setTouchStart(e.targetTouches[0].clientX);
//   };

//   const handleTouchMove = (e) => {
//     setTouchEnd(e.targetTouches[0].clientX);
//   };

//   const handleTouchEnd = () => {
//     if (!touchStart || !touchEnd) return;
//     const distance = touchStart - touchEnd;
//     const isLeftSwipe = distance > 50;
//     const isRightSwipe = distance < -50;
//     if (isLeftSwipe) {
//       nextSlide();
//     } else if (isRightSwipe) {
//       prevSlide();
//     }
//   };

//   const getCardWidth = () => {
//     if (cardsPerView === 1) return "100%";
//     if (cardsPerView === 2) return "50%";
//     if (cardsPerView === 2.5) return "40%";
//     return "33.333%";
//   };

//   // Modal logic (PDF, Exit) - unchanged
//   const [modalOpen, setModalOpen] = useState(false);
//   const [selectedPdf, setSelectedPdf] = useState("");
//   const [exitModalOpen, setExitModalOpen] = useState(false);
//   const [selectedLink, setSelectedLink] = useState("");

//   const handleLinkClick = (e, link) => {
//     e.preventDefault();
//     setSelectedLink(link);
//     setExitModalOpen(true);
//   };

//   const handleConfirmExit = (link) => {
//     window.open(link, '_blank');
//     setExitModalOpen(false);
//   };

//   return (
//     <div className={styles.container}>
//       <h2 className={`SN-D-Home-H2-32 ${styles.eventHeader}`}>IHealth Events and Resources</h2>
//       <div className={styles.cardsWrapper}>
//         <div
//           className={styles.cardsContainer}
//           ref={containerRef}
//           onTouchStart={handleTouchStart}
//           onTouchMove={handleTouchMove}
//           onTouchEnd={handleTouchEnd}
//         >
//           <div
//             className={styles.cardsTrack}
//             style={{
//               transform: `translateX(-${activeIndex * (100 / cardsPerView)}%)`,
//             }}
//           >
//             {events.map((event, index) => {
//               const isActive = index === activeIndex;
//               return (
//                 <div key={index} className={styles.cardWrapper} style={{ width: getCardWidth() }}>
//                   <div
//                     className={`${styles.eventCard} ${isActive ? styles.cardActive : styles.cardInactive}`}
//                     onClick={() => goToSlide(index)}
//                   >
//                     <div className={styles.cardContent}>
//                       <div className={styles.imageContainer}>
//                         <Link to={event.link} target="_blank" onClick={(e) => handleLinkClick(e, event.link)}>
//                           <img
//                             src={event.mainImage || "/placeholder.svg"}
//                             alt={event.title}
//                             className={styles.eventBackground}
//                           />
//                         </Link>
//                       </div>
//                       <div className={styles.eventInfo}>
//                         <div className={styles.eventHeader}>
//                           {event.icon}
//                           <h3 className={`${styles.eventTitle} SN-P`}>{event.title}</h3>
//                         </div>
//                         <p className={`${styles.eventDescription} SN-P-small`}>{event.description}</p>
//                         {event.btnText && event.link && (
//                         <div className={styles.eventLinkContainer}>
//                         <a
//                           href={event.link}
//                           className={styles.eventLink}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           onClick={e => { e.preventDefault(); handleButtonClick(event.link); }}
//                         >
//                           {event.btnText}
//                         </a>
//                         <span className={styles.arrowLeft}>
//                         <ChevronRight/>
//                           </span>
                          
//                         </div>
//                       )}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//       {/* Navigation Controls */}
//       <div className={styles.navigation}>
//         <div className={styles.dotsRow}>
//           <button onClick={prevSlide} className={styles.arrowButton}>
//             <ChevronLeft className={styles.arrowIcon} />
//           </button>
//           <div className={styles.dots}>
//             {events.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => goToSlide(index)}
//                 className={`${styles.dot} ${index === activeIndex ? styles.dotActive : ""}`}
//               />
//             ))}
//           </div>
//           <button onClick={nextSlide} className={styles.arrowButton}>
//             <ChevronRight className={styles.arrowIcon} />
//           </button>
//         </div>
//       </div>
//       {/* Modals */}
//       <PDFModal isOpen={modalOpen} onClose={() => setModalOpen(false)} pdfUrl={selectedPdf} />
//       <ExitConfirmationModal
//         isOpen={exitModalOpen}
//         onClose={() => setExitModalOpen(false)}
//         onConfirm={handleConfirmExit}
//         link={selectedLink}
//       />
//     </div>
//   );
// }

//  Event + cover SLide  





















































//  Three Row Event Card Component 



// import { useState } from "react"
// import { Link } from "react-router-dom"
// import styles from "./index.module.css"
// import imageTwo from "../../../../../src/Assets/Images/facts-about-nf-post3.jpg"
// import juneEvent from "../../../../../src/Assets/Images/JuneEvent.jpg";
// import monthlyHighlightImage from "../../../../../src/Assets/Images/Monthly- iHealth-Newsletter-Banner-LinkedIn (3.3 x 3 in).jpg";
// import ihealth360hubimage from "../../../../../src/Assets/Images/2web- ihealth Hub-Based Healthcare Model (3.3 x 3 in).png";
// import ihealth360hubfile from "../../../../../src/Assets/files/iHealth-Hub-Based-Healthcare-Model.pdf";
// import maynewsletterPDF from "../../../../../src/Assets/files/June 2025 Newsletter.pdf";
// import NFVideo from "../../../../../src/Assets/files/SN-PediatricNF.mp4";
// import React, { useRef } from "react";

// const PDFModal = ({ isOpen, onClose, pdfUrl }) => {
//   if (!isOpen) return null

//   return (
//     <div className={styles.modalOverlay}>
//       <div className={styles.modalContent}>
//         <button className={`${styles.closeButton} SN-D-T-M-P-14`} onClick={onClose}>
//           ×
//         </button>
//         <iframe src={pdfUrl} className={styles.pdfFrame} title="Newsletter PDF" allowFullScreen />
//       </div>
//     </div>
//   )
// }

// const ExitConfirmationModal = ({ isOpen, onClose, onConfirm, link }) => {
//   if (!isOpen) return null

//   return (
//     <div className={styles.modalOverlay}>
//       <div className={styles.confirmationModal}>
//         <p className="SN-D-T-M-P-16">You are about to leave the website. Do you want to continue?</p>
//         <div className={styles.modalButtons}>
//           <button className={`${styles.confirmButton} SN-D-T-M-B-16`} onClick={() => onConfirm(link)}>
//             Continue
//           </button>
//           <button className={`${styles.cancelButton} SN-D-T-M-B-16`} onClick={onClose}>
//             Cancel
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// const EventCards = () => {
//   const [modalOpen, setModalOpen] = useState(false)
//   const [selectedPdf, setSelectedPdf] = useState("")
//   const [exitModalOpen, setExitModalOpen] = useState(false)
//   const [selectedLink, setSelectedLink] = useState("")

//   const events = [
//     {
//       title: "Monthly Highlights",
//       date: "Last Updated | June 28, 2025",
//       time: "",
//       newsletterimg: monthlyHighlightImage,
//       link: maynewsletterPDF,
//       status: "NEWSLETTER",
//       btnText: "View Newsletter",
//     },
//     {
//       title: "iHealth360 Hub: Financial and Clinical Benefits",
//       date: "Last Updated | July 1, 2025",
//       image: ihealth360hubimage,
//       link: ihealth360hubfile,
//       status: "PLAYLIST",
//       btnText: "View iHealth360 Hub Model",
//     },
//     {
//       title: "Facts About Neurofibromatosis (NF)",
//       date: "Last Updated | March 31, 2025",
//       image: imageTwo,
//       link: "https://www.youtube.com/playlist?list=PLWRClAjMOjXgo6m6vrypqWbwwCcVb1NEu",
//       status: "PLAYLIST",
//       btnText: "View Playlist",
//     },
//   ]


// const handleLinkClick = (e, link) => {
//   e.preventDefault()
//   setSelectedLink(link)
//   setExitModalOpen(true)
// }

// const handleConfirmExit = (link) => {
//   window.open(link, '_blank')
//   setExitModalOpen(false)
// }
// const videoRef = useRef(null);
//   const [showVideo, setShowVideo] = useState(false);
//   const handlePlay = () => {
//     setShowVideo(true);
//     setTimeout(() => {
//       videoRef.current?.play();
//     }, 100);
//   };
// const renderMedia = (event) => {
//   if (event.status === "NEWSLETTER") {
//     return (
//       <Link to={event.link} target="_blank" onClick={(e) => handleLinkClick(e, event.link)}>
//         <img src={event.newsletterimg || "/placeholder.svg"} alt={event.title} className={styles.eventBackground} />
//       </Link>
//     )
//   }
//   else if (event.status === "VIDEO") {
//     return (
//       !showVideo ? (
//         <img
//           src={event.newsletterimg}
//           alt={event.title} className={styles.eventBackground}
//           onClick={handlePlay}
//         />
//       ) : (
//         <video ref={videoRef} width="400" controls>
//           <source src={NFVideo} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       ))
//   }
//   else {
//       return (
//         <Link to={event.link} target="_blank" onClick={(e) => handleLinkClick(e, event.link)}>
//           <img src={event.image || "/placeholder.svg"} alt={event.title} className={styles.eventBackground} />
//         </Link>
//       )
//   }

// }

//   return (
//     <div className={styles.container}>
//       <div className={styles.eventsWrapper}>
//         {events.map((event, index) => (
//           <div key={index} className={styles.eventCard}>
//             <div className={styles.cardContent}>
//               <div className={styles.imageContainer}>
//                 {renderMedia(event)}
//               </div>
//               <div className={styles.eventInfo}>
//                 <h3 className={`${styles.eventTitle} SN-D-Home-H3-24`}>{event.title}</h3>
//                 <p className={`${styles.eventDateTime} SN-D-T-M-Home-P-14`}>
//                   <span className={styles.eventDate}>{event.date}</span>
//                   <span className={styles.eventTime}>{event.time}</span>
//                 </p>
//                 {event.status === "NEWSLETTER" ? (
//                   <Link
//                     to={event.link}
//                     target="_blank"
//                     className={`${styles.registerBtn} SN-D-T-M-Home-B-16`}
//                     onClick={(e) => handleLinkClick(e, event.link)}
//                   >
//                     {event.btnText}
//                   </Link>
//                 ) : event.status === "VIDEO" ? (
//                   <Link
//                     to={event.link}
//                     target="_blank"
//                     className={`${styles.registerBtn} SN-D-T-M-Home-B-16`}
//                     onClick={(e) => handleLinkClick(e, event.link)}
//                   >
//                     {event.btnText}
//                   </Link>
//                 ) : (
//                   <Link
//                   to={event.link}
//                   target="_blank"
//                   className={`${styles.registerBtn} SN-D-T-M-Home-B-16`}
//                   onClick={(e) => handleLinkClick(e, event.link)}
//                 >
//                   {event.btnText}
//                 </Link>
//                 )}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       <PDFModal isOpen={modalOpen} onClose={() => setModalOpen(false)} pdfUrl={selectedPdf} />
//       <ExitConfirmationModal
//         isOpen={exitModalOpen}
//         onClose={() => setExitModalOpen(false)}
//         onConfirm={handleConfirmExit}
//         link={selectedLink}
//       />
//     </div>
//   )
// }

// export default EventCards



//   Three Row  Initial Event Card Component 

































//  Initial Event Card Component 




// import { useState } from "react"
// import { Link } from "react-router-dom"
// import styles from "./index.module.css"
// import imageTwo from "../../../../../src/Assets/Images/eventimagetwo.jpg"
// import imageOne from "../../../../../src/Assets/Images/February2025NEWLETTERIMAGE.jpg"
// import newsletterPDF from "../../../../../src/Assets/files/march2025newsletter.pdf"

// const PDFModal = ({ isOpen, onClose, pdfUrl }) => {
//   if (!isOpen) return null

//   return (
//     <div className={styles.modalOverlay}>
//       <div className={styles.modalContent}>
//         <button className={styles.closeButton} onClick={onClose}>
//           ×
//         </button>
//         <iframe src={pdfUrl} className={styles.pdfFrame} title="Newsletter PDF" allowFullScreen />
//       </div>
//     </div>
//   )
// }

// const EventCards = () => {
//   const [modalOpen, setModalOpen] = useState(false)
//   const [selectedPdf, setSelectedPdf] = useState("")

//   const events = [
//     {
//       title: "Event : Navigating NF with  Confidence",
//       date: "25TH March, 2025",
//       time: "5PM ET",
//       image: imageTwo,
//       link: "https://forms.gle/5rkUz7XsYUvvdRPL7",
//       status: "UPCOMING EVENT",
//     },
//     {
//       title: "Newsletter:  Navigating NF with Confidence",
//       date: "February, 2025",
//       time: "VOL. 9",
//       image: newsletterPDF,
//       link: "https://lnkd.in/gpWRY_Yi",
//       status: "NEWSLETTER",
//     },
//   ]

//   const renderMedia = (event) => {
//     if (event.status === "NEWSLETTER") {
//       return <img src={imageOne || "/placeholder.svg"}
//       onClick={() => {
//         setSelectedPdf(event.image)
//         setModalOpen(true)
//       }}
//       alt={event.title} className={styles.eventBackground} />
//     } else {
//       return <Link to={event.link} target="_blank">
//      <img src={event.image || "/placeholder.svg"} alt={event.title} className={styles.eventBackground} /> </Link>
//     }
//   }

//   return (
//     <div className={styles.container}>
//       <div className={styles.eventsWrapper}>
//         {events.map((event, index) => (
//           <div key={index} className={styles.eventCard}>
//             <div className={styles.cardContent}>
//               <div className={styles.imageContainer}>
//                 {renderMedia(event)}
//                 <div className={styles.upcomingEventsHeader}>{event.status}</div>
//               </div>
//               <div className={styles.eventInfo}>
//                 <h3 className={styles.eventTitle}>{event.title}</h3>
//                 <p className={styles.eventDateTime}>
//                   <span className={styles.eventDate}>{event.date}</span> |
//                   <span className={styles.eventTime}>{event.time}</span>
//                 </p>
//                 {event.status === "NEWSLETTER" ? (
//                   <button
//                     onClick={() => {
//                       setSelectedPdf(event.image)
//                       setModalOpen(true)
//                     }}
//                     className={styles.registerBtn}
//                   >
//                     View Newsletter
//                   </button>
//                 ) : (
//                   <Link to={event.link} target="_blank" className={styles.registerBtn}>
//                     Register Now
//                   </Link>
//                 )}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       <PDFModal isOpen={modalOpen} onClose={() => setModalOpen(false)} pdfUrl={selectedPdf} />
//     </div>
//   )
// }

// export default EventCards





//  Initial Event Card Component 