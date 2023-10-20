import { useState, useRef, useEffect } from "react";

import "./index.css";

const BenefitCard = ({ benefit }) => {
  const divRef = useRef(null);

  useEffect(() => {
    const div = divRef.current;

    const handleScroll = () => {
      if (div) {
        const rect = div.getBoundingClientRect();
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;
        if (rect.top >= 0 && rect.bottom <= windowHeight) {
          if (!div.classList.contains("flip")) {
            div.classList.add("flip");
          }
        } else {
          div.classList.remove("flip");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      div.removeEventListener("mouseenter", () => {
        if (!div.classList.contains("flip")) {
          div.classList.add("flip");
        }
      });
      div.removeEventListener("mouseleave", () => {
        if (div.classList.contains("flip")) {
          div.classList.remove("flip");
        }
      });
    };
  }, []);

  useEffect(() => {
    const div = divRef.current;
    const handleHover = () => {
      if (!div.classList.contains("flip")) {
        div.classList.add("flip");
      } else div.classList.remove("flip");
    };
    div.addEventListener("mouseenter", handleHover);

    div.addEventListener("mouseleave", handleHover);
    return () => {
      div.removeEventListener("mouseenter", handleHover);
      div.removeEventListener("mouseleave", handleHover);
    };
  }, []);

  return (
    <div className={`benefit-card`}>
       <h3 className="benefit-card-heading SN-M-H3-20">{benefit.title}</h3>
      <div className="benefit-flipcard" ref={divRef}>
        <div className="benefit-flipcard-inner">
          <div className="benefit-flipcard-front">
            <img className="benefit-img" src={benefit.image}></img>
          </div>
          <div className="benefit-flipcard-back">
            <p className="benefit-flipcard-summary">{benefit.summary}</p>
            <ol className="benefit-flipcard-list">
              {benefit.details.map((detail) => (
                <li className="benefit-flipcard-listitem" key={detail}>
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
