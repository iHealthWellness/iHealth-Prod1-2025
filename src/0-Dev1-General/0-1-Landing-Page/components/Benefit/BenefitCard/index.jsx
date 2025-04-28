import React, { useState, useRef, useEffect } from "react";
import styles from "./index.module.css";

const BenefitCard = ({ benefit }) => {
  const divRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1200);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isMobile) {
      const slideInterval = setInterval(() => {
        setCurrentSlide((prev) => (prev === 1 ? 0 : prev + 1));
      }, 45000);

      return () => {
        clearInterval(slideInterval);
      };
    }
  }, [isMobile]);

  const handleSlide = () => {
    setCurrentSlide((prev) => (prev === 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const div = divRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting);
          
          if (!isMobile) {
            if (entry.isIntersecting) {
              div.classList.add(styles.flip);
            } else {
              div.classList.remove(styles.flip);
            }
          } else {
            // Handle mobile/tablet scroll behavior
            if (entry.isIntersecting) {
              setCurrentSlide(1); // Slide to content when scrolled into view
            } else {
              setCurrentSlide(0); // Reset to image when scrolled out of view
            }
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is visible
        rootMargin: '-10% 0px' // Slight offset to improve timing
      }
    );

    if (div) {
      observer.observe(div);
    }

    return () => {
      if (div) {
        observer.unobserve(div);
      }
    };
  }, [isMobile]);

  return (
    <div className={styles.benefitCard} onClick={handleSlide}>
      <div
        className={`${styles.benefitFlipcard} ${
          isMobile ? styles.mobileCarousel : styles.desktopFlip
        }`}
        ref={divRef}
      >
        <div>
          <h3 className={`${styles.benefitCardHeading} SN-D-Home-H2-32`}>
            {benefit.title}
          </h3>
        </div>
        <div
          className={`${styles.benefitFlipcardInner} ${
            isMobile ? styles.mobileCarouselInner : ""
          }`}
          style={
            isMobile ? { transform: `translateX(-${currentSlide * 101}%)` } : {}
          }
        >
          <div
            className={styles.benefitFlipcardFront}
            style={{ backgroundImage: `url(${benefit.image})` }}
          >
          </div>
          <div className={styles.benefitFlipcardBack}>
            <p className={`${styles.benefitFlipcardSummary} SN-D-Home-P-22`}>
              {benefit.summary}
            </p>
            <ol className={`${styles.benefitFlipcardList} SN-D-Home-P-22`}>
              {benefit.details.map((detail, index) => (
                <li className="SN-D-Home-P-22" key={index}>
                  {detail}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitCard;














// import React, { useState, useRef, useEffect } from "react";
// import styles from "./index.module.css";

// const BenefitCard = ({ benefit }) => {
//   const divRef = useRef(null);
//   const [isMobile, setIsMobile] = useState(false);
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isInView, setIsInView] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 1200);
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   useEffect(() => {
//     if (isMobile) {
//       const slideInterval = setInterval(() => {
//         setCurrentSlide((prev) => (prev === 1 ? 0 : prev + 1));
//       }, 6000);

//       return () => {
//         clearInterval(slideInterval);
//       };
//     }
//   }, [isMobile]);

//   const handleSlide = () => {
//     setCurrentSlide((prev) => (prev === 1 ? 0 : prev + 1));
//   };

//   useEffect(() => {
//     const div = divRef.current;

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           setIsInView(entry.isIntersecting);
          
//           if (!isMobile) {
//             if (entry.isIntersecting) {
//               div.classList.add(styles.flip);
//             } else {
//               div.classList.remove(styles.flip);
//             }
//           } else {
//             // Handle mobile/tablet scroll behavior
//             if (entry.isIntersecting) {
//               setCurrentSlide(1); // Slide to content when scrolled into view
//             } else {
//               setCurrentSlide(0); // Reset to image when scrolled out of view
//             }
//           }
//         });
//       },
//       {
//         threshold: 0.5, // Trigger when 50% of the element is visible
//         rootMargin: '-10% 0px' // Slight offset to improve timing
//       }
//     );

//     if (div) {
//       observer.observe(div);
//     }

//     return () => {
//       if (div) {
//         observer.unobserve(div);
//       }
//     };
//   }, [isMobile]);

//   return (
//     <div className={styles.benefitCard} onClick={handleSlide}>
//       <div
//         className={`${styles.benefitFlipcard} ${
//           isMobile ? styles.mobileCarousel : styles.desktopFlip
//         }`}
//         ref={divRef}
//       >
//         <div>
//           <h3 className={`${styles.benefitCardHeading} SN-D-Home-H2-32`}>
//             {benefit.title}
//           </h3>
//         </div>
//         <div
//           className={`${styles.benefitFlipcardInner} ${
//             isMobile ? styles.mobileCarouselInner : ""
//           }`}
//           style={
//             isMobile ? { transform: `translateX(-${currentSlide * 100}%)` } : {}
//           }
//         >
//           <div
//             className={styles.benefitFlipcardFront}
//             style={{ backgroundImage: `url(${benefit.image})` }}
//           >
//             {/* Background image applied dynamically */}
//           </div>
//           <div className={styles.benefitFlipcardBack}>
//             <p className={`${styles.benefitFlipcardSummary} SN-D-P-20`}>
//               {benefit.summary}
//             </p>
//             <ol className={`${styles.benefitFlipcardList} SN-D-P-20`}>
//               {benefit.details.map((detail, index) => (
//                 <li className="SN-D-P-20" key={index}>
//                   {detail}
//                 </li>
//               ))}
//             </ol>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BenefitCard;




