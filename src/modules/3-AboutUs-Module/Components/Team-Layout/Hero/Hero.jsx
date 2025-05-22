import { useState, useRef, useEffect } from "react";
import image2 from "../../../Assets/Images/teamwork.png";
import "./Hero.css";
import { Link } from "react-router-dom";
import { BsPlus } from "react-icons/bs";
import { PiMinus } from "react-icons/pi";

const Hero = () => {
  const divRef = useRef(null);
  const divTwoRef = useRef(null);
  const [isVisible, setIsVisible] = useState({
    divRef: false,
    divTwoRef: false,
  });

  // State to track if full text is shown
  const [showFullText, setShowFullText] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      applyVisibleEffect(divRef, "divRef");
      applyVisibleEffect(divTwoRef, "divTwoRef");
    };

    const applyVisibleEffect = (div, key) => {
      if (div.current) {
        const rect = div.current.getBoundingClientRect();
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;

        if (rect.top <= windowHeight && rect.bottom >= 0) {
          setIsVisible((prevState) => ({
            ...prevState,
            [key]: true,
          }));
        } else {
          setIsVisible((prevState) => ({
            ...prevState,
            [key]: false,
          }));
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Full text
  const fullText = `Our organization deeply appreciates the unwavering dedication of our Volunteers, Advisors, and Board Members. 
    Their selfless contributions are indispensable in helping us fulfill our mission. Without their support, we would not be able 
    to make a difference and shape a better future for patients with complex diseases.

    Together, we are committed to bringing about positive change and improving the lives of those we serve. 
    We are grateful for their contributions and the collective impact we can achieve together.`;

  // Truncated text for mobile (first 90 characters)
  const truncatedText = fullText.slice(0, 90) + "...";

  return (
    <section id="HeroPager" className="Hero-page-tab">
      <div className="container">
        <div className="Hero-Header">
          <img className="Teamss-image-tab" src={image2} alt="" />
        </div>
      </div>

      <div className="tab-holder-tab">
        <div className="team-banner">
          <Link to="/job-openings" className="team-link D-H3-24">
            Join Our Team
          </Link>
        </div>

        <div className="text-tab-tab">
          <h2 className={`text-team D-H3-24 ${isVisible.divRef}`} ref={divRef}>
            Our team comprises dedicated individuals who bring diverse expertise
            and a shared commitment to our mission.
          </h2>
        </div>

        <div className="text-tab-tab">
          <div className="team-highlight-tab">
            <h3 className="team-highlight D-P-20" ref={divTwoRef}>
              {isMobile ? (showFullText ? fullText : truncatedText) : fullText}        
              {isMobile && (
              <button className="see-more-btn" onClick={() => setShowFullText(!showFullText)}>
                {showFullText ? "-" : "+"}
              </button>
            )}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
