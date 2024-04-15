import { useState, useEffect, useRef } from "react";

import "./index.css";

const PartnerTextCard = ({ partner }) => {
  const { heading, subheading, content, list } = partner;
  const [slideIn, setSlideIn] = useState(false);

  const slideInRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const slideInDiv = slideInRef.current;
      if (slideInDiv) {
        const rect = slideInDiv.getBoundingClientRect();
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;
        if (rect.top >= 0 && rect.top <= windowHeight) {
          setSlideIn(true);
        } else setSlideIn(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`partner-text-card ${slideIn ? "slide-in" : ""}`}
      ref={slideInRef}
    >
      <h3 className="partner-text-heading">{heading}</h3>
      <h2 className="partner-text-subheading">{subheading}</h2>
      {content &&
        content.map((text) => (
          <p key={text} className="partner-text">
            {text}
          </p>
        ))}
      {list &&
        list.map((item) => (
          <p key={item} className="partner-text partner-text-list">
            <span className="partner-text partner-text-span">&#10004; </span>
            {item}
          </p>
        ))}

      <a
        className="partner-link partner-text"
        onClick={() => {
          document.querySelector("#UnderConst-wrapper").style.display = "flex";
        }}
      >
        Get Started
      </a>
    </div>
  );
};

export default PartnerTextCard;
